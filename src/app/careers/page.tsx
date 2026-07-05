import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/supabase';
import { getCurrentSiteId } from '@/lib/site-context';
import { generateCmsMetadata } from '@/lib/cms-html-page';
import CmsHtmlRenderer from '@/components/CmsHtmlRenderer';
import JobListingsEmbed from '@/components/JobListingsEmbed';

const SLUG = 'careers';
const JOB_LISTINGS_MARKER = '<!--JOB_LISTINGS_SLOT-->';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return generateCmsMetadata(SLUG);
}

export default async function CareersPage() {
  const siteId = await getCurrentSiteId();
  const page = await getPageBySlug(SLUG, siteId || undefined);
  if (!page || page.content?.length !== 1 || page.content[0].type !== 'html') {
    notFound();
  }

  const html = page.content[0].content || '';
  const markerIndex = html.indexOf(JOB_LISTINGS_MARKER);

  if (markerIndex === -1) {
    return <CmsHtmlRenderer html={html} />;
  }

  const before = html.slice(0, markerIndex);
  const after = html.slice(markerIndex + JOB_LISTINGS_MARKER.length);

  return (
    <div className="cms-html-page">
      <CmsHtmlRenderer html={before} />
      <div className="glc-container" style={{ paddingBottom: 44 }}>
        <JobListingsEmbed />
      </div>
      <CmsHtmlRenderer html={after} />
    </div>
  );
}
