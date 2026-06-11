import { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedJobListings } from '@/lib/supabase';
import { getCurrentSiteBaseUrl } from '@/lib/site-context';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getCurrentSiteBaseUrl();
  return {
    title: "Careers",
    description:
      'Explore open positions at Genesis Life Care. We are hiring nurses, caregivers, and support staff across our centres in Malaysia.',
    alternates: { canonical: `${baseUrl}/careers` },
  };
}

function typeLabel(t: string): string {
  switch (t) {
    case 'full_time': return 'Full Time';
    case 'part_time': return 'Part Time';
    case 'contract': return 'Contract';
    case 'internship': return 'Internship';
    default: return t || '';
  }
}

export default async function CareersPage() {
  const jobs = await getPublishedJobListings();

  return (
    <article>
      {/* ─── HERO ─── */}
      {/* Background-image hero matching the homepage pattern. force-white-text
          beats the injected legacy stylesheet's !important colour rules, which
          were rendering the hero copy dark-on-dark. */}
      <section className="relative overflow-hidden force-white-text">
        <img
          src="/images/careers-hero.webp"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary/80 to-secondary/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase mb-4 text-white/80">
            <span className="w-6 h-0.5 bg-gold rounded" />
            Careers
            <span className="w-6 h-0.5 bg-gold rounded" />
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-4 text-white">
            Build Your Career in Care
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-white/90">
            Join a team that puts families first. Explore our current openings across nursing, caregiving, and support roles.
          </p>
        </div>
      </section>

      {/* ─── JOB LISTINGS ─── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Current Openings</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Browse our open positions below and apply online.
            </p>
          </div>

          {jobs.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-gray-500">
                No openings right now. Please check back soon, or reach out via our Contact page.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/careers/${job.id}`}
                  className="block rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow p-6"
                  style={{ backgroundColor: '#F0F7FF' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {job.department && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                            {job.department}
                          </span>
                        )}
                        {job.location && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            {job.location}
                          </span>
                        )}
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                          {typeLabel(job.employment_type)}
                        </span>
                      </div>
                    </div>
                    {job.salary_range && (
                      <span className="text-sm font-semibold text-primary whitespace-nowrap">{job.salary_range}</span>
                    )}
                  </div>
                  {job.description && (
                    <p className="text-sm text-gray-600 mt-3 line-clamp-2">{job.description}</p>
                  )}
                  <span className="inline-flex items-center text-sm font-semibold text-primary mt-4">
                    View &amp; apply
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* ─── Caregiver pool invite ─── */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary to-secondary p-8 sm:p-10 text-center">
            <h3 className="text-xl sm:text-2xl font-extrabold mb-2" style={{ color: '#ffffff' }}>
              Caregivers — join our talent pool
            </h3>
            <p className="text-sm sm:text-base max-w-2xl mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Looking for short or long-term caregiving opportunities? Submit your profile and our placement team will be in touch when a match comes up.
            </p>
            <a
              href="/for-workers#apply"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold bg-gold text-gray-900 hover:bg-yellow-500 transition-colors shadow-sm"
            >
              Submit your profile
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
