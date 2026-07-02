import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '复杂与高依赖护理',
  description:
    '创世生命关怀能应对复杂、高依赖需求 —— 管饲（鼻胃管/胃造口）、气管造口护理、氧气支持、伤口护理、中风后与舒缓护理 —— 由受训临床团队、随时待命的医生及五间中心的 24 小时护理提供。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/complex-care',
    languages: {
      en: 'https://genesiscare.com.my/complex-care',
      'x-default': 'https://genesiscare.com.my/complex-care',
    },
  },
  openGraph: {
    title: '复杂与高依赖护理 | 创世生命关怀',
    description: '当长者需要的不只是基础照护 —— 管饲、气管造口、氧气、伤口、中风后与舒缓护理，由受训临床团队提供。',
    url: 'https://genesiscare.com.my/zh/complex-care',
    siteName: '创世生命关怀',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/nursing-station.jpg', width: 1200, height: 630, alt: '创世生命关怀复杂护理' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: '护理', value: '24/7', sub: '全天候' },
  { label: '临床团队', value: '受训', sub: '应对复杂需求' },
  { label: '医生', value: '随时待命', sub: '视需要而定' },
  { label: 'AI 安全网', value: '✓', sub: '实时监测' },
  { label: '中心', value: '5', sub: '遍布马来西亚' },
];

const capabilities = [
  { title: '管饲（鼻胃管 / 胃造口 PEG）', desc: '由受训护士安全、卫生地进行鼻胃管与胃造口喂食。' },
  { title: '气管造口护理', desc: '为气管造口住客进行抽痰、清洁与监测。' },
  { title: '氧气与呼吸支持', desc: '为有需要的住客提供补充氧气与呼吸监测。' },
  { title: '伤口与压疮护理', desc: '定期换药，预防并处理伤口与压疮。' },
  { title: '导管护理', desc: '细心管理与更换尿管。' },
  { title: '注射与用药管理', desc: '按时进行处方注射与全面用药管理。' },
  { title: '中风后康复', desc: '为中风后住客提供以康复为重点的照护与物理治疗。' },
  { title: '术后康复', desc: '术后康复期间的密切护理与监测。' },
  { title: '舒缓与临终关怀', desc: '为处于人生最后阶段的住客提供以舒适为重、有尊严的照护。' },
  { title: '卧床 / 完全依赖护理', desc: '为完全依赖的住客提供全面协助、翻身与卫生照护。' },
  { title: '失智与行为护理', desc: '为失智住客提供有条理、耐心的照护。' },
  { title: '生命体征监测', desc: '定期监测 —— 并由 AI 实时向护士标记异常。' },
];

const faqs = [
  {
    q: '你们能照护哪些复杂病况？',
    a: '我们照护高依赖需求，包括管饲（鼻胃管/胃造口）、气管造口护理、氧气与呼吸支持、伤口与压疮护理、导管护理、中风后与术后康复、舒缓与临终关怀，以及完全卧床的住客。若不确定我们能否照护长者，请联系我们，我们会诚实建议。',
  },
  {
    q: '有医生和受训护理团队吗？',
    a: '有。照护由受训临床团队提供，配备 24 小时护理与随时待命的医生。我们的 AI 也会审阅住客的生命体征，并实时向护士标记异常，作为额外的安全网。',
  },
  {
    q: '可以直接从医院接收长者吗？',
    a: '通常可以 —— 包括紧急个案。我们接受医院转介，通常在评估与文件齐备后可于 24–48 小时内安排入住。详情请参阅我们的入住页面。',
  },
  {
    q: '如果需求过于复杂怎么办？',
    a: '我们始终会诚实说明能与不能安全处理的范围。免费评估让我们了解长者的需求，并推荐合适的照护级别。',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function ComplexCareZh() {
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">复杂护理</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              复杂护理，专业应对
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              当长者需要的不只是基础照护 —— 管饲、气管造口、氧气、复杂伤口，或中风后康复 —— 您需要一支随时准备好的团队。创世以受训临床团队、随时待命的医生及 24 小时护理，应对高依赖需求。
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/zh/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                预约免费评估
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

      {/* ── CAPABILITIES ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">我们提供的临床照护</h2>
            <p className="text-lg text-gray-600">高依赖需求由受训护士安全处理 —— 这些不该是家属独自在家承担的重担。</p>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">受训团队，加上 AI 安全网</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            复杂护理需要时刻警惕。我们的住客由受训临床团队照护，配备 24 小时护理与随时待命的医生 —— 而我们的 AI 实时审阅每一次生命体征读数，一旦需要关注便立即通知护士。以科技强化的人性专业。
          </p>
          <div className="mt-6">
            <Link href="/zh/ai-powered-care" className="inline-flex items-center gap-1.5 text-primary font-bold hover:gap-2.5 transition-all">
              了解 AI 如何让住客更安全
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">复杂护理常见问题</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>让我们为您的家庭分担</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>预约免费评估，我们将诚实告诉您如何照护长者的复杂需求。</p>
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
