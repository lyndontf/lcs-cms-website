import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '创世生态体系 — 从培训到照护',
  description:
    '同一个值得信赖的集团：创世自行培训护理员（创世培训学院），通过持牌中介安置（GLC Hire），并在五间中心及居家照护您所爱的人。每一步，品质皆可追溯。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/our-ecosystem',
    languages: {
      en: 'https://genesiscare.com.my/our-ecosystem',
      'x-default': 'https://genesiscare.com.my/our-ecosystem',
    },
  },
  openGraph: {
    title: '创世生态体系 — 从培训到照护 | 创世生命关怀',
    description: '我们自行培训、安置并聘用护理员 —— 端到端的品质掌控，是单一护理院或应用型中介无法比拟的。',
    url: 'https://genesiscare.com.my/zh/our-ecosystem',
    siteName: '创世生命关怀',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: '创世生态体系' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: '同一集团', value: '3', sub: '协同品牌' },
  { label: '自主培训', value: '✓', sub: '由自家学院' },
  { label: '持牌中介', value: '✓', sub: 'GLC Hire' },
  { label: '照护中心', value: '5', sub: '遍布马来西亚' },
  { label: '居家 + 中心', value: '✓', sub: '照护选择' },
];

const pillars = [
  {
    step: '我们培训',
    img: '/images/services/rehab-department.jpg',
    title: '创世培训学院',
    desc: '在照顾您的长者之前，我们的护理员已接受统一标准的培训与认证 —— 让床边的每一位照护者都真正专业称职。',
    cta: '了解学院',
    href: 'https://gtacademy.com.my',
    external: true,
    icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
  },
  {
    step: '我们安置',
    img: '/images/services/homecare-care.jpg',
    title: 'GLC Hire · Agensi Pekerjaan GLC',
    desc: '一家持牌安置中介，为家庭与我们的中心匹配经过培训与审核的护理员 —— 您也可以为自己的家聘请一位创世培训的护理员。',
    cta: '聘请培训护理员',
    href: 'https://agency.genesiscare.com.my',
    external: true,
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    step: '我们照护',
    img: '/images/services/common-area-scenic.jpg',
    title: '创世生命关怀',
    desc: '遍布巴生谷与新山的五间护理院及居家照护服务 —— 每一天，这些培训都在我们自己的监督下付诸实践。',
    cta: '参观中心',
    href: '/zh/contact',
    external: false,
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function OurEcosystemZh() {
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

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">创世生态体系</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              从培训到照护，<br className="hidden sm:block" />同一个值得信赖的集团
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              多数护理院只是聘请现成的人手；我们不同 —— 我们自行培训护理员、通过持牌中介安置他们，并在自家中心为他们的服务负责。每一步，品质皆可追溯。
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/zh/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                预约免费参观
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
            <Image
              src="/images/general/dr-sue-rounds.jpg"
              alt="创世护理人员照护一位长者"
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

      {/* ── THREE PILLARS ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">培训。安置。照护。</h2>
            <p className="text-lg text-gray-600">同一集团的三个部分，协同运作 —— 从培训的第一天到长者每日所受的照护，品质全程可控。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
                <div className="relative h-44">
                  <Image src={p.img} alt={p.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-center" />
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">{p.step}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-5 flex-grow">{p.desc}</p>
                  {p.external ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-2.5 transition-all">
                      {p.cta}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  ) : (
                    <Link href={p.href} className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-2.5 transition-all">
                      {p.cta}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">为何家属选择整个生态体系</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            因为我们自行培训、安置并聘用护理员，我们能端到端地掌控品质 —— 这是单一护理院或应用型中介无法比拟的。选择创世，您托付的不是临时派来的陌生人，而是由我们自家学院培训、自家中介安置、自家团队监督的护理员。
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="hero-dark bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>亲自感受这份不同</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>预约免费参观任何一间创世中心，我们将向您展示这套生态体系如何让您的长者始终托付于可信赖的人。</p>
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
