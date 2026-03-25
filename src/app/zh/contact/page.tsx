import { getCurrentSiteSlug, getCurrentSiteId } from '@/lib/site-context';
import { getPageBySlug } from '@/lib/supabase';
import ContactFormClient from '../../contact/ContactFormClient';

export const revalidate = 60;

export default async function ContactPageZh() {
  const siteSlug = await getCurrentSiteSlug();

  // For non-centre sites, serve CMS content from the database
  if (siteSlug !== 'centre') {
    const siteId = await getCurrentSiteId();
    const page = await getPageBySlug('contact', siteId || undefined);
    if (page?.content?.length === 1 && page.content[0].type === 'html') {
      return (
        <div
          className="cms-html-page"
          dangerouslySetInnerHTML={{ __html: page.content[0].content || '' }}
        />
      );
    }
  }

  // Centre site: render the default contact form
  return <ContactFormClient />;
}
