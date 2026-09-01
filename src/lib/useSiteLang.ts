'use client';

import { useEffect, useState } from 'react';
import { useForcedLang } from './LangContext';

// Shared localStorage key + CustomEvent contract for the site language
// toggle. Any client component can read (useSiteLang) or read+control
// (useLangToggle) the current language without prop drilling.
//
// A route can force an initial language via <LangProvider initialLang="zh">
// (see LangContext.tsx) — used by /zh/<slug> routes so the very first
// server-rendered paint is already in Chinese (crawlable, no flash of
// English, no JS required to see it). A visitor's own explicit toggle
// choice (saved in localStorage) still wins once they've made one, on any
// page — the forced language only supplies the *default* when nothing has
// been chosen yet.
export function useLangToggle() {
  const forced = useForcedLang();
  const [lang, setLangState] = useState<'en' | 'zh'>(forced ?? 'en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('glc-lang');
      if (saved === 'zh' || saved === 'en') {
        setLangState(saved);
      } else if (forced) {
        setLangState(forced);
      }
    } catch {
      if (forced) setLangState(forced);
    }
    const onChange = (e: Event) => {
      const next = (e as CustomEvent<'en' | 'zh'>).detail;
      if (next === 'zh' || next === 'en') setLangState(next);
    };
    window.addEventListener('glc-lang-change', onChange);
    return () => window.removeEventListener('glc-lang-change', onChange);
  }, [forced]);

  const setLang = (next: 'en' | 'zh') => {
    setLangState(next);
    try {
      localStorage.setItem('glc-lang', next);
    } catch {
      /* localStorage unavailable — in-memory toggle still works for this view */
    }
    // Same-tab listeners (e.g. WhatsAppWidget, ContentRenderer) can't rely on
    // the 'storage' event, which only fires in other tabs — broadcast directly.
    window.dispatchEvent(new CustomEvent('glc-lang-change', { detail: next }));
  };

  return [lang, setLang] as const;
}

export function useSiteLang(): 'en' | 'zh' {
  const [lang] = useLangToggle();
  return lang;
}
