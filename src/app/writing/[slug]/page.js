import { getWritingData, getAllWritingSlugs, getSortedWritingsData } from '@/lib/markdown';
import Link from 'next/link';
import ProgressBar from '@/components/ProgressBar';
import MarketingCTA from '@/components/MarketingCTA';
import './article.css';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const postData = await getWritingData(resolvedParams.slug);
  return {
    title: `${postData.title} | Niyaz Unveiled`,
  };
}

export async function generateStaticParams() {
  const paths = getAllWritingSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function WritingPost({ params }) {
  const resolvedParams = await params;
  const postData = await getWritingData(resolvedParams.slug);

  const allWriting = getSortedWritingsData();
  let nextEpisode = null;
  let prevEpisode = null;

  if (postData.isSeries) {
    const seriesPosts = allWriting.filter(p => p.seriesName === postData.seriesName);
    nextEpisode = seriesPosts.find(p => p.episode === postData.episode + 1);
    prevEpisode = seriesPosts.find(p => p.episode === postData.episode - 1);
  }

  return (
    <>
      <ProgressBar />
      
      {postData.coverImage && (
        <div style={heroImageContainer}>
          <img src={postData.coverImage} alt={postData.title} style={heroImage} />
          <div style={heroOverlay} />
        </div>
      )}

      <article className="container" style={{ paddingTop: postData.coverImage ? '2rem' : '5rem', paddingBottom: '6rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/writing" style={{ color: 'var(--berry)', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            &larr; Back to Writing Index
          </Link>
        </div>

        <div style={headerStyle}>
          {postData.category && <span style={categoryStyle}>{postData.category}</span>}
          <h1 style={titleStyle}>{postData.title}</h1>
          <p style={dateStyle}>{new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="article-layout">
          <div 
            className="prose drop-cap"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />
          
          <aside className="sticky-sidebar">
            <div className="sidebar-card">
              <h3>Support the Author</h3>
              <p>Pre-order <strong>Niyaz Unveiled</strong> today and discover more breathtaking stories.</p>
              <Link href="/book" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: '1rem', padding: '0.6rem' }}>
                Pre-order Book
              </Link>
            </div>
          </aside>
        </div>

        <MarketingCTA />

        {postData.isSeries && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', padding: '2rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
            {prevEpisode ? (
              <Link href={`/writing/${prevEpisode.slug}`} style={{ color: 'var(--berry)', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>&larr; Previous</span>
                <span style={{ fontSize: '1.1rem', fontFamily: 'var(--font-fraunces)' }}>Episode {prevEpisode.episode}</span>
              </Link>
            ) : <div />}
            {nextEpisode ? (
              <Link href={`/writing/${nextEpisode.slug}`} style={{ color: 'var(--berry)', display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Next &rarr;</span>
                <span style={{ fontSize: '1.1rem', fontFamily: 'var(--font-fraunces)' }}>Episode {nextEpisode.episode}</span>
              </Link>
            ) : <div />}
          </div>
        )}

        <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--paper-2)', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
          <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.8rem', marginBottom: '1rem' }}>Join the Discussion</h3>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '2rem' }}>Share your thoughts on this story. Sign in securely to leave a comment.</p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button className="btn btn-primary">Sign in with Google</button>
            <button className="btn btn-secondary">Sign in with Email</button>
          </div>
          <div style={{ marginTop: '3rem', borderTop: '1px dashed var(--border-color)', paddingTop: '2rem' }}>
            <p style={{ color: 'var(--ink-soft)', fontStyle: 'italic', fontSize: '0.9rem' }}>No comments yet. Be the first to share your thoughts!</p>
          </div>
        </div>

        <div style={footerStyle}>
          <Link href="/writing" className="btn btn-secondary">
            &larr; Back to all writing
          </Link>
        </div>
      </article>
    </>
  );
}

const heroImageContainer = {
  width: '100%',
  height: '60vh',
  maxHeight: '600px',
  position: 'relative',
  overflow: 'hidden',
  marginBottom: '4rem',
};

const heroImage = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center 30%',
};

const heroOverlay = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '50%',
  background: 'linear-gradient(to top, var(--bg-color), transparent)',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '4rem',
  paddingBottom: '3rem',
  borderBottom: '1px solid var(--border-color)',
  maxWidth: '800px',
  margin: '0 auto 4rem auto',
};

const categoryStyle = {
  fontSize: '0.9rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  color: 'var(--accent)',
  fontWeight: '600',
  display: 'block',
  marginBottom: '1.5rem',
  fontFamily: 'var(--font-newsreader)',
};

const titleStyle = {
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  marginBottom: '1.5rem',
  lineHeight: '1.1',
  fontFamily: 'var(--font-fraunces)',
};

const dateStyle = {
  fontSize: '1rem',
  color: 'var(--text-secondary)',
  fontFamily: 'var(--font-newsreader)',
  fontStyle: 'italic',
};

const footerStyle = {
  marginTop: '5rem',
  textAlign: 'center',
  paddingTop: '3rem',
  borderTop: '1px solid var(--border-color)',
};
