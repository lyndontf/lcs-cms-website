import { Metadata } from 'next';
import Link from 'next/link';
import { centres, getOtherCentres } from '@/data/centres';

export const metadata: Metadata = {
  title: '加影失智症护理 - Genesis Life Care',
  description:
    '加影专业失智症护理。心理学家主导的记忆护理计划、认知刺激、安全环境和个性化护理计划。评分 4.7★。在 Genesis Life Care 加影预约免费参观。',
  openGraph: {
    title: '加影失智症护理 - Genesis Life Care',
    description:
      '加影专业失智症和记忆护理。心理学家主导的计划、24/7 护理、安全可靠的环境。预约免费参观。',
    images: [{ url: '/images/kajang-centre.jpeg', width: 1200, height: 630, alt: 'Genesis Life Care 加影 — 失智症护理中心' }],
  },
};

export const revalidate = 60;

const centre = {
  name: 'Kajang',
  fullName: 'Genesis Life Care 加影',
  slug: 'nursing-home-kajang',
  phone: '+6019 334 0457',
  phoneCTA: '+6019-334-0457',
  address: '41, Jalan Ria 1, Kawasan Perindustrian Ria, 43500 Kajang, Selangor',
  rating: '4.7',
  reviews: 32,
  beds: '120+',
  img: '/images/kajang-centre.jpeg',
};

