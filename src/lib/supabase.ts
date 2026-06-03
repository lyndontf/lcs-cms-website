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
  google_ads_id: string | null;
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

export async function uploadBiodataPhoto(file: File): Promise<string | null> {
  const ext = file.name.split('.').pop() || 'jpg';
  const filename = `applications/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await supabase.storage
    .from('biodata-photos')
    .upload(filename, file, { contentType: file.type, upsert: false });
  if (error) return null;
  const { data: urlData } = supabase.storage.from('biodata-photos').getPublicUrl(filename);
  return urlData?.publicUrl || null;
}

export async function submitBiodataApplication(formData: {
  full_name: string;
  applicant_email: string;
  applicant_phone?: string;
  job_category?: string;
  nationality?: string;
  date_of_birth?: string;
  age?: number;
  marital_status?: string;
  education_level?: string;
  religion?: string;
  height_cm?: number;
  weight_kg?: number;
  food_preference?: string;
  languages?: { name: string; level: string }[];
  cover_letter?: string;
  photo_url?: string;
  job_listing_id?: string;
  organization_id: string;
}): Promise<boolean> {
  const { error } = await supabase.from('glc_biodata').insert({
    ...formData,
    status: 'pending',
    application_source: 'website',
    languages: formData.languages || [],
    skills: [],
    helper_experience: {},
    previous_employers: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
  return !error;
}

export async function getPublishedJobListingsForSite(orgId: string): Promise<JobListing[]> {
  const { data } = await supabase
    .from('job_listings')
    .select('*')
    .eq('organization_id', orgId)
    .eq('status', 'published')
    .order('published_at', { ascending: false });
  return (data || []) as JobListing[];
}

// ─── Biodata (GLC Hire Candidates) ───

export interface BiodataLanguage {
  name: string;
  level: string;
}

export interface BiodataSkill {
  area: string;
  willing: boolean;
  experienced: boolean;
  stars: number;
  note?: string;
}

export interface BiodataPreviousEmployer {
  country?: string;
  period_from?: string;
  period_to?: string;
  housing_type?: string;
  family_composition?: string;
  termination_reason?: string;
  duties?: string;
  remarks?: string;
}

export interface BiodataCandidate {
  id: string;
  organization_id: string;
  reference_no: string | null;
  status: 'available' | 'unavailable' | 'placed';
  job_category: string | null;
  photo_url: string | null;
  pdf_url: string | null;
  full_name: string;
  date_of_birth: string | null;
  age: number | null;
  nationality: string | null;
  height_cm: number | null;
  weight_kg: number | null;
  education_level: string | null;
  religion: string | null;
  food_preference: string | null;
  diet: string | null;
  siblings_count: number | null;
  sibling_position: number | null;
  marital_status: string | null;
  children_info: string | null;
  monthly_salary_myr: number | null;
  rest_days_per_month: number | null;
  off_day_compensation_myr: number | null;
  languages: BiodataLanguage[];
  skills: BiodataSkill[];
  helper_experience: Record<string, string>;
  previous_employers: BiodataPreviousEmployer[];
  notes: string | null;
  created_at: string;
  updated_at: string;
}

// Published caregivers are the single source of truth in `users` (caregiver_*),
// shared by /biodata, the agency site, and agency-services.html. Approved resume
// submissions become published users via the approve_biodata() RPC.
const CAREGIVER_COLUMNS =
  'id, name, profile_pic_url, nationality_text, dob, created_at, ' +
  'caregiver_reference_no, caregiver_job_category, caregiver_pdf_url, ' +
  'caregiver_education_level, caregiver_food_preference, caregiver_children_info, ' +
  'caregiver_monthly_salary_myr, caregiver_rest_days_per_month, ' +
  'caregiver_off_day_compensation_myr, caregiver_languages, caregiver_skills, ' +
  'caregiver_experience, caregiver_notes';

function mapUserToCandidate(u: Record<string, any>): BiodataCandidate {
  let age: number | null = null;
  if (u.dob) {
    const d = new Date(u.dob);
    if (!isNaN(d.getTime())) {
      age = Math.floor((Date.now() - d.getTime()) / (365.25 * 24 * 3600 * 1000));
    }
  }
  return {
    id: u.id,
    organization_id: '',
    reference_no: u.caregiver_reference_no ?? null,
    status: 'available',
    job_category: u.caregiver_job_category ?? null,
    photo_url: u.profile_pic_url ?? null,
    pdf_url: u.caregiver_pdf_url ?? null,
    full_name: u.name ?? '',
    date_of_birth: u.dob ?? null,
    age,
    nationality: u.nationality_text ?? null,
    height_cm: null,
    weight_kg: null,
    education_level: u.caregiver_education_level ?? null,
    religion: null,
    food_preference: u.caregiver_food_preference ?? null,
    diet: null,
    siblings_count: null,
    sibling_position: null,
    marital_status: null,
    children_info: u.caregiver_children_info ?? null,
    monthly_salary_myr: u.caregiver_monthly_salary_myr ?? null,
    rest_days_per_month: u.caregiver_rest_days_per_month ?? null,
    off_day_compensation_myr: u.caregiver_off_day_compensation_myr ?? null,
    languages: (u.caregiver_languages as BiodataLanguage[]) ?? [],
    skills: (u.caregiver_skills as BiodataSkill[]) ?? [],
    helper_experience: (u.caregiver_experience as Record<string, string>) ?? {},
    previous_employers: [],
    notes: u.caregiver_notes ?? null,
    created_at: u.created_at ?? '',
    updated_at: u.created_at ?? '',
  };
}

export async function getAvailableBiodata(): Promise<BiodataCandidate[]> {
  const { data } = await supabase
    .from('users')
    .select(CAREGIVER_COLUMNS)
    .eq('is_caregiver', true)
    .eq('caregiver_is_published', true)
    .order('created_at', { ascending: false });
  return (data || []).map(mapUserToCandidate);
}

export async function getBiodataById(id: string): Promise<BiodataCandidate | null> {
  const { data } = await supabase
    .from('users')
    .select(CAREGIVER_COLUMNS)
    .eq('id', id)
    .eq('is_caregiver', true)
    .eq('caregiver_is_published', true)
    .limit(1)
    .maybeSingle();
  return data ? mapUserToCandidate(data) : null;
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

// ─── Booking ───

export interface BookingCentre {
  id: string;
  name: string;
  slug: string;
  address: string;
  marketing_phone_no: string | null;
}

export interface SlotConfig {
  id: string;
  day_of_week: number | null;
  start_time: string;
  end_time: string;
  max_bookings: number;
}

export interface CareType {
  id: string;
  display_text: string;
}

export async function getBookingCentres(): Promise<BookingCentre[]> {
  const { data } = await supabase
    .from('centre')
    .select('id, name, slug, address, marketing_phone_no')
    .in('slug', ['genesis-klang', 'genesis-pjs', 'genesis-kajang', 'genesis-tpp', 'genesis-jb'])
    .order('name');
  return (data || []) as BookingCentre[];
}

export async function getSlotConfigs(centreId: string): Promise<SlotConfig[]> {
  const { data } = await supabase
    .from('booking_slot_config')
    .select('id, day_of_week, start_time, end_time, max_bookings')
    .eq('centre_id', centreId)
    .eq('is_active', true)
    .order('start_time');
  return (data || []) as SlotConfig[];
}

export async function getBlockedDates(centreId: string): Promise<string[]> {
  const { data } = await supabase
    .from('booking_blocked_date')
    .select('blocked_date')
    .eq('centre_id', centreId);
  return (data || []).map((d: { blocked_date: string }) => d.blocked_date);
}

export async function getCareTypes(): Promise<CareType[]> {
  const { data } = await supabase
    .from('enquiry_type_of_care')
    .select('id, display_text')
    .order('display_text');
  return (data || []) as CareType[];
}

export async function getPendingStatusId(): Promise<string | null> {
  const { data } = await supabase
    .from('booking_status')
    .select('id, display_text')
    .ilike('display_text', 'Pending')
    .limit(1)
    .single();
  return data?.id ?? null;
}

export async function getBookedSlotCounts(
  centreId: string,
  date: string
): Promise<Record<string, number>> {
  const { data, error } = await supabase.rpc('get_booked_slot_counts', {
    p_centre_id: centreId,
    p_date: date,
  });
  if (error) console.error('[getBookedSlotCounts]', error.message);
  const counts: Record<string, number> = {};
  if (Array.isArray(data)) {
    for (const row of data) {
      const st = row.start_time?.toString() ?? '';
      const et = row.end_time?.toString() ?? '';
      const count = Number(row.booked_count ?? 0);
      if (st) counts[`${st}|${et}`] = count;
    }
  }
  return counts;
}

export async function submitBooking(booking: {
  centre_id: string;
  booking_slot_config_id: string;
  booking_date: string;
  start_time: string;
  end_time: string;
  visitor_name: string;
  visitor_phone: string;
  visitor_email?: string | null;
  resident_name?: string | null;
  relationship_to_resident?: string | null;
  type_of_care_id?: string | null;
  booking_status_id?: string | null;
}): Promise<{ success: boolean; duplicate?: boolean; full?: boolean }> {
  const { data, error } = await supabase.rpc('submit_booking_safe', {
    p_centre_id: booking.centre_id,
    p_booking_slot_config_id: booking.booking_slot_config_id,
    p_booking_date: booking.booking_date,
    p_start_time: booking.start_time,
    p_end_time: booking.end_time,
    p_visitor_name: booking.visitor_name,
    p_visitor_phone: booking.visitor_phone,
    p_visitor_email: booking.visitor_email ?? null,
    p_resident_name: booking.resident_name ?? null,
    p_relationship_to_resident: booking.relationship_to_resident ?? null,
    p_type_of_care_id: booking.type_of_care_id ?? null,
    p_booking_status_id: booking.booking_status_id ?? null,
  });
  if (error) {
    console.error('[submitBooking]', error.message);
    return { success: false };
  }
  const result = data as { success: boolean; full?: boolean; error?: string };
  if (result?.full) return { success: false, full: true, duplicate: true };
  if (!result?.success) return { success: false };
  return { success: true };
}