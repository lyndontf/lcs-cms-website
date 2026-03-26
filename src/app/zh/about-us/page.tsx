import { Fragment } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getSiteSettings } from '@/lib/supabase';

export const metadata: Metadata = {
  title: '关于Genesis Life Care - 马来西亚领先的长期护理',
  description:
    '了解Genesis Life Care中心，马来西亚最大的长期护理运营商，拥有150多名经过培训的专业人员。自2018年以来提供个性化护理。',
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
];

const stats = [
  { value: '530+', label: '管理下的床位' },
  { value: '150+', label: '经过培训的专业人员' },
  { value: '5', label: '护理中心' },
  { value: '600', label: '资助的奖学金' },
];

const milestones = [
  { year: '2018', title: '在Klang成立', desc: 'Genesis Life Care在Klang开设第一个中心，致力于提高马来西亚长期护理标准。' },
  { year: '2019', title: '扩展到Petaling Jaya', desc: '我们的旗舰PJ中心开放，设有增强的康复和专门的失智症护理部。' },
  { year: '2021', title: 'Kajang和Puchong', desc: '两个新中心使Genesis更接近克城谷走廊南部的家庭。' },
  { year: '2023', title: 'Johor Bahru', desc: '我们克城谷外的第一个中心，为Johor Bahru及更广泛的南部地区的家庭提供服务。' },
  { year: '2024', title: 'HRDF培训学院', desc: '推出我们由HRDF注册的护理工作者培训计划，提供600个奖学金机会。' },
];

export default async function AboutPageZh() {
  const settings = await getSiteSettings();

  return (
    <>
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
            每个家庭都值得心安。自2018年以来，我们已帮助超过500个家庭找到合适的护理 — 在马来西亚5个中心拥有150多名专业人士的支持。
          </p>
        </div>
      </section>

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
                Genesis Life Care在克城谷和Johor Bahru运营五家可负担护理之家。拥有超过150名经过培训的护士、物理治疗师、营养师和护理工作者，我们提供针对每个居民的昼夜医疗和个人护理。
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                让我们与众不同的是我们专有的护理运营系统 — 一个标准化框架，确保每个居民在每个中心都获得相同的高度关注。每个人都获得与其家人和多学科团队共同制定的个性化护理计划，定期审核。
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                我们也大量投资于我们的人才。通过我们由HRDF注册的培训学院，我们已资助超过600个护理工作者奖学金 — 因为我们相信更好的培训护理工作者会为家庭带来更好的成果。
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
              从Klang的一个护理之家开始，已经发展成马来西亚最大的长期护理网络。
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
                &ldquo;提升护理标准，为亲人提供心安，为我们的居民提供有尊严、无痛和充满喜悦的生活。&rdquo;
              </blockquote>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                我们相信每个居民都值得被认识 — 不仅作为患者，而是作为一个人。这就是为什么我们在每一步涉及家庭：从初步护理评估到月度进度评审、视频通话更新和开放的访问时间。
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                我们的护理团队每周开会审查每个居民的进度并调整其护理计划。物理治疗目标、饮食偏好、用药时间表，甚至娱乐活动都是个性化的 — 因为没有两个居民是相同的。
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

      <section className="hp-cta relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] w-[60%] pb-[60%] rounded-full bg-white/[.06] pointer-events-none" />
        <div className="absolute -bottom-[50%] -left-[5%] w-[50%] pb-[50%] rounded-full bg-black/[.06] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            亲眼来看
          </h2>
          <p className="hp-sub text-lg mb-8 max-w-2xl mx-auto">
            了解Genesis是否适合您的家庭的最佳方式是访问。预约任何中心的免费参观 — 没有义务、没有压力。
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
