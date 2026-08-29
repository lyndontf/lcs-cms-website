import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/supabase';
import { getCurrentSiteId, getCurrentSiteSlug, getCurrentSiteBaseUrl } from '@/lib/site-context';
import CmsContentPage from '@/components/CmsContentPage';

// Real, crawlable /zh/<slug> URLs for CMS-driven centre pages (e.g.
// old-folks-home-in-klang, old-folks-home-in-puchong) — these are NOT the
// hardcoded /app/<slug>/page.tsx pages (which each get their own /app/zh/<slug>
// route reusing a shared content component); they're rows in cms_pages, and
// their Chinese text lives in that same row's content_zh column (see
// src/app/[...slugPath]/page.tsx's comment for why there's no separate
// zh-locale row). CmsContentPage already derives both languages from one
// `page` object — reusing it here means the toggle still works after landing
// on this URL, it just starts on 'zh' instead of 'en' (root layout forces
// that for any /zh/* path — see isZhRoute in src/app/layout.tsx).
//
// Only single-segment slugs are supported (matches every current use case);
// deeper paths notFound() rather than guessing.

interface PageProps {
  params: Promise<{ slugPath: string[] }>;
}

async function resolvePage(slugPath: string[] | undefined) {
  const segments = slugPath || [];
  if (segments.length !== 1) return null;

  const siteSlug = await getCurrentSiteSlug();
  if (siteSlug !== 'centre') return null;

  const siteId = await getCurrentSiteId();
  const page = await getPageBySlug(segments[0], siteId || undefined, 'en');
  if (!page || !page.content_zh) return null; // no real translation — don't fake a zh URL

  return page;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slugPath } = await params;
  const page = await resolvePage(slugPath);
  if (!page) return { title: 'Page Not Found' };

  const baseUrl = await getCurrentSiteBaseUrl();
  const slug = slugPath[0];

  const headingZh = page.content_zh?.find((b: any) => b.type === 'heading' && (b.level === 1 || !b.level));
  const paragraphZh = page.content_zh?.find((b: any) => b.type === 'paragraph');
  const title = headingZh?.content || headingZh?.text || page.meta_title || page.title;
  const description = paragraphZh?.content || paragraphZh?.text || page.meta_description || undefined;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/zh/${slug}`,
      languages: {
        en: `${baseUrl}/${slug}`,
        zh: `${baseUrl}/zh/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/zh/${slug}`,
      images: page.featured_image_url ? [{ url: page.featured_image_url, width: 1200, height: 630, alt: title }] : undefined,
      type: 'website',
    },
  };
}

// force-dynamic (not ISR): this route resolves the current site via headers()
// (getCurrentSiteSlug), a per-request dynamic API. A revalidate window here
// previously caused DYNAMIC_SERVER_USAGE crashes surfaced as Search-Console
// 5xx errors on paths outside generateStaticParams — see
// src/app/[...slugPath]/page.tsx for the same fix applied there.
export const dynamic = 'force-dynamic';

export default async function ZhDynamicPage({ params }: PageProps) {
  const { slugPath } = await params;
  const page = await resolvePage(slugPath);
  if (!page) notFound();

  return <CmsContentPage page={page} />;
}
