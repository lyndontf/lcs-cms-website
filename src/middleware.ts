import { NextRequest, NextResponse } from 'next/server';

const DOMAIN_TO_SITE: Record<string, string> = {
  'genesiscare.com.my': 'centre',
  'www.genesiscare.com.my': 'centre',
  'lifecaresystems.com.my': 'lcs',
  'www.lifecaresystems.com.my': 'lcs',
  'gtacademy.com.my': 'gta',
  'www.gtacademy.com.my': 'gta',
  'glchire.com': 'glc-hire',
  'www.glchire.com': 'glc-hire',
  'agency.genesiscare.com.my': 'glc-hire',
  'www.agency.genesiscare.com.my': 'glc-hire',
  'projectdeo.com.my': 'project-deo',
  'www.projectdeo.com.my': 'project-deo',
  'dementia.my': 'dementia',
  'www.dementia.my': 'dementia',
  'strokerehab.my': 'stroke',
  'www.strokerehab.my': 'stroke',
};

// Canonical (non-www) domain for each www variant — used for 301 redirects
const WWW_TO_CANONICAL: Record<string, string> = {
  'www.lifecaresystems.com.my': 'lifecaresystems.com.my',
  'www.gtacademy.com.my': 'gtacademy.com.my',
  'www.glchire.com': 'glchire.com',
  'www.agency.genesiscare.com.my': 'agency.genesiscare.com.my',
  'www.projectdeo.com.my': 'projectdeo.com.my',
  'www.genesiscare.com.my': 'genesiscare.com.my',
  'www.dementia.my': 'dementia.my',
  'www.strokerehab.my': 'strokerehab.my',
};

// Path prefix to site slug mapping (for shared-domain hosting / dev)
const PATH_TO_SITE: Record<string, string> = {
  '/lcs': 'lcs',
  '/gta': 'gta',
  '/glc-hire': 'glc-hire',
  '/project-deo': 'project-deo',
  '/dementia': 'dementia',
  '/stroke': 'stroke',
};

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')?.split(':')[0] || '';
  const pathname = request.nextUrl.pathname;

  // ── 1. Redirect www → non-www (permanent 301) ──
  const canonicalHost = WWW_TO_CANONICAL[hostname];
  if (canonicalHost) {
    const url = request.nextUrl.clone();
    url.host = canonicalHost;
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  let siteSlug = DOMAIN_TO_SITE[hostname];

  // If no domain match, check path prefix (e.g. /lcs/features → 'lcs')
  if (!siteSlug) {
    for (const [prefix, slug] of Object.entries(PATH_TO_SITE)) {
      if (pathname === prefix || pathname.startsWith(prefix + '/')) {
        siteSlug = slug;
        break;
      }
    }
  }

  const effectiveSlug = siteSlug || 'centre';

  // For path-prefix access in dev (e.g. /lcs/features), strip the prefix
  // and rewrite to the generic route (/ or /[slug]) so CMS content is served.
  // e.g. /lcs → / (home), /lcs/features → /features (dynamic [slug] route)
  if (siteSlug) {
    const matchedPrefix = Object.entries(PATH_TO_SITE).find(([, s]) => s === siteSlug)?.[0];
    if (matchedPrefix && (pathname === matchedPrefix || pathname.startsWith(matchedPrefix + '/'))) {
      const stripped = pathname.slice(matchedPrefix.length) || '/';
      const url = request.nextUrl.clone();
      url.pathname = stripped;
      // Set on request headers so server components can read it via headers()
      const reqHeaders = new Headers(request.headers);
      reqHeaders.set('x-site-slug', effectiveSlug);
      reqHeaders.set('x-pathname', pathname);
      const response = NextResponse.rewrite(url, { request: { headers: reqHeaders } });
      response.headers.set('x-site-slug', effectiveSlug);
      return response;
    }
  }

  // Set on BOTH request headers (readable by server components via headers())
  // AND response headers (for compatibility with other consumers)
  const reqHeaders = new Headers(request.headers);
  reqHeaders.set('x-site-slug', effectiveSlug);
  reqHeaders.set('x-pathname', pathname);
  const response = NextResponse.next({ request: { headers: reqHeaders } });
  response.headers.set('x-site-slug', effectiveSlug);
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
};
