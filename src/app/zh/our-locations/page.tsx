import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '我们的护理之家地点 - Genesis Life Care马来西亚',
  description:
    '在Petaling Jaya、Klang、Kajang、Puchong和Johor Bahru找到Genesis Life Care护理之家。提供24/7护理的可负担中心。今天预约免费参观。',
};

export const revalidate = 60;

const centres = [
  {
    name: 'Petaling Jaya',
    slug: 'nursing-home-in-petaling-jaya',
    phone: '+6019 295 0457',
    address: 'Lot 1, Petaling Utama Avenue, Jalan PJS 1/50, Taman Petaling Utama, 46150 Petaling Jaya, Selangor',
    rating: '4.9',
    reviews: 58,
    img: '/images/pj-centre.jpg',
    tags: ['旗舰中心', '失智症护理', '康复设施'],
    desc: '我们在PJ的旗舰中心，设有专门的失智症护理部和全面的康复设施。增强的理疗和作业治疗服务。',
  },
  {
    name: 'Klang',
    slug: 'nursing-home-in-klang',
    phone: '+6012 321 0457',
    address: 'No.3, Jalan Istana, Amverton Business Centre, 41500 Klang, Selangor',
    rating: '4.8',
    reviews: 45,
    img: '/images/klang-centre.jpg',
    tags: ['成立于2018年', '靠近主要医院', '原创中心'],
    desc: '一切开始的地方。我们在Klang的原创中心靠近主要医院，为克城谷北部的家庭提供服务。',
  },
  {
    name: 'Kajang',
    slug: 'nursing-home-kajang',
    phone: '+6012 321 0457',
    address: 'Jalan Bukit, Taman Kajang Baru, 43000 Kajang, Selangor',
    rating: '4.7',
    reviews: 32,
    img: '/images/kajang-centre.jpeg',
    tags: ['南部克城谷', '家庭友好', '优质用餐'],
    desc: '温暖、家庭友好的环境，提供个性化护理和优质用餐。',
  },
  {
    name: 'Puchong',
    slug: 'nursing-home-in-puchong',
    phone: '+6012 321 0457',
    address: 'Bandar Puteri, 47100 Puchong, Selangor',
    rating: '4.8',
    reviews: 38,
    img: '/images/puchong-centre.jpeg',
    tags: ['便利通道', '现代设施', '优质用餐'],
    desc: '位于Bandar Puteri中心，高速公路通道便利。提供我们全部服务范围的现代设施，优质用餐和舒适设施。',
  },
  {
    name: 'Johor Bahru',
    slug: 'nursing-home-in-johor-bahru',
    phone: '+6012 321 0457',
    address: 'Holiday Plaza, Jalan Dato Sulaiman, 80250 Johor Bahru, Johor',
    rating: '4.8',
    reviews: 24,
    img: '/images/jb-centre.jpeg',
    tags: ['南部地区', '最新中心', '全方位服务'],
    desc: '我们克城谷外的第一个中心，为Johor Bahru及更广泛的南部地区的家庭提供Genesis护理标准。',
  },
];

const trustSignals = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: '收费合理',
    sub: '中心',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: '24/7护理',
    sub: '昼夜不间断',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    label: '免费虚拟参观',
    sub: '线上和线下',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: '无锁定合同',
    sub: '灵活安排',
  },
];

export default function OurLocationsPageZh() {
  return (
    <>
      <section className="loc-hero relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase text-white/80 mb-4">
            <span className="w-6 h-px bg-gold" />
            我们的地点
            <span className="w-6 h-px bg-gold" />
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            找到靠近您的中心
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            克城谷和Johor Bahru的5家可负担护理之家 — 都方便地靠近主要医院和高速公路。
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {centres.map((c, i) => (
              <div
                key={c.slug}
                className={`bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-primary hover:shadow-xl transition-all ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                } md:flex`}
              >
                <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={c.img}
                    alt={`Genesis Life Care ${c.name} 中心`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-[10px] font-bold uppercase tracking-wide bg-primary-50 text-primary px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                    Genesis Life Care {c.name}
                  </h2>

                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-900">{c.rating}</span>
                    <span className="text-sm text-gray-400">({c.reviews} 谷歌评价)</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-5">
                    {c.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{c.address}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="font-semibold text-gray-700 hover:text-primary transition-colors">
                        {c.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/zh/${c.slug}`}
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap"
                    >
                      查看中心
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <a
                      href={`tel:${c.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-semibold hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      立即致电
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fb] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {trustSignals.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{s.label}</p>
                  <p className="text-xs text-gray-500">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="loc-cta relative bg-gradient-to-r from-primary to-secondary py-14 sm:py-20">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            不确定哪个中心合适？
          </h2>
          <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto">
            我们的护理顾问可以帮助您找到适合您亲人的最佳选项。在我们任何中心预约免费参观 — 没有义务、没有压力。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/zh/contact"
              className="inline-flex items-center gap-2 bg-gold text-gray-900 px-6 py-3.5 rounded-lg font-bold text-base hover:bg-yellow-400 transition-colors shadow-lg whitespace-nowrap"
            >
              预约免费参观
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+60123210457"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3.5 rounded-lg font-bold text-base hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              致电 +6012-321 0457
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
