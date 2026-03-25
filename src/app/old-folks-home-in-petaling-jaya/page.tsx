import { Metadata } from 'next';
import Link from 'next/link';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';
import GlcHireSection from '@/components/sections/GlcHireSection';
import CostCalculatorSection from '@/components/sections/CostCalculatorSection';

export const metadata: Metadata = {
  title: 'Old Folks Home in Petaling Jaya - Genesis Life Care PJ',
  description:
    'Trusted old folks home in Petaling Jaya with 24/7 nursing care, dedicated memory care wing, rehabilitation & nutritious meals. Affordable rates. Rated 4.9★ on Google. Visit us today.',
};

export const revalidate = 60;

/* ─── Centre-specific data ───────────────────────────────────────────── */

const centre = {
  name: 'Petaling Jaya',
  fullName: 'Genesis Life Care Petaling Jaya',
  phone: '+6019 295 0457',
  phoneCTA: '+6019-295-0457',
  address: 'Lot 1, Petaling Utama Avenue, Jalan PJS 1/50, Taman Petaling Utama, 46150 Petaling Jaya, Selangor',
  rating: '4.9',
  reviews: 58,
  established: '2020',
  beds: '50+',
  heroImg: '/images/pj-centre.jpg',
  nursingHomeSlug: '/nursing-home-in-petaling-jaya',
  lat: 3.1117,
  lng: 101.6317,
};

const highlights = [
  { label: 'Years Caring', value: '5+', sub: 'Since 2020' },
  { label: 'Residents Capacity', value: '50+', sub: 'Comfortable Beds' },
  { label: 'Google Rating', value: '4.9 ★', sub: '58 Reviews' },
  { label: 'Affordable Rates', value: '✓', sub: 'All Centres' },
  { label: 'Care Staff', value: '24/7', sub: 'Round the Clock' },
];

