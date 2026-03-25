import { Metadata } from 'next';
import Link from 'next/link';
import { centres, getOtherCentres } from '@/data/centres';
import AtAGlance from '@/components/sections/AtAGlance';

export const metadata: Metadata = {
  title: '布城附近的老年护理 - 布城附近的养老院 | Genesis Life Care',
  description:
    '寻找布城附近的老年护理？Genesis Life Care 巴生谷中心距离仅需约15分钟车程 — 提供24/7护理、失智症护理计划、中风康复和驻院医生。评分4.8★。预约免费参观。',
  openGraph: {
    title: '布城附近的老年护理 - Genesis Life Care',
    description:
      '布城附近的专业老年护理。24/7护理、失智症护理、中风康复。参访我们的巴生谷中心 — 距离布城仅需几分钟。',
    images: [{ url: '/images/puchong-centre.jpeg', width: 1200, height: 630, alt: 'Genesis Life Care 巴生谷中心' }],
  },
};

export const revalidate = 60;

const nearestCentre = {
  name: '巴生谷',
  fullName: 'Genesis Life Care 巴生谷中心',
  slug: 'nursing-home-in-puchong',
  phone: '+6019 759 0457',
  phoneCTA: '+6019-759-0457',
  address: '16, Jln TPP 1/1, Taman Perindustrian Puchong, 47100 Puchong, Selangor',
  rating: '4.8',
  reviews: 58,
  beds: '120+',
  distance: '约15分钟',
  img: '/images/puchong-centre.jpeg',
};

const centre = centres['petaling-jaya'];
const otherCentres = getOtherCentres(centre.name);

const services = [
  {
    title: '老年护理',
    desc: '全天候专业护理，为每位住户制定个性化护理计划。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    link: '/zh/our-services',
  },
  {
    title: '失智症与记忆护理',
    desc: '心理学家主导的失智症护理，包含结构化认知刺激活动。',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    link: '/zh/dementia-care',
  },
  {
    title: '中风康复',
    desc: '综合物理治疗和职业治疗，帮助中风患者恢复独立生活。',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    link: '/zh/stroke-rehabilitation-centre',
  },
  {
    title: '临终关怀',
    desc: '富有同情心的生命终期护理，专注于舒适、尊严和家庭支持。',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    link: '/zh/palliative-care-malaysia',
  },
  {
    title: '术后康复',
    desc: '手术后的短期康复 — 在专家护理下迅速恢复健康。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    link: '/zh/post-op-care-malaysia',
  },
  {
    title: '老年日间护理',
    desc: '日间护理计划，包含社交活动、用餐和对老年人的监督。',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
    link: '/zh/senior-daycare',
  },
];

