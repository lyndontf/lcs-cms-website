type Testimonial = { name: string; text: string; rating: number };

export default function Testimonials({
  testimonials,
  rating,
  reviews,
}: {
  testimonials: Testimonial[];
  rating: string;
  reviews: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Families Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex text-gold text-lg">{'★★★★★'}</div>
            <span className="text-gray-600 text-sm font-medium">{rating} from {reviews} Google reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex text-gold text-sm mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
