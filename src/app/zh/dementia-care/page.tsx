import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '马来西亚失智症护理与记忆护理 | Genesis Life Care',
  description: '跨越 5 个中心的专业失智症和记忆护理。心理学家主导的认知刺激疗法 (CST)、每个中心的专业记忆护理部、训练有素的照顾者和家庭支持。预约免费咨询。',
};

export const revalidate = 60;

const highlights = [
  { label: '记忆护理中心', value: '5', sub: '遍布马来西亚' },
  { label: '心理学家主导', value: '✓', sub: '认知刺激疗法计划' },
  { label: '专业部门', value: '5', sub: '每个中心' },
  { label: '护理服务', value: '24/7', sub: '全天候' },
  { label: '经济实惠', value: '✓', sub: '所有中心' },
];

const features = [
  {
    title: '心理学家主导计划',
    desc: '我们的失智症护理计划由失智症和记忆护理专科的经验丰富的心理学家设计和监督。',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: '认知刺激疗法',
    desc: '循证 CST 课程通过结构化的小组和个人活动帮助保持和改善认知功能。',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: '安全的结构化环境',
    desc: '目的设计的空间减少困惑和焦虑，同时鼓励独立和自由活动。',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    title: '训练有素的专业照顾者',
    desc: '每位照顾者都接受过专门的记忆护理培训，涵盖沟通技巧、行为管理和同情支持。',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: '家庭支持与教育',
    desc: '定期的家庭支持课程、进展更新和关于理解和管理失智症的实际指导。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: '个性化活动计划',
    desc: '根据每位住户的兴趣、能力和阶段量身定制的日常例程和治疗活动。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
];

const conditions = [
  { name: "阿尔茨海默病", desc: '最常见的失智症形式，导致逐行性记忆丧失。我们的结构化 CST 计划帮助保持功能和生活质量。', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { name: '血管性失智症', desc: '通常在中风或脑血流减少后发生。我们的康复团队与记忆护理专家合作。', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { name: '帕金森病', desc: '影响运动和认知的疾病。我们的照顾者经过培训，能够管理帕金森氏症带来的独特挑战。', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { name: '路易体失智症', desc: '以波动认知、视幻觉和运动困难为特征。我们的团队提供耐心、自适应的护理。', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
  { name: '额颞叶失智症', desc: '影响个性、行为和语言。我们的心理学家制定解决特定行为挑战的针对性计划。', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
  { name: '混合型失智症', desc: '当多种类型的失智症同时发生时。我们的全面方法能够处理重叠症状。', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
];

const centres = [
  { name: '八打灵再也', slug: 'nursing-home-in-petaling-jaya', rating: '4.9', tag: '旗舰中心', img: '/images/pj-centre.jpg' },
  { name: '巴生', slug: 'nursing-home-in-klang', rating: '4.8', tag: '原始中心', img: '/images/klang-centre.jpg' },
  { name: '加影', slug: 'nursing-home-kajang', rating: '4.7', tag: '南部KV', img: '/images/kajang-centre.jpeg' },
  { name: '布城', slug: 'nursing-home-in-puchong', rating: '4.8', tag: '现代设施', img: '/images/puchong-centre.jpeg' },
  { name: '新山', slug: 'nursing-home-in-johor-bahru', rating: '4.8', tag: '南部地区', img: '/images/jb-centre.jpeg' },
];

const faqs = [
  { q: '失智症和阿尔茨海默病有什么区别？', a: '失智症是影响记忆、思维和社交能力的症状组的总称。阿尔茨海默病是最常见的失智症原因，占病例的 60-80%。' },
  { q: '我怎样知道我的父母是否需要记忆护理？', a: '常见迹象包括反复记忆丧失、在熟悉的地方迷路、管理药物困难、时间或地点困惑、个性变化和家庭安全问题。' },
  { q: '什么是认知刺激疗法 (CST)？', a: 'CST 是一个循证计划，涉及参与刺激活动的结构化小组课程。研究表明 CST 可以改善轻度至中度失智症患者的认知功能。' },
  { q: '我可以随时访问我的亲人吗？', a: '可以。Genesis Life Care 实行开放访问政策。我们鼓励定期访问和家庭参与，这是我们护理方法的核心。' },
  { q: '失智症护理要花多少钱？', a: '我们的费用因所需护理水平和中心地点而异。请联系我们了解个性化报价。' },
  { q: '你们是否在所有中心都提供失智症护理？', a: '可以。所有五个 Genesis Life Care 中心都有专门的记忆护理部，配备安全环境和训练有素的照顾者。' },
];

export default function DementiaCareZh() {
  return (
    <main className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `.hero-dark .text-white { color: #ffffff !important; }` }} />

      {/* HERO */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
                马来西亚的失智症<br />和记忆护理
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8">
                5 个中心的心理学家主导的认知刺激计划。每个中心都有专业记忆护理部，为阿尔茨海默病、失智症和帕金森病患者提供安全、结构化和同情的环境。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full shadow-lg">
                  预约免费咨询
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="tel:+60123210457" className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  致电 +6012-321-0457
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/images/services/common-area-scenic.jpg" alt="失智症护理的宁静休闲区" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-50 border-b py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-extrabold text-primary">{h.value}</p>
                <p className="text-xs font-bold text-gray-900 uppercase mt-1">{h.label}</p>
                <p className="text-xs text-gray-500">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNDERSTANDING DEMENTIA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">为什么专业护理很重要</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                失智症不是一种单一的疾病 — 它是影响记忆、思维、行为和日常活动能力的一系列病症的总称。随着人口老龄化，专业记忆护理变得比以往任何时候都更加重要。
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                标准的老年护理通常无法满足失智症住户的复杂需求。患有记忆疾病的人需要一个精心结构化的环境、训练有素的专业照顾者和基于证据的治疗计划。
              </p>
              <p className="text-gray-600 leading-relaxed">
                在 Genesis Life Care，我们的失智症护理计划由经验丰富的心理学家制定和监督。我们使用国际认可的方法，包括认知刺激疗法 (CST)。
              </p>
            </div>
            <img src="/images/services/family-visit-area.jpg" alt="记忆护理的家庭探访区" className="rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src="/images/services/nursing-station.jpg" alt="失智症患者的专业护理" className="rounded-2xl shadow-lg" />
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">心理学家主导的认知刺激</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                认知刺激疗法 (CST) 是一个循证计划，适用于轻度至中度失智症患者。在 Genesis Life Care，我们的心理学家定期主导 CST 课程。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                课程包括精心设计的活动混合，如词汇联想、音乐和声音辨别、创意表达、时事讨论和回忆练习。
              </p>
              <div className="space-y-3">
                {['结构化小组和个人 CST 课程', '音乐治疗和感觉刺激活动', '回忆和生活故事工作', '日常认知参与计划', '定期进展评估'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center">我们的记忆护理包括什么</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md">
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE CARE FOR */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center">我们为哪些患者提供护理</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-2">{c.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center">遍布马来西亚的失智症护理</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {centres.map((c, i) => (
              <Link key={i} href={`/zh/${c.slug.replace('nursing-home', 'dementia-care')}`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg">
                <img src={c.img} alt={`Genesis Life Care ${c.name}`} className="w-full h-40 object-cover group-hover:scale-105 transition" />
                <div className="p-3 text-center">
                  <h3 className="font-bold text-gray-900 text-sm">{c.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">★ {c.rating}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center">常见问题</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="bg-primary/10 text-primary rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</span>
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-10">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="hero-dark relative bg-gradient-to-r from-primary via-primary-800 to-secondary py-16 sm:py-20">
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">为您的亲人找到合适的失智症护理</h2>
          <p className="text-white/80 mb-8">预约免费咨询。访问我们的任何中心，与团队会面，了解我们的记忆护理计划 — 不承诺任何承诺。</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-4 rounded-full">
              预约免费咨询 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a href="tel:+60123210457" className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-bold px-6 py-4 rounded-full">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              致电 +6012-321-0457
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
