import { Fragment } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getSiteSettings } from '@/lib/supabase';
import GlcHireSection from '@/components/sections/GlcHireSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

export const metadata: Metadata = {
  title: "About Genesis Life Care — Malaysia's Trusted Nursing Home Operator",
  description:
    "Learn about Genesis Life Care, operating 5 nursing homes across Selangor & Johor since 2018. 150+ trained nurses, caregivers & therapists delivering compassionate, government-approved elderly care. JKM registered & AgeCope certified.",
  alternates: {
    canonical: 'https://genesiscare.com.my/about-us',
  },
  openGraph: {
    title: "About Genesis Life Care — Malaysia's Trusted Nursing Home Operator",
    description: "5 nursing homes across Selangor & Johor. 150+ care professionals. Government-approved since 2018.",
    url: 'https://genesiscare.com.my/about-us',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/general/staff-care.jpg', width: 1200, height: 630, alt: 'Genesis Life Care team caring for elderly residents' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Genesis Life Care — Malaysia's Trusted Nursing Home Operator",
    description: "5 nursing homes across Selangor & Johor. 150+ care professionals. Government-approved since 2018.",
  },
};

export const revalidate = 60;

const team = [
  {
    name: 'Dr. Harvey Phoon',
    role: 'Doctor In-Charge',
    bio: 'Oversees medical care across all Genesis centres',
    img: '/images/team/team-1.png',
  },
  {
    name: 'Angeline Lee',
    role: 'Operations Manager',
    bio: 'Ensures consistent care standards across all facilities',
    img: '/images/team/team-2.png',
  },
  {
    name: 'Jason Tan',
    role: 'Nurse Manager',
    bio: 'Leads nursing teams and clinical care protocols',
    img: '/images/team/team-3.png',
  },
  {
    name: 'Khadijah',
    role: 'Head of Physio & Rehab',
    bio: 'Designs rehabilitation programmes for stroke and mobility recovery',
    img: '/images/team/team-4.png',
  },
  {
    name: 'Loh Yuen Yen',
    role: 'Resident Psychologist',
    bio: 'Supports residents\' mental health and emotional wellbeing',
    img: '/images/team/team-5.png',
  },
  {
    name: 'Chia Li Jia',
    role: 'Registered Dietician',
    bio: 'Creates personalised nutrition plans for diverse dietary needs',
    img: '/images/team/team-6.png',
  },
  {
    name: 'Sherrelyn',
    role: 'Senior Physiotherapist',
    bio: 'Specialises in stroke recovery and mobility rehabilitation',
    img: '/images/team/team-7.png',
  },
  {
    name: 'Joharry Mustafa',
    role: 'Supervisor',
    bio: 'Coordinates daily care operations and staff scheduling',
    img: '/images/team/team-8.png',
  },
  {
    name: 'Seow Zhi Heng',
    role: 'Senior Therapist',
    bio: 'Leads therapeutic activities and patient engagement programmes',
    img: '/images/team/team-9.png',
  },
];

const stats = [
  { value: '530+', label: 'Beds Under Management' },
  { value: '150+', label: 'Trained Professionals' },
  { value: '5', label: 'Care Centres' },
  { value: '600', label: 'Scholarships Funded' },
];

