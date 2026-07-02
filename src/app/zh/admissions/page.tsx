import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '护理院入住与资格',
  description:
    '如何为长者办理入住创世生命关怀：所需文件、入住流程、时间安排，以及我们接收的病况。中心提供免费评估；紧急个案可在 24–48 小时内入住。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/admissions',
    languages: {
      en: 'https://genesiscare.com.my/admissions',
      'x-default': 'https://genesiscare.com.my/admissions',
    },
  },
  openGraph: {
    title: '护理院入住与资格 | 创世生命关怀',
    description: '文件、流程、时间与我们接收的病况 —— 为长者办理入住所需的一切。免费评估；紧急个案 24–48 小时内入住。',
    url: 'https://genesiscare.com.my/zh/admissions',
    siteName: '创世生命关怀',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: '创世生命关怀入住' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: '免费评估', value: '✓', sub: '在我们的中心' },
  { label: '紧急入住', value: '24–48小时', sub: '视需要而定' },
  { label: '接收护理类型', value: '11', sub: '种' },
  { label: '中心', value: '5', sub: '遍布马来西亚' },
  { label: '价格透明', value: '✓', sub: '无隐藏费用' },
];

const accepted = [
  '一般与长者护理',
  '失智与记忆护理',
  '中风后康复',
  '术后康复',
  '舒缓与临终关怀',
  '短期喘息护理',
  '日间照护',
  '卧床 / 完全依赖护理',
  '管饲（鼻胃管 / 胃造口 PEG）',
  '气管造口护理',
  '氧气 / 呼吸支持',
];

const steps = [
  { n: '1', title: '咨询', desc: '致电或 WhatsApp，或在线预约。简单告诉我们长者的需求。' },
  { n: '2', title: '免费评估', desc: '我们在中心免费评估长者的护理需求，并解答您的疑问。' },
  { n: '3', title: '护理方案与报价', desc: '推荐合适的护理级别，价格透明、无隐藏费用。' },
  { n: '4', title: '预留名额', desc: '一个月费用作为订金，以保留房间与入住日期。' },
  { n: '5', title: '入住', desc: '在最初几天为长者提供适应支持，让入住安心从容。' },
];

const documents = [
  '长者身份证或护照（复印件）',
  '最新医疗报告，或医院转介 / 出院摘要',
  '现有用药清单或处方',
  '近亲身份证及联系方式',
  '相关扫描、检验结果或报告',
];

const faqs = [
  {
    q: '你们接收哪些病况？',
    a: '我们接收一般与长者护理、失智与记忆护理、中风后康复、术后康复、舒缓与临终关怀、喘息与日间照护，以及更高依赖需求，包括卧床护理、管饲（鼻胃管/胃造口 PEG）、气管造口护理及氧气/呼吸支持。若不确定我们能否照护长者的病况，请联系我们，我们会诚实建议。',
  },
  {
    q: '多快可以入住？',
    a: '紧急个案通常可在 24–48 小时内入住。标准入住在免费评估与文件齐备后，通常于数天内完成。',
  },
  {
    q: '需要哪些文件？',
    a: '长者身份证/护照复印件、最新医疗报告或医院转介/出院摘要、现有用药清单、近亲身份证及联系方式，以及相关扫描或报告。若有缺漏，我们会从旁协助。',
  },
  {
    q: '评估是免费的吗？',
    a: '是的。我们在中心提供免费的护理需求评估，无任何义务，让您为家人做出正确决定。',
  },
  {
    q: '需要订金吗？',
    a: '需要 —— 一个月费用作为订金，用以保留房间并确认入住日期。',
  },
  {
    q: '决定前可以先参观吗？',
    a: '当然可以。我们鼓励家属预约免费参观，实地了解中心、认识护理团队并提出疑问，再做决定。',
  },
  {
    q: '你们协助津贴或保险吗？',
    a: '是的。在适用情况下，我们可协助家属了解可用的政府津贴与保险选项。',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function AdmissionsZh() {
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
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">入住</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              入住，简单无忧
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              将长者送入护理是重要的一步。这里清楚说明您可预期的一切 —— 所需文件、流程、时间，以及我们接收的病况 —— 让一切没有意外。
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/zh/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                预约免费评估
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="tel:+60193250457" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                致电 +6019-325-0457
              </a>
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

      {/* ── WHO WE CARE FOR ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">我们能照护哪些长者</h2>
            <p className="text-lg text-gray-600">从日常长者照护到更高依赖的医疗需求。若不确定我们能否帮上忙，尽管询问 —— 我们会诚实建议。</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">入住流程</h2>
            <p className="text-lg text-gray-600">简单五步，每一步都有支持。</p>
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
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5">您需要准备的文件</h2>
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
              <h2 className="text-2xl font-extrabold mb-3" style={{ color: 'white' }}>多快可以入住？</h2>
              <p className="text-4xl font-extrabold mb-3" style={{ color: '#FAB515' }}>24–48 小时</p>
              <p className="text-white/90 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>紧急个案通常可在 24–48 小时内入住。标准入住在免费评估与文件齐备后，通常于数天内完成。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">入住常见问题</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>准备好迈出第一步了吗？</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>预约免费、无义务的评估，我们将协助您为长者找到合适的照护。</p>
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
