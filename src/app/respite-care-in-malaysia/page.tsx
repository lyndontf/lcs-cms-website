import { Metadata } from 'next';
import Link from 'next/link';
import GlcHireSection from '@/components/sections/GlcHireSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

export const metadata: Metadata = {
  title: 'Respite Care in Malaysia - Short-Term Elderly Care | Genesis Life Care',
  description:
    'Respite care services across Malaysia. Short-term elderly care for caregiver relief, post-hospital recovery & family vacations. 5 centres nationwide. Genesis Life Care — book a free consultation.',
  openGraph: {
    title: 'Respite Care in Malaysia - Genesis Life Care',
    description:
      'Short-term elderly care across Malaysia. Caregiver relief, flexible stays, full-service care at 5 Genesis Life Care centres. Book a free consultation.',
    images: [{ url: '/images/pj-centre.jpg', width: 1200, height: 630, alt: 'Genesis Life Care - Respite Care Malaysia' }],
  },
};

export const revalidate = 60;

/* ─── Data ──────────────────────────────────────────── */

const phone = '+6012 321 0457';
const phoneCTA = '+6012-321-0457';

const centres = [
  {
    name: 'Petaling Jaya',
    fullName: 'Genesis Life Care Petaling Jaya',
    slug: 'nursing-home-in-petaling-jaya',
    address: 'No. 33-1, Jalan PJU 5/9, Dataran Sunway, Kota Damansara, 47810 Petaling Jaya, Selangor',
    rating: '4.9',
    reviews: 155,
    beds: '50+',
    img: '/images/pj-centre.jpg',
    badge: 'Flagship Centre',
  },
  {
    name: 'Klang',
    fullName: 'Genesis Life Care Klang',
    slug: 'nursing-home-in-klang',
    address: 'No.3, Jalan Istana, Amverton Business Centre, 41500 Klang, Selangor',
    rating: '4.8',
    reviews: 45,
    beds: '120+',
    img: '/images/klang-centre.jpg',
    badge: 'Original Centre',
  },
  {
    name: 'Kajang',
    fullName: 'Genesis Life Care Kajang',
    slug: 'nursing-home-kajang',
    address: 'No. 16, Jalan Reko Sentral 1, Reko Sentral, 43000 Kajang, Selangor',
    rating: '4.7',
    reviews: 32,
    beds: '120+',
    img: '/images/kajang-centre.jpeg',
    badge: 'Southern KV',
  },
  {
    name: 'Puchong',
    fullName: 'Genesis Life Care Puchong',
    slug: 'nursing-home-in-puchong',
    address: 'No.33, Jalan TPP 1/1, Taman Perindustrian Puchong, 47100 Puchong, Selangor',
    rating: '4.8',
    reviews: 58,
    beds: '120+',
    img: '/images/puchong-centre.jpeg',
    badge: 'Modern Facility',
  },
  {
    name: 'Johor Bahru',
    fullName: 'Genesis Life Care Johor Bahru',
    slug: 'nursing-home-in-johor-bahru',
    address: 'No. 41, Jalan Harmonium 23/10, Taman Desa Tebrau, 81100 Johor Bahru, Johor',
    rating: '4.8',
    reviews: 40,
    beds: '120+',
    img: '/images/jb-centre.jpeg',
    badge: 'Southern Region',
  },
];

