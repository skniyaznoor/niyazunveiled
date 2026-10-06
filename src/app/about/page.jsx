import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { AUTHOR_NAME, AUTHOR_SAME_AS, BOOK, OPEN_GRAPH_BASE, personJsonLd } from '@/lib/site';

const description = `${AUTHOR_NAME} is the author of the debut romance novel Coffee? and has been writing short stories and poetry as Niyaz Unveiled since 2020.`;

export const metadata = {
  title: { absolute: `About ${AUTHOR_NAME} — Author of the Novel Coffee?` },
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    ...OPEN_GRAPH_BASE,
    type: 'profile',
    url: '/about',
    title: `About ${AUTHOR_NAME}`,
    description,
  },
};

export default function AboutPage() {
  return (
    <section style={{ padding: '84px 0 120px' }}>
      <JsonLd data={personJsonLd} />
      <div className="container about-inner" style={gridStyle}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={photoStyle}>
            <Image
              src="/profile/InShot_20260829_231327003.jpg"
              alt={`${AUTHOR_NAME}, author of the novel Coffee?`}
              width={260}
              height={260}
              preload
              style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div>
          <span className="eyebrow">About the author</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '20px' }}>{AUTHOR_NAME}</h1>
          <p style={paragraphStyle}>
            I&apos;m {AUTHOR_NAME}, the author of <Link href={BOOK.path} style={linkStyle}><em>Coffee?</em></Link> — my debut novel about
            Nirvit and Suprita, two lives and two unfinished journeys that quietly overlap between crowded offices and quiet streets.
          </p>
          <p style={paragraphStyle}>
            I&apos;m your pocket-sized storyteller — a mini writer armed with a pen and a world of imagination far bigger than my frame.
            Since 2020, I&apos;ve been writing short stories and poems that live in the space between a glance and a goodbye,
            chasing the feeling of love in all its messy, beautiful forms.
          </p>
          <p style={paragraphStyle}>
            Under the name Niyaz Unveiled, I&apos;ve written everything from slow-burn romance to strange, mist-covered mysteries —
            including the serialized <em>Echoes of Absence</em>, <em>Love Bridge</em>, and <em>The Adventures of Neil and Litu</em>.
            You can read them all in <Link href="/writing" style={linkStyle}>Stories &amp; Poetry</Link>.
          </p>

          <h2 style={{ fontSize: '1.4rem', margin: '36px 0 14px' }}>Find {AUTHOR_NAME} online</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px', color: 'var(--ink-soft)' }}>
            <li>Email: <a href="mailto:niyazunveiled@gmail.com" style={linkStyle}>niyazunveiled@gmail.com</a></li>
            {AUTHOR_SAME_AS.map(url => (
              <li key={url}><a href={url} target="_blank" rel="noopener noreferrer me" style={linkStyle}>{url.replace('https://www.', '')}</a></li>
            ))}
          </ul>

          <div className="btn-row" style={{ marginTop: '36px' }}>
            <Link href={BOOK.path} className="btn btn-primary">Get Coffee?</Link>
            <Link href="/writing" className="btn btn-ghost">Read a story</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const gridStyle = { display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '64px', alignItems: 'start' };
const photoStyle = { width: '260px', height: '260px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', border: '3px solid var(--gold)', flexShrink: 0 };
const paragraphStyle = { color: 'var(--ink-soft)', marginBottom: '16px', fontSize: '1.08rem', lineHeight: '1.7', maxWidth: '62ch' };
const linkStyle = { color: 'var(--berry)', textDecoration: 'underline' };
