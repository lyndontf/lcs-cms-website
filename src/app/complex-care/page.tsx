import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Complex & High-Dependency Nursing Care',
  description:
    'Genesis Life Care handles complex, high-dependency needs — tube feeding (NG/PEG), tracheostomy care, oxygen support, wound care, post-stroke and palliative care — with a trained clinical team, doctors on call, and 24/7 nursing across 5 centres.',
  alternates: {
    canonical: 'https://genesiscare.com.my/complex-care',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/complex-care' },
  },
  openGraph: {
    title: 'Complex & High-Dependency Nursing Care | Genesis Life Care',
    description:
      'For loved ones who need more than basic care — tube feeding, tracheostomy, oxygen, wound care, post-stroke and palliative care, delivered by a trained clinical team.',
    url: 'https://genesiscare.com.my/complex-care',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/nursing-station.jpg', width: 1200, height: 630, alt: 'Complex nursing care at Genesis Life Care' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'Nursing', value: '24/7', sub: 'Round The Clock' },
  { label: 'Clinical Team', value: 'Trained', sub: 'For Complex Needs' },
  { label: 'Doctors', value: 'On Call', sub: 'When Needed' },
  { label: 'AI Safety Net', value: '✓', sub: 'Vitals Watched' },
  { label: 'Centres', value: '5', sub: 'Across Malaysia' },
];

const capabilities = [
  { title: 'Tube feeding (NG / PEG)', desc: 'Safe, hygienic nasogastric and PEG feeding, managed by trained nurses.' },
  { title: 'Tracheostomy care', desc: 'Suctioning, cleaning and monitoring for residents with a tracheostomy.' },
  { title: 'Oxygen & respiratory support', desc: 'Supplemental oxygen and respiratory monitoring for residents who need it.' },
  { title: 'Wound & pressure-sore care', desc: 'Regular dressing, prevention and management of wounds and pressure sores.' },
  { title: 'Catheter care', desc: 'Careful management and changing of urinary catheters.' },
  { title: 'Injections & medication', desc: 'Prescribed injections and full medication management, on schedule.' },
  { title: 'Post-stroke rehabilitation', desc: 'Recovery-focused care and physiotherapy for residents after a stroke.' },
  { title: 'Post-operative recovery', desc: 'Close nursing care and monitoring during recovery from surgery.' },
  { title: 'Palliative & end-of-life care', desc: 'Comfort-focused, dignified care for residents in their final chapter.' },
  { title: 'Bedridden / fully dependent care', desc: 'Full assistance, repositioning and hygiene for fully dependent residents.' },
  { title: 'Dementia & behavioural care', desc: 'Structured, patient care for residents living with dementia.' },
  { title: 'Vital-signs monitoring', desc: 'Regular monitoring — backed by our AI that flags concerns to nurses in real time.' },
];

const faqs = [
  {
    q: 'What complex conditions can you care for?',
    a: 'We care for high-dependency needs including tube feeding (NG/PEG), tracheostomy care, oxygen and respiratory support, wound and pressure-sore care, catheter care, post-stroke and post-operative recovery, palliative and end-of-life care, and fully bedridden residents. If you’re unsure whether we can care for your loved one, contact us and we’ll advise honestly.',
  },
  {
    q: 'Is there a doctor and trained nursing team?',
    a: 'Yes. Care is delivered by a trained clinical team with 24-hour nursing and doctors available on call. Our AI also reviews residents’ vitals and flags concerns to nurses in real time as an added safety net.',
  },
  {
    q: 'Can you take my loved one straight from hospital?',
    a: 'Often, yes — including urgent cases. We accept hospital referrals and can usually arrange admission within 24–48 hours once the assessment and documents are ready. See our admissions page for details.',
  },
  {
    q: 'What if the needs are too complex?',
    a: 'We’ll always be honest about what we can and can’t safely manage. A free assessment lets us understand your loved one’s needs and recommend the right level of care.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function ComplexCare() {
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">Complex Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              Complex care,<br className="hidden sm:block" /> expertly handled
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              When your loved one needs more than basic care &mdash; tube feeding, a tracheostomy, oxygen,
              complex wounds, or post-stroke recovery &mdash; you need a team that&apos;s ready. Genesis handles
              high-dependency needs with a trained clinical team, doctors on call, and 24/7 nursing.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                Book a Free Assessment
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/admissions" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                How admission works
              </Link>
            </div>
          </div>
        
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src="/images/services/homecare-vitals.jpg"
                alt="A Genesis nurse monitoring a resident's vital signs"
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

      {/* ── CAPABILITIES ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">The clinical care we provide</h2>
            <p className="text-lg text-gray-600">High-dependency needs handled safely by trained nurses — not something families should have to manage alone at home.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((c, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{c.title}</p>
                  <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAFETY NET ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">A trained team, and an AI safety net</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Complex care demands vigilance. Our residents are cared for by a trained clinical team with 24-hour
            nursing and doctors on call &mdash; and our AI reviews every vital-sign reading in real time, alerting
            nurses the moment something needs attention. Human expertise, sharpened by technology.
          </p>
          <div className="mt-6">
            <Link href="/ai-powered-care" className="inline-flex items-center gap-1.5 text-primary font-bold hover:gap-2.5 transition-all">
              How our AI keeps residents safer
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">Complex care FAQ</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>Let us take the weight off your family</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>Book a free assessment and we&apos;ll tell you honestly how we can care for your loved one&apos;s complex needs.</p>
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
