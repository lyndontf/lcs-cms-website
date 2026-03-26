import HeaderZh from '@/components/HeaderZh';
import FooterZh from '@/components/FooterZh';
import { getSiteSettings } from '@/lib/supabase';
import { getCurrentSiteId } from '@/lib/site-context';

export default async function ZhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteId = await getCurrentSiteId();
  const settings = await getSiteSettings(siteId || undefined);

  return (
    <>
      <HeaderZh settings={settings} />
      {children}
      <FooterZh settings={settings} />
    </>
  );
}
