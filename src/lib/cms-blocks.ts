import { ContentBlock } from '@/lib/supabase';

// A page's content is a "raw block sequence" when every block is either raw
// 'html' or the 'job_listings' embed — i.e. there is no 'heading' / 'paragraph'
// / other generic block type present that would need the generic hero +
// ContentRenderer treatment. This covers both the pre-existing single-html-block
// full-page case (LCS/GLC Hire) and multi-block html/job_listings mixes (e.g.
// GTA's careers page: header+hero html, job_listings, footer html).
//
// Deliberately kept out of CmsHtmlPage.tsx (a 'use client' module): Server
// Components that need this check (careers/page.tsx, [...slugPath]/page.tsx)
// call it directly as a plain function, which is not a supported way to use a
// value exported from a client boundary — importing it from a client file
// produced an intermittent "is not a function" runtime error in production
// for the /careers route.
export function isRawBlockSequence(content: ContentBlock[] | undefined | null): boolean {
  if (!content || content.length === 0) return false;
  return content.every((b) => b.type === 'html' || b.type === 'job_listings');
}
