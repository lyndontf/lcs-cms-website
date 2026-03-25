import { Metadata } from 'next';
import Link from 'next/link';
import { centres, getOtherCentres } from '@/data/centres';
import AtAGlance from '@/components/sections/AtAGlance';
import FacilityGallery from '@/components/sections/FacilityGallery';
import Testimonials from '@/components/sections/Testimonials';
import LocationContact from '@/components/sections/LocationContact';
import OtherCentres from '@/components/sections/OtherCentres';

export const metadata: Metadata = {
  title: '柔佛巴鲁中风康复 | 创世纪生命护理',
  description:
    '柔佛巴鲁专业中风康复。物理治疗、职业治疗和言语治疗。创世纪生命护理柔佛巴鲁中心的个性化康复计划。评分4.7★。预约免费咨询。',
  openGraph: {
    title: '柔佛巴鲁中风康复 - 创世纪生命护理',
    description:
      '柔佛巴鲁全面的中风康复。物理治疗、职业治疗、言语治疗和个性化康复计划。访问我们的柔佛巴鲁中心。',
    images: [{ url: '/images/jb-centre.jpeg', width: 1200, height: 630, alt: '创世纪生命护理柔佛巴鲁' }],
  },
};

export const revalidate = 60;

/* ─── Centre data ──────────────────────────────────────────── */

const centre = {
  name: '柔佛巴鲁',
  fullName: '创世纪生命护理柔佛巴鲁',
  slug: 'nursing-home-in-johor-bahru',
  phone: '+6019 282 0457',
  phoneCTA: '+6019-282-0457',
  address: 'Level 6, Holiday Plaza Tower, Jalan Dato Sulaiman, Taman Century, 80250 Johor Bahru, Johor Darul Ta’zim',
  rating: '4.8',
  reviews: 40,
  beds: '120+',
  img: '/images/jb-centre.jpeg',
};

const services = [
  {
    title: '老年护理',
    desc: '全天候专业护理，为每位住户提供个性化护理计划。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    link: '/zh/our-services',
    highlight: false,
  },
  {
    title: '失智症与记忆护理',
    desc: '心理学家主导的失智症护理，配合结构化认知刺激活动。',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    link: '/zh/dementia-care',
    highlight: false,
  },
  {
    title: '中风康复',
    desc: '全面的物理治疗和职业治疗，帮助中风幸存者恢复独立能力。',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    link: '/zh/stroke-rehabilitation-centre',
    highlight: true,
  },
  {
    title: '临终关怀',
    desc: '同情的临终关怀，关注舒适、尊严和家庭支持。',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    link: '/zh/palliative-care-malaysia',
    highlight: false,
  },
  {
    title: '术后康复',
    desc: '手术后的短期康复——通过专业护理快速恢复。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    link: '/zh/post-op-care-malaysia',
    highlight: false,
  },
  {
    title: '老年日托',
    desc: '日托护理计划，包含社交活动、餐饮和老年人监督。',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
    link: '/zh/senior-daycare',
    highlight: false,
  },
];

