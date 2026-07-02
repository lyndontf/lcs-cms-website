import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '家属护理应用 | 实时掌握长者的照护',
  description:
    '通过 Life Care Systems 应用，实时掌握长者的照护：照护记录、生命体征、预约、照片，与 care 团队安全沟通及视频通话。无论身在何处，都能安心。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/family-app',
    languages: {
      en: 'https://genesiscare.com.my/family-app',
      'x-default': 'https://genesiscare.com.my/family-app',
    },
  },
  openGraph: {
    title: '家属护理应用 | 创世生命关怀',
    description: '照护记录、生命体征、预约与照片，与 care 团队沟通及视频通话 —— 尽在您的手机。无论身在何地都安心。',
    url: 'https://genesiscare.com.my/zh/family-app',
    siteName: '创世生命关怀',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: '创世生命关怀家属护理应用' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: '照护可见', value: '实时', sub: '随时掌握动态' },
  { label: '访问', value: '24/7', sub: '随时随地' },
  { label: '生命体征与记录', value: '✓', sub: '与团队同步查看' },
  { label: '消息与视频通话', value: '✓', sub: '联系 care 团队' },
  { label: '中心', value: '5', sub: '每间创世中心' },
];

const features = [
  {
    title: '实时照护与进度记录',
    desc: '随时了解长者的日常 —— care 团队记录的照护与进度更新，您第一时间看到。',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: '生命体征、预约与用药',
    desc: '查看生命体征读数、即将到来的医生预约以及用药安排 —— 与 care 团队相同的视图。',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: '照片与活动更新',
    desc: '看见长者真实的生活点滴 —— 来自日常活动与社交时刻的照片与更新。',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: '与 care 团队安全沟通',
    desc: '提问、分享偏好，或只是问候一声 —— 应用内安全消息让您直接联系照护长者的团队。',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    title: '视频通话',
    desc: '与长者面对面，也可与 care 团队视频交流 —— 在无法亲自到访时尤其珍贵。',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  },
  {
    title: '随时随地访问',
    desc: '无论您身在同城还是海外，长者的照护尽在掌心 —— 让您全然安心。',
    icon: 'M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z',
  },
];

const steps = [
  { n: '1', title: '加入', desc: '当长者入住时，我们为您设立安全的家属登录账号。' },
  { n: '2', title: '打开应用', desc: '在手机上下载 Life Care Systems 应用并登录。' },
  { n: '3', title: '保持联系', desc: '随时随地掌握长者的照护，并联系团队。' },
];

const faqs = [
  {
    q: '我该如何获得应用的使用权限？',
    a: '当长者入住时，我们会为您设立安全的家属登录账号。您只需下载 Life Care Systems 应用、登录，即可连接。',
  },
  {
    q: '我可以在应用中看到什么？',
    a: '实时照护与进度记录、生命体征读数、预约与用药安排，以及照片与活动更新。所有资料均为私密，仅授权家属可见。',
  },
  {
    q: '我能通过应用联系 care 团队吗？',
    a: '可以。应用内安全消息让您直接联系 care 团队，您也可以通过视频通话与长者面对面并与工作人员交流。',
  },
  {
    q: '家人的资料是否受到保护？',
    a: '是的。资料保存在创世生命关怀的安全系统内，仅授权家属与照护人员可存取，且仅用于支援长者的照护。我们绝不将其出售或用于营销用途。',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function FamilyAppZh() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                </svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">家属专属</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                实时掌握他们的照护
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                长者的照护，尽在您的掌心。通过 Life Care Systems 应用，您可随时查看照护记录、生命体征、预约与每日更新，与 care 团队沟通，甚至视频通话 —— 随时随地。
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/zh/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                  预约免费参观
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="tel:+60193250457" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  致电 +6019-325-0457
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img src="/images/services/common-area-scenic.jpg" alt="家属通过 Life Care Systems 应用掌握长者的照护" className="rounded-2xl shadow-2xl w-full object-cover" />
                <div className="absolute -bottom-5 -right-5 bg-secondary text-white text-center rounded-xl px-6 py-4 shadow-lg hidden sm:block">
                  <p className="text-3xl font-extrabold" style={{ color: 'white' }}>24/7</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>尽在掌心</p>
                </div>
              </div>
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

      {/* ── FEATURES ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">您想知道的一切，尽在一个应用</h2>
            <p className="text-lg text-gray-600">当家属能实时看到长者的更新，便更投入、更安心。这正是 Life Care Systems 应用的用意。</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO GET ACCESS ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">连接，就这么简单</h2>
            <p className="text-lg text-gray-600">三个步骤，随时随地掌握长者的照护。</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 mx-auto rounded-full bg-secondary text-white flex items-center justify-center text-xl font-extrabold mb-4" style={{ color: 'white' }}>{s.n}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">常见问题</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>无论身在何处，都与他们相伴</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>预约免费参观，我们将向您展示 Life Care Systems 应用，以及家属如何随时掌握长者的照护。</p>
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
