import { Metadata } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';
import QuickEnquiryCard from '@/components/QuickEnquiryCard';
import { getCurrentSiteId, getCurrentSiteSlug } from '@/lib/site-context';
import { getPublishedPosts } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Nursing Home in Kajang — Genesis Life Care Kajang | 24/7 Elderly Care',
  description:
    'Genesis Life Care Kajang — family-friendly nursing home in the southern Klang Valley. 24/7 nursing care, rehab services, dementia care & Senior Daycare. Affordable rates from RM 2,500/month. Rated 4.9★ on Google. Book a free tour.',
  alternates: {
    canonical: 'https://genesiscare.com.my/nursing-home-kajang',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/nursing-home-kajang' },
  },
  openGraph: {
    title: 'Nursing Home in Kajang | Genesis Life Care',
    description: '24/7 nursing care, rehab, dementia care in Kajang. Affordable rates. Rated 4.9★ on Google.',
    url: 'https://genesiscare.com.my/nursing-home-kajang',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/kajang-centre.jpeg', width: 1200, height: 630, alt: 'Genesis Life Care Kajang nursing home' }],
  },
};

export const revalidate = 60;

/* ─── Centre-specific data ───────────────────────────────────────────── */

const centre = {
  name: 'Kajang',
  fullName: 'Genesis Life Care Kajang',
  phone: '+6019 334 0457',
  phoneCTA: '+6019-334-0457',
  address: '41, Jalan Ria 1, Kawasan Perindustrian Ria, 43500 Kajang, Selangor',
  rating: '4.9',
  reviews: 32,
  established: '2021',
  beds: '120',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.8!2d101.7897!3d2.9927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcb3a3a3a3a3a%3A0x3a3a3a3a3a3a3a3a!2sGenesis+Life+Care+Kajang!5e0!3m2!1sen!2smy!4v1700000000000',
  heroImg: '/images/kajang-centre.jpeg',
};

const highlights = [
  { label: 'Google Rating', value: '4.9 ★', sub: `${centre.reviews} reviews` },
  { label: 'Beds', value: '120', sub: 'Capacity' },
  { label: 'Established', value: '2021', sub: 'Kajang' },
  { label: 'Care Team', value: '20+', sub: 'Professionals' },
];

const services = [
  {
    title: 'Elderly Nursing Care',
    desc: 'Round-the-clock professional nursing care with personalised care plans for every resident.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    link: '/our-services',
  },
  {
    title: 'Dementia & Memory Care',
    desc: 'Structured dementia care programmes with cognitive stimulation activities and trained caregivers.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    link: '/dementia-care',
  },
  {
    title: 'Stroke Rehabilitation',
    desc: 'Comprehensive physio and occupational therapy to help stroke survivors regain independence.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    link: '/stroke-rehabilitation-centre',
  },
  {
    title: 'Palliative Care',
    desc: 'Compassionate end-of-life care focused on comfort, dignity, and family support.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    link: '/palliative-care-malaysia',
  },
  {
    title: 'Post-Op Recovery',
    desc: 'Short-term rehabilitation after surgery — get back on your feet with expert care.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    link: '/post-op-care-malaysia',
  },
];

const facilityImages = [
  { src: '/images/kajang-centre.jpeg', alt: 'Genesis Life Care Kajang exterior' },
  { src: '/images/services/rehab-department.jpg', alt: 'Rehabilitation area' },
  { src: '/images/services/bedded-room.jpg', alt: 'Comfortable living space' },
  { src: '/images/services/common-area-scenic.jpg', alt: 'Common area' },
  { src: '/images/services/nursing-station.jpg', alt: 'Care facilities' },
  { src: '/images/services/halal-dinner.jpg', alt: 'Dining area' },
];

const teamMembers = [
  {
    name: 'Dr. Phang Sue Ling',
    role: 'Chief of Operations',
    bio: 'Oversees Genesis Life Care operations and ensures the highest standards of patient care across all centres.',
    img: '/images/team/team-1.png',
  },
  {
    name: 'Farah',
    role: 'Centre Manager',
    bio: 'Leads the Kajang centre with a focus on personalised care and family engagement programmes.',
    img: '/images/team/team-2.png',
  },
  {
    name: 'Seow Zhi Heng',
    role: 'Senior Therapist',
    bio: 'Specialises in elderly rehabilitation with a patient-centred, multidisciplinary approach.',
    img: '/images/team/team-3.png',
  },
];

