import { NextRequest, NextResponse } from 'next/server';

const DOMAIN_TO_SITE: Record<string, string> = {
  'lifecaresystems.com.my': 'lcs',
  'www.lifecaresystems.com.my': 'lcs',
  'gtacademy.com.my': 'gta',
  'www.gtacademy.com.my': 'gta',
  'glchire.com': 'glc-hire',
  'www.glchire.com': 'glc-hire',
  'projectdeo.com.my': 'project-deo',
  'www.projectdeo.com.my': 'project-deo',
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
      return response;
    }
  }

  const response = NextResponse.next();
  response.headers.set('x-site-slug', siteSlug || 'centre');
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
};