const faqs = [
  {
    q: '布城附近有养老院吗？',
    a: '有。Genesis Life Care 巴生谷中心位于 Taman Perindustrian Puchong，距离布城约15分钟车程。我们提供24/7护理、失智症护理计划和中风康复服务。',
  },
  {
    q: '布城附近的老年护理费用是多少？',
    a: 'Genesis Life Care 提供经济实惠的专业老年护理费率。费用根据护理级别和房间类型而异。请联系我们获取个性化报价 — 我们很乐意讨论适合您家庭预算的选项。',
  },
  {
    q: '来自布城的老年住户可以获得什么服务？',
    a: '我们巴生谷中心提供老年护理、失智症和记忆护理、中风康复、临终关怀、术后康复和老年日间护理计划。所有服务均包括驻院医生咨询。',
  },
  {
    q: '我可以在承诺前参访养老院吗？',
    a: '当然可以。我们鼓励家庭在承诺前预约免费参访我们的巴生谷设施。您可以看到生活空间、见到护理团队并提出任何问题 — 没有任何义务。',
  },
  {
    q: '怎样从布城前往 Genesis Life Care 巴生谷？',
    a: '我们巴生谷中心可通过 LDP（Lebuhraya Damansara-Puchong）或 Bukit Jalil 高速公路从布城轻松到达。车程通常约15分钟。中心位于 Taman Perindustrian Puchong。',
  },
  {
    q: '与布城附近的其他养老院相比，Genesis Life Care 有什么不同？',
    a: 'Genesis Life Care 通过驻院医生、心理学家主导的失智症计划、专业物理治疗团队和经济实惠的费率而脱颖而出。我们的巴生谷中心拥有120+张床位，在Google上评分4.8星，来自满意家庭的评价众多。',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: 'Genesis Life Care 巴生谷中心',
      description: 'Genesis Life Care 布城附近的专业老年护理和养老院。',
      url: 'https://genesiscare.com.my/zh/elderly-care-in-bukit-jalil',
      telephone: '+60197590457',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '16, Jln TPP 1/1, Taman Perindustrian Puchong',
        addressLocality: 'Puchong',
        addressRegion: 'Selangor',
        postalCode: '47100',
        addressCountry: 'MY',
      },
      areaServed: [
        { '@type': 'City', name: '布城' },
        { '@type': 'City', name: '巴生谷' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '58',
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

export default function ElderlyCareButikJalilZh() {
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

      {/* ── 英雄部分 ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gold text-gray-900 text-xs font-bold tracking-wide px-3 py-1 rounded-full uppercase">
                  布城附近
                </span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ color: 'white' }}>
                  ★ {nearestCentre.rating} Google 评分
                </span>
              </div>

              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'white' }}>
                布城附近的老年护理
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5" style={{ color: 'white' }}>
                布城附近的专业<br />老年护理
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl" style={{ color: 'white' }}>
                布城的家庭相信 Genesis Life Care 提供的优质养老院服务。我们的巴生谷中心距离仅需{nearestCentre.distance}车程 — 提供24/7护理、驻院医生咨询、失智症护理和综合康复。
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-400 transition-colors text-sm whitespace-nowrap">
                  预约免费参观
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href={`tel:${nearestCentre.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm whitespace-nowrap">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  致电 {nearestCentre.phoneCTA}
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img src={nearestCentre.img} alt="Genesis Life Care 巴生谷中心 — 布城附近的老年护理" className="w-full h-[420px] object-cover" />
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
                  <p className="text-xs text-gray-500">距离布城</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AtAGlance highlights={centre.highlights} />

      {/* ── 关于布城的老年护理 ─────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">布城附近的老年护理</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              为布城家庭提供优质养老院服务
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                布城是吉隆坡南部一个快速发展的居住区，以其现代发展和家庭友善的环境而闻名。随着父母和祖父母年岁增长，为布城居民寻找靠近家园的可靠且专业的老年护理成为首要优先事项。
              </p>
              <p>
                Genesis Life Care 巴生谷中心是距离布城最近的 Genesis 中心 — 位于 Taman Perindustrian Puchong，可通过 LDP 或 Bukit Jalil 高速公路方便前往。我们的设施提供24小时护理、每周驻院医生咨询、心理学家主导的失智症计划和完整的康复部门，包括物理治疗和职业治疗。
              </p>
              <p>
                无论您的亲人需要长期住宅护理、手术后康复还是专业失智症支持，我们的巴生谷中心都提供安全、温暖的环境和经济实惠的费率。我们在Google上评分{nearestCentre.rating}星，来自巴生谷地区家庭的评价共{nearestCentre.reviews}条。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 服务 ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">我们的服务</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              布城附近可用的老年护理服务
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              在我们的巴生谷中心提供的全面护理服务。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link key={i} href={svc.link} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group">
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={svc.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{svc.title}</h3>
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

      {/* ── 最近的中心 ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">最近的中心</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              参访我们的巴生谷中心
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              距离布城仅需{nearestCentre.distance} — 我们位于 Taman Perindustrian Puchong 的中心。
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img src={nearestCentre.img} alt={nearestCentre.fullName} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gold text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    巴生谷中心
                  </span>
                  <span className="text-gold text-sm font-semibold">★ {nearestCentre.rating}</span>
                  <span className="text-gray-400 text-xs">({nearestCentre.reviews} 评价)</span>
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
                    <p className="text-xs text-gray-500">距离布城</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-3 rounded-lg hover:bg-primary-600 transition-colors text-sm">
                    预约免费参观
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href={`/zh/${nearestCentre.slug}`} className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-5 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    查看中心详情
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 常见问题 ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">常见问题</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              常见问题
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              关于布城附近老年护理选项的常见问题。
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

      {/* ── 底部 CTA ────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-r from-primary via-primary-800 to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            在布城找到优质老年护理
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto" style={{ color: 'white' }}>
            参访我们的巴生谷中心进行免费参观。查看我们的护理空间、与团队见面，并了解为什么布城的家庭相信 Genesis Life Care。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-4 rounded-xl hover:bg-yellow-400 transition-colors whitespace-nowrap">
              预约免费参观
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a href={`tel:${nearestCentre.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-4 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              致电 {nearestCentre.phoneCTA}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
