type FacilityImage = { src: string; alt: string };

export default function FacilityGallery({
  images,
  centreName,
}: {
  images: FacilityImage[];
  centreName: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Facility</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Take a Look Inside
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Our {centreName} centre is designed for comfort, safety, and a home-like atmosphere.
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
