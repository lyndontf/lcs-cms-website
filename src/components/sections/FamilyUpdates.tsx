/* Family WhatsApp updates section (REC-016) — reusable, EN + /zh.
   Marketing-only; feature already live. Claims confirmed 2026-07-02:
   regular updates · photos included · two-way messaging. */

type Lang = 'en' | 'zh';

const COPY: Record<Lang, {
  eyebrow: string;
  heading: string;
  subhead: string;
  bullets: string[];
  cardLead: string;
  cta: string;
  href: string;
}> = {
  en: {
    eyebrow: 'Stay Connected',
    heading: 'Peace of mind, wherever you are',
    subhead:
      'We keep families in the loop with regular WhatsApp updates — including photos — so you always know how your loved one is doing. And our care team is only a message away.',
    bullets: [
      'Regular WhatsApp updates on your loved one’s wellbeing and daily life',
      'Photo updates — so you can see them smiling, not just hear about it',
      'A direct, two-way line to the care team — ask a question, get a reply',
      'Reassurance from anywhere — whether you’re across town or overseas',
    ],
    cardLead: 'Have questions about how family updates work?',
    cta: 'Talk to our care team',
    href: '/contact',
  },
  zh: {
    eyebrow: '与家人保持联系',
    heading: '无论身在何处，都能安心',
    subhead:
      '我们通过 WhatsApp 定期向家属发送更新（包括照片），让您随时了解长者的状况；care 团队也随时一讯可达。',
    bullets: [
      '定期 WhatsApp 更新长者的日常与状况',
      '照片更新 —— 亲眼看见笑容，而不只是听说',
      '双向沟通，随时向 care 团队提问并获得回复',
      '无论身在同城还是海外，都让您安心',
    ],
    cardLead: '想了解家属更新如何运作？',
    cta: '联系我们的 care 团队',
    href: '/zh/contact',
  },
};

export default function FamilyUpdates({ lang = 'en' }: { lang?: Lang }) {
  const c = COPY[lang];
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-secondary text-xs font-bold tracking-wide uppercase">{c.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">{c.heading}</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{c.subhead}</p>
            <ul className="space-y-3">
              {c.bullets.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 00-8.66 15l-1.3 4.74 4.86-1.28A10 10 0 1012 2zm0 2a8 8 0 11-4.19 14.82l-.3-.18-2.88.76.77-2.8-.19-.31A8 8 0 0112 4z" />
                  </svg>
                  <span className="text-gray-700">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">{c.cardLead}</p>
            <a href={c.href} className="mt-3 inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-full transition">
              {c.cta}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