const dementiaFeatures = [
  {
    title: '心理学家主导计划',
    desc: '由本中心心理学家设计和监督的结构化认知刺激疗法，帮助保持心智功能并减缓认知下降。',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: '安全可靠的环境',
    desc: '目的设计的空间配备跌倒预防措施、安全的场所和 24 小时监督，确保失智症患者的安全和舒适。',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: '日常活动与参与',
    desc: '艺术治疗、音乐课程、温和运动和社交活动，根据每位住户的能力和兴趣量身定制，促进身心健康。',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: '家庭支持与教育',
    desc: '照顾者培训、关于您亲人情况的定期更新，以及帮助家庭理解和共同应对失智症的指导。',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: '个性化护理计划',
    desc: '每位住户都会获得个性化的护理计划，根据其失智症阶段、个人历史、偏好和具体需求量身定制。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  },
];

const services = [
  {
    title: '老年护理',
    desc: '全天候专业护理，为每位住户制定个性化护理计划。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    link: '/zh/our-services',
    highlight: false,
  },
  {
    title: '失智症与记忆护理',
    desc: '由心理学家主导的失智症护理和结构化认知刺激活动。',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    link: '/zh/dementia-care',
    highlight: true,
  },
  {
    title: '中风康复',
    desc: '全面的物理和职业治疗，帮助中风患者恢复独立生活能力。',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    link: '/zh/stroke-rehabilitation-centre',
    highlight: false,
  },
  {
    title: '纾缓护理',
    desc: '以舒适、尊严和家庭支持为重点的人性化临终关怀。',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    link: '/zh/palliative-care-malaysia',
    highlight: false,
  },
  {
    title: '术后康复',
    desc: '手术后的短期康复 — 在专家护理下快速恢复。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    link: '/zh/post-op-care-malaysia',
    highlight: false,
  },
  {
    title: '老年日间护理',
    desc: '有社交活动、膳食和监督的日间护理计划。',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
    link: '/zh/senior-daycare',
    highlight: false,
  },
];

const faqs = [
  {
    q: 'Genesis Life Care 加影提供哪些失智症护理服务？',
    a: '我们的加影中心提供全面的失智症护理，包括心理学家主导的认知刺激疗法、结构化日常活动、艺术和音乐治疗、具有跌倒预防措施的安全环保，以及根据每位住户失智症阶段量身定制的个性化护理计划。',
  },
  {
    q: 'Genesis Life Care 如何对待加影的失智症护理？',
    a: 'Genesis Life Care 在我们的加影中心采用心理学家主导的失智症护理方法。我们的计划由合格的心理学家设计和监督，他们创建结构化的认知刺激活动。结合 24/7 护理和在地医生咨询，我们提供全面的失智症支持。',
  },
  {
    q: '我应该注意哪些早期失智症迹象？',
    a: '常见的早期警示迹象包括持久的记忆丧失影响日常生活、执行熟悉任务的困难、对时间或地点的困惑、语言或对话问题、频繁丢失物品、情绪或个性变化以及社交活动退缩。如果您注意到这些迹象，请咨询医生。',
  },
  {
    q: '加影中心对失智症患者是否安全？',
    a: '是的。我们的加影中心在设计时就考虑了失智症的安全性。我们有安全的场所防止走失、整个设施都有跌倒预防措施、经训练的护理人员进行 24 小时监督，以及安全的结构化环境，帮助住户感到安心和定向。',
  },
  {
    q: '在加影的失智症护理费用是多少？',
    a: 'Genesis Life Care 在我们的加影中心提供经济实惠的失智症护理费用。费用因所需护理水平和房间类型而异。请联系我们获取个性化报价 — 我们很高兴讨论适合您家庭需求和预算的选项。',
  },
  {
    q: 'Genesis Life Care 为加影附近的哪些地区提供失智症护理服务？',
    a: '我们的加影中心为吉隆坡谷南部的家庭提供服务，包括加影、万宜、三面城、色当、南部切拉斯和周围地区。我们位置便利，位于麦加里核心地带，靠近主要高速公路。',
  },
];

const centreData = centres['kajang'];
const otherCentres = getOtherCentres(centreData.name);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: 'Genesis Life Care 加影 — 失智症护理',
      description: '雪兰莪州加影专业失智症和记忆护理。',
      url: 'https://genesiscare.com.my/zh/dementia-care-in-kajang',
      telephone: '+60193340457',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '41, Jalan Ria 1, Kawasan Perindustrian Ria',
        addressLocality: 'Kajang',
        addressRegion: 'Selangor',
        postalCode: '43500',
        addressCountry: 'MY',
      },
      areaServed: [
        { '@type': 'City', name: 'Kajang' },
        { '@type': 'City', name: 'Bangi' },
        { '@type': 'City', name: 'Semenyih' },
      ],
      medicalSpecialty: 'Geriatric Medicine',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.7',
        reviewCount: '32',
        bestRating: '5',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function DementiaCareKajangZh() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gold text-gray-900 text-xs font-bold tracking-wide px-3 py-1 rounded-full uppercase">失智症护理</span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ color: 'white' }}>★ {centre.rating} Google Rating</span>
              </div>

              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'white' }}>加影失智症护理</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5" style={{ color: 'white' }}>
                加影失智症<br />护理服务
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl" style={{ color: 'white' }}>
                Genesis Life Care 加影提供专业失智症和记忆护理，
                采用心理学家主导的计划、24/7 护理监督和安全、结构化的环境 —
                服务于加影、万宜、三面城和周围地区的家庭。
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-400 transition-colors text-sm whitespace-nowrap">
                  预约免费参观
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <a href={`tel:${centre.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm whitespace-nowrap">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  致电 {centre.phoneCTA}
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img src={centre.img} alt="Genesis Life Care 加影 — 失智症护理中心" className="w-full h-[420px] object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">麦加里核心</p>
                  <p className="text-xs text-gray-500">加影，雪兰莪州</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {centreData.highlights.map((h, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-primary">{h.value}</p>
                <p className="text-sm font-semibold text-gray-700 mt-1">{h.label}</p>
                <p className="text-xs text-gray-400">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT DEMENTIA CARE ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">加影失智症护理</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              理解失智症与专业护理的重要性
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                失智症是一种进行性疾病，影响记忆、思维和执行日常活动的能力。随着马来西亚人口老龄化，
                越来越多的加影、万宜、三面城和吉隆坡谷南部的家庭正在为他们的亲人寻求专业失智症护理。
              </p>
              <p>
                早期警示迹象包括持久的记忆丧失、熟悉任务的困难、对时间或地点的困惑、情绪和个性变化，以及社交活动退缩。
                当这些迹象出现时，专业的失智症护理可以显著改善生活质量。
              </p>
              <p>
                在 Genesis Life Care 加影，我们的失智症护理方法由合格的心理学家主导，他们设计结构化的认知刺激计划。
                结合 24 小时护理、在地医生咨询和安全环境，我们帮助住户尽可能长时间地保持尊严和生活质量。
                了解更多关于我们的{' '}
                <Link href="/zh/dementia-care" className="text-primary font-semibold hover:underline">
                  失智症护理方法
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEMENTIA CARE APPROACH ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">我们的方法</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">我们的失智症护理方法</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">在我们加影中心采用全面的、心理学家主导的失智症护理方法。</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dementiaFeatures.map((feat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feat.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">我们的服务</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">我们加影中心的所有服务</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">除了失智症护理，我们还提供全范围的老年护理服务。</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link key={i} href={svc.link} className={`bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-all group ${svc.highlight ? 'border-2 shadow-md' : 'border-gray-100 hover:border-primary/20'}`}
                style={svc.highlight ? { borderColor: '#229CD0' } : undefined}>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={svc.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4">
                  了解更多 <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITY GALLERY ──────────────────────────────────────────– */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">设施</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">我们的设施</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">看看里面的情况</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centreData.facilityImages?.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm border border-gray-100 h-64">
                <img src={img.src} alt={img.alt || `设施 ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            )) || null}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────– */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">评价</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">家属心声</h2>
            <p className="text-gray-500 mt-3">★ {centreData.rating} 评分 ({centreData.reviews} 评价)</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {centreData.testimonials?.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-sm">{t.author}</p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className={`w-3.5 h-3.5 ${j < Math.floor(parseFloat(centre.rating)) ? 'text-gold' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{t.text}</p>
              </div>
            )) || null}
          </div>
        </div>
      </section>

      {/* ── CENTRE INFO ────────────────────────────────────────────────– */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">本中心</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">访问我们的加影中心</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">为吉隆坡谷南部提供服务 — 加影专业失智症护理。</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img src={centre.img} alt={centre.fullName} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gold text-gray-900 text-xs font-bold px-3 py-1 rounded-full">南部KV</span>
                  <span className="text-gold text-sm font-semibold">★ {centre.rating}</span>
                  <span className="text-gray-400 text-xs">({centre.reviews} 评价)</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{centre.fullName}</h3>
                <p className="text-sm text-gray-500 mb-4">{centre.address}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-extrabold text-primary">{centre.beds}</p>
                    <p className="text-xs text-gray-500">床位数</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-extrabold text-primary">24/7</p>
                    <p className="text-xs text-gray-500">护理服务</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-3 rounded-lg hover:bg-primary-600 transition-colors text-sm">
                    预约免费参观 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href={`/${centre.slug}`} className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-5 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    查看中心详情
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION CONTACT ──────────────────────────────────────────– */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">位置与联系</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">地址</h3>
                  <p className="text-gray-600 text-sm">{centre.address}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">电话</h3>
                  <a href={`tel:${centre.phone.replace(/\s/g, '')}`} className="text-primary font-semibold hover:underline text-sm">
                    {centre.phone}
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">营业时间</h3>
                  <p className="text-gray-600 text-sm">24/7 全天候</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">电邮</h3>
                  <a href="mailto:info@genesiscare.com.my" className="text-primary font-semibold hover:underline text-sm">
                    info@genesiscare.com.my
                  </a>
                </div>
              </div>
              <div className="space-y-3">
                <Link href="/zh/contact" className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors text-sm">
                  预约免费参观
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <a href={`https://wa.me/6012321045`} className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-white font-bold px-6 py-3 rounded-lg hover:bg-secondary-700 transition-colors text-sm">
                  WhatsApp 联系我们
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">常见问题</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">关于加影失智症护理的常见问题。</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-base font-semibold text-gray-900 pr-4">{faq.q}</h3>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER CENTRES ────────────────────────────────────────────– */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">探索</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">其他中心</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">查看我们其他位置的失智症护理服务。</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {otherCentres?.map((c, i) => (
              <Link key={i} href={`/zh/${c.slug.replace('/nursing-home', '/dementia-care')}`} className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  {c.img && <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition" />}
                </div>
                <div className="p-3 text-center">
                  <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                  <p className="text-xs text-gray-500 mt-1">查看中心 →</p>
                </div>
              </Link>
            )) || null}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-r from-primary via-primary-800 to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">加影专业失智症护理</h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto" style={{ color: 'white' }}>
            访问我们的加影中心进行免费参观。查看我们的失智症护理空间、
            与心理学家和护理团队见面，了解我们如何支持失智症患者的家庭。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-4 rounded-xl hover:bg-yellow-400 transition-colors whitespace-nowrap">
              预约免费参观 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a href={`tel:${centre.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-4 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              致电 {centre.phoneCTA}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
