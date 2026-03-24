import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LayoutWrapper from '@/components/LayoutWrapper';
import TrackingScript from '@/components/TrackingScript';
import { getMenus, getSiteSettings } from '@/lib/supabase';
import { getCurrentSiteId, getCurrentSiteSlug } from '@/lib/site-context';

export const revalidate = 30;

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const siteId = await getCurrentSiteId();
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
  const [settings, menus] = await Promise.all([getSiteSettings(sid), getMenus(sid)]);
  const headerMenu = menus.find((m) => m.location === 'header');
  const footerMenu = menus.find((m) => m.location === 'footer');

  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        {settings?.custom_head_html && (
          <meta name="custom-head" content="" suppressHydrationWarning />
        )}
        {settings?.custom_head_html && (
          <script
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: `document.head.querySelectorAll('[data-custom-head]').forEach(e=>e.remove());var t=document.createElement('template');t.innerHTML=${JSON.stringify(settings.custom_head_html)};Array.from(t.content.children).forEach(function(el){el.setAttribute('data-custom-head','');document.head.appendChild(el)});`,
            }}
          />
        )}
        {settings?.google_analytics_id && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${settings.google_analytics_id}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${settings.google_analytics_id}');`,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {!isCmsSite && <Header settings={settings} menuItems={headerMenu?.items || []} />}
        <LayoutWrapper
          isCmsSite={isCmsSite}
          footer={<Footer settings={settings} menuItems={footerMenu?.items || headerMenu?.items || []} />}
        >
          {children}
        </LayoutWrapper>
        <TrackingScript />
        {settings?.custom_css && (
          <style dangerouslySetInnerHTML={{ __html: settings.custom_css }} />
        )}
      </body>
    </html>
  );
}
