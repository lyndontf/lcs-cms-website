import { MetadataRoute } from 'next';
import { createClient } from '@/lib/supabase';

/**
 * Dynamic sitemap generation.
 * Generates entries for all published pages and blog posts across all sites.
 * Each entry uses the site's canonical domain (from cms_site_settings.website_url).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient();

  // Get site settings with website URLs
  const { data: siteSettings } = await supabase
    .from('cms_site_settings')
    .select('site_id, website_url');

  const settingsMap = new Map(
    (siteSettings || []).map((s: { site_id: string; website_url: string }) => [s.site_id, s.website_url])
  );

  // Get all published pages
  const { data: pages } = await supabase
    .from('cms_pages')
    .select('slug, site_id, updated_at')
    .eq('status', 'published')
    .order('sort_order', { ascending: true });

  // Get all published posts
  const { data: posts } = await supabase
    .from('cms_posts')
    .select('slug, site_id, updated_at')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages || []) {
    const baseUrl = settingsMap.get(page.site_id);
    if (!baseUrl) continue;

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
    const baseUrl = settingsMap.get(post.site_id);
    if (!baseUrl) continue;

    entries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return entries;
}
