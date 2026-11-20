// Single source of truth for names, nav and CTA destinations.
// All names are working placeholders: rename here and the whole site follows.

export const site = {
  company: 'Throughline',
  product: 'Sightline',
  labs: 'Labs',
  owner: 'Owner Name', // placeholder: set to the founder's name
  tagline: 'See and fix what is leaking in your funnel.',
  description:
    'Throughline helps marketing teams and agencies find and fix what is leaking in their funnel, with attribution software and fixed-price audits.',
  email: 'hello@throughline.example',
  year: new Date().getFullYear(),
};

// CTA destinations are TBD. Point these at a form or scheduling link later.
export const links = {
  bookAudit: '/services#book',
  requestAccess: '/sightline#access',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: site.product, href: '/sightline' },
  { label: 'Services', href: '/services' },
  { label: site.labs, href: '/labs' },
  { label: 'About', href: '/about' },
];
