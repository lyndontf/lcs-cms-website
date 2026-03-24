import { Metadata } from 'next';
import Link from 'next/link';
import { centres, getOtherCentres } from '@/data/centres';
import AtAGlance from '@/components/sections/AtAGlance';
import FacilityGallery from '@/components/sections/FacilityGallery';
import Testimonials from '@/components/sections/Testimonials';
import LocationContact from '@/components/sections/LocationContact';
import OtherCentres from '@/components/sections/OtherCentres';

export const metadata: Metadata = {
  title: 'Elderly Care in Subang Jaya - Nursing Home Near Subang Jaya | Genesis Life Care',
  description:
    'Looking for elderly care near Subang Jaya? Genesis Life Care has two centres nearby — Petaling Jaya (~20 min) and Puchong (~15 min). 24/7 nursing care, dementia programmes, stroke rehab & on-site doctor. Rated 4.9★. Book a free tour.',
  openGraph: {
    title: 'Elderly Care Near Subang Jaya - Genesis Life Care',
    description:
      'Professional elderly care near Subang Jaya. Two nearby centres in PJ and Puchong. 24/7 nursing, dementia care, stroke rehabilitation.',
    images: [{ url: '/images/pj-centre.jpg', width: 1200, height: 630, alt: 'Genesis Life Care Petaling Jaya' }],
  },
};

export const revalidate = 60;

/* ─── Nearest centres data ─────────────────────────────────────────── */

const pjCentre = {
  name: 'Petaling Jaya',
  fullName: 'Genesis Life Care Petaling Jaya',
  slug: 'nursing-home-in-petaling-jaya',
  phone: '+6012 321 0457',
  phoneCTA: '+6012-321-0457',
  address: 'No. 33-1, Jalan PJU 5/9, Dataran Sunway, Kota Damansara, 47810 Petaling Jaya, Selangor',
  rating: '4.9',
  reviews: 155,
  beds: '50+',
  distance: '~20 minutes',
  img: '/images/pj-centre.jpg',
  badge: 'Flagship Centre',
};

const puchongCentre = {
  name: 'Puchong',
  fullName: 'Genesis Life Care Puchong',
  slug: 'nursing-home-in-puchong',
  phone: '+6012 321 0457',
  phoneCTA: '+6012-321-0457',
  address: 'No.33, Jalan TPP 1/1, Taman Perindustrian Puchong, 47100 Puchong, Selangor',
  rating: '4.8',
  reviews: 58,
  beds: '120+',
  distance: '~15 minutes',
  img: '/images/puchong-centre.jpeg',
  badge: 'Nearest Centre',
};

const centre = centres['petaling-jaya'];
const otherCentres = getOtherCentres(centre.name);

