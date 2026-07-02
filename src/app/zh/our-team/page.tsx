import { Metadata } from 'next';
import Link from 'next/link';
import { centres } from '@/data/centres';

export const metadata: Metadata = {
  title: '我们的团队',
  description:
    '认识创世生命关怀背后的团队 —— 运营领导、中心经理与治疗师，他们每天在五间中心用心提供优质的长者照护。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/our-team',
    languages: {
      en: 'https://genesiscare.com.my/our-team',
      'x-default': 'https://genesiscare.com.my/our-team',
    },
  },
  openGraph: {
    title: '我们的团队 | 创世生命关怀',
    description: '认识创世生命关怀背后的运营领导、中心经理与治疗师。',
    url: 'https://genesiscare.com.my/zh/our-team',
    siteName: '创世生命关怀',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/general/staff-care.jpg', width: 1200, height: 630, alt: '创世生命关怀团队' }],
  },
};

export const revalidate = 60;

const ZH_CENTRE: Record<string, string> = {
  Klang: '巴生',
  'Petaling Jaya': '八打灵再也',
  Puchong: '蒲种',
  Kajang: '加影',
  'Johor Bahru': '新山',
};

const ZH_ROLE: Record<string, string> = {
  'Chief of Operations': '运营总监',
  'Senior Therapist': '高级治疗师',
  'Centre Manager': '中心经理',
  Supervisor: '主管',
};

function zhBio(role: string, zhCentre: string): string {
  switch (role) {
    case 'Chief of Operations':
      return '统筹创世生命关怀的运营，确保各中心维持最高的照护标准。';
    case 'Senior Therapist':
      return '专注于长者康复，采用以人为本的多学科方法。';
    case 'Supervisor':
      return '协调日常照护运作，确保各班次顺畅衔接。';
    case 'Centre Manager':
      return `领导${zhCentre}中心团队，致力于为每位长者提供温暖、贴心的照护。`;
    default:
      return '创世生命关怀团队的一员，用心照护每位长者。';
  }
}

const seen = new Set<string>();
const team = Object.values(centres)
  .flatMap((c) => (c.teamMembers || []).map((m) => ({ ...m, centre: c.name })))
  .filter((m) => {
    if (seen.has(m.name)) return false;
    seen.add(m.name);
    return true;
  });

export default function OurTeamZh() {
  return (
    <main className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div { color: inherit; }
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div,
        .hero-dark .text-4xl, .hero-dark .text-5xl, .hero-dark .sm\\:text-5xl,
        .hero-dark .text-3xl, .hero-dark .text-lg, .hero-dark .text-white { color: #ffffff !important; }
        .hero-dark .text-gold { color: #FAB515 !important; }
      ` }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalOrganization',
            name: 'Genesis Life Care',
            url: 'https://genesiscare.com.my',
            employee: team.map((m) => ({ '@type': 'Person', name: m.name, jobTitle: ZH_ROLE[m.role] || m.role })),
          }),
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 text-center">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">我们的团队</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mt-3 mb-4" style={{ color: 'white' }}>
            照护背后的人
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            优质照护，归根结底在于人。认识让创世成为每位长者温暖之家的领导、经理与治疗师团队。
          </p>
        </div>
      </section>

      {/* ── TEAM GRID ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((m, i) => {
              const zhCentre = ZH_CENTRE[m.centre] || m.centre;
              const role = m.role === 'Centre Manager' ? `中心经理 · ${zhCentre}` : (ZH_ROLE[m.role] || m.role);
              return (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition text-center">
                  <div className="bg-gray-50 pt-6">
                    <img src={m.img} alt={m.name} className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-white shadow" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">{m.name}</h3>
                    <p className="text-sm font-semibold text-secondary mb-3">{role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{zhBio(m.role, zhCentre)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="hero-dark bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>亲自认识我们的团队</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>预约免费参观任何一间创世中心，认识将照护您长者的团队。</p>
          <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl">
            预约免费参观
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
