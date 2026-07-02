import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home Care & Home Nursing in Malaysia',
  description:
    'Professional home care and home nursing across the Klang Valley — trained, vetted caregivers and nurses, supervised by Genesis. Flexible care visits or a full-time live-in helper. Book a free home-care assessment.',
  alternates: {
    canonical: 'https://genesiscare.com.my/home-care',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/home-care' },
  },
  openGraph: {
    title: 'Home Care & Home Nursing in Malaysia | Genesis Life Care',
    description:
      'Trained, nurse-supervised home care across the Klang Valley — home nursing, personal care, physiotherapy and post-hospital support. Care visits or a live-in helper.',
    url: 'https://genesiscare.com.my/home-care',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/homecare-care.jpg', width: 1200, height: 630, alt: 'Home care by Genesis Life Care' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'Coverage', value: 'Klang Valley', sub: 'Care At Home' },
  { label: 'Caregivers', value: 'Trained', sub: 'Vetted & Supervised' },
  { label: 'Oversight', value: 'Nurse-Led', sub: 'Genesis Supervised' },
  { label: 'Flexible', value: '✓', sub: 'Visits Or Live-In' },
  { label: 'Free', value: '✓', sub: 'Home Assessment' },
];

const services = [
  {
    title: 'Home nursing',
    desc: 'Wound care, catheter and NG/PEG tube care, injections, and regular vital-sign monitoring — clinical care brought to your home.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Personal care & companionship',
    desc: 'Help with bathing, feeding, dressing and mobility — plus warm companionship, so your loved one is never alone.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Physiotherapy & mobility',
    desc: 'Physiotherapy and mobility support at home to help your loved one stay active, recover strength, and move safely.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Post-hospital & medical escort',
    desc: 'Recovery care after a hospital stay, and trained escorts to accompany your loved one safely to medical appointments.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

const steps = [
  { n: '1', title: 'Enquire', desc: 'Call or WhatsApp us and tell us what your loved one needs.' },
  { n: '2', title: 'Free home assessment', desc: 'We assess the care needs at home, at no cost.' },
  { n: '3', title: 'Care plan & match', desc: 'We plan the care and match a suitable nurse or trained caregiver.' },
  { n: '4', title: 'Ongoing support', desc: 'Care is delivered and overseen by our nursing team, with support whenever you need it.' },
];

const faqs = [
  {
    q: 'What home-care services do you offer?',
    a: 'Home nursing (wound care, catheter and NG/PEG care, injections, vitals monitoring), personal care and companionship, physiotherapy and mobility support, and post-hospital recovery care with medical escorts.',
  },
  {
    q: 'Where do you provide home care?',
    a: 'Across the Klang Valley. Contact us to confirm coverage for your specific area.',
  },
  {
    q: 'Who provides the care, and is it supervised?',
    a: 'Care is delivered by our own nurses and by trained, vetted caregivers, and overseen by the Genesis nursing team — the same standard of care our centres are known for.',
  },
  {
    q: 'How much does home care cost?',
    a: 'It depends on the type of care. Care visits are charged per visit or by the hour. If you prefer a permanent, full-time live-in caregiver, we can place a trained, vetted helper through our licensed agency for a one-off agency fee. A free assessment gives you an exact quote.',
  },
  {
    q: 'Can I get a permanent live-in caregiver?',
    a: 'Yes. Through our licensed placement agency (Agensi Pekerjaan GLC), we can match your family with a trained, vetted caregiver for a full-time, live-in arrangement — for a one-off agency fee.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function HomeCare() {
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
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">Home Care</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                Professional care,<br className="hidden sm:block" /> in the comfort of home
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Trained, vetted caregivers and nurses &mdash; supervised by Genesis &mdash; bring quality care to
                your loved one at home, across the Klang Valley. Choose flexible care visits, or a full-time
                live-in helper.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                  Book a Free Assessment
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="tel:+60193250457" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                  Call +6019-325-0457
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <img src="/images/services/homecare-care.jpg" alt="Genesis caregiver providing home care" className="rounded-2xl shadow-2xl w-full object-cover" />
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

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">What we bring to your home</h2>
            <p className="text-lg text-gray-600">The same quality of care as our centres — delivered where your loved one is most comfortable.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO WAYS ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Two ways to get care at home</h2>
            <p className="text-lg text-gray-600">Choose the arrangement that fits your family.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Care visits</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Flexible home nursing and caregiving, scheduled around your needs — from an occasional visit to daily support. Charged per visit or by the hour.</p>
              <span className="inline-block text-xs font-bold text-secondary uppercase tracking-wider">Pay per visit or hour</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Full-time live-in helper</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Prefer round-the-clock support? Through our licensed agency (Agensi Pekerjaan GLC), we place a trained, vetted caregiver to live in and care for your loved one — for a one-off agency fee.</p>
              <span className="inline-block text-xs font-bold text-secondary uppercase tracking-wider">One-off agency fee</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY GENESIS ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Why families choose Genesis home care</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our caregivers are trained by our own academy, placed through our licensed agency, and supervised by
            our nursing team — the same ecosystem behind our five care centres. So the person caring for your
            loved one at home is someone we trained, vetted, and stand behind.
          </p>
          <div className="mt-6">
            <Link href="/our-ecosystem" className="inline-flex items-center gap-1.5 text-primary font-bold hover:gap-2.5 transition-all">
              Learn about the Genesis ecosystem
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
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
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">Home care FAQ</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>Bring trusted care home</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>Book a free home-care assessment and we&apos;ll recommend the right care and give you a clear quote — with no obligation.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl">
            Book a Free Assessment
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
