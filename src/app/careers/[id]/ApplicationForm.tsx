'use client';

import { useState } from 'react';
import { submitJobApplication } from '@/lib/supabase';

interface Props {
  jobListingId: string;
  organizationId: string;
}

export default function ApplicationForm({ jobListingId, organizationId }: Props) {
  const [form, setForm] = useState({
    applicant_name: '',
    applicant_email: '',
    applicant_phone: '',
    resume_url: '',
    cover_letter: '',
    current_employer: '',
    years_experience: '',
    expected_salary: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.applicant_name.trim() || !form.applicant_email.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    setError('');

    const success = await submitJobApplication({
      job_listing_id: jobListingId,
      organization_id: organizationId,
      applicant_name: form.applicant_name.trim(),
      applicant_email: form.applicant_email.trim(),
      applicant_phone: form.applicant_phone.trim() || undefined,
      resume_url: form.resume_url.trim() || undefined,
      cover_letter: form.cover_letter.trim() || undefined,
      current_employer: form.current_employer.trim() || undefined,
      years_experience: form.years_experience ? parseInt(form.years_experience) : undefined,
      expected_salary: form.expected_salary.trim() || undefined,
    });

    setSubmitting(false);

    if (success) {
      setSubmitted(true);
    } else {
      setError('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
        <p className="text-gray-600">Thank you for your interest. We will review your application and get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            name="applicant_name"
            value={form.applicant_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input
            type="email"
            name="applicant_email"
            value={form.applicant_email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="applicant_phone"
            value={form.applicant_phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="+60 12-345 6789"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Resume / CV URL</label>
          <input
            type="url"
            name="resume_url"
            value={form.resume_url}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="https://drive.google.com/..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Employer</label>
          <input
            type="text"
            name="current_employer"
            value={form.current_employer}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Company name"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Years Experience</label>
            <input
              type="number"
              name="years_experience"
              value={form.years_experience}
              onChange={handleChange}
              min="0"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expected Salary</label>
            <input
              type="text"
              name="expected_salary"
              value={form.expected_salary}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="RM 3,000"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
        <textarea
          name="cover_letter"
          value={form.cover_letter}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-y"
          placeholder="Tell us why you're a great fit for this role..."
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  );
}