const services = [
  {
    title: 'Elderly Nursing Care',
    desc: 'Round-the-clock professional nursing with personalised care plans for every resident.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    link: '/our-services',
  },
  {
    title: 'Dementia & Memory Care',
    desc: 'Psychologist-led dementia care with structured cognitive stimulation activities.',
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
  {
    title: 'Senior Daycare',
    desc: 'Daytime care programmes with social activities, meals, and supervision for seniors.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
    link: '/senior-daycare',
  },
];

const faqs = [
  {
    q: 'Is there a nursing home near Subang Jaya?',
    a: 'Yes. Genesis Life Care has two centres near Subang Jaya — our Puchong centre (approximately 15 minutes away) and our Petaling Jaya centre in Kota Damansara (approximately 20 minutes away). Both offer 24/7 nursing care, dementia programmes, and stroke rehabilitation services.',
  },
  {
    q: 'How much does elderly care cost near Subang Jaya?',
    a: 'Genesis Life Care offers affordable rates for professional elderly care at both our Puchong and Petaling Jaya centres. Costs vary based on care level and room type. Contact us for a personalised quotation — we are happy to discuss options that suit your family\'s budget.',
  },
  {
    q: 'Which Genesis centre is closest to Subang Jaya?',
    a: 'Our Puchong centre (Taman Perindustrian Puchong) is the closest, approximately 15 minutes from Subang Jaya. Our Petaling Jaya centre in Kota Damansara is also accessible at approximately 20 minutes away. Both centres offer the same high standard of care.',
  },
  {
    q: 'What services are available for elderly residents from Subang Jaya?',
    a: 'Both our nearby centres provide elderly nursing care, dementia and memory care, stroke rehabilitation, palliative care, post-operative recovery, and senior daycare programmes. All services include on-site doctor consultations.',
  },
  {
    q: 'Can I visit the nursing homes near Subang Jaya before committing?',
    a: 'Absolutely. We encourage families to book a free tour of either our Puchong or Petaling Jaya facility. You can see the living spaces, meet the care team, and ask any questions — with no obligations.',
  },
  {
    q: 'What makes Genesis Life Care different from other nursing homes near Subang Jaya?',
    a: 'Genesis Life Care stands out with our on-site doctor, psychologist-led dementia programmes, professional physiotherapy team, and affordable rates. Our PJ centre is rated 4.9 stars and our Puchong centre is rated 4.8 stars on Google from satisfied families.',
  },
];

/* ─── JSON-LD Structured Data ───────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: 'Genesis Life Care Petaling Jaya',
      description: 'Professional elderly care and nursing home near Subang Jaya, Petaling Jaya.',
      url: 'https://genesiscare.com.my/elderly-care-in-subang-jaya',
      telephone: '+60123210457',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No. 33-1, Jalan PJU 5/9, Dataran Sunway, Kota Damansara',
        addressLocality: 'Petaling Jaya',
        addressRegion: 'Selangor',
        postalCode: '47810',
        addressCountry: 'MY',
      },
      areaServed: [
        { '@type': 'City', name: 'Subang Jaya' },
        { '@type': 'City', name: 'Petaling Jaya' },
        { '@type': 'City', name: 'Puchong' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '155',
        bestRating: '5',
      },
    },
    {
      '@type': 'MedicalBusiness',
      name: 'Genesis Life Care Puchong',
      description: 'Professional elderly care and nursing home near Subang Jaya, Puchong.',
      url: 'https://genesiscare.com.my/elderly-care-in-subang-jaya',
      telephone: '+60123210457',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No.33, Jalan TPP 1/1, Taman Perindustrian Puchong',
        addressLocality: 'Puchong',
        addressRegion: 'Selangor',
        postalCode: '47100',
        addressCountry: 'MY',
      },
      areaServed: [
        { '@type': 'City', name: 'Subang Jaya' },
        { '@type': 'City', name: 'Puchong' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '58',
        bestRating: '5',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

/* ─── Page Component ────────────────────────────────────────────────── */

export default function ElderlyCareSubangJaya() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gold text-gray-900 text-xs font-bold tracking-wide px-3 py-1 rounded-full uppercase">
                  Near Subang Jaya
                </span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ color: 'white' }}>
                  ★ 4.9 Google Rating
                </span>
              </div>

              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'white' }}>
                Elderly Care Near Subang Jaya
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5" style={{ color: 'white' }}>
                Professional Elderly Care<br />Near Subang Jaya
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl" style={{ color: 'white' }}>
                Families in Subang Jaya trust Genesis Life Care for quality nursing home
                services. We have two centres nearby — Puchong ({puchongCentre.distance}) and
                Petaling Jaya ({pjCentre.distance}) — offering 24/7 nursing, on-site doctor
                consultations, dementia care, and comprehensive rehabilitation.
              </p>

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
                  href={`tel:${puchongCentre.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {puchongCentre.phoneCTA}
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={puchongCentre.img}
                  alt="Genesis Life Care Puchong — nearest elderly care to Subang Jaya"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">2 Centres Nearby</p>
                  <p className="text-xs text-gray-500">from Subang Jaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AtAGlance highlights={centre.highlights} />

      {/* ── ABOUT ELDERLY CARE IN SUBANG JAYA ──────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Elderly Care Near Subang Jaya</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Quality Nursing Home Services for Subang Jaya Families
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Subang Jaya is one of Selangor&apos;s largest and most vibrant townships, home to
                a diverse community of families. As parents and grandparents age, finding reliable
                and professional elderly care close to home becomes a priority for Subang Jaya residents.
              </p>
              <p>
                Genesis Life Care has two centres conveniently located near Subang Jaya. Our Puchong
                centre at Taman Perindustrian Puchong (TPP) is approximately 15 minutes away, while
                our Petaling Jaya centre in Kota Damansara is about 20 minutes away. Both facilities
                provide 24-hour nursing care, weekly on-site doctor consultations, psychologist-led
                dementia programmes, and full rehabilitation departments with physiotherapy and
                occupational therapy.
              </p>
              <p>
                Whether your loved one needs long-term residential care, post-surgery recovery, or
                specialised dementia support, our nearby centres offer safe and nurturing environments
                with affordable rates. Our PJ centre is rated {pjCentre.rating} stars with over{' '}
                {pjCentre.reviews} reviews, and our Puchong centre is rated {puchongCentre.rating} stars
                with {puchongCentre.reviews} reviews on Google.
              </p>
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
              Elderly Care Services Available Near Subang Jaya
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Comprehensive care services for seniors, available at both our Puchong and Petaling Jaya centres.
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

      <FacilityGallery images={centre.facilityImages} centreName={centre.name} />

      <Testimonials testimonials={centre.testimonials} rating={centre.rating} reviews={String(centre.reviews)} />

      {/* ── NEAREST CENTRES (TWO CARDS) ────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Nearest Centres</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Two Centres Near Subang Jaya
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Choose the centre that suits your family best — both are easily accessible from Subang Jaya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Puchong Centre Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-56">
                <img
                  src={puchongCentre.img}
                  alt={puchongCentre.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gold text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    {puchongCentre.badge}
                  </span>
                  <span className="text-gold text-sm font-semibold">★ {puchongCentre.rating}</span>
                  <span className="text-gray-400 text-xs">({puchongCentre.reviews} reviews)</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{puchongCentre.fullName}</h3>
                <p className="text-sm text-gray-500 mb-4">{puchongCentre.address}</p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-xl font-extrabold text-primary">{puchongCentre.beds}</p>
                    <p className="text-xs text-gray-500">Bed Capacity</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-xl font-extrabold text-primary">{puchongCentre.distance}</p>
                    <p className="text-xs text-gray-500">From Subang Jaya</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold px-4 py-2.5 rounded-lg hover:bg-primary-600 transition-colors text-sm"
                  >
                    Book a Free Tour
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href={`/${puchongCentre.slug}`}
                    className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* PJ Centre Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-56">
                <img
                  src={pjCentre.img}
                  alt={pjCentre.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gold text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    {pjCentre.badge}
                  </span>
                  <span className="text-gold text-sm font-semibold">★ {pjCentre.rating}</span>
                  <span className="text-gray-400 text-xs">({pjCentre.reviews} reviews)</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pjCentre.fullName}</h3>
                <p className="text-sm text-gray-500 mb-4">{pjCentre.address}</p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-xl font-extrabold text-primary">{pjCentre.beds}</p>
                    <p className="text-xs text-gray-500">Bed Capacity</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-xl font-extrabold text-primary">{pjCentre.distance}</p>
                    <p className="text-xs text-gray-500">From Subang Jaya</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold px-4 py-2.5 rounded-lg hover:bg-primary-600 transition-colors text-sm"
                  >
                    Book a Free Tour
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href={`/${pjCentre.slug}`}
                    className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationContact centre={centre} />

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Common questions about elderly care options near Subang Jaya.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-base font-semibold text-gray-900 pr-4">{faq.q}</h3>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <OtherCentres centres={otherCentres} currentCentreName={centre.name} />

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-r from-primary via-primary-800 to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Find Quality Elderly Care Near Subang Jaya
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto" style={{ color: 'white' }}>
            Visit our Puchong or Petaling Jaya centre for a free tour. See our care spaces,
            meet the team, and discover why families across Subang Jaya trust Genesis Life Care.
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
              href={`tel:${puchongCentre.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-4 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {puchongCentre.phoneCTA}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
