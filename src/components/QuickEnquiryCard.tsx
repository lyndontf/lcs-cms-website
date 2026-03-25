'use client';

import { useState } from 'react';
import Link from 'next/link';

const CENTRES = [
  { name: 'Klang', phone: '+6012 321 0457', phoneCTA: '+6012-321-0457', wa: '60123210457' },
  { name: 'Petaling Jaya', phone: '+6019 295 0457', phoneCTA: '+6019-295-0457', wa: '60192950457' },
  { name: 'Kajang', phone: '+6019 334 0457', phoneCTA: '+6019-334-0457', wa: '60193340457' },
  { name: 'Puchong', phone: '+6019 759 0457', phoneCTA: '+6019-759-0457', wa: '60197590457' },
  { name: 'Johor Bahru', phone: '+6019 282 0457', phoneCTA: '+6019-282-0457', wa: '60192820457' },
];

interface Props {
  email?: string;
}

export default function QuickEnquiryCard({ email = 'enquiries@genesiscare.com.my' }: Props) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const centre = CENTRES[selectedIdx];

  return (
    <div id="enquiry" className="hp-enquiry bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
      <span className="hp-eq-label text-xs font-bold tracking-[.14em] uppercase text-primary mb-3 block">
        Quick Enquiry
      </span>
      <h3 className="text-xl font-extrabold text-gray-900 mb-1 leading-tight">
        Find the Right Care for Your Loved One
      </h3>
      <p className="hp-eq-sub text-sm text-gray-500 mb-5">
        Our care advisors will get back to you within 24 hours.
      </p>

      {/* Centre selector */}
      <div className="mb-4">
        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">
          Select your nearest centre
        </label>
        <div className="relative">
          <select
            value={selectedIdx}
            onChange={(e) => setSelectedIdx(Number(e.target.value))}
            className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all cursor-pointer"
          >
            {CENTRES.map((c, i) => (
              <option key={c.name} value={i}>
                Genesis Life Care — {c.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        {/* Phone */}
        <a
          href={`tel:${centre.phone.replace(/\s/g, '')}`}
          className="flex items-center gap-3 p-3 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors group"
        >
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <span className="hp-eq-sub text-xs text-gray-500">Call us directly</span>
            <span className="hp-eq-phone block text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
              {centre.phoneCTA}
            </span>
          </div>
        </a>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-3 p-3 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors group"
        >
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <span className="hp-eq-sub text-xs text-gray-500">Email us</span>
            <span className="hp-eq-phone block text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
              {email}
            </span>
          </div>
        </a>
      </div>

      <Link
        href="/contact"
        className="block w-full text-center bg-primary text-white py-3.5 rounded-full text-base font-bold shadow-md hover:bg-primary-600 transition-all"
      >
        Get a Free Care Assessment →
      </Link>
      <p className="text-center text-xs text-gray-400 mt-3">No obligations. 100% confidential.</p>
    </div>
  );
}