const testimonials = [
  {
    name: 'Nurul Aisyah',
    text: 'Very happy with the quality meals and caring staff. The staff are respectful and caring. My grandmother feels at home here.',
    rating: 5,
  },
  {
    name: 'David Wong',
    text: 'The Kajang centre is warm and welcoming. My father enjoys the daily activities and has made friends with other residents. The team is very attentive.',
    rating: 5,
  },
  {
    name: 'Priya Raman',
    text: 'Good nursing care and rehabilitation services. The location is convenient for us in the southern KV area. Would recommend to families nearby.',
    rating: 4,
  },
];

const otherCentres = [
  { name: 'Petaling Jaya', slug: 'nursing-home-in-petaling-jaya', rating: '4.9', tag: 'Flagship Centre', img: '/images/pj-centre.jpg' },
  { name: 'Klang', slug: 'nursing-home-in-klang', rating: '4.8', tag: 'Original Centre', img: '/images/klang-centre.jpg' },
  { name: 'Puchong', slug: 'nursing-home-in-puchong', rating: '4.8', tag: 'Modern Facility', img: '/images/puchong-centre.jpeg' },
  { name: 'Johor Bahru', slug: 'nursing-home-in-johor-bahru', rating: '4.8', tag: 'Southern Region', img: '/images/jb-centre.jpeg' },
];

/* ─── Page component ─────────────────────────────────────────────────── */

