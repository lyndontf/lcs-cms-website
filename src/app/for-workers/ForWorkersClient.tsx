'use client';

import { useState } from 'react';
import { submitBiodataApplication } from '@/lib/supabase';

const GLC_ORG_ID = '09db6826-ee70-4e6a-a8b6-f19667cfd025';

const CATEGORIES = [
  { value: '', label: 'Select a category...' },
  { value: 'Domestic Maid', label: 'Domestic Maid / Helper' },
  { value: 'Home Elder Care', label: 'Home Elder Care' },
  { value: 'Specialist — Dementia Care', label: 'Specialist — Dementia Care' },
  { value: 'Childcare Specialist', label: 'Childcare Specialist' },
];

export default function ForWorkersClient() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [nationality, setNationality] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please fill in your full name and email address.');
      return;
    }
    setSubmitting(true);
    setError('');

    const success = await submitBiodataApplication({
      full_name: name.trim(),
      applicant_email: email.trim(),
      applicant_phone: phone.trim() || undefined,
      job_category: category || undefined,
      nationality: nationality.trim() || undefined,
      cover_letter: coverLetter.trim() || undefined,
      organization_id: GLC_ORG_ID,
    });

    setSubmitting(false);
    if (success) {
      setSubmitted(true);
    } else {
      setError('Something went wrong. Please try again or contact us directly.');
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for your interest. Our team will review your application and contact you within 3 working days.
        </p>
        <p className="text-sm text-gray-500">
          If you have any questions, contact us at{' '}
          <a href="tel:+60193250457" className="text-[#2E72B8] font-semibold hover:underline">
            +6019 325 0457
          </a>{' '}
          or{' '}
          <a href="mailto:enquiries@genesiscare.com.my" className="text-[#2E72B8] font-semibold hover:underline">
            enquiries@genesiscare.com.my
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-5">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Siti Nurhaliza"
            className="w-full h-[42px] px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E72B8]/20 focus:border-[#2E72B8]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full h-[42px] px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E72B8]/20 focus:border-[#2E72B8]"
          />
        </div>
      </div>

      {/* Phone + Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+60123456789"
            className="w-full h-[42px] px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E72B8]/20 focus:border-[#2E72B8]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
            Job Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full h-[42px] px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E72B8]/20 focus:border-[#2E72B8] bg-white"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Nationality */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
          Nationality
        </label>
        <input
          type="text"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          placeholder="e.g. Indonesian, Malaysian, Filipino"
          className="w-full h-[42px] px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E72B8]/20 focus:border-[#2E72B8]"
        />
      </div>

      {/* Cover Letter / About Yourself */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
          Tell Us About Yourself
        </label>
        <textarea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          placeholder="Briefly describe your experience, skills, and what type of work you're looking for..."
          rows={4}
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E72B8]/20 focus:border-[#2E72B8] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 rounded-lg text-sm font-bold text-white bg-[#2E72B8] hover:bg-[#245d99] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
      >
        {submitting ? 'Submitting...' : 'Submit Application'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        By submitting this form, you agree to allow us to store your information for placement purposes.
        We will never share your data with unauthorized third parties.
      </p>
    </form>
  );
}
