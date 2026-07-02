import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LayoutWrapper from '@/components/LayoutWrapper';
import TrackingScript from '@/components/TrackingScript';
import Script from 'next/script';
import { getMenus, getSiteSettings } from '@/lib/supabase';
import { getCurrentSiteId, getCurrentSiteSlug, getCurrentSiteBaseUrl } from '@/lib/site-context';

export const revalidate = 30;

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const [siteId, siteSlug] = await Promise.all([getCurrentSiteId(), getCurrentSiteSlug()]);
  const settings = await getSiteSettings(siteId || undefined);
  const defaults = settings?.seo_defaults || {};

  // Reciprocal en/zh hreflang for the centre site only (it is the only site with a /zh edition).
  // ZH route files set no per-page `alternates`, so these layout-level values apply to them and
  // provide the ZH->EN return tags that were previously missing. EN pages set their own
  // `alternates`, which override these — so EN behaviour is unchanged.
  let alternates: Metadata['alternates'] | undefined = undefined;
  if (siteSlug === 'centre') {
    const baseUrl = await getCurrentSiteBaseUrl();
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || headersList.get('x-invoke-path') || '';
    if (pathname) {
      const isZh = pathname === '/zh' || pathname.startsWith('/zh/');
      const enPath = isZh ? (pathname.replace(/^\/zh/, '') || '/') : pathname;
      const zhPath = isZh ? pathname : (pathname === '/' ? '/zh' : '/zh' + pathname);
      const enUrl = baseUrl + (enPath === '/' ? '' : enPath);
      const zhUrl = baseUrl + zhPath;
      alternates = {
        canonical: baseUrl + (pathname === '/' ? '' : pathname),
        languages: { en: enUrl, 'zh-Hans': zhUrl, 'x-default': enUrl },
      };
    }
  }

  return {
    title: {
      default: settings?.site_name || 'Genesis Life Care',
      template: `%s | ${settings?.site_name || 'Genesis Life Care'}`,
    },
    description: defaults.default_description || 'Quality healthcare and aged care services in Malaysia',
    icons: settings?.favicon_url ? [{ url: settings.favicon_url }] : undefined,
    alternates,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [siteId, siteSlug] = await Promise.all([getCurrentSiteId(), getCurrentSiteSlug()]);
  const sid = siteId || undefined;
  const isCmsSite = siteSlug !== 'centre';
  const [settings, menus] = await Promise.all([getSiteSettings(sid), getMenus(sid)]);
  const headerMenu = menus.find((m) => m.location === 'header');
  const footerMenu = menus.find((m) => m.location === 'footer');

  // Detect zh/ path — zh/layout.tsx provides its own Mandarin header/footer
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || headersList.get('x-invoke-path') || headersList.get('x-nextjs-page') || '';
  const isZh = pathname.startsWith('/zh');
  // Agency-branded pages render their own GlcHireNav — suppress the site
  // header so visitors don't see two stacked menu bars.
  const isAgencyPage = pathname === '/for-workers' || pathname.startsWith('/for-workers/')
      || pathname === '/biodata' || pathname.startsWith('/biodata/');

  return (
    <html lang={isZh ? 'zh-Hans' : 'en'} suppressHydrationWarning>
      <head suppressHydrationWarning>
        {/* custom_head_html is injected from <body> below — placing this inline script in <head> via the App Router renders it as visible text */}
        {settings?.google_analytics_id && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${settings.google_analytics_id}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${settings.google_analytics_id}');${settings.google_ads_id ? `gtag('config','${settings.google_ads_id}');gtag('config','AW-837607499');` : ''}`,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {!isCmsSite && !isZh && !isAgencyPage && <Header settings={settings} menuItems={headerMenu?.items || []} />}
        <LayoutWrapper
          isCmsSite={isCmsSite}
          isZh={isZh}
          // Agency-branded pages render their own GLC Hire footer — suppress
          // the site footer so visitors don't see two stacked footers.
          footer={isAgencyPage ? <></> : <Footer settings={settings} menuItems={footerMenu?.items || headerMenu?.items || []} />}
        >
          {children}
        </LayoutWrapper>
        <TrackingScript />
        {settings?.custom_head_html && (
          <Script
            id="custom-head-inject"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(){document.head.querySelectorAll('[data-custom-head]').forEach(function(e){e.remove()});var t=document.createElement('template');t.innerHTML=${JSON.stringify(settings.custom_head_html)};Array.from(t.content.children).forEach(function(el){el.setAttribute('data-custom-head','');document.head.appendChild(el)});})();`,
            }}
          />
        )}
        {!isCmsSite && (
          <a
            href="https://wa.me/60193250457"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp us"
            className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 transition-transform"
          >
            <svg viewBox="0 0 32 32" className="w-8 h-8" fill="#fff" aria-hidden="true">
              <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.23 1.62h.01c7.06 0 12.8-5.74 12.8-12.8s-5.75-12.7-12.81-12.7zm0 23.05h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.39a10.56 10.56 0 0 1-1.62-5.64c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 0 1 3.11 7.52c0 5.87-4.77 10.64-10.63 10.64zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.76.75.32 1.34.51 1.8.66.76.24 1.44.21 1.98.13.6-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37z"/>
            </svg>
          </a>
        )}
        {settings?.google_ads_id && (
          <Script
            id="wa-conversion"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(){document.addEventListener('click',function(e){var a=e.target;while(a&&a.tagName!=='A')a=a.parentElement;if(!a)return;var h=a.href||'';if(h.indexOf('wa.me')!==-1||h.indexOf('api.whatsapp.com')!==-1){if(typeof gtag==='function'){gtag('event','conversion',{'send_to':'AW-837607499/slQQCOGn7ZscEMvAs48D','value':1.0,'currency':'MYR'});}}});})();`,
            }}
          />
        )}
        {settings?.custom_css && (
          <style dangerouslySetInnerHTML={{ __html: settings.custom_css }} />
        )}
      </body>
    </html>
  );
}