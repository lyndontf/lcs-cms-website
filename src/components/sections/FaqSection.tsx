import React from 'react';
import Link from 'next/link';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  /** Optional label above the heading */
  label?: string;
  /** Optional custom heading */
  heading?: string;
  /** FAQ items — if not provided, uses default general FAQs */
  faqs?: FaqItem[];
  /** Image src for the right column */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Whether to show the "Still have questions?" CTA card */
  showCta?: boolean;
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    q: 'How much does a nursing home cost in Malaysia?',
    a: 'Genesis Life Care offers affordable nursing home packages starting from RM 2,500 per month. Rates vary by centre and level of care required. All pricing is transparent with no hidden charges. Contact us for a personalised quote.',
  },
  {
    q: 'Where are Genesis Life Care centres located?',
    a: 'We have 5 centres across Malaysia: Petaling Jaya, Klang, Kajang, and Puchong in the Klang Valley (Selangor), plus Johor Bahru in the southern region. All centres are conveniently located and easily accessible.',
  },
  {
    q: 'What types of care does Genesis Life Care provide?',
    a: 'We provide a comprehensive range of elderly care services including 24/7 nursing home care, dementia and memory care, stroke rehabilitation, post-operative recovery care, palliative care, and short-term respite care. Each resident receives a personalised care plan.',
  },
  {
    q: 'Is Genesis Life Care government-approved?',
    a: 'Yes, all Genesis Life Care centres are registered and approved by JKM (Jabatan Kebajikan Masyarakat). We also hold AgeCope certification, meeting international standards of aged care quality.',
  },
  {
    q: 'Can I visit a Genesis Life Care centre before making a decision?',
    a: 'Absolutely. We encourage families to book a free tour and consultation at any of our 5 centres. Our care advisors will walk you through the facilities, explain our care programmes, and help you find the right solution.',
  },
];

export default function FaqSection({
  label = 'Common Questions',
  heading = 'Frequently Asked Questions',
  faqs,
  imageSrc = '/images/general/comprehensive-care-2.png',
  imageAlt = 'Professional caregiver assisting elderly resident at Genesis Life Care',
  showCta = true,
}: FaqSectionProps) {
  const items = faqs || DEFAULT_FAQS;

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — FAQs */}
          <div>
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">{label}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{heading}</h2>
            <div className="flex flex-col gap-4">
              {items.map((item, i) => (
                <details key={i} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-bold text-gray-900 text-base hover:bg-gray-100 transition-colors">
                    {item.q}
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>

            {showCta && (
              <div className="bg-primary-50 rounded-2xl p-6 border border-primary/10 mt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Still have questions?</h3>
                <p className="text-sm text-gray-500 mb-4">Our care advisors are happy to help. Speak to us directly or schedule a free visit to any of our centres.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#enquiry"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    Contact Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all"
                  >
                    Book a Free Visit
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Right — Image */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
