import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '临床与专职医疗服务 | 创世生命护理',
  description:
    '医生、护士、物理治疗、营养师、心理师、院内药房、驻院检验及紧急救护车——全部由创世生命护理一支团队在同一屋檐下协调。遍布马来西亚的护理院。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/clinical-services',
    languages: { 'en': 'https://genesiscare.com.my/clinical-services' },
  },
  openGraph: {
    title: '临床与专职医疗服务 | 创世生命护理',
    description: '同一屋檐下的完整临床与专职医疗团队——医生、护士、物理治疗、营养师、心理师、药房、检验及紧急救护车。',
    url: 'https://genesiscare.com.my/zh/clinical-services',
    siteName: '创世生命护理',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: '创世生命护理临床与专职医疗服务' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: '一站式', value: '一屋檐', sub: '协调护理' },
  { label: '医生', value: '24/7', sub: '随时待命' },
  { label: '药房', value: '院内', sub: '药物管理' },
  { label: '团队', value: '150+', sub: '临床人员' },
];

const services = [
  {
    title: '24/7 随时待命医生',
    desc: '医生全天候待命，定期为每位长者进行医疗评估，并在情况变化时启动明确的处理与转介流程。',
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z M12 3v2 M12 19v2 M3 12h2 M19 12h2',
  },
  {
    title: '24小时注册护士',
    desc: '受过训练的马来西亚注册护士日夜驻院——药物给药、伤口护理、生命体征监测及实际护理。',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: '物理治疗与职能治疗',
    desc: '设有完整的康复部门。物理治疗与职能治疗按临床需要在每位长者的护理计划中安排——行动力、肌力、中风后及术后康复。',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: '心理师主导的项目',
    desc: '由院内心理师设计并督导的认知刺激疗法（CST）与心理支持——是我们失智与记忆护理的核心。',
    icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
  },
  {
    title: '营养师与个人化膳食',
    desc: '为每位长者量身定制膳食与营养方案——糖尿、肾脏、质地调整、管饲及文化饮食需求，均由营养师规划并定期检讨。',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: '院内药房与药物管理',
    desc: '药物由院内供应与管理——准确调配、协调处方续配，并记录每一剂药，确保绝不遗漏。',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: '驻院检验与诊断',
    desc: '常规血液检验与诊断可在院内安排，或通过合作实验室上门进行——让长者无需不必要地外出即可获得监测。',
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  },
  {
    title: '紧急救护车与转院',
    desc: '若发生医疗紧急情况，我们会安排救护车运送与转院，并全程与家属及接收医院协调。',
    icon: 'M8 7h8m-8 4h8m-4-8v2M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2h-3l-2-2H10L8 5H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: '每周多学科检讨',
    desc: '医生、护士、物理治疗师、心理师与营养师每周会面，共同检讨每位长者的进展并调整护理计划。',
    icon: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a3 3 0 10-2.598-4.5M7 12a3 3 0 10-2.598-4.5',
  },
];

const faqs = [
  {
    q: '创世有医生驻诊吗？',
    a: '有的。医生24/7随时待命，并定期为长者进行评估。我们的临床团队还包括24小时注册护士、物理治疗师、职能治疗师、心理师及营养师——全部在同一屋檐下协作。',
  },
  {
    q: '物理治疗多久进行一次？',
    a: '物理治疗与职能治疗按临床需要安排——频率由每位长者的个人护理计划决定并定期检讨，而非采用一刀切的固定时间表。',
  },
  {
    q: '药物如何处理？',
    a: '药物由院内供应与管理。我们的团队负责准确调配、协调处方续配，并记录每一剂药，确保绝不遗漏。',
  },
  {
    q: '发生医疗紧急情况怎么办？',
    a: '若发生医疗紧急情况，我们会安排救护车运送与转院，并全程与家属及接收医院协调。（此与日常例行交通接送不同。）',
  },
  {
    q: '血液检验与诊断可以不外出进行吗？',
    a: '大多数情况下可以。常规血液检验与诊断可在院内安排，或通过合作实验室上门进行，让长者无需不必要地外出即可获得监测。',
  },
  {
    q: '这些服务都包含在月费内吗？',
    a: '核心护理、常规临床监护与日常支持都包含在您的护理配套内。部分项目——如专科探诊、个别治疗课程、某些药物及消耗品——会另行逐项列明，并在报价中清楚说明。详情请见收费与配套页面。',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function ClinicalServicesPageZh() {
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">一站式全方位照护</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              临床与专职医疗服务
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              医生、护士、物理治疗、营养师、心理师、院内药房、检验及紧急救护车——全部由一支团队在同一屋檐下协调。
              无需奔波于院外供应商之间；所有人共用同一份护理计划。
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/zh/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                预约免费评估
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/zh/pricing" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                查看收费与配套
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

      {/* ── SERVICES GRID ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">一支团队，一份护理计划</h2>
            <p className="text-lg text-gray-600">许多护理院会把长者转往各自独立的院外供应商。在创世，临床与专职医疗团队在院内协同工作——让照护环环相扣，而非支离破碎。</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ONE ROOF ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">为什么「同一屋檐下」很重要</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            当医生、护士、物理治疗师、心理师与营养师同属一支团队时，他们每天见到同一位长者，共用一份护理计划。
            护士在早餐时留意到的变化，午餐前就能传达给医生。无需等待院外供应商、无需重复病情、各环节之间不留空隙。
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            对家属而言，这意味着单一联络窗口，以及对长者状况一目了然的清晰全貌。
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">临床服务常见问题</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>亲眼见证整支团队的工作</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>预约免费评估，认识将照护您长者的临床团队，并获取清晰的逐项报价。</p>
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
