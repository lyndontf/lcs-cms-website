import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { getCurrentSiteBaseUrl } from '@/lib/site-context';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = await getCurrentSiteBaseUrl();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/lcs/', '/gta/', '/glc-hire/', '/project-deo/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
