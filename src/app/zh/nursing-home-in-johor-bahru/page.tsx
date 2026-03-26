import { Fragment } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getCurrentSiteId } from '@/lib/site-context';
import { getPublishedPosts } from '@/lib/supabase';

export const metadata: Metadata = {
  title: '新山护理中心 - Genesis Life Care 新山',
  description:
    'Genesis Life Care 新山 — 我们在巴生谷以外的首个中心。全天候24/7护理、康复服务、失智症护理及位于假日广场的专业厨房。收费合理。谷歌评分4.8★。预约免费参观。',
};

export const revalidate = 60;

/* ─── Centre-specific data ───────────────────────────────────────────── */

const centre = {
  name: '新山',
  fullName: 'Genesis Life Care 新山',
  phone: '+6019 282 0457',
  phoneCTA: '+6019-282-0457',
  address: 'Level 6, Holiday Plaza Tower, Jalan Dato Sulaiman, Taman Century, 80250 Johor Bahru, Johor Darul Ta’zim',
  rating: '4.8',
  reviews: 24,
  established: '2023',
  beds: '120+',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4!2d103.7414!3d1.4655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1772b1c4b4b1%3A0x4b4b4b4b4b4b4b4b!2sHoliday+Plaza!5e0!3m2!1sen!2smy!4v1700000000000',
  heroImg: '/images/jb-centre.jpeg',
};

const highlights = [
  { label: '谷歌评分', value: '4.8 ★', sub: `${centre.reviews} 条评价` },
  { label: '床位', value: '120+', sub: '容量' },
  { label: '成立年份', value: '2023', sub: '最新中心' },
  { label: '护理团队', value: '20+', sub: '专业人员' },
];

const services = [
  {
    title: '老年护理',
    desc: '全天候专业护理，为每位住院者量身定制护理计划。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    link: '/zh/our-services',
  },
  {
    title: '失智症与记忆护理',
    desc: '结构化的失智症护理计划，配备认知刺激活动和训练有素的护理人员。',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    link: '/zh/dementia-care',
  },
  {
    title: '中风康复',
    desc: '全面的物理治疗和职业治疗，帮助中风患者恢复独立生活能力。',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    link: '/zh/stroke-rehabilitation-centre',
  },
  {
    title: '临终关怀',
    desc: '以舒适、尊严和家庭支持为核心的临终关怀服务。',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    link: '/zh/palliative-care-malaysia',
  },
  {
    title: '术后康复',
    desc: '术后短期康复 — 在专业护理下尽快恢复健康。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    link: '/zh/post-op-care-malaysia',
  },
];

const facilityImages = [
  { src: '/images/jb-centre.jpeg', alt: 'Genesis Life Care 新山外观' },
  { src: '/images/services/rehab-department.jpg', alt: '康复区域' },
  { src: '/images/services/bedded-room.jpg', alt: '舒适的生活空间' },
  { src: '/images/services/common-area-scenic.jpg', alt: '公共区域' },
  { src: '/images/services/nursing-station.jpg', alt: '护理设施' },
  { src: '/images/services/halal-dinner.jpg', alt: '餐饮区' },
];

const teamMembers = [
  {
    name: 'Dr. Phang Sue Ling',
    role: '运营总监',
    bio: '监督 Genesis Life Care 运营，确保所有中心患者护理的最高标准。',
    img: '/images/team/team-1.png',
  },
  {
    name: 'Amirah',
    role: '中心经理',
    bio: '领导新山中心，致力于为南部地区的家庭提供 Genesis 标准护理。',
    img: '/images/team/team-2.png',
  },
  {
    name: 'Seow Zhi Heng',
    role: '高级治疗师',
    bio: '专门从事老年人康复，采用以患者为中心的多学科方法。',
    img: '/images/team/team-3.png',
  },
];

const testimonials = [
  {
    name: 'Lim Wei Shan',
    text: '很高兴 Genesis 在新山开设中心。我的父亲不再需要前往吉隆坡寻求优质护理。工作人员专业且充满爱心。',
    rating: 5,
  },
  {
    name: 'Hakim Ibrahim',
    text: '优质的餐食和友善的工作人员使这成为我们家庭的轻松选择。设施非常干净，护士总是关怀备至。',
    rating: 5,
  },
  {
    name: 'Siti Nurhaliza',
    text: '很好的康复服务。我的母亲在髋部手术后恢复良好。治疗师非常耐心且富有鼓励性。',
    rating: 4,
  },
];

