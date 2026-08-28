import { getWritingData, getAllWritingSlugs } from '@/lib/markdown';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const postData = await getWritingData(params.slug);
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
  const postData = await getWritingData(params.slug);

  return (
    <article className="container" style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
      <div style={headerStyle}>
        {postData.category && <span style={categoryStyle}>{postData.category}</span>}
        <h1 style={titleStyle}>{postData.title}</h1>
        <p style={dateStyle}>{new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div 
        className="prose"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />

      <div style={footerStyle}>
        <Link href="/writing" className="btn-secondary">
          &larr; Back to all writing
        </Link>
      </div>
    </article>
  );
}

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
};

const titleStyle = {
  fontSize: '3.5rem',
  marginBottom: '1.5rem',
  lineHeight: '1.2',
};

const dateStyle = {
  fontSize: '1rem',
  color: 'var(--text-secondary)',
  fontFamily: 'var(--font-inter)',
};

const footerStyle = {
  marginTop: '5rem',
  textAlign: 'center',
  paddingTop: '3rem',
  borderTop: '1px solid var(--border-color)',
};
