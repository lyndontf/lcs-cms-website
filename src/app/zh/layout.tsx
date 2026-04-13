import HeaderZh from '@/components/HeaderZh';
import FooterZh from '@/components/FooterZh';
import { getSiteSettings } from '@/lib/supabase';
import { getCurrentSiteId, getCurrentSiteSlug } from '@/lib/site-context';
import { headers } from 'next/headers';

// Force dynamic rendering so headers() always returns real request headers
// (prevents the layout from being statically cached with wrong site context)
export const dynamic = 'force-dynamic';

export default async function ZhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Triple check: middleware request header + host + x-forwarded-host
  // Middleware now sets x-site-slug on the REQUEST (not just response), so
  // headers() reliably reads it. On Vercel, the internal 'host' can differ
  // from the public domain, so x-forwarded-host is the reliable domain fallback.
  const headersList = await headers();
  const siteSlugFromHeader = headersList.get('x-site-slug') || '';
  const host = headersList.get('host') || '';
  const forwardedHost = headersList.get('x-forwarded-host') || '';
  const effectiveHost = forwardedHost || host;
  const isCmsSite =
    (siteSlugFromHeader !== '' && siteSlugFromHeader !== 'centre') ||
    effectiveHost.includes('agency.') ||
    effectiveHost.includes('lifecaresystems') ||
    effectiveHost.includes('gtacademy') ||
    effectiveHost.includes('projectdeo') ||
    effectiveHost.includes('glchire');

  if (isCmsSite) {
    // CMS sites embed their own nav/footer in the raw page HTML
    return <>{children}</>;
  }

  const [siteId] = await Promise.all([getCurrentSiteId()]);
  const settings = await getSiteSettings(siteId || undefined);

  return (
    <>
      <HeaderZh settings={settings} />
      {children}
      <FooterZh settings={settings} />
    </>
  );
}
