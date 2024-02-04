// ----------------------------------------------------------------------

const LICENSES = ['Essential', 'Enhanced', 'Ultimate'];

export const _homePlans = [
  {
    license: 'Essential',
    commons: [
      'Custom WordPress Website',
      'Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      '1 Week of Support',
    ],
    options: [
      'CMS Setup',
      'Blog Setup',
      'Advanced Customization',
      'Premium Plugins',
      'Priority Support',
      'Monthly Website Checkup',
    ],
    icons: ['/assets/icons/platforms/ic_wordpress.svg'],
  },
  {
    license: 'Enhanced',
    commons: [
      'Custom WordPress Website',
      'Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      '1 Week of Support',
    ],
    options: [
      'Everything in Essential Package',
      'Blog Setup',
      'Advanced Customization',
      'Premium Plugins',
      'Priority Support',
      'Monthly Website Checkup',
    ],
    icons: ['/assets/icons/platforms/ic_wordpress.svg'],
  },
  {
    license: 'Ultimate',
    commons: [
      'Custom WordPress Website',
      'Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      '1 Week of Support',
    ],
    options: [
      'Everything in Enhanced Package',
      'Advanced Customization',
      'Custom Solutions',
      'Premium Plugins',
      'Priority Support',
      'Monthly Website Checkup',
    ],
    icons: ['/assets/icons/platforms/ic_wordpress.svg'],
  },
];

export const _pricingPlans = [
  {
    subscription: 'Essential',
    price: 399,
    caption: 'one-time payment',
    lists: [
      { text: 'Custom WordPress Website with up to 5 pages', isAvailable: true },
      { text: 'Responsive Design', isAvailable: true },
      { text: 'Basic SEO Setup', isAvailable: true },
      { text: 'Contact Form Integration', isAvailable: true },
      { text: '1 Week of Support', isAvailable: true },
    ],
    labelAction: 'Learn More',
  },
  {
    subscription: 'Enhanced',
    price: 799,
    caption: 'one-time payment',
    lists: [
      { text: 'Everything in Essential Package', isAvailable: true },
      { text: 'Enhanced Design (Up to 10 pages)', isAvailable: true },
      { text: 'Content Management System Setup', isAvailable: true },
      { text: 'Blog Setup', isAvailable: true },
      { text: '2 Weeks of Support', isAvailable: true },
    ],
    labelAction: 'Learn More',
  },
  {
    subscription: 'Ultimate',
    price: 1499,
    caption: 'one-time payment',
    lists: [
      { text: 'Everything in Enhanced Package', isAvailable: true },
      { text: 'Advanced Customization', isAvailable: true },
      { text: 'Premium Plugins', isAvailable: true },
      { text: 'Priority Support', isAvailable: true },
      { text: 'Monthly Website Checkup', isAvailable: true },
    ],
    labelAction: 'Learn More',
  },
];
