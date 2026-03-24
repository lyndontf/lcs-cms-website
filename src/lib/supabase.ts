import { createClient as createSupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey);

export function createClient() {
  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}

// ─── Content Types ───

export interface ContentBlock {
  type: 'heading' | 'paragraph' | 'image' | 'list' | 'quote' | 'html' | 'divider' | 'cta' | 'job_listings';
  content?: string;
  text?: string;
  level?: number;
  src?: string;
  alt?: string;
  caption?: string;
  ordered?: boolean;
  items?: string[];
  label?: string;
  url?: string;
}

export interface CmsPage {
  id: string;
  centre_id: string;
  slug: string;
  title: string;
  meta_title: string | null;
  meta_description: string | null;
  content: ContentBlock[];
  featured_image_url: string | null;
  status: 'draft' | 'published' | 'archived';
  template: string;
  parent_id: string | null;
  sort_order: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface CmsPost {
  id: string;
  centre_id: string;
  slug: string;
  title: string;
  meta_title: string | null;
  meta_description: string | null;
  excerpt: string | null;
  content: ContentBlock[];
  featured_image_url: string | null;
  category: string | null;
  tags: string[] | null;
  status: 'draft' | 'published' | 'archived';
  template: string | null;
  author_name: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface CmsMenu {
  id: string;
  centre_id: string;
  location: string;
  items: MenuItem[];
}

export interface MenuItem {
  label: string;
  url: string;
  type: 'page' | 'post' | 'external' | 'section';
  page_id?: string;
  children?: MenuItem[];
}

export interface SiteSettings {
  site_name: string;
  tagline: string | null;
  logo_url: string | null;
  favicon_url: string | null;
  primary_color: string;
  secondary_color: string;
  contact_phone: string | null;
  contact_email: string | null;
  contact_address: string | null;
  social_links: Record<string, string>;
  footer_text: string | null;
  google_analytics_id: string | null;
  custom_css: string | null;
  custom_head_html: string | null;
  seo_defaults: Record<string, string>;
}

// ─── Site Lookup ───

export async function getSiteBySlug(slug: string) {
  const { data } = await supabase
    .from('cms_sites')
    .select('id, slug, name, domain, is_app_level')
    .eq('slug', slug)
    .limit(1)
    .single();
  return data;
}

// ─── Data Fetching ───

export async function getPublishedPages(siteId?: string): Promise<CmsPage[]> {
  let query = supabase
    .from('cms_pages')
    .select('*')
    .eq('status', 'published');
  if (siteId) query = query.eq('site_id', siteId);
  const { data } = await query.order('sort_order', { ascending: true });
  return (data || []) as CmsPage[];
}

export async function getPageBySlug(slug: string, siteId?: string): Promise<CmsPage | null> {
  let query = supabase
    .from('cms_pages')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published');
  if (siteId) query = query.eq('site_id', siteId);
  const { data } = await query.limit(1).single();
  return data as CmsPage | null;
}

export async function getPublishedPosts(siteId?: string): Promise<CmsPost[]> {
  let query = supabase
    .from('cms_posts')
    .select('*')
    .eq('status', 'published');
  if (siteId) query = query.eq('site_id', siteId);
  const { data } = await query.order('published_at', { ascending: false });
  return (data || []) as CmsPost[];
}

export async function getPostBySlug(slug: string, siteId?: string): Promise<CmsPost | null> {
  let query = supabase
    .from('cms_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published');
  if (siteId) query = query.eq('site_id', siteId);
  const { data } = await query.limit(1).single();
  return data as CmsPost | null;
}

export async function getMenus(siteId?: string): Promise<CmsMenu[]> {
  let query = supabase
    .from('cms_menus')
    .select('*');
  if (siteId) query = query.eq('site_id', siteId);
  const { data } = await query;
  return (data || []) as CmsMenu[];
}

export async function getSiteSettings(siteId?: string): Promise<SiteSettings | null> {
  let query = supabase
    .from('cms_site_settings')
    .select('*');
  if (siteId) query = query.eq('site_id', siteId);
  const { data } = await query.limit(1).single();
  return data as SiteSettings | null;
}

// ─── Draft Preview (by ID, any status) ───

export async function getPageById(id: string): Promise<CmsPage | null> {
  const { data } = await supabase
    .from('cms_pages')
    .select('*')
    .eq('id', id)
    .limit(1)
    .single();
  return data as CmsPage | null;
}

export async function getPostById(id: string): Promise<CmsPost | null> {
  const { data } = await supabase
    .from('cms_posts')
    .select('*')
    .eq('id', id)
    .limit(1)
    .single();
  return data as CmsPost | null;
}

// ─── Job Listings ───

export interface JobListing {
  id: string;
  organization_id: string;
  title: string;
  slug: string;
  department: string | null;
  location: string | null;
  employment_type: string;
  description: string | null;
  requirements: string | null;
  salary_range: string | null;
  status: string;
  closing_date: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export async function getPublishedJobListings(): Promise<JobListing[]> {
  const { data } = await supabase
    .from('job_listings')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });
  return (data || []) as JobListing[];
}

export async function getJobListingById(id: string): Promise<JobListing | null> {
  const { data } = await supabase
    .from('job_listings')
    .select('*')
    .eq('id', id)
    .eq('status', 'published')
    .limit(1)
    .single();
  return data as JobListing | null;
}

export async function submitJobApplication(formData: {
  job_listing_id: string;
  organization_id: string;
  applicant_name: string;
  applicant_email: string;
  applicant_phone?: string;
  resume_url?: string;
  cover_letter?: string;
  current_employer?: string;
  years_experience?: number;
  expected_salary?: string;
}): Promise<boolean> {
  const { error } = await supabase.from('job_applications').insert({
    ...formData,
    status: 'new',
  });
  return !error;
}

// ─── Contact Forms ───

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  page_url?: string;
  centre_id?: string;
}): Promise<boolean> {
  const { error } = await supabase.from('cms_forms').insert({
    ...formData,
    form_type: 'contact',
    status: 'new',
  });
  return !error;
}
