import React from 'react';
import Link from 'next/link';

export default function CostCalculatorSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-primary-50 via-white to-secondary/10 rounded-3xl border border-primary-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center p-8 sm:p-12 lg:p-14">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase text-primary mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                Free Tool
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Nursing Home Cost Calculator
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Get an instant personalised estimate based on the care your loved one needs. Select a centre, room type, care level, and add-on services — see the monthly cost breakdown in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href="https://web.genesiscare.com.my/cost-calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full text-base font-bold shadow-md hover:bg-primary-600 hover:shadow-lg transition-all whitespace-nowrap"
                >
                  Calculate Your Cost
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-primary font-semibold px-6 py-3.5 rounded-full border border-primary/20 hover:bg-primary-50 transition-all text-base whitespace-nowrap"
                >
                  Or Speak to an Advisor
                </Link>
              </div>
              <p className="text-xs text-gray-400">No sign-up required. Estimates are indicative — final pricing confirmed after assessment.</p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                  title: 'Choose Your Centre',
                  desc: 'Compare pricing across our 5 centres in PJ, Klang, Kajang, Puchong & JB.',
                },
                {
                  icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
                  title: 'Customise Care Needs',
                  desc: 'Select room type, feeding assistance, wound care, rehab, dementia care & more.',
                },
                {
                  icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                  title: 'See Your Estimate Instantly',
                  desc: 'Transparent monthly breakdown with no hidden costs. Starts from RM 2,500/month.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-11 h-11 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
