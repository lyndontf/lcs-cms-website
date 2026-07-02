import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Elderly Day-Care Centre in Malaysia',
  description:
    'Genesis elderly day care — meals, activities, nurse-monitored health and light physiotherapy, half-day or full-day, with optional transport. Care and company for your loved one while you work. Book a free visit.',
  alternates: {
    canonical: 'https://genesiscare.com.my/elderly-day-care',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/elderly-day-care' },
  },
  openGraph: {
    title: 'Elderly Day-Care Centre in Malaysia | Genesis Life Care',
    description:
      'Meals, activities, nurse-monitored health and light physio — half or full day, optional transport. Care and company during the day while your family works.',
    url: 'https://genesiscare.com.my/elderly-day-care',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: 'Elderly day care at Genesis Life Care' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'Flexible', value: '½ or Full Day', sub: 'Your Schedule' },
  { label: 'Meals', value: 'Included', sub: '& Refreshments' },
  { label: 'Nurse', value: 'On Hand', sub: 'Health Monitored' },
  { label: 'Activities', value: 'Daily', sub: '& Companionship' },
  { label: 'Transport', value: 'Available', sub: 'Optional Add-On' },
];

const included = [
  { title: 'Nutritious meals & refreshments', desc: 'Freshly prepared meals and refreshments throughout the day.' },
  { title: 'Activities, games & companionship', desc: 'Group activities, games and social time that keep the mind engaged and the day joyful.' },
  { title: 'Health & vital-sign monitoring', desc: 'A nurse is on hand to monitor vitals and keep an eye on wellbeing.' },
  { title: 'Physiotherapy & light exercise', desc: 'Guided light exercise and mobility activities to keep your loved one active.' },
  { title: 'Flexible half or full day', desc: 'Come for a half day or a full day — whatever suits your family’s schedule.' },
  { title: 'Optional transport', desc: 'Pickup and drop-off can be arranged for an additional fee.' },
];

const steps = [
  { n: '1', title: 'Enquire', desc: 'Call or WhatsApp us and tell us about your loved one.' },
  { n: '2', title: 'Free assessment', desc: 'We assess needs and recommend a suitable day-care plan.' },
  { n: '3', title: 'Choose your days', desc: 'Pick half or full days, and a schedule that fits your family.' },
  { n: '4', title: 'They join in', desc: 'Your loved one enjoys care, company and activity — and comes home each evening.' },
];

const faqs = [
  {
    q: 'What’s included in a day?',
    a: 'Nutritious meals and refreshments, group activities and companionship, health and vital-sign monitoring by a nurse, and light physiotherapy/exercise.',
  },
  {
    q: 'What are the hours?',
    a: 'Day care is flexible — choose a half day or a full day to suit your family’s schedule. Contact us to confirm exact times at your preferred centre.',
  },
  {
    q: 'Is transport available?',
    a: 'Yes. Pickup and drop-off can be arranged for an additional fee — just let us know when you enquire.',
  },
  {
    q: 'How much does day care cost?',
    a: 'You can choose a per-day rate or a monthly package for regular attendance. A free assessment gives you an exact quote based on the days and any transport you need.',
  },
  {
    q: 'Can day care lead to residential care later?',
    a: 'Yes — many families start with day care and move to residential care when needs change. It’s the same trusted team and centres, so the transition is smooth.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function ElderlyDayCare() {
  return (
    <main className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div { color: inherit; }
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div,
        .hero-dark .text-4xl, .hero-dark .text-5xl, .hero-dark .sm\\:text-5xl,
        .hero-dark .text-3xl, .hero-dark .text-lg, .hero-dark .text-sm,
        .hero-dark .text-white { color: #ffffff !important; }
        .hero-dark .text-gray-900 { color: rgb(17 24 39) !important; }
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
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">Day Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              Day care for them,<br className="hidden sm:block" /> peace of mind for you
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              While you&apos;re at work, your loved one enjoys good company, meals, activities and a nurse&apos;s
              care &mdash; then comes home each evening. Choose a half day or a full day, with optional
              transport. It&apos;s also a gentle way to get to know Genesis.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                Book a Free Visit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="tel:+60193250457" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                Call +6019-325-0457
              </a>
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

      {/* ── WHAT'S INCLUDED ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">What a day looks like</h2>
            <p className="text-lg text-gray-600">A full, cared-for day — meals, company, gentle activity and a watchful nurse.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((c, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DAY CARE ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">A gentle first step</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Day care gives your loved one company, care and purpose during the day — and gives you the freedom
            to work, knowing they&apos;re safe. It&apos;s also a low-commitment way to experience Genesis first-hand.
            Many families start here, and move to residential care with the same trusted team when the time comes.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Getting started is simple</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                <div className="w-11 h-11 mx-auto rounded-full bg-secondary text-white flex items-center justify-center text-lg font-extrabold mb-4" style={{ color: 'white' }}>{s.n}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">Day-care FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  {f.q}
                  <svg className="w-5 h-5 text-primary transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-600 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="hero-dark bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>Give your loved one a brighter day</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>Book a free visit and we&apos;ll show you our day-care programme and find the schedule that works for your family.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl">
            Book a Free Visit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
