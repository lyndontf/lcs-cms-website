import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Post-Operative Recovery Care in Malaysia | Genesis Life Care',
  description:
    'Professional post-op recovery care across 5 centres in Selangor & Johor Bahru. Expert wound care, physiotherapy, medication management & discharge planning. Flexible short-term stays from 2 weeks. Book a free consultation.',
  alternates: {
    canonical: 'https://genesiscare.com.my/post-op-care-malaysia',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/post-op-care-malaysia' },
  },
  openGraph: {
    title: 'Post-Operative Recovery Care in Malaysia | Genesis Life Care',
    description: 'Expert wound care, physiotherapy & recovery support. Flexible short-term stays across 5 centres.',
    url: 'https://genesiscare.com.my/post-op-care-malaysia',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'Rehab Centres', value: '5', sub: 'Across Malaysia' },
  { label: 'Wound Care', value: '\u2713', sub: 'Professional Team' },
  { label: 'Physiotherapy', value: '\u2713', sub: 'Progressive Rehab' },
  { label: 'Nursing Care', value: '24/7', sub: 'Round the Clock' },
  { label: 'Affordable Rates', value: '\u2713', sub: 'All Centres' },
];

const features = [
  {
    title: 'Professional Wound Care',
    desc: 'Expert wound assessment, dressing changes, and infection monitoring by qualified nurses.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: 'Progressive Physiotherapy',
    desc: 'Tailored exercise programmes that gradually rebuild strength, mobility, and confidence after surgery.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Medication Management',
    desc: 'Careful monitoring of post-surgical medications including pain relief, antibiotics, and ongoing prescriptions.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: 'Surgeon Communication',
    desc: 'Regular updates and coordination with your surgeon throughout recovery to ensure optimal healing.',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
  {
    title: 'Nutritional Support',
    desc: 'Dietician-supervised meals and nutrition plans to support healing and recovery after surgery.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    title: 'Discharge Planning',
    desc: 'Comprehensive home transition planning to ensure you are confident and prepared for continued recovery.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
];

const surgeries = [
  {
    name: 'Hip & Knee Replacement',
    desc: 'Structured rehab to regain mobility and strength after joint replacement surgery.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    name: 'Cardiac Surgery',
    desc: 'Monitored recovery from heart bypass, valve replacement, and other cardiac procedures.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    name: 'Spinal Surgery',
    desc: 'Careful post-operative care following spinal fusion, laminectomy, or disc surgery.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    name: 'Abdominal Surgery',
    desc: 'Recovery support after bowel, hernia, appendix, or other abdominal procedures.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    name: 'Orthopaedic Fractures',
    desc: 'Professional care following fracture repairs, including hip fractures common in elderly patients.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    name: 'Cancer Surgery',
    desc: 'Supportive post-surgical care following tumour removal or other oncological procedures.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  },
];

const centres = [
  { name: 'Petaling Jaya', slug: 'nursing-home-in-petaling-jaya', rating: '4.9', tag: 'Flagship Centre', img: '/images/pj-centre.jpg' },
  { name: 'Klang', slug: 'nursing-home-in-klang', rating: '4.8', tag: 'Original Centre', img: '/images/klang-centre.jpg' },
  { name: 'Kajang', slug: 'nursing-home-kajang', rating: '4.7', tag: 'Southern KV', img: '/images/kajang-centre.jpeg' },
  { name: 'Puchong', slug: 'nursing-home-in-puchong', rating: '4.8', tag: 'Modern Facility', img: '/images/puchong-centre.jpeg' },
  { name: 'Johor Bahru', slug: 'nursing-home-in-johor-bahru', rating: '4.8', tag: 'Southern Region', img: '/images/jb-centre.jpeg' },
];

const faqs = [
  {
    q: 'How soon after surgery can I transfer to Genesis?',
    a: 'Usually within days of being medically stable. We coordinate directly with hospitals to ensure a seamless and safe transfer for your post-operative recovery.',
  },
  {
    q: 'How long are post-op recovery stays?',
    a: 'Flexible from 2 weeks to several months depending on surgery type and recovery progress. Our team works with you and your surgeon to determine the ideal duration.',
  },
  {
    q: 'Will my surgeon still be involved?',
    a: 'Yes, we communicate regularly with your surgeon and follow their post-operative protocols. You will continue to receive coordinated care throughout your stay.',
  },
  {
    q: 'What types of surgery do you support recovery from?',
    a: 'Hip and knee replacements, cardiac surgery, spinal surgery, abdominal procedures, orthopaedic fractures, cancer surgery, and more. Our team is experienced across a wide range of surgical specialities.',
  },
  {
    q: 'Is physiotherapy included?',
    a: 'Yes, daily physiotherapy is a core part of post-op recovery at all our centres. Our physiotherapists design individualised programmes to help you regain strength and mobility.',
  },
  {
    q: 'How much does post-op recovery cost?',
    a: 'Fees depend on duration and care level. We offer transparent pricing with no hidden charges and provide guidance on insurance claims and available subsidies.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function PostOpCare() {
  return (
    <main className="bg-white">
      {/* Override global custom_css !important rules for dark-bg sections */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div { color: inherit; }
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div,
        .hero-dark .text-4xl, .hero-dark .text-5xl, .hero-dark .sm\\:text-5xl,
        .hero-dark .text-3xl, .hero-dark .text-lg, .hero-dark .text-sm,
        .hero-dark .text-white { color: #ffffff !important; }
        .hero-dark .text-gray-900 { color: rgb(17 24 39) !important; }
        .hero-dark .text-gray-800 { color: rgb(31 41 55) !important; }
        .hero-dark .text-gold { color: #FAB515 !important; }
      ` }} />

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">Recovery Care</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
                Post-Operative Recovery<br className="hidden sm:block" /> in Malaysia
              </h1>
              <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Professional post-surgical recovery care across 5 centres.
                Expert wound management, progressive physiotherapy, medication monitoring,
                and comprehensive discharge planning in a safe, supportive environment.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Book a Free Consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="tel:+60123210457"
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call +6012-321-0457
                </a>
              </div>
            </div>

            {/* Right — image */}
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="/images/services/nursing-station.jpg"
                  alt="Professional nursing station for post-operative care"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-primary text-white rounded-xl px-6 py-4 shadow-lg hidden sm:block">
                  <p className="text-3xl font-extrabold" style={{ color: 'white' }}>2wk+</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>Flexible Stays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {highlights.map((h, i) => (
              <div key={i}>
                <p className="text-2xl font-extrabold text-primary">{h.value}</p>
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mt-1">{h.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNDERSTANDING POST-OP RECOVERY ────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Understanding Post-Op Recovery</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Why Professional Recovery Care Matters</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Recovering from surgery at home without professional support can carry significant risks.
                Wound complications, missed medications, falls, and slow rehabilitation are common
                challenges that families face when managing post-operative care alone. Without the right
                environment and expertise, recovery can be prolonged and outcomes compromised.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Professional post-operative recovery care provides the structured clinical environment
                needed for safe and effective healing. With round-the-clock nursing, daily physiotherapy,
                and direct communication with your surgeon, our centres ensure that every aspect of your
                recovery is monitored and supported by qualified professionals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Genesis Life Care, we offer flexible short-term recovery stays tailored to your surgical
                needs. Whether you need two weeks of intensive rehabilitation or several months of ongoing
                support, our team creates an individualised recovery plan designed to get you home safely
                and confidently.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Short-Term Stays', 'Professional Care', 'Surgeon-Coordinated', 'Home Transition'].map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/services/single-room.jpg"
                alt="Private recovery room for post-operative patients"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/services/bedded-room.jpg"
                alt="Comfortable recovery room at Genesis Life Care"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Our Approach</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">A Structured Path to Full Recovery</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every post-operative recovery stay begins with a comprehensive assessment on arrival.
                Our nursing and therapy team reviews your surgical records, speaks with your surgeon,
                and evaluates your current condition to create a personalised recovery plan with clear
                milestones and goals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Progressive rehabilitation is at the heart of our approach. Daily physiotherapy sessions
                are designed to gradually rebuild your strength, mobility, and independence. Our therapists
                adjust your programme as you improve, ensuring you are always progressing at a safe and
                effective pace.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Discharge planning begins from day one. Our goal is to prepare you for a confident return
                home with the skills, strength, and support you need. Before discharge, we provide home care
                training, follow-up guidance, and ensure a seamless handover to your ongoing medical team.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Comprehensive post-surgical assessment',
                  'Individualised recovery milestones',
                  'Daily physiotherapy and mobility exercises',
                  'Regular wound inspection and care',
                  'Structured discharge and home preparation',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-full transition shadow-md hover:shadow-lg text-sm"
              >
                Enquire About Post-Op Recovery
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Comprehensive Care</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What Our Post-Op Recovery Includes</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO BENEFITS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Surgeries We Support</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Who Benefits from Post-Op Care</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team provides tailored recovery support for a wide range of surgical procedures.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {surgeries.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="bg-secondary/10 rounded-lg w-10 h-10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{c.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHORT-TERM RECOVERY STAYS ─────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-50 to-white rounded-2xl p-8 lg:p-12 border border-primary/10 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-3 py-1 mb-5">
                  <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gold text-xs font-semibold">Flexible Stays</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5">
                  Short-Term Recovery Stays<br className="hidden sm:block" /> at All Our Centres
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Genesis Life Care offers flexible post-operative recovery stays designed to match
                  the unique demands of your surgery and recovery timeline. Whether you need a focused
                  two-week rehabilitation programme or extended support over several months, our centres
                  are equipped to provide the right level of care for as long as you need it.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All five of our centres across Malaysia are fully equipped with the nursing expertise,
                  physiotherapy facilities, and clinical infrastructure required for safe post-surgical
                  recovery. We support patients recovering from a wide range of procedures including
                  joint replacements, cardiac surgery, spinal operations, and more.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our team coordinates directly with hospitals to arrange seamless transfers. From the
                  moment you arrive, your personalised recovery plan is in place — with clear milestones,
                  daily therapy sessions, and a structured path toward returning home with confidence.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Flexible stays from 2 weeks to several months',
                    'Private and shared room options',
                    'All surgical specialities supported',
                    'Insurance and subsidy guidance',
                    'Seamless hospital-to-centre transfers',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/our-locations"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-full transition shadow-md hover:shadow-lg text-sm"
                >
                  Find Your Nearest Centre
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div>
                <img
                  src="/images/services/common-area-scenic.jpg"
                  alt="Recovery common area at Genesis Life Care"
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAMILY SUPPORT ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Family Support</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Keeping Families Informed</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We understand that surgery affects the whole family. At Genesis Life Care, we keep
                families closely informed throughout the recovery journey — from daily progress updates
                to discharge preparation — so you always know how your loved one is doing.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Regular Recovery Updates',
                    desc: 'Receive frequent updates on your loved one&apos;s recovery progress, therapy milestones, and overall wellbeing.',
                  },
                  {
                    title: 'Surgeon Coordination Reports',
                    desc: 'We share regular reports with your surgeon and keep you informed of any clinical updates or changes to the care plan.',
                  },
                  {
                    title: 'Home Care Training Before Discharge',
                    desc: 'Our team provides hands-on training so families feel confident managing wound care, exercises, and medications at home.',
                  },
                  {
                    title: 'Post-Discharge Follow-Up Guidance',
                    desc: 'We provide clear guidance on follow-up appointments, warning signs to watch for, and ongoing rehabilitation after leaving our centre.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-secondary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/services/family-visit-area.jpg"
                alt="Family visiting area for post-operative recovery support"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── AVAILABLE AT ALL CENTRES ──────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Our Locations</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Post-Op Recovery Across Malaysia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All five Genesis Life Care centres offer professional post-operative recovery programmes.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {centres.map((c, i) => (
              <Link key={i} href={`/${c.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={`Genesis Life Care ${c.name}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-bold text-gray-900 text-sm">{c.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{'\u2605'} {c.rating}</p>
                  <p className="text-xs text-secondary font-medium mt-1">{c.tag}</p>
                  <p className="text-xs text-primary font-semibold mt-2 group-hover:underline">View Centre {'\u2192'}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/our-locations" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
              View All Locations
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 py-6 last:border-b-0">
                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="bg-primary/10 text-primary rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-10">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-r from-primary via-primary-800 to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>
            Start Your Recovery<br className="hidden sm:block" /> with Expert Care
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Book a free consultation with our care advisors. Visit any of our centres,
            meet the team, and learn about our post-operative recovery programmes — no obligations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Book a Free Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+60123210457"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +6012-321-0457
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
