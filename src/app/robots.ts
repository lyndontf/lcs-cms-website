import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/lcs/', '/gta/', '/glc-hire/', '/project-deo/'],
      },
    ],
    sitemap: 'https://genesiscare.com.my/sitemap.xml',
  };
}
