import Link from 'next/link';
import MarketingCTA from '@/components/MarketingCTA';
import Countdown from '@/components/Countdown';

export const metadata = {
  title: 'The Book | Sk Niyaz Noor',
  description: 'Niyaz Unveiled - The upcoming anthology.',
};

export default function BookPage() {
  return (
    <>
      <section style={{ background: 'var(--paper-3)', position: 'relative', padding: '84px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '64px', alignItems: 'center' }}>

          <div className="book-cover" style={{ position: 'relative', width: '100%', maxWidth: '320px', margin: '0 auto', perspective: '1000px' }}>
            <span style={{ position: 'absolute', top: '18px', right: '-34px', background: 'var(--gold)', color: 'var(--ink)', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 40px', transform: 'rotate(6deg)', boxShadow: '0 6px 12px rgba(0,0,0,0.18)', zIndex: 10 }}>Coming Soon</span>
            <div className="cover-face" style={{ aspectRatio: '2/3', background: 'linear-gradient(155deg, var(--berry) 0%, var(--berry-dark) 100%)', borderRadius: '3px', boxShadow: 'var(--shadow), inset -6px 0 14px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '34px 26px', color: 'var(--paper-2)', position: 'relative', transform: 'rotate(-2deg)', transition: 'transform 0.35s ease', overflow: 'hidden' }}>
              <img src="/coffee/InShot_20260827_090952359.jpg" alt="Coffee" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, opacity: 0.9, mixBlendMode: 'multiply' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <span style={{ fontFamily: 'var(--font-newsreader)', fontStyle: 'italic', fontSize: '0.85rem', opacity: 0.85, display: 'block' }}>A love story</span>
              </div>
              {/* <span style={{ fontFamily: 'var(--font-caveat)', fontSize: '1.8rem', position: 'relative', zIndex: 2 }}>Sk Niyaz Noor</span> */}
            </div>
          </div>

          <div>
            <span className="eyebrow">My debut novel</span>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.08rem', marginBottom: '26px', maxWidth: '52ch' }}>
              Some stories begin long before we realize we are living them.
              <br /><br />
              Two lives. Two unfinished journeys. Between crowded offices and quiet streets, their paths begin to overlap.
              <br /><br />
              And sometimes, the people who enter our lives are not answers... They are questions.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px', display: 'grid', gap: '14px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--ink)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '4px' }}><path d="M20 6L9 17L4 12" stroke="#6E7F58" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>Print and digital editions planned</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--ink)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '4px' }}><path d="M20 6L9 17L4 12" stroke="#6E7F58" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>Release date: <strong style={{ color: 'var(--ink)' }}>23rd September 2026</strong></span>
              </li>
            </ul>

            <Countdown targetDate="2026-09-23T00:00:00" />

            <div className="btn-row" style={{ marginBottom: '28px' }}>
              <Link href="#" className="btn btn-primary">Pre-order now</Link>
            </div>
            <p className="marginalia" style={{ fontFamily: 'var(--font-caveat)', fontSize: '1.25rem', color: 'var(--ink-soft)', whiteSpace: 'nowrap', maxWidth: 'none' }}>
              Nirvit and Suprita — where two unfinished journeys quietly overlap.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
