import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '护理配套与收费 | 创世生命护理',
  description:
    '创世生命护理公开我们的护理配套与起始收费——每月RM2,500起，收费透明、绝无隐藏费用。比较五个护理级别，并获取免费的逐项报价。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/pricing',
    languages: { 'en': 'https://genesiscare.com.my/pricing' },
  },
  openGraph: {
    title: '护理配套与收费 | 创世生命护理',
    description: '透明的护理配套，每月RM2,500起。五个清晰定价的护理级别，绝无隐藏费用，免费逐项报价。',
    url: 'https://genesiscare.com.my/zh/pricing',
    siteName: '创世生命护理',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: '创世生命护理配套与收费' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: '起价', value: 'RM2,500', sub: '每月' },
  { label: '护理级别', value: '5', sub: '清晰定价' },
  { label: '隐藏费用', value: '无', sub: '逐项列明' },
  { label: '报价', value: '免费', sub: '无义务' },
];

type Tier = {
  name: string;
  from: string;
  cadence: string;
  who: string;
  includes: string[];
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: '基础护理',
    from: 'RM2,500',
    cadence: '/月',
    who: '生活自理或仅需轻度协助的长者，入住共用房。',
    includes: [
      '24小时护理监护',
      '共用房住宿',
      '一日三餐及点心',
      '药物管理',
      '每日活动与社交项目',
      '清洁、洗衣及家属应用更新',
    ],
  },
  {
    name: '协助生活',
    from: 'RM3,000',
    cadence: '/月',
    who: '需要日常生活起居实际协助的长者。',
    includes: [
      '包含基础护理的一切，另加：',
      '协助沐浴、穿衣及梳理',
      '行动与如厕协助',
      '跌倒风险监测',
      '按需协助喂食',
    ],
  },
  {
    name: '专业／高依赖护理',
    from: 'RM3,800',
    cadence: '/月',
    who: '卧床或需要护士主导的密切护理的长者。',
    includes: [
      '包含协助生活的一切，另加：',
      '卧床长者护理',
      '管饲（NG／PEG）支持',
      '翻身及压疮护理',
      '更密切的护士主导监护',
    ],
    featured: true,
  },
  {
    name: '复杂与舒缓护理',
    from: 'RM4,500',
    cadence: '/月',
    who: '有专科临床或临终护理需求的长者。',
    includes: [
      '包含专业护理的一切，另加：',
      '气管切开及供氧支持',
      '复杂伤口护理',
      '疼痛与症状管理',
      '舒缓与临终护理及家属支持',
    ],
  },
  {
    name: '独立房／尊尚',
    from: 'RM5,000',
    cadence: '/月',
    who: '任何护理级别，入住独立房，享更多舒适与私密。',
    includes: [
      '所选护理级别，入住独立房',
      '更多私密与个人空间',
      '更多舒适与设施',
      '家属探访空间',
    ],
  },
];

const flexible = [
  {
    name: '日间照护',
    price: '弹性日间收费',
    desc: '家属上班期间提供日间照护、餐食与活动——最经济的选择。收费于评估后报价。',
  },
  {
    name: '喘息／短期入住',
    price: '按入住报价',
    desc: '短期入住，让家庭照顾者得以喘息，或作为出院后的过渡。弹性短期收费。',
  },
];

const extras = [
  '消耗品（如尿片、喂食配方）',
  '专科药物',
  '医生及专科探诊',
  '物理治疗及治疗课程',
];

