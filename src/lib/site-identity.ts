// Shared facts and identifiers do not change with the page language.
export const SITE_ORIGIN = 'https://www.jedroplus.com';
export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
export const SOFTWARE_APPLICATION_ID = `${SITE_ORIGIN}/#application`;
export const BOOKING_SERVICE_ID = `${SITE_ORIGIN}/#booking-service`;
export const RECEPTIONIST_SERVICE_ID = `${SITE_ORIGIN}/#receptionist-plus`;
export const AGENCY_SERVICE_ID = `${SITE_ORIGIN}/#agency-service`;
export const EU_SERVICE_AREA = { '@type': 'AdministrativeArea', name: 'European Union' };
export const organizationIdentity = {
  '@type': 'Organization', '@id': ORGANIZATION_ID, name: 'Jedro+',
  legalName: 'Sonja Žužek s.p.', taxID: '97477621', url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/brand/jedro-icon-512.png`,
  areaServed: EU_SERVICE_AREA,
  email: 'info@jedroplus.com', telephone: '+386 68 663 410',
  contactPoint: { '@type': 'ContactPoint', email: 'info@jedroplus.com', telephone: '+386 68 663 410', contactType: 'customer support', areaServed: EU_SERVICE_AREA, availableLanguage: ['Slovenian'] },
  address: { '@type': 'PostalAddress', addressCountry: 'SI' },
  sameAs: ['https://www.instagram.com/jedroplus'],
};
export const websiteIdentity = {
  '@type': 'WebSite', '@id': `${SITE_ORIGIN}/#website`, url: SITE_ORIGIN,
  name: 'Jedro+', alternateName: 'Jedroplus',
  inLanguage: ['sl-SI', 'en-GB', 'it-IT', 'de-DE'],
  publisher: { '@id': ORGANIZATION_ID },
};
