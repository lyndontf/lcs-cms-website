import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '马来西亚居家护理与居家护理服务',
  description:
    '遍布巴生谷的专业居家护理与居家看护 —— 受训、经审核的护理员与护士，由创世监督。可选灵活上门护理，或全职住家看护。欢迎预约免费居家评估。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/home-care',
    languages: {
      en: 'https://genesiscare.com.my/home-care',
      'x-default': 'https://genesiscare.com.my/home-care',
    },
  },
  openGraph: {
    title: '马来西亚居家护理与居家护理服务 | 创世生命关怀',
    description: '遍布巴生谷、由护士监督的居家护理 —— 居家护理、个人照护、物理治疗与出院后支持。可选上门护理或住家看护。',
    url: 'https://genesiscare.com.my/zh/home-care',
    siteName: '创世生命关怀',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/homecare-care.jpg', width: 1200, height: 630, alt: '创世生命关怀居家护理' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: '覆盖范围', value: '巴生谷', sub: '居家照护' },
  { label: '护理员', value: '受训', sub: '审核与监督' },
  { label: '监督', value: '护士主导', sub: '创世监督' },
  { label: '灵活', value: '✓', sub: '上门或住家' },
  { label: '免费', value: '✓', sub: '居家评估' },
];

const services = [
  {
    title: '居家护理',
    desc: '伤口护理、导管与鼻胃管/胃造口（NG/PEG）护理、注射，以及定期生命体征监测 —— 将临床护理送到您家中。',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: '个人护理与陪伴',
    desc: '协助沐浴、喂食、穿衣与行动 —— 并提供温暖的陪伴，让长者不再孤单。',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: '物理治疗与行动能力',
    desc: '居家物理治疗与行动支持，帮助长者保持活力、恢复体力并安全活动。',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: '出院后与医疗陪诊',
    desc: '出院后的康复照护，以及由受训人员陪同长者安全前往就医。',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

const steps = [
  { n: '1', title: '咨询', desc: '致电或 WhatsApp，告诉我们长者的需求。' },
  { n: '2', title: '免费居家评估', desc: '我们上门免费评估照护需求。' },
  { n: '3', title: '护理方案与匹配', desc: '规划照护，并匹配合适的护士或受训护理员。' },
  { n: '4', title: '持续支持', desc: '由我们的护理团队提供并监督照护，随时为您提供支持。' },
];

const faqs = [
  {
    q: '你们提供哪些居家护理服务？',
    a: '居家护理（伤口护理、导管与鼻胃管/胃造口护理、注射、生命体征监测）、个人护理与陪伴、物理治疗与行动支持，以及出院后康复照护与医疗陪诊。',
  },
  {
    q: '你们在哪些地区提供居家护理？',
    a: '遍布巴生谷。请联系我们确认您所在地区的覆盖情况。',
  },
  {
    q: '由谁提供照护？是否有监督？',
    a: '照护由我们自己的护士以及受训、经审核的护理员提供，并由创世护理团队监督 —— 与我们中心一贯的照护标准相同。',
  },
  {
    q: '居家护理的费用是多少？',
    a: '取决于照护类型。上门护理按次或按小时收费。若您希望聘请全职住家看护，我们可通过持牌中介安置一位受训、经审核的看护，收取一次性中介费。免费评估将为您提供确切报价。',
  },
  {
    q: '可以聘请长期住家看护吗？',
    a: '可以。通过我们的持牌安置中介（Agensi Pekerjaan GLC），我们可为您的家庭匹配一位受训、经审核的看护，安排全职住家照护 —— 收取一次性中介费。',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function HomeCareZh() {
  return (
    <main className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div { color: inherit; }
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div,
        .hero-dark .text-4xl, .hero-dark .text-5xl, .hero-dark .sm\\:text-5xl,
        .hero-dark .text-3xl, .hero-dark .text-lg, .hero-dark .text-sm,
        .hero-dark .text-white { color: #ffffff !important; }
        .hero-dark .text-gray-900 { color: rgb(17 24 39) !important; }
        .hero-dark .text-gold { color: #FAB515 !important; }
      ` }} />

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">居家护理</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                专业照护，<br className="hidden sm:block" />尽在家的舒适中
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                受训、经审核的护理员与护士 —— 由创世监督 —— 将优质照护带到长者家中，遍布巴生谷。可选灵活上门护理，或全职住家看护。
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/zh/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                  预约免费评估
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="tel:+60193250457" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                  致电 +6019-325-0457
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <img src="/images/services/homecare-care.jpg" alt="创世护理员提供居家护理" className="rounded-2xl shadow-2xl w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {highlights.map((h, i) => (
              <div key={i}>
                <p className="text-2xl font-extrabold text-primary">{h.value}</p>
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mt-1">{h.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">我们为您家中带来什么</h2>
            <p className="text-lg text-gray-600">与我们中心同样的照护品质 —— 送到长者最感舒适的地方。</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO WAYS ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">两种居家照护方式</h2>
            <p className="text-lg text-gray-600">选择最适合您家庭的安排。</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">上门护理</h3>
              <p className="text-gray-600 leading-relaxed mb-4">灵活的居家护理与看护，依您的需求安排 —— 从偶尔上门到每日支持皆可。按次或按小时收费。</p>
              <span className="inline-block text-xs font-bold text-secondary uppercase tracking-wider">按次或按小时收费</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">全职住家看护</h3>
              <p className="text-gray-600 leading-relaxed mb-4">需要全天候支持？通过我们的持牌中介（Agensi Pekerjaan GLC），我们安置一位受训、经审核的看护住家照护长者 —— 收取一次性中介费。</p>
              <span className="inline-block text-xs font-bold text-secondary uppercase tracking-wider">一次性中介费</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY GENESIS ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">为何家属选择创世居家护理</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            我们的护理员由自家学院培训、经持牌中介安置，并由护理团队监督 —— 正是支撑我们五间照护中心的同一套生态体系。因此，在家中照顾您长者的人，是我们亲自培训、审核并为其负责的人。
          </p>
          <div className="mt-6">
            <Link href="/zh/our-ecosystem" className="inline-flex items-center gap-1.5 text-primary font-bold hover:gap-2.5 transition-all">
              了解创世生态体系
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">开始很简单</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                <div className="w-11 h-11 mx-auto rounded-full bg-secondary text-white flex items-center justify-center text-lg font-extrabold mb-4" style={{ color: 'white' }}>{s.n}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">居家护理常见问题</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  {f.q}
                  <svg className="w-5 h-5 text-primary transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-600 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="hero-dark bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>把值得信赖的照护带回家</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>预约免费居家评估，我们将推荐合适的照护并提供清晰报价 —— 无任何义务。</p>
          <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl">
            预约免费评估
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
