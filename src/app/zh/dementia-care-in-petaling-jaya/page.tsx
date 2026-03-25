import { Metadata } from 'next';
import Link from 'next/link';
import { centres, getOtherCentres } from '@/data/centres';

export const metadata: Metadata = {
  title: '八打灵再也失智症护理 - Genesis Life Care',
  description: '八打灵再也专业失智症护理。心理学家主导的记忆护理计划、认知刺激、安全环境和个性化护理计划。评分 4.9★。在 Genesis Life Care 八打灵再也预约免费参观。',
};

export const revalidate = 60;

const centre = {
  name: 'Petaling Jaya',
  fullName: 'Genesis Life Care 八打灵再也',
  slug: 'nursing-home-in-petaling-jaya',
  phone: '+6019 295 0457',
  phoneCTA: '+6019-295-0457',
  address: 'Lot 1, Petaling Utama Avenue, Jalan PJS 1/50, Taman Petaling Utama, 46150 Petaling Jaya, Selangor',
  rating: '4.9',
  reviews: 155,
  beds: '50+',
  img: '/images/pj-centre.jpg',
};

const dementiaFeatures = [
  {
    title: '心理学家主导计划',
    desc: '由本中心心理学家设计和监督的结构化认知刺激疗法，帮助保持心智功能并减缓认知下降。',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: '安全可靠的环境',
    desc: '目的设计的空间配备跌倒预防措施、安全的场所和 24 小时监督，确保失智症患者的安全和舒适。',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: '日常活动与参与',
    desc: '艺术治疗、音乐课程、温和运动和社交活动，根据每位住户的能力和兴趣量身定制。',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: '家庭支持与教育',
    desc: '照顾者培训、定期更新和帮助家庭理解和共同应对失智症的指导。',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: '个性化护理计划',
    desc: '每位住户都会获得个性化的护理计划，根据其失智症阶段、个人历史、偏好和具体需求量身定制。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  },
];

const services = [
  { title: '老年护理', desc: '全天候专业护理，为每位住户制定个性化护理计划。', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', link: '/zh/our-services', highlight: false },
  { title: '失智症与记忆护理', desc: '由心理学家主导的失智症护理和结构化认知刺激活动。', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', link: '/zh/dementia-care', highlight: true },
  { title: '中风康复', desc: '全面的物理和职业治疗，帮助中风患者恢复独立生活能力。', icon: 'M13 10V3L4 14h7v7l9-11h-7z', link: '/zh/stroke-rehabilitation-centre', highlight: false },
  { title: '纾缓护理', desc: '以舒适、尊严和家庭支持为重点的人性化临终关怀。', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', link: '/zh/palliative-care-malaysia', highlight: false },
  { title: '术后康复', desc: '手术后的短期康复 — 在专家护理下快速恢复。', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4', link: '/zh/post-op-care-malaysia', highlight: false },
  { title: '老年日间护理', desc: '有社交活动、膳食和监督的日间护理计划。', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z', link: '/zh/senior-daycare', highlight: false },
];

const faqs = [
  { q: 'Genesis Life Care 八打灵再也提供哪些失智症护理服务？', a: '我们的八打灵再也中心提供全面的失智症护理，包括心理学家主导的认知刺激疗法、结构化日常活动、艺术和音乐治疗、具有跌倒预防措施的安全环保，以及个性化护理计划。' },
  { q: 'Genesis Life Care 如何对待八打灵再也的失智症护理？', a: 'Genesis Life Care 采用心理学家主导的失智症护理方法。我们的计划由合格的心理学家设计和监督，创建结构化的认知刺激活动。结合 24/7 护理和医生咨询，我们提供全面支持。' },
  { q: '我应该注意哪些早期失智症迹象？', a: '常见的早期警示迹象包括持久的记忆丧失、执行熟悉任务的困难、对时间或地点的困惑、语言问题、频繁丢失物品、情绪变化和社交活动退缩。如果您注意到这些迹象，请咨询医生。' },
  { q: '八打灵再也中心对失智症患者是否安全？', a: '是的。我们的中心在设计时就考虑了失智症的安全性。我们有安全的场所防止走失、跌倒预防措施、24 小时监督、安全的结构化环境，帮助住户感到安心。' },
  { q: '在八打灵再也的失智症护理费用是多少？', a: 'Genesis Life Care 提供经济实惠的失智症护理费用。费用因护理水平和房间类型而异。请联系我们获取个性化报价。' },
  { q: '家庭成员是否可以随时访问失智症患者？', a: '绝对可以。我们鼓励定期家庭访问。我们还提供家庭教育和照顾者培训，帮助您理解这种疾病并有效沟通。' },
];

const centreData = centres['petaling-jaya'];
const otherCentres = getOtherCentres(centreData.name);

export default function DementiaCarePJZh() {
  return (
    <main className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `.hero-dark { color: inherit; } .hero-dark * { color: inherit; } .hero-dark .text-white { color: #ffffff !important; }` }} />

      {/* HERO */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gold text-gray-900 text-xs font-bold px-3 py-1 rounded-full">失智症护理</span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">★ {centre.rating}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">八打灵再也失智症护理</h1>
              <p className="text-lg text-white mb-8">Genesis Life Care 八打灵再也提供专业失智症护理，采用心理学家主导的计划、24/7 护理和安全环境。</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-400 text-sm">
                  预约免费参观 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <a href={`tel:${centre.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3.5 rounded-xl text-sm">
                  致电 {centre.phoneCTA}
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={centre.img} alt="Genesis Life Care 八打灵再也" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="bg-gray-50 border-b py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {centreData.highlights.map((h, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-extrabold text-primary">{h.value}</p>
                <p className="text-sm font-semibold text-gray-700 mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">理解失智症与专业护理</h2>
          <div className="space-y-4 text-gray-600">
            <p>失智症是一种进行性疾病，影响记忆、思维和日常活动能力。随着人口老龄化，专业失智症护理变得越来越重要。</p>
            <p>早期迹象包括记忆丧失、任务困难、时间或地点困惑、情绪变化和社交退缩。</p>
            <p>在 Genesis Life Care 八打灵再也，我们的失智症护理由合格的心理学家主导，采用结构化认知刺激计划。结合 24/7 护理，我们帮助住户保持尊严和生活质量。</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">我们的失智症护理方法</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dementiaFeatures.map((feat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-500">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">我们的服务</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link key={i} href={svc.link} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md group">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-500">{svc.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4">了解更多</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY & TESTIMONIALS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">我们的设施</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {centreData.facilityImages?.map((img, i) => (
                <img key={i} src={img.src} alt={img.alt || `设施 ${i + 1}`} className="rounded-xl h-64 object-cover shadow-sm" />
              )) || null}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">家属心声</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {centreData.testimonials?.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <p className="font-bold text-gray-900 text-sm mb-2">{t.author}</p>
                  <p className="text-sm text-gray-600">{t.text}</p>
                </div>
              )) || null}
            </div>
          </div>
        </div>
      </section>

      {/* CENTRE INFO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">访问我们的八打灵再也中心</h2>
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="grid md:grid-cols-2">
              <img src={centre.img} alt={centre.fullName} className="h-64 md:h-auto object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{centre.fullName}</h3>
                <p className="text-gray-600 mb-6">{centre.address}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded p-3 text-center">
                    <p className="text-2xl font-bold text-primary">{centre.beds}</p>
                    <p className="text-xs text-gray-500">床位数</p>
                  </div>
                  <div className="bg-gray-50 rounded p-3 text-center">
                    <p className="text-2xl font-bold text-primary">24/7</p>
                    <p className="text-xs text-gray-500">护理</p>
                  </div>
                </div>
                <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-3 rounded-lg text-sm">
                  预约免费参观 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">常见问题</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="text-gray-600 text-sm mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="hero-dark bg-gradient-to-r from-primary via-primary-800 to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">八打灵再也专业失智症护理</h2>
          <p className="text-white mb-8">访问我们的中心进行免费参观。与心理学家和护理团队见面，了解我们如何支持家庭。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-4 rounded-xl">
              预约免费参观 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a href={`tel:${centre.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-4 rounded-xl">
              致电 {centre.phoneCTA}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
