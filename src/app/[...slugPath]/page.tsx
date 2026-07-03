import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug, getPublishedPages, getPublishedPosts, getSupportedLocales, pageExistsForLocale } from '@/lib/supabase';
import { getCurrentSiteId, getCurrentSiteSlug, getCurrentSiteBaseUrl } from '@/lib/site-context';
import ContentRenderer from '@/components/ContentRenderer';

// This REQUIRED catch-all (note: [...slugPath], not the optional [[...slugPath]]) merges
// what used to be single-segment CMS page routes ([slug]/page.tsx) with locale-prefixed
// variants (e.g. /ms and /ms/about-us).
//
// Next.js does not allow two differently-named dynamic segments ([slug] vs [locale]) to
// coexist as siblings at the same route depth — `next build` fails with:
//   "You cannot use different slug names for the same dynamic path ('locale' !== 'slug')"
// So both cases are handled here and disambiguated by inspecting the path segments: if the
// first segment matches one of the current site's supported_locales (and isn't 'en'), it's
// treated as a locale prefix; otherwise the whole path is a plain page slug.
//
// This MUST be a required catch-all, not optional: an optional catch-all ([[...slugPath]])
// also matches zero segments (i.e. '/'), which collides with the existing static
// /app/page.tsx at the same specificity ("You cannot define a route with the same
// specificity as a optional catch-all route"). The required form never matches '/', so
// /app/page.tsx remains the sole handler for the site root.
//
// Case coverage:
//   '/'                    → NOT handled here — the static /app/page.tsx serves it
//   '/about-us'            → default-locale ('en') slug page
//   '/ms'                  → non-default-locale home ('ms' matches supported_locales)
//   '/ms/about-us'         → non-default-locale slug page
//   '/zh', '/zh/...'       → NOT handled here for the 'centre' site. The 'centre' site's
//                            real /zh URLs are served by the separate, static /app/zh/
//                            route tree (a literal 'zh' folder), which Next.js always
//                            matches before falling back to this catch-all — so
//                            /zh/about-us on 'centre' never reaches this file. As a
//                            defensive backstop (e.g. if 'centre' ever gained 'zh' in
//                            supported_locales, or during future refactors), this route
//                            also explicitly notFound()s whenever siteSlug is 'centre'
//                            and the resolved locale isn't 'en'.

interface PageProps {
  params: Promise<{ slugPath: string[] }>;
}

interface ResolvedRoute {
  locale: string;
  slug: string;
}

async function resolveRoute(slugPath: string[] | undefined, siteId: string | undefined): Promise<ResolvedRoute | null> {
  const segments = slugPath || [];

  if (segments.length === 0) {
    // Should be unreachable for a required catch-all, but keep the guard for safety.
    return null;
  }

  const supportedLocales = await getSupportedLocales(siteId);
  const [first, second, ...rest] = segments;

  if (supportedLocales.includes(first) && first !== 'en') {
    // Locale-prefixed route: /<locale> (home) or /<locale>/<slug>
    if (rest.length > 0) return null; // no deeper nesting supported
    if (second === undefined) {
      return { locale: first, slug: 'home' };
    }
    return { locale: first, slug: second };
  }

  // Plain English (default-locale) page slug, e.g. /about-us
  if (segments.length > 1) return null; // no deeper nesting supported for plain slugs
  return { locale: 'en', slug: first };
}

export async function generateStaticParams() {
  // No site filtering at build time — all English slugs are pre-generated.
  // Locale-prefixed variants are rendered on demand (ISR) rather than at build time.
  const pages = await getPublishedPages();
  return pages
    .filter((p) => p.slug !== 'home' && (p.locale || 'en') === 'en')
    .map((p) => ({ slugPath: [p.slug] }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slugPath } = await params;
  const [siteId, siteSlug, baseUrl] = await Promise.all([
    getCurrentSiteId(),
    getCurrentSiteSlug(),
    getCurrentSiteBaseUrl(),
  ]);

  const route = await resolveRoute(slugPath, siteId || undefined);
  if (!route) return { title: 'Page Not Found' };

  // The 'centre' site's real localized URLs live under /zh (hardcoded), not this catch-all.
  if (siteSlug === 'centre' && route.locale !== 'en') {
    return { title: 'Page Not Found' };
  }

  const page = await getPageBySlug(route.slug, siteId || undefined, route.locale);
  if (!page) return { title: 'Page Not Found' };

  const title = page.meta_title || page.title;
  const description = page.meta_description || undefined;
  const isHome = route.slug === 'home';
  const url =
    route.locale === 'en'
      ? isHome ? baseUrl : `${baseUrl}/${route.slug}`
      : isHome ? `${baseUrl}/${route.locale}` : `${baseUrl}/${route.locale}/${route.slug}`;

  let languages: Record<string, string> | undefined;
  const supportedLocales = await getSupportedLocales(siteId || undefined);
  if (supportedLocales.length > 1) {
    const langMap: Record<string, string> = {};
    for (const loc of supportedLocales) {
      const hasTranslation = loc === 'en' || (await pageExistsForLocale(route.slug, siteId || '', loc));
      if (!hasTranslation) continue;
      langMap[loc] =
        loc === 'en'
          ? isHome ? baseUrl : `${baseUrl}/${route.slug}`
          : isHome ? `${baseUrl}/${loc}` : `${baseUrl}/${loc}/${route.slug}`;
    }
    if (Object.keys(langMap).length > 0) languages = langMap;
  }

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      images: page.featured_image_url ? [{ url: page.featured_image_url }] : undefined,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: page.featured_image_url ? [page.featured_image_url] : undefined,
    },
  };
}

