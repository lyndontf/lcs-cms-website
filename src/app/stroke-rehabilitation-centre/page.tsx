import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Stroke Rehabilitation Centre in Malaysia | Genesis Life Care',
  description:
    'Comprehensive stroke rehabilitation across 5 centres in Selangor & Johor Bahru. Physiotherapy, occupational therapy & speech therapy with individualised recovery plans. 24/7 nursing support. Book a free consultation.',
  alternates: {
    canonical: 'https://genesiscare.com.my/stroke-rehabilitation-centre',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/stroke-rehabilitation-centre' },
  },
  openGraph: {
    title: 'Stroke Rehabilitation Centre in Malaysia | Genesis Life Care',
    description: 'Physiotherapy, OT & speech therapy across 5 centres. Individualised stroke recovery plans with 24/7 nursing support.',
    url: 'https://genesiscare.com.my/stroke-rehabilitation-centre',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/rehab-department.jpg', width: 1200, height: 630, alt: 'Stroke rehabilitation at Genesis Life Care' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'Rehab Centres', value: '5', sub: 'Across Malaysia' },
  { label: 'Multidisciplinary', value: '\u2713', sub: 'Team Approach' },
  { label: 'Therapy Types', value: '3', sub: 'Physio \u00b7 OT \u00b7 Speech' },
  { label: 'Nursing Care', value: '24/7', sub: 'Round the Clock' },
  { label: 'Affordable Rates', value: '\u2713', sub: 'All Centres' },
];

