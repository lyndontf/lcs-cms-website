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
