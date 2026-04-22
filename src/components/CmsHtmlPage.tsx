'use client';

import { useEffect, useRef } from 'react';

interface CmsHtmlPageProps {
  html: string;
}

export default function CmsHtmlPage({ html }: CmsHtmlPageProps) {
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
