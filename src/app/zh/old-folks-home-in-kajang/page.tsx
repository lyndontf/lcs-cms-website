import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '加影老人院 - Genesis Life Care Kajang',
  description:
    'Genesis Life Care 加影老人院 — 全天候24小时专业护理、营养膳食、失智症护理和康复服务。服务巴生谷南部地区。收费合理透明。谷歌评分4.7\u2605。',
};

export const revalidate = 60;

/* ─── Centre-specific data ───────────────────────────────────────────── */

const centre = {
  name: 'Kajang',
  fullName: 'Genesis Life Care Kajang',
  phone: '+6019 334 0457',
  phoneCTA: '+6019-334-0457',
  address: 'Jalan Bukit, Taman Kajang Baru, 43000 Kajang, Selangor',
  rating: '4.7',
  reviews: 32,
  established: '2021',
  beds: '120+',
  heroImg: '/images/kajang-centre.jpeg',
  nursingHomeSlug: '/nursing-home-kajang',
  lat: 2.9927,
  lng: 101.7897,
};

const highlights = [
  { label: '服务年限', value: '4+', sub: '自2021年' },
  { label: '居民容量', value: '120+', sub: '舒适的床位' },
  { label: '谷歌评分', value: '4.7 \u2605', sub: '32 条评价' },
  { label: '收费合理', value: '\u2713', sub: '所有中心' },
  { label: '护理团队', value: '24/7', sub: '全天候' },
];

