import { Metadata } from 'next';
import Link from 'next/link';
import GlcHireSection from '@/components/sections/GlcHireSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

export const metadata: Metadata = {
  title: 'Elderly Care Services in Malaysia — Nursing, Dementia & Rehab | Genesis Life Care',
  description:
    'Comprehensive elderly care services across 5 centres: 24/7 nursing care, dementia & memory care, stroke rehabilitation, palliative care, post-op recovery, respite care & senior daycare. Government-approved. Book a free consultation.',
  alternates: {
    canonical: 'https://genesiscare.com.my/our-services',
  },
  openGraph: {
    title: 'Elderly Care Services in Malaysia | Genesis Life Care',
    description: '24/7 nursing care, dementia care, stroke rehabilitation, palliative care & more across 5 centres in Selangor & Johor.',
    url: 'https://genesiscare.com.my/our-services',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/rehab-department.jpg', width: 1200, height: 630, alt: 'Genesis Life Care rehabilitation and care services' }],
  },
};

export const revalidate = 60;

/* ─── Services data ──────────────────────────────────────────────────── */

const services = [
  {
    id: 'elderly-nursing-care',
    title: 'Elderly Nursing Care',
    shortDesc: '24/7 professional nursing care in a warm, homelike environment with personalised care plans.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    longDesc: [
      'Our flagship service provides round-the-clock professional nursing care for seniors who need daily assistance and medical supervision. Every resident receives a personalised care plan developed in consultation with their family and our medical team.',
      'Our qualified nurses and caregivers manage medication schedules, monitor vital signs, assist with daily activities, and ensure each resident is comfortable, safe, and engaged throughout the day.',
      'With dietician-supervised meal plans, structured daily activities, and regular doctor consultations, our nursing care goes beyond the basics to create a fulfilling living experience for every resident.',
    ],
    features: [
      '24/7 professional nursing supervision',
      'Personalised care plans for every resident',
      'Medication management and vital sign monitoring',
      'Dietician-supervised nutritious meals',
      'Weekly doctor consultations and health reviews',
    ],
    img: '/images/services/bedded-room.jpg',
    imgAlt: 'Professional nurse caring for elderly resident',
  },
  {
    id: 'dementia-care',
    title: 'Dementia & Memory Care',
    shortDesc: 'Psychologist-led dementia care programmes with structured cognitive stimulation activities.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    longDesc: [
      'Genesis Life Care provides specialised care for residents living with Alzheimer\'s disease, dementia, and Parkinson\'s disease. Our programmes are designed and led by experienced psychologists who understand the unique challenges of memory-related conditions.',
      'We use evidence-based approaches including Cognitive Stimulation Therapy (CST) to help maintain cognitive function and quality of life. Our safe, structured environment is designed to reduce confusion and anxiety while encouraging independence where possible.',
      'Our trained caregivers understand the importance of patience, routine, and meaningful engagement. Families receive regular updates and guidance on how to support their loved ones throughout the journey.',
    ],
    features: [
      'Psychologist-led cognitive stimulation programmes',
      'Safe and structured living environment',
      'Trained caregivers specialised in memory care',
      'Family support groups and education',
      'Personalised activity programmes to maintain function',
    ],
    img: '/images/services/common-area-scenic.jpg',
    imgAlt: 'Memory care activity session with residents',
  },
  {
    id: 'stroke-rehabilitation',
    title: 'Stroke Rehabilitation',
    shortDesc: 'Comprehensive physio and occupational therapy to help stroke survivors regain independence.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    longDesc: [
      'Our stroke rehabilitation programme combines physiotherapy, occupational therapy, and speech therapy to help survivors regain as much independence as possible. Each patient receives an individualised recovery plan based on their specific needs and goals.',
      'Our multidisciplinary team works together to address physical, cognitive, and emotional aspects of stroke recovery. From relearning daily activities to rebuilding strength and mobility, we support patients at every stage of their journey.',
      'We track progress with regular assessments and adjust treatment plans accordingly. Family members are actively involved in the rehabilitation process and receive training to support continued recovery at home.',
    ],
    features: [
      'Individualised physiotherapy programmes',
      'Occupational therapy for daily living skills',
      'Speech and language therapy when needed',
      'Regular progress assessments and goal-setting',
      'Family training for home transition support',
    ],
    img: '/images/services/rehab-department.jpg',
    imgAlt: 'Physiotherapy session for stroke rehabilitation',
  },
  {
    id: 'palliative-care',
    title: 'Palliative Care',
    shortDesc: 'Compassionate end-of-life care focused on comfort, dignity, and family support.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    longDesc: [
      'Our palliative care programme focuses on providing comfort, dignity, and quality of life for residents with serious or life-limiting illnesses. We believe that every person deserves compassionate care that addresses their physical, emotional, and spiritual needs.',
      'Our trained team manages pain and symptoms effectively while providing emotional support to both residents and their families. We create a peaceful, caring environment where families can spend meaningful time together.',
      'We work closely with hospitals, hospices, and family physicians to ensure coordinated care. Our team provides guidance and counselling to help families navigate difficult decisions with confidence and support.',
    ],
    features: [
      'Expert pain and symptom management',
      'Emotional and spiritual support for residents',
      'Family counselling and guidance',
      'Dignified, compassionate care environment',
      'Coordinated care with hospitals and specialists',
    ],
    img: '/images/services/single-room.jpg',
    imgAlt: 'Compassionate palliative care environment',
  },
  {
    id: 'post-op-recovery',
    title: 'Post-Operative Recovery',
    shortDesc: 'Short-term rehabilitation after surgery — get back on your feet with expert care.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    longDesc: [
      'Recovering from surgery requires professional care and supervision. Our post-operative recovery programme provides the medical support and rehabilitation services patients need to heal safely and return home stronger.',
      'Whether recovering from hip replacement, cardiac surgery, or other procedures, our team ensures proper wound care, medication management, pain control, and progressive physiotherapy. We monitor recovery closely and communicate regularly with your surgeon.',
      'Our short-term stay options are flexible — from a few weeks to a few months depending on your recovery needs. We help plan your discharge and ensure you are confident and prepared to continue recovery at home.',
    ],
    features: [
      'Professional wound care and monitoring',
      'Progressive physiotherapy programmes',
      'Medication management and pain control',
      'Regular communication with your surgeon',
      'Flexible short-term stay options',
    ],
    img: '/images/services/nursing-station.jpg',
    imgAlt: 'Post-operative recovery physiotherapy session',
  },
  {
    id: 'senior-daycare',
    title: 'Senior Daycare',
    shortDesc: 'Daytime care programmes with social activities, meals, and supervision for seniors who live at home.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
    longDesc: [
      'Our Senior Daycare programme is designed for elderly individuals who live at home but would benefit from daytime supervision, social interaction, and structured activities. It also provides much-needed respite for family caregivers.',
      'Each day includes a mix of physical exercises, cognitive activities, social programmes, and nutritious meals. Our team ensures every participant is safe, engaged, and enjoying their time with us.',
      'Whether your loved one needs daycare a few days a week or every weekday, we offer flexible scheduling to fit your family\'s needs. Transportation assistance may also be available depending on location.',
    ],
    features: [
      'Structured daytime activities and programmes',
      'Nutritious meals and snacks included',
      'Social interaction and companionship',
      'Respite for family caregivers',
      'Flexible scheduling options',
    ],
    img: '/images/services/family-visit-area.jpg',
    imgAlt: 'Seniors enjoying daytime activities together',
  },
];

