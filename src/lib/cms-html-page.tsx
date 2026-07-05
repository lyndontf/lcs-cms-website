import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/supabase';
import { getCurrentSiteId, getCurrentSiteBaseUrl } from '@/lib/site-context';
import CmsHtmlRenderer from '@/components/CmsHtmlRenderer';

export async function generateCmsMetadata(slug: string): Promise<Metadata> {
  const [siteId, baseUrl] = await Promise.all([getCurrentSiteId(), getCurrentSiteBaseUrl()]);
  const page = await getPageBySlug(slug, siteId || undefined);
  if (!page) return {};
  return {
    title: { absolute: page.meta_title || page.title },
    description: page.meta_description || undefined,
    alternates: { canonical: `${baseUrl}/${slug}` },
  };
}

export async function CmsHtmlPage({ slug }: { slug: string }) {
  const siteId = await getCurrentSiteId();
  const page = await getPageBySlug(slug, siteId || undefined);
  if (!page || page.content?.length !== 1 || page.content[0].type !== 'html') {
    notFound();
  }
  return <CmsHtmlRenderer html={page.content[0].content || ''} />;
}
