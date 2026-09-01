'use client';

import { createContext, useContext, ReactNode } from 'react';

type Lang = 'en' | 'zh';

// Set by a route that should render a specific language on the very first
// paint — e.g. /zh/<slug> routes, so a crawler or no-JS request gets real
// Chinese HTML, not the client-toggle default. `null` (the default, outside
// any provider) means "no route-forced language — behave like the existing
// English pages and rely purely on the client-side glc-lang toggle."
const LangContext = createContext<Lang | null>(null);

export function LangProvider({ initialLang, children }: { initialLang: Lang; children: ReactNode }) {
  return <LangContext.Provider value={initialLang}>{children}</LangContext.Provider>;
}

export function useForcedLang(): Lang | null {
  return useContext(LangContext);
}
