import { MetadataRoute } from 'next';
import { getCurrentSiteBaseUrl } from '@/lib/site-context';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = await getCurrentSiteBaseUrl();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/preview/', '/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
