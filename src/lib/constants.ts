// Site configuration constants
export const SITE = {
  name: 'Rebekah Campbell',
  title: 'Rebekah Campbell | Entrepreneur, Author & Coach',
  description: 'Entrepreneur who built two successful companies, raised $17M+ in venture capital, and went on 138 dates to find love. Coaching programs for dating, business, and capital raising.',
  url: 'https://rebekahcampbell.com',
  author: 'Rebekah Campbell',
  email: 'hello@rebekahcampbell.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/rebekahcampbell/',
    twitter: 'https://twitter.com/reabordeaux',
    instagram: 'https://www.instagram.com/rebekahcampbell/',
  },
};

// Navigation items
export const NAV_ITEMS = [
  { label: 'About', href: '/about/' },
  { label: 'Book', href: '/book/' },
  {
    label: 'Coaching',
    href: '/coaching/',
    children: [
      { label: 'Overview', href: '/coaching/' },
      { label: 'Dating', href: '/coaching/dating/' },
      { label: 'Business', href: '/coaching/business/' },
      { label: 'Capital Raising', href: '/coaching/capital-raising/' },
      { label: 'One-on-One', href: '/coaching/one-on-one/' },
    ],
  },
  { label: 'Speaking', href: '/speaking/' },
  { label: 'Articles', href: '/articles/' },
  { label: 'Contact', href: '/contact/' },
];

// Footer navigation
export const FOOTER_NAV = {
  main: [
    { label: 'About', href: '/about/' },
    { label: 'Book', href: '/book/' },
    { label: 'Speaking', href: '/speaking/' },
    { label: 'Articles', href: '/articles/' },
    { label: 'Videos', href: '/videos/' },
    { label: 'Contact', href: '/contact/' },
  ],
  coaching: [
    { label: 'Dating Coaching', href: '/coaching/dating/' },
    { label: 'Business Coaching', href: '/coaching/business/' },
    { label: 'Capital Raising', href: '/coaching/capital-raising/' },
    { label: 'One-on-One', href: '/coaching/one-on-one/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Media Kit', href: '/media-kit/' },
  ],
};

// Media logos for social proof
export const MEDIA_LOGOS = [
  { name: 'The New York Times', src: '/images/logos/NYT-logo.svg', alt: 'The New York Times logo' },
  { name: 'Forbes', src: '/images/logos/Forbes-logo.svg', alt: 'Forbes logo' },
  { name: 'Australian Financial Review', src: '/images/logos/financial-review-logo.svg', alt: 'Australian Financial Review logo' },
];

// Testimonials
export const TESTIMONIALS = {
  book: [
    {
      quote: 'This book will change lives. I couldn\'t put it down.',
      author: 'Fleur Brown',
      title: 'TEDxSydney',
    },
    {
      quote: 'Absolutely incredible book. I loved it!',
      author: 'Melanie Perkins',
      title: 'Co-founder and CEO, Canva',
    },
    {
      quote: 'I laughed, I cried and I was aghast.',
      author: 'Naomi Simson',
      title: 'Shark Tank Australia, Founder of RedBalloon',
    },
  ],
  speaking: [
    {
      quote: 'Level-headed and relatable with sage and measured advice.',
      author: 'Emma Isaacs',
      title: 'Founder and Global CEO, Business Chicks',
    },
    {
      quote: 'The highlight speaker at the 2019 Speakers Tribe Conference. Inspiration, empowerment, with tangible takeaways.',
      author: 'Sam Cawthorn',
      title: 'CEO and Founder, Speakers Institute',
    },
  ],
  coaching: [
    {
      quote: 'Hands down the best training of the year. Learning from the lived experience of a founder was invaluable.',
      author: 'Lucinda Hartley',
      title: 'Co-founder, Neighbourlytics',
    },
    {
      quote: 'The course was full of insights no one could possibly tell you, because no one else has done this to the same degree as the instructor.',
      author: 'Tim Garnsey',
      title: 'Co-founder, Verge Labs',
    },
    {
      quote: 'I loved the straight to the point advice, terms and jargon they use in real life.',
      author: 'Chris Kosasih',
      title: 'Financial Planning and Analysis Manager, BPay',
    },
  ],
};

// Coaching programs summary
export const COACHING_PROGRAMS = [
  {
    title: 'Find Your Life Partner',
    slug: 'dating',
    duration: '12 weeks',
    description: 'A program for women serious about finding lasting love. Inspired by my 138-date journey and packed with insights from relationship experts.',
    href: '/coaching/dating/',
  },
  {
    title: 'Launch and Scale Your Business',
    slug: 'business',
    duration: '6 weeks',
    description: 'An intensive to take your online business from idea to traction. Learn from someone who\'s built companies from zero to millions in revenue.',
    href: '/coaching/business/',
  },
  {
    title: 'Raise Capital on Your Terms',
    slug: 'capital-raising',
    duration: '12 weeks',
    description: 'A program for Australian and NZ founders ready to raise seed or Series A. Get investor-ready with guidance from someone who\'s raised $17M+.',
    href: '/coaching/capital-raising/',
  },
];

// Stats for credibility
export const STATS = [
  { value: '$17M+', label: 'Capital Raised' },
  { value: '2M+', label: 'Records Sold' },
  { value: '138', label: 'Dates' },
  { value: '500K+', label: 'Hey You Customers' },
];
