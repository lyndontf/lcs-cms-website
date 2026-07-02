/* Genesis Ecosystem teaser (REC-017) — reusable, EN + /zh. Links to /our-ecosystem.
   Claims confirmed 2026-07-02: loop fully operational; GTA trains, GLC Hire (licensed)
   places, families can hire for home, all one group. */

import Link from 'next/link';

type Lang = 'en' | 'zh';

const COPY: Record<Lang, {
  eyebrow: string;
  heading: string;
  subhead: string;
  chips: string[];
  cta: string;
  href: string;
}> = {
  en: {
    eyebrow: 'The Genesis Ecosystem',
    heading: 'We train, place, and care for — all in one group',
    subhead:
      'Our caregivers are trained by our own academy, placed through our licensed agency, and supervised in our own centres — so quality is controlled at every step.',
    chips: ['Train', 'Place', 'Care'],
    cta: 'Discover the Genesis ecosystem',
    href: '/our-ecosystem',
  },
  zh: {
    eyebrow: '创世生态体系',
    heading: '培训、安置、照护 —— 皆在同一集团',
    subhead:
      '我们的护理员由自家学院培训、经持牌中介安置、在自家中心受监督 —— 品质每一步皆可掌控。',
    chips: ['培训', '安置', '照护'],
    cta: '探索创世生态体系',
    href: '/zh/our-ecosystem',
  },
};

export default function EcosystemTeaser({ lang = 'en' }: { lang?: Lang }) {
  const c = COPY[lang];
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-primary-800 via-primary to-secondary rounded-2xl px-8 py-12 sm:px-12 text-center">
          <span className="text-gold text-xs font-bold tracking-wide uppercase" style={{ color: '#FAB515' }}>{c.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4" style={{ color: 'white' }}>{c.heading}</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>{c.subhead}</p>
          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            {c.chips.map((chip, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                <span className="bg-white/15 border border-white/25 text-white text-sm font-bold px-4 py-1.5 rounded-full" style={{ color: 'white' }}>{chip}</span>
                {i < c.chips.length - 1 && (
                  <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                )}
              </span>
            ))}
          </div>
          <Link href={c.href} className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-7 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
            {c.cta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
