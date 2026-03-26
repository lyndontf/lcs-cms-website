'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { SiteSettings } from '@/lib/supabase';

interface HeaderZhProps {
  settings: SiteSettings | null;
}

const zhMenuItems = [
  { label: '首页', url: '/zh' },
  { label: '关于我们', url: '/zh/about-us' },
  { label: '我们的服务', url: '/zh/our-services' },
  { label: '我们的中心', url: '/zh/our-locations' },
  { label: '设施相册', url: '/zh/our-gallery' },
  { label: '联系我们', url: '/zh/contact' },
];

export default function HeaderZh({ settings }: HeaderZhProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (url: string) => {
    if (url === '/zh') return pathname === '/zh';
    return pathname === url || pathname.startsWith(url + '/');
  };

  return (
    <header id="site-header" className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo / Site Name */}
          <Link href="/zh" className="flex items-center flex-shrink-0">
            {settings?.logo_url ? (
              <img
                src={settings.logo_url}
                alt={settings?.site_name || '首页'}
                className="h-12 sm:h-14 w-auto"
              />
            ) : (
              <span className="text-base sm:text-lg font-extrabold text-primary leading-tight whitespace-nowrap">
                {settings?.site_name || 'Genesis Life Care'}
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {zhMenuItems.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.url)
                    ? 'text-primary underline underline-offset-4'
                    : 'text-gray-700 hover:text-primary hover:bg-primary-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Language switcher */}
            <Link
              href="/"
              className="ml-2 px-3 py-1.5 text-xs font-semibold text-gray-500 border border-gray-200 rounded-full hover:text-primary hover:border-primary/30 transition-colors"
            >
              EN
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary"
            aria-label="切换菜单"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-3">
            {zhMenuItems.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className={`block px-3 py-2.5 text-sm font-medium rounded-md ${
                  isActive(item.url)
                    ? 'text-primary underline underline-offset-4'
                    : 'text-gray-700 hover:text-primary hover:bg-primary-50'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/"
              className="block px-3 py-2.5 text-sm font-medium text-gray-500 hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              English
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
