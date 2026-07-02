import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nursing Home Cost in Malaysia (2026 Guide)',
  description:
    'How much does a nursing home cost in Malaysia? A clear 2026 guide to monthly fees, what drives the price, and what’s included. Genesis fees start from RM2,500/month with transparent, no-hidden-fee pricing.',
  alternates: {
    canonical: 'https://genesiscare.com.my/nursing-home-cost-malaysia',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/nursing-home-cost-malaysia' },
  },
  openGraph: {
    title: 'Nursing Home Cost in Malaysia (2026 Guide) | Genesis Life Care',
    description:
      'What nursing home care costs in Malaysia in 2026, what affects the price, and what’s included. Genesis pricing from RM2,500/month, transparent and no hidden fees.',
    url: 'https://genesiscare.com.my/nursing-home-cost-malaysia',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'article',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: 'Nursing home cost guide Malaysia' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'Genesis From', value: 'RM2,500', sub: 'Per Month' },
  { label: 'Hidden Fees', value: 'None', sub: 'Fully Transparent' },
  { label: 'Care Levels', value: '5', sub: 'Priced Fairly' },
  { label: 'Free', value: '✓', sub: 'Cost Assessment' },
  { label: 'Centres', value: '5', sub: 'Across Malaysia' },
];

const factors = [
  {
    title: 'Level of care needed',
    desc: 'Independent or light-assistance care costs less than high-dependency care. Residents who are bedridden or need close medical support need more staff time, so fees are higher.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Room type',
    desc: 'A shared room is the most affordable option; a semi-private or private room costs more for the added comfort and privacy.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    title: 'Medical & clinical needs',
    desc: 'Specialised needs — tube feeding (NG/PEG), tracheostomy care, oxygen support, wound care or physiotherapy — add to the cost because they require trained staff and supplies.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Length of stay',
    desc: 'Short-term or respite stays are usually charged differently from long-term care. Day care is the most affordable option of all.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Location & facility',
    desc: 'Fees vary by area and by the facility itself — newer premises, more amenities and lower resident-to-caregiver ratios generally cost more.',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
];

const faqs = [
  {
    q: 'How much does a nursing home cost in Malaysia?',
    a: 'Monthly fees vary with the level of care, room type and location. As a general guide, private nursing home fees in Malaysia typically range from around RM2,500 to RM5,000+ per month, with premium retirement-living options higher. At Genesis Life Care, fees start from RM2,500/month.',
  },
  {
    q: 'What does the monthly fee include?',
    a: 'At Genesis, the monthly fee covers accommodation, meals, 24-hour nursing care, daily activities and routine care. Certain specialised medical needs or consumables may be additional — we set this out clearly and transparently before you decide, with no hidden fees.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No. We believe in transparent pricing. Your quote spells out exactly what’s included and what (if anything) is charged separately, so there are no surprises.',
  },
  {
    q: 'Can I get a subsidy or use insurance?',
    a: 'In some cases, yes. We can help families explore available government subsidies and insurance options where applicable.',
  },
  {
    q: 'How do I get an exact price for my loved one?',
    a: 'Costs depend on individual needs, so the most accurate way is a free assessment. Book a free visit and we’ll assess the level of care required and give you a clear, itemised quote.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function NursingHomeCostMalaysia() {
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">2026 Cost Guide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              How much does a nursing home cost in Malaysia?
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              A clear, honest guide to what nursing home care costs in 2026 &mdash; what you&apos;ll typically
              pay, what drives the price, and what&apos;s included. At Genesis, fees start from
              <strong> RM2,500/month</strong>, with transparent pricing and no hidden fees.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/admissions" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                See how admission works
              </Link>
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

      {/* ── TYPICAL RANGES ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">What you can expect to pay</h2>
            <p className="text-lg text-gray-600">As a general guide for private nursing homes in Malaysia in 2026. Your exact fee depends on the care needed — the figures below are indicative.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-6 py-5 shadow-sm">
              <div>
                <p className="font-bold text-gray-900">Basic / assisted living care</p>
                <p className="text-sm text-gray-500">Light assistance, shared room</p>
              </div>
              <p className="text-lg font-extrabold text-primary whitespace-nowrap">RM2,500&ndash;3,500</p>
            </div>
            <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-6 py-5 shadow-sm">
              <div>
                <p className="font-bold text-gray-900">Higher-dependency / medical care</p>
                <p className="text-sm text-gray-500">Bedridden, tube feeding, closer nursing</p>
              </div>
              <p className="text-lg font-extrabold text-primary whitespace-nowrap">RM3,500&ndash;5,000</p>
            </div>
            <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-6 py-5 shadow-sm">
              <div>
                <p className="font-bold text-gray-900">Premium / private-room care</p>
                <p className="text-sm text-gray-500">Private room, added amenities</p>
              </div>
              <p className="text-lg font-extrabold text-primary whitespace-nowrap">RM5,000+</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-5 text-center">Genesis Life Care fees start from <strong className="text-gray-700">RM2,500/month</strong>. Figures for the wider market are indicative and vary by operator and location.</p>
        </div>
      </section>

      {/* ── WHAT AFFECTS COST ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">What affects the cost</h2>
            <p className="text-lg text-gray-600">Five things determine what you’ll pay each month.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {factors.map((f, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
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

      {/* ── GENESIS TRANSPARENCY ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Transparent pricing from RM2,500/month</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Many homes won&apos;t tell you the price until you visit. We&apos;d rather be upfront. Genesis fees
            start from RM2,500/month, and your quote spells out exactly what&apos;s included — no hidden fees,
            no surprises. The most accurate way to know your cost is a free assessment of your loved one&apos;s needs.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-bold px-7 py-3.5 rounded-full transition shadow-lg hover:shadow-xl" style={{ color: 'white' }}>
            Get your free, itemised quote
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">Nursing home cost FAQ</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>Know exactly what you’ll pay</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>Book a free assessment and we&apos;ll give you a clear, itemised quote for your loved one&apos;s care — with no obligation.</p>
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