const respiteReasons = [
  {
    title: 'Caregiver Relief',
    desc: 'Take a well-deserved break knowing your loved one is receiving the same quality of professional care. Our team provides 24/7 nursing support so you can rest and recharge.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Flexible Duration',
    desc: 'Stay for as short as a few days or as long as several weeks. Our respite care programme is designed to accommodate your schedule and your family\'s needs.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Full-Service Care',
    desc: 'Respite care residents receive the same quality of care as our long-term residents — including nursing support, meals, activities, therapy sessions, and doctor consultations.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: 'Easy Transition',
    desc: 'Our admissions team ensures a smooth check-in process with minimal paperwork. We conduct an initial assessment to understand your loved one\'s care needs from day one.',
    icon: 'M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

const faqs = [
  {
    q: 'What is respite care?',
    a: 'Respite care is short-term residential care for elderly individuals, designed to give primary caregivers a temporary break. At Genesis Life Care, respite residents receive the same level of professional nursing care, meals, activities, and medical support as our long-term residents.',
  },
  {
    q: 'How long can my loved one stay for respite care?',
    a: 'Our respite care programme is flexible — stays can range from a few days to several weeks depending on your needs. Whether you need a short break, are going on holiday, or need post-hospital transitional care, we can accommodate your schedule.',
  },
  {
    q: 'How much does respite care cost in Malaysia?',
    a: 'Respite care costs at Genesis Life Care vary based on the duration of stay and level of care required. We offer competitive daily and weekly rates. Contact us for a personalised quotation — we are happy to discuss options that suit your budget.',
  },
  {
    q: 'Is respite care available at all Genesis Life Care centres?',
    a: 'Yes, respite care is available at all five of our centres — Petaling Jaya, Klang, Kajang, Puchong, and Johor Bahru. Each centre provides the same standard of professional care and comfortable living environment for short-term residents.',
  },
  {
    q: 'What should I bring for a respite care stay?',
    a: 'We recommend bringing personal clothing, toiletries, any prescribed medications, and familiar items that may provide comfort (such as photos or a favourite blanket). Our team will provide a detailed checklist during the admission process.',
  },
  {
    q: 'Can respite care be arranged at short notice?',
    a: 'We understand that the need for respite care can arise unexpectedly. While we recommend booking in advance to guarantee availability, we do our best to accommodate urgent requests. Contact our admissions team to check current availability at your preferred centre.',
  },
];

/* ─── JSON-LD Structured Data ───────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      name: 'Genesis Life Care',
      description: 'Short-term respite care services across Malaysia. Professional elderly care at 5 centres — Petaling Jaya, Klang, Kajang, Puchong, and Johor Bahru.',
      url: 'https://genesiscare.com.my/respite-care-in-malaysia',
      telephone: '+60123210457',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Respite Care Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Respite Care',
              description: 'Short-term residential elderly care with 24/7 nursing support, meals, activities, and medical consultations.',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

/* ─── Page Component ────────────────────────────────────────────────── */

export default function RespiteCareMalaysia() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div { color: inherit; }
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div,
        .hero-dark .text-4xl, .hero-dark .text-5xl, .hero-dark .sm\\:text-5xl,
        .hero-dark .text-3xl, .hero-dark .text-lg, .hero-dark .text-sm,
        .hero-dark .text-white { color: #ffffff !important; }
        .hero-dark .text-gray-900 { color: rgb(17 24 39) !important; }
        .hero-dark .text-gray-800 { color: rgb(31 41 55) !important; }
        .hero-dark .text-gray-600 { color: rgb(75 85 99) !important; }
        .hero-dark .text-gold { color: #FAB515 !important; }
      ` }} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-gold text-gray-900 text-xs font-bold tracking-wide px-3 py-1 rounded-full uppercase">
                  Respite Care
                </span>
                <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ color: 'white' }}>
                  5 Centres Nationwide
                </span>
              </div>

              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'white' }}>
                Short-Term Elderly Care
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5" style={{ color: 'white' }}>
                Respite Care Services<br />in Malaysia
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8 max-w-xl" style={{ color: 'white' }}>
                Need a temporary break from caregiving? Genesis Life Care offers professional
                short-term elderly care across 5 centres in Malaysia. From a few days to
                several weeks — your loved one receives the same quality care as our
                long-term residents, with 24/7 nursing and on-site doctor support.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-400 transition-colors text-sm whitespace-nowrap"
                >
                  Book a Free Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {phoneCTA}
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/images/pj-centre.jpg"
                  alt="Genesis Life Care — Respite Care Services in Malaysia"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Flexible Stays</p>
                  <p className="text-xs text-gray-600">Days to Weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT RESPITE CARE ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Respite Care</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              What Is Respite Care and Who Needs It?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Respite care provides short-term residential care for elderly individuals,
                offering primary caregivers a much-needed temporary break. Caring for an
                ageing parent or loved one is rewarding but can also be physically and
                emotionally demanding. Respite care ensures your loved one continues to
                receive professional support while you take time to rest and recharge.
              </p>
              <p>
                Families often turn to respite care when the primary caregiver needs a break
                from the demands of daily caregiving, when an elderly family member needs
                transitional support after a hospital stay, or when the family is going on
                holiday and needs a safe, professional environment for their loved one during
                their absence.
              </p>
              <p>
                At Genesis Life Care, respite care residents receive the same standard of
                care as our long-term residents. This includes 24-hour nursing support,
                nutritious meals, social activities, therapy sessions where needed, and
                regular doctor consultations. With 5 centres across Selangor and Johor,
                we offer accessible respite care options for families throughout Malaysia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE RESPITE CARE ────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Benefits</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Why Choose Respite Care
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Professional short-term care that supports both your loved one and your family.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {respiteReasons.map((reason, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR CENTRES ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Centres</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Respite Care Available at 5 Locations
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Choose the Genesis Life Care centre nearest to you for quality short-term elderly care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centres.map((c, i) => (
              <Link
                key={i}
                href={`/${c.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.fullName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gold text-gray-900 text-xs font-bold px-2.5 py-0.5 rounded-full">
                      {c.badge}
                    </span>
                    <span className="text-gold text-sm font-semibold">★ {c.rating}</span>
                    <span className="text-gray-400 text-xs">({c.reviews})</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {c.fullName}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">{c.address}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-600">{c.beds} beds</span>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                      View centre
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLC HIRE SECTION ──────────────────────────────────────────── */}
      <GlcHireSection />

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <FaqSection faqs={faqs} />

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <FinalCtaSection
        heading="Give Yourself a Break — Your Loved One Is in Good Hands"
        description="Contact us to arrange respite care at any of our 5 centres. Our team will guide you through the process and ensure a smooth, comfortable stay for your loved one."
      />
    </main>
  );
}