const highlights = [
  { label: 'Care Services', value: '6', sub: 'Full range' },
  { label: 'Centres', value: '5', sub: 'Across Malaysia' },
  { label: 'Nursing Care', value: '24/7', sub: 'Round the clock' },
  { label: 'Professionals', value: '150+', sub: 'Qualified staff' },
  { label: 'Affordable Rates', value: '✓', sub: 'All Centres' },
];

const centres = [
  { name: 'Petaling Jaya', slug: 'nursing-home-in-petaling-jaya', rating: '4.9', tag: 'Flagship Centre', img: '/images/pj-centre.jpg' },
  { name: 'Klang', slug: 'nursing-home-in-klang', rating: '4.8', tag: 'Original Centre', img: '/images/klang-centre.jpg' },
  { name: 'Kajang', slug: 'nursing-home-kajang', rating: '4.7', tag: 'Southern KV', img: '/images/kajang-centre.jpeg' },
  { name: 'Puchong', slug: 'nursing-home-in-puchong', rating: '4.8', tag: 'Modern Facility', img: '/images/puchong-centre.jpeg' },
  { name: 'Johor Bahru', slug: 'nursing-home-in-johor-bahru', rating: '4.8', tag: 'Southern Region', img: '/images/jb-centre.jpeg' },
];

/* ─── Page component ─────────────────────────────────────────────────── */

