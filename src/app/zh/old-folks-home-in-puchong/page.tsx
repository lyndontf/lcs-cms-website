import { Fragment } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import FaqSection from '../../../components/sections/FaqSection';
import FinalCtaSection from '../../../components/sections/FinalCtaSection';
import GlcHireSection from '../../../components/sections/GlcHireSection';
import CostCalculatorSection from '../../../components/sections/CostCalculatorSection';
import HeroEnquiryForm from '@/components/HeroEnquiryForm';

export const metadata: Metadata = {
  title: '蒲种老人院 - Genesis Life Care Puchong',
  description:
    '蒲种现代化老人院，Bandar Puteri。24/7专业护理、康复治疗、失智症护理和营养餐食。价格合理，谷歌评分4.8。立即参观！',
};

export const revalidate = 60;

/* ─── Centre-specific data ───────────────────────────────────────────── */

const centre = {
  name: 'Puchong',
  fullName: 'Genesis Life Care Puchong',
  phone: '+6019 759 0457',
  phoneCTA: '+6019-759-0457',
  address: '16, Jln TPP 1/1, Taman Perindustrian Puchong, 47100 Puchong, Selangor',
  rating: '4.8',
  reviews: 38,
  established: '2022',
  beds: '120+',
  heroImg: '/images/puchong-centre.jpeg',
  nursingHomeSlug: '/zh/nursing-home-in-puchong',
  lat: 3.0245,
  lng: 101.6175,
};

const highlights = [
  { label: '服务年限', value: '3+', sub: '自2022年' },
  { label: '居民容量', value: '120+', sub: '舒适的床位' },
  { label: '谷歌评分', value: '4.8 \u2605', sub: '38 条评价' },
  { label: '护理团队', value: '24/7', sub: '全天候' },
];

