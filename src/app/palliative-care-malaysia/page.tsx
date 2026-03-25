import { Metadata } from 'next';
import Link from 'next/link';
import GlcHireSection from '@/components/sections/GlcHireSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

export const metadata: Metadata = {
  title: 'Palliative Care in Malaysia — Comfort & Dignity | Genesis Life Care',
  description:
    'Compassionate palliative care across 5 centres in Selangor & Johor Bahru. Expert pain management, emotional support, family counselling, and dignified end-of-life care. 24/7 nursing. Book a free consultation.',
  alternates: {
    canonical: 'https://genesiscare.com.my/palliative-care-malaysia',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/palliative-care-malaysia' },
  },
  openGraph: {
    title: 'Palliative Care in Malaysia | Genesis Life Care',
    description: 'Expert pain management, emotional support & dignified end-of-life care across 5 centres in Malaysia.',
    url: 'https://genesiscare.com.my/palliative-care-malaysia',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'Palliative Centres', value: '5', sub: 'Across Malaysia' },
  { label: 'Pain Management', value: '✓', sub: 'Expert Team' },
  { label: 'Family Support', value: '✓', sub: 'Counselling Available' },
  { label: 'Nursing Care', value: '24/7', sub: 'Round the Clock' },
  { label: 'Affordable Rates', value: '✓', sub: 'All Centres' },
];

