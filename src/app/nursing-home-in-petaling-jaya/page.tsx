import { Metadata } from 'next';
import Link from 'next/link';
import GlcHireSection from '@/components/sections/GlcHireSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

export const metadata: Metadata = {
  title: 'Nursing Home in Petaling Jaya — Genesis Life Care PJ | 24/7 Elderly Care',
  description:
    'Genesis Life Care Petaling Jaya — flagship nursing home in PJ with dedicated memory care wing, rehab facilities & 24/7 nursing care. From RM 2,500/month. Rated 4.9★ on Google. Book a free tour.',
  alternates: {
    canonical: 'https://genesiscare.com.my/nursing-home-in-petaling-jaya',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/nursing-home-in-petaling-jaya' },
  },
  openGraph: {
    title: 'Nursing Home in Petaling Jaya | Genesis Life Care',
    description: 'Flagship centre with memory care wing, rehab & 24/7 nursing. Rated 4.9★ on Google.',
    url: 'https://genesiscare.com.my/nursing-home-in-petaling-jaya',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/pj-centre.jpg', width: 1200, height: 630, alt: 'Genesis Life Care Petaling Jaya nursing home' }],
  },
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
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d101.6317!3d3.1117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDYnNDIuMSJOIDEwMcKwMzcnNTQuMSJF!5e0!3m2!1sen!2smy!4v1700000000000',
  heroImg: '/images/pj-centre.jpg',
};

const highlights = [
  { label: 'Google Rating', value: '4.9 ★', sub: '58 reviews' },
  { label: 'Beds', value: '50+', sub: 'Capacity' },
  { label: 'Established', value: '2020', sub: 'Petaling Jaya' },
  { label: 'Affordable Rates', value: '✓', sub: 'All Centres' },
  { label: 'Care Team', value: '30+', sub: 'Professionals' },
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
    desc: 'Dedicated memory care wing with specialised programmes led by experienced psychologists.',
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
  { src: '/images/pj-centre.jpg', alt: 'Genesis Life Care PJ exterior' },
  { src: '/images/services/rehab-department.jpg', alt: 'Rehabilitation area' },
  { src: '/images/services/bedded-room.jpg', alt: 'Comfortable living space' },
  { src: '/images/services/common-area-scenic.jpg', alt: 'Common area' },
  { src: '/images/services/nursing-station.jpg', alt: 'Care facilities' },
  { src: '/images/services/halal-dinner.jpg', alt: 'Dining area' },
];

const teamMembers = [
  {
    name: 'Sherrelyn',
    role: 'Centre Manager',
    bio: 'Senior physiotherapist leading the PJ rehabilitation team with a multidisciplinary approach.',
    img: '/images/team/team-1.png',
  },
  {
    name: 'Joharry Mustafa',
    role: 'Supervisor',
    bio: 'Ensures smooth operations and serves as liaison between care teams and departments.',
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
    name: 'Mei Ling T.',
    text: 'The PJ centre has been wonderful for my mother. The staff truly care and the memory care wing is exactly what she needed. We feel so relieved knowing she is in good hands.',
    rating: 5,
  },
  {
    name: 'Ahmad R.',
    text: 'Very professional and caring team. The rehab facilities helped my father recover from his stroke much faster than we expected. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Sarah L.',
    text: 'Clean, well-maintained facility with friendly staff. The location in PJ is very convenient for our family to visit regularly. Thank you Genesis!',
    rating: 5,
  },
];

const otherCentres = [
  { name: 'Klang', slug: 'nursing-home-in-klang', rating: '4.8', tag: 'Original Centre' },
  { name: 'Kajang', slug: 'nursing-home-kajang', rating: '4.7', tag: 'Southern KV' },
  { name: 'Puchong', slug: 'nursing-home-in-puchong', rating: '4.8', tag: 'Modern Facility' },
  { name: 'Johor Bahru', slug: 'nursing-home-in-johor-bahru', rating: '4.8', tag: 'Southern Region' },
];

/* ─── Page component ─────────────────────────────────────────────────── */

