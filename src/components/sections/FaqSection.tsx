interface FaqSectionProps {
  faqs: { q: string; a: string }[];
  heading: string;
  label: string;
  lang?: 'en' | 'zh';
}

export default function FaqSection({ faqs, heading, label, lang = 'en' }: FaqSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-[#f4f8fb]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-secondary">{label}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">{heading}</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm group">
              <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center gap-4">
                {faq.q}
                <svg
                  className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
