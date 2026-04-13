'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { BiodataCandidate } from '@/lib/supabase';

const CATEGORIES = ['All Candidates', 'Domestic Maid', 'Elder Care', 'Specialist Care'] as const;

function matchesCategory(candidate: BiodataCandidate, filter: string): boolean {
  if (filter === 'All Candidates') return true;
  const cat = (candidate.job_category || '').toLowerCase();
  if (filter === 'Domestic Maid') return cat.includes('domestic') || cat.includes('maid');
  if (filter === 'Elder Care') return cat.includes('elder');
  if (filter === 'Specialist Care') return cat.includes('specialist') || cat.includes('dementia') || cat.includes('childcare');
  return true;
}

function totalExperience(exp: Record<string, string>): string {
  // Sum up years from entries like "6 year(s) 1 month(s)", "2 year(s)"
  let totalMonths = 0;
  for (const val of Object.values(exp)) {
    const yearMatch = val.match(/(\d+)\s*year/i);
    const monthMatch = val.match(/(\d+)\s*month/i);
    if (yearMatch) totalMonths += parseInt(yearMatch[1]) * 12;
    if (monthMatch) totalMonths += parseInt(monthMatch[1]);
  }
  if (totalMonths === 0) return '—';
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) return `${months} month${months !== 1 ? 's' : ''}`;
  if (months === 0) return `${years} year${years !== 1 ? 's' : ''}`;
  return `${years} year${years !== 1 ? 's' : ''}`;
}

function languageSummary(languages: BiodataCandidate['languages']): string {
  if (!languages || languages.length === 0) return '—';
  return languages.map((l) => l.name).join(', ');
}

function categoryLabel(cat: string | null): string {
  if (!cat) return '—';
  if (cat.startsWith('Specialist')) return cat.replace('Specialist — ', 'Specialist — ');
  return cat;
}

export default function BiodataListClient({ candidates }: { candidates: BiodataCandidate[] }) {
  const [activeFilter, setActiveFilter] = useState<string>('All Candidates');

  const filtered = candidates.filter((c) => matchesCategory(c, activeFilter));

  return (
    <>
      {/* Category filter pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeFilter === cat
                ? 'bg-[#2E72B8] text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-[#2E72B8] hover:text-[#2E72B8]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Candidate cards grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-gray-500 text-lg">No candidates found in this category.</p>
          <p className="text-gray-400 text-sm mt-1">Please check back soon or try a different filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <Link
              key={c.id}
              href={`/biodata/${c.id}`}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#09B7D3]/30 transition-all duration-200 overflow-hidden"
            >
              {/* Card content */}
              <div className="p-6">
                {/* Top row: avatar + name + badge */}
                <div className="flex items-start gap-4 mb-5">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    {c.photo_url ? (
                      <img
                        src={c.photo_url}
                        alt={c.full_name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2E72B8]/10 to-[#09B7D3]/10 flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#2E72B8]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2E72B8] transition-colors truncate">
                      {c.full_name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')}
                    </h3>
                    <p className="text-sm text-[#2E72B8] font-medium">{categoryLabel(c.job_category)}</p>
                  </div>
                  <span className="flex-shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                    Available
                  </span>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Nationality</span>
                    <span className="text-gray-800 font-medium">{c.nationality || '—'}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Age</span>
                    <span className="text-gray-800 font-medium">{c.age ?? '—'}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Experience</span>
                    <span className="text-gray-800 font-medium">{totalExperience(c.helper_experience || {})}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Marital Status</span>
                    <span className="text-gray-800 font-medium">{c.marital_status || '—'}</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="mt-3 pt-3 border-t border-gray-50">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Languages</span>
                  <span className="text-sm text-gray-700">{languageSummary(c.languages)}</span>
                </div>

                {/* View profile CTA */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Ref: {c.reference_no || '—'}</span>
                  <span className="text-sm font-semibold text-[#2E72B8] group-hover:text-[#09B7D3] transition-colors flex items-center gap-1">
                    View Profile
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
