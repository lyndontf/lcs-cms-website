import { Metadata } from 'next';
import Link from 'next/link';
import { centres, getOtherCentres } from '@/data/centres';
import AtAGlance from '@/components/sections/AtAGlance';
import FacilityGallery from '@/components/sections/FacilityGallery';
import Testimonials from '@/components/sections/Testimonials';
import LocationContact from '@/components/sections/LocationContact';
import OtherCentres from '@/components/sections/OtherCentres';

export const metadata: Metadata = {
  title: 'Stroke Rehabilitation in Petaling Jaya - Stroke Recovery PJ | Genesis Life Care',
  description:
    'Professional stroke rehabilitation in Petaling Jaya. Physiotherapy, occupational therapy & speech therapy for stroke recovery. Personalised rehab plans at Genesis Life Care PJ. Rated 4.9★. Book a free consultation.',
  openGraph: {
    title: 'Stroke Rehabilitation in Petaling Jaya - Genesis Life Care',
    description:
      'Comprehensive stroke rehabilitation in PJ. Physiotherapy, occupational therapy, speech therapy & personalised recovery plans. Visit our Petaling Jaya centre.',
    images: [{ url: '/images/pj-centre.jpg', width: 1200, height: 630, alt: 'Genesis Life Care Petaling Jaya' }],
  },
};

export const revalidate = 60;

/* ─── Centre data ──────────────────────────────────────────── */

const centre = {
  name: 'Petaling Jaya',
  fullName: 'Genesis Life Care Petaling Jaya',
  slug: 'nursing-home-in-petaling-jaya',
  phone: '+6019 295 0457',
  phoneCTA: '+6019-295-0457',
  address: 'No. 33-1, Jalan PJU 5/9, Dataran Sunway, Kota Damansara, 47810 Petaling Jaya, Selangor',
  rating: '4.9',
  reviews: 155,
  beds: '50+',
  img: '/images/pj-centre.jpg',
};

const services = [
  {
    title: 'Elderly Nursing Care',
    desc: 'Round-the-clock professional nursing with personalised care plans for every resident.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    link: '/our-services',
    highlight: false,
  },
  {
    title: 'Dementia & Memory Care',
    desc: 'Psychologist-led dementia care with structured cognitive stimulation activities.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    link: '/dementia-care',
    highlight: false,
  },
  {
    title: 'Stroke Rehabilitation',
    desc: 'Comprehensive physio and occupational therapy to help stroke survivors regain independence.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    link: '/stroke-rehabilitation-centre',
    highlight: true,
  },
  {
    title: 'Palliative Care',
    desc: 'Compassionate end-of-life care focused on comfort, dignity, and family support.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    link: '/palliative-care-malaysia',
    highlight: false,
  },
  {
    title: 'Post-Op Recovery',
    desc: 'Short-term rehabilitation after surgery — get back on your feet with expert care.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    link: '/post-op-care-malaysia',
    highlight: false,
  },
  {
    title: 'Senior Daycare',
    desc: 'Daytime care programmes with social activities, meals, and supervision for seniors.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
    link: '/senior-daycare',
    highlight: false,
  },
];

