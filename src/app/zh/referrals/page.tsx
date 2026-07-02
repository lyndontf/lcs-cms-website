import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '转介与合作 | 创世生命护理',
  description:
    '医院、家庭医生与家属如何将长者转介至创世生命护理——我们接受医院出院转介，通常24–48小时内即可入住。JKM注册、AgeCope认证，并拥有自设培训学院与持牌招聘代理。',
  alternates: {
    canonical: 'https://genesiscare.com.my/zh/referrals',
    languages: { 'en': 'https://genesiscare.com.my/referrals' },
  },
  openGraph: {
    title: '转介与合作 | 创世生命护理',
    description: '医院、家庭医生与家属的转介途径，24–48小时入住，附我们的认证资质与创世护理生态体系。',
    url: 'https://genesiscare.com.my/zh/referrals',
    siteName: '创世生命护理',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://genesiscare.com.my/images/services/common-area-scenic.jpg', width: 1200, height: 630, alt: '创世生命护理转介与合作' }],
  },
};

export const revalidate = 60;

/* ─── Data ────────────────────────────────────────────────────────────── */

const highlights = [
  { label: '入住', value: '24–48小时', sub: '自转介起' },
  { label: '医院', value: '直接', sub: '出院对接' },
  { label: '注册', value: 'JKM', sub: 'AgeCope 认证' },
  { label: '转介方', value: '全部', sub: '医院 · 医生 · 家属' },
];

const referrers = [
  {
    title: '医院出院规划人员',
    desc: '需要将病患从急症病房转至合适的护理环境？我们接受医院直接出院转介，审阅出院摘要，并在评估与文件就绪后通常可在24–48小时内安排入住。',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m9-14h.01M9 7h.01M9 11h.01M12 11h.01M15 11h.01M15 7h.01M9 15h6v6H9v-6z',
  },
  {
    title: '家庭医生与专科医生',
    desc: '转介需要持续护理、康复或长期照护的病患。我们与您共同协调护理计划，让您的诊所与我们团队之间的临床资讯保持一致完整。',
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
  },
  {
    title: '家属',
    desc: '您可以直接转介自己的长者——无需医院或医生转介信。预约免费评估，我们将逐步引导您办理文件、确定护理级别与费用。',
    icon: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a3 3 0 10-2.598-4.5M7 12a3 3 0 10-2.598-4.5',
  },
];

const steps = [
  { n: '1', title: '联系我们', desc: '致电、WhatsApp 或发送转介／出院摘要给我们。医院团队可直接联系我们。' },
  { n: '2', title: '免费评估', desc: '我们评估所需的护理级别——在病房、在家中或在我们中心——并匹配合适的护理计划。' },
  { n: '3', title: '清晰报价', desc: '您将获得逐项报价，清楚列明护理级别、房型及任何额外项目。绝无隐藏费用。' },
  { n: '4', title: '24–48小时入住', desc: '文件就绪后，我们协调顺畅的转介——通常在24–48小时内，包括紧急个案。' },
];

const ecosystem = [
  {
    title: '创世培训学院',
    desc: '我们的HRDF注册、JPK认证培训学院培养驻院的护士与看护——确保照护您长者的人员都受过一致标准的训练。',
  },
  {
    title: 'Agensi Pekerjaan GLC',
    desc: '我们自设的持牌招聘代理。当家庭偏好全天候居家支援时，我们通过该代理安排受训、经审核的住家看护，仅收一次性费用。',
  },
  {
    title: '合作实验室与临床服务',
    desc: '通过合作实验室上门进行常规检验，加上院内药房与随时待命的医生——大多数临床需求无需送长者外出即可处理。',
  },
];

const accreditations = [
  { name: 'JKM 注册', sub: '部门注册护理院营运者', img: '/images/logos/jkm-logo.webp' },
  { name: 'AgeCope 认证', sub: '马来西亚长者护理协会会员', img: '/images/logos/agecope-logo.webp' },
  { name: 'HRDF 注册', sub: '注册培训供应商', img: null },
  { name: 'JPK 技职供应商', sub: '认证职业培训', img: null },
];

