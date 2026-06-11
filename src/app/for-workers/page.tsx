import { Metadata } from 'next';
import { getPublishedJobListingsForSite } from '@/lib/supabase';
import { getCurrentSiteBaseUrl } from '@/lib/site-context';
import GlcHireNav from '@/components/GlcHireNav';
import GlcHireFooter from '@/components/GlcHireFooter';
import ForWorkersClient from './ForWorkersClient';

export const revalidate = 60;

const GLC_ORG_ID = '09db6826-ee70-4e6a-a8b6-f19667cfd025';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getCurrentSiteBaseUrl();
  return {
    title: 'For Care Workers — Jobs, Training & Career Opportunities',
    description:
      'Looking for a career in home care? Browse job openings, get certified through Genesis Training Academy, and apply to become a placed caregiver with GLC Hire.',
    alternates: { canonical: `${baseUrl}/for-workers` },
  };
}

export default async function ForWorkersPage() {
  const jobs = await getPublishedJobListingsForSite(GLC_ORG_ID);

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
              Career Opportunities
              <span className="w-6 h-0.5 bg-[#FAB515] rounded" />
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-5 text-white">
              Start Your Career in Home Care
            </h1>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-white/90">
              Join our team of certified caregivers and domestic helpers. Get trained, get certified, and get placed with families across Malaysia.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="#apply"
                className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-bold bg-[#FAB515] text-gray-900 hover:bg-[#f0a800] transition-colors shadow-lg"
              >
                Apply Now
              </a>
              <a
                href="#training"
                className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-bold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
              >
                View Training Programmes
              </a>
            </div>
          </div>
        </section>

        {/* ─── JOB LISTINGS ─── */}
        <section id="jobs" className="py-14 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase text-[#2E72B8] mb-3">
                <span className="w-6 h-0.5 bg-[#FAB515] rounded" />
                Open Positions
                <span className="w-6 h-0.5 bg-[#FAB515] rounded" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Current Job Openings</h2>
              <p className="text-gray-500 mt-2 max-w-xl mx-auto">
                We&apos;re always looking for dedicated caregivers and domestic helpers. Browse our current openings below.
              </p>
            </div>

            {jobs.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-100">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500">No openings right now. Submit your profile below and we&apos;ll contact you when positions become available.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow p-6"
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
                            {job.employment_type === 'full_time'
                              ? 'Full Time'
                              : job.employment_type === 'part_time'
                              ? 'Part Time'
                              : job.employment_type}
                          </span>
                        </div>
                      </div>
                      {job.salary_range && (
                        <span className="text-sm font-semibold text-[#2E72B8] whitespace-nowrap">{job.salary_range}</span>
                      )}
                    </div>
                    {job.description && (
                      <p className="text-sm text-gray-600 mt-3 line-clamp-2">{job.description}</p>
                    )}
                    <div className="mt-4">
                      <a
                        href="#apply"
                        className="inline-flex items-center text-sm font-semibold text-[#2E72B8] hover:text-[#09B7D3] transition-colors"
                      >
                        Apply for this position
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ─── TRAINING CTA ─── */}
        <section id="training" className="py-14 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase text-[#FAB515] mb-3">
                    Get Certified
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                    Genesis Training Academy
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Boost your career with professional certification from Genesis Training Academy. Our programmes cover elderly care, dementia care, childcare, and domestic helper training — recognized by employers across Malaysia.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600 mb-8">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Nationally recognized caregiver certification
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Hands-on practical training with experienced nurses
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Job placement assistance upon completion
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Flexible class schedules — weekday and weekend options
                    </li>
                  </ul>
                  <a
                    href="https://gtacademy.com.my"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#2E72B8] hover:bg-[#245d99] transition-colors shadow-sm w-fit"
                  >
                    Visit Genesis Training Academy
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                {/* force-white-text beats the injected theme's !important
                    colour rules, which repaint the inline white text dark. */}
                <div className="force-white-text bg-gradient-to-br from-[#2E72B8] to-[#09B7D3] p-8 sm:p-12 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'white' }}>Available Programmes</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Elderly Care Certificate', duration: '2 weeks', desc: 'Basic to advanced elderly care skills' },
                      { title: 'Dementia Care Specialist', duration: '3 weeks', desc: 'Specialized care for dementia patients' },
                      { title: 'Domestic Helper Training', duration: '1 week', desc: 'Housekeeping, cooking, and family care' },
                      { title: 'Childcare Certificate', duration: '2 weeks', desc: 'Newborn to school-age child care' },
                    ].map((prog) => (
                      <div key={prog.title} className="bg-white/10 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm" style={{ color: 'white' }}>{prog.title}</h4>
                          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{prog.duration}</span>
                        </div>
                        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>{prog.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── APPLICATION FORM ─── */}
        <section id="apply" className="py-14 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase text-[#2E72B8] mb-3">
                <span className="w-6 h-0.5 bg-[#FAB515] rounded" />
                Apply Now
                <span className="w-6 h-0.5 bg-[#FAB515] rounded" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Submit Your Application</h2>
              <p className="text-gray-500 mt-2">
                Fill in your details below. Our team will review your application and get in touch within 3 working days.
              </p>
            </div>
            <ForWorkersClient />
          </div>
        </section>
      </article>
      <GlcHireFooter />
    </>
  );
}
