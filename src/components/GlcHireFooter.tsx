import Link from 'next/link';

const WHATSAPP = 'https://api.whatsapp.com/send?phone=60193250457';

const SERVICES = [
  { label: 'Domestic Helper', href: '/#services' },
  { label: 'Elder Care', href: '/#services' },
  { label: 'Infant Care', href: '/#services' },
  { label: 'View Biodata', href: '/biodata' },
];

const COMPANY = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Process', href: '/process' },
  { label: 'Training Academy', href: '/for-workers#training' },
  { label: 'For Workers', href: '/for-workers' },
];

const BRANCHES = [
  { name: 'Klang', phone: '+60193250457', display: '+6019 325 0457' },
  { name: 'Kajang', phone: '+60193340457', display: '+6019 334 0457' },
  { name: 'Petaling Jaya', phone: '+60192950457', display: '+6019 295 0457' },
  { name: 'Puchong', phone: '+60197590457', display: '+6019 759 0457' },
  { name: 'Johor Bahru', phone: '+60192820457', display: '+6019 282 0457' },
];

export default function GlcHireFooter() {
  return (
    <footer className="glc-footer">
      <div className="glc-container">
        <div className="glc-footer__grid">
          {/* Brand */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 800, marginBottom: 12 }}>GLC Hire</h3>
            <p style={{ fontSize: 'var(--glc-fs-sm)', lineHeight: 1.6, color: '#9FC4C7', marginBottom: 16 }}>
              Professional placement services for domestic helpers, elderly caregivers,
              and specialist care workers across Malaysia.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="glc-badge" style={{ background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.8)', border: '1px solid rgba(255,255,255,.2)' }}>
                JTKSM Licensed
              </span>
              <span className="glc-badge" style={{ background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.8)', border: '1px solid rgba(255,255,255,.2)' }}>
                Genesis Life Care Group
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="glc-footer__col">
            <h4>Services</h4>
            <ul>
              {SERVICES.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="glc-footer__col">
            <h4>Company</h4>
            <ul>
              {COMPANY.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="glc-footer__col">
            <h4>Contact Us</h4>
            <ul>
              {BRANCHES.map((branch) => (
                <li key={branch.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" stroke="#7BA3A6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span style={{ fontWeight: 600, color: '#C9E3E5' }}>{branch.name}</span>
                  <a href={`tel:${branch.phone}`}>{branch.display}</a>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="glc-btn"
              style={{ background: '#25D366', color: '#fff', marginTop: 20 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="glc-footer__bottom">
          <p>&copy; {new Date().getFullYear()} Agensi Pekerjaan Genesis Life Care Sdn Bhd. All rights reserved.</p>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
