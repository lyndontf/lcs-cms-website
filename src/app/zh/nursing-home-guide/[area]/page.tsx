import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Area = {
  name: string;
  slug: string;
  centre: string;
  blurb: string;
};

const AREAS: Record<string, Area> = {
  kajang: { name: '加影', slug: 'kajang', centre: '/zh/nursing-home-kajang', blurb: '加影与周边南巴生谷地区' },
  'petaling-jaya': { name: '八打灵再也', slug: 'petaling-jaya', centre: '/zh/nursing-home-in-petaling-jaya', blurb: '八打灵再也与周边巴生谷' },
  klang: { name: '巴生', slug: 'klang', centre: '/zh/nursing-home-in-klang', blurb: '巴生与西巴生谷' },
  puchong: { name: '蒲种', slug: 'puchong', centre: '/zh/nursing-home-in-puchong', blurb: '蒲种与南巴生谷' },
  'johor-bahru': { name: '新山', slug: 'johor-bahru', centre: '/zh/nursing-home-in-johor-bahru', blurb: '新山与南马地区' },
};

export function generateStaticParams() {
  return Object.keys(AREAS).map((area) => ({ area }));
}

export function generateMetadata({ params }: { params: { area: string } }): Metadata {
  const a = AREAS[params.area];
  if (!a) return {};
  return {
    title: `如何在${a.name}选择护理院`,
    description: `在${a.name}选择护理院的实用指南：该看什么、参观时该问什么、以及如何比较护理与费用。创世生命关怀在${a.name}设有值得信赖的中心。`,
    alternates: {
      canonical: `https://genesiscare.com.my/zh/nursing-home-guide/${a.slug}`,
      languages: {
        en: `https://genesiscare.com.my/nursing-home-guide/${a.slug}`,
        'x-default': `https://genesiscare.com.my/nursing-home-guide/${a.slug}`,
      },
    },
    openGraph: {
      title: `如何在${a.name}选择护理院 | 创世生命关怀`,
      description: `在${a.name}选择护理院时，该看什么、该问什么、如何比较护理与费用。`,
      url: `https://genesiscare.com.my/zh/nursing-home-guide/${a.slug}`,
      siteName: '创世生命关怀',
      locale: 'zh_CN',
      type: 'article',
      images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: `在${a.name}选择护理院` }],
    },
  };
}

export const revalidate = 60;

const checklist = [
  { title: '牌照与注册', desc: '确认护理院已在 JKM（社会福利局）注册并合法经营。这是安全与问责的基础。' },
  { title: '人员培训与比例', desc: '询问日夜有多少受训护士与护理员当值、他们受过什么培训。更低的护理员对住客比例意味着更贴心的照顾。' },
  { title: '清洁与安全', desc: '留意房间是否整洁、有无扶手、防滑地板、呼叫铃，以及整体环境是否安宁、维护良好 —— 而不只是漂亮的前台。' },
  { title: '医疗支持', desc: '询问医生到诊、用药管理，以及能否应对长者的特定需求（如管饲、失智、中风后护理）。' },
  { title: '价格透明', desc: '值得信赖的护理院会在您决定前清楚告知价格与包含项目。对回避此问题的护理院要谨慎。' },
  { title: '膳食、活动与尊严', desc: '看看膳食、观察员工如何与住客交谈、询问日常活动。尊严与温暖与临床护理同等重要。' },
];

const questions = [
  '你们是否已在 JKM 注册？可以出示吗？',
  '日间与夜间的护理员对住客比例是多少？',
  '你们能照护我长者的特定病况吗？',
  '你们如何让家属了解长者的状况？',
  '月费具体包含什么？哪些另行收费？',
  '我可以不预约就参观吗？是否开放探访？',
];

export default function NursingHomeGuideZh({ params }: { params: { area: string } }) {
  const a = AREAS[params.area];
  if (!a) notFound();

  const faqs = [
    { q: `在${a.name}的护理院一个月多少钱？`, a: `费用取决于护理级别、房型与设施。作为一般指引，马来西亚私人护理院月费通常约在 RM2,500 至 RM5,000+ 之间。创世生命关怀月费从 RM2,500 起。详情可参阅我们的护理院费用指南。` },
    { q: `创世在${a.name}设有护理院吗？`, a: `是的。创世生命关怀设有服务${a.blurb}的中心，提供 24 小时护理、失智与中风后护理，以及透明定价。` },
    { q: `我如何判断某间护理院是否适合我的父母？`, a: `亲自参观，运用本页的清单与问题，并要求免费评估。好的护理院会欢迎您的提问，并让您实地查看真正的起居空间。` },
  ];

  return (
    <main className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div { color: inherit; }
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div,
        .hero-dark .text-4xl, .hero-dark .text-5xl, .hero-dark .sm\\:text-5xl,
        .hero-dark .text-3xl, .hero-dark .text-lg, .hero-dark .text-sm,
        .hero-dark .text-white { color: #ffffff !important; }
        .hero-dark .text-gray-900 { color: rgb(17 24 39) !important; }
      ` }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          }),
        }}
      />

      {/* HERO */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">选购指南</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              如何在{a.name}选择护理院
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              在{a.name}为长者找到合适的照护，是家庭最重要的决定之一。本指南涵盖该看什么、参观时该问什么、以及如何比较护理与费用 —— 让您安心抉择。
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href={a.centre} className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                查看我们的{a.name}中心
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/zh/nursing-home-cost-malaysia" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                护理院费用指南
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">该看什么</h2>
            <p className="text-lg text-gray-600">区分优质与普通护理院的六个要点。</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklist.map((c, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary font-extrabold">{i + 1}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center">参观时该问的问题</h2>
          <ul className="space-y-3">
            {questions.map((q, i) => (
              <li key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-800">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GENESIS IN AREA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">创世生命关怀在{a.name}</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            创世在{a.blurb}设有值得信赖的护理院 —— 提供 24 小时护理、失智与中风后护理、从 RM2,500/月起的透明定价，以及免费、无义务的评估。欢迎亲临参观。
          </p>
          <Link href={a.centre} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-bold px-7 py-3.5 rounded-full transition shadow-lg hover:shadow-xl" style={{ color: 'white' }}>
            参观我们的{a.name}中心
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">常见问题</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  {f.q}
                  <svg className="w-5 h-5 text-primary transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="text-gray-600 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>在{a.name}预约免费参观</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>参观我们的{a.name}中心、认识团队，并获取免费评估与报价 —— 无任何义务。</p>
          <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl">
            预约免费参观
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
