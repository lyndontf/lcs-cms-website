import { Metadata } from 'next';
import Link from 'next/link';
import { centres, getOtherCentres } from '@/data/centres';

export const metadata: Metadata = {
  title: '布城失智症护理 - Genesis Life Care',
  description: '布城专业失智症护理。心理学家主导的记忆护理计划、认知刺激、安全环境和个性化护理计划。评分 4.8★。在 Genesis Life Care 布城预约免费参观。',
};

export const revalidate = 60;

const centre = {
  name: 'Puchong',
  fullName: 'Genesis Life Care 布城',
  slug: 'nursing-home-in-puchong',
  phone: '+6019 759 0457',
  phoneCTA: '+6019-759-0457',
  address: '16, Jln TPP 1/1, Taman Perindustrian Puchong, 47100 Puchong, Selangor',
  rating: '4.8',
  reviews: 58,
  beds: '120+',
  img: '/images/puchong-centre.jpeg',
};

const dementiaFeatures = [
  { title: '心理学家主导计划', desc: '由本中心心理学家设计和监督的结构化认知刺激疗法。', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { title: '安全可靠的环境', desc: '目的设计的空间配备跌倒预防措施和 24 小时监督。', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { title: '日常活动与参与', desc: '艺术治疗、音乐课程和社交活动，根据能力量身定制。', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: '家庭支持与教育', desc: '照顾者培训和关于您亲人的定期更新。', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { title: '个性化护理计划', desc: '每位住户都会获得根据其阶段和需求量身定制的护理计划。', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
];

const faqs = [
  { q: 'Genesis Life Care 布城提供哪些失智症护理服务？', a: '我们的布城中心提供全面的失智症护理，包括心理学家主导的认知刺激疗法、结构化日常活动、艺术和音乐治疗、安全环保和个性化护理计划。' },
  { q: 'Genesis Life Care 如何对待布城的失智症护理？', a: 'Genesis Life Care 在我们的布城中心采用心理学家主导的失智症护理方法。我们的计划由合格的心理学家设计和监督。结合 24/7 护理，我们提供全面的失智症支持。' },
  { q: '我应该注意哪些早期失智症迹象？', a: '常见的早期警示迹象包括持久的记忆丧失、执行熟悉任务的困难、对时间或地点的困惑、情绪变化和社交活动退缩。如果您注意到这些迹象，请咨询医生。' },
  { q: '布城中心对失智症患者是否安全？', a: '是的。我们的布城中心是一个现代设施，在设计时就考虑了失智症的安全性。我们有安全的场所防止走失、跌倒预防措施、24 小时监督和安全的结构化环境。' },
  { q: '在布城的失智症护理费用是多少？', a: 'Genesis Life Care 在我们的布城中心提供经济实惠的失智症护理费用。费用因护理水平和房间类型而异。请联系我们获取个性化报价。' },
  { q: 'Genesis Life Care 为布城附近的哪些地区提供失智症护理服务？', a: '我们的布城中心为中部吉隆坡谷的家庭提供服务，包括布城、梳邦再也、USJ、晋中、格灵芝和周围地区。' },
];

const centreData = centres['puchong'];
const otherCentres = getOtherCentres(centreData.name);

export default function DementiaCarePuchongZh() {
  return (
    <main className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `.hero-dark { color: #ffffff; } .hero-dark * { color: inherit; }` }} />

      {/* HERO */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">布城失智症护理</h1>
              <p className="text-lg mb-8">Genesis Life Care 布城提供专业失智症护理，采用心理学家主导的计划、24/7 护理和安全现代环境，服务于布城、梳邦再也和周围地区的家庭。</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-3.5 rounded-xl text-sm">
                  预约免费参观 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <a href={`tel:${centre.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3.5 rounded-xl text-sm">
                  致电 {centre.phoneCTA}
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={centre.img} alt={centre.fullName} className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* KEY STATS */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {centreData.highlights?.map((h, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-extrabold text-primary">{h.value}</p>
                <p className="text-sm font-semibold text-gray-700 mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">理解失智症与专业护理</h2>
          <p className="text-gray-600 mb-4">失智症是一种进行性疾病。早期迹象包括记忆丧失、任务困难和情绪变化。</p>
          <p className="text-gray-600">在 Genesis Life Care 布城 — 我们的现代设施 — 我们的失智症护理由合格的心理学家主导，设计结构化的认知刺激计划。结合 24 小时护理，我们帮助住户保持尊严和生活质量。</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">我们的失智症护理方法</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dementiaFeatures.map((feat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-500">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY & TESTIMONIALS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">我们的设施</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {centreData.facilityImages?.map((img, i) => (
                <img key={i} src={img.src} alt={img.alt || `设施 ${i}`} className="rounded-xl h-64 object-cover shadow-sm" />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">家属心声</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {centreData.testimonials?.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border">
                  <p className="font-bold text-gray-900 text-sm mb-2">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CENTRE DETAILS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">访问我们的布城中心</h2>
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <div className="grid md:grid-cols-2">
              <img src={centre.img} alt={centre.fullName} className="h-64 md:h-auto object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{centre.fullName}</h3>
                <p className="text-gray-600 mb-6">{centre.address}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded p-3 text-center">
                    <p className="text-2xl font-bold text-primary">{centre.beds}</p>
                    <p className="text-xs text-gray-500">床位</p>
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
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">常见问题</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  {faq.q}
                </summary>
                <p className="text-gray-600 text-sm mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark bg-gradient-to-r from-primary via-primary-800 to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">布城专业失智症护理</h2>
          <p className="mb-8">访问我们的中心进行免费参观。与心理学家和护理团队见面。</p>
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
