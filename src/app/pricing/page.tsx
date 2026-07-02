import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nursing Home Fees & Care Packages | Genesis Life Care',
  description:
    'Genesis Life Care publishes its care packages and starting fees — from RM2,500/month, transparent and with no hidden fees. Compare five care levels and get a free, itemised quote.',
  alternates: {
    canonical: 'https://genesiscare.com.my/pricing',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/pricing' },
  },
  openGraph: {
    title: 'Nursing Home Fees & Care Packages | Genesis Life Care',
    description:
      'Transparent care packages from RM2,500/month. Five clearly-priced care levels, no hidden fees, free itemised quote.',
    url: 'https://genesiscare.com.my/pricing',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: 'Genesis Life Care fees and care packages' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'From', value: 'RM2,500', sub: 'Per Month' },
  { label: 'Care Levels', value: '5', sub: 'Clearly Priced' },
  { label: 'Hidden Fees', value: 'None', sub: 'Fully Itemised' },
  { label: 'Quote', value: 'Free', sub: 'No Obligation' },
];

type Tier = {
  name: string;
  from: string; // display price, e.g. 'RM2,500' — or null for quote-only
  cadence: string;
  who: string;
  includes: string[];
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: 'Essential Care',
    from: 'RM2,500',
    cadence: '/month',
    who: 'Independent seniors or those needing light assistance, in a shared room.',
    includes: [
      '24-hour nursing supervision',
      'Accommodation in a shared room',
      'Three meals a day plus snacks',
      'Medication management',
      'Daily activities & social programmes',
      'Housekeeping, laundry & family-app updates',
    ],
  },
  {
    name: 'Assisted Living',
    from: 'RM3,000',
    cadence: '/month',
    who: 'Residents who need hands-on help with daily activities.',
    includes: [
      'Everything in Essential Care, plus:',
      'Help with bathing, dressing & grooming',
      'Mobility & toileting assistance',
      'Fall-risk monitoring',
      'Assisted feeding where needed',
    ],
  },
  {
    name: 'Nursing / High-Dependency',
    from: 'RM3,800',
    cadence: '/month',
    who: 'Bedridden residents or those needing close, nurse-led care.',
    includes: [
      'Everything in Assisted Living, plus:',
      'Care for bedridden residents',
      'Tube feeding (NG / PEG) support',
      'Repositioning & pressure-area care',
      'Closer nurse-led monitoring',
    ],
    featured: true,
  },
  {
    name: 'Complex & Palliative',
    from: 'RM4,500',
    cadence: '/month',
    who: 'Residents with specialised clinical or end-of-life needs.',
    includes: [
      'Everything in Nursing care, plus:',
      'Tracheostomy & oxygen support',
      'Complex wound care',
      'Pain & symptom management',
      'Palliative & end-of-life care with family support',
    ],
  },
  {
    name: 'Private-Room / Premium',
    from: 'RM5,000',
    cadence: '/month',
    who: 'Any care level, delivered in a private room with added comfort.',
    includes: [
      'Your chosen care level in a private room',
      'More privacy & personal space',
      'Added comfort & amenities',
      'Room for family visits',
    ],
  },
];

const flexible = [
  {
    name: 'Day Care',
    price: 'Flexible daily rates',
    desc: 'Daytime care, meals and activities while family are at work — the most affordable option. Rate quoted on assessment.',
  },
  {
    name: 'Respite / Short-Stay',
    price: 'Quoted per stay',
    desc: 'Short-term stays that give family carers a break, or bridge recovery after a hospital discharge. Flexible short-term rates.',
  },
];

const extras = [
  'Consumables (e.g. diapers, feeding formula)',
  'Specialist medications',
  'Doctor & specialist visits',
  'Physiotherapy & therapy sessions',
];

