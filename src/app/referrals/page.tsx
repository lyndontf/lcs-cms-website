import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Referrals & Partnerships | Genesis Life Care',
  description:
    'How hospitals, GPs and families refer a loved one to Genesis Life Care — we accept hospital-discharge referrals with admission in 24–48 hours. JKM-registered, AgeCope-certified, with our own training academy and licensed placement agency.',
  alternates: {
    canonical: 'https://genesiscare.com.my/referrals',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/referrals' },
  },
  openGraph: {
    title: 'Referrals & Partnerships | Genesis Life Care',
    description:
      'Hospital, GP and family referral pathways with 24–48h admission, plus our accreditations and the Genesis care ecosystem.',
    url: 'https://genesiscare.com.my/referrals',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: 'Genesis Life Care referrals and partnerships' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: 'Admission', value: '24–48h', sub: 'From Referral' },
  { label: 'Hospital', value: 'Direct', sub: 'Discharge Intake' },
  { label: 'Registered', value: 'JKM', sub: 'AgeCope Certified' },
  { label: 'Referrers', value: 'All', sub: 'Hospitals · GPs · Families' },
];

const referrers = [
  {
    title: 'Hospital discharge planners',
    desc: 'Moving a patient from an acute ward to the right care setting? We accept direct hospital-discharge referrals, review the discharge summary, and can usually admit within 24–48 hours once the assessment and documents are ready.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m9-14h.01M9 7h.01M9 11h.01M12 11h.01M15 11h.01M15 7h.01M9 15h6v6H9v-6z',
  },
  {
    title: 'GPs & specialists',
    desc: 'Refer a patient who needs ongoing nursing, rehabilitation or long-term care. We coordinate with you on the care plan and keep the clinical picture joined-up between your practice and our team.',
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
  },
  {
    title: 'Families',
    desc: 'You can refer your own loved one directly — no hospital or GP letter required. Book a free assessment and we’ll guide you through documents, care level and costs, step by step.',
    icon: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a3 3 0 10-2.598-4.5M7 12a3 3 0 10-2.598-4.5',
  },
];

const steps = [
  { n: '1', title: 'Get in touch', desc: 'Call, WhatsApp or send us the referral / discharge summary. Hospital teams can reach us directly.' },
  { n: '2', title: 'Free assessment', desc: 'We assess the level of care needed — in the ward, at home, or at our centre — and match it to the right care plan.' },
  { n: '3', title: 'Clear quote', desc: 'You receive an itemised quote with the care level, room type and any extras spelled out. No hidden fees.' },
  { n: '4', title: 'Admission in 24–48h', desc: 'Once documents are ready, we coordinate a smooth transfer — often within 24–48 hours, including urgent cases.' },
];

const ecosystem = [
  {
    title: 'Genesis Training Academy',
    img: '/images/services/rehab-department.jpg',
    desc: 'Our HRDF-registered, JPK-accredited training academy develops the nurses and caregivers who staff our homes — so the people caring for your loved one are trained to a consistent standard.',
  },
  {
    title: 'Agensi Pekerjaan GLC',
    img: '/images/services/homecare-care.jpg',
    desc: 'Our own licensed placement agency. When a family prefers round-the-clock home support, we place a trained, vetted live-in caregiver through the agency for a one-off fee.',
  },
  {
    title: 'Partner lab & clinical services',
    img: '/images/services/nursing-station.jpg',
    desc: 'Routine diagnostics through a partner lab visit, plus in-house pharmacy and an on-call doctor — so most clinical needs are handled without sending residents out.',
  },
];

const accreditations = [
  { name: 'JKM Registered', sub: 'Ministry-registered nursing home operator', img: '/images/logos/jkm-logo.webp' },
  { name: 'AgeCope Certified', sub: 'Member, Malaysian elderly-care association', img: '/images/logos/agecope-logo.webp' },
  { name: 'HRDF Registered', sub: 'Registered training provider', img: null },
  { name: 'JPK TVET Provider', sub: 'Accredited vocational training', img: null },
];

