'use client';

import { useState, useRef } from 'react';
import { submitBiodataApplication, uploadBiodataPhoto } from '@/lib/supabase';

const GLC_ORG_ID = '09db6826-ee70-4e6a-a8b6-f19667cfd025';

const CATEGORIES = [
  { value: '', label: 'Select a category...' },
  { value: 'Domestic Maid', label: 'Domestic Maid / Helper' },
  { value: 'Home Elder Care', label: 'Home Elder Care' },
  { value: 'Specialist — Dementia Care', label: 'Specialist — Dementia Care' },
  { value: 'Childcare Specialist', label: 'Childcare Specialist' },
];

const MARITAL_OPTIONS = ['', 'Single', 'Married', 'Divorced', 'Widowed'];
const EDUCATION_OPTIONS = ['', 'No Formal Education', 'Primary School', 'Secondary School', 'High School / SPM', 'Diploma', 'Degree'];
const RELIGION_OPTIONS = ['', 'Islam', 'Christianity', 'Buddhism', 'Hinduism', 'Other'];
const FOOD_OPTIONS = ['', 'No Preference', 'Halal', 'Vegetarian', 'Non-Vegetarian'];

const COMMON_LANGUAGES = ['English', 'Bahasa Malaysia', 'Bahasa Indonesia', 'Mandarin', 'Cantonese', 'Hokkien', 'Tamil', 'Filipino/Tagalog', 'Hindi'];
const LANG_LEVELS = ['Basic', 'Conversational', 'Fluent'];

const INPUT_CLASS = 'w-full h-[42px] px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E72B8]/20 focus:border-[#2E72B8] bg-white';
const LABEL_CLASS = 'block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5';

