import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Nursing Home Admissions & Eligibility',
  description:
    'How to admit your loved one to Genesis Life Care: the documents you need, our step-by-step process, typical timeline, and the conditions we accept. Free assessment at our centres.',
  alternates: {
    canonical: 'https://genesiscare.com.my/admissions',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/admissions' },
  },
  openGraph: {
    title: 'Nursing Home Admissions & Eligibility | Genesis Life Care',
    description:
      'Documents, process, timeline and conditions we accept — everything you need to admit your loved one. Free assessment; urgent admissions within 24–48 hours.',
    url: 'https://genesiscare.com.my/admissions',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: 'Admissions at Genesis Life Care' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'Free Assessment', value: '✓', sub: 'At Our Centres' },
  { label: 'Urgent Admission', value: '24–48h', sub: 'When Needed' },
  { label: 'Care Types', value: '11', sub: 'Accepted' },
  { label: 'Centres', value: '5', sub: 'Across Malaysia' },
  { label: 'Transparent', value: '✓', sub: 'No Hidden Fees' },
];

const accepted = [
  'General & elderly nursing care',
  'Dementia & memory care',
  'Post-stroke rehabilitation',
  'Post-operative recovery',
  'Palliative & end-of-life care',
  'Respite (short-term) care',
  'Day care',
  'Bedridden / fully dependent care',
  'Tube feeding (NG / PEG)',
  'Tracheostomy care',
  'Oxygen / respiratory support',
];

const steps = [
  { n: '1', title: 'Enquire', desc: 'Call or WhatsApp us, or book online. Tell us a little about your loved one’s needs.' },
  { n: '2', title: 'Free assessment', desc: 'We assess your loved one’s care needs at our centre — at no cost — and answer your questions.' },
  { n: '3', title: 'Care plan & quote', desc: 'We recommend the right care level and give you clear, transparent pricing with no hidden fees.' },
  { n: '4', title: 'Reserve the place', desc: 'One month’s fee as a deposit secures the room and start date.' },
  { n: '5', title: 'Move in', desc: 'We support your loved one through their first days so settling in feels calm and cared-for.' },
];

const documents = [
  'Resident’s IC or passport (copy)',
  'Latest medical report, or hospital referral / discharge summary',
  'Current medication list or prescriptions',
  'Next-of-kin IC and contact details',
  'Any relevant scans, test results, or reports',
];

const faqs = [
  {
    q: 'What conditions do you accept?',
    a: 'We accept general and elderly nursing, dementia and memory care, post-stroke rehabilitation, post-operative recovery, palliative and end-of-life care, respite and day care, and higher-dependency needs including bedridden care, tube feeding (NG/PEG), tracheostomy care, and oxygen/respiratory support. If you’re unsure whether we can care for your loved one’s condition, contact us and we’ll advise honestly.',
  },
  {
    q: 'How quickly can you admit someone?',
    a: 'Urgent cases can often be admitted within 24–48 hours. Standard admissions typically complete within a few days, once the free assessment and documents are ready.',
  },
  {
    q: 'What documents do I need?',
    a: 'The resident’s IC/passport copy, a latest medical report or hospital referral/discharge summary, a current medication list, next-of-kin IC and contact details, and any relevant scans or reports. We’ll guide you if anything is missing.',
  },
  {
    q: 'Is the assessment free?',
    a: 'Yes. We provide a free care-needs assessment at our centres, with no obligation, so you can make the right decision for your family.',
  },
  {
    q: 'Is a deposit required?',
    a: 'Yes — one month’s fee is taken as a deposit to reserve the room and confirm the start date.',
  },
  {
    q: 'Can I visit before deciding?',
    a: 'Absolutely. We encourage families to book a free visit to see the centre, meet the care team, and ask questions before committing.',
  },
  {
    q: 'Do you help with subsidies or insurance?',
    a: 'Yes. We can help families explore available government subsidies and insurance options where applicable.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function Admissions() {
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

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">Admissions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              Admissions made simple
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Bringing a loved one into care is a big step. Here&apos;s exactly what to expect &mdash; the
              documents, the process, the timeline, and the conditions we care for &mdash; so there are no
              surprises.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                Book a Free Assessment
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="tel:+60193250457" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call +6019-325-0457
              </a>
            </div>
          </div>
        
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src="/images/general/dr-sue-rounds.jpg"
                alt="Genesis Life Care staff caring for a resident"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center"
              />
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

      {/* ── WHO WE CARE FOR ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Who we can care for</h2>
            <p className="text-lg text-gray-600">From everyday elderly care to higher-dependency medical needs. If you’re unsure whether we can help, just ask — we’ll advise honestly.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {accepted.map((c, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-800 text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROCESS ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">The admission process</h2>
            <p className="text-lg text-gray-600">Five simple steps, with support at each one.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
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

      {/* ── DOCUMENTS + TIMELINE ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Documents you’ll need</h2>
              <ul className="space-y-3">
                {documents.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <span className="text-gray-700">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white flex flex-col justify-center" style={{ color: 'white' }}>
              <h2 className="text-2xl font-extrabold mb-3" style={{ color: 'white' }}>How quickly can we admit?</h2>
              <p className="text-4xl font-extrabold mb-3" style={{ color: '#FAB515' }}>24–48 hours</p>
              <p className="text-white/90 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>Urgent cases can often be admitted within 24&ndash;48 hours. Standard admissions typically complete within a few days, once the free assessment and documents are ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">Admissions FAQ</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>Ready to take the first step?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>Book a free, no-obligation assessment and we&apos;ll help you find the right care for your loved one.</p>
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
