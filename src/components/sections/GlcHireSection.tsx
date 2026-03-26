import Link from 'next/link';

interface GlcHireSectionProps {
  lang?: 'en' | 'zh';
}

export default function GlcHireSection({ lang = 'en' }: GlcHireSectionProps) {
  const t = lang === 'zh'
    ? {
        label: '加入我们的团队',
        heading: '成为我们护理团队的一员',
        description: '我们一直在寻找热情、有爱心的人加入我们不断壮大的团队。Genesis Life Care 通过 GLC Hire 提供护理、治疗和管理方面的职业机会。',
        btn: '查看职位空缺',
      }
    : {
        label: 'JOIN OUR TEAM',
        heading: 'Build a Career in Care',
        description: "We're always looking for passionate, caring people to join our growing team. Genesis Life Care offers career opportunities in nursing, therapy, and management through GLC Hire — our recruitment agency.",
        btn: 'View Open Positions',
      };

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 sm:p-10">
              <span className="text-xs font-bold tracking-widest uppercase text-secondary">{t.label}</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 mb-4">{t.heading}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{t.description}</p>
              <a
                href="https://agency.genesiscare.com.my"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-800 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors"
              >
                {t.btn}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="hidden md:block h-full">
              <img
                src="/images/general/staff-care.jpg"
                alt="Genesis Life Care team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