const faqs = [
  {
    q: '医院可以直接把病患转介给创世吗？',
    a: '可以。我们接受医院直接出院转介。将出院摘要发送给我们，我们会评估病患，文件就绪后通常可在24–48小时内安排入住——包括紧急个案。',
  },
  {
    q: '家属需要医生转介信才能安排长者入住吗？',
    a: '不需要。家属可直接转介自己的长者——无需医院或医生信件。最新的医疗报告或出院摘要有助我们规划护理，但若有缺漏我们会从旁指导。',
  },
  {
    q: '你们协助保险或政府津贴吗？',
    a: '在适用情况下会。我们可在评估时协助家庭了解可用的政府津贴与保险选项。',
  },
  {
    q: '你们有哪些认证资质？',
    a: '创世生命护理已向JKM注册为护理院营运者并获AgeCope认证。我们的培训学院为HRDF注册及JPK认证的技职培训供应商。',
  },
  {
    q: '转介后多快可以入住？',
    a: '完成评估且文件就绪后，通常在24–48小时内入住。我们会与家属协调转介事宜；对于医院转介，也会与出院团队协调。',
  },
];

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function ReferralsPageZh() {
  return (
    <main className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div { color: inherit; }
        .hero-dark h1, .hero-dark h2, .hero-dark p, .hero-dark span, .hero-dark div,
        .hero-dark .text-4xl, .hero-dark .text-5xl, .hero-dark .sm\\:text-5xl,
        .hero-dark .text-3xl, .hero-dark .text-lg, .hero-dark .text-sm,
        .hero-dark .text-white { color: #ffffff !important; }
        .hero-dark .text-gray-900 { color: rgb(17 24 39) !important; }
        .hero-dark .text-gold { color: #FAB515 !important; }
      ` }} />

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-dark relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">转介与合作</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6" style={{ color: 'white' }}>
              通往合适照护的顺畅之路
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              无论转介来自医院、家庭医生或家属，我们都让入住变得简单——我们接受医院直接出院转介，
              通常可在24–48小时内安排入住。以我们的认证资质、自设培训学院与持牌招聘代理为后盾。
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/zh/contact" className="whitespace-nowrap inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:shadow-xl">
                进行转介
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/zh/admissions" className="whitespace-nowrap inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-full transition">
                了解入住流程
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {highlights.map((h, i) => (
              <div key={i}>
                <p className="text-2xl font-extrabold text-primary">{h.value}</p>
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mt-1">{h.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO REFERS ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">谁可以转介</h2>
            <p className="text-lg text-gray-600">转介从三个方向来到我们这里——我们让每一种都变得简单直接。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {referrers.map((r, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={r.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">转介如何进行</h2>
            <p className="text-lg text-gray-600">从初次联系到入住——通常只需几天。</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-extrabold flex items-center justify-center mb-4" style={{ color: 'white' }}>{s.n}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM PARTNERS ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">以创世生态体系为后盾</h2>
            <p className="text-lg text-gray-600">创世不仅是护理院——而是一个环环相扣的集团，强化每一宗转介背后的照护。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ecosystem.map((e, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{e.title}</h3>
                <p className="text-gray-600 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/zh/our-ecosystem" className="text-primary font-semibold hover:underline">探索创世生态体系 →</Link>
          </div>
        </div>
      </section>

      {/* ── INSURANCE / SUBSIDY + ACCREDITATIONS ──────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">保险与津贴支援</h2>
              <p className="text-gray-600 leading-relaxed mb-4">费用不应成为获得合适照护的障碍。在适用情况下，我们会协助家庭了解可用的政府津贴与保险选项——在免费评估时提出即可，我们会为您指引方向。</p>
              <Link href="/zh/pricing" className="text-primary font-semibold hover:underline">查看收费与配套 →</Link>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5">认证与注册</h2>
              <div className="grid grid-cols-2 gap-4">
                {accreditations.map((a, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                    {a.img ? (
                      <Image src={a.img} alt={a.name} width={40} height={40} className="w-10 h-10 object-contain flex-shrink-0" />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-bold text-gray-900 leading-tight">{a.name}</p>
                      <p className="text-xs text-gray-500 leading-tight mt-0.5">{a.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">转介常见问题</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  {f.q}
                  <svg className="w-5 h-5 text-primary transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-600 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="hero-dark bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ color: 'white' }}>转介您的长者或病患</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>欢迎医院团队、家庭医生与家属。发送转介或预约免费评估——余下的交给我们。</p>
          <Link href="/zh/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl">
            进行转介
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
