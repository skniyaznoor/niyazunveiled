import { getSortedWritingsData, getAllSeriesSlugs } from '@/lib/markdown';
import { SITE_URL, BOOK } from '@/lib/site';

export default function sitemap() {
  const posts = getSortedWritingsData();

  const staticPages = [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}${BOOK.path}`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/writing`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/feedback`, changeFrequency: 'monthly', priority: 0.4 },
  ];

  const seriesPages = getAllSeriesSlugs().map(({ params }) => ({
    url: `${SITE_URL}/writing/series/${params.series}`,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const postPages = posts.map(post => {
    const lastModified = new Date(post.date);
    return {
      url: `${SITE_URL}/writing/${post.slug}`,
      ...(isNaN(lastModified) ? {} : { lastModified }),
      changeFrequency: 'yearly',
      priority: 0.6,
    };
  });

  return [...staticPages, ...seriesPages, ...postPages];
}