export default function NursingHomePJ() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Genesis Life Care Petaling Jaya',
    description: 'Flagship nursing home in PJ with dedicated memory care wing, rehab facilities & 24/7 nursing care. Rated 4.9★ on Google.',
    url: 'https://genesiscare.com.my/nursing-home-in-petaling-jaya',
    telephone: '+6019-295-0457',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lot 1, Petaling Utama Avenue, Jalan PJS 1/50, Taman Petaling Utama',
      addressLocality: 'Petaling Jaya',
      addressRegion: 'Selangor',
      postalCode: '46150',
      addressCountry: 'MY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 3.0936,
      longitude: 101.6168,
    },
    image: 'https://genesiscare.com.my/images/pj-centre.jpg',
    priceRange: 'From RM 2,500/month',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '58',
      bestRating: '5',
    },
    medicalSpecialty: ['Geriatric Medicine', 'Rehabilitation', 'Palliative Care'],
    areaServed: ['Petaling Jaya', 'Subang Jaya', 'Kelana Jaya'],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Genesis Life Care',
      url: 'https://genesiscare.com.my',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <main className="bg-white">
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="pj-hero relative bg-gradient-to-br from-primary via-primary-400 to-secondary overflow-hidden">
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left – text */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gold text-gray-900 text-xs font-bold tracking-wide px-3 py-1 rounded-full uppercase">
                  Flagship Centre
                </span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  ★ {centre.rating} Google Rating
                </span>
              </div>

              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-2">
                Nursing Home in Petaling Jaya
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5">
                {centre.fullName}
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                Our flagship centre in PJ features a dedicated memory care wing,
                comprehensive rehabilitation facilities, and 24/7 professional
                nursing care — all in a warm, home-like environment.
              </p>

              {/* Address */}
              <div className="flex flex-col gap-4 mb-8 text-white/90 text-sm">
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

            {/* Right – image */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={centre.heroImg}
                  alt={`${centre.fullName} facility`}
                  className="w-full h-[420px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Affordable Rates</p>
                  <p className="text-xs text-gray-500">Ministry Approved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-primary">{h.value}</p>
                <p className="text-sm font-semibold text-gray-700 mt-1">{h.label}</p>
                <p className="text-xs text-gray-400">{h.sub}</p>
              </div>
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
                Our Flagship Centre in<br />Petaling Jaya
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Genesis Life Care Petaling Jaya is our flagship nursing home, purpose-built to deliver
                  the highest standard of long-term and rehabilitative care. Located in the heart of
                  Section 51, our centre is easily accessible from major highways and is minutes away
                  from leading hospitals.
                </p>
                <p>
                  What sets the PJ centre apart is our <strong>dedicated Memory Care Wing</strong> — a
                  specialised unit designed for residents living with dementia and Alzheimer&apos;s. The
                  wing is led by experienced psychologists who oversee structured cognitive stimulation
                  programmes and daily activities tailored to each resident.
                </p>
                <p>
                  Our <strong>comprehensive rehabilitation facilities</strong> include physiotherapy and
                  occupational therapy suites, enabling stroke recovery, post-surgery rehabilitation, and
                  mobility improvement programmes — all under one roof.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {['Memory Care Wing', 'Rehab Facilities', 'Physio & OT', '24/7 Nursing', 'Doctor Visits', 'Quality Dining'].map((tag) => (
                  <span key={tag} className="bg-primary/8 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/pj-centre.jpg"
                alt="Genesis Life Care Petaling Jaya building"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-primary text-white rounded-xl px-6 py-4 shadow-lg hidden sm:block">
                <p className="text-3xl font-extrabold">{centre.beds}</p>
                <p className="text-sm font-medium text-white/80">Bed capacity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Care Services at PJ Centre
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              We offer a comprehensive range of care services tailored to each resident&apos;s needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link
                key={i}
                href={svc.link}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={svc.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
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
              Our PJ centre is designed for comfort, safety, and a home-like atmosphere.
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
              Meet the PJ Care Team
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Our dedicated professionals are committed to delivering the highest standard of care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 text-center">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
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
                  href={`https://wa.me/60192950457`}
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
            <p className="text-gray-500 mt-3">Not in PJ? We have 4 more locations across Malaysia.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherCentres.map((c, i) => (
              <Link
                key={i}
                href={`/${c.slug}`}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group text-center"
              >
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

      {/* ── GLC HIRE SECTION ──────────────────────────────────────────── */}
      <GlcHireSection />

      {/* ── FAQ SECTION ────────────────────────────────────────────────── */}
      <FaqSection
        faqs={[
          { q: 'How much does elderly care cost at the Petaling Jaya centre?', a: 'Our flagship PJ centre offers premium care starting from RM 2,800/month for standard rooms. We provide various accommodation and care level options with flexible payment terms.' },
          { q: 'Where is the Genesis Life Care Petaling Jaya centre?', a: 'Our flagship centre is located in Petaling Jaya with excellent proximity to major highways and medical facilities. The modern facility offers a garden setting with convenient access for family visits.' },
          { q: 'What makes the PJ centre our flagship?', a: 'The Petaling Jaya centre is our newest and most comprehensive facility with specialized Memory Care Wing, advanced rehabilitation equipment, and experienced multidisciplinary care team.' },
          { q: 'What specialized care programs does PJ offer?', a: 'We provide comprehensive 24/7 nursing, specialized dementia & memory care, stroke & occupational rehabilitation, palliative care, post-op recovery, and active Senior Daycare programmes.' },
          { q: 'How do I book a tour of the PJ centre?', a: 'Contact us at +6019-295-0457 or complete our online contact form. Tours are available daily from 9:00 AM to 6:00 PM and include a full facility walkthrough.' },
        ]}
        heading="Frequently Asked Questions"
        label="PETALING JAYA CENTRE"
      />

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <FinalCtaSection
        heading="Ready to Visit Our Petaling Jaya Centre?"
        description="Book a free tour of our flagship PJ facility. See the Memory Care Wing, rehabilitation area, and meet our care team — no obligations."
        primaryLabel="Book a Free Tour"
      />
    </main>
    </>
  );
}
