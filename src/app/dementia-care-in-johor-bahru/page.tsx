import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { centres, getOtherCentres } from '@/data/centres';
import AtAGlance from '@/components/sections/AtAGlance';
import FacilityGallery from '@/components/sections/FacilityGallery';
import Testimonials from '@/components/sections/Testimonials';
import LocationContact from '@/components/sections/LocationContact';
import OtherCentres from '@/components/sections/OtherCentres';

export const metadata: Metadata = {
  title: 'Dementia Care in Johor Bahru - Memory Care JB | Genesis Life Care',
  description:
    'Specialised dementia care in Johor Bahru. Psychologist-led memory care programmes, cognitive stimulation, safe environment & personalised care plans. Rated 4.8★. Book a free tour at Genesis Life Care JB.',
  openGraph: {
    title: 'Dementia Care in Johor Bahru - Genesis Life Care',
    description:
      'Professional dementia and memory care in Johor Bahru. Psychologist-led programmes, 24/7 nursing, safe & secure environment. Book a free tour.',
    images: [{ url: '/images/jb-centre.jpeg', width: 1200, height: 630, alt: 'Genesis Life Care Johor Bahru — Dementia Care' }],
  },
};

export const revalidate = 60;

/* ─── Centre data ──────────────────────────────────────────────────── */

const centre = {
  name: 'Johor Bahru',
  fullName: 'Genesis Life Care Johor Bahru',
  slug: 'nursing-home-in-johor-bahru',
  phone: '+6019 282 0457',
  phoneCTA: '+6019-282-0457',
  address: 'Level 6, Holiday Plaza Tower, Jalan Dato Sulaiman, Taman Century, 80250 Johor Bahru, Johor Darul Ta’zim',
  rating: '4.8',
  reviews: 40,
  beds: '120+',
  // Updated image path assuming you add the new generated image here
  img: '/images/macro-cognitive-therapy.webp', 
};

// ... [Keep your existing dementiaFeatures, services, faqs, and jsonLd arrays exactly as they are] ...

const centreData = centres['johor-bahru'];
const otherCentres = getOtherCentres(centreData.name);

/* ─── Page Component ────────────────────────────────────────────────── */

export default function DementiaCareJB() {
  return (
    <main className="bg-white">
      {/* ... [Keep your existing JSON-LD script and Style block] ... */}

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gold text-gray-900 text-xs font-bold tracking-wide px-3 py-1 rounded-full uppercase">Dementia Care</span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">★ {centre.rating} Google Rating</span>
              </div>

              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2">Dementia Care in Johor Bahru</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5">
                Dementia Care in<br />Johor Bahru
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl">
                Genesis Life Care Johor Bahru provides specialised dementia and memory care
                with psychologist-led programmes, 24/7 nursing supervision, and a safe,
                structured environment — serving families across JB, Iskandar Puteri,
                Skudai, and surrounding areas.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-400 transition-colors text-sm whitespace-nowrap">
                  Book a Free Tour
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <a href={`tel:${centre.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm whitespace-nowrap">
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call {centre.phoneCTA}
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 relative w-full h-[420px]">
                {/* Replaced standard img with Next.js Image */}
                <Image 
                  src={centre.img} 
                  alt="Close up of cognitive memory therapy at Genesis Life Care" 
                  fill
                  className="object-cover"
                  priority 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <svg aria-hidden="true" className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Taman Century</p>
                  <p className="text-xs text-gray-500">Johor Bahru, Johor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... [Rest of your components: AtAGlance, About, Approach, Services, Gallery, etc.] ... */}
      
    </main>
  );
}