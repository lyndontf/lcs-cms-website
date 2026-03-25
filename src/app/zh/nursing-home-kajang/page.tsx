import { Metadata } from 'next';
import Link from 'next/link';
import QuickEnquiryCard from '@/components/QuickEnquiryCard';

export const metadata: Metadata = {
  title: '加影老年护理中心 - Genesis Life Care Kajang',
  description:
    'Genesis Life Care Kajang — 南部巴生谷的家庭友好型老年护理中心。24/7护理服务、康复服务、失智症护理及老年日间护理。费用合理。谷歌评分4.9★。预约免费参观。',
};

export const revalidate = 60;

/* ─── Centre-specific data ───────────────────────────────────────────── */

const centre = {
  name: 'Kajang',
  fullName: 'Genesis Life Care Kajang',
  phone: '+6019 334 0457',
  phoneCTA: '+6019-334-0457',
  address: '41, Jalan Ria 1, Kawasan Perindustrian Ria, 43500 Kajang, Selangor',
  rating: '4.9',
  reviews: 32,
  established: '2021',
  beds: '120',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.8!2d101.7897!3d2.9927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcb3a3a3a3a3a%3A0x3a3a3a3a3a3a3a3a!2sGenesis+Life+Care+Kajang!5e0!3m2!1sen!2smy!4v1700000000000',
  heroImg: '/images/kajang-centre.jpeg',
};

const highlights = [
  { label: '谷歌评分', value: '4.9 ★', sub: `${centre.reviews} 条评价` },
  { label: '床位', value: '120', sub: '容量' },
  { label: '成立年份', value: '2021', sub: '南巴生谷' },
  { label: '收费合理', value: '✓', sub: '全部中心' },
  { label: '护理团队', value: '20+', sub: '专业人员' },
];

const services = [
  {
    title: '老年护理',
    desc: '全天候专业护理，为每位住户提供个性化护理计划。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    link: '/zh/our-services',
  },
  {
    title: '失智症与记忆护理',
    desc: '结构化失智症护理计划，包括认知刺激活动和培训有素的护理人员。',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    link: '/zh/dementia-care',
  },
  {
    title: '中风康复',
    desc: '综合物理和职能治疗，帮助中风患者恢复独立生活能力。',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    link: '/zh/stroke-rehabilitation-centre',
  },
  {
    title: '临终关怀',
    desc: '富有同情心的临终关怀，专注于舒适、尊严和家庭支持。',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    link: '/zh/palliative-care-malaysia',
  },
  {
    title: '术后康复',
    desc: '手术后的短期康复 — 在专家护理下恢复健康。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    link: '/zh/post-op-care-malaysia',
  },
];

const facilityImages = [
  { src: '/images/kajang-centre.jpeg', alt: 'Genesis Life Care Kajang 外观' },
  { src: '/images/services/rehab-department.jpg', alt: '康复区域' },
  { src: '/images/services/bedded-room.jpg', alt: '舒适的生活空间' },
  { src: '/images/services/common-area-scenic.jpg', alt: '公共区域' },
  { src: '/images/services/nursing-station.jpg', alt: '护理设施' },
  { src: '/images/services/halal-dinner.jpg', alt: '餐饮区域' },
];

const teamMembers = [
  {
    name: 'Dr. Phang Sue Ling',
    role: '运营总监',
    bio: '监督 Genesis Life Care 的运营，确保所有中心患者护理达到最高标准。',
    img: '/images/team/team-1.png',
  },
  {
    name: 'Farah',
    role: '中心经理',
    bio: '领导加影中心，专注于个性化护理和家庭参与计划。',
    img: '/images/team/team-2.png',
  },
  {
    name: 'Seow Zhi Heng',
    role: '高级治疗师',
    bio: '专攻老年康复，采用以患者为中心的多学科方法。',
    img: '/images/team/team-3.png',
  },
];

const testimonials = [
  {
    name: 'Nurul Aisyah',
    text: '对优质餐饮和体贴的工作人员感到非常满意。工作人员尊重体贴。我的祖母在这里感到像在家一样。',
    rating: 5,
  },
  {
    name: 'David Wong',
    text: '加影中心温暖友好。我父亲喜欢每天的活动，并与其他住户交了朋友。团队非常细心。',
    rating: 5,
  },
  {
    name: 'Priya Raman',
    text: '很好的护理和康复服务。位置方便，适合我们在南巴生谷的需求。推荐给附近的家庭。',
    rating: 4,
  },
];

const otherCentres = [
  { name: '巴生谷', slug: 'nursing-home-in-petaling-jaya', rating: '4.9', tag: '旗舰中心', img: '/images/pj-centre.jpg' },
  { name: 'Klang', slug: 'nursing-home-in-klang', rating: '4.8', tag: '创始中心', img: '/images/klang-centre.jpg' },
  { name: 'Puchong', slug: 'nursing-home-in-puchong', rating: '4.8', tag: '现代化设施', img: '/images/puchong-centre.jpeg' },
  { name: '柔佛巴鲁', slug: 'nursing-home-in-johor-bahru', rating: '4.8', tag: '南方地区', img: '/images/jb-centre.jpeg' },
];

/* ─── Page component ─────────────────────────────────────────────────── */

