import { MenuItem } from './supabase';

// Structured navigation for the Genesis centre site (EN + Mandarin).
// Rendered by Header / HeaderZh with dropdown sub-menus.

// Matches the nav actually shown in the Bloom-rebrand pages' own embedded
// header (see genesis-life-care-site/index.html) — Home, Locations, For
// Families, plus the language toggle rendered separately in Header.tsx.
// Services/About/Contact are reachable from the footer and from within page
// content instead of the top nav, same as on the Bloom pages.
export const centreNavEN: MenuItem[] = [
  { label: 'Home', url: '/', type: 'page' },
  {
    label: 'Locations',
    url: '/our-locations',
    type: 'page',
    children: [
      { label: 'Petaling Jaya', url: '/nursing-home-in-petaling-jaya', type: 'page' },
      { label: 'Klang', url: '/nursing-home-in-klang', type: 'page' },
      { label: 'Kajang', url: '/nursing-home-kajang', type: 'page' },
      { label: 'Puchong', url: '/nursing-home-in-puchong', type: 'page' },
      { label: 'Johor Bahru', url: '/nursing-home-in-johor-bahru', type: 'page' },
      { label: 'New Locations — Register Interest', url: '/register-interest', type: 'page' },
    ],
  },
  {
    label: 'For Families',
    url: '/admissions',
    type: 'page',
    children: [
      { label: 'Admissions & Eligibility', url: '/admissions', type: 'page' },
      { label: 'Referrals & Partnerships', url: '/referrals', type: 'page' },
      { label: 'Fees & Care Packages', url: '/pricing', type: 'page' },
      { label: 'Nursing Home Cost Guide', url: '/nursing-home-cost-malaysia', type: 'page' },
      { label: 'Home Care vs. Nursing Home Cost', url: '/nursing-home-vs-home-care-cost', type: 'page' },
      { label: 'Family Care App', url: '/family-app', type: 'page' },
      { label: 'Reviews', url: '/reviews', type: 'page' },
    ],
  },
];

// Services no longer appear in the top nav (see above), but the Bloom
// footer still lists all of them — matches genesis-life-care-site/index.html's
// footer "Services" column exactly.
export const centreFooterServices: MenuItem[] = [
  { label: 'Dementia & Memory Care', url: '/dementia-care', type: 'page' },
  { label: 'Stroke Rehabilitation', url: '/stroke-rehabilitation-centre', type: 'page' },
  { label: 'Palliative Care', url: '/palliative-care-malaysia', type: 'page' },
  { label: 'Post-Operative Care', url: '/post-op-care-malaysia', type: 'page' },
  { label: 'Respite Care', url: '/respite-care-in-malaysia', type: 'page' },
  { label: 'Elderly Day Care', url: '/elderly-day-care', type: 'page' },
  { label: 'Complex Care', url: '/complex-care', type: 'page' },
  { label: 'Home Care', url: '/home-care', type: 'page' },
  { label: 'Clinical & Allied Health', url: '/clinical-services', type: 'page' },
  { label: 'AI-Assisted Care', url: '/ai-powered-care', type: 'page' },
];
