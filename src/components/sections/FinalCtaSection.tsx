import React from 'react';
import Link from 'next/link';

interface FinalCtaSectionProps {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  phone?: string;
}

export default function FinalCtaSection({
  heading = 'Ready to Take the Next Step?',
  description = 'Contact us today for a free consultation. Our care advisors speak to dozens of families every week and can help find the perfect care solution for your loved one.',
  primaryLabel = 'Schedule a Visit',
  primaryHref = '/contact',
  phone = '+6012-321 0457',
}: FinalCtaSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#229CD0] via-[#3db8e0] to-[#09B7D3] overflow-hidden">
      <div className="absolute -top-[40%] -right-[10%] w-[60%] pb-[60%] rounded-full bg-white/[.06] pointer-events-none" />
      <div className="absolute -bottom-[50%] -left-[5%] w-[50%] pb-[50%] rounded-full bg-black/[.06] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 bg-[#FAB515] text-gray-900 px-8 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
          >
            {primaryLabel}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
          <a
            href={`tel:${phone.replace(/[^+\d]/g, '')}`}
            className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white/25 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Call {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
