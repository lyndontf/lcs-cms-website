'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LOGO_URL =
  'https://hztfeqfnvwzkaeiwldmd.supabase.co/storage/v1/object/public/cms-media/glc-hire/logo.png';
const PHONE = '+60193250457';
const WHATSAPP = 'https://api.whatsapp.com/send?phone=60193250457';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Process', href: '/process' },
  { label: 'Biodata', href: '/biodata' },
  { label: 'For Workers', href: '/for-workers' },
];

export default function GlcHireNav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Close menu then navigate (waits for slide-out animation)
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => { window.location.href = href; }, 320);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="glc-header">
        <div className="glc-container">
          <div className="glc-nav">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={LOGO_URL}
                alt="GLC Hire"
                width={140}
                height={40}
                className="h-9 w-auto"
                unoptimized
              />
            </Link>

            {/* Desktop Nav */}
            <ul className="glc-nav__links hidden md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>

            {/* Desktop Actions */}
            <div className="glc-nav__cta hidden md:flex">
              <a
                href={`tel:${PHONE}`}
                style={{ fontSize: 'var(--glc-fs-sm)', fontWeight: 600, color: 'var(--glc-slate)' }}
              >
                +6019 325 0457
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="glc-btn force-white-link"
                style={{ background: '#25D366', color: '#fff' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="glc-burger md:hidden"
              aria-label="Toggle menu"
              style={{ position: 'relative', zIndex: 201, display: 'flex' }}
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="var(--glc-ink)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="var(--glc-ink)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu (matches home page embedded HTML style) ── */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          top: 0,
          right: open ? '0' : '-100%',
          width: '80%',
          maxWidth: '320px',
          height: '100vh',
          background: '#ffffff',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          padding: '4.5rem 1.5rem 2rem',
          boxShadow: open ? '-4px 0 24px rgba(0,0,0,0.12)' : 'none',
          transition: 'right 0.3s ease',
          overflowY: 'auto',
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: 'var(--glc-slate)',
            cursor: 'pointer',
            padding: '4px 8px',
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        {/* Nav links — each separated by a thin line */}
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            style={{
              display: 'block',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--glc-ink)',
              textDecoration: 'none',
              padding: '0.75rem 0',
              borderBottom: '1px solid var(--glc-line)',
            }}
          >
            {link.label}
          </a>
        ))}

        {/* CTA buttons at bottom */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1.5rem' }}>
          <a
            href={`tel:${PHONE}`}
            className="glc-btn glc-btn--outline"
          >
            Call +6019 325 0457
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="glc-btn"
            style={{ background: '#25D366', color: '#fff' }}
          >
            WhatsApp Us Now
          </a>
        </div>
      </div>
    </>
  );
}
