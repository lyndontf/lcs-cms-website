import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '马来西亚中风康复中心 | 创世纪生命护理',
  description:
    '马来西亚5个中心的全面中风康复服务。物理治疗、职业治疗和言语治疗。个性化康复计划与多学科团队。免费咨询。',
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: '康复中心', value: '5', sub: '遍布马来西亚' },
  { label: '多学科', value: '\u2713', sub: '团队方法' },
  { label: '治疗类型', value: '3', sub: '物理治疗 · 职业治疗 · 言语治疗' },
  { label: '护理', value: '24/7', sub: '24小时不间断' },
  { label: '价格合理', value: '\u2713', sub: '所有中心' },
];

const features = [
  {
    title: '个性化物理治疗',
    desc: '定制的运动和计划，帮助恢复中风后的力量、平衡和活动能力。',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: '职业治疗',
    desc: '重新学习日常生活技能，如穿衣、进食和个人护理，以获得更大的独立性。',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    title: '言语治疗',
    desc: '为沟通困难、吞咽困难和认知语言恢复提供专业支持。',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    title: '定期进度评估',
    desc: '频繁评估和目标设定，以跟踪恢复里程碑并调整治疗计划。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: '家庭培训与教育',
    desc: '教导家人实用技能和技巧，以支持居家持续康复。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: '情感和心理支持',
    desc: '通过咨询和同伴支持计划来解决中风对心理健康的影响。',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
];

const conditions = [
  {
    name: '缺血性中风幸存者',
    desc: '最常见的中风类型由血栓引起。我们的康复治疗针对活动能力、言语和认知恢复。',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    name: '出血性中风幸存者',
    desc: '脑部出血的恢复需要在密切医疗监督下进行谨慎的渐进式康复。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    name: '一过性脑缺血发作（TIA）',
    desc: '小中风康复和预防计划，以降低未来中风事件的风险。',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  },
  {
    name: '术后中风患者',
    desc: '外科手术干预后的康复，如开颅手术或颈动脉内膜切除术。',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    name: '年轻中风幸存者',
    desc: '中风可以影响各个年龄段的人。我们帮助年轻患者恢复工作和活跃生活。',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    name: '多次中风患者',
    desc: '为经历多次中风的患者提供专业计划，应对累积性挑战。',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
];

const centres = [
  { name: '八打灵再也', slug: 'nursing-home-in-petaling-jaya', rating: '4.9', tag: '旗舰中心', img: '/images/pj-centre.jpg' },
  { name: '巴生', slug: 'nursing-home-in-klang', rating: '4.8', tag: '创始中心', img: '/images/klang-centre.jpg' },
  { name: '加影', slug: 'nursing-home-kajang', rating: '4.7', tag: '南吉隆坡', img: '/images/kajang-centre.jpeg' },
  { name: '蒲种', slug: 'nursing-home-in-puchong', rating: '4.8', tag: '现代设施', img: '/images/puchong-centre.jpeg' },
  { name: '柔佛巴鲁', slug: 'nursing-home-in-johor-bahru', rating: '4.8', tag: '南部地区', img: '/images/jb-centre.jpeg' },
];

const faqs = [
  {
    q: '中风后应该多快开始康复？',
    a: '医学稳定后越早越好，通常在几天内。早期康复可以获得更好的效果。我们的团队与医院协调，确保无缝转移。',
  },
  {
    q: '中风康复需要多长时间？',
    a: '取决于严重程度。轻度中风可能需要数周，严重中风需要数个月。我们为每位患者制定个性化的时间表，并根据进展进行调整。',
  },
  {
    q: '包含哪些类型的治疗？',
    a: '物理治疗用于活动能力和力量，职业治疗用于日常技能，言语治疗用于沟通和吞咽。所有都根据个人需求进行定制。',
  },
  {
    q: '家庭成员可以参与康复吗？',
    a: '当然可以。家庭参与可以改善效果。我们提供培训课程，并鼓励家庭参与治疗课程。',
  },
  {
    q: '所有中心都提供中风康复吗？',
    a: '是的，创世纪生命护理的所有五个中心都拥有完整的康复设施和多学科治疗团队。',
  },
  {
    q: '中风康复的费用是多少？',
    a: '费用取决于护理水平和持续时间。我们提供透明的定价并帮助探索补贴和保险。联系我们获取个性化报价。',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function StrokeRehabilitationZh() {
  return (
    <main className="bg-white">
      {/* Override global custom_css !important rules for dark-bg sections */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div { color: inherit; }
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div,
        .hero-dark .text-4xl, .hero-dark .text-5xl, .hero-dark .sm\\:text-5xl,
        .hero-dark .text-3xl, .hero-dark .text-lg, .hero-dark .text-sm,
        .hero-dark .text-white { color: #ffffff !important; }
        .hero-dark .text-gray-900 { color: rgb(17 24 39) !important; }
        .hero-dark .text-gray-800 { color: rgb(31 41 55) !important; }
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
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">专业康复治疗</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                马来西亚中风康复<br className="hidden sm:block" /> 中心
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                5个中心提供全面的物理治疗、职业治疗和言语治疗。个性化康复计划与多学科团队帮助中风幸存者恢复独立能力。
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/zh/contact"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  预约免费咨询
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="tel:+60123210457"
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  致电 +6012-321-0457
                </a>
              </div>
            </div>

            {/* Right — image */}
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="/images/services/rehab-department.jpg"
                  alt="创世纪生命护理中风康复部门"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-primary text-white rounded-xl px-6 py-4 shadow-lg hidden sm:block">
                  <p className="text-3xl font-extrabold" style={{ color: 'white' }}>3</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>治疗类型</p>
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

      {/* ── UNDERSTANDING STROKE RECOVERY ─────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">了解中风康复</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">为什么专业康复很重要</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                中风发生在流向大脑某部分的血流被中断时，导致脑细胞受损或死亡。影响可能是毁灭性的，影响运动、言语、认知和情感健康。在马来西亚，中风是长期残疾的主要原因之一，使专业康复比以往任何时候都更重要。
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                中风后的恢复需要由多学科团队提供的结构化、循证方法。单独的一般护理不足以解决中风幸存者面临的复杂生理、认知和情感挑战。专业康复显着改善结果并帮助患者尽可能恢复独立性。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                在创世纪生命护理，我们的中风康复计划是围绕每个人的需求而设计的。我们的物理治疗师、职业治疗师和言语治疗师团队与护理人员合作，在所有五个中心提供全面、目标导向的康复计划。
              </p>
              <div className="flex flex-wrap gap-2">
                {['循证', '多学科', '目标导向', '以家庭为中心'].map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/services/therapy-exercise.jpg"
                alt="中风恢复的治疗运动"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/services/walking-training.jpg"
                alt="中风康复期间的行走训练"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">我们的方法</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">多学科康复之路</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                中风康复不是一刀切的过程。每位患者都有独特的需求、目标和康复轨迹。在创世纪生命护理，我们相信真正有效的康复来自多学科团队的综合方法——物理治疗师、职业治疗师、言语治疗师和护理人员共同工作。
              </p>
              <div className="space-y-4 mb-8">
                {[
                  '初始综合评估：确定功能损伤和康复潜力',
                  '个性化康复计划：根据具体目标和能力制定',
                  '频繁的监测和调整：每周评估进展',
                  '家庭参与和培训：支持居家恢复',
                  '进展跟踪：使用证据型工具监控改进',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/zh/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-full transition shadow-md hover:shadow-lg text-sm"
              >
                咨询我们的计划
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">全面护理</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">我们的中风康复包含内容</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">我们支持的条件</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">我们帮助的对象</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们的专业康复团队为各种与中风相关的条件和恢复需求提供定制计划。
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="bg-secondary/10 rounded-lg w-10 h-10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{c.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MULTIDISCIPLINARY REHABILITATION TEAM ─────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-50 to-white rounded-2xl p-8 lg:p-12 border border-primary/10 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-3 py-1 mb-5">
                  <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gold text-xs font-semibold">所有中心都配备</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5">
                  多学科康复团队<br className="hidden sm:block" /> 在我们的所有中心
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  创世纪生命护理的每个中心都配备了专业的多学科康复团队——物理治疗师、职业治疗师和言语治疗师共同提供协调的中风恢复计划。我们的专门建造的康复设施为有效恢复提供了理想的环境。
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  每个中心都配有专业康复设备和治疗空间，支持渐进式恢复。从配备完整的物理治疗健身房到职业治疗练习区域，我们的设施使患者能够在安全、支持的环境中重建技能。
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  中风康复患者的家人会收到定期的进度更新、实际操作培训课程以及关于支持居家持续恢复的指导——确保患者准备好返回家人时的无缝过渡。
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    '配备完整的物理治疗健身房',
                    '职业治疗练习厨房',
                    '言语治疗咨询室',
                    '水疗和移动辅助工具',
                    '进度跟踪技术',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/zh/our-locations"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-full transition shadow-md hover:shadow-lg text-sm"
                >
                  找到您最近的中心
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div>
                <img
                  src="/images/services/stroke-bed.jpg"
                  alt="中风康复的专业Bobath床"
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAMILY SUPPORT ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">家庭支持</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">支持整个家庭</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                中风恢复是一个影响整个家庭的旅程。在创世纪生命护理，我们相信涉及和支持家庭对于获得最佳康复效果至关重要。我们的团队提供全面支持，帮助家人理解、参与和在我们的中心之外继续康复过程。
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: '定期进度更新',
                    desc: '定期接收关于您亲人康复里程碑、治疗结果和康复计划任何变化的更新。',
                  },
                  {
                    title: '家庭培训课程',
                    desc: '实际操作培训涵盖运动、转移技术和日常护理技能，以便您可以自信地支持居家恢复。',
                  },
                  {
                    title: '情感支持和咨询',
                    desc: '为正在应对中风康复情感挑战的家庭成员提供咨询和同伴支持。',
                  },
                  {
                    title: '家庭改造指导',
                    desc: '关于调整家庭环境以支持中风幸存者安全和独立的实用建议。',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-secondary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/services/hand-training.jpg"
                alt="中风恢复的手部训练治疗"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── AVAILABLE AT ALL CENTRES ──────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">我们的地点</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">遍布马来西亚的中风康复</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              创世纪生命护理的所有五个中心都提供全面的中风康复计划。
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {centres.map((c, i) => (
              <Link key={i} href={`/zh/${c.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={`创世纪生命护理 ${c.name}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-bold text-gray-900 text-sm">{c.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{'\u2605'} {c.rating}</p>
                  <p className="text-xs text-secondary font-medium mt-1">{c.tag}</p>
                  <p className="text-xs text-primary font-semibold mt-2 group-hover:underline">查看中心 {'\u2192'}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/zh/our-locations" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
              查看所有地点
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">常见问题</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">常见问题</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 py-6 last:border-b-0">
                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="bg-primary/10 text-primary rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-10">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-r from-primary via-primary-800 to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>
            开始您的康复之旅<br className="hidden sm:block" /> 今天
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            与我们的康复团队预约免费咨询。访问我们的任何中心，
            与治疗师见面，了解我们的中风恢复计划——无需义务。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/zh/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              预约免费咨询
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+60123210457"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              致电 +6012-321-0457
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
