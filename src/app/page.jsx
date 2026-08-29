import Link from 'next/link';

import { getSortedWritingsData } from '@/lib/markdown';

export default function Home() {
  const allWriting = getSortedWritingsData();

  const echoesPosts = allWriting.filter(p => p.seriesName === 'Echoes of Absence');
  const lovePosts = allWriting.filter(p => p.seriesName === 'Love');

  const echoesCount = echoesPosts.length;
  const loveCount = lovePosts.length;
  const firstEchoesSlug = echoesPosts.sort((a, b) => a.episode - b.episode)[0]?.slug;
  const firstLoveSlug = lovePosts.sort((a, b) => a.episode - b.episode)[0]?.slug;
  return (
    <>
      {/* HERO */}
      <section style={heroStyle}>
        <div className="container hero-inner" style={heroInnerStyle}>
          <div>
            <span className="eyebrow">Niyaz Unveiled — a tapestry of love and poetic intrigue</span>
            <h1 style={heroTitleStyle}>Where love speaks<br />first,<br />and silence writes<br />the rest.</h1>
            <p style={heroLedeStyle}>I write short stories and poems about the moments love<br />leaves behind — a glance held a second too long, a message<br />read twice, the ache of a goodbye that never quite finished.<br />Whether you're a hopeless romantic or just here to feel<br />something, these words were written for you.</p>
            <div style={heroNoteStyle}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 17L15 6M15 6H8M15 6V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              for every heart still waiting to be unveiled
            </div>
            <div className="btn-row">
              <Link href="/book" className="btn btn-primary">Pre-order the book</Link>
              <Link href="/writing" className="btn btn-ghost">Read a story</Link>
            </div>
          </div>
          <div style={heroArtStyle}>
            <img
              src="/Sunflowers-Photoroom.png"
              alt="You are my sunshine"
              style={{ width: '100%', maxWidth: '480px', height: 'auto', display: 'block', transform: 'scale(1.3) translateY(5px)', position: 'relative', zIndex: 2 }}
            />
            {/* SVG OVERLAY for hearts, arrows, text, and outlines */}
            <svg className="hero-art-svg" viewBox="0 0 500 500" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 3, overflow: 'visible' }}>

              {/* Elegant smooth outlines around the flowers */}
              <ellipse cx="250" cy="240" rx="300" ry="320" fill="none" stroke="#e8a825" strokeWidth="1.5" strokeDasharray="8 6" strokeLinecap="round" transform="rotate(5 250 240)" />
              <ellipse cx="260" cy="230" rx="280" ry="310" fill="none" stroke="#e8a825" strokeWidth="1" strokeDasharray="4 8" opacity="0.6" transform="rotate(-5 260 230)" />

              {/* Elegant swooping arrow from text pointing to flower */}
              <path d="M 540 -15 Q 600 50 510 110" fill="none" stroke="#e8a825" strokeWidth="2" strokeLinecap="round" />
              <path d="M 530 95 L 510 110 L 525 125" fill="none" stroke="#e8a825" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Elegant curved arrow from bottom left text area to image */}
              <path d="M -150 420 Q -100 280 10 270" fill="none" stroke="#e8a825" strokeWidth="2" strokeLinecap="round" />
              <path d="M -10 260 L 10 270 L 0 285" fill="none" stroke="#e8a825" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Decorative subtle arrow from top left */}
              <path d="M -100 60 Q -60 30 10 90" fill="none" stroke="#e8a825" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
              <path d="M -5 75 L 10 90 L -5 95" fill="none" stroke="#e8a825" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

              {/* Perfect Hearts - Using a precisely constructed cubic bezier heart path */}
              <g transform="translate(-130, 140) rotate(-15) scale(1.2)">
                <path d="M 0 -3 C -5 -8 -12 -5 -12 1 C -12 7 0 15 0 15 C 0 15 12 7 12 1 C 12 -5 5 -8 0 -3 Z" fill="none" stroke="#e8a825" strokeWidth="1.5" strokeLinejoin="round" />
              </g>
              <g transform="translate(-60, 320) rotate(20) scale(0.9)">
                <path d="M 0 -3 C -5 -8 -12 -5 -12 1 C -12 7 0 15 0 15 C 0 15 12 7 12 1 C 12 -5 5 -8 0 -3 Z" fill="none" stroke="#e8a825" strokeWidth="2" strokeLinejoin="round" />
              </g>
              <g transform="translate(420, 520) rotate(-10) scale(1.1)">
                <path d="M 0 -3 C -5 -8 -12 -5 -12 1 C -12 7 0 15 0 15 C 0 15 12 7 12 1 C 12 -5 5 -8 0 -3 Z" fill="none" stroke="#e8a825" strokeWidth="1.5" strokeLinejoin="round" />
              </g>
              <g transform="translate(560, 190) rotate(15) scale(0.8)">
                <path d="M 0 -3 C -5 -8 -12 -5 -12 1 C -12 7 0 15 0 15 C 0 15 12 7 12 1 C 12 -5 5 -8 0 -3 Z" fill="#e8a825" stroke="#e8a825" strokeWidth="1.5" strokeLinejoin="round" />
              </g>

              {/* Sparkles / Stars */}
              <path d="M -120 380 Q -115 380 -115 375 Q -115 380 -110 380 Q -115 380 -115 385 Q -115 380 -120 380 Z" fill="#e8a825" stroke="#e8a825" strokeWidth="1" />
              <path d="M -60 80 Q -55 80 -55 75 Q -55 80 -50 80 Q -55 80 -55 85 Q -55 80 -60 80 Z" fill="#e8a825" stroke="#e8a825" strokeWidth="1" />
              <path d="M 550 380 Q 555 380 555 375 Q 555 380 560 380 Q 555 380 555 385 Q 555 380 550 380 Z" fill="#e8a825" stroke="#e8a825" strokeWidth="1" />
              <path d="M 400 -20 Q 404 -20 404 -24 Q 404 -20 408 -20 Q 404 -20 404 -16 Q 404 -20 400 -20 Z" fill="#e8a825" stroke="#e8a825" strokeWidth="1" />

              {/* Smiley Face */}
              <circle cx="-10" cy="460" r="15" fill="none" stroke="#e8a825" strokeWidth="2" />
              <circle cx="-17" cy="455" r="2" fill="#e8a825" />
              <circle cx="-3" cy="455" r="2" fill="#e8a825" />
              <path d="M -18 463 Q -10 472 -2 463" fill="none" stroke="#e8a825" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider"></div></div>

      {/* BOOK SPOTLIGHT */}
      <section style={bookSectionStyle}>
        <div className="container book-inner" style={bookGridStyle}>
          <div>
            <div className="book-cover" style={bookCoverStyle}>
              <span style={ribbonStyle}>Coming Soon</span>
              <div className="cover-face" style={coverFaceStyle}>
                <img src="/coffee/InShot_20260827_090952359.jpg" alt="Coffee" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, opacity: 0.9, mixBlendMode: 'multiply' }} />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <span style={coverEyebrowStyle}>A love story</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '16px', fontFamily: 'var(--font-fraunces)', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
              Sk Niyaz Noor
            </div>
          </div>
          <div style={bookCopyStyle}>
            <span className="eyebrow" style={{ marginBottom: '16px' }}>My debut novel</span>
            <p style={{ fontSize: '1.15rem', color: 'var(--ink-soft)', marginBottom: '24px', lineHeight: '1.7' }}>
              Some stories begin long before we realize we are living them.
              <br /><br />
              Two lives. Two unfinished journeys. Between crowded offices and quiet streets, their paths begin to overlap.
              <br /><br />
              And sometimes, the people who enter our lives are not answers... They are questions.
            </p>

            <ul style={bookPointsStyle}>
              <li style={bookPointItemStyle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '4px' }}><path d="M20 6L9 17L4 12" stroke="#6E7F58" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>Print and digital editions planned</span>
              </li>
              <li style={bookPointItemStyle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '4px' }}><path d="M20 6L9 17L4 12" stroke="#6E7F58" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>Release date: <strong style={{ color: 'var(--ink)' }}>23rd September 2026</strong></span>
              </li>
            </ul>

            <div className="btn-row" style={{ marginBottom: '28px' }}>
              <Link href="/book" className="btn btn-primary">Pre-order now</Link>
              <Link href={`/writing/${firstEchoesSlug || 'echoes-of-absence-s1-ep1'}`} className="btn btn-ghost">Read an excerpt</Link>
            </div>
            <p className="marginalia" style={{ fontFamily: 'var(--font-caveat)', fontSize: '1.25rem', color: 'var(--ink-soft)', maxWidth: 'none' }}>
              Nirvit and Suprita — where two unfinished journeys quietly overlap.
            </p>
          </div>
        </div>
      </section>

      {/* FICTION */}
      <section style={{ padding: '84px 0' }}>
        <div className="container">
          <div style={sectionHeadStyle}>
            <div>
              <span className="eyebrow">Fiction</span>
              <h2>Tales worth losing yourself in</h2>
            </div>
            <Link href="/writing" style={seeAllStyle}>View all stories &rarr;</Link>
          </div>
          <div style={gridStyle}>
            <article className="card" style={cardStyle}>
              <span style={tagStyle}>Story &middot; Series</span>
              <h3 style={cardTitleStyle}>The Adventures of Neil and Litu</h3>
              <p style={cardDescStyle}>Three friends, a mysterious mist, and a night that blurs the line between heaven and something far more dangerous. Season 1, Episode 4: "Heaven."</p>
              <div style={cardFootStyle}>
                <span>Season 1 &middot; Ep. 4</span>
                <Link href="/writing/series/the-adventures-of-neil-and-litu" style={readMoreStyle}>Read &rarr;</Link>
              </div>
            </article>
            <article className="card" style={{ ...cardStyle, position: 'relative' }}>
              <div className="sticky-note">my favorite writing project</div>
              <span style={tagStyle}>Story</span>
              <h3 style={cardTitleStyle}>Echoes of Absence</h3>
              <p style={cardDescStyle}>A story about the ache that lingers when someone leaves — and the quiet echoes they leave behind. Season 1, Episode 1.</p>
              <div style={cardFootStyle}>
                <span>Season 1 &middot; Ep. 1</span>
                <Link href="/writing/series/echoes-of-absence" style={readMoreStyle}>Read &rarr;</Link>
              </div>
            </article>
            <article className="card" style={cardStyle}>
              <span style={tagStyle}>Story</span>
              <h3 style={cardTitleStyle}>Riddle</h3>
              <p style={cardDescStyle}>Not everything is what it seems — a story that asks you to look twice before you believe what you're reading.</p>
              <div style={cardFootStyle}>
                <span>Short read</span>
                <Link href="/writing/riddle-of-my-heart" style={readMoreStyle}>Read &rarr;</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* POEMS */}
      <section style={{ padding: '84px 0', background: 'var(--paper-3)' }}>
        <div className="container">
          <div style={sectionHeadStyle}>
            <div>
              <span className="eyebrow">Poems & Diaries</span>
              <h2>Verses from the heart</h2>
            </div>
            <Link href="/writing" style={seeAllStyle}>View all poems &rarr;</Link>
          </div>
          <div style={gridStyle}>
            <article className="card" style={cardStyle}>
              <span style={tagStyle}>Diary</span>
              <h3 style={cardTitleStyle}>Love: It Starts With You 💕</h3>
              <p style={cardDescStyle}>A tender reminder that love, in all its immensity, begins with the smallest, simplest choice — you.</p>
              <div style={cardFootStyle}>
                <span>Reader favorite</span>
                <Link href="/writing/series/love" style={readMoreStyle}>Read &rarr;</Link>
              </div>
            </article>
            <article className="card" style={cardStyle}>
              <span style={tagStyle}>Diary</span>
              <h3 style={cardTitleStyle}>Suffocation</h3>
              <p style={cardDescStyle}>On love that becomes too heavy to carry, and the courage it takes to finally breathe.</p>
              <div style={cardFootStyle}>
                <span>Sep 22, 2020</span>
                <Link href="/writing/suffocation" style={readMoreStyle}>Read &rarr;</Link>
              </div>
            </article>
            <article className="card" style={cardStyle}>
              <span style={tagStyle}>Poem</span>
              <h3 style={cardTitleStyle}>A Night More To Dream</h3>
              <p style={cardDescStyle}>Start the day by kicking bed, Dress and all, eat my bread...</p>
              <div style={cardFootStyle}>
                <span>Sep 3, 2020</span>
                <Link href="/writing/a-night-more-to-dream" style={readMoreStyle}>Read &rarr;</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ background: 'var(--paper)', position: 'relative', padding: '84px 0' }}>
        <div className="container about-inner" style={aboutGridStyle}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
              <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', border: '3px solid var(--gold)', flexShrink: 0 }}>
                <img src="/profile/InShot_20260829_231327003.jpg" alt="Sk Niyaz Noor" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
              </div>
            </div>
            <span style={quoteMarkStyle}>"</span>
            <blockquote style={aboutQuoteStyle}>I may be small in stature, but my words carry entire worlds.</blockquote>
            <span style={signatureStyle}>— Niyaz</span>
          </div>
          <div>
            <span className="eyebrow">About me</span>
            <h2 style={{ marginBottom: '18px' }}>Hi, I'm Niyaz.</h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>I'm your pocket-sized storyteller — a mini writer armed with a pen and a world of imagination far bigger than my frame. Since 2020, I've been writing short stories and poems that live in the space between a glance and a goodbye, chasing the feeling of love in all its messy, beautiful forms.</p>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>Under the name Niyaz Unveiled, I've written everything from slow-burn romance to strange, mist-covered mysteries — but at the heart of it all is the same question: what does it really mean to love someone?</p>
            <p style={{ color: 'var(--ink-soft)' }}>Want to reach out? Email me at <a href="mailto:niyazunveiled@gmail.com" style={{ color: 'var(--berry)', textDecoration: 'underline' }}>niyazunveiled@gmail.com</a>.</p>
            <div style={statRowStyle}>
              <div><strong style={statStrongStyle}>24+</strong><span style={statSpanStyle}>Stories & poems published</span></div>
              <div><strong style={statStrongStyle}>5+</strong><span style={statSpanStyle}>Years writing</span></div>
              <div><strong style={statStrongStyle}>1</strong><span style={statSpanStyle}>Book, coming soon</span></div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