const dailyLife = [
  {
    title: 'Personalised Daily Routines',
    desc: 'Every resident follows a tailored schedule designed around their preferences, abilities, and medical needs — from wake-up to bedtime.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Nutritious Meals & Snacks',
    desc: 'Freshly prepared nutritious meals, dietary accommodations, and snacks throughout the day. Our kitchen caters to medical and individual needs.',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
  },
  {
    title: 'Activities & Social Events',
    desc: 'Group activities, gentle exercise sessions, arts and crafts, music therapy, and festive celebrations to keep life engaging and joyful.',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Family Visiting & Outings',
    desc: 'Comfortable visiting areas where families can spend quality time. We also organise supervised outings and family events throughout the year.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Health Monitoring & Check-Ups',
    desc: 'Regular vital sign checks, medication management, doctor consultations, and health assessments to ensure your loved one stays well.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Safe & Comfortable Environment',
    desc: 'Wheelchair-friendly spaces, handrails, anti-slip flooring, air-conditioned rooms, and 24-hour security for complete peace of mind.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
];

const careServices = [
  { title: 'Elderly Nursing Care', link: '/our-services', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { title: 'Dementia & Memory Care', link: '/dementia-care', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { title: 'Stroke Rehabilitation', link: '/stroke-rehabilitation-centre', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Palliative Care', link: '/palliative-care-malaysia', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Post-Op Recovery', link: '/post-op-care-malaysia', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
];

const checklist = [
  { title: 'Transparent Pricing', desc: 'Genesis Life Care offers competitive and transparent pricing with no hidden costs. We work with families to find care plans that suit their budget.' },
  { title: 'Qualified Care Staff', desc: 'Our team includes trained nurses, physiotherapists, psychologists, and experienced caregivers available around the clock.' },
  { title: 'Cleanliness & Hygiene', desc: 'We maintain strict hygiene standards with regular deep cleaning, infection control protocols, and well-maintained facilities.' },
  { title: 'Visiting Policy', desc: 'We encourage family involvement with flexible visiting hours and comfortable spaces for quality time together.' },
  { title: 'Location & Accessibility', desc: 'Our PJ centre is easily accessible via Federal Highway and LDP, with ample parking for visitors.' },
  { title: 'Specialist Care Available', desc: 'Beyond basic care, we offer dementia programmes, stroke rehabilitation, palliative care, and post-surgery recovery.' },
];

const faqs = [
  {
    q: 'How much does an old folks home cost in Petaling Jaya?',
    a: 'Costs at Genesis Life Care Petaling Jaya vary depending on the level of care required and room type. We offer competitive rates starting from around RM 2,500 per month for basic care. Contact us for a personalised quote based on your loved one\'s needs.',
  },
  {
    q: 'What is the difference between an old folks home and a nursing home?',
    a: 'In Malaysia, "old folks home" and "nursing home" are often used interchangeably. At Genesis Life Care, we provide professional nursing care alongside a warm, home-like environment — combining the best of both. Our residents receive 24/7 medical support while enjoying daily activities and social engagement.',
  },
  {
    q: 'Is Genesis Life Care Petaling Jaya affordable?',
    a: 'Yes. We offer competitive and transparent rates across all our centres. Our team works with each family to recommend a care plan that fits their needs and budget. Contact us for a personalised quote.',
  },
  {
    q: 'Can my parent bring personal belongings to the old folks home?',
    a: 'Absolutely. We encourage residents to bring personal items such as photos, favourite blankets, and small familiar objects. Having familiar belongings helps residents feel more at home and can be particularly beneficial for those with memory conditions.',
  },
  {
    q: 'What are the visiting hours at the Petaling Jaya old folks home?',
    a: 'We maintain flexible visiting hours to encourage family involvement. General visiting hours are from 10am to 6pm daily. Special arrangements can be made for families who need to visit outside these hours — just speak with our care team.',
  },
];

const otherHomes = [
  { name: 'Klang', slug: 'old-folks-home-in-klang', rating: '4.8', tag: 'Original Centre', img: '/images/klang-centre.jpg' },
  { name: 'Kajang', slug: 'old-folks-home-in-kajang', rating: '4.7', tag: 'Southern KV', img: '/images/kajang-centre.jpeg' },
  { name: 'Puchong', slug: 'old-folks-home-in-puchong', rating: '4.8', tag: 'Modern Facility', img: '/images/puchong-centre.jpeg' },
  { name: 'Johor Bahru', slug: 'old-folks-home-in-johor-bahru', rating: '4.8', tag: 'Southern Region', img: '/images/jb-centre.jpeg' },
];

/* ─── Page component ─────────────────────────────────────────────────── */

export default function OldFolksHomePJ() {
  return (
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
      ` }} />

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://genesiscare.com.my/old-folks-home-in-petaling-jaya',
            name: centre.fullName,
            description: 'Trusted old folks home in Petaling Jaya with 24/7 nursing care, memory care wing, rehabilitation and nutritious meals.',
            url: 'https://genesiscare.com.my/old-folks-home-in-petaling-jaya',
            telephone: centre.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Lot 1, Petaling Utama Avenue, Jalan PJS 1/50',
              addressLocality: 'Petaling Jaya',
              addressRegion: 'Selangor',
              postalCode: '46150',
              addressCountry: 'MY',
            },
            geo: { '@type': 'GeoCoordinates', latitude: centre.lat, longitude: centre.lng },
            aggregateRating: { '@type': 'AggregateRating', ratingValue: centre.rating, reviewCount: centre.reviews, bestRating: '5' },
            openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '09:00', closes: '18:00' },
            image: `https://genesiscare.com.my${centre.heroImg}`,
            priceRange: '$$',
          }),
        }}
      />

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative overflow-hidden">
        {/* Background image */}
        <img src="/images/general/hero-main.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary/85 to-secondary/80" />
        {/* Decorative circles */}
        <div className="absolute -top-[20%] -right-[10%] w-[55%] pb-[55%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[30%] -left-[5%] w-[40%] pb-[40%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="lg:max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">Rated {centre.rating} ★ on Google</span>
              </div>

              <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>Old Folks Home in {centre.name}</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                Best Old Folks Home<br className="hidden sm:block" /> in {centre.name}
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                A warm, home-like environment where your loved ones receive professional care with dignity and
                compassion. Our Petaling Jaya centre features a dedicated memory care wing, rehabilitation facilities,
                and a caring team available around the clock.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/contact"
                  className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl"
                >
                  Visit Our Home
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
                <a
                  href={`tel:${centre.phone.replace(/\s/g, '')}`}
                  className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call {centre.phoneCTA}
                </a>
              </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8">
            <div className="text-center flex-1 min-w-[120px]">
              <span className="block text-4xl sm:text-5xl font-extrabold text-gray-700 leading-none">500+</span>
              <span className="text-xs text-gray-500 mt-1 font-medium">Families Served</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="text-center flex-1 min-w-[120px]">
              <span className="block text-4xl sm:text-5xl font-extrabold text-gray-700 leading-none">5</span>
              <span className="text-xs text-gray-500 mt-1 font-medium">Care Centres</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="text-center flex-1 min-w-[120px]">
              <span className="block text-4xl sm:text-5xl font-extrabold text-gray-700 leading-none">24/7</span>
              <span className="text-xs text-gray-500 mt-1 font-medium">Professional Care</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="text-center flex-1 min-w-[120px]">
              <span className="block text-4xl sm:text-5xl font-extrabold text-gray-700 leading-none">{centre.rating}</span>
              <span className="text-xs text-gray-500 mt-1 font-medium">Google Rating ★</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="flex items-center justify-center gap-4 flex-1 min-w-[200px]">
              <img src="/images/logos/jkm-logo.webp" alt="JKM approved elderly care" className="h-10 w-auto" />
              <img src="/images/logos/agecope-logo.webp" alt="AgeCope certification" className="h-10 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Why Petaling Jaya</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Why Choose Our Old Folks Home in Petaling Jaya?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Finding the right old folks home for your loved one is one of the most important decisions a family
                  can make. Our Petaling Jaya centre, located in Taman Petaling Utama along Jalan PJS 1/50, is our
                  flagship facility — purpose-built to provide the highest standard of elderly care in the Klang Valley.
                </p>
                <p>
                  Petaling Jaya is ideal for families looking for accessible, high-quality senior care. Our centre
                  is conveniently located near major hospitals including Sunway Medical Centre and Assunta Hospital,
                  and is easily reachable via the Federal Highway and LDP Expressway, making family visits stress-free.
                </p>
                <p>
                  What sets our PJ old folks home apart is the dedicated memory care wing — one of the few in
                  Malaysia offering psychologist-led cognitive stimulation therapy alongside round-the-clock nursing
                  care, rehabilitation services, and quality in-house dining.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Near Major Hospitals', 'Federal Highway Access', 'LDP Expressway', 'Memory Care Wing', 'Quality Dining'].map((t) => (
                  <span key={t} className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/services/common-area-scenic.jpg"
                alt="Common area at our old folks home in Petaling Jaya"
                className="rounded-2xl shadow-lg w-full object-cover"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DAILY LIFE ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Life at Our Home</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What Daily Life Looks Like</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Every day at our old folks home is designed to be comfortable, meaningful, and safe. Here is what your loved one can expect.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyLife.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARE SERVICES ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Care Services</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Specialist Care Under One Roof</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Beyond everyday care, our old folks home in Petaling Jaya offers a full range of specialist services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {careServices.map((svc) => (
              <Link key={svc.title} href={svc.link} className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} /></svg>
                </div>
                <div>
                  <span className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{svc.title}</span>
                  <span className="block text-xs text-primary font-semibold mt-0.5">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHOOSING THE RIGHT HOME ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Helpful Guide</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                How to Choose the Right Old Folks Home
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Choosing an old folks home is a big decision. Here is a simple checklist of what to look for — and how Genesis Life Care measures up.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {checklist.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ADMISSION PROCESS ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Getting Started</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Simple Admission Process</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Moving into our old folks home is straightforward. We guide you every step of the way.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Contact Us', desc: 'Call us or fill in our online form. Our care advisors will answer your questions and arrange a convenient time to visit.' },
              { step: '2', title: 'Free Assessment & Tour', desc: 'Visit our Petaling Jaya centre, meet the care team, and we will assess your loved one\'s needs at no charge.' },
              { step: '3', title: 'Move In', desc: 'Once you are ready, we prepare a personalised care plan and help your loved one settle into their new home comfortably.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-extrabold">{s.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-bold px-6 py-3.5 rounded-full transition shadow-lg">
              Schedule a Visit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQS ──────────────────────────────────────────────────────── */}
      <FaqSection faqs={faqs} />

      {/* ── OTHER LOCATIONS ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">More Locations</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Visit Our Other Old Folks Homes</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherHomes.map((home) => (
              <Link key={home.slug} href={`/${home.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={home.img} alt={`Old folks home in ${home.name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <span className="inline-block bg-primary-50 text-primary text-xs font-semibold px-2 py-0.5 rounded-full mb-2">{home.tag}</span>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors">Old Folks Home in {home.name}</h3>
                  <span className="text-sm text-gray-500">Rated {home.rating} ★</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={centre.nursingHomeSlug} className="text-primary font-semibold text-sm hover:underline">
              View full centre details for {centre.name} →
            </Link>
          </div>
        </div>
      </section>

      <CostCalculatorSection />

      <GlcHireSection />

      <FaqSection
        faqs={[
          {
            q: 'What makes our Petaling Jaya centre our flagship location?',
            a: 'As our oldest and largest centre, our Petaling Jaya facility in Kota Damansara has 50+ beds, the highest Google rating (4.9 stars with 155+ reviews), and is where we pioneered our psychologist-led dementia care programs.'
          },
          {
            q: 'Is the Petaling Jaya centre easily accessible from highways?',
            a: 'Yes, our PJ centre is strategically located in Kota Damansara with easy access via LDP, NKVE, and Sprint highways. Street parking and ample visitor parking are available.'
          },
          {
            q: 'Can family members work with therapists at the Petaling Jaya home?',
            a: 'Absolutely. We involve families in rehabilitation and care planning. Our therapists provide training and guidance so family members can support their loved ones at home.'
          },
          {
            q: 'Does the flagship Petaling Jaya centre accept short-term respite care?',
            a: 'Yes, we offer respite care for families who need temporary care solutions. This gives primary caregivers a break while ensuring your loved one receives professional care.'
          },
          {
            q: 'What specialists are available on-site at the Petaling Jaya centre?',
            a: 'Our PJ centre has on-site doctors, psychologists, physiotherapists, occupational therapists, and trained nurses. Specialist consultations are arranged as needed.'
          }
        ]}
        heading="Location-Specific FAQs"
        label="Petaling Jaya Flagship"
      />

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <FinalCtaSection
        heading="Ready to Take the Next Step?"
        description="Contact us today for a free consultation. Our care advisors speak to dozens of families every week and can help find the perfect care solution for your loved one."
        primaryLabel="Schedule a Visit"
        primaryHref="/contact"
        phone="+6012-321 0457"
      />
    </main>
  );
}
