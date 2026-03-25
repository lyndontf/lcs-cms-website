import React from 'react';

export default function GlcHireSection() {
  return (
    <section className="bg-white py-14 sm:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase text-secondary mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Home Care Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Hire a Trained Domestic Helper for Home Care
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Through Agensi Pekerjaan GLC, we recruit and train domestic helpers from Indonesia and the Philippines specifically in elderly care and home nursing. Each helper undergoes our in-house training programme at Genesis Life Care before being placed with your family — so they arrive ready to provide professional, compassionate care from day one.
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {[
                'Helpers sourced from Indonesia & the Philippines',
                'Trained in-house by Genesis Life Care in elderly care, hygiene & safety',
                'Licensed agency (JTKSM) — fully legal and compliant placement',
                'Live-in home care — companionship, meal prep, mobility assistance & more',
                'Ongoing support from GLC after placement',
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://agency.genesiscare.com.my"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-md"
              >
                Learn More at GLC Hire
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a
                href="https://wa.me/60123210457?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20hiring%20a%20domestic%20helper%20for%20home%20care."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary px-6 py-3 rounded-full text-sm font-bold hover:bg-secondary hover:text-white transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          {/* Right — How it works + stats */}
          <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 sm:p-10 border border-secondary/10">
            <h3 className="text-lg font-bold text-gray-900 mb-6">How It Works</h3>
            <div className="flex flex-col gap-5 mb-8">
              {[
                { step: '1', title: 'Tell Us Your Needs', desc: 'Share your care requirements — type of assistance, language preference, live-in or part-time.' },
                { step: '2', title: 'We Source & Train', desc: 'We recruit helpers from Indonesia or the Philippines and train them at our Genesis Life Care centres in elderly care, hygiene, and safety protocols.' },
                { step: '3', title: 'Meet Your Helper', desc: 'Review candidate profiles, conduct interviews, and choose the right fit for your family.' },
                { step: '4', title: 'Placement & Support', desc: 'Your helper arrives ready to provide care. We stay involved with ongoing check-ins and support.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-gray-900">{item.title}</strong>
                    <span className="text-sm text-gray-500 leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'GLC', label: 'Facility Trained', gold: false },
                { value: 'JTKSM', label: 'Licensed', gold: false },
                { value: '5\u2605', label: 'Satisfaction', gold: true },
              ].map((s, i) => (
                <div key={i} className={`rounded-xl p-4 text-center shadow-sm ${s.gold ? 'bg-gold' : 'bg-white'}`}>
                  <span className={`block text-xl font-extrabold ${s.gold ? 'text-white' : 'text-gray-900'}`}>{s.value}</span>
                  <span className={`text-[10px] font-medium ${s.gold ? 'text-white/80' : 'text-gray-500'}`}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