const features = [
  {
    title: 'Expert Pain & Symptom Management',
    desc: 'Comprehensive pain control and symptom relief to ensure comfort and quality of life throughout the care journey.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Emotional & Psychological Support',
    desc: 'Counselling and emotional support for residents navigating serious illness, helping maintain dignity and peace of mind.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: 'Family Counselling & Guidance',
    desc: 'Supporting families with guidance, counselling, and practical help during a difficult time.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Coordinated Medical Care',
    desc: 'Working closely with hospitals, hospices, and family doctors to ensure seamless, coordinated care.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: 'Spiritual & Cultural Sensitivity',
    desc: 'Respecting the cultural, spiritual, and religious needs of every resident and their family.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    title: 'Dignified Care Environment',
    desc: 'A peaceful, warm, and home-like setting where residents are treated with the utmost respect and compassion.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  },
];

const benefits = [
  {
    name: 'Advanced Cancer Patients',
    desc: 'Comprehensive comfort care and symptom management for patients with advanced or terminal cancer.',
  },
  {
    name: 'End-Stage Organ Disease',
    desc: 'Support for patients with advanced heart, lung, kidney, or liver disease requiring comfort-focused care.',
  },
  {
    name: 'Advanced Neurological Conditions',
    desc: 'Care for patients with progressive conditions such as advanced dementia, motor neurone disease, or Parkinson\u0027s.',
  },
  {
    name: 'Terminal Illness',
    desc: 'Dignified care focused on comfort and quality of life for patients with life-limiting diagnoses.',
  },
  {
    name: 'Post-Treatment Recovery',
    desc: 'Supportive care for patients transitioning from active treatment to comfort-focused care.',
  },
  {
    name: 'Frail Elderly',
    desc: 'Holistic care for elderly patients with multiple conditions who would benefit from comfort-focused support.',
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
    q: 'What is palliative care?',
    a: 'Palliative care focuses on comfort, quality of life, and symptom management for people with serious illnesses. It is not limited to end-of-life but can complement active treatment at any stage.',
  },
  {
    q: 'When should palliative care begin?',
    a: 'Palliative care can begin at any stage of a serious illness, alongside curative treatment. Early introduction often leads to better quality of life and symptom management.',
  },
  {
    q: 'Is palliative care the same as hospice care?',
    a: 'Not exactly. Hospice care is a type of palliative care specifically for end-of-life. Palliative care can be provided at any stage of illness and may include rehabilitation alongside comfort measures.',
  },
  {
    q: 'Can family members stay overnight?',
    a: 'Yes, we accommodate family members who wish to stay overnight with their loved ones. Private room options are available at all centres.',
  },
  {
    q: 'How is pain managed?',
    a: 'Our medical team uses a comprehensive approach to pain management including medication, positioning, and complementary therapies. We assess pain regularly and adjust treatment to ensure maximum comfort.',
  },
  {
    q: 'Is palliative care available at all centres?',
    a: 'Yes, all five Genesis Life Care centres provide palliative care with trained nursing staff, coordinated medical support, and family counselling services.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function PalliativeCare() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">Compassionate Care</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                Palliative Care<br className="hidden sm:block" /> in Malaysia
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Compassionate comfort care across 5 centres in Malaysia. Expert pain management,
                emotional and spiritual support, family counselling, and dignified care in a peaceful,
                home-like environment.
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
                  src="/images/services/single-room.jpg"
                  alt="Comfortable single room for palliative care at Genesis Life Care"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-primary text-white rounded-xl px-6 py-4 shadow-lg hidden sm:block">
                  <p className="text-3xl font-extrabold" style={{ color: 'white' }}>24/7</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>Comfort Care</p>
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

      {/* ── UNDERSTANDING PALLIATIVE CARE ──────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Understanding Palliative Care</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Comfort, Dignity, and Compassion</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Palliative care is a specialised approach to caring for people with serious, life-limiting illnesses.
                Contrary to common belief, it is not limited to end-of-life care — palliative care can begin at any
                stage of illness and works alongside active treatment to improve quality of life.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The focus of palliative care is on comfort, symptom management, and ensuring that every resident
                lives each day with the highest possible quality of life. This includes expert pain control,
                emotional support, spiritual care, and practical assistance for both residents and their families.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Genesis Life Care, our palliative care programme is delivered by a dedicated team of nurses,
                medical professionals, and counsellors who work together to provide holistic, compassionate care.
                We coordinate closely with hospitals, hospices, and family doctors to ensure seamless support
                at every stage.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Comfort-Focused', 'Family-Centred', 'Dignified Care', 'Coordinated'].map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/services/common-area-scenic.jpg"
                alt="Peaceful common area with scenic view"
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
                alt="Professional nursing station for palliative care"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Our Approach</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Holistic Care for Body, Mind, and Spirit</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our palliative care approach addresses not just physical symptoms but the emotional, psychological,
                and spiritual needs of each resident. We believe that true comfort comes from caring for the whole
                person — body, mind, and spirit — in a peaceful and supportive environment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pain management is at the heart of our palliative programme. Our medical team uses a comprehensive,
                multi-disciplinary approach that includes medication management, positioning techniques, and
                complementary therapies. We assess and reassess regularly to ensure that every resident is as
                comfortable as possible at all times.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Families are a central part of the care journey. We involve family members in care planning,
                hold regular conferences to discuss progress and preferences, and provide counselling and
                emotional support to help families navigate this difficult time together.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Comprehensive pain and symptom assessment',
                  'Personalised comfort care plans',
                  'Regular family conferences and updates',
                  'Coordination with hospitals and specialists',
                  'Bereavement support for families',
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What Our Palliative Care Includes</h2>
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

      {/* ── WHO BENEFITS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Who We Support</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Who Benefits from Palliative Care</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our compassionate team provides comfort-focused care for residents with a wide range of serious and life-limiting conditions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="bg-secondary/10 rounded-lg w-10 h-10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{b.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPASSIONATE PALLIATIVE CARE CALLOUT ─────────────────────── */}
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
                  Compassionate Palliative Care<br className="hidden sm:block" /> at All Our Centres
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every Genesis Life Care centre provides dedicated palliative care services, ensuring that
                  residents across Malaysia have access to expert comfort care close to their families.
                  Our palliative programme is an integral part of the care we deliver at every location.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our nursing staff are trained in palliative care best practices, including pain assessment,
                  symptom management, emotional support, and end-of-life care. We work closely with visiting
                  doctors, hospice teams, and specialists to deliver coordinated, comprehensive care.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Each centre offers a peaceful, home-like environment with private room options, family
                  accommodation, and quiet spaces for reflection. We respect the cultural, spiritual, and
                  religious needs of every resident and their family — no matter which centre they choose.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Dedicated palliative care nursing team',
                    'Private and peaceful room options',
                    '24/7 pain management support',
                    'Family accommodation for overnight stays',
                    'Multi-faith spiritual support',
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
                  src="/images/services/family-visit-area.jpg"
                  alt="Family visiting area at Genesis Life Care"
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Supporting Families Through Difficult Times</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Palliative care affects the whole family. At Genesis Life Care, we provide dedicated support
                for families — helping you understand your loved one&apos;s condition, make informed decisions,
                and find comfort during a challenging time.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Regular Family Conferences',
                    desc: 'Scheduled meetings with the care team to discuss your loved one\u0027s condition, comfort goals, and any changes in the care plan.',
                  },
                  {
                    title: 'Emotional Counselling and Support',
                    desc: 'Access to counselling services for family members who need emotional support during their loved one\u0027s care journey.',
                  },
                  {
                    title: 'Practical Guidance on End-of-Life Decisions',
                    desc: 'Our team provides clear, compassionate guidance to help families navigate difficult decisions with confidence and peace of mind.',
                  },
                  {
                    title: 'Bereavement Support After Loss',
                    desc: 'Continued support and resources for families after the passing of a loved one, because our care does not end at the final moment.',
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
                alt="Comfortable room for palliative care residents"
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Palliative Care Across Malaysia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All five Genesis Life Care centres provide compassionate palliative care.
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
                  <p className="text-xs text-gray-500 mt-0.5">{c.rating}</p>
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

      {/* ── GLC HIRE SECTION ──────────────────────────────────────────── */}
      <GlcHireSection />

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <FaqSection faqs={faqs} />

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <FinalCtaSection
        heading="Find Compassionate Palliative Care for Your Loved One"
        description="Book a free consultation with our care advisors. Visit any of our centres, meet the team, and learn about our palliative care programme — no obligations."
      />
    </main>
  );
}