const rehabFeatures = [
  {
    title: 'Physiotherapy',
    desc: 'Targeted exercises to regain mobility, strength, and balance after stroke. Our physiotherapists design progressive programmes tailored to each patient.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Occupational Therapy',
    desc: 'Helping stroke survivors relearn daily activities such as dressing, eating, and personal hygiene to restore independence in everyday life.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: 'Speech & Language Therapy',
    desc: 'Specialised therapy to help patients recover communication skills, address swallowing difficulties, and rebuild confidence in verbal interaction.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    title: 'Personalised Recovery Plans',
    desc: 'Every stroke patient receives an individualised rehabilitation plan with clear milestones, regular assessments, and adjustments based on progress.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'Family Involvement',
    desc: 'We provide caregiver training, regular progress updates, and family counselling to ensure a supportive recovery environment beyond the centre.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
];

const faqs = [
  {
    q: 'What stroke rehabilitation services are available in Petaling Jaya?',
    a: 'Genesis Life Care Petaling Jaya offers comprehensive stroke rehabilitation including physiotherapy, occupational therapy, and speech and language therapy. Our multidisciplinary team designs personalised recovery plans to help stroke survivors regain mobility, independence, and communication skills.',
  },
  {
    q: 'How soon after a stroke should rehabilitation begin?',
    a: 'Stroke rehabilitation should ideally begin as soon as the patient is medically stable, typically within 24 to 48 hours after the stroke. Early rehabilitation has been shown to significantly improve recovery outcomes. Our team works closely with hospitals to ensure a smooth transition into our rehab programme.',
  },
  {
    q: 'How long does stroke rehabilitation take at Genesis Life Care PJ?',
    a: 'The duration of stroke rehabilitation varies depending on the severity of the stroke and individual recovery progress. Some patients see significant improvement within weeks, while others may require several months of therapy. We set personalised milestones and regularly reassess each patient\'s plan.',
  },
  {
    q: 'Does Genesis Life Care PJ provide speech therapy for stroke patients?',
    a: 'Yes, our Petaling Jaya centre provides speech and language therapy as part of our stroke rehabilitation programme. This includes therapy for communication difficulties such as aphasia, as well as swallowing therapy for patients with dysphagia following a stroke.',
  },
  {
    q: 'How much does stroke rehabilitation cost in Petaling Jaya?',
    a: 'Stroke rehabilitation costs vary based on the intensity and duration of therapy required. Genesis Life Care offers competitive and transparent pricing. Contact us for a personalised quotation — we are happy to discuss options that suit your family\'s budget and insurance coverage.',
  },
  {
    q: 'Can family members be involved in the stroke recovery process?',
    a: 'Absolutely. Family involvement is a key part of our stroke rehabilitation approach. We provide caregiver training sessions, regular progress updates, and family counselling to help you support your loved one\'s recovery journey both during and after their stay with us.',
  },
];

const sharedCentre = centres['petaling-jaya'];
const otherCentres = getOtherCentres(sharedCentre.name);

/* ─── JSON-LD Structured Data ───────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: 'Genesis Life Care Petaling Jaya',
      description: 'Professional stroke rehabilitation centre in Petaling Jaya offering physiotherapy, occupational therapy, and speech therapy for stroke recovery.',
      url: 'https://genesiscare.com.my/stroke-rehabilitation-in-petaling-jaya',
      telephone: '+6019-295-0457',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No. 33-1, Jalan PJU 5/9, Dataran Sunway, Kota Damansara',
        addressLocality: 'Petaling Jaya',
        addressRegion: 'Selangor',
        postalCode: '47810',
        addressCountry: 'MY',
      },
      areaServed: { '@type': 'City', name: 'Petaling Jaya' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '155',
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

export default function StrokeRehabPetalingJaya() {
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
                  Stroke Rehabilitation
                </span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ color: 'white' }}>
                  ★ {centre.rating} Google Rating
                </span>
              </div>

              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'white' }}>
                Stroke Recovery in Petaling Jaya
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5" style={{ color: 'white' }}>
                Stroke Rehabilitation<br />in Petaling Jaya
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl" style={{ color: 'white' }}>
                Genesis Life Care Petaling Jaya provides comprehensive stroke rehabilitation
                with physiotherapy, occupational therapy, and speech therapy. Our
                multidisciplinary team helps stroke survivors regain independence with
                personalised recovery plans and round-the-clock nursing support.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-400 transition-colors text-sm whitespace-nowrap"
                >
                  Book a Free Consultation
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

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={centre.img}
                  alt="Stroke Rehabilitation Centre in Petaling Jaya — Genesis Life Care"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Stroke Rehab</p>
                  <p className="text-xs text-gray-500">Specialist Centre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AtAGlance highlights={sharedCentre.highlights} />

      {/* ── ABOUT STROKE REHABILITATION ─────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Stroke Rehabilitation</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Expert Stroke Recovery Services in Petaling Jaya
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A stroke can be a life-changing event, affecting mobility, speech, and the ability
                to perform everyday tasks. The road to recovery requires early, consistent, and
                professional rehabilitation guided by a team of specialists. In Petaling Jaya,
                Genesis Life Care provides exactly that — a structured stroke rehabilitation
                programme designed to help patients recover as fully as possible.
              </p>
              <p>
                Our approach combines physiotherapy to restore movement and balance, occupational
                therapy to help patients relearn daily activities, and speech and language therapy
                for those facing communication or swallowing difficulties. Each patient receives
                a personalised recovery plan with clear milestones and regular progress reviews
                by our multidisciplinary team.
              </p>
              <p>
                Located in Kota Damansara, our Petaling Jaya centre offers 24-hour nursing care,
                on-site doctor consultations, and a dedicated rehabilitation department. Whether
                your loved one is in the early stages of post-stroke recovery or needs ongoing
                rehabilitation, Genesis Life Care provides a safe and supportive environment.
                We are rated {centre.rating} stars on Google with over {centre.reviews} reviews
                from families across the Klang Valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STROKE REHABILITATION PROGRAMME ─────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Programme</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Our Stroke Rehabilitation Programme
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              A comprehensive, multidisciplinary approach to stroke recovery at our Petaling Jaya centre.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rehabFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
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
              Care Services at Our Petaling Jaya Centre
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Comprehensive care services for seniors, including specialist stroke rehabilitation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link
                key={i}
                href={svc.link}
                className={`bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-all group ${
                  svc.highlight
                    ? 'border-2 shadow-md'
                    : 'border-gray-100 hover:border-primary/20'
                }`}
                style={svc.highlight ? { borderColor: '#229CD0' } : undefined}>
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

      <FacilityGallery images={sharedCentre.facilityImages} centreName={sharedCentre.name} />

      <Testimonials testimonials={sharedCentre.testimonials} rating={sharedCentre.rating} reviews={String(sharedCentre.reviews)} />

      {/* ── CENTRE INFO ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Centre</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Visit Our Petaling Jaya Centre
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Our flagship centre in Kota Damansara with dedicated stroke rehabilitation facilities.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src={centre.img}
                  alt={centre.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gold text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    Flagship Centre
                  </span>
                  <span className="text-gold text-sm font-semibold">★ {centre.rating}</span>
                  <span className="text-gray-400 text-xs">({centre.reviews} reviews)</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{centre.fullName}</h3>
                <p className="text-sm text-gray-500 mb-4">{centre.address}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-extrabold text-primary">{centre.beds}</p>
                    <p className="text-xs text-gray-500">Bed Capacity</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-extrabold text-primary">24/7</p>
                    <p className="text-xs text-gray-500">Nursing Care</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-3 rounded-lg hover:bg-primary-600 transition-colors text-sm"
                  >
                    Book a Free Consultation
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href={`/${centre.slug}`}
                    className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-5 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    View Centre Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationContact centre={sharedCentre} />

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Common questions about stroke rehabilitation in Petaling Jaya.
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

      <OtherCentres centres={otherCentres} currentCentreName={sharedCentre.name} />

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
            Start Your Stroke Recovery Journey in Petaling Jaya
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto" style={{ color: 'white' }}>
            Visit our Petaling Jaya centre for a free consultation. Meet our rehabilitation team
            and discover how we can help your loved one recover from stroke.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-4 rounded-xl hover:bg-yellow-400 transition-colors whitespace-nowrap"
            >
              Book a Free Consultation
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
  );
}
