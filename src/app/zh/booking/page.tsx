import { Metadata } from 'next';
import BookingFormClient from '@/components/BookingFormClient';

export const metadata: Metadata = {
  title: '预约参观 | Genesis Life Care',
  description:
    '安排免费参观我们位于巴生、八打灵再也、加影、蒲种和新山的护理中心。选择您喜欢的日期和时间。',
  openGraph: {
    title: '预约参观 | Genesis Life Care',
    description: '安排免费参观我们的护理中心。选择您喜欢的地点、日期和时间。',
    type: 'website',
  },
};

export default function BookingPageZh() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero banner */}
      <section className="bg-gradient-to-r from-[#2E72B8] to-[#09B7D3] py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            预约免费参观
          </h1>
          <p className="text-base sm:text-lg text-white/85 max-w-xl mx-auto">
            亲身体验我们世界级的老年护理服务。参观我们的设施，认识我们的护理团队，了解家庭为何信赖 Genesis Life Care。
          </p>
        </div>
      </section>

      {/* Booking form */}
      <section className="max-w-3xl mx-auto px-4 -mt-8 pb-16 relative z-10">
        <BookingFormClient lang="zh" />
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
            <h3 className="text-sm font-bold text-gray-900 mb-1">无任何义务</h3>
            <p className="text-xs text-gray-500">零承诺参观我们的设施。我们希望您对选择充满信心。</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-[#09B7D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">灵活安排时间</h3>
            <p className="text-xs text-gray-500">选择适合您的日期和时间。我们的护理顾问全周七天为您服务。</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">私人导览参观</h3>
            <p className="text-xs text-gray-500">认识我们的护理团队，参观房间，并提出您需要的所有问题。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
