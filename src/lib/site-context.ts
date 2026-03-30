import { headers } from 'next/headers';
import { createClient } from './supabase';

export async function getCurrentSiteSlug(): Promise<string> {
  const headersList = await headers();
  return headersList.get('x-site-slug') || 'centre';
}

export async function getCurrentSiteId(): Promise<string> {
  const slug = await getCurrentSiteSlug();
  const supabase = createClient();
  const { data } = await supabase
    .from('cms_sites')
    .select('id')
    .eq('slug', slug)
    .single();
  return data?.id || '';
}

/** Returns the canonical base URL for the current site (e.g. "https://gtacademy.com.my") */
export async function getCurrentSiteBaseUrl(): Promise<string> {
  const siteId = await getCurrentSiteId();
  if (!siteId) return 'https://genesiscare.com.my';
  const supabase = createClient();
  const { data: settings } = await supabase
    .from('cms_site_settings')
    .select('website_url')
    .eq('site_id', siteId)
    .single();
  return settings?.website_url || 'https://genesiscare.com.my';
}