const milestones = [
  { year: '2018', title: 'Founded in Klang', desc: 'Genesis Life Care opens its first centre in Klang, Selangor with a mission to raise long-term care standards in Malaysia.' },
  { year: '2019', title: 'Expanded to Petaling Jaya', desc: 'Our flagship PJ centre opens, featuring enhanced rehabilitation and a dedicated memory care wing.' },
  { year: '2021', title: 'Kajang & Puchong', desc: 'Two new centres bring Genesis closer to families across the southern Klang Valley corridor.' },
  { year: '2023', title: 'Johor Bahru', desc: 'Our first centre outside the Klang Valley, serving families in Johor Bahru and the wider southern region.' },
  { year: '2024', title: 'HRDF Training Academy', desc: 'Launched our HRDF-registered caregiver training programme with 600 scholarship opportunities.' },
];

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hp-hero relative overflow-hidden">
        <img
          src="/images/general/dr-sue-rounds.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary/85 to-secondary/80" />
        <div className="absolute -top-[20%] -right-[10%] w-[55%] pb-[55%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase mb-6">
            <span className="w-6 h-0.5 bg-gold rounded" />
            About Us
            <span className="w-6 h-0.5 bg-gold rounded" />
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6 max-w-3xl mx-auto">
            A Trusted Brand in Long-Term Care
          </h1>
          <p className="hp-sub text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Every family deserves peace of mind. Since 2018, we&apos;ve helped over 500 families find the right care &mdash; backed by 150+ dedicated professionals across 5 centres in Malaysia.
          </p>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-white border-b border-gray-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <Fragment key={i}>
                {i > 0 && <div className="hidden sm:block w-px h-12 bg-gray-200" />}
                <div className="text-center flex-1 min-w-[100px]">
                  <span className="block text-4xl sm:text-5xl font-extrabold text-gray-700 leading-none">
                    {s.value}
                  </span>
                  <span className="text-xs text-gray-500 mt-1 font-medium">{s.label}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                Malaysia&apos;s Largest Long-Term Care Operator
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                Genesis Life Care operates five affordable nursing homes across the Klang Valley and Johor Bahru. With more than 150 trained nurses, physiotherapists, dieticians, and caregivers, we deliver round-the-clock medical and personal care tailored to each resident.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                What makes us different is our proprietary care operating system &mdash; a standardised framework that ensures every resident, in every centre, receives the same high level of attention. Each person gets a personalised care plan developed with their family and reviewed regularly by our multidisciplinary team.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                We also invest heavily in our people. Through our HRDF-registered training academy, we&apos;ve funded over 600 caregiver scholarships &mdash; because we believe better-trained caregivers lead to better outcomes for families.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/general/staff-care.jpg"
                alt="Genesis Life Care caregiver assisting an elderly resident with rehabilitation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR JOURNEY ─── */}
      <section className="bg-[#f4f8fb] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              From One Centre to Five &mdash; And Growing
            </h2>
            <p className="text-gray-500 text-lg">
              What started as a single nursing home in Klang has grown into Malaysia&apos;s largest long-term care network.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex gap-5 sm:gap-6">
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-primary flex items-center justify-center shadow-md">
                    <span className="text-xs sm:text-sm font-extrabold text-white">{m.year}</span>
                  </div>
                  {/* Content */}
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{m.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR PURPOSE ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
                Our Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Elevating Care Standards Across Malaysia
              </h2>
              <blockquote className="text-xl text-gray-600 italic leading-relaxed mb-6 border-l-4 border-primary pl-5">
                &ldquo;To elevate care standards, provide peace of mind to loved ones, and a life of dignity, pain-free and joyful for our residents.&rdquo;
              </blockquote>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                We believe every resident deserves to be known &mdash; not just as a patient, but as a person. That&apos;s why we involve families at every step: from the initial care assessment to monthly progress reviews, video call updates, and open visiting hours.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                Our care team meets weekly to review each resident&apos;s progress and adjust their care plan. Physiotherapy goals, dietary preferences, medication schedules, and even recreational activities are all personalised &mdash; because no two residents are alike.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/general/common-area-graded.png"
                alt="Genesis Life Care visitor common area"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT SETS US APART ─── */}
      <section className="bg-[#f4f8fb] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
              What Sets Us Apart
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Built Different, on Purpose
            </h2>
            <p className="text-gray-500 text-lg">
              We don&apos;t just provide care &mdash; we&apos;ve built an entire system to ensure it&apos;s consistent, measurable, and always improving.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Standardised Operating System */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Standardised Care System</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our proprietary operating system ensures consistent, predictable care across all five centres &mdash; no matter which location your loved one is in.
              </p>
            </div>

            {/* Training Academy */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">HRDF Training Academy</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We train our own caregivers through a government-registered programme. Over 600 scholarships funded to build Malaysia&apos;s next generation of care professionals.
              </p>
            </div>

            {/* Multidisciplinary Team */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Multidisciplinary Team</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Doctors, nurses, physiotherapists, psychologists, and dieticians all under one roof &mdash; collaborating on each resident&apos;s care plan weekly.
              </p>
            </div>

            {/* Culturally Sensitive Care */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Personalised Care</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We provide nutritious meals, comfortable facilities, and personalised care tailored to each resident and family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACCREDITATIONS ─── */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
              Accreditations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Recognised &amp; Registered
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            <div className="flex flex-col items-center gap-3">
              <img
                src="/images/logos/jkm-logo.webp"
                alt="Affordable care homes in Malaysia"
                className="h-16 w-auto"
              />
              <span className="text-xs text-gray-500 font-medium text-center">Affordable<br />Rates</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img
                src="/images/logos/agecope-logo.webp"
                alt="AgeCope certification"
                className="h-16 w-auto"
              />
              <span className="text-xs text-gray-500 font-medium text-center">AgeCope Registered<br />Member</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img
                src="https://hrdcorp.gov.my/wp-content/uploads/2021/02/KESUMA_HRDCorp_web.svg"
                alt="HRD Corp logo"
                className="h-16 w-auto"
              />
              <span className="text-xs text-gray-500 font-medium text-center">HRD Corp Registered<br />Training Provider</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img
                src="https://images.seeklogo.com/logo-png/38/1/jabatan-pembangunan-kemahiran-logo-png_seeklogo-388580.png"
                alt="JPK - Jabatan Pembangunan Kemahiran logo"
                className="h-16 w-auto"
              />
              <span className="text-xs text-gray-500 font-medium text-center">Registered TVET<br />Training Provider</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MEET THE TEAM ─── */}
      <section className="bg-[#f4f8fb] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Meet the People Behind the Care
            </h2>
            <p className="text-gray-500 text-lg">
              A multidisciplinary team of medical professionals, therapists, and caregivers who work together every day to deliver the highest standard of care.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center"
              >
                <div className="aspect-square w-full overflow-hidden bg-gray-100">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <span className="block text-sm font-bold text-gray-900">{member.name}</span>
                  <span className="block text-xs text-primary font-semibold mt-0.5">{member.role}</span>
                  <span className="block text-[11px] text-gray-400 mt-1 leading-snug">{member.bio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">
              What Families Say
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Trusted by Hundreds of Families
            </h2>
            <p className="text-gray-500 text-lg">
              Hear from the families who have entrusted us with the care of their loved ones.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#f4f8fb] rounded-2xl p-6 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                &ldquo;The staff genuinely care about my mother. They know her by name, her favourite foods, and even her daily routines. It feels like an extension of our family.&rdquo;
              </p>
              <div>
                <span className="block text-sm font-bold text-gray-900">Sarah L.</span>
                <span className="text-xs text-gray-500">Family of resident, PJ Centre</span>
              </div>
            </div>

            <div className="bg-[#f4f8fb] rounded-2xl p-6 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                &ldquo;After my father&apos;s stroke, we were lost. Genesis gave us a clear recovery plan and the physio team worked with him every day. His progress has been remarkable.&rdquo;
              </p>
              <div>
                <span className="block text-sm font-bold text-gray-900">Ahmad R.</span>
                <span className="text-xs text-gray-500">Family of resident, Klang Centre</span>
              </div>
            </div>

            <div className="bg-[#f4f8fb] rounded-2xl p-6 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                &ldquo;What impressed us most was the quality meals and welcoming space. My mother feels respected and comfortable. The care programme is exactly what our family needed.&rdquo;
              </p>
              <div>
                <span className="block text-sm font-bold text-gray-900">Nurul H.</span>
                <span className="text-xs text-gray-500">Family of resident, Kajang Centre</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/read-our-reviews" className="text-primary font-bold hover:text-primary-600 transition-colors">
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── GLC HIRE SECTION ─── */}
      <GlcHireSection />

      {/* ─── FAQ SECTION ─── */}
      <FaqSection
        faqs={[
          {
            q: "What are your accreditations and registrations?",
            a: "Genesis Life Care is registered with JKM (Ministry of Health Malaysia) as an affordable nursing home operator, AgeCope certified as a member of the Malaysian elderly care association, and HRDF-registered training provider. Our training academy is also registered with JPK as a TVET training provider."
          },
          {
            q: "What qualifications do your staff have?",
            a: "Our team includes on-site doctors, registered nurses, physiotherapists, occupational therapists, psychologists, and trained caregivers. All clinical staff hold relevant Malaysian professional registrations. We invest heavily in continuous training through our HRDF-registered academy."
          },
          {
            q: "Are there flexible visiting hours?",
            a: "Yes. We maintain open visiting hours so families can visit their loved ones freely. We also offer video call updates for families unable to visit in person, and provide monthly progress reviews to keep everyone informed."
          },
          {
            q: "Do you offer transparent pricing?",
            a: "Absolutely. All our nursing homes are registered as affordable care facilities with transparent, upfront pricing. No hidden fees. Rates typically start from RM 2,500/month depending on the level of care required."
          },
          {
            q: "Can residents transfer between centres?",
            a: "Yes. Our standardised care operating system means a resident can transfer between any of our 5 centres while maintaining consistent care quality and continuity. We facilitate smooth transitions with full care plan handovers."
          }
        ]}
        heading="Frequently Asked Questions About Genesis Life Care"
        label="ABOUT OUR CARE"
      />

      {/* ─── FINAL CTA ─── */}
      <FinalCtaSection
        heading="Start Your Journey to Peace of Mind"
        description="Every family deserves to find the right care partner. Let us help you discover why hundreds of families trust Genesis Life Care with their loved ones."
      />
    </>
  );
}
