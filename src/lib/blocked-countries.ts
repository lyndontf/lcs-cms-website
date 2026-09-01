// Countries frequently cited in scam-call / fraud-compound advisories targeting
// Malaysian consumers. Single source of truth — imported by middleware.ts (sets
// the glc-contact-blocked cookie + hides tel/mailto/wa.me links) and by
// geo-block.ts (blocks form submissions server- and client-side). Not an
// access-control mechanism, just a spam-reduction signal, so a coarse country
// code (Vercel's edge-injected x-vercel-ip-country header) is sufficient.
export const CONTACT_BLOCKED_COUNTRIES = new Set([
  'IN', 'PK', 'MM', 'NG', 'KH', 'LA', 'NP',
  // South America
  'AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'GY', 'PY', 'PE', 'SR', 'UY', 'VE',
  // Africa (all 54 UN member states; NG already listed above)
  'DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CV', 'CM', 'CF', 'TD', 'KM', 'CG', 'CD',
  'DJ', 'EG', 'GQ', 'ER', 'SZ', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'CI', 'KE',
  'LS', 'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'MA', 'MZ', 'NA', 'NE', 'RW',
  'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SS', 'SD', 'TZ', 'TG', 'TN', 'UG', 'ZM', 'ZW',
]);
