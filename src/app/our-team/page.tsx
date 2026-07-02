import { Metadata } from 'next';
import Link from 'next/link';
import { centres } from '@/data/centres';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the people behind Genesis Life Care — our operations leadership, centre managers and therapists who make quality elderly care happen every day across our 5 centres.',
  alternates: {
    canonical: 'https://genesiscare.com.my/our-team',
    languages: { 'zh-Hans': 'https://genesiscare.com.my/zh/our-team' },
  },
  openGraph: {
    title: 'Our Team | Genesis Life Care',
    description: 'Meet the operations leaders, centre managers and therapists behind Genesis Life Care.',
    url: 'https://genesiscare.com.my/our-team',
    siteName: 'Genesis Life Care',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/general/staff-care.jpg', width: 1200, height: 630, alt: 'The Genesis Life Care team' }],
  },
};

export const revalidate = 60;

/* ─── Dedupe the real, published team roster across centres ─────────────── */

const seen = new Set<string>();
const team = Object.values(centres)
  .flatMap((c) => (c.teamMembers || []).map((m) => ({ ...m, centre: c.name })))
  .filter((m) => {
    if (seen.has(m.name)) return false;
    seen.add(m.name);
    return true;
  });

const displayRole = (m: { role: string; centre: string }) =>
  m.role === 'Centre Manager' ? `Centre Manager · ${m.centre}` : m.role;

export default function OurTeam() {
  return (
    <main className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div { color: inherit; }
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div,
        .hero-dark .text-4xl, .hero-dark .text-5xl, .hero-dark .sm\\:text-5xl,
        .hero-dark .text-3xl, .hero-dark .text-lg, .hero-dark .text-white { color: #ffffff !important; }
        .hero-dark .text-gold { color: #FAB515 !important; }
      ` }} />

      {/* Person structured data (real published team) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalOrganization',
            name: 'Genesis Life Care',
            url: 'https://genesiscare.com.my',
            employee: team.map((m) => ({
              '@type': 'Person',
              name: m.name,
              jobTitle: m.role,
            })),
          }),
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 text-center">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">Our Team</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mt-3 mb-4" style={{ color: 'white' }}>
            The people behind the care
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Quality care comes down to people. Meet the leadership, managers and therapists who make
            Genesis feel like home for every resident across our five centres.
          </p>
        </div>
      </section>

      {/* ── TEAM GRID ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition text-center">
                <div className="bg-gray-50 pt-6">
                  <img src={m.img} alt={m.name} className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-white shadow" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{m.name}</h3>
                  <p className="text-sm font-semibold text-secondary mb-3">{displayRole(m)}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="hero-dark bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>Meet the team in person</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>Book a free visit to any Genesis centre and meet the people who&apos;ll care for your loved one.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl">
            Book a Free Visit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
