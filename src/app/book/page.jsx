import Link from 'next/link';

export const metadata = {
  title: 'The Book | Sk Niyaz Noor',
  description: 'Niyaz Unveiled - Available now on Amazon, Flipkart, and NotionPress.',
};

export default function BookPage() {
  return (
    <>
      <section style={{ background: 'var(--paper-3)', position: 'relative', padding: '84px 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container book-inner" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '64px', alignItems: 'center' }}>

          <div className="book-cover" style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: '0 auto', perspective: '1000px' }}>
            <span style={{ position: 'absolute', top: '18px', right: '-34px', background: 'var(--gold)', color: 'var(--ink)', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 40px', transform: 'rotate(6deg)', boxShadow: '0 6px 12px rgba(0,0,0,0.18)', zIndex: 10, fontWeight: 'bold' }}>Out Now</span>
            <div className="cover-face" style={{ aspectRatio: '2/3', background: 'linear-gradient(155deg, var(--berry) 0%, var(--berry-dark) 100%)', borderRadius: '3px', boxShadow: 'var(--shadow), inset -6px 0 14px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '34px 26px', color: 'var(--paper-2)', position: 'relative', transform: 'rotate(-2deg)', transition: 'transform 0.35s ease', overflow: 'hidden' }}>
              <img src="/coffee/InShot_20260827_090952359.jpg" alt="Coffee" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <span style={{ fontFamily: 'var(--font-newsreader)', fontStyle: 'italic', fontSize: '0.85rem', opacity: 0.85, display: 'block' }}>A love story</span>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow" style={{ color: 'var(--berry)' }}>My debut novel</span>
            <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '3.5rem', margin: '10px 0 20px', color: 'var(--ink)', lineHeight: '1.1' }}>Niyaz Unveiled</h1>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.08rem', marginBottom: '32px', maxWidth: '52ch', lineHeight: '1.7' }}>
              Some stories begin long before we realize we are living them.
              <br /><br />
              Two lives. Two unfinished journeys. Between crowded offices and quiet streets, their paths begin to overlap.
              <br /><br />
              And sometimes, the people who enter our lives are not answers... They are questions.
            </p>

            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)', marginBottom: '16px', fontFamily: 'var(--font-newsreader)' }}>Available Now On</h3>
              <div className="btn-row" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a 
                  href="#" 
                  className="btn" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    background: '#ffffff', 
                    color: 'var(--ink)',
                    border: '1px solid rgba(0,0,0,0.1)', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
                    padding: '10px 24px',
                    borderRadius: '999px',
                    fontFamily: 'var(--font-newsreader)',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <img src="/coffee/logo/Notion_Press_Logo.png" alt="NotionPress" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
                  NotionPress
                </a>
                
                <a 
                  href="#" 
                  className="btn" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    background: '#ffffff', 
                    color: 'var(--ink)',
                    border: '1px solid rgba(0,0,0,0.1)', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
                    padding: '10px 24px',
                    borderRadius: '999px',
                    fontFamily: 'var(--font-newsreader)',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <img src="/coffee/logo/Amazon_icon.png" alt="Amazon" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
                  Amazon
                </a>

                <a 
                  href="#" 
                  className="btn" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    background: '#ffffff', 
                    color: 'var(--ink)',
                    border: '1px solid rgba(0,0,0,0.1)', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
                    padding: '10px 24px',
                    borderRadius: '999px',
                    fontFamily: 'var(--font-newsreader)',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <img src="/coffee/logo/Flipkart-Emblem.png" alt="Flipkart" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
                  Flipkart
                </a>
              </div>
            </div>
            
            <p className="marginalia" style={{ fontFamily: 'var(--font-caveat)', fontSize: '1.25rem', color: 'var(--ink-soft)', maxWidth: 'none', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '24px' }}>
              Nirvit and Suprita — where two unfinished journeys quietly overlap.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
