import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Family Care App — Real-Time Updates from Genesis',
  description:
    'Follow your loved one’s care in real time with the Life Care Systems app — care notes, vitals, appointments, photos, secure messaging and video calls with the care team. Peace of mind, from anywhere.',
  alternates: {
    canonical: 'https://genesiscare.com.my/family-app',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/family-app' },
  },
  openGraph: {
    title: 'Family Care App — Real-Time Updates from Genesis Life Care',
    description:
      'See care notes, vitals, appointments and photos, message the care team and video call — all from your phone. Complete peace of mind, wherever you are.',
    url: 'https://genesiscare.com.my/family-app',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: 'Family care app by Genesis Life Care' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'Care Visibility', value: 'Real-Time', sub: 'See It As It Happens' },
  { label: 'Access', value: '24/7', sub: 'Anytime, Anywhere' },
  { label: 'Vitals & Notes', value: '✓', sub: 'The Same View As Staff' },
  { label: 'Message & Video Call', value: '✓', sub: 'Reach The Care Team' },
  { label: 'Centres', value: '5', sub: 'Every Genesis Centre' },
];

const features = [
  {
    title: 'Real-Time Care & Progress Notes',
    desc: 'Follow what’s happening in your loved one’s day — care notes and progress updates, as the team records them.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: 'Vitals, Appointments & Medication',
    desc: 'See vital-sign readings, upcoming doctor appointments, and the medication schedule — the same view the care team works from.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Photos & Activity Updates',
    desc: 'See your loved one living, not just being cared for — photos and updates from daily activities and social moments.',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Secure Messaging with the Care Team',
    desc: 'Ask a question, share a preference, or just check in — secure in-app messaging connects you directly with the people caring for your loved one.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    title: 'Video Calls',
    desc: 'See your loved one face-to-face and speak with the care team over video — especially valuable when you can’t visit in person.',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  },
  {
    title: 'Anytime, Anywhere Access',
    desc: 'Whether you’re across town or overseas, your loved one’s care is in your pocket — for complete peace of mind.',
    icon: 'M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z',
  },
];

const steps = [
  { n: '1', title: 'Join', desc: 'When your loved one moves in, we set up your secure family login.' },
  { n: '2', title: 'Open the app', desc: 'Download the Life Care Systems app on your phone and sign in.' },
  { n: '3', title: 'Stay connected', desc: 'Follow their care and reach the team anytime, from anywhere.' },
];

const faqs = [
  {
    q: 'How do I get access to the app?',
    a: 'We set up your secure family login when your loved one joins us. You simply download the Life Care Systems app, sign in, and you’re connected.',
  },
  {
    q: 'What can I see in the app?',
    a: 'Real-time care and progress notes, vital-sign readings, appointments and the medication schedule, plus photos and activity updates. Everything is private and visible only to authorised family members.',
  },
  {
    q: 'Can I contact the care team through the app?',
    a: 'Yes. Secure in-app messaging connects you directly with the care team, and you can also video call to see your loved one and speak with staff face-to-face.',
  },
  {
    q: 'Is my family member’s information private?',
    a: 'Yes. Information stays within Genesis Life Care’s secure system, is accessible only to authorised family members and care staff, and is used solely to support your loved one’s care. We never sell it or share it for marketing.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function FamilyApp() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                </svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">Family Access</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                Follow Their Care<br className="hidden sm:block" /> in Real Time
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Your loved one&apos;s care, in your pocket. Through the Life Care Systems app you can follow
                care notes, vitals, appointments and daily updates &mdash; message the care team, and even
                video call &mdash; anytime, from anywhere.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                  Book a Free Visit
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

            <div className="hidden lg:block">
              <div className="relative">
                <img src="/images/services/common-area-scenic.jpg" alt="Family following their loved one's care on the Life Care Systems app" className="rounded-2xl shadow-2xl w-full object-cover" />
                <div className="absolute -bottom-5 -right-5 bg-secondary text-white text-center rounded-xl px-6 py-4 shadow-lg hidden sm:block">
                  <p className="text-3xl font-extrabold" style={{ color: 'white' }}>24/7</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>In Your Pocket</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Everything you want to know, in one app</h2>
            <p className="text-lg text-gray-600">Families feel more involved and reassured when they can see real-time updates on their loved ones. That&apos;s exactly what the Life Care Systems app is built to do.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ── HOW TO GET ACCESS ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Getting connected is simple</h2>
            <p className="text-lg text-gray-600">Three steps and you&apos;re in your loved one&apos;s care, wherever you are.</p>
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
      <section className="hero-dark bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>Stay close, wherever you are</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>Book a free visit and we&apos;ll show you the Life Care Systems app and how families stay connected to their loved one&apos;s care.</p>
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