const faqs = [
  {
    q: '「起价」是我最终要付的价格吗？',
    a: '不是——「起价」是该护理级别入住共用房的起始月费。您的实际费用取决于长者的个别需求、房型选择及任何专科护理。我们会在免费评估后提供清晰的逐项报价，让您在决定前清楚知道确切费用。',
  },
  {
    q: '每个配套都包含什么？',
    a: '每个配套都包含住宿、一日三餐及点心、24小时护理、药物管理、每日活动与日常护理、清洁与洗衣，以及通过家属护理应用的更新。较高级别另加更多实际协助与临床支持。',
  },
  {
    q: '什么需要额外收费？',
    a: '少数项目会另行收费，并在报价中逐项列明——例如消耗品（尿片、喂食配方）、专科药物、医生或专科探诊，以及物理治疗课程。绝无隐藏费用；任何额外项目都会在您决定前清楚列明。',
  },
  {
    q: '如果护理需求改变，可以更换级别吗？',
    a: '可以。护理需求会随时间改变，因此我们会定期重新评估并相应调整护理级别及费用。您绝不会被锁定在不再适合的级别。',
  },
  {
    q: '你们提供短期或日间护理吗？',
    a: '有的。我们提供日间照护（家属上班期间的日间护理）以及喘息／短期入住护理（短期入住，让家庭照顾者喘息或作出院过渡）。两者皆于评估后报价。',
  },
  {
    q: '我可以使用津贴或保险吗？',
    a: '在某些情况下可以。我们可协助家庭了解适用的政府津贴及保险选项——请在评估时提出。',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function PricingPageZh() {
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
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">透明定价</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              护理配套与收费
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              大多数护理院在您到访前都不会告知价格。我们选择坦诚以待。创世收费<strong>每月RM2,500起</strong>，
              涵盖五个清晰划分的护理级别——绝无隐藏费用，并提供免费的逐项报价，让您清楚知道确切费用。
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/zh/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                获取免费报价
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/zh/nursing-home-cost-malaysia" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                阅读费用指南
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">五个护理级别，公平定价</h2>
            <p className="text-lg text-gray-600">每个级别都在前一级的基础上递进。合适的级别取决于长者所需的协助程度——我们会在免费评估中协助您选择。</p>
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
                  <span className="absolute -top-3 left-7 bg-primary text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">最常见</span>
                )}
                <h3 className="text-lg font-bold text-gray-900">{t.name}</h3>
                <div className="mt-3 mb-1 flex items-baseline gap-1">
                  <span className="text-sm text-gray-500 font-semibold">起</span>
                  <span className="text-3xl font-extrabold text-primary">{t.from}</span>
                  <span className="text-sm text-gray-500 font-medium">{t.cadence}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5 min-h-[40px]">{t.who}</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {t.includes.map((inc, j) => {
                    const isHeader = inc.endsWith('另加：');
                    return (
                      <li key={j} className={`flex items-start gap-2 text-sm ${isHeader ? 'text-gray-500 font-semibold' : 'text-gray-700'}`}>
                        {!isHeader && (
                          <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        <span>{inc}</span>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href="/zh/contact"
                  className={`mt-auto inline-flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-full transition ${
                    t.featured ? 'bg-primary hover:bg-primary-600 text-white' : 'border-2 border-gray-200 hover:border-primary text-gray-800'
                  }`}
                  style={t.featured ? { color: 'white' } : undefined}
                >
                  获取报价
                </Link>
              </div>
            ))}

            {/* Flexible options card */}
            <div className="flex flex-col rounded-2xl p-7 border border-dashed border-gray-300 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 mb-4">弹性选项</h3>
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
              <Link href="/zh/contact" className="mt-6 inline-flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-full transition border-2 border-gray-200 hover:border-primary text-gray-800">
                咨询短期入住
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8 text-center max-w-2xl mx-auto">
            所有价格均为该护理级别的<strong className="text-gray-700">起始月费</strong>。您的实际费用取决于个别需求与房型选择，并在免费报价中逐项列明——绝无隐藏费用。
          </p>
        </div>
      </section>

      {/* ── WHAT'S EXTRA ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">每个配套都包含什么</h2>
              <p className="text-gray-600 leading-relaxed mb-4">无论哪个级别，每位长者都能获得基本保障——住宿、餐食、全天候护理、药物管理、每日活动、清洁与洗衣，以及通过家属护理应用的更新。</p>
              <Link href="/zh/family-app" className="text-primary font-semibold hover:underline">了解家属护理应用 →</Link>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">通常另行收费的项目</h2>
              <p className="text-gray-600 leading-relaxed mb-4">少数项目会额外收费，并在报价中逐项列明——绝无意外：</p>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">收费常见问题</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>获取您的确切逐项报价</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>预约免费评估，我们将为长者匹配合适的护理级别，并提供清晰、无义务的报价。</p>
          <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl">
            预约免费评估
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
