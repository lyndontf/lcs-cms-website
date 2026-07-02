import { Metadata } from 'next';
import Link from 'next/link';
import { centres } from '@/data/centres';

export const metadata: Metadata = {
  title: '评价与家属心声',
  description:
    '看看家属对创世生命关怀的评价 —— 五间护理院在 Google 上获得 4.8★ 好评。来自我们照护长者的家庭的真实评价。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/reviews',
    languages: {
      en: 'https://genesiscare.com.my/reviews',
      'x-default': 'https://genesiscare.com.my/reviews',
    },
  },
  openGraph: {
    title: '评价与家属心声 | 创世生命关怀',
    description: '五间护理院平均 4.8★。来自我们照护长者的家庭的真实评价。',
    url: 'https://genesiscare.com.my/zh/reviews',
    siteName: '创世生命关怀',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: '创世生命关怀评价' }],
  },
};

export const revalidate = 60;

const ZH_NAME: Record<string, string> = {
  Klang: '巴生',
  'Petaling Jaya': '八打灵再也',
  Puchong: '蒲种',
  Kajang: '加影',
  'Johor Bahru': '新山',
};

const all = Object.values(centres);
const reviewList = all.flatMap((c) =>
  (c.testimonials || [])
    .filter((t) => t.text && t.text.trim().length > 0)
    .map((t) => ({ ...t, centre: ZH_NAME[c.name] || c.name })),
);
const totalReviews = all.reduce((sum, c) => sum + (c.reviews || 0), 0);
const avgRating = (
  all.reduce((sum, c) => sum + parseFloat(c.rating) * (c.reviews || 0), 0) / (totalReviews || 1)
).toFixed(1);

export default function ReviewsZh() {
  return (
    <main className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div { color: inherit; }
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div,
        .hero-dark .text-4xl, .hero-dark .text-5xl, .hero-dark .sm\\:text-5xl,
        .hero-dark .text-3xl, .hero-dark .text-lg, .hero-dark .text-sm,
        .hero-dark .text-white { color: #ffffff !important; }
        .hero-dark .text-gold { color: #FAB515 !important; }
      ` }} />

      {/* AggregateRating + Review structured data (from real reviews) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalOrganization',
            name: 'Genesis Life Care',
            url: 'https://genesiscare.com.my',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: avgRating,
              reviewCount: String(totalReviews),
              bestRating: '5',
              worstRating: '1',
            },
            review: reviewList.map((r) => ({
              '@type': 'Review',
              author: { '@type': 'Person', name: r.name },
              reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
              reviewBody: r.text,
            })),
          }),
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 text-center">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">评价</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mt-3 mb-4" style={{ color: 'white' }}>
            家属心声
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="text-gold text-2xl tracking-tight">★★★★★</span>
            <span className="text-white/90 text-lg font-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>
              来自 {totalReviews} 条 Google 评价的 {avgRating}★
            </span>
          </div>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            遍布我们五间护理院 —— 来自信任我们照护长者的家庭的真实话语。
          </p>
        </div>
      </section>

      {/* ── PER-CENTRE RATINGS ────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {all.map((c, i) => (
              <div key={i}>
                <p className="text-2xl font-extrabold text-primary">{c.rating}★</p>
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mt-1">{ZH_NAME[c.name] || c.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{c.reviews} 条评价</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS GRID ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewList.map((r, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex text-gold text-sm mb-3">{Array.from({ length: r.rating }).map((_, j) => <span key={j}>★</span>)}</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{r.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-400">Google 评价 · {r.centre}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="hero-dark bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>看看为何家属信任我们</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>预约免费参观任何一间创世中心，亲眼见证这些评价背后的照护。</p>
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
