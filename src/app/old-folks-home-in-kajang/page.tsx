import { Metadata } from 'next';
import Link from 'next/link';
import FaqSection from '../../components/sections/FaqSection';
import FinalCtaSection from '../../components/sections/FinalCtaSection';
import GlcHireSection from '../../components/sections/GlcHireSection';
import CostCalculatorSection from '../../components/sections/CostCalculatorSection';
import HeroEnquiryForm from '@/components/HeroEnquiryForm';

export const metadata: Metadata = {
  title: 'Old Folks Home in Kajang - Genesis Life Care Kajang',
  description:
    'Family-friendly old folks home in Kajang with 24/7 nursing care, nutritious meals, dementia care & rehabilitation. Serving southern Klang Valley. Affordable rates. Rated 4.7\u2605.',
};

export const revalidate = 60;

/* ─── Centre-specific data ───────────────────────────────────────────── */

const centre = {
  name: 'Kajang',
  fullName: 'Genesis Life Care Kajang',
  phone: '+6019 334 0457',
  phoneCTA: '+6019-334-0457',
  address: '41, Jalan Ria 1, Kawasan Perindustrian Ria, 43500 Kajang, Selangor',
  rating: '4.7',
  reviews: 32,
  established: '2021',
  beds: '120+',
  heroImg: '/images/kajang-centre.jpeg',
  nursingHomeSlug: '/nursing-home-kajang',
  lat: 2.9927,
  lng: 101.7897,
};

const highlights = [
  { label: 'Years Caring', value: '4+', sub: 'Since 2021' },
  { label: 'Residents Capacity', value: '120+', sub: 'Comfortable Beds' },
  { label: 'Google Rating', value: '4.7 \u2605', sub: '32 Reviews' },
  { label: 'Affordable Rates', value: '\u2713', sub: 'All Centres' },
  { label: 'Care Staff', value: '24/7', sub: 'Round the Clock' },
];

