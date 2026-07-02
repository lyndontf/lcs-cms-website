import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Clinical & Allied Health Services | Genesis Life Care',
  description:
    'Doctor, nurses, physiotherapy, dietitian, psychologist, in-house pharmacy, on-site diagnostics and emergency ambulance — all coordinated under one roof at Genesis Life Care nursing homes across Malaysia.',
  alternates: {
    canonical: 'https://genesiscare.com.my/clinical-services',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/clinical-services' },
  },
  openGraph: {
    title: 'Clinical & Allied Health Services | Genesis Life Care',
    description:
      'A full clinical and allied-health team under one roof — doctor, nurses, physio, dietitian, psychologist, pharmacy, diagnostics and emergency ambulance.',
    url: 'https://genesiscare.com.my/clinical-services',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: 'Genesis Life Care clinical and allied health services' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'One Roof', value: 'All-in-1', sub: 'Coordinated Care' },
  { label: 'Doctor', value: '24/7', sub: 'On-Call' },
  { label: 'Pharmacy', value: 'In-House', sub: 'Meds Managed' },
  { label: 'Team', value: '150+', sub: 'Clinical Staff' },
];

const services = [
  {
    title: '24/7 on-call doctor',
    desc: 'A doctor is on call around the clock, with regular medical reviews of every resident and a clear escalation plan if anything changes.',
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z M12 3v2 M12 19v2 M3 12h2 M19 12h2',
  },
  {
    title: '24-hour registered nurses',
    desc: 'Trained, Malaysian-registered nurses on site day and night — medication administration, wound care, vitals monitoring and hands-on nursing.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: 'Physiotherapy & occupational therapy',
    desc: 'A full rehabilitation department. Physio and OT are delivered as clinically indicated in each resident’s care plan — mobility, strength, post-stroke and post-operative recovery.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Psychologist-led programmes',
    desc: 'Cognitive Stimulation Therapy (CST) and psychological support designed and supervised by our in-house psychologist — central to our dementia and memory care.',
    icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
  },
  {
    title: 'Dietitian & personalised nutrition',
    desc: 'Meal and nutrition plans tailored to each resident — diabetic, renal, texture-modified, tube-feeding and cultural dietary needs, planned and reviewed by our dietitian.',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'In-house pharmacy & medication management',
    desc: 'Medications supplied and managed in-house — accurate dispensing, prescription refills coordinated, and every dose recorded so nothing is missed.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: 'On-site lab & diagnostics',
    desc: 'Routine blood tests and diagnostics arranged on-site or through a partner lab visit — so residents are monitored without an unnecessary trip out.',
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  },
  {
    title: 'Emergency ambulance & hospital transfer',
    desc: 'If a medical emergency arises, we arrange ambulance transport and hospital transfer, and coordinate with the family and the receiving hospital every step of the way.',
    icon: 'M8 7h8m-8 4h8m-4-8v2M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2h-3l-2-2H10L8 5H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Weekly multidisciplinary review',
    desc: 'Doctor, nurses, physiotherapists, psychologist and dietitian meet weekly to review each resident’s progress and adjust the care plan together.',
    icon: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a3 3 0 10-2.598-4.5M7 12a3 3 0 10-2.598-4.5',
  },
];

const faqs = [
  {
    q: 'Is a doctor available at Genesis?',
    a: 'Yes. A doctor is on call 24/7 and reviews residents regularly. Our clinical team also includes 24-hour registered nurses, physiotherapists, occupational therapists, a psychologist and a dietitian — all working together under one roof.',
  },
  {
    q: 'How often is physiotherapy provided?',
    a: 'Physiotherapy and occupational therapy are delivered as clinically indicated — the frequency is set by each resident’s individual care plan and reviewed regularly, rather than a fixed one-size-fits-all schedule.',
  },
  {
    q: 'How are medications handled?',
    a: 'Medications are supplied and managed in-house. Our team handles accurate dispensing, coordinates prescription refills, and records every dose so nothing is missed.',
  },
  {
    q: 'What happens in a medical emergency?',
    a: 'If a medical emergency arises we arrange ambulance transport and hospital transfer, and coordinate with the family and the receiving hospital throughout. (This is separate from routine day-to-day transport.)',
  },
  {
    q: 'Can blood tests and diagnostics be done without leaving the home?',
    a: 'In most cases, yes. Routine blood tests and diagnostics can be arranged on-site or through a partner lab visit, so residents are monitored without an unnecessary trip out.',
  },
  {
    q: 'Are all these services included in the monthly fee?',
    a: 'Core nursing care, routine clinical oversight and daily support are included in your care package. Some items — such as specialist visits, individual therapy sessions, certain medications and consumables — are itemised separately and set out clearly in your quote. See our fees & packages page for details.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function ClinicalServicesPage() {
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
        <Image
          src="/images/services/homecare-auscultation.jpg"
          alt="A Genesis Life Care nurse performing a clinical assessment on a resident"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/95 via-primary/85 to-secondary/70" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">Everything under one roof</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              Clinical &amp; allied health services
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Doctor, nurses, physiotherapy, dietitian, psychologist, in-house pharmacy, diagnostics and
              emergency ambulance &mdash; all coordinated by one team, under one roof. No juggling outside
              providers; everyone shares the same care plan.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                Book a Free Assessment
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/pricing" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                See fees &amp; packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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

      {/* ── SERVICES GRID ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">One team, one care plan</h2>
            <p className="text-lg text-gray-600">Many homes send residents out to separate providers for each need. At Genesis, the clinical and allied-health team works together on site — so care is joined-up, not fragmented.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ── WHY ONE ROOF ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Why “under one roof” matters</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            When the doctor, nurses, physiotherapist, psychologist and dietitian are all part of the same team,
            they see the same resident every day and share one care plan. A change the nurse notices at breakfast
            can reach the doctor by lunch. There&apos;s no waiting on an outside provider, no repeating the story,
            no gaps between hands.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            For families, it means one point of contact and one clear picture of how your loved one is doing.
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">Clinical services FAQ</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>See the whole team at work</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>Book a free assessment and meet the clinical team who&apos;ll care for your loved one — and get a clear, itemised quote.</p>
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