export default async function NursingHomeKajang() {
  const siteId = await getCurrentSiteId();
  const recentPosts = await getPublishedPosts(siteId || undefined);
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Genesis Life Care Kajang',
    description: 'Family-friendly nursing home in Kajang offering 24/7 nursing care, dementia care, stroke rehabilitation & senior daycare. Rated 4.9★ on Google.',
    url: 'https://genesiscare.com.my/nursing-home-kajang',
    telephone: '+6019-334-0457',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '41, Jalan Ria 1, Kawasan Perindustrian Ria',
      addressLocality: 'Kajang',
      addressRegion: 'Selangor',
      postalCode: '43500',
      addressCountry: 'MY',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 2.9927, longitude: 101.7897 },
    image: 'https://genesiscare.com.my/images/kajang-centre.jpeg',
    priceRange: 'From RM 2,500/month',
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '32', bestRating: '5' },
    medicalSpecialty: ['Geriatric Medicine', 'Rehabilitation', 'Palliative Care'],
    areaServed: [{ '@type': 'City', name: 'Kajang' }, { '@type': 'City', name: 'Bangi' }, { '@type': 'City', name: 'Semenyih' }],
    parentOrganization: { '@type': 'Organization', name: 'Genesis Life Care', url: 'https://genesiscare.com.my' },
  };

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    <main className="bg-white">
      {/* Override global custom_css !important rules for dark-bg sections */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div { color: inherit; }
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div,
        .hero-dark .text-4xl, .hero-dark .text-5xl, .hero-dark .sm\\:text-5xl,
        .hero-dark .text-3xl, .hero-dark .text-lg, .hero-dark .text-sm,
        .hero-dark .text-white { color: #ffffff !important; }
        .hero-dark .text-gray-900 { color: rgb(17 24 39) !important; }
        .hero-dark .text-gray-800 { color: rgb(31 41 55) !important; }
        .hero-dark .text-gold { color: #FAB515 !important; }
        .bed-badge p { color: #ffffff !important; }
        .bed-badge p:last-child { color: rgba(255,255,255,0.8) !important; }
        .team-card h3 { font-size: 0.75rem !important; line-height: 1rem !important; }
      ` }} />
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative overflow-hidden">
        {/* Background image */}
        <img
          src="/images/general/hero-main.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary/85 to-secondary/80" />
        {/* Decorative circles */}
        <div className="absolute -top-[20%] -right-[10%] w-[55%] pb-[55%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[30%] -left-[5%] w-[40%] pb-[40%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left – text */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gold text-gray-900 text-xs font-bold tracking-wide px-3 py-1 rounded-full uppercase">
                  Kajang
                </span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{color: 'white'}}>
                  ★ {centre.rating} Google Rating
                </span>
              </div>

              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2" style={{color: 'white'}}>
                Nursing Home in Kajang
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5" style={{color: 'white'}}>
                {centre.fullName}
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl" style={{color: 'white'}}>
                A warm, family-friendly nursing home serving the southern Klang Valley.
                Professional care with quality dining, daily activities, and a
                dedicated team that treats every resident like family.
              </p>

              {/* Address */}
              <div className="flex flex-col gap-4 mb-8 text-white text-sm" style={{color: 'white'}}>
                <span className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {centre.address}
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-400 transition-colors text-sm whitespace-nowrap"
                >
                  Book a Free Tour
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href={`tel:${centre.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {centre.phoneCTA}
                </a>
              </div>
            </div>

            {/* Right — Quick enquiry card */}
            <QuickEnquiryCard email="enquiries@genesiscare.com.my" />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8">
            {highlights.map((h, i) => (
              <Fragment key={i}>
                {i > 0 && <div className="hidden sm:block w-px h-12 bg-gray-200" />}
                <div className="text-center flex-1 min-w-[100px]">
                  <span className="block text-4xl sm:text-5xl font-extrabold text-gray-700 leading-none">{h.value}</span>
                  <span className="text-xs text-gray-500 mt-1 font-medium">{h.label}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT THIS CENTRE ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">About This Centre</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                Quality Nursing Care<br />in Kajang
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Located in the heart of Kajang, Genesis Life Care provides professional
                  elderly care for families across Kajang, Bangi, Semenyih, Serdang, and
                  Putrajaya. Our JKM-approved centre offers a safe, home-like environment
                  where every resident is treated like family.
                </p>
                <p>
                  Our dedicated care team delivers <strong>24/7 nursing care</strong> with
                  weekly doctor consultations, personalised rehabilitation therapy, and
                  structured daily activities. Nutritious meals are freshly prepared in
                  our <strong>in-house kitchen</strong> under dietician supervision.
                </p>
                <p>
                  Whether your loved one needs long-term residential care, post-surgery
                  recovery, stroke rehabilitation, or specialised dementia support, our
                  120-bed facility is equipped to provide the right level of care.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {['Quality Dining', 'Family-Friendly', 'Dementia Care', '24/7 Nursing', 'Rehab Services', 'Senior Daycare'].map((tag) => (
                  <span key={tag} className="bg-primary/8 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/kajang-centre.jpeg"
                alt="Genesis Life Care Kajang building"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
              <div className="bed-badge absolute -bottom-5 -right-5 bg-primary text-white rounded-xl px-6 py-4 shadow-lg hidden sm:block">
                <p className="text-3xl font-extrabold">{centre.beds}</p>
                <p className="text-sm font-medium">Bed capacity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="bg-[#f4f8fb] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Comprehensive Care for Every Need</h2>
            <p className="text-gray-500 text-lg">From long-term residential nursing to specialised memory care, we have the right support for your family.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nursing Home Care</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">24/7 professional nursing care in a warm, homelike environment. Personalised care plans for each resident.</p>
              <Link href="/about-us" className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span>→</span>
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dementia &amp; Memory Care</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">Specialised programmes for Alzheimer&apos;s, dementia, and Parkinson&apos;s. Safe, structured, and stimulating environment.</p>
              <Link href="/dementia-care" className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span>→</span>
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Post-Operative Recovery</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">Short-term rehabilitation and recovery care after surgery. Physiotherapy and medical supervision included.</p>
              <Link href="/post-op-care-malaysia" className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span>→</span>
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stroke Rehabilitation</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">Comprehensive stroke recovery with physiotherapy, occupational therapy, and 24-hour nursing support.</p>
              <Link href="/stroke-rehabilitation-in-kajang" className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span>→</span>
              </Link>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Senior Day Care</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">Daytime care programmes with meals, activities, and supervision — ideal for families who need support during working hours.</p>
              <Link href="/contact" className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span>→</span>
              </Link>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Respite Care</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">Short-term stays from a few days to several weeks — giving family caregivers a well-deserved break while their loved one receives full-service care.</p>
              <Link href="/respite-care-in-malaysia" className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACILITY GALLERY ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Facility</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Take a Look Inside
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Our Kajang centre is designed for comfort, safety, and a home-like atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {facilityImages.map((img, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden shadow-sm ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                    i === 0 ? 'h-[400px]' : 'h-[190px]'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">The Team</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Meet the Kajang Care Team
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Our dedicated professionals are committed to delivering the highest standard of care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="team-card bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 text-center">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              What Families Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex text-gold text-lg">{'★★★★★'}</div>
              <span className="text-gray-600 text-sm font-medium">{centre.rating} from {centre.reviews} Google reviews</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex text-gold text-sm mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">Google Review</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COST CALCULATOR CTA ────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-primary-50 via-white to-secondary/10 rounded-3xl border border-primary-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center p-8 sm:p-12 lg:p-14">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase text-primary mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  Free Tool
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Nursing Home Cost Calculator
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  Get an instant personalised estimate based on the care your loved one needs. Select a centre, room type, care level, and add-on services — see the monthly cost breakdown in seconds.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <a
                    href="https://web.genesiscare.com.my/cost-calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full text-base font-bold shadow-md hover:bg-primary-600 hover:shadow-lg transition-all whitespace-nowrap"
                  >
                    Calculate Your Cost
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 text-primary font-semibold px-6 py-3.5 rounded-full border border-primary/20 hover:bg-primary-50 transition-all text-base whitespace-nowrap"
                  >
                    Or Speak to an Advisor
                  </Link>
                </div>
                <p className="text-xs text-gray-400">No sign-up required. Estimates are indicative — final pricing confirmed after assessment.</p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                    title: 'Choose Your Centre',
                    desc: 'Compare pricing across our 5 centres in PJ, Klang, Kajang, Puchong & JB.',
                  },
                  {
                    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
                    title: 'Customise Care Needs',
                    desc: 'Select room type, feeding assistance, wound care, rehab, dementia care & more.',
                  },
                  {
                    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                    title: 'See Your Estimate Instantly',
                    desc: 'Transparent monthly breakdown with no hidden costs. Starts from RM 2,500/month.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="w-11 h-11 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Families Trust Genesis Life Care
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              With over a decade of experience in elderly care, we combine medical expertise with genuine compassion. Every family receives personalised attention from our dedicated team of nurses and caregivers.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 mb-12">
            <div className="lg:col-span-3 rounded-2xl overflow-hidden">
              <img
                src="/images/general/comprehensive-care.png"
                alt="Comprehensive medical care — caregiver assisting elderly resident at Genesis Life Care"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {[
                { value: '10+', label: 'Years Experience', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-primary to-primary-700' },
                { value: '150+', label: 'Care Staff', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', color: 'from-secondary to-secondary-600' },
                { value: '5', label: 'Care Centres', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', color: 'from-primary to-primary-700' },
                { value: '4.8★', label: 'Google Rating', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', color: 'from-gold to-gold-500', filled: true },
                { value: '500+', label: 'Families Served', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'from-secondary to-secondary-600' },
                { value: 'JKM', label: 'Govt Approved', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', color: 'from-primary-700 to-primary-800' },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-2`}>
                    <svg className="w-5 h-5 text-white" fill={(s as any).filled ? 'currentColor' : 'none'} stroke={(s as any).filled ? 'none' : 'currentColor'} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg>
                  </div>
                  <span className="block text-2xl font-extrabold text-gray-900">{s.value}</span>
                  <span className="text-[11px] text-gray-500 font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                title: 'Affordable & Quality Care',
                desc: 'Competitive rates with transparent pricing across all centres. No hidden costs.',
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                gradient: 'from-primary to-primary-700',
              },
              {
                title: 'Personalised Care Plans',
                desc: 'Every resident receives a tailored care plan reviewed regularly with family members.',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                gradient: 'from-secondary to-secondary-600',
              },
              {
                title: 'Transparent & Affordable Pricing',
                desc: 'No hidden charges. Packages from RM 2,500/month with flexible payment options.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                gradient: 'from-primary-700 to-primary-800',
              },
            ].map((item, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                </div>
                <strong className="block text-base font-bold text-gray-900 mb-2">{item.title}</strong>
                <span className="text-sm text-gray-500 leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOME CARE SOLUTIONS ──────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase text-secondary mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Home Care Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Hire a Trained Domestic Helper for Home Care
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Through Agensi Pekerjaan GLC, we recruit and train domestic helpers from Indonesia and the Philippines specifically in elderly care and home nursing. Each helper undergoes our in-house training programme at Genesis Life Care before being placed with your family — so they arrive ready to provide professional, compassionate care from day one.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  'Helpers sourced from Indonesia & the Philippines',
                  'Trained in-house by Genesis Life Care in elderly care, hygiene & safety',
                  'Licensed agency (JTKSM) — fully legal and compliant placement',
                  'Live-in home care — companionship, meal prep, mobility assistance & more',
                  'Ongoing support from GLC after placement',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://agency.genesiscare.com.my"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-md"
                >
                  Learn More at GLC Hire
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <a
                  href="https://wa.me/60123210457?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20hiring%20a%20domestic%20helper%20for%20home%20care."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary px-6 py-3 rounded-full text-sm font-bold hover:bg-secondary hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 sm:p-10 border border-secondary/10">
              <h3 className="text-lg font-bold text-gray-900 mb-6">How It Works</h3>
              <div className="flex flex-col gap-5 mb-8">
                {[
                  { step: '1', title: 'Tell Us Your Needs', desc: 'Share your care requirements — type of assistance, language preference, live-in or part-time.' },
                  { step: '2', title: 'We Source & Train', desc: 'We recruit helpers from Indonesia or the Philippines and train them at our Genesis Life Care centres in elderly care, hygiene, and safety protocols.' },
                  { step: '3', title: 'Meet Your Helper', desc: 'Review candidate profiles, conduct interviews, and choose the right fit for your family.' },
                  { step: '4', title: 'Placement & Support', desc: 'Your helper arrives ready to provide care. We stay involved with ongoing check-ins and support.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <strong className="block text-sm font-bold text-gray-900">{item.title}</strong>
                      <span className="text-sm text-gray-500 leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'GLC', label: 'Facility Trained', gold: false },
                  { value: 'JTKSM', label: 'Licensed', gold: false },
                  { value: '5★', label: 'Satisfaction', gold: true },
                ].map((s, i) => (
                  <div key={i} className={`rounded-xl p-4 text-center shadow-sm ${s.gold ? 'bg-gold' : 'bg-white'}`}>
                    <span className={`block text-xl font-extrabold ${s.gold ? 'text-white' : 'text-gray-900'}`}>{s.value}</span>
                    <span className={`text-[10px] font-medium ${s.gold ? 'text-white/80' : 'text-gray-500'}`}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS & GUIDES ─────────────────────────────────────── */}
      {recentPosts.length > 0 && (
        <section className="bg-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">Resources</span>
              <h2 className="text-3xl font-bold text-gray-900">Latest News &amp; Guides</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.slice(0, 3).map((post: any) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden group"
                >
                  {post.featured_image_url && (
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    {post.category && (
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                    )}
                    <h3 className="text-base font-bold text-gray-900 mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-3">
                      {post.published_at
                        ? new Date(post.published_at).toLocaleDateString('en-MY', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        : ''}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {recentPosts.length > 3 && (
              <div className="text-center mt-8">
                <Link href="/blog" className="text-primary font-bold hover:text-primary-600 transition-colors">
                  View All Posts →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── FAQ SECTION ──────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">Common Questions</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    q: 'How much does nursing home care cost in Kajang?',
                    a: 'Genesis Life Care Kajang offers affordable nursing home packages starting from RM 2,500 per month. Rates vary by room type and level of care required. All pricing is transparent with no hidden charges. Use our online cost calculator or contact us for a personalised quote.',
                  },
                  {
                    q: 'What types of care does the Kajang centre provide?',
                    a: 'We provide a comprehensive range of elderly care services including 24/7 nursing home care, dementia and memory care, stroke rehabilitation, post-operative recovery care, palliative care, and short-term respite care. Each resident receives a personalised care plan.',
                  },
                  {
                    q: 'Is Genesis Life Care Kajang government-approved?',
                    a: 'Yes, Genesis Life Care Kajang is registered and approved by JKM (Jabatan Kebajikan Masyarakat). We also hold AgeCope certification, meeting international standards of aged care quality.',
                  },
                  {
                    q: 'Can I visit the Kajang centre before making a decision?',
                    a: 'Absolutely. We encourage families to book a free tour and consultation. Our care advisors will walk you through the facilities, explain our care programmes, and help you find the right solution for your loved one.',
                  },
                  {
                    q: 'Where exactly is Genesis Life Care Kajang located?',
                    a: 'We are located at 41, Jalan Ria 1, Kawasan Perindustrian Ria, 43500 Kajang, Selangor. The centre is easily accessible from major highways and is conveniently located for families in Kajang, Semenyih, Bangi, and the surrounding areas.',
                  },
                ].map((item, i) => (
                  <details key={i} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-bold text-gray-900 text-base hover:bg-gray-100 transition-colors">
                      {item.q}
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{item.a}</div>
                  </details>
                ))}
              </div>

              <div className="bg-primary-50 rounded-2xl p-6 border border-primary/10 mt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Still have questions?</h3>
                <p className="text-sm text-gray-500 mb-4">Our care advisors are happy to help. Speak to us directly or schedule a free visit to our Kajang centre.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${centre.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    Contact Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all"
                  >
                    Book a Free Visit
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/general/comprehensive-care-2.png"
                  alt="Professional caregiver assisting elderly resident at Genesis Life Care"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION & CONTACT ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Find Us</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Location & Contact
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 h-[350px] bg-gray-200">
              <iframe
                src={centre.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${centre.fullName} map`}
              />
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{centre.fullName}</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-2.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Address</p>
                    <p className="text-sm text-gray-500">{centre.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-2.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Phone</p>
                    <a href={`tel:${centre.phone.replace(/\s/g, '')}`} className="text-sm text-primary hover:underline">
                      {centre.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-2.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Operating Hours</p>
                    <p className="text-sm text-gray-500">Visits: 9:00 AM – 6:00 PM daily</p>
                    <p className="text-sm text-gray-500">Nursing care: 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-2.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Email</p>
                    <a href="mailto:enquiries@genesiscare.com.my" className="text-sm text-primary hover:underline">
                      enquiries@genesiscare.com.my
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors text-sm"
                >
                  Book a Free Tour
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href={`https://wa.me/60193340457`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER CENTRES ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Explore</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Our Other Centres
            </h2>
            <p className="text-gray-500 mt-3">Not in Kajang? We have 4 more locations across Malaysia.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherCentres.map((c, i) => (
              <Link
                key={i}
                href={`/${c.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group text-center"
              >
                <div className="h-36 overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {c.name}
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-1 text-gold text-sm">
                    ★ {c.rating}
                  </div>
                  <span className="inline-block mt-2 bg-primary/8 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {c.tag}
                  </span>
                  <span className="block mt-3 text-primary text-sm font-semibold group-hover:underline">
                    View Centre →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/our-locations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All Locations
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="hp-cta relative bg-gradient-to-br from-primary via-primary-400 to-secondary overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] w-[60%] pb-[60%] rounded-full bg-white/[.06] pointer-events-none" />
        <div className="absolute -bottom-[50%] -left-[5%] w-[50%] pb-[50%] rounded-full bg-black/[.06] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="hp-sub text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our care advisors speak to dozens of families every week and can help find the perfect care solution for your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="hp-gold-btn inline-flex items-center justify-center gap-2 bg-gold text-gray-900 px-8 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
            >
              Schedule a Visit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a
              href={`tel:${centre.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white/25 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call {centre.phoneCTA}
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
