import { Metadata } from 'next';
import Link from 'next/link';
import FamilyUpdates from '@/components/sections/FamilyUpdates';

export const metadata: Metadata = {
  title: 'AI-Powered Nursing Care in Malaysia',
  description:
    'Genesis pairs experienced nurses with AI that watches every resident’s vital signs in real time and predicts fall risk early — safer, more responsive care across 5 centres. Book a free visit.',
  alternates: {
    canonical: 'https://genesiscare.com.my/ai-powered-care',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/ai-powered-care' },
  },
  openGraph: {
    title: 'AI-Powered Nursing Care in Malaysia | Genesis Life Care',
    description:
      'Experienced nurses, backed by round-the-clock AI that monitors vitals in real time and predicts fall risk early. Human care, sharpened by technology.',
    url: 'https://genesiscare.com.my/ai-powered-care',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: 'AI-powered nursing care at Genesis Life Care' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'AI Vitals Watch', value: '24/7', sub: 'Every Reading Reviewed' },
  { label: 'Fall-Risk Prediction', value: '✓', sub: 'Early & Proactive' },
  { label: 'Centres Covered', value: '5', sub: 'Every Genesis Centre' },
  { label: 'Nurse Alerts', value: 'Instant', sub: 'Right Nurse, Right Away' },
  { label: 'Always Human-Led', value: '✓', sub: 'Nurses In Charge' },
];

const features = [
  {
    title: '24/7 AI Vitals Watch',
    desc: 'Every time a nurse records a resident’s vital signs, our AI reviews the reading against that resident’s full medical picture — their history, medications, and two-week trend. If something looks concerning, it acts immediately.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Early Fall-Risk Prediction',
    desc: 'Falls are a leading cause of serious injury in elderly care. Our AI assesses each resident’s fall risk from their mobility, medications, recent vitals and clinical notes — surfacing who needs extra precautions before a fall happens.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    title: 'Instant Nurse Alerts',
    desc: 'When a reading needs attention, the on-duty nurse receives an immediate alert with a clear plan of action — what to check now, how often to recheck, and exactly when to escalate to the doctor. Nothing sits unnoticed.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  },
  {
    title: 'Always Human-Led',
    desc: 'Our AI supports our nurses; it never replaces them. Every alert and assessment is reviewed and acted on by qualified care staff. The technology’s job is simple: make sure nothing important is missed, and the right person knows immediately. It does not make diagnoses.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
];

const steps = [
  { n: '1', title: 'Record', desc: 'Nurses log vital signs during routine rounds using our care app.' },
  { n: '2', title: 'AI Reviews', desc: 'Each reading is checked in context, and fall risk is reassessed from the resident’s full clinical picture.' },
  { n: '3', title: 'Act', desc: 'Concerning findings trigger an instant, structured alert to the right nurse, with clear escalation thresholds.' },
];

const faqs = [
  {
    q: 'Does the AI make medical decisions or diagnoses?',
    a: 'No. The AI is a safety net that flags concerns and suggests actions for our qualified nurses to review and act on. It does not diagnose. Every decision remains with our trained care team.',
  },
  {
    q: 'Is my family member’s data private?',
    // Privacy wording approved by Lyndon 2026-07-02 (PDPA reference removed).
    a: 'Yes. Any information used by our AI stays within Genesis Life Care’s secure care system, is accessible only to authorised care staff, and is used solely to support your loved one’s care. We never sell it or share it for marketing.',
  },
  {
    q: 'Are families told that AI is used in care?',
    a: 'Yes. AI is part of how our care team keeps your loved one safe, and we are transparent about it. It works quietly in the background to help our nurses respond faster.',
  },
  {
    q: 'Which centres have AI-powered care?',
    a: 'All five Genesis Life Care centres — Petaling Jaya, Klang, Kajang, Puchong, and Johor Bahru.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function AiPoweredCare() {
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
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">AI-Powered Care</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                AI-Powered Nursing Care<br className="hidden sm:block" /> in Malaysia
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Experienced nurses, now backed by round-the-clock AI that watches every resident&apos;s
                vital signs and flags risks early &mdash; so problems are caught sooner, not later.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/contact"
                  className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl"
                >
                  Book a Free Visit
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="tel:+60193250457"
                  className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call +6019-325-0457
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="/images/services/common-area-scenic.jpg"
                  alt="AI-supported nursing care at Genesis Life Care"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-secondary text-white text-center rounded-xl px-6 py-4 shadow-lg hidden sm:block">
                  <p className="text-3xl font-extrabold" style={{ color: 'white' }}>24/7</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>AI Vitals Watch</p>
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

      {/* ── FEATURES ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Technology that keeps residents safer</h2>
            <p className="text-lg text-gray-600">Genesis pairs experienced nurses with AI built for one purpose: making sure nothing important is missed, and the right person knows immediately.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">How it works</h2>
            <p className="text-lg text-gray-600">Three simple steps, running quietly behind every round.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 mx-auto rounded-full bg-secondary text-white flex items-center justify-center text-xl font-extrabold mb-4" style={{ color: 'white' }}>{s.n}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">Frequently asked questions</h2>
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
      <FamilyUpdates lang="en" />

      <section className="hero-dark bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>See AI-powered care in person</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>Book a free visit to any Genesis centre and we&apos;ll show you exactly how our nurses and AI work together to keep your loved one safe.</p>
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