export default function OurServices() {
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

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary via-primary-400 to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <span className="inline-block bg-gold text-gray-900 text-xs font-bold tracking-wide px-4 py-1.5 rounded-full uppercase mb-6">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5" style={{color: 'white'}}>
            Comprehensive Care for<br />Every Stage of Life
          </h1>
          <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto mb-8" style={{color: 'white'}}>
            From long-term residential nursing to specialised memory care and rehabilitation,
            Genesis Life Care provides the full spectrum of elderly care services across
            5 centres in Malaysia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
              href="tel:+60123210457"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +6012-321-0457
            </a>
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

      {/* ── SERVICES OVERVIEW GRID ────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              6 Specialised Care Services
            </h2>
            <p className="text-gray-500 text-lg">
              Every service is available across our 5 centres, delivered by trained professionals with genuine compassion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <a
                key={i}
                href={`#${svc.id}`}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={svc.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{svc.shortDesc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDIVIDUAL SERVICE SECTIONS ────────────────────────────────── */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`py-16 sm:py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
              {/* Text column */}
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Services</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                  {svc.title}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {svc.longDesc.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>

                {/* Feature list */}
                <div className="flex flex-col gap-3 mt-8">
                  {svc.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors text-sm mt-8"
                >
                  Enquire About This Service
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Image column */}
              <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={svc.img}
                    alt={svc.imgAlt}
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── WHY CHOOSE GENESIS ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Why Genesis</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              Why Families Choose Us
            </h2>
            <p className="text-gray-500 text-lg">
              We go beyond basic care to create a supportive, professional, and loving environment for your family.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Government Licensed',
                desc: 'Competitive and transparent pricing with no hidden costs across all centres.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
              {
                title: 'Qualified Medical Staff',
                desc: 'On-site doctors, registered nurses, physiotherapists, and psychologists across all centres.',
                icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
              },
              {
                title: 'Personalised Care Plans',
                desc: 'Every resident receives a tailored care plan developed with their family and our medical team.',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
              },
              {
                title: 'Transparent Pricing',
                desc: 'No hidden fees. Clear, upfront pricing so families can plan with confidence.',
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR CENTRES ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Locations</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Available at All Our Centres
            </h2>
            <p className="text-gray-500 mt-3">Every service is available at each of our 5 centres across Malaysia.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {centres.map((c, i) => (
              <Link
                key={i}
                href={`/${c.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group text-center"
              >
                <div className="h-28 overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {c.name}
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-1 text-gold text-xs">
                    ★ {c.rating}
                  </div>
                  <span className="inline-block mt-1 bg-primary/8 text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    {c.tag}
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

      {/* ─── GLC HIRE SECTION ─── */}
      <GlcHireSection />

      {/* ─── FAQ SECTION ─── */}
      <FaqSection
        faqs={[
          {
            q: "What's the difference between nursing care and dementia care?",
            a: "Nursing care provides 24/7 medical supervision and personal care assistance for seniors with various medical needs. Dementia care is a specialised programme with psychologist-led cognitive stimulation, structured routines, and trained staff who understand memory-related challenges. Both are available across all our centres."
          },
          {
            q: "Is stroke rehabilitation suitable for everyone recovering from a stroke?",
            a: "Yes. Our stroke rehabilitation programme is tailored to individual recovery needs. Whether someone is in the early recovery phase or regaining independence months after stroke, our physiotherapists and occupational therapists design personalised therapy plans. Family involvement is encouraged throughout."
          },
          {
            q: "How long can residents stay for post-operative recovery?",
            a: "Post-operative recovery stays are flexible, typically ranging from 2-8 weeks depending on the type of surgery and recovery progress. We coordinate closely with your surgeon and discharge you when you're confident and prepared to continue recovery at home."
          },
          {
            q: "Is Senior Daycare available at all centres?",
            a: "Senior Daycare is available at most centres with flexible scheduling. Programme includes structured activities, meals, health monitoring, and respite for family caregivers. Hours are typically 8am-5pm on weekdays, with some centres offering extended or weekend options."
          },
          {
            q: "What happens if my loved one's care needs change?",
            a: "Our care plans are reviewed monthly with families and adjusted as needs change. If your loved one requires a different level of care (e.g., transitioning from nursing care to palliative care), our team ensures a smooth transition with updated assessments and family discussions."
          }
        ]}
        heading="Questions About Our Services?"
        label="SERVICES FAQ"
      />

      {/* ─── FINAL CTA ─── */}
      <FinalCtaSection
        heading="Find the Right Care for Your Loved One"
        description="Every family's situation is unique. Our care advisors are here to understand your specific needs and help you find the perfect service. Book a free consultation today — no obligations, no pressure."
      />
    </main>
  );
}
