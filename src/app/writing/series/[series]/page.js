import { getSortedWritingsData, getAllSeriesSlugs } from '@/lib/markdown';
import Link from 'next/link';
import BackButton from '@/components/BackButton';

export async function generateStaticParams() {
  return getAllSeriesSlugs();
}

export default async function SeriesPage({ params }) {
  const resolvedParams = await params;
  const seriesSlug = resolvedParams.series;

  const allWriting = getSortedWritingsData();
  const seriesEpisodes = allWriting
    .filter(post => post.seriesSlug === seriesSlug)
    .sort((a, b) => a.episode - b.episode);

  if (seriesEpisodes.length === 0) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Series not found</h2>
        <BackButton style={{ color: 'var(--berry)' }} />
      </div>
    );
  }

  const seriesName = seriesEpisodes[0].seriesName;
  const isOngoing = seriesName === 'The Adventures of Neil and Litu' || seriesName === 'Love Bridge';

  return (
    <section style={{ padding: '84px 0 120px' }}>
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <BackButton style={{ color: 'var(--berry)', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }} />
        </div>

        <div style={{ marginBottom: '64px', borderBottom: '1px solid var(--line)', paddingBottom: '40px' }}>
          <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            Series
            {isOngoing && (
              <span style={{ fontSize: '0.65rem', padding: '3px 8px', borderRadius: '12px', background: 'var(--gold)', color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold', display: 'inline-block' }}>Ongoing</span>
            )}
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '16px' }}>{seriesName}</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--ink-soft)', maxWidth: '60ch' }}>
            {seriesName === 'Love' 
              ? 'A collection exploring love in all its forms — from its initial spark and overwhelming warmth to the profound depths of its final chapter.' 
              : seriesName === 'Echoes of Absence'
              ? 'A deeply emotional serialized novel exploring the delicate intricacies of love, the profound pain of separation, and the desperate search for redemption.'
              : seriesEpisodes[0].excerpt || 'An episodic journey through a beautifully crafted world.'}
          </p>
          <div style={{ marginTop: '20px', color: 'var(--sage)', fontFamily: 'var(--font-newsreader)', fontSize: '1.1rem', fontStyle: 'italic' }}>
            {seriesEpisodes.length} Episodes
          </div>
        </div>

        <div style={{ display: 'grid', gap: '20px', maxWidth: '800px' }}>
          {seriesEpisodes.map(ep => (
            <Link 
              key={ep.slug} 
              href={`/writing/${ep.slug}`} 
              style={{ 
                background: 'var(--paper-2)', 
                border: '1px solid var(--line)', 
                borderRadius: 'var(--radius)', 
                padding: '24px 30px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                textDecoration: 'none',
                color: 'inherit'
              }}
              className="series-episode-card"
            >
              <div>
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', fontFamily: 'var(--font-newsreader)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                  Episode {ep.episode}
                </span>
                <h3 style={{ fontSize: '1.3rem', margin: 0 }}>{ep.episodeTitle || ep.title}</h3>
              </div>
              <div style={{ color: 'var(--berry)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--ink-soft)' }}>
                  {new Date(ep.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .series-episode-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.03);
          border-color: var(--berry);
        }
      `}} />
    </section>
  );
}
