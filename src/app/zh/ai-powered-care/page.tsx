import { Metadata } from 'next';
import Link from 'next/link';
import FamilyUpdates from '@/components/sections/FamilyUpdates';

export const metadata: Metadata = {
  title: 'AI 智能养老护理 | 马来西亚',
  description:
    '创世生命关怀将资深护士与人工智能结合：AI 实时监测每位长者的生命体征，并及早预测跌倒风险，让照护更安全、更及时。五间中心全面覆盖。欢迎预约免费参观。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/ai-powered-care',
    languages: {
      en: 'https://genesiscare.com.my/ai-powered-care',
      'x-default': 'https://genesiscare.com.my/ai-powered-care',
    },
  },
  openGraph: {
    title: 'AI 智能养老护理 | 创世生命关怀',
    description: '资深护士，搭配全天候 AI 实时监测生命体征、及早预测跌倒风险。以科技强化人性化照护。',
    url: 'https://genesiscare.com.my/zh/ai-powered-care',
    siteName: '创世生命关怀',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: '创世生命关怀 AI 智能护理' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'AI 生命体征监测', value: '24/7', sub: '每次读数皆审阅' },
  { label: '跌倒风险预测', value: '✓', sub: '及早主动防范' },
  { label: '覆盖中心', value: '5', sub: '每间创世中心' },
  { label: '护士警报', value: '即时', sub: '第一时间通知' },
  { label: '始终以人为本', value: '✓', sub: '护士主导决策' },
];

const features = [
  {
    title: '24/7 AI 生命体征监测',
    desc: '每当护士记录长者的生命体征，AI 都会结合其完整病历、用药情况与两周趋势进行审阅。一旦发现异常，立即行动。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: '及早预测跌倒风险',
    desc: '跌倒是长者严重受伤的主要原因。AI 会根据长者的行动能力、用药、近期生命体征与护理记录评估跌倒风险，在意外发生前提前识别需要额外照护的长者。',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    title: '即时护士警报',
    desc: '当读数需要关注时，值班护士会立即收到警报及明确的行动方案：现在该检查什么、多久复查一次、何时需要通知医生。任何异常都不会被忽略。',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  },
  {
    title: '始终以人为本',
    desc: 'AI 辅助护士，绝不取代护士。每一则警报与评估都由合格护理人员审阅并采取行动。科技的职责很简单：确保不遗漏任何重要讯息，并让合适的人第一时间知晓。AI 不做医疗诊断。',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
];

const steps = [
  { n: '1', title: '记录', desc: '护士在日常查房时使用照护应用记录生命体征。' },
  { n: '2', title: 'AI 审阅', desc: '结合长者完整病历审阅每次读数，并重新评估跌倒风险。' },
  { n: '3', title: '行动', desc: '发现异常即刻向合适的护士发出结构化警报，并附明确的升级标准。' },
];

const faqs = [
  {
    q: 'AI 会做医疗决定或诊断吗？',
    a: '不会。AI 是一道安全防线，负责标记疑虑并向合格护士建议行动，由护士审阅并处理。AI 不做诊断，所有决定仍由受过训练的照护团队负责。',
  },
  {
    q: '家人的资料是否受到保护？',
    // 隐私措辞已获 Lyndon 批准 2026-07-02（已移除 PDPA 引用）。
    a: '是的。AI 所使用的任何资料都保存在创世生命关怀的安全照护系统内，仅授权照护人员可存取，且仅用于支援长者的照护。我们绝不将其出售或用于营销用途。',
  },
  {
    q: '会告知家属使用了 AI 吗？',
    a: '会的。AI 是我们照护团队守护长者安全的一部分，我们对此保持透明。它在后台默默运作，协助护士更快回应。',
  },
  {
    q: '哪些中心提供 AI 智能护理？',
    a: '创世生命关怀全部五间中心 —— 八打灵再也、巴生、加影、蒲种及新山。',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function AiPoweredCareZh() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">AI 智能护理</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                马来西亚 AI 智能养老护理
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                资深护士，搭配全天候 AI 实时监测每位长者的生命体征、及早识别风险 —— 让问题更早被发现，而非事后补救。
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/zh/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                  预约免费参观
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

            <div className="hidden lg:block">
              <div className="relative">
                <img src="/images/general/ai-dashboard-mockup.png" alt="Life Care Systems 平台 —— 桌面与移动端的住客仪表板" className="rounded-2xl shadow-2xl w-full object-contain bg-white p-2" />
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">让长者更安全的科技</h2>
            <p className="text-lg text-gray-600">创世将资深护士与 AI 结合，只为一个目的：确保不遗漏任何重要讯息，并让合适的人第一时间知晓。</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">运作方式</h2>
            <p className="text-lg text-gray-600">三个简单步骤，在每次查房背后默默运行。</p>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">常见问题</h2>
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
      <FamilyUpdates lang="zh" />

      <section className="hero-dark bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>亲临参观 AI 智能护理</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>预约免费参观任何一间创世中心，我们将向您展示护士与 AI 如何携手守护您所爱的人。</p>
          <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl">
            预约免费参观
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
