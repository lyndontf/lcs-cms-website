import { Metadata } from 'next';
import { getAvailableBiodata } from '@/lib/supabase';
import { getCurrentSiteBaseUrl } from '@/lib/site-context';
import GlcHireNav from '@/components/GlcHireNav';
import GlcHireFooter from '@/components/GlcHireFooter';
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
    <>
      <GlcHireNav />
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

        {/* ─── FOR WORKERS CTA ─── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: '#f0f7ff' }}>
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#2E72B8]/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#09B7D3]/5 rounded-full translate-y-1/2 -translate-x-1/3" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase mb-4" style={{ color: '#2E72B8' }}>
              <span className="w-5 h-0.5 rounded" style={{ backgroundColor: '#FAB515' }} />
              For Care Workers
              <span className="w-5 h-0.5 rounded" style={{ backgroundColor: '#FAB515' }} />
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4" style={{ color: '#1a1a2e' }}>
              Interested in a Career in Home Care?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8" style={{ color: '#555' }}>
              Whether you&apos;re an experienced caregiver looking for new placement opportunities
              or someone interested in professional training through our Genesis Training Academy,
              we&apos;d love to hear from you. Apply today and take the next step in your career.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/for-workers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white transition-colors shadow-sm"
                style={{ backgroundColor: '#2E72B8' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Apply Now
              </a>
              <a
                href="/for-workers#training"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-colors border"
                style={{ color: '#2E72B8', borderColor: '#2E72B8' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                View Training Programmes
              </a>
            </div>
          </div>
        </section>
      </article>
      <GlcHireFooter />
    </>
  );
}
