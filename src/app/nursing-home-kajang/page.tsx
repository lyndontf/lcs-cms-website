import { Metadata } from 'next';
import Link from 'next/link';

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
  { label: 'Established', value: '2021', sub: 'Southern KV' },
  { label: 'Affordable Rates', value: '✓', sub: 'All Centres' },
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

export default function NursingHomeKajang() {
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
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
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
                  Southern KV
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
                  <p className="text-xs text-gray-900">Ministry Approved</p>
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
                Family-Friendly Care<br />in the Southern KV
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Genesis Life Care Kajang serves families across the southern Klang Valley
                  corridor — from Kajang and Bangi to Semenyih and Putrajaya. Our centre
                  provides a warm, home-like environment where residents feel welcome and cared for.
                </p>
                <p>
                  We take pride in our personalised approach to care. Our <strong>in-house
                  kitchen</strong> prepares nutritious meals supervised by a dietician, and we
                  provide comfortable facilities designed to make every resident feel at home.
                </p>
                <p>
                  The centre offers the full range of Genesis services including 24/7 nursing
                  care, weekly doctor consultations, rehabilitation therapy, and structured
                  activity programmes designed to keep residents active and engaged.
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
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Care Services at Kajang Centre
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

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-r from-primary via-primary-800 to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Visit Our Kajang Centre?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto" style={{color: 'white'}}>
            Book a free tour of our Kajang facility. See our care spaces,
            meet the team, and learn about our programmes — no obligations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-4 rounded-xl hover:bg-yellow-400 transition-colors whitespace-nowrap"
            >
              Book a Free Tour
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href={`tel:${centre.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-4 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {centre.phoneCTA}
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
