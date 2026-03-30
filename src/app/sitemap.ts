import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { createClient } from '@/lib/supabase';

/**
 * Domain-aware dynamic sitemap.
 * Only includes URLs belonging to the site that matches the current request's
 * domain (via the x-site-slug header set by middleware). This prevents
 * "URL not allowed" errors in Google Search Console when each domain's
 * sitemap is submitted to its own Search Console property.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient();
  const headersList = await headers();
  const siteSlug = headersList.get('x-site-slug') || 'centre';

  // Resolve the current site's ID and canonical URL
  const { data: site } = await supabase
    .from('cms_sites')
    .select('id')
    .eq('slug', siteSlug)
    .single();

  if (!site) return [];

  const siteId = site.id;

  const { data: settings } = await supabase
    .from('cms_site_settings')
    .select('website_url')
    .eq('site_id', siteId)
    .single();

  const baseUrl = settings?.website_url || 'https://genesiscare.com.my';

  // Get published pages for this site only
  const { data: pages } = await supabase
    .from('cms_pages')
    .select('slug, updated_at')
    .eq('status', 'published')
    .eq('site_id', siteId)
    .order('sort_order', { ascending: true });

  // Get published posts for this site only
  const { data: posts } = await supabase
    .from('cms_posts')
    .select('slug, updated_at')
    .eq('status', 'published')
    .eq('site_id', siteId)
    .order('published_at', { ascending: false });

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages || []) {
    const url =
      page.slug === 'home'
        ? baseUrl
        : `${baseUrl}/${page.slug}`;

    entries.push({
      url,
      lastModified: new Date(page.updated_at),
      changeFrequency: page.slug === 'home' ? 'daily' : 'weekly',
      priority: page.slug === 'home' ? 1.0 : 0.8,
    });
  }

  for (const post of posts || []) {
    entries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return entries;
}
