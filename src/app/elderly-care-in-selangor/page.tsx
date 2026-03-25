import { Metadata } from 'next';
import Link from 'next/link';
import { centres, getOtherCentres } from '@/data/centres';
import AtAGlance from '@/components/sections/AtAGlance';
import FacilityGallery from '@/components/sections/FacilityGallery';
import Testimonials from '@/components/sections/Testimonials';
import LocationContact from '@/components/sections/LocationContact';
import OtherCentres from '@/components/sections/OtherCentres';

export const metadata: Metadata = {
  title: 'Elderly Care in Selangor - Nursing Homes Across Selangor | Genesis Life Care',
  description:
    'Looking for elderly care in Selangor? Genesis Life Care operates 4 nursing homes across the Klang Valley — Petaling Jaya, Klang, Kajang & Puchong. 24/7 nursing, dementia care, stroke rehab. Rated 4.7-4.9 stars. Book a free tour.',
  openGraph: {
    title: 'Elderly Care in Selangor - Genesis Life Care Nursing Homes',
    description:
      'Professional elderly care across Selangor. 4 centres in PJ, Klang, Kajang & Puchong. 24/7 nursing, dementia care, stroke rehabilitation. Book a free tour.',
    images: [{ url: '/images/pj-centre.jpg', width: 1200, height: 630, alt: 'Genesis Life Care Selangor Centres' }],
  },
};

export const revalidate = 60;

/* ─── All Selangor centres ─────────────────────────────────────────── */

const selangorCentres = [
  {
    name: 'Petaling Jaya',
    fullName: 'Genesis Life Care Petaling Jaya',
    slug: 'nursing-home-in-petaling-jaya',
    rating: '4.9',
    reviews: 155,
    beds: '50+',
    tag: 'Flagship Centre',
    img: '/images/pj-centre.jpg',
    address: 'No. 33-1, Jalan PJU 5/9, Dataran Sunway, Kota Damansara, 47810 Petaling Jaya, Selangor',
    areas: 'PJ, Kota Damansara, Damansara, Bangsar, Mont Kiara',
  },
  {
    name: 'Klang',
    fullName: 'Genesis Life Care Klang',
    slug: 'nursing-home-in-klang',
    rating: '4.8',
    reviews: 45,
    beds: '120+',
    tag: 'Original Centre',
    img: '/images/klang-centre.jpg',
    address: 'No.3, Jalan Istana, Amverton Business Centre, 41500 Klang, Selangor',
    areas: 'Klang, Shah Alam, Meru, Kapar, Port Klang',
  },
  {
    name: 'Kajang',
    fullName: 'Genesis Life Care Kajang',
    slug: 'nursing-home-kajang',
    rating: '4.7',
    reviews: 32,
    beds: '120+',
    tag: 'Southern KV',
    img: '/images/kajang-centre.jpeg',
    address: 'No. 16, Jalan Reko Sentral 1, Reko Sentral, 43000 Kajang, Selangor',
    areas: 'Kajang, Bangi, Semenyih, Serdang, Cheras South',
  },
  {
    name: 'Puchong',
    fullName: 'Genesis Life Care Puchong',
    slug: 'nursing-home-in-puchong',
    rating: '4.8',
    reviews: 58,
    beds: '120+',
    tag: 'Modern Facility',
    img: '/images/puchong-centre.jpeg',
    address: 'No.33, Jalan TPP 1/1, Taman Perindustrian Puchong, 47100 Puchong, Selangor',
    areas: 'Puchong, Subang Jaya, USJ, Sunway, Kinrara',
  },
];

const phone = '+6019 295 0457';
const phoneCTA = '+6019-295-0457';

const centre = centres['johor-bahru'];
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
    q: 'How many Genesis Life Care centres are there in Selangor?',
    a: 'Genesis Life Care operates 4 centres across Selangor — in Petaling Jaya (Kota Damansara), Klang, Kajang, and Puchong. Each centre provides 24/7 nursing care, dementia programmes, stroke rehabilitation, and on-site doctor consultations.',
  },
  {
    q: 'Which is the best nursing home in Selangor?',
    a: 'Genesis Life Care is one of the highest-rated nursing home providers in Selangor, with Google ratings of 4.7 to 4.9 stars across all four centres. Our Petaling Jaya flagship centre is rated 4.9 stars with over 155 reviews. Each centre offers professional nursing, dementia care, and rehabilitation services.',
  },
  {
    q: 'How much does elderly care cost in Selangor?',
    a: 'Genesis Life Care offers affordable elderly care rates across all Selangor centres. Costs vary based on care level, room type, and specific needs. Contact us for a personalised quotation — we are happy to discuss options that suit your family\'s budget.',
  },
  {
    q: 'Do Genesis Life Care centres in Selangor accept dementia patients?',
    a: 'Yes. All four Genesis Life Care centres in Selangor provide psychologist-led dementia and memory care programmes. Our structured cognitive stimulation activities help maintain mental function and quality of life for residents with dementia.',
  },
  {
    q: 'Can I visit a Genesis Life Care centre before making a decision?',
    a: 'Absolutely. We encourage families to book a free tour at any of our four Selangor centres. You can see the living spaces, meet the care team, and ask questions — with no obligations. Call us at +6019-295-0457 to arrange a visit.',
  },
  {
    q: 'What areas in Selangor does Genesis Life Care serve?',
    a: 'Our four centres are strategically located to serve the entire Klang Valley. The PJ centre covers Damansara, Bangsar, and Mont Kiara areas. Klang serves Shah Alam and Port Klang. Kajang covers Bangi, Semenyih, and south Cheras. Puchong serves Subang Jaya, USJ, and Sunway.',
  },
];