const faqs = [
  {
    q: 'Can a hospital refer a patient directly to Genesis?',
    a: 'Yes. We accept direct hospital-discharge referrals. Send us the discharge summary and we’ll assess the patient and, once documents are ready, we can usually arrange admission within 24–48 hours — including urgent cases.',
  },
  {
    q: 'Does a family need a doctor’s referral to admit a loved one?',
    a: 'No. Families can refer their own loved one directly — no hospital or GP letter is required. A latest medical report or discharge summary helps us plan care, but we’ll guide you on any documents you’re missing.',
  },
  {
    q: 'Do you help with insurance or government subsidies?',
    a: 'Yes, where applicable. We can help families explore available government subsidies and insurance options during the assessment.',
  },
  {
    q: 'What are your accreditations?',
    a: 'Genesis Life Care is registered with JKM as a nursing home operator and is AgeCope-certified. Our training academy is HRDF-registered and JPK-accredited as a TVET provider.',
  },
  {
    q: 'How quickly can you admit after a referral?',
    a: 'Once the assessment is done and documents are ready, admission is typically within 24–48 hours. We coordinate the transfer with the family and, for hospital referrals, with the discharging team.',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function ReferralsPage() {
  return (
    <main className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div { color: inherit; }
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div,
        .hero-dark .text-4xl, .hero-dark .text-5xl, .hero-dark .sm\\:text-5xl,
        .hero-dark .text-3xl, .hero-dark .text-lg, .hero-dark .text-sm,
        .hero-dark .text-white { color: #ffffff !important; }
        .hero-dark .text-gray-900 { color: rgb(17 24 39) !important; }
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
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">Referrals &amp; Partnerships</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              A smooth path into the right care
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Whether the referral comes from a hospital, a GP or a family member, we make the move simple &mdash;
              we accept direct hospital-discharge referrals and can usually admit within 24&ndash;48 hours. Backed
              by our accreditations, our own training academy and licensed placement agency.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                Make a Referral
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/admissions" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                See how admission works
              </Link>
            </div>
          </div>
        
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src="/images/services/nursing-station.jpg"
                alt="The nursing station at a Genesis Life Care centre"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
      </section>

      {/* ── AT A GLANCE ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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

      {/* ── WHO REFERS ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Who can refer</h2>
            <p className="text-lg text-gray-600">Referrals reach us from three directions — and we make each one straightforward.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {referrers.map((r, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={r.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">How a referral works</h2>
            <p className="text-lg text-gray-600">From first contact to admission — usually within a couple of days.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-extrabold flex items-center justify-center mb-4" style={{ color: 'white' }}>{s.n}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM PARTNERS ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Backed by the Genesis ecosystem</h2>
            <p className="text-lg text-gray-600">Genesis is more than the homes — a connected group that strengthens the care behind every referral.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ecosystem.map((e, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="relative h-40">
                  <Image src={e.img} alt={e.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-center" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{e.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/our-ecosystem" className="text-primary font-semibold hover:underline">Explore the Genesis ecosystem →</Link>
          </div>
        </div>
      </section>

      {/* ── INSURANCE / SUBSIDY + ACCREDITATIONS ──────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Insurance &amp; subsidy support</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Cost shouldn&apos;t be a barrier to the right care. Where applicable, we help families explore available government subsidies and insurance options — just raise it during your free assessment and we&apos;ll point you in the right direction.</p>
              <Link href="/pricing" className="text-primary font-semibold hover:underline">See fees &amp; packages →</Link>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5">Accreditations &amp; registrations</h2>
              <div className="grid grid-cols-2 gap-4">
                {accreditations.map((a, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                    {a.img ? (
                      <Image src={a.img} alt={a.name} width={40} height={40} className="w-10 h-10 object-contain flex-shrink-0" />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-bold text-gray-900 leading-tight">{a.name}</p>
                      <p className="text-xs text-gray-500 leading-tight mt-0.5">{a.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">Referral FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  {f.q}
                  <svg className="w-5 h-5 text-primary transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-600 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="hero-dark bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>Refer a loved one or a patient</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>Hospital teams, GPs and families welcome. Send us a referral or book a free assessment — we&apos;ll take it from there.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl">
            Make a Referral
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
