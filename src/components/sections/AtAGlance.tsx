'use client';

import { useSiteLang } from '@/lib/useSiteLang';

type Highlight = { label: string; value: string; sub: string };

// Fixed, small vocabulary reused across every centre's highlight strip (see
// src/data/centres.ts) — a direct string lookup, not a per-page dictionary.
// Anything not recognised (e.g. a future label) just renders in English.
const ZH: Record<string, string> = {
  'Google Rating': 'Google 评分',
  Beds: '床位',
  Established: '成立于',
  'Affordable Rates': '实惠价格',
  'Care Team': '护理团队',
  Capacity: '容量',
  'All Centres': '所有中心',
  Professionals: '专业人员',
  'Our Original Centre': '首间中心',
  'Flagship Centre': '旗舰中心',
  'Modern Facility': '现代化设施',
  'Southern KV': '南巴生谷',
  'Southern Region': '南部地区',
};

function tr(text: string): string {
  const reviewsMatch = text.match(/^(\d+)\s+reviews$/);
  if (reviewsMatch) return `${reviewsMatch[1]} 则评价`;
  return ZH[text] || text;
}

export default function AtAGlance({ highlights }: { highlights: Highlight[] }) {
  const lang = useSiteLang();
  return (
    <section className="bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-primary">{h.value}</p>
              <p className="text-sm font-semibold text-gray-700 mt-1">{lang === 'zh' ? tr(h.label) : h.label}</p>
              <p className="text-xs text-gray-400">{lang === 'zh' ? tr(h.sub) : h.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
