type FacilityImage = { src: string; alt: string };

const t = {
  en: { label: 'Our Facility', heading: 'Take a Look Inside', desc: (name: string) => `Our ${name} centre is designed for comfort, safety, and a home-like atmosphere.` },
  zh: { label: '我们的设施', heading: '参观设施', desc: (name: string) => `我们的${name}中心以舒适、安全和温馨的环境为特色。` },
};

export default function FacilityGallery({
  images,
  centreName,
  lang = 'en',
}: {
  images: FacilityImage[];
  centreName: string;
  lang?: 'en' | 'zh';
}) {
  const l = t[lang];
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">{l.label}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            {l.heading}
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            {l.desc(centreName)}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden shadow-sm ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                  i === 0 ? 'h-[400px]' : 'h-[190px]'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
