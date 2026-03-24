import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '马来西亚暂托护理 - 短期老年护理 | Genesis Life Care',
  description:
    '马来西亚全国暂托护理服务。为照顾者提供缓解、术后康复和家庭度假提供短期老年护理。全国5个中心。Genesis Life Care — 预约免费咨询。',
  openGraph: {
    title: '马来西亚暂托护理 - Genesis Life Care',
    description:
      '马来西亚全国短期老年护理。照顾者缓解、灵活住宿、全方位护理，5家Genesis Life Care中心。预约免费咨询。',
    images: [{ url: '/images/pj-centre.jpg', width: 1200, height: 630, alt: 'Genesis Life Care - 马来西亚暂托护理' }],
  },
};

export const revalidate = 60;

const phone = '+6012 321 0457';
const phoneCTA = '+6012-321-0457';

const centres = [
  {
    name: 'Petaling Jaya',
    fullName: 'Genesis Life Care Petaling Jaya',
    slug: 'nursing-home-in-petaling-jaya',
    address: 'No. 33-1, Jalan PJU 5/9, Dataran Sunway, Kota Damansara, 47810 Petaling Jaya, Selangor',
    rating: '4.9',
    reviews: 155,
    beds: '50+',
    img: '/images/pj-centre.jpg',
    badge: '旗舰中心',
  },
  {
    name: 'Klang',
    fullName: 'Genesis Life Care Klang',
    slug: 'nursing-home-in-klang',
    address: 'No.3, Jalan Istana, Amverton Business Centre, 41500 Klang, Selangor',
    rating: '4.8',
    reviews: 45,
    beds: '120+',
    img: '/images/klang-centre.jpg',
    badge: '原创中心',
  },
  {
    name: 'Kajang',
    fullName: 'Genesis Life Care Kajang',
    slug: 'nursing-home-kajang',
    address: 'No. 16, Jalan Reko Sentral 1, Reko Sentral, 43000 Kajang, Selangor',
    rating: '4.7',
    reviews: 32,
    beds: '120+',
    img: '/images/kajang-centre.jpeg',
    badge: '南部克城谷',
  },
  {
    name: 'Puchong',
    fullName: 'Genesis Life Care Puchong',
    slug: 'nursing-home-in-puchong',
    address: 'No.33, Jalan TPP 1/1, Taman Perindustrian Puchong, 47100 Puchong, Selangor',
    rating: '4.8',
    reviews: 58,
    beds: '120+',
    img: '/images/puchong-centre.jpeg',
    badge: '现代设施',
  },
  {
    name: 'Johor Bahru',
    fullName: 'Genesis Life Care Johor Bahru',
    slug: 'nursing-home-in-johor-bahru',
    address: 'No. 41, Jalan Harmonium 23/10, Taman Desa Tebrau, 81100 Johor Bahru, Johor',
    rating: '4.8',
    reviews: 40,
    beds: '120+',
    img: '/images/jb-centre.jpeg',
    badge: '南部地区',
  },
];

