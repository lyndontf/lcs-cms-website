import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '马来西亚护理院费用（2026 指南）',
  description:
    '马来西亚护理院一个月多少钱？2026 清晰指南：月费范围、影响价格的因素，以及费用包含什么。创世月费从 RM2,500 起，价格透明、无隐藏费用。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/nursing-home-cost-malaysia',
    languages: {
      en: 'https://genesiscare.com.my/nursing-home-cost-malaysia',
      'x-default': 'https://genesiscare.com.my/nursing-home-cost-malaysia',
    },
  },
  openGraph: {
    title: '马来西亚护理院费用（2026 指南）| 创世生命关怀',
    description: '2026 年马来西亚护理院的收费、影响价格的因素与费用包含什么。创世月费从 RM2,500 起，透明无隐藏费用。',
    url: 'https://genesiscare.com.my/zh/nursing-home-cost-malaysia',
    siteName: '创世生命关怀',
    locale: 'zh_CN',
    type: 'article',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: '马来西亚护理院费用指南' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: '创世起价', value: 'RM2,500', sub: '每月' },
  { label: '隐藏费用', value: '无', sub: '完全透明' },
  { label: '护理级别', value: '5', sub: '合理定价' },
  { label: '免费', value: '✓', sub: '费用评估' },
  { label: '中心', value: '5', sub: '遍布马来西亚' },
];

const factors = [
  {
    title: '所需护理级别',
    desc: '独立或轻度协助的护理费用较低；卧床或需要密切医疗支持的长者需要更多人力，费用较高。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: '房型',
    desc: '共享房是最经济的选择；半私人或私人房间因更舒适、更私密而费用较高。',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    title: '医疗与临床需求',
    desc: '特殊需求 —— 管饲（鼻胃管/PEG）、气管造口护理、氧气支持、伤口护理或物理治疗 —— 因需要受训人员与耗材而增加费用。',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: '入住时长',
    desc: '短期或喘息护理的收费方式通常与长期护理不同。日间照护是最经济的选择。',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: '地点与设施',
    desc: '费用因地区与设施而异 —— 较新的场所、更多的设施与更低的护理员比例，一般费用较高。',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
];

const faqs = [
  {
    q: '马来西亚护理院一个月多少钱？',
    a: '月费因护理级别、房型与地点而异。作为一般指引，马来西亚私人护理院的月费通常约在 RM2,500 至 RM5,000+ 之间，高端养老居所更高。创世生命关怀的月费从 RM2,500 起。',
  },
  {
    q: '月费包含什么？',
    a: '在创世，月费涵盖住宿、膳食、24 小时护理、日常活动与常规照护。某些特殊医疗需求或耗材可能另计 —— 我们会在您决定前清楚透明地说明，绝无隐藏费用。',
  },
  {
    q: '会有隐藏费用吗？',
    a: '不会。我们坚持价格透明。您的报价会清楚列明包含哪些项目、哪些（如有）另行收费，让您没有意外。',
  },
  {
    q: '可以申请津贴或使用保险吗？',
    a: '在某些情况下可以。在适用情况下，我们可协助家属了解可用的政府津贴与保险选项。',
  },
  {
    q: '如何得到长者的确切价格？',
    a: '费用取决于个别需求，最准确的方式是免费评估。预约免费参观，我们将评估所需护理级别，并提供清晰、逐项列明的报价。',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function NursingHomeCostMalaysiaZh() {
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
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">2026 费用指南</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              马来西亚护理院一个月多少钱？
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              一份清晰、诚实的 2026 年护理院费用指南 —— 您通常需要支付多少、哪些因素影响价格、费用包含什么。在创世，月费从
              <strong> RM2,500 起</strong>，价格透明、无隐藏费用。
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/zh/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                获取免费报价
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/zh/admissions" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                了解入住流程
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">您大约需要支付多少</h2>
            <p className="text-lg text-gray-600">作为 2026 年马来西亚私人护理院的一般指引。确切费用取决于所需护理 —— 以下数字仅供参考。</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-6 py-5 shadow-sm">
              <div>
                <p className="font-bold text-gray-900">基础 / 协助式护理</p>
                <p className="text-sm text-gray-500">轻度协助，共享房</p>
              </div>
              <p className="text-lg font-extrabold text-primary whitespace-nowrap">RM2,500&ndash;3,500</p>
            </div>
            <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-6 py-5 shadow-sm">
              <div>
                <p className="font-bold text-gray-900">高依赖 / 医疗护理</p>
                <p className="text-sm text-gray-500">卧床、管饲、更密切护理</p>
              </div>
              <p className="text-lg font-extrabold text-primary whitespace-nowrap">RM3,500&ndash;5,000</p>
            </div>
            <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-6 py-5 shadow-sm">
              <div>
                <p className="font-bold text-gray-900">高端 / 私人房护理</p>
                <p className="text-sm text-gray-500">私人房间，额外设施</p>
              </div>
              <p className="text-lg font-extrabold text-primary whitespace-nowrap">RM5,000+</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-5 text-center">创世生命关怀月费从 <strong className="text-gray-700">RM2,500/月</strong> 起。市场其他数字仅供参考，因经营者与地点而异。</p>
        </div>
      </section>

      {/* ── WHAT AFFECTS COST ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">哪些因素影响费用</h2>
            <p className="text-lg text-gray-600">五个因素决定您每月需要支付多少。</p>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">透明定价，从 RM2,500/月 起</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            许多护理院在您参观前不会告知价格。我们宁愿开诚布公。创世月费从 RM2,500 起，您的报价会清楚列明包含哪些项目 —— 无隐藏费用、没有意外。要知道确切费用，最准确的方式是对长者需求进行免费评估。
          </p>
          <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-bold px-7 py-3.5 rounded-full transition shadow-lg hover:shadow-xl" style={{ color: 'white' }}>
            获取免费、逐项列明的报价
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">护理院费用常见问题</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>清楚知道您需要支付多少</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>预约免费评估，我们将为长者的照护提供清晰、逐项列明的报价 —— 无任何义务。</p>
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
