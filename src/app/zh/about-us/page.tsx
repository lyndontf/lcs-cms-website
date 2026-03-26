import { Fragment } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getSiteSettings } from '@/lib/supabase';

export const metadata: Metadata = {
  title: '关于Genesis Life Care — 马来西亚值得信赖的护老院运营商',
  description:
    '了解Genesis Life Care，自2018年以来在雪兰莪和柔佛运营5家护老院。150多名训练有素的护士、护理工作者和治疗师提供富有爱心的、政府认可的老年护理。JKM注册、AgeCope认证。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/about-us',
  },
  openGraph: {
    title: '关于Genesis Life Care — 马来西亚值得信赖的护老院运营商',
    description: '在雪兰莪和柔佛拥有5家护老院。150多名护理专业人员。自2018年获政府认可。',
    url: 'https://genesiscare.com.my/zh/about-us',
    siteName: 'Genesis Life Care',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/general/staff-care.jpg', width: 1200, height: 630, alt: 'Genesis Life Care团队照顾老年居民' }],
  },
};

export const revalidate = 60;

const team = [
  {
    name: 'Dr. Harvey Phoon',
    role: '医疗主管',
    bio: '监督所有Genesis中心的医疗护理',
    img: '/images/team/team-1.png',
  },
  {
    name: 'Angeline Lee',
    role: '运营经理',
    bio: '确保所有设施的护理标准一致',
    img: '/images/team/team-2.png',
  },
  {
    name: 'Jason Tan',
    role: '护理经理',
    bio: '领导护理团队和临床护理方案',
    img: '/images/team/team-3.png',
  },
  {
    name: 'Khadijah',
    role: '物理治疗与康复主管',
    bio: '为中风和行动恢复设计康复计划',
    img: '/images/team/team-4.png',
  },
  {
    name: 'Loh Yuen Yen',
    role: '驻院心理学家',
    bio: '支持居民的心理健康和情感福祉',
    img: '/images/team/team-5.png',
  },
  {
    name: 'Chia Li Jia',
    role: '注册营养师',
    bio: '为不同饮食需求制定个性化营养计划',
    img: '/images/team/team-6.png',
  },
  {
    name: 'Sherrelyn',
    role: '高级物理治疗师',
    bio: '专攻中风恢复和行动康复',
    img: '/images/team/team-7.png',
  },
  {
    name: 'Joharry Mustafa',
    role: '主管',
    bio: '协调日常护理运营和员工排班',
    img: '/images/team/team-8.png',
  },
  {
    name: 'Seow Zhi Heng',
    role: '高级治疗师',
    bio: '领导治疗活动和患者参与计划',
    img: '/images/team/team-9.png',
  },
];

const stats = [
  { value: '530+', label: '管理下的床位' },
  { value: '150+', label: '经过培训的专业人员' },
  { value: '5', label: '护理中心' },
  { value: '600', label: '资助的奖学金' },
];

const milestones = [
  { year: '2018', title: '在巴生成立', desc: 'Genesis Life Care在巴生开设第一个中心，致力于提高马来西亚长期护理标准。' },
  { year: '2019', title: '扩展到八打灵再也', desc: '我们的旗舰PJ中心开放，设有增强的康复和专门的失智症护理部。' },
  { year: '2021', title: '加影和蒲种', desc: '两个新中心使Genesis更接近巴生谷南部走廊的家庭。' },
  { year: '2023', title: '柔佛新山', desc: '我们巴生谷外的第一个中心，为柔佛新山及更广泛的南部地区的家庭提供服务。' },
  { year: '2024', title: 'HRDF培训学院', desc: '推出我们由HRDF注册的护理工作者培训计划，提供600个奖学金机会。' },
];

