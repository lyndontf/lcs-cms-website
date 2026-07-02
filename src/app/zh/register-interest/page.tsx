import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '新据点——登记您的意向 | 创世生命护理',
  description:
    '创世生命护理在雪兰莪与柔佛设有五间中心，并持续扩展。告诉我们您需要照护的地区，我们扩展时会第一时间通知您——巴生谷现已提供居家护理。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/register-interest',
    languages: { 'en': 'https://genesiscare.com.my/register-interest' },
  },
  openGraph: {
    title: '新据点——登记您的意向 | 创世生命护理',
    description: '雪兰莪与柔佛五间中心，并持续扩展。告诉我们您需要照护的地区，扩展时我们会通知您。',
    url: 'https://genesiscare.com.my/zh/register-interest',
    siteName: '创世生命护理',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: '创世生命护理新据点' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: '中心', value: '5', sub: '现已开放' },
  { label: '州属', value: '2', sub: '雪兰莪与柔佛' },
  { label: '居家护理', value: '巴生谷', sub: '现已提供' },
  { label: '持续', value: '更多', sub: '即将到来' },
];

const centres = [
  { name: '八打灵再也', state: '雪兰莪', url: '/zh/nursing-home-in-petaling-jaya' },
  { name: '巴生', state: '雪兰莪', url: '/zh/nursing-home-in-klang' },
  { name: '加影', state: '雪兰莪', url: '/zh/nursing-home-kajang' },
  { name: '蒲种', state: '雪兰莪', url: '/zh/nursing-home-in-puchong' },
  { name: '新山', state: '柔佛', url: '/zh/nursing-home-in-johor-bahru' },
];

const areas = [
  '槟城',
  '怡保／霹雳',
  '吉隆坡／雪兰莪其他地区',
  '马六甲／森美兰',
  '其他地区',
];

const faqs = [
  {
    q: '你们会在我的地区开设中心吗？',
    a: '我们正稳步扩展，并持续衡量家庭最需要我们的地方。我们暂时无法承诺具体城镇或日期——但若您登记意向，当我们计划在您附近开设中心时，您将是最先获知的人之一。',
  },
  {
    q: '创世目前在哪些地方营运？',
    a: '我们目前经营五间护理院——位于八打灵再也、巴生、加影与蒲种（雪兰莪）以及新山（柔佛）——并在巴生谷提供居家护理。',
  },
  {
    q: '登记意向需要费用或有任何约束吗？',
    a: '不需要。登记是免费的，也不会对您造成任何约束。它只是让我们了解需求所在，并让我们保持联系——是否及何时进一步洽谈由您决定。',
  },
  {
    q: '如果我附近还没有中心，创世还能帮忙吗？',
    a: '通常可以。我们在巴生谷提供居家护理，团队也乐意就照护方案提供建议——包括在现有中心作短期入住——即使我们尚未进驻您的城镇。',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function RegisterInterestPageZh() {
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
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">新据点</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              我们正在扩展——离您更近
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              创世生命护理目前在雪兰莪与柔佛设有五间中心，并持续扩展。若您附近尚未有中心，
              请告诉我们您需要照护的地区——我们扩展时您将第一时间获知，在此之前我们通常也能通过居家护理提供协助。
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/zh/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                登记您的意向
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/zh/our-locations" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                查看现有中心
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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

      {/* ── WHERE WE ARE TODAY ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">我们目前的所在</h2>
            <p className="text-lg text-gray-600">五间创世中心，遍布两个州属——更多即将到来。</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {centres.map((c, i) => (
              <Link key={i} href={c.url} className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="font-bold text-gray-900 group-hover:text-primary transition">{c.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{c.state}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTER INTEREST ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">告诉我们您需要照护的地区</h2>
            <p className="text-lg text-gray-600">附近还没有我们的中心？告诉我们您的地区。这有助我们决定下一步的扩展方向——我们也会保持联系。免费，无约束。</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 text-center">您需要在哪个地区获得照护？</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {areas.map((a, i) => (
                <Link
                  key={i}
                  href={`/zh/contact?interest=${encodeURIComponent(a)}`}
                  className="inline-flex items-center gap-2 bg-gray-50 hover:bg-primary hover:text-white border border-gray-200 hover:border-primary text-gray-800 font-semibold text-sm px-4 py-2.5 rounded-full transition"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  {a}
                </Link>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mb-5">登记意向并非预订，也不会对双方造成约束——它只是帮助我们规划，并让我们在能提供协助时主动与您联系。</p>
            <div className="text-center">
              <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-bold px-7 py-3.5 rounded-full transition shadow-lg hover:shadow-xl" style={{ color: 'white' }}>
                登记您的意向
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            现在就需要照护？我们在<Link href="/zh/home-care" className="text-primary font-semibold hover:underline">巴生谷提供居家护理</Link>——因此即使中心尚未在您附近开设，我们也可能帮得上忙。
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">新据点常见问题</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>在我们扩展时第一时间获知</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>告诉我们您需要照护的地区，我们会保持联系——在此之前也会尽力提供协助。</p>
          <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl">
            登记您的意向
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
