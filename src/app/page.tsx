import { Metadata } from 'next';
import Link from 'next/link';
import { getPageBySlug, getSiteSettings, getPublishedPosts } from '@/lib/supabase';
import { getCurrentSiteId, getCurrentSiteSlug } from '@/lib/site-context';
import ContentRenderer from '@/components/ContentRenderer';

export async function generateMetadata(): Promise<Metadata> {
  const [siteId, siteSlug] = await Promise.all([getCurrentSiteId(), getCurrentSiteSlug()]);
  const page = await getPageBySlug('home', siteId || undefined);

  if (siteSlug === 'centre') {
    return {
      title: 'Nursing Home & Elderly Care in Malaysia | Genesis Life Care',
      description:
        'Genesis Life Care operates 5 nursing homes across Klang Valley & Johor Bahru. 24/7 professional nursing care, dementia care, stroke rehabilitation & post-operative recovery. Government-approved, rated 4.8★ on Google. Book a free consultation today.',
      alternates: {
        canonical: 'https://genesiscare.com.my/',
        languages: { 'zh-Hans': 'https://genesiscare.com.my/zh' },
      },
      openGraph: {
        title: 'Genesis Life Care — Nursing Home & Elderly Care in Malaysia',
        description:
          '5 nursing homes across Klang Valley & Johor Bahru. 24/7 nursing care, dementia care, stroke rehabilitation. Rated 4.8★ on Google.',
        url: 'https://genesiscare.com.my/',
        siteName: 'Genesis Life Care',
        locale: 'en_MY',
        type: 'website',
        images: [
          {
            url: 'https://genesiscare.com.my/images/general/hero-main.jpeg',
            width: 1200,
            height: 630,
            alt: 'Genesis Life Care nursing home in Malaysia',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Genesis Life Care — Nursing Home & Elderly Care in Malaysia',
        description:
          '5 nursing homes across Klang Valley & Johor Bahru. 24/7 nursing care, dementia care, stroke rehabilitation. Rated 4.8★.',
      },
      keywords: [
        'nursing home Malaysia',
        'elderly care Malaysia',
        'nursing home Klang Valley',
        'dementia care Malaysia',
        'old folks home Malaysia',
        'stroke rehabilitation centre Malaysia',
        'aged care Selangor',
        'nursing home Johor Bahru',
        'palliative care Malaysia',
        'respite care Malaysia',
        'Genesis Life Care',
      ],
    };
  }

  return {
    title: page?.meta_title || page?.title || 'Home',
    description: page?.meta_description || 'Quality healthcare and aged care services in Malaysia',
  };
}

export const revalidate = 60;

export default async function HomePage() {
  const [siteId, siteSlug] = await Promise.all([getCurrentSiteId(), getCurrentSiteSlug()]);
  const sid = siteId || undefined;
  const [page, settings, recentPosts] = await Promise.all([
    getPageBySlug('home', sid),
    getSiteSettings(sid),
    getPublishedPosts(sid),
  ]);

  // ─── Non-centre sites: render CMS content dynamically ───
  if (siteSlug !== 'centre') {
    return (
      <>
        {page && page.content && page.content.length > 0 ? (
          <>
            {/* Check if content is a single raw HTML block (full-page HTML) */}
            {page.content.length === 1 && page.content[0].type === 'html' ? (
              <div
                className="cms-html-page"
                dangerouslySetInnerHTML={{ __html: page.content[0].content || '' }}
              />
            ) : (
              <article>
                {/* Hero section */}
                <section className="cms-hero relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
                  {page.featured_image_url && (
                    <img
                      src={page.featured_image_url}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary/85 to-secondary/80" />
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                      backgroundSize: '28px 28px',
                    }}
                  />
                  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center" style={{ color: '#ffffff' }}>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight mb-6" style={{ color: '#ffffff' }}>
                      {page.meta_title || page.title}
                    </h1>
                    {page.meta_description && (
                      <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#ffffff' }}>
                        {page.meta_description}
                      </p>
                    )}
                  </div>
                </section>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                  <ContentRenderer blocks={page.content} />
                </div>
              </article>
            )}
          </>
        ) : (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {settings?.site_name || 'Welcome'}
            </h1>
            {settings?.tagline && (
              <p className="text-lg text-gray-500">{settings.tagline}</p>
            )}
          </div>
        )}

        {/* Recent blog posts */}
        {recentPosts.length > 0 && (
          <section className="bg-white py-14 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">Latest</span>
                <h2 className="text-3xl font-bold text-gray-900">Recent Posts</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recentPosts.slice(0, 3).map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden group"
                  >
                    {post.featured_image_url && (
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img
                          src={post.featured_image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      {post.category && (
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          {post.category}
                        </span>
                      )}
                      <h3 className="text-base font-bold text-gray-900 mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </>
    );
  }

  // ─── Centre site: original hardcoded layout ───

  /* ─── JSON-LD Structured Data ─── */
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': 'https://genesiscare.com.my/#organization',
    name: 'Genesis Life Care',
    url: 'https://genesiscare.com.my',
    logo: 'https://genesiscare.com.my/images/general/logo.png',
    description:
      'Genesis Life Care operates 5 nursing homes across Malaysia, providing 24/7 professional nursing care, dementia care, stroke rehabilitation, and post-operative recovery services.',
    telephone: settings?.contact_phone || '+6012-321 0457',
    email: settings?.contact_email || 'enquiries@genesiscare.com.my',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.3, Jalan Istana, Amverton Business Centre',
      addressLocality: 'Klang',
      addressRegion: 'Selangor',
      postalCode: '41500',
      addressCountry: 'MY',
    },
    areaServed: [
      { '@type': 'City', name: 'Petaling Jaya' },
      { '@type': 'City', name: 'Klang' },
      { '@type': 'City', name: 'Kajang' },
      { '@type': 'City', name: 'Puchong' },
      { '@type': 'City', name: 'Johor Bahru' },
      { '@type': 'State', name: 'Selangor' },
      { '@type': 'State', name: 'Johor' },
    ],
    medicalSpecialty: [
      'Geriatric Medicine',
      'Rehabilitation',
      'Palliative Care',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '197',
      bestRating: '5',
    },
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 150, unitText: 'staff' },
    foundingDate: '2018',
    sameAs: [
      'https://www.facebook.com/genesislifecare/',
      'https://www.instagram.com/genesislifecare/',
      'https://www.youtube.com/@genesislifecarecentre1443',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a nursing home cost in Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Genesis Life Care offers affordable nursing home packages starting from RM 2,500 per month. Rates vary by centre and level of care required. All pricing is transparent with no hidden charges. Contact us for a personalised quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where are Genesis Life Care centres located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Genesis Life Care has 5 centres across Malaysia: Petaling Jaya, Klang, Kajang, and Puchong in the Klang Valley (Selangor), plus Johor Bahru in the southern region. All centres are conveniently located and easily accessible.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of care does Genesis Life Care provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide a comprehensive range of elderly care services including 24/7 nursing home care, dementia and memory care, stroke rehabilitation, post-operative recovery care, palliative care, and short-term respite care. Each resident receives a personalised care plan.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Genesis Life Care government-approved?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all Genesis Life Care centres are registered and approved by JKM (Jabatan Kebajikan Masyarakat / Department of Social Welfare Malaysia). We also hold AgeCope certification, meeting international standards of aged care quality.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I visit a Genesis Life Care centre before making a decision?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We encourage families to book a free tour and consultation at any of our 5 centres. Our care advisors will walk you through the facilities, explain our care programmes, and help you find the right solution. Call +6012-321 0457 or visit our contact page to schedule a visit.',
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── HERO ─── */}
      <section className="hp-hero relative overflow-hidden">
        {/* Background image */}
        <img
          src="/images/general/hero-main.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary/85 to-secondary/80" />
        {/* Decorative circles */}
        <div className="absolute -top-[20%] -right-[10%] w-[55%] pb-[55%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[30%] -left-[5%] w-[40%] pb-[40%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase mb-6">
                <span className="w-6 h-0.5 bg-gold rounded" />
                Malaysia&apos;s Trusted Aged Care Provider
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                {settings?.site_name || 'Genesis Life Care'}
              </h1>
              {settings?.tagline && (
                <p className="hp-sub text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
                  {settings.tagline}. Compassionate, personalized nursing home and senior care across Klang Valley &amp; Johor Bahru.
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/contact"
                  className="hp-gold-btn inline-flex items-center justify-center gap-2 bg-gold text-gray-900 px-7 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
                >
                  Book a Free Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <Link
                  href="/about-us"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-white/25 transition-all"
                >
                  Learn About Us
                </Link>
              </div>

              {/* Trust badges row */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <span className="block text-sm font-bold">5 Centres</span>
                    <span className="hp-muted text-xs">Across Malaysia</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <span className="block text-sm font-bold">Affordable Rates</span>
                    <span className="hp-muted text-xs">Government Approved</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                  </div>
                  <div>
                    <span className="block text-sm font-bold">4.8 / 5.0</span>
                    <span className="hp-muted text-xs">Google Reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Quick enquiry card */}
            <div className="hp-enquiry bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              <span className="hp-eq-label text-xs font-bold tracking-[.14em] uppercase text-primary mb-3 block">Quick Enquiry</span>
              <h3 className="text-xl font-extrabold text-gray-900 mb-1 leading-tight">Find the Right Care for Your Loved One</h3>
              <p className="hp-eq-sub text-sm text-gray-500 mb-6">Our care advisors will get back to you within 24 hours.</p>
              <div className="flex flex-col gap-3 mb-5">
                <a href={`tel:${settings?.contact_phone || '+6012-321 0457'}`} className="flex items-center gap-3 p-3 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors group">
                  <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <span className="hp-eq-sub text-xs text-gray-500">Call us directly</span>
                    <span className="hp-eq-phone block text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{settings?.contact_phone || '+6012-321 0457'}</span>
                  </div>
                </a>
                <a href={`mailto:${settings?.contact_email || 'enquiries@genesiscare.com.my'}`} className="flex items-center gap-3 p-3 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors group">
                  <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <span className="hp-eq-sub text-xs text-gray-500">Email us</span>
                    <span className="hp-eq-phone block text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{settings?.contact_email || 'enquiries@genesiscare.com.my'}</span>
                  </div>
                </a>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center bg-primary text-white py-3.5 rounded-full text-base font-bold shadow-md hover:bg-primary-600 transition-all"
              >
                Get a Free Care Assessment →
              </Link>
              <p className="text-center text-xs text-gray-400 mt-3">No obligations. 100% confidential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-white border-b border-gray-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8">
            <div className="text-center flex-1 min-w-[120px]">
              <span className="block text-2xl sm:text-3xl font-extrabold text-primary leading-none">500+</span>
              <span className="text-xs text-gray-500 mt-1 font-medium">Families Served</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="text-center flex-1 min-w-[120px]">
              <span className="block text-2xl sm:text-3xl font-extrabold text-primary leading-none">5</span>
              <span className="text-xs text-gray-500 mt-1 font-medium">Care Centres</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="text-center flex-1 min-w-[120px]">
              <span className="block text-2xl sm:text-3xl font-extrabold text-primary leading-none">24/7</span>
              <span className="text-xs text-gray-500 mt-1 font-medium">Professional Care</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="text-center flex-1 min-w-[120px]">
              <span className="block text-2xl sm:text-3xl font-extrabold text-primary leading-none">4.8</span>
              <span className="text-xs text-gray-500 mt-1 font-medium">Google Rating ★</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="flex items-center justify-center gap-4 flex-1 min-w-[200px]">
              <img
                src="/images/logos/jkm-logo.webp"
                alt="Affordable elderly care Malaysia"
                className="h-10 w-auto"
              />
              <img
                src="/images/logos/agecope-logo.webp"
                alt="AgeCope certification"
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="bg-[#f4f8fb] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Comprehensive Care for Every Need</h2>
            <p className="text-gray-500 text-lg">From long-term residential nursing to specialised memory care, we have the right support for your family.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nursing Home Care</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">24/7 professional nursing care in a warm, homelike environment. Personalised care plans for each resident.</p>
              <Link href="/about-us" className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span>→</span>
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dementia &amp; Memory Care</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">Specialised programmes for Alzheimer&apos;s, dementia, and Parkinson&apos;s. Safe, structured, and stimulating environment.</p>
              <Link href="/dementia-care" className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span>→</span>
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Post-Operative Recovery</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">Short-term rehabilitation and recovery care after surgery. Physiotherapy and medical supervision included.</p>
              <Link href="/post-op-care-malaysia" className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span>→</span>
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stroke Rehabilitation</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">Comprehensive stroke recovery with physiotherapy, occupational therapy, and 24-hour nursing support.</p>
              <Link href="/stroke-rehabilitation-kajang" className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span>→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHY GENESIS ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                Why Families Trust Genesis Life Care
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                With over a decade of experience in elderly care, we combine medical expertise with genuine compassion. Every family receives personalised attention from our dedicated team of nurses and caregivers.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl border-l-[3px] border-primary">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <strong className="block text-sm font-bold text-gray-900">Affordable &amp; Quality Care</strong>
                    <span className="text-sm text-gray-500">Competitive rates with transparent pricing across all centres. No hidden costs.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl border-l-[3px] border-primary">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <strong className="block text-sm font-bold text-gray-900">Qualified Medical Staff On-Site</strong>
                    <span className="text-sm text-gray-500">Registered nurses, physiotherapists, and trained caregivers available around the clock.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl border-l-[3px] border-primary">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <strong className="block text-sm font-bold text-gray-900">Personalised Care Plans</strong>
                    <span className="text-sm text-gray-500">Every resident receives a tailored care plan reviewed regularly with family members.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl border-l-[3px] border-primary">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <strong className="block text-sm font-bold text-gray-900">Transparent &amp; Affordable Pricing</strong>
                    <span className="text-sm text-gray-500">No hidden charges. Packages from RM 2,500/month with flexible payment options.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Video thumbnail + stats */}
            <div className="flex flex-col gap-4">
              <a
                href="https://youtu.be/Shmrvy-_b9U?si=dBv-B-8IpE1H4MJx"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden aspect-[16/10] relative group"
              >
                <img
                  src="/images/general/staff-care.jpg"
                  alt="Genesis Life Care virtual tour video"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                {/* Play button */}
                <div className="hp-video-overlay absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span className="text-sm font-bold">Take a Virtual Tour</span>
                  <span className="hp-muted text-xs">See life inside a Genesis centre</span>
                </div>
              </a>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 rounded-xl p-5 text-center">
                  <svg className="w-8 h-8 text-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="block text-2xl font-extrabold text-primary">10+</span>
                  <span className="text-xs text-gray-500 font-medium">Years Experience</span>
                </div>
                <div className="bg-primary-50 rounded-xl p-5 text-center">
                  <svg className="w-8 h-8 text-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="block text-2xl font-extrabold text-primary">150+</span>
                  <span className="text-xs text-gray-500 font-medium">Care Staff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCATIONS ─── */}
      <section className="bg-[#f4f8fb] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">Our Locations</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">5 Centres Across Malaysia</h2>
            <p className="text-gray-500 text-lg">Conveniently located across Klang Valley and Johor Bahru.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Petaling Jaya', slug: 'nursing-home-in-petaling-jaya', rating: '4.9', img: '/images/pj-centre.jpg' },
              { name: 'Klang', slug: 'nursing-home-in-klang', rating: '4.8', img: '/images/klang-centre.jpg' },
              { name: 'Kajang', slug: 'nursing-home-kajang', rating: '4.7', img: '/images/kajang-centre.jpeg' },
              { name: 'Puchong', slug: 'nursing-home-in-puchong', rating: '4.8', img: '/images/puchong-centre.jpeg' },
              { name: 'Johor Bahru', slug: 'nursing-home-in-johor-bahru', rating: '4.8', img: '/images/jb-centre.jpeg' },
            ].map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="bg-white rounded-2xl border border-gray-200 text-center hover:border-primary hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col overflow-hidden"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={loc.img}
                    alt={`Genesis Life Care ${loc.name} centre`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col items-center gap-2">
                  <span className="text-base font-bold text-gray-900">{loc.name}</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    <span className="font-semibold">{loc.rating}</span>
                    <span>Google</span>
                  </div>
                  <span className="text-xs font-bold text-primary">View Centre →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CMS page content removed — centre home page is fully hardcoded */}

      {/* ─── RECENT BLOG POSTS (if published) ─── */}
      {recentPosts.length > 0 && (
        <section className="bg-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">Resources</span>
              <h2 className="text-3xl font-bold text-gray-900">Latest News &amp; Guides</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden group"
                >
                  {post.featured_image_url && (
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    {post.category && (
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                    )}
                    <h3 className="text-base font-bold text-gray-900 mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-3">
                      {post.published_at
                        ? new Date(post.published_at).toLocaleDateString('en-MY', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        : ''}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {recentPosts.length > 3 && (
              <div className="text-center mt-8">
                <Link href="/blog" className="text-primary font-bold hover:text-primary-600 transition-colors">
                  View All Posts →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── FAQ SECTION ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">Common Questions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                q: 'How much does a nursing home cost in Malaysia?',
                a: 'Genesis Life Care offers affordable nursing home packages starting from RM 2,500 per month. Rates vary by centre and level of care required. All pricing is transparent with no hidden charges. Contact us for a personalised quote.',
              },
              {
                q: 'Where are Genesis Life Care centres located?',
                a: 'We have 5 centres across Malaysia: Petaling Jaya, Klang, Kajang, and Puchong in the Klang Valley (Selangor), plus Johor Bahru in the southern region. All centres are conveniently located and easily accessible.',
              },
              {
                q: 'What types of care does Genesis Life Care provide?',
                a: 'We provide a comprehensive range of elderly care services including 24/7 nursing home care, dementia and memory care, stroke rehabilitation, post-operative recovery care, palliative care, and short-term respite care. Each resident receives a personalised care plan.',
              },
              {
                q: 'Is Genesis Life Care government-approved?',
                a: 'Yes, all Genesis Life Care centres are registered and approved by JKM (Jabatan Kebajikan Masyarakat). We also hold AgeCope certification, meeting international standards of aged care quality.',
              },
              {
                q: 'Can I visit a Genesis Life Care centre before making a decision?',
                a: 'Absolutely. We encourage families to book a free tour and consultation at any of our 5 centres. Our care advisors will walk you through the facilities, explain our care programmes, and help you find the right solution.',
              },
            ].map((item, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-bold text-gray-900 text-base hover:bg-gray-100 transition-colors">
                  {item.q}
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="hp-cta relative bg-gradient-to-br from-primary via-primary-400 to-secondary overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] w-[60%] pb-[60%] rounded-full bg-white/[.06] pointer-events-none" />
        <div className="absolute -bottom-[50%] -left-[5%] w-[50%] pb-[50%] rounded-full bg-black/[.06] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="hp-sub text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our care advisors speak to dozens of families every week and can help find the perfect care solution for your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="hp-gold-btn inline-flex items-center justify-center gap-2 bg-gold text-gray-900 px-8 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
            >
              Schedule a Visit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a
              href={`tel:${settings?.contact_phone || '+6012-321 0457'}`}
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white/25 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call {settings?.contact_phone || '+6012-321 0457'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