/* ─── JSON-LD Structured Data ───────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: 'Genesis Life Care Selangor',
      description: 'Professional elderly care and nursing homes across Selangor, Malaysia.',
      url: 'https://genesiscare.com.my/elderly-care-in-selangor',
      telephone: '+6019-295-0457',
      areaServed: { '@type': 'State', name: 'Selangor' },
      location: selangorCentres.map((c) => ({
        '@type': 'Place',
        name: c.fullName,
        address: {
          '@type': 'PostalAddress',
          streetAddress: c.address.split(',').slice(0, -2).join(','),
          addressLocality: c.name,
          addressRegion: 'Selangor',
          addressCountry: 'MY',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: c.rating,
          reviewCount: String(c.reviews),
          bestRating: '5',
        },
      })),
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

export default function ElderlyCarSelangor() {
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
                  Selangor
                </span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ color: 'white' }}>
                  4 Centres Across Klang Valley
                </span>
              </div>

              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'white' }}>
                Elderly Care in Selangor
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5" style={{ color: 'white' }}>
                Elderly Care Centres<br />Across Selangor
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl" style={{ color: 'white' }}>
                Genesis Life Care operates 4 professional nursing homes across Selangor&apos;s
                Klang Valley — in Petaling Jaya, Klang, Kajang, and Puchong. Each centre
                offers 24/7 nursing, on-site doctor consultations, dementia care, and
                comprehensive rehabilitation services.
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
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {phoneCTA}
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/images/pj-centre.jpg"
                  alt="Genesis Life Care centres across Selangor"
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
                  <p className="text-sm font-bold text-gray-800">4 Locations</p>
                  <p className="text-xs text-gray-500">across Selangor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AtAGlance highlights={centre.highlights} />

      {/* ── ABOUT ELDERLY CARE IN SELANGOR ────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Elderly Care in Selangor</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Quality Nursing Homes Across the Klang Valley
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Selangor is Malaysia&apos;s most developed and populated state, home to millions
                of families across the Klang Valley. As the population ages, finding
                professional, reliable, and affordable elderly care has become a priority
                for families throughout the state.
              </p>
              <p>
                Genesis Life Care has 4 centres strategically located across the Klang Valley
                to ensure families in Selangor always have a quality nursing home within
                reach. Whether you are in Petaling Jaya, Klang, Kajang, or Puchong, there
                is a Genesis centre near you — each offering 24-hour nursing care, weekly
                on-site doctor consultations, psychologist-led dementia programmes, and a
                full rehabilitation department.
              </p>
              <p>
                Our centres are rated between 4.7 and 4.9 stars on Google, with a combined
                total of over 290 reviews from satisfied families across Selangor. We offer
                affordable rates without compromising on care quality, making professional
                elderly care accessible to more Malaysian families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL CENTRES GRID ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Selangor Centres</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              4 Nursing Homes Across the Klang Valley
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Find the Genesis Life Care centre nearest to you. All centres offer the same high standard of professional care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selangorCentres.map((c, i) => (
              <Link
                key={i}
                href={`/${c.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.fullName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gold text-gray-900 text-xs font-bold px-2.5 py-0.5 rounded-full">
                      {c.tag}
                    </span>
                    <span className="text-gold text-sm font-semibold">★ {c.rating}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                    {c.fullName}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">({c.reviews} reviews)</p>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-center">
                      <p className="text-lg font-extrabold text-primary">{c.beds}</p>
                      <p className="text-xs text-gray-500">Beds</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">Serving: {c.areas}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                    View Centre
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Elderly Care Services Available in Selangor
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Comprehensive care services for seniors, available at all four Selangor centres.
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
              Common questions about elderly care options in Selangor.
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
            Find a Genesis Life Care Centre Near You in Selangor
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto" style={{ color: 'white' }}>
            Visit any of our 4 Selangor centres for a free tour. See our care spaces,
            meet the team, and discover why families across the Klang Valley trust Genesis Life Care.
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
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-4 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {phoneCTA}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
