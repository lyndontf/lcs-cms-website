/* Real centre walk-through video section (REC-005) — reusable, EN + /zh.
   Self-hosted web-optimized mp4, click-to-play (preload=none) with a poster. */

type Lang = 'en' | 'zh';

const T: Record<Lang, { eyebrow: string; heading: (c: string) => string; sub: string }> = {
  en: {
    eyebrow: 'Virtual Tour',
    heading: (c) => `Step inside our ${c} centre`,
    sub: 'No stock photos — a real walk-through of the actual centre your loved one would call home.',
  },
  zh: {
    eyebrow: '虚拟导览',
    heading: (c) => `走进我们的${c}中心`,
    sub: '没有摆拍照片 —— 真实走访长者即将入住的实际中心。',
  },
};

export default function CentreTour({
  lang = 'en',
  centre,
  video,
  poster,
}: {
  lang?: Lang;
  centre: string;
  video: string;
  poster: string;
}) {
  const t = T[lang];
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-secondary text-xs font-bold tracking-wide uppercase">{t.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">{t.heading(centre)}</h2>
          <p className="text-lg text-gray-600">{t.sub}</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-black">
          <video controls preload="none" playsInline poster={poster} className="w-full h-auto block">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