export default function NursingHomeKajangZh() {
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
        .bed-badge p { color: #ffffff !important; }
        .bed-badge p:last-child { color: rgba(255,255,255,0.8) !important; }
        .team-card h3 { font-size: 0.75rem !important; line-height: 1rem !important; }
      ` }} />
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative overflow-hidden">
        {/* Background image */}
        <img
          src="/images/general/hero-main.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary/85 to-secondary/80" />
        {/* Decorative circles */}
        <div className="absolute -top-[20%] -right-[10%] w-[55%] pb-[55%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[30%] -left-[5%] w-[40%] pb-[40%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left – text */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gold text-gray-900 text-xs font-bold tracking-wide px-3 py-1 rounded-full uppercase">
                  加影
                </span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{color: 'white'}}>
                  ★ {centre.rating} 谷歌评分
                </span>
              </div>

              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2" style={{color: 'white'}}>
                加影老年护理中心
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5" style={{color: 'white'}}>
                {centre.fullName}
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl" style={{color: 'white'}}>
                温暖的家庭友好型老年护理中心，服务于南部巴生谷。
                专业护理，优质餐饮、日常活动，以及一支
                将每位住户视为家人的专业团队。
              </p>

              {/* Address */}
              <div className="flex flex-col gap-4 mb-8 text-white text-sm" style={{color: 'white'}}>
                <span className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {centre.address}
                </span>
              </div>

              {/* CTAs */}
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
                  href={`tel:${centre.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  致电 {centre.phoneCTA}
                </a>
              </div>
            </div>

            {/* Right — Quick enquiry card */}
            <QuickEnquiryCard email="enquiries@genesiscare.com.my" />
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-primary">{h.value}</p>
                <p className="text-sm font-semibold text-gray-700 mt-1">{h.label}</p>
                <p className="text-xs text-gray-400">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT THIS CENTRE ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">关于本中心</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                南巴生谷<br />家庭友好型护理
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Genesis Life Care Kajang 为南部巴生谷走廊的家庭提供服务 — 从加影和万宜到三美延和布城。我们的中心提供温馨的家庭式环境，让住户感到受欢迎和被照顾。
                </p>
                <p>
                  我们为个性化护理而自豪。我们的<strong>内部厨房</strong>在营养师监督下准备营养餐饮，我们提供舒适的设施，让每位住户都感到在家。
                </p>
                <p>
                  该中心提供全面的 Genesis 服务，包括24/7护理、每周医生咨询、康复治疗和结构化活动计划，旨在保持住户的活跃和参与。
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {['优质餐饮', '家庭友好', '失智症护理', '24/7 护理', '康复服务', '老年日间护理'].map((tag) => (
                  <span key={tag} className="bg-primary/8 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/kajang-centre.jpeg"
                alt="Genesis Life Care Kajang 建筑"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
              <div className="bed-badge absolute -bottom-5 -right-5 bg-primary text-white rounded-xl px-6 py-4 shadow-lg hidden sm:block">
                <p className="text-3xl font-extrabold">{centre.beds}</p>
                <p className="text-sm font-medium">床位容量</p>
              </div>
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
              加影中心的护理服务
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              我们提供根据每位住户需求量身定制的全面护理服务。
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

      {/* ── FACILITY GALLERY ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">我们的设施</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              参观设施
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              我们的加影中心为住户设计了舒适、安全和家庭式的氛围。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {facilityImages.map((img, i) => (
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

      {/* ── MEET THE TEAM ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">团队</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              认识加影护理团队
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              我们的专业团队致力于提供最高标准的护理。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="team-card bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 text-center">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">评价</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              家属心声
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex text-gold text-lg">{'★★★★★'}</div>
              <span className="text-gray-600 text-sm font-medium">{centre.rating} 来自 {centre.reviews} 条谷歌评价</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
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

      {/* ── LOCATION & CONTACT ────────────────────────────────────────── */}
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
                    <p className="text-sm text-gray-500">探访：每日 9:00 AM – 6:00 PM</p>
                    <p className="text-sm text-gray-500">护理服务：全天候24/7</p>
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
                  href={`https://wa.me/60193340457`}
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

      {/* ── OTHER CENTRES ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">探索</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              其他中心
            </h2>
            <p className="text-gray-500 mt-3">不在加影？我们在全马来西亚有 4 个其他地点。</p>
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

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="hp-cta relative bg-gradient-to-br from-primary via-primary-400 to-secondary overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] w-[60%] pb-[60%] rounded-full bg-white/[.06] pointer-events-none" />
        <div className="absolute -bottom-[50%] -left-[5%] w-[50%] pb-[50%] rounded-full bg-black/[.06] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">准备好迈出下一步了吗？</h2>
          <p className="hp-sub text-lg mb-8 max-w-2xl mx-auto">
            立即联系我们进行免费咨询。我们的护理顾问每周与数十个家庭交流，能帮助您为亲人找到最合适的护理方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zh/contact"
              className="hp-gold-btn inline-flex items-center justify-center gap-2 bg-gold text-gray-900 px-8 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
            >
              预约参观
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a
              href={`tel:${centre.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white/25 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              致电 {centre.phoneCTA}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
