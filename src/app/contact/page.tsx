import { Metadata } from 'next';
import { getCurrentSiteSlug, getCurrentSiteId } from '@/lib/site-context';
import { getPageBySlug } from '@/lib/supabase';
import { generateCmsMetadata } from '@/lib/cms-html-page';
import CmsHtmlRenderer from '@/components/CmsHtmlRenderer';
import ContactFormClient from './ContactFormClient';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const siteSlug = await getCurrentSiteSlug();
  if (siteSlug === 'centre') {
    return generateCmsMetadata('contact');
  }
  return {};
}

export default async function ContactPage() {
  const siteSlug = await getCurrentSiteSlug();
  const siteId = await getCurrentSiteId();
  const page = await getPageBySlug('contact', siteId || undefined);

  // For non-centre sites, serve CMS content from the database
  if (siteSlug !== 'centre') {
    if (page?.content?.length === 1 && page.content[0].type === 'html') {
      return <CmsHtmlRenderer html={page.content[0].content || ''} />;
    }
    return null;
  }

  // Centre site: if the page has been rebuilt as a full-HTML Bloom page, use it
  if (page?.content?.length === 1 && page.content[0].type === 'html') {
    return <CmsHtmlRenderer html={page.content[0].content || ''} />;
  }

  // Otherwise fall back to the default contact form
  return <ContactFormClient />;
}