const dailyLife = [
  {
    title: 'Personalised Daily Routines',
    desc: 'Every resident follows a tailored schedule designed around their preferences, abilities, and medical needs \u2014 from wake-up to bedtime.',
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
  { title: 'Location & Accessibility', desc: 'Our Kajang centre is easily accessible via SILK Highway, PLUS Highway, and Kajang MRT station, with ample parking for visitors.' },
  { title: 'Specialist Care Available', desc: 'Beyond basic care, we offer dementia programmes, stroke rehabilitation, palliative care, and post-surgery recovery.' },
];

const faqs = [
  {
    q: 'How much does an old folks home cost in Kajang?',
    a: 'Costs at Genesis Life Care Kajang vary depending on the level of care required and room type. We offer competitive rates starting from around RM 2,500 per month for basic care. Contact us for a personalised quote based on your loved one\'s needs.',
  },
  {
    q: 'What is the difference between an old folks home and a nursing home?',
    a: 'In Malaysia, "old folks home" and "nursing home" are often used interchangeably. At Genesis Life Care, we provide professional nursing care alongside a warm, home-like environment \u2014 combining the best of both. Our residents receive 24/7 medical support while enjoying daily activities and social engagement.',
  },
  {
    q: 'Is Genesis Life Care Kajang affordable?',
    a: 'Yes. We offer competitive and transparent rates across all our centres. Our team works with each family to recommend a care plan that fits their needs and budget. Contact us for a personalised quote.',
  },
  {
    q: 'Can my parent bring personal belongings?',
    a: 'Absolutely. We encourage residents to bring personal items such as photos, favourite blankets, and small familiar objects. Having familiar belongings helps residents feel more at home and can be particularly beneficial for those with memory conditions.',
  },
  {
    q: 'What are visiting hours at the Kajang old folks home?',
    a: 'We maintain flexible visiting hours to encourage family involvement. General visiting hours are from 10am to 6pm daily. Special arrangements can be made for families who need to visit outside these hours \u2014 just speak with our care team.',
  },
];

const otherHomes = [
  { name: 'Petaling Jaya', slug: 'old-folks-home-in-petaling-jaya', rating: '4.9', tag: 'Flagship Centre', img: '/images/pj-centre.jpg' },
  { name: 'Klang', slug: 'old-folks-home-in-klang', rating: '4.8', tag: 'Original Centre', img: '/images/klang-centre.jpg' },
  { name: 'Puchong', slug: 'old-folks-home-in-puchong', rating: '4.8', tag: 'Modern Facility', img: '/images/puchong-centre.jpeg' },
  { name: 'Johor Bahru', slug: 'old-folks-home-in-johor-bahru', rating: '4.8', tag: 'Southern Region', img: '/images/jb-centre.jpeg' },
];

/* ─── Page component ─────────────────────────────────────────────────── */

export default function OldFolksHomeKajang() {
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
            '@id': 'https://genesiscare.com.my/old-folks-home-in-kajang',
            name: centre.fullName,
            description: 'Family-friendly old folks home in Kajang with 24/7 nursing care, nutritious meals, dementia care and rehabilitation.',
            url: 'https://genesiscare.com.my/old-folks-home-in-kajang',
            telephone: centre.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: '41, Jalan Ria 1, Kawasan Perindustrian Ria',
              addressLocality: 'Kajang',
              addressRegion: 'Selangor',
              postalCode: '43500',
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
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-gold text-gray-900 text-xs font-bold tracking-wide px-3 py-1 rounded-full uppercase">
                Kajang
              </span>
              <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{color: 'white'}}>
                ★ {centre.rating} Google Rating
              </span>
            </div>

            <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>Old Folks Home in {centre.name}</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              Best Old Folks Home<br className="hidden sm:block" /> in {centre.name}
            </h1>
            <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              A warm, family-friendly environment where your loved ones receive professional care with dignity and
              compassion. Our Kajang centre features 24/7 nursing care, an in-house kitchen, dementia care,
              and rehabilitation facilities serving the southern Klang Valley.
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
            {/* ── Enquiry Form ── */}
            <div className="lg:col-span-2 hidden lg:block">
              <HeroEnquiryForm centreName="Kajang" pageUrl="/old-folks-home-in-kajang" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────────────── */}
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
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Why Kajang</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Why Choose Our Old Folks Home in Kajang?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Finding the right old folks home for your loved one is one of the most important decisions a family
                  can make. Located in the heart of southern Klang Valley, Kajang is a growing family-friendly area,
                  and our centre in Taman Kajang Baru along Jalan Bukit sits in a quiet residential neighbourhood
                  — perfect for elderly care.
                </p>
                <p>
                  Our Kajang old folks home is situated near Hospital Kajang, making it easy for families to manage
                  medical appointments. The centre is accessible from SILK Highway, PLUS Highway, and Kajang MRT
                  station, ensuring stress-free family visits from Kajang, Bangi, Semenyih, and surrounding areas.
                </p>
                <p>
                  What sets our Kajang old folks home apart is the strong emphasis on quality in-house dining and
                  personalised care, reflecting the needs of the local Kajang community. Combined with round-the-clock nursing care,
                  dementia programmes, rehabilitation services, and a warm home-like atmosphere, we provide
                  comprehensive elderly care that families can trust.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Southern Klang Valley', 'Near Hospital Kajang', 'Quality Dining', 'SILK Highway Access', 'MRT Accessible'].map((t) => (
                  <span key={t} className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/services/common-area-scenic.jpg"
                alt="Common area at our old folks home in Kajang"
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
              Beyond everyday care, our old folks home in Kajang offers a full range of specialist services.
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
          <div>
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2 text-center">Helpful Guide</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
                How to Choose the Right Old Folks Home
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                Choosing an old folks home is a big decision. Here is a simple checklist of what to look for — and how Genesis Life Care measures up.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              { step: '2', title: 'Free Assessment & Tour', desc: 'Visit our Kajang centre, meet the care team, and we will assess your loved one\'s needs at no charge.' },
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

      {/* ── COST CALCULATOR ─────────────────────────────────────────── */}
      <CostCalculatorSection />

      {/* ── HOME CARE SOLUTIONS ────────────────────────────────────── */}
      <GlcHireSection />

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
