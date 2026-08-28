import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={heroStyle}>
        <div className="container" style={heroInnerStyle}>
          <div>
            <span className="eyebrow">Writer of small, true things</span>
            <h1 style={heroTitleStyle}>Stories that sit with you<br/>after the lamp goes off.</h1>
            <p style={heroLedeStyle}>I write short fiction, poetry, and essays about memory, family, and the ordinary moments that turn out to matter most. My debut anthology arrives soon.</p>
            <div style={heroNoteStyle}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 17L15 6M15 6H8M15 6V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              thanks for stopping by — pull up a chair
            </div>
            <div className="btn-row">
              <Link href="/book" className="btn btn-primary">Pre-order the book</Link>
              <Link href="/writing" className="btn btn-ghost">Read a story</Link>
            </div>
          </div>
          <div style={heroArtStyle}>
            <svg viewBox="0 0 300 300" fill="none" style={{ width: '100%', maxWidth: '360px', height: 'auto' }}>
              <ellipse cx="150" cy="270" rx="110" ry="12" fill="#33302219"/>
              <path d="M60 230 C60 120, 90 90, 150 90 C210 90, 240 120, 240 230 Z" fill="#6B4226" opacity="0.9"/>
              <path d="M150 90 C150 90, 150 230, 150 230" stroke="#F6ECDF" strokeWidth="2" opacity="0.5"/>
              <rect x="120" y="60" width="60" height="40" rx="4" fill="#B98B3E"/>
              <ellipse cx="150" cy="60" rx="30" ry="10" fill="#D8B877"/>
              <path d="M150 30 Q160 45 150 60 Q140 45 150 30" fill="#B98B3E" opacity="0.7"/>
              <circle cx="150" cy="45" r="55" fill="#D8B877" opacity="0.12"/>
              <path d="M90 235 Q150 255 210 235 L210 245 Q150 265 90 245 Z" fill="#4A2C17"/>
            </svg>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider"></div></div>

      {/* BOOK SPOTLIGHT */}
      <section style={bookSectionStyle}>
        <div className="container" style={bookGridStyle}>
          <div style={bookCoverStyle}>
            <span style={ribbonStyle}>Coming Soon</span>
            <div style={coverFaceStyle}>
              <img src="/coffee/InShot_20260827_090826767.jpg" alt="Niyaz Unveiled" style={{width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, opacity: 0.9, mixBlendMode: 'multiply'}} />
              <div style={{position: 'relative', zIndex: 2}}>
                <span style={coverEyebrowStyle}>An Anthology</span>
                <span style={coverTitleStyle}>Niyaz Unveiled</span>
              </div>
              <span style={coverAuthorStyle}>Sk Niyaz Noor</span>
            </div>
          </div>
          <div style={bookCopyStyle}>
            <span className="eyebrow">My debut collection</span>
            <h2 style={{ marginBottom: '16px' }}>Niyaz Unveiled</h2>
            <p style={bookLedeStyle}>A breathtaking collection of short stories and poetry exploring the depths of love, loss, and the intricate tapestry of the human experience. Told with the same warmth and quiet attention as the stories you'll find below.</p>
            
            <ul style={bookPointsStyle}>
              <li style={bookPointItemStyle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{flexShrink: 0, marginTop: '4px'}}><path d="M20 6L9 17L4 12" stroke="#6E7F58" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>A deeply emotional serialized journey across unforgettable moments</span>
              </li>
              <li style={bookPointItemStyle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{flexShrink: 0, marginTop: '4px'}}><path d="M20 6L9 17L4 12" stroke="#6E7F58" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Available in hardcover and paperback soon</span>
              </li>
            </ul>
            
            <div className="btn-row" style={{marginBottom: '28px'}}>
              <Link href="/book" className="btn btn-primary">Pre-order now</Link>
              <Link href="/writing/echoes-of-absence" className="btn btn-ghost">Read an excerpt</Link>
            </div>
            <p className="marginalia">the story about Jaan and Dhadak took me months to get right</p>
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section style={{ padding: '84px 0' }}>
        <div className="container">
          <div style={sectionHeadStyle}>
            <div>
              <span className="eyebrow">Fiction</span>
              <h2>Recent short stories</h2>
            </div>
            <Link href="/writing" style={seeAllStyle}>View all stories &rarr;</Link>
          </div>
          <div style={gridStyle}>
            <article style={cardStyle}>
              <span style={tagStyle}>Serialized Novel</span>
              <h3 style={cardTitleStyle}>Echoes of Absence</h3>
              <p style={cardDescStyle}>A deeply emotional serialized novel exploring the delicate intricacies of love, the profound pain of separation, and the desperate search for redemption.</p>
              <div style={cardFootStyle}>
                <span>30 min read</span>
                <Link href="/writing/echoes-of-absence" style={readMoreStyle}>Read &rarr;</Link>
              </div>
            </article>
            <article style={{...cardStyle, position: 'relative'}}>
              <div className="sticky-note">my favorite writing project</div>
              <span style={tagStyle}>Short Story</span>
              <h3 style={cardTitleStyle}>Echoes of Absence (S1.EP1)</h3>
              <p style={cardDescStyle}>The beginning of Jaan and Dhadak's emotional journey.</p>
              <div style={cardFootStyle}>
                <span>10 min read</span>
                <Link href="/writing/echoes-of-absence" style={readMoreStyle}>Read &rarr;</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ background: 'var(--paper-3)', position: 'relative', padding: '84px 0' }}>
        <div className="container" style={aboutGridStyle}>
          <div>
            <span style={quoteMarkStyle}>"</span>
            <blockquote style={aboutQuoteStyle}>I write to figure out what I actually think — and I've found readers looking for the same thing.</blockquote>
            <span style={signatureStyle}>— Sk Niyaz</span>
          </div>
          <div>
            <span className="eyebrow">About me</span>
            <h2 style={{ marginBottom: '18px' }}>Hi, I'm Sk Niyaz Noor.</h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>I've been writing short fiction and poetry, and for a long time it lived only in notebooks. This site is where I'm finally gathering it all in one place — alongside my upcoming anthology, which took immense dedication and more cups of tea than I can count.</p>
            <p style={{ color: 'var(--ink-soft)' }}>I write about love, profound pain, and the quiet decisions that end up mattering the most. If any of that sounds like your kind of story, I'm glad you're here.</p>
            <div style={statRowStyle}>
              <div><strong style={statStrongStyle}>20+</strong><span style={statSpanStyle}>Stories & poems</span></div>
              <div><strong style={statStrongStyle}>1</strong><span style={statSpanStyle}>Upcoming Book</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ padding: '84px 0' }}>
        <div className="container">
          <div style={newsletterStyle}>
            <div>
              <h2 style={{ color: 'var(--paper-2)', fontSize: '1.8rem', marginBottom: '10px' }}>Get new stories before anyone else</h2>
              <p style={{ color: 'rgba(246,236,223,0.82)', maxWidth: '40ch' }}>A short, occasional email with new stories, poems, and updates on the book. No noise, just the good stuff.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}