export default async function AboutPageZh() {
  const settings = await getSiteSettings();

  return (
    <>
      {/* ─── 英雄横幅 ─── */}
      <section className="hp-hero relative overflow-hidden">
        <img
          src="/images/general/dr-sue-rounds.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary/85 to-secondary/80" />
        <div className="absolute -top-[20%] -right-[10%] w-[55%] pb-[55%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase mb-6">
            <span className="w-6 h-0.5 bg-gold rounded" />
            关于我们
            <span className="w-6 h-0.5 bg-gold rounded" />
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6 max-w-3xl mx-auto">
            长期护理的信任品牌
          </h1>
          <p className="hp-sub text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            每个家庭都值得安心。自2018年以来，我们已帮助超过500个家庭找到合适的护理 — 在马来西亚5个中心拥有150多名专业人士的支持。
          </p>
        </div>
      </section>

      {/* ─── 数据概览 ─── */}
      <section className="bg-white border-b border-gray-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <Fragment key={i}>
                {i > 0 && <div className="hidden sm:block w-px h-12 bg-gray-200" />}
                <div className="text-center flex-1 min-w-[100px]">
                  <span className="block text-4xl sm:text-5xl font-extrabold text-gray-700 leading-none">
                    {s.value}
                  </span>
                  <span className="text-xs text-gray-500 mt-1 font-medium">{s.label}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 我们是谁 ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
                我们是谁
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                马来西亚最大的长期护理运营商
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                Genesis Life Care在巴生谷和柔佛新山运营五家可负担护老院。拥有超过150名训练有素的护士、物理治疗师、营养师和护理工作者，我们为每位居民提供全天候医疗和个人护理。
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                让我们与众不同的是我们专有的护理运营系统 — 一个标准化框架，确保每位居民在每个中心都获得相同水平的高度关注。每个人都获得与其家人和多学科团队共同制定并定期审核的个性化护理计划。
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                我们也大量投资于人才。通过我们由HRDF注册的培训学院，我们已资助超过600个护理工作者奖学金 — 因为我们相信培训更好的护理工作者会为家庭带来更好的成果。
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/general/staff-care.jpg"
                alt="Genesis Life Care护理工作者协助老年居民进行康复"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 我们的历程 ─── */}
      <section className="bg-[#f4f8fb] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
              我们的历程
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              从一个中心到五个 — 持续增长
            </h2>
            <p className="text-gray-500 text-lg">
              从巴生的一个护老院开始，已经发展成马来西亚最大的长期护理网络。
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-primary/20" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex gap-5 sm:gap-6">
                  <div className="relative z-10 flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-primary flex items-center justify-center shadow-md">
                    <span className="text-xs sm:text-sm font-extrabold text-white">{m.year}</span>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{m.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 我们的目标 ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
                我们的目标
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                提升马来西亚护理标准
              </h2>
              <blockquote className="text-xl text-gray-600 italic leading-relaxed mb-6 border-l-4 border-primary pl-5">
                &ldquo;提升护理标准，为亲人提供安心，为我们的居民提供有尊严、无痛和充满喜悦的生活。&rdquo;
              </blockquote>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                我们相信每位居民都值得被了解 — 不仅作为患者，而是作为一个人。这就是为什么我们在每一步都与家庭紧密合作：从初步护理评估到月度进度评审、视频通话更新和开放的探访时间。
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                我们的护理团队每周开会审查每位居民的进展并调整护理计划。物理治疗目标、饮食偏好、用药时间表，甚至休闲活动都是个性化的 — 因为没有两位居民是相同的。
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/general/common-area-graded.png"
                alt="Genesis Life Care访客共用区"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 我们的优势 ─── */}
      <section className="bg-[#f4f8fb] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
              我们的优势
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              用心构建，与众不同
            </h2>
            <p className="text-gray-500 text-lg">
              我们不仅提供护理 — 我们建立了一套完整的系统来确保护理质量一致、可衡量，并持续改进。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">标准化护理系统</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                我们专有的运营系统确保五个中心的护理质量一致、可预测 — 无论您的亲人在哪个中心。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">HRDF培训学院</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                我们通过政府注册的计划培训自己的护理工作者。已资助超过600个奖学金，培养马来西亚下一代护理专业人才。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">多学科团队</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                医生、护士、物理治疗师、心理学家和营养师齐聚一堂 — 每周共同协作制定每位居民的护理计划。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">个性化护理</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                我们提供营养餐食、舒适设施和针对每位居民及家庭量身定制的个性化护理。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 认证资质 ─── */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
              认证资质
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              获认可及注册
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            <div className="flex flex-col items-center gap-3">
              <img src="/images/logos/jkm-logo.webp" alt="马来西亚可负担护老院" className="h-16 w-auto" />
              <span className="text-xs text-gray-500 font-medium text-center">可负担<br />收费</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src="/images/logos/agecope-logo.webp" alt="AgeCope认证" className="h-16 w-auto" />
              <span className="text-xs text-gray-500 font-medium text-center">AgeCope注册<br />会员</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src="https://hrdcorp.gov.my/wp-content/uploads/2021/02/KESUMA_HRDCorp_web.svg" alt="HRD Corp标志" className="h-16 w-auto" />
              <span className="text-xs text-gray-500 font-medium text-center">HRD Corp注册<br />培训提供商</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src="https://images.seeklogo.com/logo-png/38/1/jabatan-pembangunan-kemahiran-logo-png_seeklogo-388580.png" alt="JPK — 技能发展局标志" className="h-16 w-auto" />
              <span className="text-xs text-gray-500 font-medium text-center">注册TVET<br />培训提供商</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 认识团队 ─── */}
      <section className="bg-[#f4f8fb] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
              我们的团队
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              认识护理背后的团队
            </h2>
            <p className="text-gray-500 text-lg">
              由医疗专业人员、治疗师和护理工作者组成的多学科团队，每天共同协作提供最高标准的护理。
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center"
              >
                <div className="aspect-square w-full overflow-hidden bg-gray-100">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <span className="block text-sm font-bold text-gray-900">{member.name}</span>
                  <span className="block text-xs text-primary font-semibold mt-0.5">{member.role}</span>
                  <span className="block text-[11px] text-gray-400 mt-1 leading-snug">{member.bio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 家属评价 ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
              家属心声
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              受到数百个家庭的信赖
            </h2>
            <p className="text-gray-500 text-lg">
              听听那些将亲人托付给我们照顾的家庭怎么说。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#f4f8fb] rounded-2xl p-6 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                &ldquo;工作人员真心关心我的母亲。他们知道她的名字、她喜欢的食物，甚至她的日常习惯。感觉就像家庭的延伸。&rdquo;
              </p>
              <div>
                <span className="block text-sm font-bold text-gray-900">Sarah L.</span>
                <span className="text-xs text-gray-500">住户家属，PJ中心</span>
              </div>
            </div>

            <div className="bg-[#f4f8fb] rounded-2xl p-6 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                &ldquo;父亲中风后，我们不知所措。Genesis给了我们一个清晰的康复计划，物理治疗团队每天都与他一起工作。他的进步非常显著。&rdquo;
              </p>
              <div>
                <span className="block text-sm font-bold text-gray-900">Ahmad R.</span>
                <span className="text-xs text-gray-500">住户家属，巴生中心</span>
              </div>
            </div>

            <div className="bg-[#f4f8fb] rounded-2xl p-6 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                &ldquo;最让我们印象深刻的是优质餐食和温馨的空间。我的母亲感到被尊重和舒适。护理计划正是我们家庭所需要的。&rdquo;
              </p>
              <div>
                <span className="block text-sm font-bold text-gray-900">Nurul H.</span>
                <span className="text-xs text-gray-500">住户家属，加影中心</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/zh/our-gallery" className="text-primary font-bold hover:text-primary-600 transition-colors">
              阅读更多评价 →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 常见问题 ─── */}
      <section className="bg-[#f4f8fb] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
              关于我们的护理
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              关于Genesis Life Care的常见问题
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: '你们有哪些认证和注册？', a: 'Genesis Life Care 是在JKM（马来西亚卫生部）注册的可负担护老院运营商，AgeCope认证的马来西亚老年护理协会会员，以及HRDF注册的培训提供商。我们的培训学院还在JPK注册为TVET培训提供商。' },
              { q: '你们的工作人员有什么资质？', a: '我们的团队包括驻院医生、注册护士、物理治疗师、职业治疗师、心理学家和训练有素的护理工作者。所有临床工作人员都持有相关的马来西亚专业注册。我们通过HRDF注册的学院大量投资于持续培训。' },
              { q: '探访时间是否灵活？', a: '是的。我们保持开放的探访时间，让家属可以自由探望亲人。我们还为无法亲自探望的家属提供视频通话更新，并提供月度进度评审以让每个人了解情况。' },
              { q: '你们的收费是否透明？', a: '当然。我们所有的护老院都注册为可负担护理设施，提供透明、预先的定价。没有隐藏费用。费用通常从每月RM 2,500起，具体取决于所需的护理水平。' },
              { q: '住户可以在不同中心之间转移吗？', a: '可以。我们标准化的护理运营系统意味着住户可以在我们的5个中心之间转移，同时保持一致的护理质量和连续性。我们通过完整的护理计划交接来促进顺利过渡。' },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-100 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-left">
                  <span className="text-base font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 最终号召 ─── */}
      <section className="hp-cta relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] w-[60%] pb-[60%] rounded-full bg-white/[.06] pointer-events-none" />
        <div className="absolute -bottom-[50%] -left-[5%] w-[50%] pb-[50%] rounded-full bg-black/[.06] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            开启安心之旅
          </h2>
          <p className="hp-sub text-lg mb-8 max-w-2xl mx-auto">
            每个家庭都值得找到合适的护理伙伴。让我们帮助您了解为什么数百个家庭信任Genesis Life Care照顾他们的亲人。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zh/contact"
              className="hp-gold-btn inline-flex items-center justify-center gap-2 bg-gold text-gray-900 px-6 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:brightness-110 transition-all whitespace-nowrap"
            >
              预约免费参观
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href={`tel:${settings?.contact_phone || '+6012-321 0457'}`}
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-6 py-3.5 rounded-full text-base font-semibold hover:bg-white/25 transition-all whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              致电 {settings?.contact_phone || '+6012-321 0457'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
