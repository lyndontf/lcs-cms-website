import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '马来西亚长者日间照护中心',
  description:
    '创世长者日间照护 —— 膳食、活动、护士监测健康与轻度物理治疗，可选半天或全天，并提供可选交通。让长者白天有人照护与陪伴，家人安心工作。欢迎预约免费参观。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/elderly-day-care',
    languages: {
      en: 'https://genesiscare.com.my/elderly-day-care',
      'x-default': 'https://genesiscare.com.my/elderly-day-care',
    },
  },
  openGraph: {
    title: '马来西亚长者日间照护中心 | 创世生命关怀',
    description: '膳食、活动、护士监测健康与轻度物理治疗 —— 半天或全天，可选交通。白天有人照护与陪伴，家人安心工作。',
    url: 'https://genesiscare.com.my/zh/elderly-day-care',
    siteName: '创世生命关怀',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: '创世生命关怀长者日间照护' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: '灵活', value: '半天或全天', sub: '配合您的日程' },
  { label: '膳食', value: '包含', sub: '与茶点' },
  { label: '护士', value: '在场', sub: '健康监测' },
  { label: '活动', value: '每日', sub: '与陪伴' },
  { label: '交通', value: '可安排', sub: '可选加购' },
];

const included = [
  { title: '营养膳食与茶点', desc: '全天供应新鲜准备的餐点与茶点。' },
  { title: '活动、游戏与陪伴', desc: '团体活动、游戏与社交时光，让思维保持活跃、日子充满欢乐。' },
  { title: '健康与生命体征监测', desc: '护士在场监测生命体征，留意长者的状况。' },
  { title: '物理治疗与轻度运动', desc: '引导式的轻度运动与行动活动，让长者保持活力。' },
  { title: '灵活半天或全天', desc: '半天或全天皆可 —— 配合您家庭的日程。' },
  { title: '可选交通接送', desc: '可安排接送服务，另收取费用。' },
];

const steps = [
  { n: '1', title: '咨询', desc: '致电或 WhatsApp，告诉我们长者的情况。' },
  { n: '2', title: '免费评估', desc: '我们评估需求，推荐合适的日间照护方案。' },
  { n: '3', title: '选择日程', desc: '选择半天或全天，以及适合家庭的日程。' },
  { n: '4', title: '加入其中', desc: '长者享受照护、陪伴与活动 —— 每晚回到家中。' },
];

const faqs = [
  {
    q: '一天包含什么？',
    a: '营养膳食与茶点、团体活动与陪伴、由护士监测健康与生命体征，以及轻度物理治疗/运动。',
  },
  {
    q: '时间是怎样的？',
    a: '日间照护很灵活 —— 可选半天或全天，配合您家庭的日程。请联系我们确认您首选中心的具体时间。',
  },
  {
    q: '有提供交通吗？',
    a: '有。可安排接送服务，另收取费用 —— 咨询时告诉我们即可。',
  },
  {
    q: '日间照护的费用是多少？',
    a: '您可选择按日收费，或选择月配套以便长期出席。免费评估将根据您所需的天数与交通，为您提供确切报价。',
  },
  {
    q: '日间照护日后可以转为住院照护吗？',
    a: '可以 —— 许多家庭从日间照护开始，待需求改变时再转为住院照护。同一支值得信赖的团队与中心，让过渡顺畅无忧。',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function ElderlyDayCareZh() {
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

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">日间照护</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              白天由我们照护，<br className="hidden sm:block" />家人安心工作
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              当您上班时，长者可享有良好的陪伴、膳食、活动与护士的照护 —— 每晚再回到家中。可选半天或全天，并提供可选交通。这也是认识创世的温和第一步。
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/zh/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                预约免费参观
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="tel:+60193250457" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                致电 +6019-325-0457
              </a>
            </div>
          </div>
        
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src="/images/services/therapy-exercise.jpg"
                alt="创世生命护理中心的活动与运动室"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center"
              />
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

      {/* ── WHAT'S INCLUDED ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">一天是怎样的</h2>
            <p className="text-lg text-gray-600">充实、备受照护的一天 —— 膳食、陪伴、温和活动与细心的护士。</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((c, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DAY CARE ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">温和的第一步</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            日间照护让长者在白天拥有陪伴、照护与生活重心 —— 也让您能安心工作，知道他们安全无虞。这也是低承诺地亲身体验创世的方式。许多家庭从这里开始，待时机成熟时，再由同一支值得信赖的团队转为住院照护。
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
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
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">日间照护常见问题</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>给长者更明亮的一天</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>预约免费参观，我们将向您介绍日间照护计划，并找到适合您家庭的日程。</p>
          <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl">
            预约免费参观
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
