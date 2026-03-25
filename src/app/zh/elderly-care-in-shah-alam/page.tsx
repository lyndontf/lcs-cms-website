import { Metadata } from 'next';
import Link from 'next/link';
import { centres, getOtherCentres } from '@/data/centres';
import AtAGlance from '@/components/sections/AtAGlance';

export const metadata: Metadata = {
  title: '沙亚南附近的老年护理 - Genesis Life Care',
  description:
    '在沙亚南附近寻找老年护理？Genesis Life Care 巴生分院距离沙亚南约 10 分钟路程 — 提供 24/7 护理、失智症护理、中风康复及驻诊医生。评分 4.8★。预约免费参观。',
  openGraph: {
    title: '沙亚南附近的老年护理 - Genesis Life Care 巴生',
    description:
      '专业老年护理服务，位于沙亚南附近。24/7 护理、失智症护理、中风康复。参观我们的巴生分院。',
    images: [{ url: '/images/klang-centre.jpg', width: 1200, height: 630, alt: 'Genesis Life Care 巴生' }],
  },
};

export const revalidate = 60;

/* ─── Nearest centre data ──────────────────────────────────────────── */

const nearestCentre = {
  name: 'Klang',
  fullName: 'Genesis Life Care Klang',
  slug: 'nursing-home-in-klang',
  phone: '+6012 321 0457',
  phoneCTA: '+6012-321-0457',
  address: 'No.3, Jalan Istana, Amverton Business Centre, 41000 Klang, Selangor',
  rating: '4.8',
  reviews: 45,
  beds: '120+',
  distance: '~10 分钟',
  img: '/images/klang-centre.jpg',
};

const centre = centres['klang'];
const otherCentres = getOtherCentres(centre.name);

const services = [
  {
    title: '老年护理',
    desc: '全天候专业护理，为每位住户提供个性化护理方案。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    link: '/zh/our-services',
  },
  {
    title: '失智症与记忆护理',
    desc: '由心理学家领导的失智症护理，结合结构化认知刺激活动。',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    link: '/zh/dementia-care',
  },
  {
    title: '中风康复',
    desc: '全面的物理和职业治疗，帮助中风患者恢复独立生活能力。',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    link: '/zh/stroke-rehabilitation-centre',
  },
  {
    title: '临终关怀',
    desc: '以舒适、尊严和家庭支持为重点的关怀性临终护理。',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    link: '/zh/palliative-care-malaysia',
  },
  {
    title: '术后康复',
    desc: '手术后的短期康复 — 在专家护理下重新站立。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    link: '/zh/post-op-care-malaysia',
  },
  {
    title: '老年日间护理',
    desc: '为老年人提供白天护理、社交活动、膳食和监督。',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
    link: '/zh/senior-daycare',
  },
];

const faqs = [
  {
    q: '沙亚南附近有养老院吗？',
    a: '有。Genesis Life Care 巴生分院位于巴生 Amverton 商务中心，距离沙亚南仅约 10 分钟路程（经美蕉高速公路 2 号线）。我们提供 24/7 护理、失智症护理和中风康复服务。',
  },
  {
    q: '沙亚南附近的老年护理需要多少费用？',
    a: 'Genesis Life Care 为专业老年护理提供经济实惠的费率。费用取决于护理级别和房间类型。请联系我们获取个性化报价 — 我们很乐意讨论适合您家庭预算的方案。',
  },
  {
    q: '沙亚南住户可以获得哪些服务？',
    a: '我们的巴生分院提供老年护理、失智症和记忆护理、中风康复、临终关怀、术后康复和老年日间护理。所有服务都包括驻诊医生咨询。',
  },
  {
    q: '我可以在做出承诺前参观沙亚南附近的养老院吗？',
    a: '当然可以。我们鼓励家庭在做出决定前预约免费参观我们的巴生设施。您可以查看生活空间、见面护理团队并提出任何问题 — 没有任何义务。',
  },
  {
    q: '如何从沙亚南前往 Genesis Life Care 巴生？',
    a: '我们的巴生分院可通过美蕉高速公路 2 号线（Jalan Klang-Shah Alam）从沙亚南轻松到达。驾车时间通常约 10 分钟。分院位于巴生 Jalan Istana 的 Amverton 商务中心。',
  },
  {
    q: 'Genesis Life Care 与沙亚南其他养老院有何不同？',
    a: 'Genesis Life Care 以驻诊医生、由心理学家领导的失智症护理、专业物理治疗团队和经济实惠的费率而著称。我们的巴生分院拥有 120 多张床位，Google 评分为 4.8 星，拥有来自满意家庭的正面评价。',
  },
];

