import Link from 'next/link';

export default function MarketingCTA() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--berry-dark), var(--berry))',
      padding: '56px 60px',
      borderRadius: '10px',
      textAlign: 'center',
      marginTop: '4rem',
      position: 'relative',
      overflow: 'hidden',
      color: 'var(--paper-2)'
    }}>
      <div style={{
        position: 'absolute',
        right: '-60px',
        top: '-60px',
        width: '220px',
        height: '220px',
        borderRadius: '50%',
        background: 'rgba(216,184,119,0.18)'
      }} />

      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-fraunces)', color: 'var(--paper-2)', position: 'relative', zIndex: 2 }}>
        Did you enjoy this story?
      </h2>
      <p style={{ color: 'rgba(246,236,223,0.82)', marginBottom: '2rem', fontSize: '1.1rem', position: 'relative', zIndex: 2, maxWidth: '500px', margin: '0 auto 2rem auto' }}>
        Discover the full story of Nirvit and Suprita in my upcoming debut novel, <strong>A love story</strong>.
      </p>
      
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Link href="/book" style={{
          fontFamily: 'var(--font-newsreader)',
          background: 'var(--gold)',
          color: 'var(--ink)',
          padding: '13px 26px',
          borderRadius: '999px',
          display: 'inline-block',
          textDecoration: 'none',
          fontSize: '1rem',
          boxShadow: '0 10px 24px rgba(185,139,62,0.3)',
          transition: 'transform 0.2s ease',
          fontWeight: 500
        }}>
          Pre-order Now
        </Link>
      </div>
    </div>
  );
}
