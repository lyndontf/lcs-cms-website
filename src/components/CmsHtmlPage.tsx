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

// Renders a raw block sequence (see isRawBlockSequence in @/lib/cms-blocks) in order, inside a
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