/* ─── JSON-LD Structured Data ───────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: 'Genesis Life Care Klang',
      description: 'Professional elderly care and nursing home near Shah Alam, Klang.',
      url: 'https://genesiscare.com.my/zh/elderly-care-in-shah-alam',
      telephone: '+60123210457',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No.3, Jalan Istana, Amverton Business Centre',
        addressLocality: 'Klang',
        addressRegion: 'Selangor',
        postalCode: '41000',
        addressCountry: 'MY',
      },
      areaServed: [
        { '@type': 'City', name: 'Shah Alam' },
        { '@type': 'City', name: 'Klang' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '45',
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

/* ─── Page Component ────────────────────────────────────────────────── */

export default function ElderlyCareShahAlamZh() {
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
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gold text-gray-900 text-xs font-bold tracking-wide px-3 py-1 rounded-full uppercase">
                  沙亚南附近
                </span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ color: 'white' }}>
                  ★ {nearestCentre.rating} 谷歌评分
                </span>
              </div>

              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'white' }}>
                沙亚南附近的老年护理
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5" style={{ color: 'white' }}>
                专业老年护理<br />沙亚南附近
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl" style={{ color: 'white' }}>
                沙亚南的家庭信任 Genesis Life Care 的优质养老院服务。我们的巴生分院仅需 {nearestCentre.distance} 车程
                — 提供 24/7 护理、驻诊医生咨询、失智症护理和全面康复。
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/zh/contact"
                  className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-400 transition-colors text-sm whitespace-nowrap"
                >
                  预约免费参观
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href={`tel:${nearestCentre.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  拨打 {nearestCentre.phoneCTA}
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={nearestCentre.img}
                  alt="Genesis Life Care 巴生 — 沙亚南附近最近的老年护理"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{nearestCentre.distance}</p>
                  <p className="text-xs text-gray-500">距离沙亚南</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AtAGlance highlights={centre.highlights} />

      {/* ── ABOUT ELDERLY CARE IN SHAH ALAM ─────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">沙亚南附近的老年护理</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              为沙亚南家庭提供优质养老院服务
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                沙亚南是雪兰莪州的州首府，一座规划完善的城市，拥有庞大的住宅人口。随着父母和祖父母年迈，为沙亚南家庭找到可靠、专业的老年护理成为优先事项。
              </p>
              <p>
                Genesis Life Care 巴生分院是距离沙亚南最近的 Genesis 分院 — 位于巴生 Jalan Istana 的 Amverton 商务中心，经美蕉高速公路 2 号线仅需片刻车程。我们的设施提供 24 小时护理、每周驻诊医生咨询、由心理学家领导的失智症护理，以及拥有物理治疗和职业治疗的完整康复部门。
              </p>
              <p>
                无论您的亲人需要长期住院护理、手术后恢复还是专业失智症护理，我们的巴生分院都提供安全、温馨的环境和经济实惠的费率。我们在 Google 上评分为 {nearestCentre.rating} 星，拥有来自巴生谷地区家庭的 {nearestCentre.reviews} 条评价。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">我们的服务</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              沙亚南附近可获得的老年护理服务
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              我们巴生分院提供的全面老年护理服务。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link
                key={i}
                href={svc.link}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group"
              >
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

      {/* ── FACILITY GALLERY ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">我们的设施</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              参观设施
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              我们的 {centre.name} 分院为舒适、安全和家庭氛围而设计。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {centre.facilityImages.map((img, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden shadow-sm ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                    i === 0 ? 'h-[400px]' : 'h-[190px]'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">评价</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              家属心声
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex text-gold text-lg">{'★★★★★'}</div>
              <span className="text-gray-600 text-sm font-medium">{centre.rating} 分来自 {centre.reviews} 条谷歌评价</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centre.testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex text-gold text-sm mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">谷歌评价</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEAREST CENTRE ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">最近的中心</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              参观我们的巴生分院
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              距离沙亚南仅需 {nearestCentre.distance} — 我们位于 Amverton 商务中心、巴生的分院。
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src={nearestCentre.img}
                  alt={nearestCentre.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gold text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    巴生分院
                  </span>
                  <span className="text-gold text-sm font-semibold">★ {nearestCentre.rating}</span>
                  <span className="text-gray-400 text-xs">({nearestCentre.reviews} 条评价)</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{nearestCentre.fullName}</h3>
                <p className="text-sm text-gray-500 mb-4">{nearestCentre.address}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-extrabold text-primary">{nearestCentre.beds}</p>
                    <p className="text-xs text-gray-500">床位容量</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-extrabold text-primary">{nearestCentre.distance}</p>
                    <p className="text-xs text-gray-500">距离沙亚南</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/zh/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-3 rounded-lg hover:bg-primary-600 transition-colors text-sm"
                  >
                    预约免费参观
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href={`/zh/${nearestCentre.slug}`}
                    className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-5 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    查看分院详情
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION & CONTACT ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">联系方式</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              位置与联系
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 h-[350px] bg-gray-200">
              <iframe
                src={centre.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${centre.fullName} 地图`}
              />
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{centre.fullName}</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-2.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">地址</p>
                    <p className="text-sm text-gray-500">{centre.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-2.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">电话</p>
                    <a href={`tel:${centre.phone.replace(/\s/g, '')}`} className="text-sm text-primary hover:underline">
                      {centre.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-2.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">营业时间</p>
                    <p className="text-sm text-gray-500">访问时间：9:00 AM – 6:00 PM 每日</p>
                    <p className="text-sm text-gray-500">护理服务：24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-2.5 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">电邮</p>
                    <a href="mailto:enquiries@genesiscare.com.my" className="text-sm text-primary hover:underline">
                      enquiries@genesiscare.com.my
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/zh/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors text-sm"
                >
                  预约免费参观
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/60123210457"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp 联系我们
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
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">常见问题</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              常见问题
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              关于沙亚南附近老年护理选项的常见问题。
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

      {/* ── OTHER CENTRES ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">探索</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              其他中心
            </h2>
            <p className="text-gray-500 mt-3">
              不在 {centre.name} 附近？我们在全马来西亚还有更多地点。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherCentres.map((c, i) => (
              <Link
                key={i}
                href={`/zh/${c.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group text-center"
              >
                <div className="h-36 overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {c.name}
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-1 text-gold text-sm">
                    ★ {c.rating}
                  </div>
                  <span className="inline-block mt-2 bg-primary/8 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {c.tag}
                  </span>
                  <span className="block mt-3 text-primary text-sm font-semibold group-hover:underline">
                    查看中心 →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/zh/our-locations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              查看所有地点
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

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
            在沙亚南附近寻找优质老年护理
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto" style={{ color: 'white' }}>
            参观我们的巴生分院进行免费参观。查看我们的护理空间、见面护理团队，并了解为什么来自沙亚南的家庭信任 Genesis Life Care。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/zh/contact"
              className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-4 rounded-xl hover:bg-yellow-400 transition-colors whitespace-nowrap"
            >
              预约免费参观
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href={`tel:${nearestCentre.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-4 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              拨打 {nearestCentre.phoneCTA}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