const features = [
  {
    title: 'Individualised Physiotherapy',
    desc: 'Tailored exercises and programmes to rebuild strength, balance, and mobility after stroke.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Occupational Therapy',
    desc: 'Relearning daily living skills such as dressing, eating, and personal care for greater independence.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    title: 'Speech & Language Therapy',
    desc: 'Specialist support for communication difficulties, swallowing challenges, and cognitive-linguistic recovery.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    title: 'Regular Progress Assessments',
    desc: 'Frequent evaluations and goal-setting to track recovery milestones and adjust treatment plans.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: 'Family Training & Education',
    desc: 'Teaching families practical skills and techniques to support continued recovery at home.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Emotional & Psychological Support',
    desc: 'Addressing the mental health impact of stroke through counselling and peer support programmes.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
];

const conditions = [
  {
    name: 'Ischaemic Stroke Survivors',
    desc: 'The most common type of stroke caused by blood clots. Our rehab addresses mobility, speech, and cognitive recovery.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    name: 'Haemorrhagic Stroke Survivors',
    desc: 'Recovery from bleeding in the brain requires careful, progressive rehabilitation under close medical supervision.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    name: 'Transient Ischaemic Attack (TIA)',
    desc: 'Mini-stroke recovery and prevention programmes to reduce the risk of future stroke events.',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  },
  {
    name: 'Post-Surgical Stroke Patients',
    desc: 'Rehabilitation following surgical interventions such as craniotomy or carotid endarterectomy.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    name: 'Young Stroke Survivors',
    desc: 'Stroke can affect people of all ages. We help younger patients return to work and active life.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    name: 'Recurrent Stroke Patients',
    desc: 'Specialised programmes for those who have experienced multiple strokes, addressing cumulative challenges.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
];

const centres = [
  { name: 'Petaling Jaya', slug: 'nursing-home-in-petaling-jaya', rating: '4.9', tag: 'Flagship Centre', img: '/images/pj-centre.jpg' },
  { name: 'Klang', slug: 'nursing-home-in-klang', rating: '4.8', tag: 'Original Centre', img: '/images/klang-centre.jpg' },
  { name: 'Kajang', slug: 'nursing-home-kajang', rating: '4.7', tag: 'Southern KV', img: '/images/kajang-centre.jpeg' },
  { name: 'Puchong', slug: 'nursing-home-in-puchong', rating: '4.8', tag: 'Modern Facility', img: '/images/puchong-centre.jpeg' },
  { name: 'Johor Bahru', slug: 'nursing-home-in-johor-bahru', rating: '4.8', tag: 'Southern Region', img: '/images/jb-centre.jpeg' },
];

const faqs = [
  {
    q: 'How soon after a stroke should rehabilitation begin?',
    a: 'As early as medically stable, usually within days. Early rehab leads to better outcomes. Our team coordinates with hospitals for seamless transfer.',
  },
  {
    q: 'How long does stroke rehabilitation take?',
    a: 'Varies by severity. Mild strokes may need weeks, severe strokes several months. We create individualised timelines and adjust based on progress.',
  },
  {
    q: 'What types of therapy are included?',
    a: 'Physiotherapy for mobility and strength, occupational therapy for daily skills, speech therapy for communication and swallowing. All tailored to individual needs.',
  },
  {
    q: 'Can family members be involved in rehabilitation?',
    a: 'Absolutely. Family involvement improves outcomes. We offer training sessions and encourage families to participate in therapy sessions.',
  },
  {
    q: 'Is stroke rehabilitation available at all centres?',
    a: 'Yes, all five Genesis Life Care centres have fully equipped rehabilitation facilities and multidisciplinary therapy teams.',
  },
  {
    q: 'How much does stroke rehabilitation cost?',
    a: 'Fees depend on level of care and duration. We offer transparent pricing and help explore subsidies and insurance. Contact us for a personalised quote.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function StrokeRehabilitation() {
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

      {/* FAQ structured data */}
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
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">Specialist Rehabilitation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                Stroke Rehabilitation<br className="hidden sm:block" /> Centre in Malaysia
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Comprehensive physiotherapy, occupational therapy, and speech therapy
                across 5 centres. Individualised recovery plans with a multidisciplinary
                team to help stroke survivors regain independence.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Book a Free Consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="tel:+60123210457"
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call +6012-321-0457
                </a>
              </div>
            </div>

            {/* Right — image */}
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="/images/services/rehab-department.jpg"
                  alt="Stroke rehabilitation department at Genesis Life Care"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-primary text-white rounded-xl px-6 py-4 shadow-lg hidden sm:block">
                  <p className="text-3xl font-extrabold" style={{ color: 'white' }}>3</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>Therapy Types</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {highlights.map((h, i) => (
              <div key={i}>
                <p className="text-2xl font-extrabold text-primary">{h.value}</p>
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mt-1">{h.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNDERSTANDING STROKE RECOVERY ─────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Understanding Stroke Recovery</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Why Professional Rehabilitation Matters</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A stroke occurs when blood flow to part of the brain is interrupted, causing brain cells to
                become damaged or die. The effects can be devastating — affecting movement, speech, cognition,
                and emotional wellbeing. In Malaysia, stroke is one of the leading causes of long-term disability,
                making professional rehabilitation more important than ever.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Recovery after stroke requires a structured, evidence-based approach delivered by a multidisciplinary
                team. General care alone is not sufficient to address the complex physical, cognitive, and emotional
                challenges that stroke survivors face. Professional rehabilitation significantly improves outcomes
                and helps patients regain as much independence as possible.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Genesis Life Care, our stroke rehabilitation programmes are designed around each individual&apos;s
                needs. Our team of physiotherapists, occupational therapists, and speech therapists work together
                with nursing staff to deliver comprehensive, goal-oriented recovery plans across all five centres.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Evidence-Based', 'Multidisciplinary', 'Goal-Oriented', 'Family-Centred'].map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/services/therapy-exercise.jpg"
                alt="Therapeutic exercise for stroke recovery"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/services/walking-training.jpg"
                alt="Walking training during stroke rehabilitation"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Our Approach</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">A Multidisciplinary Path to Recovery</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Stroke recovery is most effective when multiple therapy disciplines work together towards shared
                goals. At Genesis Life Care, our physiotherapists, occupational therapists, and speech therapists
                collaborate closely to deliver a coordinated rehabilitation programme tailored to each patient&apos;s
                unique needs and abilities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Physiotherapy focuses on rebuilding strength, balance, and mobility. Occupational therapy helps
                patients relearn essential daily living skills. Speech and language therapy addresses communication
                difficulties and swallowing challenges. Together, these disciplines provide a holistic approach
                that treats the whole person, not just individual symptoms.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every patient begins with a comprehensive initial assessment, followed by individualised goal-setting.
                Our team meets weekly to review progress, adjust treatment intensity, and ensure the rehabilitation
                plan remains aligned with each patient&apos;s evolving needs and recovery trajectory.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Comprehensive initial assessment',
                  'Individualised recovery goals',
                  'Weekly multidisciplinary team meetings',
                  'Progressive therapy intensity',
                  'Discharge planning and home transition',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-full transition shadow-md hover:shadow-lg text-sm"
              >
                Enquire About Our Programmes
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Comprehensive Care</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What Our Stroke Rehabilitation Includes</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Conditions We Support</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Who We Help</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our specialist rehabilitation team provides tailored programmes for a wide range of stroke-related conditions and recovery needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="bg-secondary/10 rounded-lg w-10 h-10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{c.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MULTIDISCIPLINARY REHABILITATION TEAM ─────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-50 to-white rounded-2xl p-8 lg:p-12 border border-primary/10 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-3 py-1 mb-5">
                  <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gold text-xs font-semibold">At Every Centre</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5">
                  Multidisciplinary Rehabilitation Team<br className="hidden sm:block" /> at All Our Centres
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every Genesis Life Care centre is equipped with a dedicated multidisciplinary rehabilitation
                  team — physiotherapists, occupational therapists, and speech therapists who work together to
                  deliver coordinated stroke recovery programmes. Our purpose-built rehabilitation facilities
                  provide the ideal environment for effective recovery.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Each centre features specialist rehabilitation equipment and therapy spaces designed to
                  support progressive recovery. From fully equipped physiotherapy gyms to occupational therapy
                  practice areas, our facilities enable patients to rebuild their skills in a safe,
                  supportive setting.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Families of stroke rehabilitation patients receive regular progress updates, hands-on
                  training sessions, and guidance on supporting continued recovery at home — ensuring a
                  seamless transition when patients are ready to return to their families.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Fully equipped physiotherapy gym',
                    'Occupational therapy practice kitchen',
                    'Speech therapy consultation rooms',
                    'Hydrotherapy and mobility aids',
                    'Progress tracking technology',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/our-locations"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-full transition shadow-md hover:shadow-lg text-sm"
                >
                  Find Your Nearest Centre
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div>
                <img
                  src="/images/services/stroke-bed.jpg"
                  alt="Specialist Bobath bed for stroke rehabilitation"
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAMILY SUPPORT ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Family Support</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Supporting the Whole Family</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Stroke recovery is a journey that affects the entire family. At Genesis Life Care, we believe
                that involving and supporting families is essential for the best rehabilitation outcomes. Our team
                provides comprehensive support to help families understand, participate in, and continue the
                recovery process beyond our centres.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Regular Progress Updates',
                    desc: 'Receive frequent updates on your loved one\'s rehabilitation milestones, therapy outcomes, and any changes in their recovery plan.',
                  },
                  {
                    title: 'Family Training Sessions',
                    desc: 'Hands-on training in exercises, transfer techniques, and daily care skills so you can confidently support recovery at home.',
                  },
                  {
                    title: 'Emotional Support & Counselling',
                    desc: 'Access to counselling and peer support for family members navigating the emotional challenges of stroke recovery.',
                  },
                  {
                    title: 'Home Modification Guidance',
                    desc: 'Practical advice on adapting your home environment to support safety and independence for stroke survivors.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-secondary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/services/hand-training.jpg"
                alt="Hand training therapy for stroke recovery"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── AVAILABLE AT ALL CENTRES ──────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Our Locations</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Stroke Rehabilitation Across Malaysia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All five Genesis Life Care centres offer comprehensive stroke rehabilitation programmes.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {centres.map((c, i) => (
              <Link key={i} href={`/${c.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={`Genesis Life Care ${c.name}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-bold text-gray-900 text-sm">{c.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{'\u2605'} {c.rating}</p>
                  <p className="text-xs text-secondary font-medium mt-1">{c.tag}</p>
                  <p className="text-xs text-primary font-semibold mt-2 group-hover:underline">View Centre {'\u2192'}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/our-locations" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
              View All Locations
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 py-6 last:border-b-0">
                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="bg-primary/10 text-primary rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-10">{faq.a}</p>
              </div>
            ))}
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
        <div className="relative max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>
            Start Your Recovery Journey<br className="hidden sm:block" /> Today
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Book a free consultation with our rehabilitation team. Visit any of our centres,
            meet the therapists, and learn about our stroke recovery programmes — no obligations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Book a Free Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+60123210457"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +6012-321-0457
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
