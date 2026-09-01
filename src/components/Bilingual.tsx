'use client';

import { ReactNode } from 'react';
import { useSiteLang } from '@/lib/useSiteLang';

// Drop-in inline text swap for hardcoded (non-CMS) pages: renders `en` by
// default and swaps to `zh` when the visitor has toggled the site language,
// via the same toggle Header/ContentRenderer use. Lets a Server Component
// page keep its existing structure (and `metadata` export) while individual
// text nodes become language-aware — no need to convert the whole page to a
// Client Component. Omit `zh` for text that has no translation yet; it just
// always renders `en`.
export default function Bilingual({ en, zh }: { en: ReactNode; zh?: ReactNode }) {
  const lang = useSiteLang();
  return <>{lang === 'zh' && zh !== undefined ? zh : en}</>;
}
