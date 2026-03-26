type Testimonial = { name: string; text: string; rating: number };

const i18n = {
  en: { label: 'Reviews', heading: 'What Families Say', reviewsLabel: (r: string, n: string) => `${r} from ${n} Google reviews`, googleReview: 'Google Review' },
  zh: { label: '评价', heading: '家属心声', reviewsLabel: (r: string, n: string) => `来自 ${n} 条 Google 评价的 ${r}`, googleReview: 'Google 评价' },
};

export default function Testimonials({
  testimonials,
  rating,
  reviews,
  lang = 'en',
}: {
  testimonials: Testimonial[];
  rating: string;
  reviews: string;
  lang?: 'en' | 'zh';
}) {
  const l = i18n[lang];
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">{l.label}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            {l.heading}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex text-gold text-lg">{'★★★★★'}</div>
            <span className="text-gray-600 text-sm font-medium">{l.reviewsLabel(rating, reviews)}</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((tm, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex text-gold text-sm mb-3">
                {Array.from({ length: tm.rating }).map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{tm.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{tm.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{tm.name}</p>
                  <p className="text-xs text-gray-400">{l.googleReview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
