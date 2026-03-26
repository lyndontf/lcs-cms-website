import { Metadata } from 'next';
import { getPageBySlug, getSiteSettings } from '@/lib/supabase';
import { getCurrentSiteId, getCurrentSiteSlug } from '@/lib/site-context';
import ContentRenderer from '@/components/ContentRenderer';

export async function generateMetadata(): Promise<Metadata> {
  const siteId = await getCurrentSiteId();
  const page = await getPageBySlug('zh-home', siteId || undefined);
  return {
    title: page?.meta_title || page?.title || '首页',
    description: page?.meta_description || '马来西亚优质医疗和老年护理服务',
  };
}

export const revalidate = 60;

export default async function ZhHomePage() {
  const [siteId, siteSlug] = await Promise.all([getCurrentSiteId(), getCurrentSiteSlug()]);
  const sid = siteId || undefined;
  const [page, settings] = await Promise.all([
    getPageBySlug('zh-home', sid),
    getSiteSettings(sid),
  ]);

  if (!page) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">首页</h1>
        <p className="text-lg text-gray-600">华文版页面即将推出。</p>
      </div>
    );
  }

  if (page.content?.length === 1 && page.content[0].type === 'html') {
    return (
      <div
        className="cms-html-page"
        dangerouslySetInnerHTML={{ __html: page.content[0].content || '' }}
      />
    );
  }

  const heroHeading = page.content?.find(
    (b) => b.type === 'heading' && (b.level === 1 || !b.level)
  );
  const heroParagraph = page.content?.find((b) => b.type === 'paragraph');
  const remainingBlocks = page.content?.filter((b) => b !== heroHeading && b !== heroParagraph) || [];
  const heroTitle = heroHeading?.content || heroHeading?.text || page.title;
  const heroSubtitle = page.meta_description || heroParagraph?.content || heroParagraph?.text || '';

  return (
    <article>
      <style dangerouslySetInnerHTML={{ __html: `.cms-hero h1, .cms-hero p, .cms-hero span, .cms-hero div { color: #ffffff !important; }` }} />
      <section className="cms-hero relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <img src={page.featured_image_url || '/images/general/staff-care.jpg'} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary/85 to-secondary/80" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center" style={{ color: '#ffffff' }}>
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase mb-6" style={{ color: '#ffffff' }}>
            <span className="w-6 h-0.5 bg-[#FAB515] rounded" />{page.title}<span className="w-6 h-0.5 bg-[#FAB515] rounded" />
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight mb-6 max-w-3xl mx-auto" style={{ color: '#ffffff' }}>{heroTitle}</h1>
          {heroSubtitle && <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#ffffff' }}>{heroSubtitle}</p>}
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <ContentRenderer blocks={remainingBlocks} />
      </div>
    </article>
  );
}