const rehabFeatures = [
  {
    title: '物理治疗',
    desc: '针对性运动以恢复中风后的活动能力、力量和平衡。我们的物理治疗师为每位患者设计渐进式计划。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: '职业治疗',
    desc: '帮助中风幸存者重新学习日常活动，如穿衣、进食和个人卫生，恢复日常生活中的独立性。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: '言语治疗',
    desc: '专业治疗帮助患者恢复沟通技能、应对吞咽困难，重建言语互动的信心。',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    title: '个性化康复计划',
    desc: '每位中风患者都会获得个性化的康复计划，包含明确的里程碑，我们的护理团队定期审查和调整。',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: '家庭参与',
    desc: '我们提供护理人员培训、定期进度更新和家庭咨询，确保在中心外的支持环境进行恢复。',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
];

const faqs = [
  {
    q: '柔佛巴鲁有哪些中风康复服务？',
    a: '创世纪生命护理柔佛巴鲁中心提供全面的中风康复，包括物理治疗、职业治疗和言语治疗。我们的多学科团队为中风幸存者设计个性化的康复计划，帮助他们恢复活动能力、独立性和沟通技能。',
  },
  {
    q: '中风后应该多快开始康复？',
    a: '中风后应尽快开始康复，通常在医学稳定后24至48小时内。早期康复已被证明能显著改善恢复效果。我们的团队与柔佛巴鲁和万谷地区的医院紧密合作，确保无缝转入我们的康复计划。',
  },
  {
    q: '柔佛巴鲁创世纪生命护理的中风康复需要多长时间？',
    a: '中风康复的时间长度取决于中风的严重程度和个人康复进展。有些患者在数周内会看到明显改善，而其他患者可能需要数个月的治疗。我们为每位患者设定个性化的里程碑，并定期重新评估计划。',
  },
  {
    q: '柔佛巴鲁创世纪生命护理是否提供中风患者的言语治疗？',
    a: '是的，我们的柔佛巴鲁中心提供言语和语言治疗，作为中风康复计划的一部分。这包括治疗失语症等沟通困难，以及吞咽困难患者的吞咽治疗。',
  },
  {
    q: '柔佛巴鲁的中风康复费用是多少？',
    a: '中风康复的费用因所需的治疗强度和时间长度而异。创世纪生命护理提供具有竞争力和透明的定价。请联系我们获取个性化报价——我们很乐意讨论适合您家庭预算和保险覆盖的选项。',
  },
  {
    q: '家庭成员可以参与中风恢复过程吗？',
    a: '当然可以。家庭参与是我们中风康复方法的关键部分。我们提供护理人员培训课程、定期进度更新和家庭咨询，帮助您在我们的中心停留期间和之后支持您亲人的康复之旅。',
  },
];

const sharedCentre = centres['kajang'];
const otherCentres = getOtherCentres(sharedCentre.name);

/* ─── JSON-LD Structured Data ─────────────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: '创世纪生命护理柔佛巴鲁',
      description: '柔佛巴鲁专业中风康复中心，提供物理治疗、职业治疗和言语治疗，支持中风恢复。',
      image: centre.img,
      telephone: centre.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: centre.address,
        addressLocality: '柔佛巴鲁',
        addressRegion: '雪兰莪州',
        postalCode: '43000',
        addressCountry: 'MY',
      },
      areaServed: {
        '@type': 'Place',
        name: '柔佛巴鲁及周边地区',
      },
      ratingValue: centre.rating,
      ratingCount: centre.reviews,
      url: 'https://genesiscare.com.my',
      sameAs: ['https://google.com/search?q=Genesis+Life+Care'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
};

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function StrokeRehabilitationJohorBahruZh() {
  return (
    <main className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div { color: inherit; }
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div,
        .hero-dark .text-4xl, .hero-dark .text-5xl, .hero-dark .sm\:text-5xl,
        .hero-dark .text-3xl, .hero-dark .text-lg, .hero-dark .text-sm,
        .hero-dark .text-white { color: #ffffff !important; }
        .hero-dark .text-gray-900 { color: rgb(17 24 39) !important; }
        .hero-dark .text-gray-800 { color: rgb(31 41 55) !important; }
        .hero-dark .text-gold { color: #FAB515 !important; }
      ` }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">柔佛巴鲁中风康复</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                柔佛巴鲁中风康复中心
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                创世纪生命护理柔佛巴鲁中心提供全面的物理治疗、职业治疗和言语治疗。专业的多学科团队为您亲人的中风恢复提供支持。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/zh/contact"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-full transition shadow-lg whitespace-nowrap"
                >
                  预约免费咨询
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="tel:+60192820457"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-full transition whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  致电 +6019-282-0457
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src={centre.img}
                alt="创世纪生命护理柔佛巴鲁中心"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT THIS CENTRE ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">关于本中心</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">柔佛巴鲁中风康复中心</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                中风是一种医学突发事件，需要立即干预和快速的康复支持。在创世纪生命护理柔佛巴鲁中心，我们从第一天就开始帮助中风患者走上恢复之路。在柔佛巴鲁及南部柔佛地区，创世纪生命护理为每位患者提供一个结构化的中风康复计划，以最大化恢复潜力。
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们的多学科方法汇集了物理治疗以恢复力量和协调、职业治疗以帮助患者在日常活动中恢复信心，以及言语治疗为那些受沟通或吞咽困难影响的患者提供服务。每位患者都会获得个性化的恢复计划，其中有明确的里程碑由我们的护理团队定期审查。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                我们的柔佛巴鲁中心服务来自柔佛巴鲁、伊斯干达沛城及周边地区的家人。拥有{centre.beds}张床位和全天候护理，我们为中风恢复提供舒适和支持的环境。创世纪生命护理柔佛巴鲁在谷歌上评分{centre.rating}星，拥有{centre.reviews}条来自信任我们照顾其亲人的家人的评价。
              </p>
            </div>
            <div>
              <img
                src="/images/services/kajang-stroke.jpg"
                alt="柔佛巴鲁中风康复"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STROKE REHABILITATION PROGRAMME ─────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">我们的计划</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              我们的中风康复计划
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              柔佛巴鲁中心全面的多学科中风恢复方法。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rehabFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              柔佛巴鲁中心的护理服务
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              面向老年人的全面护理服务，包含专业中风康复。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link
                key={i}
                href={svc.link}
                className={\`bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-all group \${
                  svc.highlight
                    ? 'border-2 shadow-md'
                    : 'border-gray-100 hover:border-primary/20'
                }\`}
                style={svc.highlight ? { borderColor: '#229CD0' } : undefined}>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={svc.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4">
                  了解更多
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FacilityGallery images={sharedCentre.facilityImages} centreName={sharedCentre.name} />

      <Testimonials testimonials={sharedCentre.testimonials} rating={sharedCentre.rating} reviews={String(sharedCentre.reviews)} />

      {/* ── CENTRE INFO ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">我们的中心</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              访问我们的柔佛巴鲁中心
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              为南部地区地区提供专业的中风康复设施。
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src={centre.img}
                  alt={centre.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gold text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    南部地区
                  </span>
                  <span className="text-gold text-sm font-semibold">★ {centre.rating}</span>
                  <span className="text-gray-400 text-xs">({centre.reviews} 条评价)</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{centre.fullName}</h3>
                <p className="text-sm text-gray-500 mb-4">{centre.address}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-extrabold text-primary">{centre.beds}</p>
                    <p className="text-xs text-gray-500">床位容量</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-extrabold text-primary">24/7</p>
                    <p className="text-xs text-gray-500">护理服务</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/zh/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-3 rounded-lg hover:bg-primary-600 transition-colors text-sm"
                  >
                    预约免费咨询
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/zh/nursing-home-kajang"
                    className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-5 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    查看中心详情
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationContact centre={sharedCentre} />

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">常见问题</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              常见问题
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              关于柔佛巴鲁中风康复的常见问题。
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-base font-semibold text-gray-900 pr-4">{faq.q}</h3>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <OtherCentres centres={otherCentres} currentCentreName={sharedCentre.name} />

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-r from-primary via-primary-800 to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            在柔佛巴鲁开始您的中风康复之旅
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto" style={{ color: 'white' }}>
            访问我们的柔佛巴鲁中心进行免费咨询。与我们的康复团队见面
            并了解我们如何帮助您亲人从中风中恢复。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/zh/contact"
              className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-4 rounded-xl hover:bg-yellow-400 transition-colors whitespace-nowrap"
            >
              预约免费咨询
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href={`tel:${centre.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-4 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              致电 {centre.phoneCTA}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
