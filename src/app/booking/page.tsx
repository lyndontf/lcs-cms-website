import { Metadata } from 'next';
import BookingFormClient from '@/components/BookingFormClient';

export const metadata: Metadata = {
  title: 'Book a Visit | Genesis Life Care',
  description:
    'Schedule a free tour of our nursing home and elderly care centres in Klang, PJ, Kajang, Puchong, and Johor Bahru. Choose your preferred date and time.',
  openGraph: {
    title: 'Book a Visit | Genesis Life Care',
    description:
      'Schedule a free tour of our nursing home and elderly care centres. Choose your preferred location, date and time.',
    type: 'website',
  },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero banner */}
      <section className="bg-gradient-to-r from-[#2E72B8] to-[#09B7D3] py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Book a Free Visit
          </h1>
          <p className="text-base sm:text-lg text-white/85 max-w-xl mx-auto">
            Experience our world-class elderly care first-hand. Tour our facilities, meet our care team, and see why families trust Genesis Life Care.
          </p>
        </div>
      </section>

      {/* Booking form */}
      <section className="max-w-3xl mx-auto px-4 -mt-8 pb-16 relative z-10">
        <BookingFormClient />
      </section>

      {/* Trust bar */}
      <section className="bg-gray-50 border-t border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-[#2E72B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">No Obligations</h3>
            <p className="text-xs text-gray-500">Tour our facilities with zero commitment. We want you to feel confident in your choice.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-[#09B7D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Flexible Scheduling</h3>
            <p className="text-xs text-gray-500">Pick a date and time that works for you. Our care advisors are available 7 days a week.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Personal Guided Tour</h3>
            <p className="text-xs text-gray-500">Meet our care team, see the rooms, and ask all the questions you need.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
