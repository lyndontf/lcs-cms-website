'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface LayoutWrapperProps {
  children: ReactNode;
  footer: ReactNode;
  isCmsSite?: boolean;
  isZh?: boolean;
}

export default function LayoutWrapper({ children, footer, isCmsSite, isZh }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith('/lp/');
  // CMS sites embed their own nav/footer in the HTML content
  // zh/ pages have their own header/footer via zh/layout.tsx
  const hideFooter = isLandingPage || isCmsSite || isZh;
  return (
    <>
      <main className="flex-1 bg-white">{children}</main>
      {!hideFooter && <div id="site-footer">{footer}</div>}
    </>
  );
}
