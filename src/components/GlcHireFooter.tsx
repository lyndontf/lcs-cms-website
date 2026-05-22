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
    <footer style={{ backgroundColor: '#1a5a9e' }} className="text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">GLC Hire</h3>
            <p className="text-sm leading-relaxed text-white/70 mb-4">
              Professional placement services for domestic helpers, elderly caregivers,
              and specialist care workers across Malaysia.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/20">
                JTKSM Licensed
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/20">
                Genesis Life Care Group
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2">
              {BRANCHES.map((branch) => (
                <li key={branch.name} className="flex items-center gap-2 text-sm text-white/70">
                  <svg className="w-3.5 h-3.5 flex-shrink-0 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium text-white/90">{branch.name}</span>
                  <a href={`tel:${branch.phone}`} className="hover:text-white transition-colors">
                    {branch.display}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-5 px-4 py-2 rounded-lg text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Agensi Pekerjaan Genesis Life Care Sdn Bhd. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
