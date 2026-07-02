import { MenuItem } from './supabase';

// Structured navigation for the Genesis centre site (EN + Mandarin).
// Rendered by Header / HeaderZh with dropdown sub-menus.

export const centreNavEN: MenuItem[] = [
  { label: 'Home', url: '/', type: 'page' },
  {
    label: 'Services',
    url: '/our-services',
    type: 'page',
    children: [
      { label: 'Dementia & Memory Care', url: '/dementia-care', type: 'page' },
      { label: 'Stroke Rehabilitation', url: '/stroke-rehabilitation-centre', type: 'page' },
      { label: 'Palliative Care', url: '/palliative-care-malaysia', type: 'page' },
      { label: 'Post-Operative Care', url: '/post-op-care-malaysia', type: 'page' },
      { label: 'Respite Care', url: '/respite-care-in-malaysia', type: 'page' },
      { label: 'Elderly Day Care', url: '/elderly-day-care', type: 'page' },
      { label: 'Complex Care', url: '/complex-care', type: 'page' },
      { label: 'Home Care', url: '/home-care', type: 'page' },
      { label: 'AI-Powered Care', url: '/ai-powered-care', type: 'page' },
    ],
  },
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
    ],
  },
  {
    label: 'For Families',
    url: '/admissions',
    type: 'page',
    children: [
      { label: 'Admissions & Eligibility', url: '/admissions', type: 'page' },
      { label: 'Nursing Home Cost Guide', url: '/nursing-home-cost-malaysia', type: 'page' },
      { label: 'Family Care App', url: '/family-app', type: 'page' },
      { label: 'Reviews', url: '/reviews', type: 'page' },
    ],
  },
  {
    label: 'About',
    url: '/about-us',
    type: 'page',
    children: [
      { label: 'Our Story', url: '/about-us', type: 'page' },
      { label: 'Our Team', url: '/our-team', type: 'page' },
      { label: 'The Genesis Ecosystem', url: '/our-ecosystem', type: 'page' },
      { label: 'Gallery', url: '/our-gallery', type: 'page' },
      { label: 'Blog', url: '/blog', type: 'page' },
      { label: 'Careers', url: '/careers', type: 'page' },
    ],
  },
  { label: 'Contact', url: '/contact', type: 'page' },
];

export const centreNavZH: MenuItem[] = [
  { label: '首页', url: '/zh', type: 'page' },
  {
    label: '我们的服务',
    url: '/zh/our-services',
    type: 'page',
    children: [
      { label: '失智与记忆护理', url: '/zh/dementia-care', type: 'page' },
      { label: '中风康复', url: '/zh/stroke-rehabilitation-centre', type: 'page' },
      { label: '舒缓护理', url: '/zh/palliative-care-malaysia', type: 'page' },
      { label: '术后护理', url: '/zh/post-op-care-malaysia', type: 'page' },
      { label: '喘息护理', url: '/zh/respite-care-in-malaysia', type: 'page' },
      { label: '长者日间照护', url: '/zh/elderly-day-care', type: 'page' },
      { label: '复杂护理', url: '/zh/complex-care', type: 'page' },
      { label: '居家护理', url: '/zh/home-care', type: 'page' },
      { label: 'AI 智能护理', url: '/zh/ai-powered-care', type: 'page' },
    ],
  },
  {
    label: '我们的中心',
    url: '/zh/our-locations',
    type: 'page',
    children: [
      { label: '八打灵再也', url: '/zh/nursing-home-in-petaling-jaya', type: 'page' },
      { label: '巴生', url: '/zh/nursing-home-in-klang', type: 'page' },
      { label: '加影', url: '/zh/nursing-home-kajang', type: 'page' },
      { label: '蒲种', url: '/zh/nursing-home-in-puchong', type: 'page' },
      { label: '新山', url: '/zh/nursing-home-in-johor-bahru', type: 'page' },
    ],
  },
  {
    label: '家属专区',
    url: '/zh/admissions',
    type: 'page',
    children: [
      { label: '入住与资格', url: '/zh/admissions', type: 'page' },
      { label: '护理院费用指南', url: '/zh/nursing-home-cost-malaysia', type: 'page' },
      { label: '家属应用', url: '/zh/family-app', type: 'page' },
      { label: '评价', url: '/zh/reviews', type: 'page' },
    ],
  },
  {
    label: '关于我们',
    url: '/zh/about-us',
    type: 'page',
    children: [
      { label: '我们的故事', url: '/zh/about-us', type: 'page' },
      { label: '我们的团队', url: '/zh/our-team', type: 'page' },
      { label: '创世生态体系', url: '/zh/our-ecosystem', type: 'page' },
      { label: '设施相册', url: '/zh/our-gallery', type: 'page' },
    ],
  },
  { label: '联系我们', url: '/zh/contact', type: 'page' },
];
