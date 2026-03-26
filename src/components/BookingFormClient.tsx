'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  getBookingCentres,
  getSlotConfigs,
  getBlockedDates,
  getCareTypes,
  getPendingStatusId,
  getBookedSlotCounts,
  submitBooking,
  type BookingCentre,
  type SlotConfig,
  type CareType,
} from '@/lib/supabase';

/* ─── helpers ─────────────────────────────────────────────────── */

function formatTime(t: string): string {
  const [h, m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hr = h % 12 || 12;
  return `${hr}:${String(m).padStart(2, '0')} ${ampm}`;
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}
function fmtISO(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function fmtDisplay(d: Date) {
  return d.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/* ─── translations ─────────────────────────────────────────────── */
const t = {
  en: {
    title: 'Book a Visit',
    subtitle: 'Schedule a free tour of our care centre. Choose your preferred location, date and time.',
    step1: 'Select Centre',
    step2: 'Choose Date',
    step3: 'Pick a Time',
    step4: 'Your Details',
    name: 'Full Name',
    namePh: 'Your name',
    phone: 'Phone Number',
    phonePh: '+60 12-345 6789',
    email: 'Email (optional)',
    emailPh: 'your@email.com',
    residentName: 'Resident / Loved One\'s Name',
    residentNamePh: 'Name of person needing care',
    relationship: 'Relationship',
    relationshipPh: 'e.g. Son / Daughter / Spouse',
    careType: 'Type of Care Needed',
    careTypePh: 'Select care type',
    submit: 'Confirm Booking',
    submitting: 'Booking...',
    required: '*',
    noSlots: 'No available time slots for this date.',
    noSlotsConfig: 'This centre has no booking slots configured yet. Please call us to arrange a visit.',
    blocked: 'This date is not available.',
    full: 'Full',
    available: 'Available',
    successTitle: 'Booking Confirmed!',
    successMsg: 'We\'ve received your booking and will contact you to confirm.',
    successDate: 'Date',
    successTime: 'Time',
    bookAnother: 'Make Another Booking',
    error: 'Something went wrong. Please try again or call us directly.',
    duplicateError: 'This slot was just booked. Please select another time.',
    validation: 'Please fill in your name and phone number.',
    today: 'Today',
    prev: '‹',
    next: '›',
    trust1: 'Free tour',
    trust2: 'No obligations',
    trust3: '100% confidential',
  },
  zh: {
    title: '预约参观',
    subtitle: '安排免费参观我们的护理中心。选择您喜欢的地点、日期和时间。',
    step1: '选择中心',
    step2: '选择日期',
    step3: '选择时间',
    step4: '您的信息',
    name: '姓名',
    namePh: '您的姓名',
    phone: '电话号码',
    phonePh: '+60 12-345 6789',
    email: '电邮（可选）',
    emailPh: 'your@email.com',
    residentName: '住客/亲人姓名',
    residentNamePh: '需要护理的人的姓名',
    relationship: '关系',
    relationshipPh: '例如 儿子 / 女儿 / 配偶',
    careType: '所需护理类型',
    careTypePh: '选择护理类型',
    submit: '确认预约',
    submitting: '预约中...',
    required: '*',
    noSlots: '该日期没有可用的时间段。',
    noSlotsConfig: '该中心尚未配置预约时段。请致电我们安排参观。',
    blocked: '该日期不可用。',
    full: '已满',
    available: '可用',
    successTitle: '预约成功！',
    successMsg: '我们已收到您的预约，将与您联系确认。',
    successDate: '日期',
    successTime: '时间',
    bookAnother: '再次预约',
    error: '出了点问题。请重试或直接致电我们。',
    duplicateError: '该时段刚刚被预订。请选择其他时间。',
    validation: '请填写您的姓名和电话号码。',
    today: '今天',
    prev: '‹',
    next: '›',
    trust1: '免费参观',
    trust2: '无任何义务',
    trust3: '100%保密',
  },
};

/* ─── component ────────────────────────────────────────────────── */

interface Props {
  lang?: 'en' | 'zh';
  /** Pre-select a centre by slug */
  defaultCentreSlug?: string;
}

export default function BookingFormClient({ lang = 'en', defaultCentreSlug }: Props) {
  const l = t[lang];

  /* ── state ── */
  const [centres, setCentres] = useState<BookingCentre[]>([]);
  const [selectedCentre, setSelectedCentre] = useState<BookingCentre | null>(null);
  const [slotConfigs, setSlotConfigs] = useState<SlotConfig[]>([]);
  const [blockedDates, setBlockedDates] = useState<Set<string>>(new Set());
  const [careTypes, setCareTypes] = useState<CareType[]>([]);
  const [pendingStatusId, setPendingStatusId] = useState<string | null>(null);

  const [calendarMonth, setCalendarMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableSlots, setAvailableSlots] = useState<SlotConfig[]>([]);
  const [bookedCounts, setBookedCounts] = useState<Record<string, number>>({});
  const [selectedSlot, setSelectedSlot] = useState<SlotConfig | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    residentName: '',
    relationship: '',
    careTypeId: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmedDate, setConfirmedDate] = useState('');
  const [confirmedTime, setConfirmedTime] = useState('');
  const [error, setError] = useState('');

  /* ── initial load ── */
  useEffect(() => {
    (async () => {
      const [centresData, careTypesData, statusId] = await Promise.all([
        getBookingCentres(),
        getCareTypes(),
        getPendingStatusId(),
      ]);
      setCentres(centresData);
      // Filter out test entries from care types
      setCareTypes(careTypesData.filter(ct => !['Tom'].includes(ct.display_text)));
      setPendingStatusId(statusId);

      if (defaultCentreSlug) {
        const match = centresData.find(c => c.slug === defaultCentreSlug);
        if (match) handleCentreSelect(match);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── centre selection ── */
  const handleCentreSelect = useCallback(async (centre: BookingCentre) => {
    setSelectedCentre(centre);
    setSelectedDate(null);
    setSelectedSlot(null);
    setAvailableSlots([]);
    setBookedCounts({});
    setError('');

    const [slots, blocked] = await Promise.all([
      getSlotConfigs(centre.id),
      getBlockedDates(centre.id),
    ]);
    setSlotConfigs(slots);
    setBlockedDates(new Set(blocked));
  }, []);

  /* ── date helpers ── */
  const today = new Date();
  const todayISO = fmtISO(today);

  const isPast = (d: Date) => fmtISO(d) < todayISO;
  const isBlocked = (d: Date) => blockedDates.has(fmtISO(d));
  const hasSlots = (d: Date) => {
    const dow = d.getDay(); // 0=Sun
    return slotConfigs.some(c => c.day_of_week === null || c.day_of_week === dow);
  };

  /* ── date selection ── */
  const handleDateSelect = useCallback(
    async (d: Date) => {
      if (!selectedCentre) return;
      setSelectedDate(d);
      setSelectedSlot(null);
      setLoadingSlots(true);
      setError('');

      const dateStr = fmtISO(d);
      const counts = await getBookedSlotCounts(selectedCentre.id, dateStr);
      const dow = d.getDay();
      const slots = slotConfigs
        .filter(c => c.day_of_week === null || c.day_of_week === dow)
        .sort((a, b) => a.start_time.localeCompare(b.start_time));

      setBookedCounts(counts);
      setAvailableSlots(slots);
      setLoadingSlots(false);
    },
    [selectedCentre, slotConfigs]
  );

  const isSlotFull = (slot: SlotConfig) => {
    const key = `${slot.start_time}|${slot.end_time}`;
    return (bookedCounts[key] ?? 0) >= slot.max_bookings;
  };

  /* ── submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError(l.validation);
      return;
    }
    if (!selectedCentre || !selectedDate || !selectedSlot) return;

    setSubmitting(true);
    setError('');

    const result = await submitBooking({
      centre_id: selectedCentre.id,
      booking_slot_config_id: selectedSlot.id,
      booking_date: fmtISO(selectedDate),
      start_time: selectedSlot.start_time,
      end_time: selectedSlot.end_time,
      visitor_name: form.name.trim(),
      visitor_phone: form.phone.trim(),
      visitor_email: form.email.trim() || null,
      resident_name: form.residentName.trim() || null,
      relationship_to_resident: form.relationship.trim() || null,
      type_of_care_id: form.careTypeId || null,
      booking_status_id: pendingStatusId,
    });

    setSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      setConfirmedDate(fmtDisplay(selectedDate));
      setConfirmedTime(`${formatTime(selectedSlot.start_time)} – ${formatTime(selectedSlot.end_time)}`);
    } else if (result.duplicate) {
      setError(l.duplicateError);
      handleDateSelect(selectedDate);
    } else {
      setError(l.error);
    }
  };

  /* ── reset ── */
  const handleReset = () => {
    setSubmitted(false);
    setSelectedDate(null);
    setSelectedSlot(null);
    setAvailableSlots([]);
    setBookedCounts({});
    setForm({ name: '', phone: '', email: '', residentName: '', relationship: '', careTypeId: '' });
    setError('');
  };

  /* ── calendar grid ── */
  const calYear = calendarMonth.getFullYear();
  const calMon = calendarMonth.getMonth();
  const firstDay = new Date(calYear, calMon, 1).getDay();
  const daysInMonth = new Date(calYear, calMon + 1, 0).getDate();
  const calendarDays: (Date | null)[] = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(new Date(calYear, calMon, d));

  const canGoPrev = calYear > today.getFullYear() || (calYear === today.getFullYear() && calMon > today.getMonth());

  /* ── active step ── */
  const step = !selectedCentre ? 1 : !selectedDate ? 2 : !selectedSlot ? 3 : 4;

  /* ═══════════════════════════════════════════ RENDER ═══════════════════════════════════════════ */

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-gray-900 mb-2">{l.successTitle}</h3>
        <p className="text-sm text-gray-600 mb-6">{l.successMsg}</p>

        <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 font-medium">{l.step1}</span>
            <span className="text-gray-900 font-semibold">{selectedCentre?.name}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 font-medium">{l.successDate}</span>
            <span className="text-gray-900 font-semibold">{confirmedDate}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 font-medium">{l.successTime}</span>
            <span className="text-gray-900 font-semibold">{confirmedTime}</span>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="text-[#2E72B8] text-sm font-semibold hover:underline"
        >
          {l.bookAnother}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl mx-auto">
      {/* ── header ── */}
      <div className="bg-gradient-to-r from-[#2E72B8] to-[#09B7D3] px-6 py-5 text-white">
        <h2 className="text-xl font-extrabold">{l.title}</h2>
        <p className="text-sm text-white/80 mt-1">{l.subtitle}</p>
      </div>

      {/* ── progress steps ── */}
      <div className="flex items-center px-6 py-3 bg-gray-50 border-b border-gray-100 gap-1">
        {[l.step1, l.step2, l.step3, l.step4].map((label, i) => {
          const stepNum = i + 1;
          const isActive = step === stepNum;
          const isDone = step > stepNum;
          return (
            <div key={label} className="flex items-center flex-1 min-w-0">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  isDone
                    ? 'bg-green-500 text-white'
                    : isActive
                    ? 'bg-[#2E72B8] text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isDone ? '✓' : stepNum}
              </div>
              <span
                className={`ml-1.5 text-[11px] font-semibold truncate ${
                  isActive ? 'text-[#2E72B8]' : isDone ? 'text-green-600' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
              {i < 3 && (
                <div className={`h-px flex-1 mx-2 ${isDone ? 'bg-green-300' : 'bg-gray-200'}`} />
              )}
            </div>
          );
        })}
      </div>

      <div className="p-6">
        {/* ═══ STEP 1: Centre Selection ═══ */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            {l.step1}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {centres.map((c) => {
              const isSelected = selectedCentre?.id === c.id;
              // Extract short name (e.g. "Klang" from "Genesis Life Care Centre Klang")
              const short = c.name.replace(/Genesis Life Care Centre\s*/i, '').trim() || c.name;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => handleCentreSelect(c)}
                  className={`text-left p-3 rounded-xl border-2 transition-all ${
                    isSelected
                      ? 'border-[#2E72B8] bg-blue-50 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className={`text-sm font-bold ${isSelected ? 'text-[#2E72B8]' : 'text-gray-900'}`}>
                    {short}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">{c.address}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ═══ STEP 2: Calendar ═══ */}
        {selectedCentre && (
          <div className="mb-6">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              {l.step2}
            </label>

            {slotConfigs.length === 0 ? (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                {l.noSlotsConfig}
                {selectedCentre.marketing_phone_no && (
                  <a
                    href={`tel:${selectedCentre.marketing_phone_no.replace(/\s+/g, '')}`}
                    className="block mt-2 font-bold text-amber-900 hover:underline"
                  >
                    {selectedCentre.marketing_phone_no}
                  </a>
                )}
              </div>
            ) : (
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {/* month nav */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setCalendarMonth(new Date(calYear, calMon - 1, 1))}
                    disabled={!canGoPrev}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed text-lg font-bold"
                  >
                    {l.prev}
                  </button>
                  <span className="text-sm font-bold text-gray-800">
                    {calendarMonth.toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-GB', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCalendarMonth(new Date(calYear, calMon + 1, 1))}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 text-lg font-bold"
                  >
                    {l.next}
                  </button>
                </div>

                {/* day headers */}
                <div className="grid grid-cols-7 text-center">
                  {DAYS.map((d) => (
                    <div key={d} className="py-1.5 text-[10px] font-bold text-gray-400 uppercase">
                      {d}
                    </div>
                  ))}
                </div>

                {/* day cells */}
                <div className="grid grid-cols-7">
                  {calendarDays.map((d, i) => {
                    if (!d)
                      return <div key={`empty-${i}`} className="h-10" />;

                    const iso = fmtISO(d);
                    const past = isPast(d);
                    const blocked = isBlocked(d);
                    const slots = hasSlots(d);
                    const disabled = past || blocked || !slots;
                    const isToday = iso === todayISO;
                    const isSelected = selectedDate && fmtISO(selectedDate) === iso;

                    return (
                      <button
                        key={iso}
                        type="button"
                        disabled={disabled}
                        onClick={() => handleDateSelect(d)}
                        className={`h-10 text-sm font-medium relative transition-colors ${
                          isSelected
                            ? 'bg-[#2E72B8] text-white font-bold rounded-lg mx-0.5'
                            : isToday
                            ? 'text-[#2E72B8] font-bold'
                            : disabled
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-[#2E72B8] rounded-lg'
                        }`}
                      >
                        {d.getDate()}
                        {!disabled && !isSelected && slots && (
                          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-green-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══ STEP 3: Time Slots ═══ */}
        {selectedDate && (
          <div className="mb-6">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              {l.step3} — {fmtDisplay(selectedDate)}
            </label>

            {loadingSlots ? (
              <div className="flex items-center gap-2 py-4 text-sm text-gray-500">
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Loading...
              </div>
            ) : availableSlots.length === 0 ? (
              <p className="text-sm text-gray-500 bg-gray-50 rounded-xl p-4">{l.noSlots}</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {availableSlots.map((slot) => {
                  const full = isSlotFull(slot);
                  const isSelected = selectedSlot?.id === slot.id;

                  return (
                    <button
                      key={slot.id}
                      type="button"
                      disabled={full}
                      onClick={() => { setSelectedSlot(slot); setError(''); }}
                      className={`p-2.5 rounded-xl border-2 text-center transition-all ${
                        isSelected
                          ? 'border-[#2E72B8] bg-blue-50 shadow-sm'
                          : full
                          ? 'border-gray-100 bg-gray-50 cursor-not-allowed'
                          : 'border-gray-200 hover:border-[#2E72B8]/40 bg-white'
                      }`}
                    >
                      <div
                        className={`text-sm font-bold ${
                          isSelected ? 'text-[#2E72B8]' : full ? 'text-gray-400' : 'text-gray-800'
                        }`}
                      >
                        {formatTime(slot.start_time)}
                      </div>
                      <div className={`text-[10px] mt-0.5 ${full ? 'text-red-400' : 'text-green-600'} font-semibold`}>
                        {full ? l.full : l.available}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ═══ STEP 4: Visitor Details Form ═══ */}
        {selectedSlot && (
          <form onSubmit={handleSubmit}>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
              {l.step4}
            </label>

            {/* Selected summary pill */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#2E72B8] text-xs font-semibold">
                {selectedCentre?.name.replace(/Genesis Life Care Centre\s*/i, '')}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#2E72B8] text-xs font-semibold">
                {selectedDate && fmtDisplay(selectedDate)}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#2E72B8] text-xs font-semibold">
                {formatTime(selectedSlot.start_time)} – {formatTime(selectedSlot.end_time)}
              </span>
            </div>

            <div className="space-y-3.5">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  {l.name} <span className="text-red-400">{l.required}</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#2E72B8]/30 focus:border-[#2E72B8] outline-none transition-colors"
                  placeholder={l.namePh}
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  {l.phone} <span className="text-red-400">{l.required}</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#2E72B8]/30 focus:border-[#2E72B8] outline-none transition-colors"
                  placeholder={l.phonePh}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  {l.email}
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#2E72B8]/30 focus:border-[#2E72B8] outline-none transition-colors"
                  placeholder={l.emailPh}
                />
              </div>

              {/* Resident Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  {l.residentName}
                </label>
                <input
                  type="text"
                  value={form.residentName}
                  onChange={(e) => setForm({ ...form, residentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#2E72B8]/30 focus:border-[#2E72B8] outline-none transition-colors"
                  placeholder={l.residentNamePh}
                />
              </div>

              {/* Relationship */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  {l.relationship}
                </label>
                <input
                  type="text"
                  value={form.relationship}
                  onChange={(e) => setForm({ ...form, relationship: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#2E72B8]/30 focus:border-[#2E72B8] outline-none transition-colors"
                  placeholder={l.relationshipPh}
                />
              </div>

              {/* Type of Care */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  {l.careType}
                </label>
                <select
                  value={form.careTypeId}
                  onChange={(e) => setForm({ ...form, careTypeId: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-[#2E72B8]/30 focus:border-[#2E72B8] outline-none transition-colors"
                >
                  <option value="">{l.careTypePh}</option>
                  {careTypes.map((ct) => (
                    <option key={ct.id} value={ct.id}>
                      {ct.display_text}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#2E72B8] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#245d9a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md mt-2"
              >
                {submitting ? l.submitting : l.submit}
              </button>
            </div>

            <p className="text-center text-[11px] text-gray-400 mt-3 flex items-center justify-center gap-2">
              <span>{l.trust1}</span>
              <span className="text-gray-300">·</span>
              <span>{l.trust2}</span>
              <span className="text-gray-300">·</span>
              <span>{l.trust3}</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
