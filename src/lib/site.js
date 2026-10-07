// Single source of truth for SEO metadata and structured data.

export const SITE_URL = 'https://niyazunveiled.com';
export const SITE_NAME = 'Niyaz Unveiled';
export const AUTHOR_NAME = 'Sk Niyaz Noor';

export const SHARE_IMAGE = {
  url: '/og-coffee-novel-sk-niyaz-noor.jpg',
  width: 1200,
  height: 630,
  alt: 'Coffee? - a novel by Sk Niyaz Noor',
};

// Spread into each page's openGraph — Next replaces (not merges) the parent's.
export const OPEN_GRAPH_BASE = {
  siteName: SITE_NAME,
  locale: 'en_IN',
  images: [SHARE_IMAGE],
};

export const EMAIL = 'niyazunveiled@gmail.com';

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com/niyazunveiled' },
  { name: 'Goodreads', url: 'https://www.goodreads.com/author/show/72747966.Sk_Niyaz_Noor' },
  { name: 'Reddit', url: 'https://www.reddit.com/user/niyazunveiled' },
];

export const AUTHOR_SAME_AS = SOCIAL_LINKS.map((link) => link.url);

// Where to buy each edition — shared by the /coffee page and the Coffee Counter.
export const STORES = [
  {
    id: 'amazon',
    name: 'Amazon',
    logo: '/coffee/logo/Amazon_icon.png',
    links: {
      paperback: 'https://www.amazon.in/dp/B0HLG2VXFW',
      hardcover: 'https://www.amazon.in/dp/B0HLG2SFPR',
    },
  },
  {
    id: 'notionpress',
    name: 'NotionPress',
    logo: '/coffee/logo/Notion_Press_Logo.png',
    links: {
      paperback: 'https://notionpress.com/in/read/coffee-1410198188/paperback',
      hardcover: 'https://notionpress.com/in/read/coffee-1410198188',
    },
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    logo: '/coffee/logo/Flipkart-Emblem.png',
    links: {
      paperback: 'https://www.flipkart.com/coffee/p/itm193f5c5525efb?pid=9798907228979&lid=LSTBOK9798907228979KB1KO6&marketplace=FLIPKART&q=sk+niyaz+noor+novel&store=bks&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=cfad009b-9704-4485-810f-b4ae588ba57c.9798907228979.SEARCH&ppt=sp&ppn=sp&ssid=tpcdvuy9k00000001791002325925&qH=b335393142c419cd&ov_redirect=true&ov_redirect=true',
      hardcover: 'https://www.flipkart.com/coffee/p/itm193f5c5525efb?pid=9798907228993&lid=LSTBOK9798907228993Y9DAG0&marketplace=FLIPKART&q=sk+niyaz+noor+novel&store=bks&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=cfad009b-9704-4485-810f-b4ae588ba57c.9798907228993.SEARCH&ppt=sp&ppn=sp&ssid=tpcdvuy9k00000001791002325925&qH=b335393142c419cd&ov_redirect=true&ov_redirect=true',
    },
  },
];

export const BOOK = {
  title: 'Coffee?',
  alternateName: 'Coffee',
  path: '/coffee',
  description:
    'Coffee? is the debut romance novel by Sk Niyaz Noor. Two lives. Two unfinished journeys. Between crowded offices and quiet streets, the paths of Nirvit and Suprita begin to overlap.',
  frontCover: '/coffee/coffee-novel-sk-niyaz-noor-front-cover.jpg',
  backCover: '/coffee/coffee-novel-sk-niyaz-noor-back-cover.jpg',
  editions: [
    {
      format: 'Paperback',
      isbn: '9798907228979',
      sameAs: [
        'https://www.amazon.in/dp/B0HLG2VXFW',
        'https://www.flipkart.com/coffee/p/itm193f5c5525efb?pid=9798907228979',
        'https://notionpress.com/in/read/coffee-1410198188/paperback',
      ],
    },
    {
      format: 'Hardcover',
      isbn: '9798907228993',
      sameAs: [
        'https://www.amazon.in/dp/B0HLG2SFPR',
        'https://www.flipkart.com/coffee/p/itm193f5c5525efb?pid=9798907228993',
        'https://notionpress.com/in/read/coffee-1410198188',
      ],
    },
  ],
};

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#author`,
  name: AUTHOR_NAME,
  alternateName: ['Niyaz', SITE_NAME],
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/profile/InShot_20260829_231327003.jpg`,
  jobTitle: 'Author',
  description: `${AUTHOR_NAME} is the author of the novel ${BOOK.title} and writes short stories and poetry as ${SITE_NAME}.`,
  email: `mailto:${EMAIL}`,
  sameAs: AUTHOR_SAME_AS,
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  author: { '@id': `${SITE_URL}/#author` },
};

export const bookJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  '@id': `${SITE_URL}${BOOK.path}#book`,
  name: BOOK.title,
  alternateName: BOOK.alternateName,
  url: `${SITE_URL}${BOOK.path}`,
  image: `${SITE_URL}${BOOK.frontCover}`,
  description: BOOK.description,
  genre: 'Romance',
  inLanguage: 'en',
  author: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#author`,
    name: AUTHOR_NAME,
    url: `${SITE_URL}/about`,
  },
  publisher: { '@type': 'Organization', name: 'Notion Press' },
  workExample: BOOK.editions.map((edition) => ({
    '@type': 'Book',
    isbn: edition.isbn,
    bookFormat: `https://schema.org/${edition.format}`,
    inLanguage: 'en',
    sameAs: edition.sameAs,
  })),
};
