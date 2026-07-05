import type { Metadata } from 'next';
import { Inter, Hanken_Grotesk } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import LayoutWrapper from '@/components/LayoutWrapper';
import TrackingScript from '@/components/TrackingScript';
import Script from 'next/script';
import { centreNavEN } from '@/lib/nav';
import { getSiteSettings, getPageBySlug } from '@/lib/supabase';
import { getCurrentSiteId, getCurrentSiteSlug } from '@/lib/site-context';

// A centre page that has been rebuilt as a single self-contained HTML block
// (own header/footer, Bloom rebrand) embeds its own chrome — the shared
// Header/Footer/WhatsApp widget below must not double up around it.
async function isFullHtmlOverride(siteId: string | undefined, siteSlug: string, pathname: string) {
  if (siteSlug !== 'centre') return false;
  const slug = pathname === '/' || pathname === '' ? 'home' : pathname.replace(/^\/+/, '');
  if (!slug) return false;
  const page = await getPageBySlug(slug, siteId);
  return !!(page && page.content?.length === 1 && page.content[0].type === 'html');
}

export const revalidate = 30;

const inter = Inter({ subsets: ['latin'] });
const hanken = Hanken_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export async function generateMetadata(): Promise<Metadata> {
  const [siteId] = await Promise.all([getCurrentSiteId(), getCurrentSiteSlug()]);
  const settings = await getSiteSettings(siteId || undefined);
  const defaults = settings?.seo_defaults || {};

  return {
    title: {
      default: settings?.site_name || 'Genesis Life Care',
      template: `%s | ${settings?.site_name || 'Genesis Life Care'}`,
    },
    description: defaults.default_description || 'Quality healthcare and aged care services in Malaysia',
    icons: settings?.favicon_url ? [{ url: settings.favicon_url }] : undefined,
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
  const settings = await getSiteSettings(sid);

  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || headersList.get('x-invoke-path') || headersList.get('x-nextjs-page') || '';
  // Agency-branded pages render their own GlcHireNav — suppress the site
  // header so visitors don't see two stacked menu bars.
  const isAgencyPage = pathname === '/for-workers' || pathname.startsWith('/for-workers/')
      || pathname === '/biodata' || pathname.startsWith('/biodata/');
  const isFullHtmlPage = !isAgencyPage && (await isFullHtmlOverride(sid, siteSlug, pathname));
  // Header/Footer/WhatsApp widget below use the Bloom rebrand (Hanken Grotesk,
  // glc-* palette) — only the centre site's own-chrome pages get it.
  const isBloom = !isCmsSite && !isAgencyPage && !isFullHtmlPage;

  return (
    <html lang="en" suppressHydrationWarning>
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
      <body className={`${isFullHtmlPage ? '' : isBloom ? hanken.className : inter.className} flex flex-col min-h-screen`}>
        {!isCmsSite && !isAgencyPage && !isFullHtmlPage && <Header settings={settings} menuItems={centreNavEN} />}
        <LayoutWrapper
          isCmsSite={isCmsSite}
          isFullHtmlPage={isFullHtmlPage}
          // Agency-branded pages render their own GLC Hire footer — suppress
          // the site footer so visitors don't see two stacked footers.
          footer={isAgencyPage ? <></> : <Footer settings={settings} />}
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
        {!isCmsSite && !isFullHtmlPage && (
          <WhatsAppWidget phone={(settings?.contact_phone || '60193250457').replace(/[^\d]/g, '')} />
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
        {settings?.custom_css && !isFullHtmlPage && !isBloom && (
          <style dangerouslySetInnerHTML={{ __html: settings.custom_css }} />
        )}
      </body>
    </html>
  );
}