const faqs = [
  {
    q: 'Is the “from” price the final price I’ll pay?',
    a: 'No — the “from” figure is the starting monthly fee for that level of care in a shared room. Your exact fee depends on your loved one’s individual needs, room choice and any specialised care. We give you a clear, itemised quote after a free assessment, so you know exactly what you’ll pay before you decide.',
  },
  {
    q: 'What’s included in every package?',
    a: 'Every package includes accommodation, three meals a day plus snacks, 24-hour nursing care, medication management, daily activities and routine care, housekeeping and laundry, and updates through our family care app. Higher tiers add more hands-on and clinical support.',
  },
  {
    q: 'What costs extra?',
    a: 'A few things are charged separately and itemised in your quote — for example consumables (diapers, feeding formula), specialist medications, doctor or specialist visits, and physiotherapy sessions. There are no hidden fees; anything additional is spelled out clearly before you commit.',
  },
  {
    q: 'Can we move between tiers if care needs change?',
    a: 'Yes. Care needs change over time, so we reassess regularly and adjust the level of care — and the fee — accordingly. You’re never locked into a tier that no longer fits.',
  },
  {
    q: 'Do you offer short-term or day care?',
    a: 'Yes. We offer day care (daytime care while family are at work) and respite / short-stay care (short-term stays to give family carers a break or bridge a hospital discharge). Both are quoted on assessment.',
  },
  {
    q: 'Can I use a subsidy or insurance?',
    a: 'In some cases, yes. We can help families explore available government subsidies and insurance options where applicable — just ask during your assessment.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function PricingPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">Transparent Pricing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              Care packages &amp; fees
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Most homes won&apos;t tell you the price until you visit. We&apos;d rather be upfront. Genesis fees
              start from <strong>RM2,500/month</strong>, across five clearly-defined care levels — with no hidden
              fees and a free, itemised quote so you know exactly what you&apos;ll pay.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/nursing-home-cost-malaysia" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                Read the cost guide
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

      {/* ── TIER CARDS ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Five care levels, priced fairly</h2>
            <p className="text-lg text-gray-600">Each level builds on the one before it. The right level depends on how much support your loved one needs — we&apos;ll help you choose during a free assessment.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {tiers.map((t, i) => (
              <div
                key={i}
                className={`flex flex-col rounded-2xl p-7 border shadow-sm hover:shadow-lg transition ${
                  t.featured ? 'border-primary ring-2 ring-primary/20 bg-white relative' : 'border-gray-100 bg-white'
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-7 bg-primary text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">Most common</span>
                )}
                <h3 className="text-lg font-bold text-gray-900">{t.name}</h3>
                <div className="mt-3 mb-1 flex items-baseline gap-1">
                  <span className="text-sm text-gray-500 font-semibold">from</span>
                  <span className="text-3xl font-extrabold text-primary">{t.from}</span>
                  <span className="text-sm text-gray-500 font-medium">{t.cadence}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5 min-h-[40px]">{t.who}</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {t.includes.map((inc, j) => {
                    const isHeader = inc.endsWith('plus:');
                    return (
                      <li key={j} className={`flex items-start gap-2 text-sm ${isHeader ? 'text-gray-500 font-semibold' : 'text-gray-700'}`}>
                        {!isHeader && (
                          <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        <span className={isHeader ? 'ml-0' : ''}>{inc}</span>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-auto inline-flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-full transition ${
                    t.featured ? 'bg-primary hover:bg-primary-600 text-white' : 'border-2 border-gray-200 hover:border-primary text-gray-800'
                  }`}
                  style={t.featured ? { color: 'white' } : undefined}
                >
                  Get a quote
                </Link>
              </div>
            ))}

            {/* Flexible options card */}
            <div className="flex flex-col rounded-2xl p-7 border border-dashed border-gray-300 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Flexible options</h3>
              <div className="space-y-5 flex-1">
                {flexible.map((f, i) => (
                  <div key={i}>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-bold text-gray-900">{f.name}</span>
                      <span className="text-sm font-semibold text-primary whitespace-nowrap">{f.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="mt-6 inline-flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-full transition border-2 border-gray-200 hover:border-primary text-gray-800">
                Ask about short-stay
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8 text-center max-w-2xl mx-auto">
            All prices are the <strong className="text-gray-700">starting monthly fee</strong> for that level of care. Your exact fee depends on individual needs and room choice, and is itemised in a free quote — no hidden fees.
          </p>
        </div>
      </section>

      {/* ── WHAT'S EXTRA ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">What&apos;s included in every package</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Whatever the tier, every resident gets the essentials — accommodation, meals, round-the-clock nursing, medication management, daily activities, housekeeping and laundry, and updates through our family care app.</p>
              <Link href="/family-app" className="text-primary font-semibold hover:underline">See the family care app →</Link>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">What&apos;s typically charged separately</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A few items are billed on top and always itemised in your quote — no surprises:</p>
              <ul className="space-y-2">
                {extras.map((e, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">Pricing FAQ</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>Get your exact, itemised quote</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>Book a free assessment and we&apos;ll match your loved one to the right care level and give you a clear, no-obligation quote.</p>
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