// Styles
const heroStyle = { position: 'relative', padding: '96px 0 110px', overflow: 'hidden' };
const heroInnerStyle = { display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '40px', alignItems: 'center' };
const heroTitleStyle = { fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: '1.05', marginBottom: '22px', fontFamily: 'var(--font-fraunces)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ink)' };
const heroLedeStyle = { fontSize: '1.25rem', fontFamily: 'var(--font-newsreader)', color: 'var(--ink-soft)', maxWidth: '48ch', marginBottom: '35px', lineHeight: '1.6' };
const heroNoteStyle = { fontFamily: 'var(--font-caveat)', fontSize: '1.6rem', color: 'var(--berry-dark)', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' };
const heroArtStyle = { position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' };

const bookSectionStyle = { background: 'var(--paper-3)', position: 'relative', padding: '84px 0' };
const bookGridStyle = { display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '64px', alignItems: 'center' };
const bookCoverStyle = { position: 'relative', width: '100%', maxWidth: '320px', margin: '0 auto' };
const ribbonStyle = { position: 'absolute', top: '18px', right: '-34px', background: 'var(--gold)', color: 'var(--ink)', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 40px', transform: 'rotate(6deg)', boxShadow: '0 6px 12px rgba(0,0,0,0.18)', zIndex: 10 };
const coverFaceStyle = { aspectRatio: '2/3', background: 'linear-gradient(155deg, var(--berry) 0%, var(--berry-dark) 100%)', borderRadius: '3px', boxShadow: 'var(--shadow), inset -6px 0 14px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '34px 26px', color: 'var(--paper-2)', position: 'relative', transform: 'rotate(-2deg)', transition: 'transform 0.35s ease', overflow: 'hidden' };
const coverEyebrowStyle = { fontFamily: 'var(--font-newsreader)', fontStyle: 'italic', fontSize: '0.85rem', opacity: 0.85, display: 'block' };
const coverTitleStyle = { fontFamily: 'var(--font-fraunces)', fontSize: '1.9rem', lineHeight: '1.15', fontWeight: 600, display: 'block', marginTop: '10px' };
const coverAuthorStyle = { fontFamily: 'var(--font-caveat)', fontSize: '1.8rem', position: 'relative', zIndex: 2 };
const bookCopyStyle = {};
const bookLedeStyle = { color: 'var(--ink-soft)', fontSize: '1.08rem', marginBottom: '26px', maxWidth: '52ch' };
const bookPointsStyle = { listStyle: 'none', padding: 0, margin: '0 0 30px', display: 'grid', gap: '14px' };
const bookPointItemStyle = { display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--ink)' };

const sectionHeadStyle = { display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '44px', gap: '20px', flexWrap: 'wrap' };
const seeAllStyle = { fontSize: '0.95rem', color: 'var(--berry)', whiteSpace: 'nowrap', borderBottom: '1px solid var(--berry)', paddingBottom: '2px' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' };
const cardStyle = { background: 'var(--paper-2)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: '30px 28px 28px', position: 'relative', display: 'flex', flexDirection: 'column', transition: 'transform 0.25s ease, box-shadow 0.25s ease' };
const tagStyle = { fontSize: '0.72rem', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--sage)', fontFamily: 'var(--font-newsreader)', fontWeight: 500, marginBottom: '14px' };
const cardTitleStyle = { fontSize: '1.35rem', marginBottom: '12px', lineHeight: '1.25' };
const cardDescStyle = { color: 'var(--ink-soft)', fontStyle: 'italic', fontSize: '0.98rem', margin: '0 0 20px', flexGrow: 1 };
const cardFootStyle = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--ink-soft)', borderTop: '1px solid var(--line)', paddingTop: '16px' };
const readMoreStyle = { color: 'var(--berry)' };

const aboutGridStyle = { display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '60px', alignItems: 'flex-start' };
const quoteMarkStyle = { fontFamily: 'var(--font-fraunces)', fontSize: '5rem', color: 'var(--gold-soft)', lineHeight: '0.6', marginBottom: '6px', display: 'block' };
const aboutQuoteStyle = { fontFamily: 'var(--font-fraunces)', fontSize: '1.7rem', fontWeight: 500, lineHeight: '1.35', margin: '0 0 20px' };
const signatureStyle = { fontFamily: 'var(--font-caveat)', fontSize: '1.7rem', color: 'var(--berry-dark)' };
const statRowStyle = { display: 'flex', gap: '34px', marginTop: '26px', flexWrap: 'wrap' };
const statStrongStyle = { display: 'block', fontFamily: 'var(--font-fraunces)', fontSize: '1.6rem', color: 'var(--berry)' };
const statSpanStyle = { fontSize: '0.85rem', color: 'var(--ink-soft)' };

const newsletterStyle = { background: 'linear-gradient(135deg, var(--berry-dark), var(--berry))', color: 'var(--paper-2)', borderRadius: '10px', padding: '56px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap', position: 'relative', overflow: 'hidden' };
const newsletterFormStyle = { display: 'flex', gap: '10px', flexWrap: 'wrap', position: 'relative', zIndex: 2 };
const newsletterInputStyle = { fontFamily: 'var(--font-newsreader)', fontSize: '1rem', padding: '13px 18px', borderRadius: '999px', border: '1px solid rgba(246,236,223,0.4)', background: 'rgba(246,236,223,0.08)', color: 'var(--paper-2)', minWidth: '240px' };
const newsletterBtnStyle = { fontFamily: 'var(--font-newsreader)', background: 'var(--gold)', color: 'var(--ink)', border: 'none', padding: '13px 24px', borderRadius: '999px', cursor: 'pointer', fontSize: '1rem', transition: 'transform 0.2s ease' };
