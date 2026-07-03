'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ContentBlock } from '@/lib/supabase';

const JobListingsEmbed = dynamic(() => import('./JobListingsEmbed'), { ssr: false });

interface CmsHtmlPageProps {
  html: string;
}

export function CmsHtmlPage({ html }: CmsHtmlPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Execute inline <script> tags that dangerouslySetInnerHTML doesn't run
    const scripts = containerRef.current.querySelectorAll('script');
    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script');
      // Copy attributes
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      // Copy inline content
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, [html]);

  return (
    <div
      ref={containerRef}
      className="cms-html-page"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default CmsHtmlPage;

// A page's content is a "raw block sequence" when every block is either raw
// 'html' or the 'job_listings' embed — i.e. there is no 'heading' / 'paragraph'
// / other generic block type present that would need the generic hero +
// ContentRenderer treatment. This covers both the pre-existing single-html-block
// full-page case (LCS/GLC Hire) and multi-block html/job_listings mixes (e.g.
// GTA's careers page: header+hero html, job_listings, footer html).
export function isRawBlockSequence(content: ContentBlock[] | undefined | null): boolean {
  if (!content || content.length === 0) return false;
  return content.every((b) => b.type === 'html' || b.type === 'job_listings');
}

// Renders a raw block sequence (see isRawBlockSequence) in order, inside a
// single .cms-html-page wrapper — no hero extraction, no max-w-4xl container.
export function CmsRawBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="cms-html-page">
      {blocks.map((block, i) => {
        if (block.type === 'job_listings') {
          return <JobListingsEmbed key={i} />;
        }
        // 'html'
        return (
          <CmsHtmlPage key={i} html={block.content || ''} />
        );
      })}
    </div>
  );
}
