import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'The Genesis Ecosystem — From Training to Care',
  description:
    'One trusted group: Genesis trains its own caregivers (Genesis Training Academy), places them through a licensed agency (GLC Hire), and cares for your loved ones across 5 centres and at home. Quality at every step.',
  alternates: {
    canonical: 'https://genesiscare.com.my/our-ecosystem',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/our-ecosystem' },
  },
  openGraph: {
    title: 'The Genesis Ecosystem — From Training to Care | Genesis Life Care',
    description:
      'We train, place, and employ our own caregivers — end-to-end quality that a standalone home or app-based agency cannot match.',
    url: 'https://genesiscare.com.my/our-ecosystem',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: 'The Genesis care ecosystem' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'One Group', value: '3', sub: 'Aligned Brands' },
  { label: 'Trained In-House', value: '✓', sub: 'By Our Academy' },
  { label: 'Licensed Agency', value: '✓', sub: 'GLC Hire' },
  { label: 'Care Centres', value: '5', sub: 'Across Malaysia' },
  { label: 'Home + Centre', value: '✓', sub: 'Care Options' },
];

const pillars = [
  {
    step: 'We train',
    img: '/images/services/rehab-department.jpg',
    title: 'Genesis Training Academy',
    desc: 'Our caregivers are trained and certified to a consistent standard before they ever care for your loved one — so the person at the bedside knows exactly what they’re doing.',
    cta: 'Explore the academy',
    href: 'https://gtacademy.com.my',
    external: true,
    icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
  },
  {
    step: 'We place',
    img: '/images/services/homecare-care.jpg',
    title: 'GLC Hire · Agensi Pekerjaan GLC',
    desc: 'A licensed placement agency that matches trained, vetted caregivers to families and to our centres — so you can hire a Genesis-trained caregiver for your own home, too.',
    cta: 'Hire a trained caregiver',
    href: 'https://agency.genesiscare.com.my',
    external: true,
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    step: 'We care',
    img: '/images/services/common-area-scenic.jpg',
    title: 'Genesis Life Care',
    desc: 'Five nursing homes and home-care services across the Klang Valley and Johor Bahru — where that training is put into practice, every day, under our own supervision.',
    cta: 'Visit a centre',
    href: '/contact',
    external: false,
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function OurEcosystem() {
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

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">The Genesis Ecosystem</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              One trusted group,<br className="hidden sm:block" /> from training to care
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Most homes hire whoever&apos;s available. We do it differently &mdash; we train our own
              caregivers, place them through our licensed agency, and stand behind them in our own
              centres. Quality you can trace, at every step.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                Book a Free Visit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
            <Image
              src="/images/general/dr-sue-rounds.jpg"
              alt="Genesis caregivers supporting a resident"
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

      {/* ── THREE PILLARS ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Train. Place. Care.</h2>
            <p className="text-lg text-gray-600">Three parts of one group, working together so quality is controlled from the first day of training to the daily care your loved one receives.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
                <div className="relative h-44">
                  <Image src={p.img} alt={p.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-center" />
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">{p.step}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-5 flex-grow">{p.desc}</p>
                  {p.external ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-2.5 transition-all">
                      {p.cta}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  ) : (
                    <Link href={p.href} className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-2.5 transition-all">
                      {p.cta}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Why families choose the whole ecosystem</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Because we train, place, and employ our own caregivers, we control quality end-to-end —
            something no standalone home or app-based agency can match. When you choose Genesis, you&apos;re
            not trusting a stranger sent over for a shift. You&apos;re trusting a caregiver our own academy
            trained, our own agency placed, and our own team supervises.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="hero-dark bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>See the difference for yourself</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>Book a free visit to any Genesis centre, and we&apos;ll walk you through how our ecosystem keeps your loved one in trusted hands.</p>
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
