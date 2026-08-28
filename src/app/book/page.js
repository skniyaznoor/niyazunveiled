import Link from 'next/link';
import MarketingCTA from '@/components/MarketingCTA';

export const metadata = {
  title: 'The Book | Sk Niyaz Noor',
  description: 'Niyaz Unveiled - The upcoming anthology.',
};

export default function BookPage() {
  return (
    <>
      <section style={{ background: 'var(--paper-3)', position: 'relative', padding: '84px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '64px', alignItems: 'center' }}>
          
          <div style={{ position: 'relative', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
            <span style={{ position: 'absolute', top: '18px', right: '-34px', background: 'var(--gold)', color: 'var(--ink)', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 40px', transform: 'rotate(6deg)', boxShadow: '0 6px 12px rgba(0,0,0,0.18)', zIndex: 10 }}>Coming Soon</span>
            <div style={{ aspectRatio: '2/3', background: 'linear-gradient(155deg, var(--berry) 0%, var(--berry-dark) 100%)', borderRadius: '3px', boxShadow: 'var(--shadow), inset -6px 0 14px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '34px 26px', color: 'var(--paper-2)', position: 'relative', transform: 'rotate(-2deg)', transition: 'transform 0.35s ease', overflow: 'hidden' }}>
              <img src="/coffee/InShot_20260827_090826767.jpg" alt="Niyaz Unveiled" style={{width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, opacity: 0.9, mixBlendMode: 'multiply'}} />
              <div style={{position: 'relative', zIndex: 2}}>
                <span style={{ fontFamily: 'var(--font-newsreader)', fontStyle: 'italic', fontSize: '0.85rem', opacity: 0.85, display: 'block' }}>An Anthology</span>
                <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.9rem', lineHeight: '1.15', fontWeight: 600, display: 'block', marginTop: '10px' }}>Niyaz Unveiled</span>
              </div>
              <span style={{ fontFamily: 'var(--font-caveat)', fontSize: '1.8rem', position: 'relative', zIndex: 2 }}>Sk Niyaz Noor</span>
            </div>
          </div>

          <div>
            <span className="eyebrow">My debut collection</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>Niyaz Unveiled</h1>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.08rem', marginBottom: '26px', maxWidth: '52ch' }}>
              A breathtaking collection of short stories and poetry exploring the depths of love, loss, and the intricate tapestry of the human experience.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px', display: 'grid', gap: '14px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--ink)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{flexShrink: 0, marginTop: '4px'}}><path d="M20 6L9 17L4 12" stroke="#6E7F58" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>A deeply emotional serialized journey across unforgettable moments</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--ink)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{flexShrink: 0, marginTop: '4px'}}><path d="M20 6L9 17L4 12" stroke="#6E7F58" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Contains the massive serialized novel, "Echoes of Absence"</span>
              </li>
            </ul>
            
            <div className="btn-row" style={{marginBottom: '28px'}}>
              <Link href="#" className="btn btn-primary">Pre-order now</Link>
            </div>
            <p className="marginalia">This collection took pieces of my soul to write.</p>
          </div>
        </div>
      </section>
    </>
  );
}