const dailyLife = [
  {
    title: '个性化日常计划',
    desc: '每位居民都有根据他们的喜好、能力和医疗需求量身定制的日程安排\u2014\u2014从起床到就寝。',
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
  { title: '探访政策', desc: '我们鼓励家属参与，灵活的探访时间和舒适的空间可供共同享受高质量的时间。' },
  { title: '位置与便利性', desc: '我们位于Bandar Puteri的蒲种中心通过LDP快速公路和ELITE高速公路轻松到达，设有充足的停车位，方便家人定期探访。' },
  { title: '可用的专科护理', desc: '除了基本护理，我们提供失智症计划、中风康复、临终关怀和术后康复。' },
];

const faqs = [
  {
    q: '蒲种老人院费用是多少？',
    a: '蒲种Genesis Life Care的费用根据护理级别和房间类型而异。我们Bandar Puteri的价格具有竞争力。请联系我们获取根据您亲人需求定制的报价。',
  },
  {
    q: '老人院和护理院有什么区别?',
    a: '在马来西亚，“老人院”和“护理院”经常互换使用。在Genesis Life Care，我们在温馨的家庭化环境中提供专业护理——两者兼得。我们的居民享受24/7医疗支持，同时享受日常活动和社交参与。',
  },
  {
    q: 'Genesis Life Care蒲种价格实惠吗？',
    a: '是的。我们在所有中心提供具有竞争力和透明的费率。我们的团队与每个家族合作，推荐适合其需求和预算的护理计划。联系我们获取个性化报价。',
  },
  {
    q: '蒲种老人院的探访时间是什么？',
    a: '我们保持灵活的探访时间以鼓励家人参与。一般探访时间为每天上午10点至下午6点。特殊情况可安排其他时间探访。',
  },
];

const otherHomes = [
  { name: 'Petaling Jaya', slug: 'old-folks-home-in-petaling-jaya', rating: '4.9', tag: '旗舰中心', img: '/images/pj-centre.jpg' },
  { name: 'Klang', slug: 'old-folks-home-in-klang', rating: '4.8', tag: '创始中心', img: '/images/klang-centre.jpg' },
  { name: 'Kajang', slug: 'old-folks-home-in-kajang', rating: '4.7', tag: '南巴生谷', img: '/images/kajang-centre.jpeg' },
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
            '@id': 'https://genesiscare.com.my/zh/old-folks-home-in-puchong',
            name: centre.fullName,
            description: '蒲种现代化老人院，Bandar Puteri，提供24/7专业护理、康复治疗和失智症护理服务。',
            url: 'https://genesiscare.com.my/zh/old-folks-home-in-puchong',
            telephone: centre.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: '16, Jln TPP 1/1, Taman Perindustrian Puchong',
              addressLocality: 'Puchong',
              addressRegion: 'Selangor',
              postalCode: '47100',
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
      <section className="hero-dark relative overflow-hidden">
        <img src="/images/general/hero-main.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary/85 to-secondary/80" />
        <div className="absolute -top-[20%] -right-[10%] w-[55%] pb-[55%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[30%] -left-[5%] w-[40%] pb-[40%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">谷歌评分 {centre.rating} ★</span>
            </div>

            <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>{centre.name}老人院</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              最佳老人院<br className="hidden sm:block" /> in {centre.name}
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              一家现代化、专业建造的护理设施，让您的亲人获得有尊严和关爱的专业护理。我们位于Bandar Puteri的蒲种中心提供康复设施、营养餐食和全天候护理团队。</p>

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
            {/* ── Enquiry Form ── */}
            <div className="lg:col-span-2 hidden lg:block">
              <HeroEnquiryForm centreName="蒲种" pageUrl="/zh/old-folks-home-in-puchong" lang="zh" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8">
            {highlights.map((h, i) => (
              <Fragment key={i}>
                {i > 0 && <div className="hidden sm:block w-px h-12 bg-gray-200" />}
                <div className="text-center flex-1 min-w-[100px]">
                  <span className="block text-4xl sm:text-5xl font-extrabold text-gray-700 leading-none">{h.value}</span>
                  <span className="text-xs text-gray-500 mt-1 font-medium">{h.label}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">为什么选择蒲种</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                为什么选择我们的蒲种老人院？
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  位于Bandar Puteri，蒲种最成熟、最适合家庭的住宅区之一 住宅区之一，我们的现代化设施提供当代设施和专为老年人舒适设计的空间。Genesis Life Care Puchong是寻求便利位置高质量老年护理的家庭的理想选择。
                </p>
                <p>
                  我们蒲种老人院的与众不同之处在于全天候护理、现代化设施和真正关心居民福祉的团队的完美结合。</p>
                <p>
                  通过LDP快速公路和ELITE高速公路轻松到达，交通便利，方便家人探访。</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['现代化设施', '优质餐饮', 'LDP和ELITE高速公路', 'Bandar Puteri', '靠近医院'].map((t) => (
                  <span key={t} className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/services/common-area-scenic.jpg"
                alt="蒲种老人院的公共区域"
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
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">我们的家园生活</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">日常生活是什么样的</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              我们老人院的每一天都旨在让居民感到舒适、有意义和安全。从早晨的锻炼到营养餐食，每个细节都经过精心设计。</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">一站式专业护理</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              除了日常护理，我们在蒲种的老人院提供全面的专业服务，由训练有素的护理人员提供。</p>
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
          <div className="mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">实用指南</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              如何选择合适的老人院
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              选择老人院是一个重大决定。以下是一个简单的清单，帮助您了解需要注意的事项：</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
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
      </section>

      {/* ── ADMISSION PROCESS ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">开始入住</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">简单的入住流程</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              入住我们的老人院非常简单。我们将在每一步为您提供指导。</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: '联系我们', desc: '致电我们或填写在线表格。我们的护理顾问将回答您的问题并安排方便的访问时间。' },
              { step: '2', title: '免费评估与参观', desc: '访问我们的蒲种中心，与护理团队见面，我们将免费评估您亲人的需求。' },
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
      <FaqSection faqs={faqs} />

      {/* ── OTHER LOCATIONS ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">更多地点</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">参观我们的其他老人院</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherHomes.map((home) => (
              <Link key={home.slug} href={`/${home.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={home.img} alt={`老人院在${home.name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
            <Link href={centre.nursingHomeSlug} className="text-primary font-semibold text-sm hover:underline">
              查看{centre.name}的完整详情 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── COST CALCULATOR ───────────────────────────────────────────── */}
      <CostCalculatorSection />

      {/* ── GLC HIRE SECTION ──────────────────────────────────────────── */}
      <GlcHireSection />

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <FinalCtaSection
        heading="准备好迈出下一步了吗？"
        description="今天就联系我们进行免费咨询。我们的护理顾问每周与数十个家庭交流，可以帮助您找到完美的护理方案。"
        primaryLabel="预约参观"
        primaryHref="/zh/contact"
        phone="+6012-321 0457"
      />
    </main>
  );
}
