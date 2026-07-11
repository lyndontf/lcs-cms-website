'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LOGO_URL =
  'https://hztfeqfnvwzkaeiwldmd.supabase.co/storage/v1/object/public/cms-media/glc-hire/logo.png';
const PHONE = '+60193250457';
const WHATSAPP = 'https://wa.me/60193250457';

// Desktop links — mirrors the homepage's <ul class="glc-nav__links"> exactly
// (Services / Pricing / Biodata flat, "Company" as a hover dropdown).
const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Biodata', href: '/biodata' },
];

const COMPANY_DROPDOWN = [
  { label: 'About us', href: '/about' },
  { label: 'Our process', href: '/process' },
  { label: 'Training academy', href: '/training' },
  { label: 'For workers', href: '/for-workers' },
  { label: 'Contact us', href: '/contact' },
];

// Mobile menu — mirrors the homepage's #glc-mobile-menu flat link list exactly
// (includes Home, which the desktop nav omits since the logo already links there).
const MOBILE_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About us', href: '/about' },
  { label: 'Our process', href: '/process' },
  { label: 'Training', href: '/training' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'For workers', href: '/for-workers' },
  { label: 'Biodata', href: '/biodata' },
  { label: 'Contact', href: '/contact' },
];

// Nav-scoped subset of the homepage's EN/ZH dictionary (glc-lang-toggle system).
// Only the labels that appear in this component are ported — the rest of these
// two pages' content has no Chinese translation yet, so a full page-wide toggle
// isn't wired here. 'Contact us' has no key on the homepage's own dictionary
// either (only the mobile-menu's short 'Contact' does), so it's intentionally
// left untranslated to match live behavior.
const ZH: Record<string, string> = {
  Services: '服务',
  Pricing: '收费详情',
  Biodata: '简历库',
  Company: '公司信息',
  'About us': '关于我们',
  'Our process': '申请流程',
  'Training academy': '培训学院',
  Training: '培训学院',
  'For workers': '工作人员专区',
  Contact: '联系我们',
  Home: '首页',
  'WhatsApp us': 'WhatsApp联系我们',
  'Call +6019 325 0457': '致电 +6019 325 0457',
};

export default function GlcHireNav() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  // Restore the visitor's saved language choice (shared 'glc-lang' key with
  // the homepage) so the nav stays consistent across a homepage <-> these
  // pages visit.
  useEffect(() => {
    let saved: 'en' | 'zh' = 'en';
    try {
      saved = (localStorage.getItem('glc-lang') as 'en' | 'zh') || 'en';
    } catch {
      // localStorage unavailable — default to English
    }
    setLang(saved);
    document.documentElement.lang = saved === 'zh' ? 'zh-Hans' : 'en';
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'zh' ? 'en' : 'zh';
      document.documentElement.lang = next === 'zh' ? 'zh-Hans' : 'en';
      try {
        localStorage.setItem('glc-lang', next);
      } catch {
        // localStorage unavailable — in-memory only for this page view
      }
      return next;
    });
  }, []);

  const t = useCallback((label: string) => (lang === 'zh' ? ZH[label] || label : label), [lang]);

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
        <div className="glc-container glc-nav">
          {/* Logo */}
          <Link href="/" className="glc-logo" aria-label="Agensi Pekerjaan Genesis Life Care home">
            <Image
              src={LOGO_URL}
              alt="Agensi Pekerjaan Genesis Life Care"
              width={140}
              height={48}
              style={{ height: 48, width: 'auto', display: 'block' }}
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="glc-nav__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{t(link.label)}</Link>
              </li>
            ))}
            <li className="glc-nav__item">
              <Link href="/about">{t('Company')}</Link>
              <div className="glc-nav__dropdown">
                {COMPANY_DROPDOWN.map((item) => (
                  <Link key={item.href} href={item.href}>{t(item.label)}</Link>
                ))}
              </div>
            </li>
          </ul>

          {/* Desktop Actions */}
          <div className="glc-nav__cta">
            <button type="button" className="glc-nav__lang glc-lang-toggle" onClick={toggleLang}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="glc-lang-toggle__text">{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>
            <a href={`tel:${PHONE}`} className="glc-btn glc-btn--ghost">
              +6019 325 0457
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="glc-btn glc-btn--primary">
              {t('WhatsApp us')}
            </a>
            <button
              className="glc-burger"
              id="glc-burger"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22424C" strokeWidth={2} strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu — mirrors the homepage's #glc-mobile-menu structure/classes exactly */}
        <div className={`glc-mobile-menu${open ? ' is-open' : ''}`} id="glc-mobile-menu">
          {MOBILE_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              {t(link.label)}
            </a>
          ))}
          <button
            type="button"
            className="glc-lang-toggle"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              textAlign: 'left',
              background: 'var(--glc-teal)',
              border: '1px solid var(--glc-teal)',
              borderRadius: 999,
              padding: '8px 16px',
              margin: '10px 4px 0',
              fontWeight: 700,
              fontSize: 14,
              color: '#fff',
              cursor: 'pointer',
            }}
            onClick={toggleLang}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="glc-lang-toggle__text">{lang === 'zh' ? 'EN' : '中文'}</span>
          </button>
          <a href={`tel:${PHONE}`} onClick={(e) => handleNavClick(e, `tel:${PHONE}`)}>
            {t('Call +6019 325 0457')}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="glc-btn glc-btn--primary"
            style={{ marginTop: 12, justifyContent: 'center' }}
          >
            {t('WhatsApp us')}
          </a>
        </div>
      </header>
    </>
  );
}
