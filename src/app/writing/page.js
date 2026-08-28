import { getSortedWritingsData } from '@/lib/markdown';
import Link from 'next/link';

export const metadata = {
  title: 'Writing | Sk Niyaz Noor',
  description: 'A collection of short stories, poetry, and serialized novels.',
};

export default function WritingIndex() {
  const allWriting = getSortedWritingsData();

  return (
    <section style={{ padding: '84px 0' }}>
      <div className="container">
        <div style={{ marginBottom: '44px' }}>
          <span className="eyebrow">The Archive</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Stories & Poetry</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {allWriting.map(({ id, date, title, excerpt, category }) => (
            <article key={id} style={{ background: 'var(--paper-2)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: '30px 28px 28px', display: 'flex', flexDirection: 'column', transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--sage)', fontFamily: 'var(--font-newsreader)', fontWeight: 500, marginBottom: '14px' }}>
                {category || 'Story'}
              </span>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '12px', lineHeight: '1.25' }}>{title}</h3>
              <p style={{ color: 'var(--ink-soft)', fontStyle: 'italic', fontSize: '0.98rem', margin: '0 0 20px', flexGrow: 1 }}>
                {excerpt || 'A tale of emotions and lingering thoughts...'}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--ink-soft)', borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
                <span>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                <Link href={`/writing/${id}`} style={{ color: 'var(--berry)' }}>
                  Read &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
