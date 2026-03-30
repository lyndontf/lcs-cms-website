import { NextRequest, NextResponse } from 'next/server';

const DOMAIN_TO_SITE: Record<string, string> = {
  'lifecaresystems.com.my': 'lcs',
  'www.lifecaresystems.com.my': 'lcs',
  'gtacademy.com.my': 'gta',
  'www.gtacademy.com.my': 'gta',
  'glchire.com': 'glc-hire',
  'www.glchire.com': 'glc-hire',
  'agency.genesiscare.com.my': 'glc-hire',
  'www.agency.genesiscare.com.my': 'glc-hire',
  'genesiscare.com.my': 'centre',
  'www.genesiscare.com.my': 'centre',
  'projectdeo.com.my': 'project-deo',
  'www.projectdeo.com.my': 'project-deo',
};

// Canonical (non-www) domain for each www variant — 301 redirect targets
const WWW_TO_CANONICAL: Record<string, string> = {
  'www.lifecaresystems.com.my': 'lifecaresystems.com.my',
  'www.gtacademy.com.my': 'gtacademy.com.my',
  'www.glchire.com': 'glchire.com',
  'www.agency.genesiscare.com.my': 'agency.genesiscare.com.my',
  'www.projectdeo.com.my': 'projectdeo.com.my',
  'www.genesiscare.com.my': 'genesiscare.com.my',
};

// Path prefix to site slug mapping (for shared-domain hosting / dev)
const PATH_TO_SITE: Record<string, string> = {
  '/lcs': 'lcs',
  '/gta': 'gta',
  '/glc-hire': 'glc-hire',
  '/project-deo': 'project-deo',
};

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')?.split(':')[0] || '';
  const pathname = request.nextUrl.pathname;

  // ── 1. Redirect www → non-www with permanent 301 ──
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

  // For path-prefix access in dev (e.g. /lcs/features), strip the prefix
  // and rewrite to the generic route (/ or /[slug]) so CMS content is served.
  // e.g. /lcs → / (home), /lcs/features → /features (dynamic [slug] route)
  if (siteSlug) {
    const matchedPrefix = Object.entries(PATH_TO_SITE).find(([, s]) => s === siteSlug)?.[0];
    if (matchedPrefix && (pathname === matchedPrefix || pathname.startsWith(matchedPrefix + '/'))) {
      const stripped = pathname.slice(matchedPrefix.length) || '/';
      const url = request.nextUrl.clone();
      url.pathname = stripped;
      const response = NextResponse.rewrite(url);
      response.headers.set('x-site-slug', siteSlug);
      response.headers.set('x-pathname', pathname);
      return response;
    }
  }

  const response = NextResponse.next();
  response.headers.set('x-site-slug', siteSlug || 'centre');
  response.headers.set('x-pathname', pathname);
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
};