const dailyLife = [
  {
    title: '个性化日常计划',
    desc: '每位住客都遵循个性化的日程安排，围绕其偏好、能力和医疗需求量身定制 — 从起床到就寝。',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: '营养膳食与点心',
    desc: '新鲜制备的营养膳食、膳食调整和全天点心。我们的厨房满足医疗和个人需求。',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
  },
  {
    title: '活动与社交',
    desc: '集体活动、温和的运动课程、艺术和手工艺、音乐治疗和节日庆祝活动，使生活充满乐趣和欢乐。',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: '家属探访与外出',
    desc: '舒适的探访区域，供家属花费高质量时间。我们全年组织有监督的外出和家庭活动。',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: '健康监测与检查',
    desc: '定期生命体征检查、药物管理、医生咨询和健康评估，确保您的亲人健康。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: '安全舒适的环境',
    desc: '轮椅友好的空间、扶手、防滑地板、空调房间和24小时安保，让您完全放心。',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
];

const careServices = [
  { title: '老年护理', link: '/zh/our-services', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { title: '失智症与记忆护理', link: '/zh/dementia-care', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { title: '中风康复', link: '/zh/stroke-rehabilitation-centre', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: '临终关怀', link: '/zh/palliative-care-malaysia', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: '术后康复', link: '/zh/post-op-care-malaysia', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
];

const checklist = [
  { title: '透明定价', desc: 'Genesis Life Care提供有竞争力和透明的定价，无隐藏成本。我们与家属合作，找到适合其预算的护理计划。' },
  { title: '合格的护理人员', desc: '我们的团队包括训练有素的护士、物理治疗师、心理学家和经验丰富的护理人员，全天候可用。' },
  { title: '清洁卫生', desc: '我们遵守严格的卫生标准，定期深度清洁、感染控制协议和设施维护良好。' },
  { title: '膳食质量与选择', desc: '新鲜制备的营养膳食、医疗条件的膳食调整和多样菜单。' },
  { title: '探访政策', desc: '我们鼓励家属参与，灵活的探访时间和舒适的空间可供共同享受高质量的时间。' },
  { title: '位置与便利性', desc: '我们的加影中心交通便利，可通过SILK高速公路、PLUS高速公路和加影捷运站轻松抵达，访客停车位充足。' },
  { title: '可用的专科护理', desc: '除了基本护理，我们提供失智症计划、中风康复、临终关怀和术后康复。' },
];

const faqs = [
  {
    q: '加影老人院的费用是多少？',
    a: 'Genesis Life Care加影的费用取决于所需的护理级别和房间类型。我们提供具有竞争力的费率，基本护理每月约RM 2,500起。请联系我们，根据您亲人的需求获取个性化报价。',
  },
  {
    q: '老人院和护理院有什么区别？',
    a: '在马来西亚，"老人院"和"护理院"经常互换使用。在Genesis Life Care，我们提供专业的护理服务以及温馨如家的环境 — 两者兼备。我们的住客享有全天候医疗支持，同时参与日常活动和社交互动。',
  },
  {
    q: 'Genesis Life Care加影的费用合理吗？',
    a: '是的。我们在所有中心提供具有竞争力和透明的费率。我们的团队与每个家族合作，推荐适合其需求和预算的护理计划。联系我们获取个性化报价。',
  },
  {
    q: '我的父母可以带个人物品吗？',
    a: '当然可以。我们鼓励住客携带个人物品，如照片、喜欢的毯子和熟悉的小物件。拥有熟悉的物品有助于住客感到更有家的感觉，对记忆障碍患者尤其有益。',
  },
  {
    q: '加影老人院的探访时间是什么？',
    a: '我们保持灵活的探访时间，鼓励家属参与。一般探访时间为每天上午10点至下午6点。如需在其他时间探访，可与我们的护理团队协商安排。',
  },
];

const otherHomes = [
  { name: 'Petaling Jaya', slug: 'old-folks-home-in-petaling-jaya', rating: '4.9', tag: '旗舰中心', img: '/images/pj-centre.jpg' },
  { name: 'Klang', slug: 'old-folks-home-in-klang', rating: '4.8', tag: '创始中心', img: '/images/klang-centre.jpg' },
  { name: 'Puchong', slug: 'old-folks-home-in-puchong', rating: '4.8', tag: '现代化设施', img: '/images/puchong-centre.jpeg' },
  { name: 'Johor Bahru', slug: 'old-folks-home-in-johor-bahru', rating: '4.8', tag: '南部地区', img: '/images/jb-centre.jpeg' },
];

/* ─── Page component ─────────────────────────────────────────────────── */

export default function OldFolksHomeZh() {
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

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://genesiscare.com.my/zh/old-folks-home-in-kajang',
            name: centre.fullName,
            description: 'Genesis Life Care 加影老人院 — 全天候24小时专业护理、营养膳食、失智症护理和康复服务。',
            url: 'https://genesiscare.com.my/zh/old-folks-home-in-kajang',
            telephone: centre.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Jalan Bukit, Taman Kajang Baru',
              addressLocality: 'Kajang',
              addressRegion: 'Selangor',
              postalCode: '43000',
              addressCountry: 'MY',
            },
            geo: { '@type': 'GeoCoordinates', latitude: centre.lat, longitude: centre.lng },
            aggregateRating: { '@type': 'AggregateRating', ratingValue: centre.rating, reviewCount: centre.reviews, bestRating: '5' },
            openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '09:00', closes: '18:00' },
            image: `https://genesiscare.com.my${centre.heroImg}`,
            priceRange: '$$',
          }),
        }}
      />

      {/* FAQPage JSON-LD */}
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
      <section className="hero-dark relative bg-gradient-to-br from-primary via-primary-400 to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">谷歌评分 {centre.rating} ★</span>
              </div>

              <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>加影老人院</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                加影最佳<br className="hidden sm:block" />老人护理中心
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                温馨如家的环境，让您的挚爱家人在这里获得有尊严和关爱的专业护理。
                我们的加影中心提供全天候24小时护理、自家厨房烹饪的营养膳食、失智症护理
                和康复设施，服务巴生谷南部地区。
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/zh/contact"
                  className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl"
                >
                  访问我们的家
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
                <a
                  href={`tel:${centre.phone.replace(/\s/g, '')}`}
                  className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  致电 {centre.phoneCTA}
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img src={centre.heroImg} alt={`${centre.fullName} — 加影老人院`} className="rounded-2xl shadow-2xl w-full object-cover" style={{ maxHeight: '420px' }} />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-800">收费合理</span>
                    <span className="block text-sm font-bold text-gray-900">透明定价</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {highlights.map((h) => (
              <div key={h.label}>
                <span className="block text-2xl sm:text-3xl font-extrabold text-primary">{h.value}</span>
                <span className="block text-sm font-semibold text-gray-900 mt-1">{h.label}</span>
                <span className="block text-xs text-gray-500">{h.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">为何选择加影</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                为什么选择我们的加影老人院？
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  为您的挚爱家人选择合适的老人院是一个家庭最重要的决定之一。位于巴生谷南部中心地带，
                  加影是一个适合家庭生活且不断发展的地区。我们位于Taman Kajang Baru Jalan Bukit的中心
                  坐落在安静的住宅区内 — 是老年护理的理想之地。
                </p>
                <p>
                  我们的加影老人院毗邻加影医院，方便家属管理医疗预约。中心可通过SILK高速公路、
                  PLUS高速公路和加影捷运站轻松抵达，确保来自加影、万宜、士毛月及周边地区的家属
                  无忧探访。
                </p>
                <p>
                  我们的加影老人院与众不同之处在于高度重视优质的自家膳食和个性化护理，
                  反映了加影社区的需求。结合全天候护理、失智症计划、康复服务和温馨如家的氛围，
                  我们提供家属可以信赖的全面老年护理。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['巴生谷南部', '毗邻加影医院', '优质餐饮', 'SILK高速公路', '捷运站可达'].map((t) => (
                  <span key={t} className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/services/common-area-scenic.jpg"
                alt="加影老人院公共区域"
                className="rounded-2xl shadow-lg w-full object-cover"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DAILY LIFE ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">院内生活</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">日常生活是怎样的</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              我们老人院的每一天都旨在让住客感到舒适、有意义和安全。以下是您的家人可以期待的日常生活。
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyLife.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARE SERVICES ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">我们的护理服务</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">一站式专科护理</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              除了日常护理，我们的加影老人院还提供全方位的专科服务。
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {careServices.map((svc) => (
              <Link key={svc.title} href={svc.link} className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} /></svg>
                </div>
                <div>
                  <span className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{svc.title}</span>
                  <span className="block text-xs text-primary font-semibold mt-0.5">了解更多 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHOOSING THE RIGHT HOME ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">实用指南</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                如何选择合适的老人院
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                选择老人院是一个重大决定。以下是需要关注的简单清单 — 以及Genesis Life Care如何达标。
              </p>
            </div>
            <div className="space-y-4">
              {checklist.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ADMISSION PROCESS ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">入住流程</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">简单的入住流程</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              入住我们的老人院流程简单明了。我们全程指导您的每一步。
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: '联系我们', desc: '致电我们或填写在线表格。我们的护理顾问将回答您的问题并安排方便的访问时间。' },
              { step: '2', title: '免费评估与参观', desc: '参观我们的加影中心，与护理团队见面，我们将免费评估您亲人的需求。' },
              { step: '3', title: '搬入', desc: '一旦您准备好，我们将准备个性化护理计划并帮助您的亲人舒适地安顿在新家中。' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-extrabold">{s.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/zh/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-bold px-6 py-3.5 rounded-full transition shadow-lg">
              预约参观
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQS ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">常见问题</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">常见问题解答</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER LOCATIONS ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">更多分院</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">参观我们的其他老人院</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherHomes.map((home) => (
              <Link key={home.slug} href={`/zh/${home.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={home.img} alt={`${home.name}老人院`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <span className="inline-block bg-primary-50 text-primary text-xs font-semibold px-2 py-0.5 rounded-full mb-2">{home.tag}</span>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors">{home.name}老人院</h3>
                  <span className="text-sm text-gray-500">评分 {home.rating} ★</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`/zh${centre.nursingHomeSlug}`} className="text-primary font-semibold text-sm hover:underline">
              查看{centre.name}中心完整详情 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-r from-primary via-primary-800 to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>
            参观我们的{centre.name}老人院
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            预约免费参观我们的加影中心。与团队见面，参观设施，了解我们是否是您亲人的理想之家。无任何义务。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/zh/contact"
              className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl"
            >
              预约参观
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a
              href={`tel:${centre.phone.replace(/\s/g, '')}`}
              className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-bold px-6 py-3.5 rounded-full transition"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              致电 {centre.phoneCTA}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
