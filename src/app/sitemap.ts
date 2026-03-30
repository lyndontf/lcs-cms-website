import { MetadataRoute } from 'next';
import { getPublishedPages, getPublishedPosts } from '@/lib/supabase';
import { getCurrentSiteId, getCurrentSiteBaseUrl, getCurrentSiteSlug } from '@/lib/site-context';

/**
 * Dynamic sitemap generation — domain-aware.
 * Returns only the pages/posts belonging to the current site (based on the
 * request domain → x-site-slug header set by middleware).
 *
 * For the "centre" site (genesiscare.com.my), static hardcoded location/service
 * pages are also included since they are not stored in the CMS.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [siteId, baseUrl, siteSlug] = await Promise.all([
    getCurrentSiteId(),
    getCurrentSiteBaseUrl(),
    getCurrentSiteSlug(),
  ]);

  const sid = siteId || undefined;
  const [pages, posts] = await Promise.all([
    getPublishedPages(sid),
    getPublishedPosts(sid),
  ]);

  const now = new Date().toISOString();
  const entries: MetadataRoute.Sitemap = [];

  // ── Home page ──
  const homePage = pages.find((p) => p.slug === 'home');
  entries.push({
    url: baseUrl,
    lastModified: homePage?.updated_at ? new Date(homePage.updated_at) : now,
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // ── CMS pages (excluding "home") ──
  for (const page of pages) {
    if (page.slug === 'home') continue;
    entries.push({
      url: `${baseUrl}/${page.slug}`,
      lastModified: page.updated_at ? new Date(page.updated_at) : now,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  // ── Blog listing (only if there are posts) ──
  if (posts.length > 0) {
    entries.push({
      url: `${baseUrl}/blog`,
      lastModified: posts[0]?.updated_at ? new Date(posts[0].updated_at) : now,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  }

  // ── Individual blog posts ──
  for (const post of posts) {
    entries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updated_at ? new Date(post.updated_at) : now,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // ── Static hardcoded pages (centre site only) ──
  if (siteSlug === 'centre') {
    const staticSlugs = [
      'about-us', 'our-services', 'our-locations', 'our-gallery', 'contact',
      // Nursing homes
      'nursing-home-in-petaling-jaya', 'nursing-home-in-klang', 'nursing-home-kajang',
      'nursing-home-in-puchong', 'nursing-home-in-johor-bahru',
      // Old folks homes
      'old-folks-home-in-klang', 'old-folks-home-in-petaling-jaya',
      'old-folks-home-in-puchong', 'old-folks-home-in-kajang', 'old-folks-home-in-johor-bahru',
      // Dementia care
      'dementia-care', 'dementia-care-in-kajang', 'dementia-care-in-klang',
      'dementia-care-in-petaling-jaya', 'dementia-care-in-puchong', 'dementia-care-in-johor-bahru',
      // Stroke rehabilitation
      'stroke-rehabilitation-centre', 'stroke-rehabilitation-in-kajang',
      'stroke-rehabilitation-in-klang', 'stroke-rehabilitation-in-petaling-jaya',
      'stroke-rehabilitation-in-puchong', 'stroke-rehabilitation-in-johor-bahru',
      // Elderly care
      'elderly-care-in-bangsar', 'elderly-care-in-bukit-jalil', 'elderly-care-in-cheras',
      'elderly-care-in-damansara', 'elderly-care-in-johor', 'elderly-care-in-selangor',
      'elderly-care-in-shah-alam', 'elderly-care-in-subang-jaya',
      // Other services
      'palliative-care-malaysia', 'post-op-care-malaysia', 'respite-care-in-malaysia',
    ];

    for (const slug of staticSlugs) {
      entries.push({
        url: `${baseUrl}/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: slug.startsWith('nursing-home') ? 0.9 : 0.8,
      });
    }

    // Mandarin (zh/) mirror pages
    const zhSlugs = [
      '', 'about-us', 'our-services', 'our-locations', 'our-gallery', 'contact',
      'nursing-home-in-petaling-jaya', 'nursing-home-in-klang', 'nursing-home-kajang',
      'nursing-home-in-puchong', 'nursing-home-in-johor-bahru',
      'dementia-care', 'dementia-care-in-kajang', 'dementia-care-in-klang',
      'dementia-care-in-petaling-jaya', 'dementia-care-in-puchong', 'dementia-care-in-johor-bahru',
      'stroke-rehabilitation-centre', 'stroke-rehabilitation-in-kajang',
      'stroke-rehabilitation-in-klang', 'stroke-rehabilitation-in-petaling-jaya',
      'stroke-rehabilitation-in-puchong', 'stroke-rehabilitation-in-johor-bahru',
      'elderly-care-in-bangsar', 'elderly-care-in-bukit-jalil', 'elderly-care-in-cheras',
      'elderly-care-in-damansara', 'elderly-care-in-johor', 'elderly-care-in-selangor',
      'elderly-care-in-shah-alam', 'elderly-care-in-subang-jaya',
      'palliative-care-malaysia', 'post-op-care-malaysia', 'respite-care-in-malaysia',
      'old-folks-home-in-klang', 'old-folks-home-in-petaling-jaya',
      'old-folks-home-in-puchong', 'old-folks-home-in-kajang', 'old-folks-home-in-johor-bahru',
    ];

    for (const slug of zhSlugs) {
      entries.push({
        url: `${baseUrl}/zh${slug ? `/${slug}` : ''}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return entries;
}