// Styles
const heroStyle = { position: 'relative', padding: '96px 0 110px', overflow: 'hidden' };
const heroInnerStyle = { display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '56px', alignItems: 'center' };
const heroTitleStyle = { fontSize: 'clamp(2.6rem, 5vw, 4rem)', lineHeight: '1.05', marginBottom: '22px' };
const heroLedeStyle = { fontSize: '1.18rem', color: 'var(--ink-soft)', maxWidth: '46ch', marginBottom: '30px' };
const heroNoteStyle = { fontFamily: 'var(--font-caveat)', fontSize: '1.5rem', color: 'var(--berry-dark)', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '34px' };
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
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' };
const cardStyle = { background: 'var(--paper-2)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: '30px 28px 28px', position: 'relative', display: 'flex', flexDirection: 'column', transition: 'transform 0.25s ease, box-shadow 0.25s ease' };
const tagStyle = { fontSize: '0.72rem', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--sage)', fontFamily: 'var(--font-newsreader)', fontWeight: 500, marginBottom: '14px' };
const cardTitleStyle = { fontSize: '1.35rem', marginBottom: '12px', lineHeight: '1.25' };
const cardDescStyle = { color: 'var(--ink-soft)', fontStyle: 'italic', fontSize: '0.98rem', margin: '0 0 20px', flexGrow: 1 };
const cardFootStyle = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--ink-soft)', borderTop: '1px solid var(--line)', paddingTop: '16px' };
const readMoreStyle = { color: 'var(--berry)' };

const aboutGridStyle = { display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '60px', alignItems: 'center' };
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
