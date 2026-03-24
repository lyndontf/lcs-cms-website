import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '马来西亚临终关怀 | Genesis Life Care',
  description:
    '马来西亚全国5家中心的同情临终关怀。专业疼痛管理、情感和精神支持、家庭咨询和尊严末期护理。预约免费咨询。',
};

export const revalidate = 60;

const highlights = [
  { label: '临终关怀中心', value: '5', sub: '全国' },
  { label: '疼痛管理', value: '✓', sub: '专业团队' },
  { label: '家庭支持', value: '✓', sub: '可提供咨询' },
  { label: '护理', value: '24/7', sub: '昼夜不间断' },
  { label: '收费合理', value: '✓', sub: '所有中心' },
];

const features = [
  {
    title: '专业疼痛与症状管理',
    desc: '全面的疼痛控制和症状缓解，确保舒适和整个护理过程的生活质量。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: '情感与心理支持',
    desc: '为应对严重疾病的居民提供咨询和情感支持，帮助维持尊严和心安。',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0114 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: '家庭咨询与指导',
    desc: '在困难时期为家庭提供指导、咨询和实际帮助。',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: '协调医疗护理',
    desc: '与医院、临终关怀机构和家庭医生密切合作，确保无缝、协调的护理。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: '精神与文化敏感护理',
    desc: '尊重每个居民和家庭的文化、精神和宗教需求。',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    title: '尊严护理环境',
    desc: '一个宁静、温暖、家庭式的环境，其中居民得到最尊重和同情的对待。',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  },
];

const benefits = [
  {
    name: '晚期癌症患者',
    desc: '为晚期或末期癌症患者提供全面的舒适护理和症状管理。',
  },
  {
    name: '终末期器官疾病',
    desc: '为需要以舒适为主的护理的晚期心脏、肺、肾或肝脏疾病患者提供支持。',
  },
  {
    name: '晚期神经系统疾病',
    desc: '为渐进性疾病患者提供护理，如晚期痴呆、运动神经元病或帕金森病。',
  },
  {
    name: '末期疾病',
    desc: '针对生活有限疾病患者的尊严护理，重点关注舒适和生活质量。',
  },
  {
    name: '治疗后恢复',
    desc: '为从积极治疗过渡到以舒适为主护理的患者提供支持性护理。',
  },
  {
    name: '虚弱老人',
    desc: '为患有多种疾病的老年患者提供整体护理，受益于以舒适为主的支持。',
  },
];

const centres = [
  { name: 'Petaling Jaya', slug: 'nursing-home-in-petaling-jaya', rating: '4.9', tag: '旗舰中心', img: '/images/pj-centre.jpg' },
  { name: 'Klang', slug: 'nursing-home-in-klang', rating: '4.8', tag: '原创中心', img: '/images/klang-centre.jpg' },
  { name: 'Kajang', slug: 'nursing-home-kajang', rating: '4.7', tag: '南部克城谷', img: '/images/kajang-centre.jpeg' },
  { name: 'Puchong', slug: 'nursing-home-in-puchong', rating: '4.8', tag: '现代设施', img: '/images/puchong-centre.jpeg' },
  { name: 'Johor Bahru', slug: 'nursing-home-in-johor-bahru', rating: '4.8', tag: '南部地区', img: '/images/jb-centre.jpeg' },
];

const faqs = [
  {
    q: '什么是临终关怀？',
    a: '临终关怀专注于为患有严重或生活有限疾病的患者提供舒适、生活质量和症状管理。它不限于末期护理，但可以在任何疾病阶段补充积极治疗。',
  },
  {
    q: '临终关怀应该何时开始？',
    a: '临终关怀可以在严重疾病的任何阶段开始，与积极治疗并行。早期引入通常会导致更好的生活质量和症状管理。',
  },
  {
    q: '临终关怀与临终护理相同吗？',
    a: '不完全是。临终护理是一种针对生命末期的临终关怀。临终关怀可以在疾病的任何阶段提供，可能包括康复以及舒适措施。',
  },
  {
    q: '家庭成员可以过夜吗？',
    a: '是的，我们为希望与亲人过夜的家庭成员提供便利。所有中心都提供私人房间选项。',
  },
  {
    q: '疼痛是如何管理的？',
    a: '我们的医疗团队使用全面的疼痛管理方法，包括药物、定位和辅助疗法。我们定期评估疼痛并调整治疗以确保最大舒适。',
  },
  {
    q: '所有中心都提供临终关怀吗？',
    a: '是的，所有五家Genesis Life Care中心都提供临终关怀，配备经过培训的护理人员、协调医疗支持和家庭咨询服务。',
  },
];