const respiteReasons = [
  {
    title: '照顾者缓解',
    desc: '享受应得的休息，知道您的亲人正在接受相同质量的专业护理。我们的团队提供24/7护理支持，让您可以休息和恢复。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: '灵活住宿时长',
    desc: '住宿可短至几天，也可长达数周。我们的暂托护理计划旨在适应您的日程和家庭需求。',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: '全方位护理',
    desc: '暂托护理住户获得与我们长期住户相同质量的护理 — 包括护理支持、膳食、活动、治疗课程和医生咨询。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: '轻松过渡',
    desc: '我们的入住团队确保流程顺畅，文件最少。我们进行初步评估以从第一天起理解您亲人的护理需求。',
    icon: 'M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

const faqs = [
  {
    q: '什么是暂托护理？',
    a: '暂托护理是为老年人提供的短期住宿护理，旨在为主要照顾者提供临时休息。在Genesis Life Care，暂托护理住户获得与我们长期住户相同级别的专业护理、膳食、活动和医疗支持。',
  },
  {
    q: '我的亲人可以住多久进行暂托护理？',
    a: '我们的暂托护理计划灵活 — 住宿可从几天到数周不等，取决于您的需求。无论您需要短期休息、度假还是术后过渡护理，我们都可以适应您的日程。',
  },
  {
    q: '马来西亚暂托护理费用是多少？',
    a: 'Genesis Life Care的暂托护理费用根据住宿时长和所需护理水平而异。我们提供有竞争力的日费和周费。联系我们获取个性化报价 — 我们乐意讨论适合您预算的选项。',
  },
  {
    q: '所有Genesis Life Care中心都提供暂托护理吗？',
    a: '是的，所有五家中心都提供暂托护理 — Petaling Jaya、Klang、Kajang、Puchong和Johor Bahru。每家中心为短期住户提供相同的专业护理和舒适的生活环境。',
  },
  {
    q: '暂托护理住宿应该带些什么？',
    a: '我们建议带上个人衣物、洗漱用品、任何处方药物和可能提供安慰的熟悉物品（如照片或最喜欢的毯子）。我们的团队将在入住过程中提供详细检查清单。',
  },
  {
    q: '可以短时间安排暂托护理吗？',
    a: '我们理解暂托护理的需求可能是突然的。虽然我们建议提前预订以保证可用性，但我们会尽力满足紧急请求。联系我们的入住团队检查您首选中心的当前可用性。',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: 'Genesis Life Care',
      description: '马来西亚全国短期暂托护理服务。5家中心的专业老年护理 — Petaling Jaya、Klang、Kajang、Puchong和Johor Bahru。',
      url: 'https://genesiscare.com.my/zh/respite-care-in-malaysia',
      telephone: '+60123210457',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '暂托护理服务',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '暂托护理',
              description: '短期住宿老年护理，24/7护理支持、膳食、活动和医疗咨询。',
            },
          },
        ],
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

export default function RespiteCareZh() {
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
        .hero-dark .text-gray-600 { color: rgb(75 85 99) !important; }
        .hero-dark .text-gold { color: #FAB515 !important; }
      ` }} />

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
                  暂托护理
                </span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ color: 'white' }}>
                  全国5家中心
                </span>
              </div>

              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'white' }}>
                短期老年护理
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5" style={{ color: 'white' }}>
                马来西亚暂托护理<br />服务
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl" style={{ color: 'white' }}>
                需要临时缓解照顾任务？Genesis Life Care在马来西亚5家中心提供专业短期老年护理。
                从几天到数周 — 您的亲人获得与我们长期住户相同质量的护理，24/7护理和现场医生支持。
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/zh/contact"
                  className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-400 transition-colors text-sm whitespace-nowrap"
                >
                  预约免费咨询
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  致电 {phoneCTA}
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/images/pj-centre.jpg"
                  alt="Genesis Life Care — 马来西亚暂托护理服务"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">灵活住宿</p>
                  <p className="text-xs text-gray-600">天数至周数</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">暂托护理</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              什么是暂托护理以及谁需要它？
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                暂托护理为老年人提供短期住宿护理，为主要照顾者提供急需的临时休息。
                照顾老年的父母或亲人是有意义的，但也可能在身体上和情感上很有挑战。
                暂托护理确保您的亲人继续获得专业支持，同时您有时间休息和恢复。
              </p>
              <p>
                家庭经常在主要照顾者需要从日常照顾的需求中休息时、老年家庭成员需要医院住宿后的过渡支持时，
                或家庭度假需要为亲人提供安全的专业环境时转向暂托护理。
              </p>
              <p>
                在Genesis Life Care，暂托护理住户获得与我们长期住户相同的护理标准。
                这包括24小时护理支持、营养膳食、社交活动、治疗课程（如需要）和定期医生咨询。
                拥有5家跨越雪兰莪和柔佛的中心，我们为全马来西亚的家庭提供可及的暂托护理选项。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">优势</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              为什么选择暂托护理
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              支持您的亲人和家庭的专业短期护理。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {respiteReasons.map((reason, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">我们的中心</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              暂托护理在5家地点可用
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              选择离您最近的Genesis Life Care中心，享受质量短期老年护理。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centres.map((c, i) => (
              <Link
                key={i}
                href={`/zh/${c.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.fullName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gold text-gray-900 text-xs font-bold px-2.5 py-0.5 rounded-full">
                      {c.badge}
                    </span>
                    <span className="text-gold text-sm font-semibold">★ {c.rating}</span>
                    <span className="text-gray-400 text-xs">({c.reviews})</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {c.fullName}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">{c.address}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-600">{c.beds} 床位</span>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                      查看中心
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">常见问题</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              常见问题
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              关于马来西亚暂托护理和短期老年护理的常见问题。
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
            给自己一个休息 — 您的亲人在好手中
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto" style={{ color: 'white' }}>
            联系我们在我们5家中心之一安排暂托护理。我们的团队将指导您完成整个过程，
            并确保您亲人有一个流畅、舒适的住宿。
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
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-4 rounded-xl hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              致电 {phoneCTA}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
