import React from 'react';

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Families Trust Genesis Life Care
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            With over a decade of experience in elderly care, we combine medical expertise with genuine compassion. Every family receives personalised attention from our dedicated team of nurses and caregivers.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 mb-12">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden">
            <img
              src="/images/general/comprehensive-care.png"
              alt="Comprehensive medical care — caregiver assisting elderly resident at Genesis Life Care"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {[
              { value: '10+', label: 'Years Experience', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-primary to-primary-700', filled: false },
              { value: '150+', label: 'Care Staff', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', color: 'from-secondary to-secondary-600', filled: false },
              { value: '5', label: 'Care Centres', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', color: 'from-primary to-primary-700', filled: false },
              { value: '4.8\u2605', label: 'Google Rating', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', color: 'from-gold to-gold-500', filled: true },
              { value: '500+', label: 'Families Served', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'from-secondary to-secondary-600', filled: false },
              { value: 'JKM', label: 'Govt Approved', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', color: 'from-primary-700 to-primary-800', filled: false },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-2`}>
                  <svg className="w-5 h-5 text-white" fill={s.filled ? 'currentColor' : 'none'} stroke={s.filled ? 'none' : 'currentColor'} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg>
                </div>
                <span className="block text-2xl font-extrabold text-gray-900">{s.value}</span>
                <span className="text-[11px] text-gray-500 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              title: 'Affordable & Quality Care',
              desc: 'Competitive rates with transparent pricing across all centres. No hidden costs.',
              icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              gradient: 'from-primary to-primary-700',
            },
            {
              title: 'Personalised Care Plans',
              desc: 'Every resident receives a tailored care plan reviewed regularly with family members.',
              icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
              gradient: 'from-secondary to-secondary-600',
            },
            {
              title: 'Transparent & Affordable Pricing',
              desc: 'No hidden charges. Packages from RM 2,500/month with flexible payment options.',
              icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              gradient: 'from-primary-700 to-primary-800',
            },
          ].map((item, i) => (
            <div key={i} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}`} />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
              </div>
              <strong className="block text-base font-bold text-gray-900 mb-2">{item.title}</strong>
              <span className="text-sm text-gray-500 leading-relaxed">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
