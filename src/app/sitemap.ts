import { MetadataRoute } from 'next';
import { getPublishedPages, getPublishedPosts } from '@/lib/supabase';

const BASE_URL = 'https://genesiscare.com.my';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  /* ─── Static hardcoded pages ─── */
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/our-services`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/our-locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/our-gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];

  /* ─── Centre / location pages ─── */
  const centrePages: MetadataRoute.Sitemap = [
    'nursing-home-in-petaling-jaya',
    'nursing-home-in-klang',
    'nursing-home-kajang',
    'nursing-home-in-puchong',
    'nursing-home-in-johor-bahru',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  /* ─── Old folks home pages ─── */
  const oldFolksPages: MetadataRoute.Sitemap = [
    'old-folks-home-in-klang',
    'old-folks-home-in-petaling-jaya',
    'old-folks-home-in-puchong',
    'old-folks-home-in-kajang',
    'old-folks-home-in-johor-bahru',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  /* ─── Service pages ─── */
  const servicePages: MetadataRoute.Sitemap = [
    { slug: 'dementia-care', priority: 0.9 },
    { slug: 'dementia-care-in-kajang', priority: 0.8 },
    { slug: 'dementia-care-in-klang', priority: 0.8 },
    { slug: 'dementia-care-in-petaling-jaya', priority: 0.8 },
    { slug: 'dementia-care-in-puchong', priority: 0.8 },
    { slug: 'dementia-care-in-johor-bahru', priority: 0.8 },
    { slug: 'stroke-rehabilitation-centre', priority: 0.9 },
    { slug: 'stroke-rehabilitation-kajang', priority: 0.8 },
    { slug: 'stroke-rehabilitation-klang', priority: 0.8 },
    { slug: 'stroke-rehabilitation-petaling-jaya', priority: 0.8 },
    { slug: 'stroke-rehabilitation-puchong', priority: 0.8 },
    { slug: 'stroke-rehabilitation-johor-bahru', priority: 0.8 },
    { slug: 'elderly-care-in-selangor', priority: 0.9 },
    { slug: 'elderly-care-in-klang', priority: 0.8 },
    { slug: 'elderly-care-in-petaling-jaya', priority: 0.8 },
    { slug: 'elderly-care-in-puchong', priority: 0.8 },
    { slug: 'elderly-care-in-kajang', priority: 0.8 },
    { slug: 'elderly-care-in-johor-bahru', priority: 0.8 },
    { slug: 'elderly-care-in-kuala-lumpur', priority: 0.8 },
    { slug: 'elderly-care-in-shah-alam', priority: 0.8 },
    { slug: 'palliative-care-malaysia', priority: 0.9 },
    { slug: 'post-op-care-malaysia', priority: 0.9 },
    { slug: 'respite-care-in-malaysia', priority: 0.9 },
  ].map(({ slug, priority }) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority,
  }));

  /* ─── Mandarin (zh/) mirror pages ─── */
  const zhPages: MetadataRoute.Sitemap = [
    '',
    'about-us',
    'our-services',
    'our-locations',
    'our-gallery',
    'contact',
    'nursing-home-in-petaling-jaya',
    'nursing-home-in-klang',
    'nursing-home-kajang',
    'nursing-home-in-puchong',
    'nursing-home-in-johor-bahru',
    'dementia-care',
    'dementia-care-in-kajang',
    'dementia-care-in-klang',
    'dementia-care-in-petaling-jaya',
    'dementia-care-in-puchong',
    'dementia-care-in-johor-bahru',
    'stroke-rehabilitation-centre',
    'stroke-rehabilitation-kajang',
    'stroke-rehabilitation-klang',
    'stroke-rehabilitation-petaling-jaya',
    'stroke-rehabilitation-puchong',
    'stroke-rehabilitation-johor-bahru',
    'elderly-care-in-selangor',
    'elderly-care-in-klang',
    'elderly-care-in-petaling-jaya',
    'elderly-care-in-puchong',
    'elderly-care-in-kajang',
    'elderly-care-in-johor-bahru',
    'elderly-care-in-kuala-lumpur',
    'elderly-care-in-shah-alam',
    'palliative-care-malaysia',
    'post-op-care-malaysia',
    'respite-care-in-malaysia',
    'old-folks-home-in-klang',
    'old-folks-home-in-petaling-jaya',
    'old-folks-home-in-puchong',
    'old-folks-home-in-kajang',
    'old-folks-home-in-johor-bahru',
  ].map((slug) => ({
    url: `${BASE_URL}/zh${slug ? `/${slug}` : ''}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  /* ─── CMS dynamic pages ─── */
  let cmsPages: MetadataRoute.Sitemap = [];
  try {
    const pages = await getPublishedPages();
    cmsPages = pages
      .filter((p) => p.slug !== 'home')
      .map((p) => ({
        url: `${BASE_URL}/${p.slug}`,
        lastModified: p.published_at || p.updated_at || now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
  } catch {
    /* DB unavailable — skip dynamic pages */
  }

  /* ─── Blog posts ─── */
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPublishedPosts();
    blogPages = posts.map((p) => ({
      url: `${BASE_URL}/blog/${p.slug}`,
      lastModified: p.published_at || now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch {
    /* DB unavailable — skip blog posts */
  }

  return [
    ...staticPages,
    ...centrePages,
    ...oldFolksPages,
    ...servicePages,
    ...zhPages,
    ...cmsPages,
    ...blogPages,
  ];
}
