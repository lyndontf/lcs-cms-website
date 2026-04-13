import { Metadata } from 'next';
import { getAvailableBiodata } from '@/lib/supabase';
import { getCurrentSiteBaseUrl } from '@/lib/site-context';
import BiodataListClient from './BiodataListClient';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getCurrentSiteBaseUrl();
  return {
    title: 'Candidate Biodata — Browse Available Helpers & Caregivers',
    description:
      'Browse pre-screened, Genesis Training Academy certified domestic helpers and caregivers available for placement. Contact us to arrange a video interview with any candidate.',
    alternates: { canonical: `${baseUrl}/biodata` },
  };
}

export default async function BiodataPage() {
  const candidates = await getAvailableBiodata();

  return (
    <article>
      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-[#1a5a9e] via-[#2E72B8] to-[#09B7D3] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase mb-5 text-white/80">
            <span className="w-6 h-0.5 bg-[#FAB515] rounded" />
            Candidate Biodata
            <span className="w-6 h-0.5 bg-[#FAB515] rounded" />
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-5 text-white">
            Browse Available Helpers &amp; Caregivers
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-white/90">
            Pre-screened, Genesis Training Academy certified candidates ready for placement.
            <br className="hidden sm:block" />
            Contact us to arrange a video interview with any candidate.
          </p>
        </div>
      </section>

      {/* ─── LISTING ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <BiodataListClient candidates={candidates} />
      </div>
    </article>
  );
}
