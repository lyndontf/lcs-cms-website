import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dementia Care & Memory Care in Malaysia | Genesis Life Care',
  description:
    'Specialist dementia and memory care across 5 centres in Malaysia. Psychologist-led cognitive stimulation therapy (CST), dedicated Memory Care Wings at every centre, trained caregivers & family support. Book a free consultation.',
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'Memory Care Centres', value: '5', sub: 'Across Malaysia' },
  { label: 'Psychologist-Led', value: '✓', sub: 'CST Programmes' },
  { label: 'Dedicated Wings', value: '5', sub: 'Every Centre' },
  { label: 'Nursing Care', value: '24/7', sub: 'Round the Clock' },
  { label: 'Affordable Rates', value: '✓', sub: 'All Centres' },
];

const features = [
  {
    title: 'Psychologist-Led Programmes',
    desc: 'Our dementia care programmes are designed and overseen by experienced psychologists who specialise in memory-related conditions.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: 'Cognitive Stimulation Therapy',
    desc: 'Evidence-based CST sessions that help maintain and improve cognitive function through structured group and individual activities.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Safe & Structured Environment',
    desc: 'Purpose-designed spaces that reduce confusion and anxiety while encouraging independence and free movement.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    title: 'Trained Specialist Caregivers',
    desc: 'Every caregiver undergoes dedicated memory care training covering communication techniques, behavioural management, and compassionate support.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Family Support & Education',
    desc: 'Regular family support sessions, progress updates, and practical guidance on understanding and managing dementia together.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Personalised Activity Plans',
    desc: 'Tailored daily routines and therapeutic activities that match each resident\'s interests, abilities, and stage of condition.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
];

const conditions = [
  {
    name: "Alzheimer's Disease",
    desc: 'The most common form of dementia, causing progressive memory loss and cognitive decline. Our structured CST programmes help maintain function and quality of life.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    name: 'Vascular Dementia',
    desc: 'Often occurring after stroke or reduced blood flow to the brain. Our rehabilitation team works alongside memory care specialists to address both physical and cognitive needs.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    name: "Parkinson's Disease",
    desc: 'A condition affecting both movement and cognition. Our caregivers are trained to manage the unique combination of motor and memory challenges that Parkinson\'s presents.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    name: 'Lewy Body Dementia',
    desc: 'Characterised by fluctuating cognition, visual hallucinations, and movement difficulties. Our team provides patient, adaptive care that responds to daily changes.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
  {
    name: 'Frontotemporal Dementia',
    desc: 'Affecting personality, behaviour, and language. Our psychologists develop targeted programmes that address the specific behavioural and communication challenges involved.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    name: 'Mixed Dementia',
    desc: 'When multiple types of dementia occur simultaneously. Our comprehensive approach allows us to address overlapping symptoms with a holistic, coordinated care plan.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
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
    q: "What is the difference between dementia and Alzheimer's disease?",
    a: "Dementia is an umbrella term for a group of symptoms affecting memory, thinking, and social abilities. Alzheimer's disease is the most common cause of dementia, accounting for 60-80% of cases. Other causes include vascular dementia, Lewy body dementia, and frontotemporal dementia. At Genesis Life Care, we provide specialist care for all types of dementia.",
  },
  {
    q: 'How do I know if my parent needs memory care?',
    a: 'Common signs include repeated memory lapses affecting daily life, getting lost in familiar places, difficulty managing medications, confusion about time or place, personality changes, and safety concerns at home such as leaving the stove on. If you are unsure, our care advisors offer free assessments to help you understand the level of care needed.',
  },
  {
    q: 'What is Cognitive Stimulation Therapy (CST)?',
    a: 'CST is an evidence-based programme recommended by healthcare guidelines worldwide. It involves structured group sessions that engage residents in stimulating activities such as word games, music, discussions, and creative tasks. Research shows that CST can improve cognitive function and quality of life for people with mild to moderate dementia.',
  },
  {
    q: 'Can I visit my loved one at any time?',
    a: 'Yes, Genesis Life Care operates an open visiting policy. Family involvement is a core part of our care approach. We encourage regular visits and also hold family events, support groups, and education sessions to help families stay connected and informed.',
  },
  {
    q: 'How much does dementia care cost?',
    a: 'Our fees vary depending on the level of care required and the centre location. We offer transparent pricing with no hidden charges. Contact us for a free consultation and personalised quote. We also help families explore available government subsidies and insurance options.',
  },
  {
    q: 'Is dementia care available at all your centres?',
    a: 'Yes, all five Genesis Life Care centres have a dedicated Memory Care Wing specifically designed for residents with dementia. Each wing features a safe, structured environment with specialist facilities, trained caregivers, and psychologist-led cognitive stimulation programmes.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function DementiaCare() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">Specialist Memory Care</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                Dementia &amp; Memory Care<br className="hidden sm:block" /> in Malaysia
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Psychologist-led cognitive stimulation programmes across 5 centres.
                Dedicated Memory Care Wings with specialist care for Alzheimer&apos;s, dementia,
                and Parkinson&apos;s in a safe, structured, and compassionate environment.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/contact"
                  className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl"
                >
                  Book a Free Consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="tel:+60123210457"
                  className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition"
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
                  src="/images/services/common-area-scenic.jpg"
                  alt="Calming common area for dementia care residents"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-primary text-white rounded-xl px-6 py-4 shadow-lg hidden sm:block">
                  <p className="text-3xl font-extrabold" style={{ color: 'white' }}>5</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>Dedicated Wings</p>
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

      {/* ── UNDERSTANDING DEMENTIA ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Understanding Dementia</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Why Specialist Care Matters</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dementia is not a single disease — it is an umbrella term for a range of conditions that
                progressively affect memory, thinking, behaviour, and the ability to perform everyday tasks.
                In Malaysia, the number of people living with dementia is growing rapidly as our population ages,
                making specialist memory care more important than ever.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Standard elderly care is often not equipped to handle the complex needs of dementia residents.
                People living with memory conditions require a carefully structured environment, trained specialist
                caregivers, and evidence-based therapeutic programmes designed to maintain cognitive function and
                quality of life.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Genesis Life Care, our dementia care programmes are developed and overseen by experienced
                psychologists. We use internationally recognised approaches including Cognitive Stimulation Therapy
                (CST) to provide the highest standard of memory care across all five of our centres.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Evidence-Based', 'Psychologist-Led', 'Family Support', 'Structured Routine'].map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/services/family-visit-area.jpg"
                alt="Family visiting area for memory care"
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
                src="/images/services/nursing-station.jpg"
                alt="Specialist nursing care for dementia residents"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Our Approach</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Psychologist-Led Cognitive Stimulation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cognitive Stimulation Therapy (CST) is an evidence-based programme recommended by healthcare
                guidelines worldwide for people with mild to moderate dementia. At Genesis Life Care, our
                psychologists lead regular CST sessions that are both engaging and therapeutically beneficial.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sessions include a carefully designed mix of activities such as word association, music and sound
                recognition, creative expression, current affairs discussions, and reminiscence exercises. Each
                session is structured to stimulate different areas of cognition while being enjoyable and
                confidence-building.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Research consistently shows that regular CST participation can improve cognitive function,
                communication, and overall quality of life. Our psychologists regularly assess each
                resident&apos;s progress and adapt programmes to ensure the best possible outcomes.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Structured group and individual CST sessions',
                  'Music therapy and sensory stimulation activities',
                  'Reminiscence and life story work',
                  'Daily cognitive engagement programmes',
                  'Regular progress assessment and care plan reviews',
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What Our Memory Care Includes</h2>
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

      {/* ── WHO WE CARE FOR ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Conditions We Support</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Who We Care For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our specialist team provides tailored care for a wide range of memory-related and neurodegenerative conditions.
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

      {/* ── DEDICATED MEMORY CARE WINGS ─────────────────────────────── */}
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
                  Dedicated Memory Care Wing<br className="hidden sm:block" /> at All Our Centres
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every Genesis Life Care centre features a purpose-built Memory Care Wing — a dedicated
                  unit specifically designed for residents living with dementia and Alzheimer&apos;s. These
                  specialised spaces offer an enhanced level of care with environments tailored to the
                  unique needs of memory care residents.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Each wing is supported by experienced psychologists who oversee structured
                  cognitive stimulation programmes and daily activities tailored to each resident. The physical
                  environments are designed with input from dementia care specialists to promote safety, calm,
                  and independence.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Families of residents in our Memory Care Wings receive enhanced support including regular
                  updates, dedicated family education sessions, and access to our psychologist team
                  for guidance and consultation — no matter which centre they choose.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Secure entry and exit with safety monitoring',
                    'Wandering-safe corridors and communal spaces',
                    'Calming colour schemes and sensory elements',
                    'Dedicated sensory garden access',
                    'Specialised activity and therapy rooms',
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
                  src="/images/services/single-room.jpg"
                  alt="Memory care room at Genesis Life Care PJ"
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">How Families Benefit</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Caring for a loved one with dementia is a journey that affects the whole family.
                At Genesis Life Care, we support not just the resident but their family too — with regular
                communication, education, and a compassionate team that treats every family as their own.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Regular Updates & Progress Reports',
                    desc: 'Receive frequent updates on your loved one\'s wellbeing, activities, and any changes in their condition.',
                  },
                  {
                    title: 'Family Support Groups & Education',
                    desc: 'Join our support sessions to connect with other families and learn practical strategies from our psychologists.',
                  },
                  {
                    title: 'Guidance on Managing Dementia at Home',
                    desc: 'Our team provides advice on communication techniques, safety modifications, and emotional coping for visits and home stays.',
                  },
                  {
                    title: 'Peace of Mind with Specialist Care',
                    desc: 'Know that your loved one is in the hands of trained, compassionate professionals in a safe and structured environment around the clock.',
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
                src="/images/services/bedded-room.jpg"
                alt="Comfortable accommodation for dementia care"
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Dementia Care Across Malaysia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All five Genesis Life Care centres offer specialist dementia and memory care programmes.
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
                  <p className="text-xs text-gray-500 mt-0.5">★ {c.rating}</p>
                  <p className="text-xs text-secondary font-medium mt-1">{c.tag}</p>
                  <p className="text-xs text-primary font-semibold mt-2 group-hover:underline">View Centre →</p>
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
            Find the Right Dementia Care<br className="hidden sm:block" /> for Your Loved One
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Book a free consultation with our care advisors. Visit any of our centres,
            meet the team, and learn about our memory care programmes — no obligations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl"
            >
              Book a Free Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+60123210457"
              className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition"
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