export default function PalliativeZh() {
  return (
    <main className="bg-white">
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

      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">同情护理</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                马来西亚<br className="hidden sm:block" />临终关怀
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                马来西亚5家中心的同情舒适护理。专业疼痛管理、情感和精神支持、家庭咨询和尊严护理在一个宁静、家庭式的环境中。
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

            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="/images/services/single-room.jpg"
                  alt="Genesis Life Care的舒适单人间进行临终关怀"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-primary text-white rounded-xl px-6 py-4 shadow-lg hidden sm:block">
                  <p className="text-3xl font-extrabold" style={{ color: 'white' }}>24/7</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>舒适护理</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">理解临终关怀</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">舒适、尊严和同情</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                临终关怀是为患有严重的、生活有限的疾病的人提供专业护理的方法。与常见的信念相反，
                它不限于末期护理 — 临终关怀可以在任何疾病阶段开始，与积极治疗一起工作，以改善生活质量。
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                临终关怀的重点是舒适、症状管理，并确保每个居民以最高可能的生活质量度过每一天。
                这包括专业疼痛控制、情感支持、精神护理和居民及其家庭的实际协助。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                在Genesis Life Care，我们的临终关怀计划由一支由护士、医疗专业人员和咨询师组成的专业团队提供，
                他们共同提供整体、同情的护理。我们与医院、临终关怀机构和家庭医生密切协调，
                以确保在每个阶段的无缝支持。
              </p>
              <div className="flex flex-wrap gap-2">
                {['以舒适为中心', '以家庭为中心', '尊严护理', '协调'].map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/services/common-area-scenic.jpg"
                alt="宁静的共用区，风景优美"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/services/nursing-station.jpg"
                alt="临终关怀专业护理站"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">我们的方法</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">身体、思想和精神的整体护理</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们的临终关怀方法不仅解决身体症状，还解决每个居民的情感、心理和精神需求。
                我们相信真正的舒适来自于照顾整个人 — 身体、思想和精神 — 在一个宁静和支持的环境中。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                疼痛管理是我们临终关怀计划的心脏。我们的医疗团队使用全面的、多学科的方法，
                包括药物管理、定位技术和辅助疗法。我们定期评估和重新评估，以确保每个居民始终尽可能舒适。
              </p>
              <div className="space-y-3 mb-8">
                {[
                  '全面的疼痛和症状评估',
                  '个性化舒适护理计划',
                  '定期家庭会议和更新',
                  '与医院和专家的协调',
                  '丧亲后对家庭的支持',
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

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">综合护理</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">我们的临终关怀包括什么</h2>
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

      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">我们支持的人</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">谁从临终关怀中受益</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们的同情团队为患有多种严重和生活有限疾病的居民提供以舒适为中心的护理。
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="bg-secondary/10 rounded-lg w-10 h-10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{b.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">我们的地点</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">马来西亚全国的临终关怀</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              所有五家Genesis Life Care中心都提供同情的临终关怀。
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {centres.map((c, i) => (
              <Link key={i} href={`/zh/${c.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={`Genesis Life Care ${c.name}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-bold text-gray-900 text-sm">{c.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">★ {c.rating}</p>
                  <p className="text-xs text-secondary font-medium mt-1">{c.tag}</p>
                  <p className="text-xs text-primary font-semibold mt-2 group-hover:underline">查看中心 →</p>
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

      <section className="hero-dark relative bg-gradient-to-r from-primary via-primary-800 to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>
            为您的亲人寻找同情的临终关怀
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            与我们的护理顾问预约免费咨询。访问我们的任何中心，见见团队，并了解我们的临终关怀计划 — 没有义务。
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
