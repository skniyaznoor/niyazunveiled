import Link from 'next/link';
import { getSortedWritingsData } from '@/lib/markdown';

export const metadata = {
  title: 'Writing | Niyaz Unveiled',
};

export default function WritingIndex() {
  const allWritings = getSortedWritingsData();

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Writing</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
        A collection of poetry and short stories.
      </p>

      {allWritings.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
          No writings found. Start by adding markdown files to the <code>content/writing</code> directory.
        </p>
      ) : (
        <div style={gridStyle}>
          {allWritings.map(({ slug, date, title, category, excerpt }) => (
            <div key={slug} style={cardStyle}>
              {category && <span style={categoryStyle}>{category}</span>}
              <h2 style={titleStyle}>{title}</h2>
              <p style={dateStyle}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p style={excerptStyle}>{excerpt}</p>
              <Link href={`/writing/${slug}`} className="btn-secondary" style={{ padding: '0.6rem 1.2rem' }}>
                Read
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: '3rem',
};

const cardStyle = {
  padding: '2.5rem',
  backgroundColor: '#fff',
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
};

const categoryStyle = {
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: 'var(--accent)',
  fontWeight: '600',
  display: 'block',
  marginBottom: '1rem',
};

const titleStyle = {
  fontSize: '1.8rem',
  marginBottom: '0.5rem',
  lineHeight: '1.3',
};

const dateStyle = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  marginBottom: '1.5rem',
};

const excerptStyle = {
  color: 'var(--text-secondary)',
  marginBottom: '2rem',
  lineHeight: '1.7',
};
