import Link from 'next/link';

interface FinalCtaSectionProps {
  heading: string;
  description: string;
  lang?: 'en' | 'zh';
}

export default function FinalCtaSection({ heading, description, lang = 'en' }: FinalCtaSectionProps) {
  const contactHref = lang === 'zh' ? '/zh/contact' : '/contact';
  const btnText = lang === 'zh' ? '预约免费咨询' : 'Book a Free Consultation';
  const phoneText = lang === 'zh' ? '致电 +6012-321-0457' : 'Call +6012-321-0457';

  return (
    <section className="relative bg-gradient-to-r from-primary via-primary-800 to-secondary py-16 sm:py-20 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `.final-cta .text-white { color: #ffffff !important; }` }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
      <div className="final-cta relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{heading}</h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-4 rounded-full shadow-lg transition-colors"
          >
            {btnText}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href="tel:+60123210457"
            className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-bold px-6 py-4 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {phoneText}
          </a>
        </div>
      </div>
    </section>
  );
}
