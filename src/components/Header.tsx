'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MenuItem, SiteSettings } from '@/lib/supabase';

interface HeaderProps {
  settings: SiteSettings | null;
  menuItems: MenuItem[];
}

export default function Header({ settings, menuItems }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (url: string) => {
    if (url === '/') return pathname === '/';
    return pathname === url || pathname.startsWith(url + '/');
  };

  return (
    <header id="site-header" className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo / Site Name */}
          <Link href="/" className="flex items-center flex-shrink-0">
            {settings?.logo_url ? (
              <img
                src={settings.logo_url}
                alt={settings?.site_name || 'Home'}
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
            {menuItems.map((item, i) => (
              <div key={i} className="relative group">
                <Link
                  href={item.url}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.url)
                      ? 'text-primary underline underline-offset-4'
                      : 'text-gray-700 hover:text-primary hover:bg-primary-50'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && item.children.length > 0 && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {item.children.map((child, j) => (
                      <Link
                        key={j}
                        href={child.url}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-primary-50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="ml-3 bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary"
            aria-label="Toggle menu"
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
            {menuItems.map((item, i) => (
              <div key={i}>
                <Link
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
                {item.children?.map((child, j) => (
                  <Link
                    key={j}
                    href={child.url}
                    className="block pl-8 pr-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary-50 rounded-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mx-3 mt-3 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-primary-600"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