export const revalidate = 60;

export default async function DynamicPage({ params }: PageProps) {
  const { slugPath } = await params;
  const siteId = await getCurrentSiteId();
  const siteSlug = await getCurrentSiteSlug();

  const route = await resolveRoute(slugPath, siteId || undefined);
  if (!route) {
    notFound();
  }

  if (siteSlug === 'centre' && route.locale !== 'en') {
    notFound();
  }

  const page = await getPageBySlug(route.slug, siteId || undefined, route.locale);

  if (!page) {
    notFound();
  }

  // If page content is a single raw HTML block (full-page HTML like LCS/GLC Hire),
  // render it directly without the generic hero wrapper
  if (page.content?.length === 1 && page.content[0].type === 'html') {
    return (
      <div
        className="cms-html-page"
        dangerouslySetInnerHTML={{ __html: page.content[0].content || '' }}
      />
    );
  }

  // Locale-prefixed home page (e.g. /ms) — mirrors the non-centre branch of /app/page.tsx,
  // including the recent-posts section, since this is the only route that serves a
  // translated home page (English home is served by the static /app/page.tsx, and zero
  // path segments never reach this catch-all at all).
  if (route.slug === 'home') {
    const recentPosts = await getPublishedPosts(siteId || undefined);
    return (
      <>
        <article>
          <section className="cms-hero relative bg-gradient-to-br from-primary via-primary-400 to-secondary overflow-hidden">
            {page.featured_image_url && (
              <img
                src={page.featured_image_url}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary/85 to-secondary/80" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '28px 28px',
              }}
            />
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center" style={{ color: '#ffffff' }}>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight mb-6" style={{ color: '#ffffff' }}>
                {page.meta_title || page.title}
              </h1>
              {page.meta_description && (
                <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#ffffff' }}>
                  {page.meta_description}
                </p>
              )}
            </div>
          </section>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <ContentRenderer blocks={page.content} />
          </div>
        </article>

        {recentPosts.length > 0 && (
          <section className="bg-white py-14 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-block text-xs font-bold tracking-[.14em] uppercase text-primary mb-3">Latest</span>
                <h2 className="text-3xl font-bold text-gray-900">Recent Posts</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recentPosts.slice(0, 3).map((post) => (
                  <a
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden group"
                  >
                    {post.featured_image_url && (
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img
                          src={post.featured_image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      {post.category && (
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          {post.category}
                        </span>
                      )}
                      <h3 className="text-base font-bold text-gray-900 mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </>
    );
  }

  // Extract the first heading (h1) and first paragraph from content blocks for the hero
  const heroHeading = page.content?.find(
    (b) => b.type === 'heading' && (b.level === 1 || !b.level)
  );
  const heroParagraph = page.content?.find((b) => b.type === 'paragraph');

  // Content blocks to render below the hero (skip the ones used in the hero)
  const remainingBlocks = page.content?.filter((b) => {
    if (b === heroHeading) return false;
    if (b === heroParagraph) return false;
    return true;
  }) || [];

  const heroTitle = heroHeading?.content || heroHeading?.text || page.title;
  const heroSubtitle =
    page.meta_description ||
    heroParagraph?.content ||
    heroParagraph?.text ||
    '';

  // Format the slug for the label badge (e.g. "careers" → "Careers")
  const heroLabel = page.title;

  return (
    <article>
      <style dangerouslySetInnerHTML={{ __html: `
        .cms-hero h1, .cms-hero p, .cms-hero span, .cms-hero div { color: #ffffff !important; }
      ` }} />
      {/* ─── HERO ─── */}
      <section className="cms-hero relative bg-gradient-to-br from-primary-800 via-primary to-secondary overflow-hidden">
        <img
          src={page.featured_image_url || '/images/general/staff-care.jpg'}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary/85 to-secondary/80" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center" style={{ color: '#ffffff' }}>
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] uppercase mb-6" style={{ color: '#ffffff' }}>
            <span className="w-6 h-0.5 bg-[#FAB515] rounded" />
            {heroLabel}
            <span className="w-6 h-0.5 bg-[#FAB515] rounded" />
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight mb-6 max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
            {heroTitle}
          </h1>
          {heroSubtitle && (
            <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#ffffff' }}>
              {heroSubtitle}
            </p>
          )}
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <ContentRenderer blocks={remainingBlocks} />
      </div>
    </article>
  );
}
