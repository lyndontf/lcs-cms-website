import { cache } from 'react';
import { headers } from 'next/headers';
import { createClient } from './supabase';

export async function getCurrentSiteSlug(): Promise<string> {
  const headersList = await headers();
  return headersList.get('x-site-slug') || 'centre';
}

// cache()-wrapped: layout.tsx and every page under [...slugPath] independently
// resolve the current site id from the same request headers — this was firing
// as a fresh Supabase round trip up to 5x per request before dedup.
export const getCurrentSiteId = cache(async function getCurrentSiteId(): Promise<string> {
  const slug = await getCurrentSiteSlug();
  const supabase = createClient();
  const { data } = await supabase
    .from('cms_sites')
    .select('id')
    .eq('slug', slug)
    .single();
  return data?.id || '';
});

/** Returns the canonical base URL for the current site (e.g. "https://gtacademy.com.my") */
export const getCurrentSiteBaseUrl = cache(async function getCurrentSiteBaseUrl(): Promise<string> {
  const siteId = await getCurrentSiteId();
  if (!siteId) return 'https://genesiscare.com.my';
  const supabase = createClient();
  const { data: settings } = await supabase
    .from('cms_site_settings')
    .select('website_url')
    .eq('site_id', siteId)
    .single();
  return settings?.website_url || 'https://genesiscare.com.my';
});
