'use client';

export default function NewsletterForm() {
  const newsletterFormStyle = { display: 'flex', gap: '10px', flexWrap: 'wrap', position: 'relative', zIndex: 2 };
  const newsletterInputStyle = { fontFamily: 'var(--font-newsreader)', fontSize: '1rem', padding: '13px 18px', borderRadius: '999px', border: '1px solid rgba(246,236,223,0.4)', background: 'rgba(246,236,223,0.08)', color: 'var(--paper-2)', minWidth: '240px' };
  const newsletterBtnStyle = { fontFamily: 'var(--font-newsreader)', background: 'var(--gold)', color: 'var(--ink)', border: 'none', padding: '13px 24px', borderRadius: '999px', cursor: 'pointer', fontSize: '1rem', transition: 'transform 0.2s ease' };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! (This is a visual demo)');
  };

  return (
    <form style={newsletterFormStyle} onSubmit={handleSubmit}>
      <input type="email" placeholder="you@example.com" required style={newsletterInputStyle} />
      <button type="submit" style={newsletterBtnStyle}>Subscribe</button>
    </form>
  );
}
