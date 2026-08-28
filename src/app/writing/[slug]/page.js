import { getWritingData, getAllWritingSlugs } from '@/lib/markdown';
import Link from 'next/link';
import ProgressBar from '@/components/ProgressBar';
import MarketingCTA from '@/components/MarketingCTA';
import './article.css';

export async function generateMetadata({ params }) {
  const postData = await getWritingData(params.slug);
  return {
    title: `${postData.title} | Sk Niyaz Noor`,
  };
}

export async function generateStaticParams() {
  const paths = getAllWritingSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function WritingPost({ params }) {
  const postData = await getWritingData(params.slug);

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