const otherCentres = [
  { name: '巴生谷八打灵再也', slug: 'nursing-home-in-petaling-jaya', rating: '4.9', tag: '旗舰中心', img: '/images/pj-centre.jpg' },
  { name: '巴生谷巴生', slug: 'nursing-home-in-klang', rating: '4.8', tag: '创始中心', img: '/images/klang-centre.jpg' },
  { name: '巴生谷加影', slug: 'nursing-home-kajang', rating: '4.7', tag: '南巴生谷', img: '/images/kajang-centre.jpeg' },
  { name: '巴生谷蒲种', slug: 'nursing-home-in-puchong', rating: '4.8', tag: '现代化设施', img: '/images/puchong-centre.jpeg' },
];

/* ─── Page component ─────────────────────────────────────────────────── */

export default async function NursingHomeJBZh() {
  const siteId = await getCurrentSiteId();
  const recentPosts = await getPublishedPosts(siteId || undefined);

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
        <img src="/images/general/hero-main.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary/85 to-secondary/80" />
        <div className="absolute -top-[20%] -right-[10%] w-[55%] pb-[55%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[30%] -left-[5%] w-[40%] pb-[40%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left – text */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gold text-gray-900 text-xs font-bold tracking-wide px-3 py-1 rounded-full uppercase">
                  南部地区
                </span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{color: 'white'}}>
                  ★ {centre.rating} 谷歌评分
                </span>
              </div>

              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2" style={{color: 'white'}}>
                新山护理中心
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5" style={{color: 'white'}}>
                {centre.fullName}
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl" style={{color: 'white'}}>
                我们在巴生谷以外的首个中心，为新山和更广泛的南部地区的家庭带来 Genesis 护理标准。
                提供全面的老年护理、康复、失智症计划，并配备全天候护理团队。
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

            {/* Right – image */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={centre.heroImg}
                  alt={`${centre.fullName} 设施`}
                  className="w-full h-[420px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">收费合理</p>
                  <p className="text-xs text-gray-900">卫生部认证</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ──────────────────────────────────────────────── */}
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

      {/* ── ABOUT THIS CENTRE ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">关于本中心</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                Genesis Care<br />来到新山
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Genesis Life Care 新山是我们在巴生谷以外的首个中心，为南部地区的家庭带来我们经过验证的护理标准。
                  位于著名的假日广场（Jalan Dato Sulaiman），我们易于到达新山和周边地区。
                </p>
                <p>
                  作为我们最新的中心，新山设施从一开始就以最新护理标准进行设计。
                  从康复室到餐饮区的每个空间都经过精心规划，为住院者提供最大的舒适度和功能性。
                </p>
                <p>
                  新山的家庭不再需要看向巴生谷寻求优质老年护理。我们的新山中心提供全面的 Genesis 服务，
                  包括全天候24/7护理、失智症护理、康复治疗，以及营养餐食和温暖的欢迎环境。
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {['最新中心', '全面服务', '失智症护理', '24/7 护理', '康复服务', '优质餐饮'].map((tag) => (
                  <span key={tag} className="bg-primary/8 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/jb-centre.jpeg"
                alt="Genesis Life Care 新山建筑"
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
              新山中心护理服务
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              我们提供根据每位住院者需求定制的全面护理服务。
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
              我们的新山中心为舒适、安全和家庭般氛围而设计。
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
              认识新山护理团队
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

      {/* ── COST CALCULATOR ────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-primary/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">透明定价</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                数秒内了解您的护理成本
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                根据亲人的护理需求获得即时的个性化估算。选择中心、房间类型、护理等级和附加服务——数秒内即可查看详细的每月费用。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href="https://web.genesiscare.com.my/cost-calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full text-base font-bold shadow-md hover:bg-primary-600 hover:shadow-lg transition-all whitespace-nowrap"
                >
                  计算您的费用
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>
                <Link
                  href="/zh/contact"
                  className="inline-flex items-center justify-center gap-2 text-primary font-semibold px-6 py-3.5 rounded-full border border-primary/20 hover:bg-primary-50 transition-all text-base whitespace-nowrap"
                >
                  或咨询顾问
                </Link>
              </div>
              <p className="text-xs text-gray-400">无需注册。估算仅供参考——最终价格在评估后确认。</p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                  title: '选择您的中心',
                  desc: '比较我们在八打灵再也、巴生、加影、蒲种和新山的5个中心的价格。',
                },
                {
                  icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
                  title: '定制护理需求',
                  desc: '选择房间类型、喂食协助、伤口护理、康复治疗、失智症护理等。',
                },
                {
                  icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                  title: '即时查看估算',
                  desc: '透明的每月费用明细，无隐藏费用。起价 RM 2,500/月。',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-11 h-11 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">为什么选择我们</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              家庭信赖 Genesis Life Care 的原因
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              凭借十多年的老年护理经验，我们将医疗专业知识与真挚的关怀相结合。每个家庭都能从我们专业的护士和护理团队获得个性化的关注。
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 mb-12">
            <div className="lg:col-span-3 rounded-2xl overflow-hidden">
              <img
                src="/images/general/comprehensive-care.png"
                alt="Genesis Life Care 全面医疗护理"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {[
                { value: '10+', label: '年经验', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-primary to-primary-700' },
                { value: '150+', label: '护理人员', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', color: 'from-secondary to-secondary-600' },
                { value: '5', label: '护理中心', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', color: 'from-primary to-primary-700' },
                { value: '4.8★', label: '谷歌评分', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', color: 'from-gold to-gold-500', filled: true },
                { value: '500+', label: '服务家庭', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'from-secondary to-secondary-600' },
                { value: 'JKM', label: '政府认证', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', color: 'from-primary-700 to-primary-800' },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-2`}>
                    <svg className="w-5 h-5 text-white" fill={(s as any).filled ? 'currentColor' : 'none'} stroke={(s as any).filled ? 'none' : 'currentColor'} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg>
                  </div>
                  <span className="block text-2xl font-extrabold text-gray-900">{s.value}</span>
                  <span className="text-[11px] text-gray-500 font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                title: '实惠优质护理',
                desc: '所有中心价格透明，收费合理，无隐藏费用。',
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                gradient: 'from-primary to-primary-700',
              },
              {
                title: '个性化护理计划',
                desc: '每位住户都有量身定制的护理计划，定期与家属一起审查。',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                gradient: 'from-secondary to-secondary-600',
              },
              {
                title: '透明实惠定价',
                desc: '无隐藏收费。套餐起价 RM 2,500/月，付款方式灵活。',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                gradient: 'from-primary-700 to-primary-800',
              },
            ].map((item, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                </div>
                <strong className="block text-base font-bold text-gray-900 mb-2">{item.title}</strong>
                <span className="text-sm text-gray-500 leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOME CARE SOLUTIONS ──────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase text-secondary mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                居家护理方案
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                聘请受过培训的家庭护理助手
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                通过 Agensi Pekerjaan GLC，我们从印尼和菲律宾招募并培训专门从事老年护理和家庭护理的家庭助手。每位助手在被安排到您的家庭之前，都会在 Genesis Life Care 接受内部培训——确保他们从第一天起就能提供专业、贴心的护理服务。
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  '助手来自印尼和菲律宾',
                  '由 Genesis Life Care 内部培训老年护理、卫生和安全',
                  '持牌机构（JTKSM）——完全合法合规',
                  '住家护理——陪伴、烹饪、行动协助等',
                  '安置后 GLC 持续提供支持',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://agency.genesiscare.com.my"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-md"
                >
                  了解更多
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <a
                  href="https://wa.me/60123210457?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20hiring%20a%20domestic%20helper%20for%20home%20care."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary px-6 py-3 rounded-full text-sm font-bold hover:bg-secondary hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp 咨询
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 sm:p-10 border border-secondary/10">
              <h3 className="text-lg font-bold text-gray-900 mb-6">流程说明</h3>
              <div className="flex flex-col gap-5 mb-8">
                {[
                  { step: '1', title: '告诉我们您的需求', desc: '分享您的护理需求——协助类型、语言偏好、住家或兼职。' },
                  { step: '2', title: '我们招募并培训', desc: '我们从印尼或菲律宾招募助手，并在 Genesis Life Care 中心进行老年护理、卫生和安全培训。' },
                  { step: '3', title: '面见您的助手', desc: '查看候选人资料，进行面试，为您的家庭选择合适的人选。' },
                  { step: '4', title: '安置与支持', desc: '您的助手准备就绪即可开始护理。我们持续提供跟进和支持。' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <strong className="block text-sm font-bold text-gray-900">{item.title}</strong>
                      <span className="text-sm text-gray-500 leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'GLC', label: '机构培训', gold: false },
                  { value: 'JTKSM', label: '持牌', gold: false },
                  { value: '5★', label: '满意度', gold: true },
                ].map((s, i) => (
                  <div key={i} className={`rounded-xl p-4 text-center shadow-sm ${s.gold ? 'bg-gold' : 'bg-white'}`}>
                    <span className={`block text-xl font-extrabold ${s.gold ? 'text-white' : 'text-gray-900'}`}>{s.value}</span>
                    <span className={`text-[10px] font-medium ${s.gold ? 'text-white/80' : 'text-gray-500'}`}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS & GUIDES ─────────────────────────────────────── */}
      {recentPosts.length > 0 && (
        <section className="bg-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">资源</span>
              <h2 className="text-3xl font-bold text-gray-900">最新资讯与指南</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.slice(0, 3).map((post: any) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden group"
                >
                  {post.featured_image_url && (
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    {post.category && (
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                    )}
                    <h3 className="text-base font-bold text-gray-900 mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-3">
                      {post.published_at
                        ? new Date(post.published_at).toLocaleDateString('zh-CN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        : ''}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {recentPosts.length > 3 && (
              <div className="text-center mt-8">
                <Link href="/blog" className="text-primary font-bold hover:text-primary-600 transition-colors">
                  查看所有文章 →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── FAQ SECTION ──────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">常见问题</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">常见问题解答</h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    q: '新山养老院护理费用是多少？',
                    a: 'Genesis Life Care 新山中心提供实惠的养老院套餐，起价 RM 2,500/月。费率根据房间类型和所需护理等级而有所不同。所有价格透明，无隐藏费用。使用我们的在线费用计算器或联系我们获取个性化报价。',
                  },
                  {
                    q: '新山中心提供哪些类型的护理？',
                    a: '我们提供全面的老年护理服务，包括24/7护理、失智症和记忆护理、中风康复、术后恢复护理、临终关怀和短期喘息护理。每位住户都有个性化的护理计划。',
                  },
                  {
                    q: 'Genesis Life Care 新山中心是否获得政府批准？',
                    a: '是的，Genesis Life Care 新山中心已在 JKM（社会福利部）注册并获得批准。我们还持有 AgeCope 认证，符合国际老年护理质量标准。',
                  },
                  {
                    q: '我可以在做决定之前参观新山中心吗？',
                    a: '当然可以。我们鼓励家庭预约免费参观和咨询。我们的护理顾问将带您参观设施，解释我们的护理计划，并帮助您为亲人找到合适的解决方案。',
                  },
                  {
                    q: 'Genesis Life Care 新山中心位于哪里？',
                    a: '我们位于 Level 6, Holiday Plaza Tower, Jalan Dato Sulaiman, Taman Century, 80250 Johor Bahru, Johor。中心交通便利，方便新山及周边地区的家庭前来。',
                  },
                ].map((item, i) => (
                  <details key={i} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-bold text-gray-900 text-base hover:bg-gray-100 transition-colors">
                      {item.q}
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{item.a}</div>
                  </details>
                ))}
              </div>

              <div className="bg-primary-50 rounded-2xl p-6 border border-primary/10 mt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">还有疑问？</h3>
                <p className="text-sm text-gray-500 mb-4">我们的护理顾问很乐意为您提供帮助。直接联系我们或预约免费参观新山中心。</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${centre.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    联系我们
                  </a>
                  <Link
                    href="/zh/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all"
                  >
                    预约免费参观
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/general/comprehensive-care-2.png"
                  alt="Genesis Life Care 专业护理"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
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
                    <p className="text-sm text-gray-500">探访时间：每日 9:00 AM – 6:00 PM</p>
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
                  href={`https://wa.me/60192820457`}
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
            <p className="text-gray-500 mt-3">不在新山？我们在整个马来西亚还有4个地点。</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">准备好迈出下一步了吗？</h2>
          <p className="hp-sub text-lg text-white mb-8 max-w-2xl mx-auto">
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
