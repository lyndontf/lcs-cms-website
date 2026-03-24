'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPublishedJobListings, JobListing } from '@/lib/supabase';

function typeLabel(type: string) {
  switch (type) {
    case 'full_time': return 'Full Time';
    case 'part_time': return 'Part Time';
    case 'contract': return 'Contract';
    case 'internship': return 'Internship';
    default: return type;
  }
}

export default function JobListingsEmbed() {
  const [listings, setListings] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPublishedJobListings().then((data) => {
      setListings(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="py-8 text-center text-gray-500">
        Loading job listings...
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500 text-lg">No open positions at the moment. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 my-8">
      {listings.map((job) => (
        <Link
          key={job.id}
          href={`/careers/${job.id}`}
          className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                {job.department && (
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    {job.department}
                  </span>
                )}
                {job.location && (
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {job.location}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {typeLabel(job.employment_type)}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              {job.salary_range && (
                <span className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                  {job.salary_range}
                </span>
              )}
              <span className="text-sm font-medium text-blue-600 hover:text-blue-800">
                Apply Now &rarr;
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
