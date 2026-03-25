import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nursing Home Locations in Malaysia — PJ, Klang, Kajang, Puchong & JB | Genesis Life Care',
  description:
    'Find a Genesis Life Care nursing home near you. 5 centres in Petaling Jaya, Klang, Kajang, Puchong (Selangor) & Johor Bahru. 24/7 nursing care, affordable rates from RM 2,500/month. Book a free tour.',
  alternates: {
    canonical: 'https://genesiscare.com.my/our-locations',
  },
  openGraph: {
    title: 'Nursing Home Locations in Malaysia | Genesis Life Care',
    description: '5 centres across Petaling Jaya, Klang, Kajang, Puchong & Johor Bahru. Affordable rates from RM 2,500/month.',
    url: 'https://genesiscare.com.my/our-locations',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
  },
};

export const revalidate = 60;

const centres = [
  {
    name: 'Petaling Jaya',
    slug: 'nursing-home-in-petaling-jaya',
    phone: '+6019 295 0457',
    address: 'Lot 1, Petaling Utama Avenue, Jalan PJS 1/50, Taman Petaling Utama, 46150 Petaling Jaya, Selangor',
    rating: '4.9',
    reviews: 58,
    img: '/images/pj-centre.jpg',
    tags: ['Flagship Centre', 'Memory Care Wing', 'Rehab Facilities'],
    desc: 'Our flagship centre in PJ, featuring a dedicated memory care wing and comprehensive rehabilitation facilities. Enhanced physio and occupational therapy services.',
  },
  {
    name: 'Klang',
    slug: 'nursing-home-in-klang',
    phone: '+6012 321 0457',
    address: 'No.3, Jalan Istana, Amverton Business Centre, 41500 Klang, Selangor',
    rating: '4.8',
    reviews: 45,
    img: '/images/klang-centre.jpg',
    tags: ['Est. 2018', 'Near Major Hospitals', 'Original Centre'],
    desc: 'Where it all began. Our original centre in Klang is conveniently located near major hospitals and serves families across the northern Klang Valley.',
  },
  {
    name: 'Kajang',
    slug: 'nursing-home-kajang',
    phone: '+6012 321 0457',
    address: 'Jalan Bukit, Taman Kajang Baru, 43000 Kajang, Selangor',
    rating: '4.7',
    reviews: 32,
    img: '/images/kajang-centre.jpeg',
    tags: ['Southern KV', 'Family-Friendly', 'Quality Dining'],
    desc: 'A warm, family-friendly environment with personalised care and quality dining.',
  },
  {
    name: 'Puchong',
    slug: 'nursing-home-in-puchong',
    phone: '+6012 321 0457',
    address: 'Bandar Puteri, 47100 Puchong, Selangor',
    rating: '4.8',
    reviews: 38,
    img: '/images/puchong-centre.jpeg',
    tags: ['Convenient Access', 'Modern Facility', 'Quality Dining'],
    desc: 'Located in the heart of Bandar Puteri with easy highway access. A modern facility offering our full range of services with quality dining and comfortable facilities.',
  },
  {
    name: 'Johor Bahru',
    slug: 'nursing-home-in-johor-bahru',
    phone: '+6012 321 0457',
    address: 'Holiday Plaza, Jalan Dato Sulaiman, 80250 Johor Bahru, Johor',
    rating: '4.8',
    reviews: 24,
    img: '/images/jb-centre.jpeg',
    tags: ['Southern Region', 'Newest Centre', 'Full Services'],
    desc: 'Our first centre outside the Klang Valley, bringing Genesis standards of care to families in Johor Bahru and the wider southern region.',
  },
];

const trustSignals = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Affordable Rates',
    sub: 'Centres',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: '24/7 Nursing Care',
    sub: 'Round-the-clock',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Free Virtual Tours',
    sub: 'Online & in-person',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: 'No Lock-in Contracts',
    sub: 'Flexible arrangements',
  },
];

export default function OurLocationsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="loc-hero relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase text-white/80 mb-4">
            <span className="w-6 h-px bg-gold" />
            Our Locations
            <span className="w-6 h-px bg-gold" />
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Find a Centre Near You
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            5 affordable nursing homes across Klang Valley and Johor Bahru &mdash; all conveniently located near major hospitals and highways.
          </p>
        </div>
      </section>

      {/* ─── CENTRE CARDS ─── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {centres.map((c, i) => (
              <div
                key={c.slug}
                className={`bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-primary hover:shadow-xl transition-all ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                } md:flex`}
              >
                {/* Image */}
                <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={c.img}
                    alt={`Genesis Life Care ${c.name} centre`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-center">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-[10px] font-bold uppercase tracking-wide bg-primary-50 text-primary px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                    Genesis Life Care {c.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-900">{c.rating}</span>
                    <span className="text-sm text-gray-400">({c.reviews} Google reviews)</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-5">
                    {c.desc}
                  </p>

                  {/* Address & Phone */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{c.address}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="font-semibold text-gray-700 hover:text-primary transition-colors">
                        {c.phone}
                      </a>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/${c.slug}`}
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap"
                    >
                      View Centre
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <a
                      href={`tel:${c.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-semibold hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST SIGNALS ─── */}
      <section className="bg-[#f4f8fb] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {trustSignals.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{s.label}</p>
                  <p className="text-xs text-gray-500">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="loc-cta relative bg-gradient-to-r from-primary to-secondary py-14 sm:py-20">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Not Sure Which Centre is Right?
          </h2>
          <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto">
            Our care consultants can help you find the best fit for your loved one. Book a free tour at any of our centres &mdash; no obligations, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold text-gray-900 px-6 py-3.5 rounded-lg font-bold text-base hover:bg-yellow-400 transition-colors shadow-lg whitespace-nowrap"
            >
              Book a Free Tour
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+60123210457"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3.5 rounded-lg font-bold text-base hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +6012-321 0457
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
