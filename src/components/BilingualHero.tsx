'use client';

import { useSiteLang } from '@/lib/useSiteLang';

interface HeroText {
  label: string;
  title: string;
  subtitle: string;
}

// Renders the page hero's eyebrow/H1/subtitle, swapping to the Chinese
// variant when the visitor has toggled the site language and this page has
// one available. `zh` is null for pages with no translation yet, in which
// case this always renders `en` regardless of the toggle state.
export default function BilingualHero({ en, zh }: { en: HeroText; zh: HeroText | null }) {
  const lang = useSiteLang();
  const text = lang === 'zh' && zh ? zh : en;

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center" style={{ color: '#ffffff' }}>
      <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase mb-6" style={{ color: '#ffffff' }}>
        <span className="w-6 h-0.5 bg-[#FAB515] rounded" />
        {text.label}
        <span className="w-6 h-0.5 bg-[#FAB515] rounded" />
      </span>
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight mb-6 max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
        {text.title}
      </h1>
      {text.subtitle && (
        <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#ffffff' }}>
          {text.subtitle}
        </p>
      )}
    </div>
  );
}