export default function ForWorkersClient() {
  // Personal info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [nationality, setNationality] = useState('');
  const [dob, setDob] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [religion, setReligion] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [foodPreference, setFoodPreference] = useState('');

  // Languages
  const [languages, setLanguages] = useState<{ name: string; level: string }[]>([]);
  const [langName, setLangName] = useState('');
  const [langLevel, setLangLevel] = useState('Conversational');

  // Photo
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cover letter & state
  const [coverLetter, setCoverLetter] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function addLanguage() {
    if (!langName.trim()) return;
    if (languages.some((l) => l.name.toLowerCase() === langName.trim().toLowerCase())) return;
    setLanguages([...languages, { name: langName.trim(), level: langLevel }]);
    setLangName('');
    setLangLevel('Conversational');
  }

  function removeLanguage(index: number) {
    setLanguages(languages.filter((_, i) => i !== index));
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setError('Photo must be smaller than 5MB.');
      return;
    }
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
    setError('');
  }

  function removePhoto() {
    setPhotoFile(null);
    setPhotoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function calculateAge(dobStr: string): number | undefined {
    if (!dobStr) return undefined;
    const birth = new Date(dobStr);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age > 0 ? age : undefined;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please fill in your full name and email address.');
      return;
    }
    setSubmitting(true);
    setError('');

    // Upload photo first if provided
    let photoUrl: string | undefined;
    if (photoFile) {
      const url = await uploadBiodataPhoto(photoFile);
      if (url) {
        photoUrl = url;
      } else {
        setError('Failed to upload photo. Please try again.');
        setSubmitting(false);
        return;
      }
    }

    const age = calculateAge(dob);

    const success = await submitBiodataApplication({
      full_name: name.trim(),
      applicant_email: email.trim(),
      applicant_phone: phone.trim() || undefined,
      job_category: category || undefined,
      nationality: nationality.trim() || undefined,
      date_of_birth: dob || undefined,
      age,
      marital_status: maritalStatus || undefined,
      education_level: educationLevel || undefined,
      religion: religion || undefined,
      height_cm: heightCm ? parseFloat(heightCm) : undefined,
      weight_kg: weightKg ? parseFloat(weightKg) : undefined,
      food_preference: foodPreference || undefined,
      languages: languages.length > 0 ? languages : undefined,
      cover_letter: coverLetter.trim() || undefined,
      photo_url: photoUrl,
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
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      {/* ─── PHOTO UPLOAD ─── */}
      <div>
        <label className={LABEL_CLASS}>Profile Photo</label>
        <div className="flex items-center gap-4">
          {photoPreview ? (
            <div className="relative">
              <img
                src={photoPreview}
                alt="Preview"
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
              />
              <button
                type="button"
                onClick={removePhoto}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
              >
                &times;
              </button>
            </div>
          ) : (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-20 h-20 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-[#2E72B8] hover:bg-blue-50/50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          )}
          <div className="text-sm text-gray-500">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-[#2E72B8] font-semibold hover:underline"
            >
              {photoPreview ? 'Change photo' : 'Upload a photo'}
            </button>
            <p className="text-xs text-gray-400 mt-0.5">JPG or PNG, max 5MB</p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handlePhotoChange}
            className="hidden"
          />
        </div>
      </div>

      {/* ─── SECTION: CONTACT INFO ─── */}
      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-[#2E72B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          Contact Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={LABEL_CLASS}>Full Name <span className="text-red-400">*</span></label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Siti Nurhaliza" className={INPUT_CLASS} />
          </div>
          <div>
            <label className={LABEL_CLASS}>Email Address <span className="text-red-400">*</span></label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className={INPUT_CLASS} />
          </div>
          <div>
            <label className={LABEL_CLASS}>Phone Number</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+60123456789" className={INPUT_CLASS} />
          </div>
          <div>
            <label className={LABEL_CLASS}>Job Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className={INPUT_CLASS}>
              {CATEGORIES.map((cat) => <option key={cat.value} value={cat.value}>{cat.label}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* ─── SECTION: PERSONAL DETAILS ─── */}
      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-[#2E72B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          Personal Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={LABEL_CLASS}>Nationality</label>
            <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} placeholder="e.g. Indonesian, Malaysian" className={INPUT_CLASS} />
          </div>
          <div>
            <label className={LABEL_CLASS}>Date of Birth</label>
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className={INPUT_CLASS} />
          </div>
          <div>
            <label className={LABEL_CLASS}>Marital Status</label>
            <select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} className={INPUT_CLASS}>
              {MARITAL_OPTIONS.map((o) => <option key={o} value={o}>{o || 'Select...'}</option>)}
            </select>
          </div>
          <div>
            <label className={LABEL_CLASS}>Education Level</label>
            <select value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)} className={INPUT_CLASS}>
              {EDUCATION_OPTIONS.map((o) => <option key={o} value={o}>{o || 'Select...'}</option>)}
            </select>
          </div>
          <div>
            <label className={LABEL_CLASS}>Religion</label>
            <select value={religion} onChange={(e) => setReligion(e.target.value)} className={INPUT_CLASS}>
              {RELIGION_OPTIONS.map((o) => <option key={o} value={o}>{o || 'Select...'}</option>)}
            </select>
          </div>
          <div>
            <label className={LABEL_CLASS}>Food Preference</label>
            <select value={foodPreference} onChange={(e) => setFoodPreference(e.target.value)} className={INPUT_CLASS}>
              {FOOD_OPTIONS.map((o) => <option key={o} value={o}>{o || 'Select...'}</option>)}
            </select>
          </div>
          <div>
            <label className={LABEL_CLASS}>Height (cm)</label>
            <input type="number" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} placeholder="e.g. 160" min="100" max="220" className={INPUT_CLASS} />
          </div>
          <div>
            <label className={LABEL_CLASS}>Weight (kg)</label>
            <input type="number" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} placeholder="e.g. 55" min="30" max="150" className={INPUT_CLASS} />
          </div>
        </div>
      </div>

      {/* ─── SECTION: LANGUAGES ─── */}
      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-[#2E72B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
          Languages Spoken
        </h3>
        {languages.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {languages.map((l, i) => (
              <span key={i} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                {l.name} ({l.level})
                <button type="button" onClick={() => removeLanguage(i)} className="ml-1 text-blue-400 hover:text-red-500">&times;</button>
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          <select value={langName} onChange={(e) => setLangName(e.target.value)} className={`${INPUT_CLASS} flex-1`}>
            <option value="">Select language...</option>
            {COMMON_LANGUAGES.filter((l) => !languages.some((x) => x.name === l)).map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
            <option value="__other">Other...</option>
          </select>
          <select value={langLevel} onChange={(e) => setLangLevel(e.target.value)} className={`${INPUT_CLASS} flex-1`}>
            {LANG_LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
          <button
            type="button"
            onClick={addLanguage}
            className="h-[42px] px-4 rounded-lg text-sm font-bold text-white bg-[#2E72B8] hover:bg-[#245d99] transition-colors flex-shrink-0"
          >
            Add
          </button>
        </div>
        {langName === '__other' && (
          <input
            type="text"
            placeholder="Type language name..."
            className={`${INPUT_CLASS} mt-2`}
            onChange={(e) => setLangName(e.target.value)}
            value=""
          />
        )}
      </div>

      {/* ─── ABOUT YOURSELF ─── */}
      <div>
        <label className={LABEL_CLASS}>Tell Us About Yourself</label>
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
