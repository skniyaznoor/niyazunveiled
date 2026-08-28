import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroImageContainerStyle}>
          {/* Placeholder for Book Cover, user will replace */}
          <img 
            src="https://placehold.co/400x600/2c2a29/ffffff?text=Book+Cover" 
            alt="Niyaz Unveiled: The Anthology" 
            style={heroImageStyle}
          />
        </div>
        <div style={heroContentStyle}>
          <span style={heroTagStyle}>Coming Soon</span>
          <h1 style={heroTitleStyle}>Niyaz Unveiled: The Anthology</h1>
          <p style={heroDescStyle}>
            A breathtaking collection of short stories and poetry exploring the depths of love, loss, and the intricate tapestry of the human experience.
          </p>
          <div style={btnGroupStyle}>
            <Link href="/book" className="btn-primary">
              Pre-order Now
            </Link>
            <Link href="/writing" className="btn-secondary">
              Read Excerpts
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Writing */}
      <section style={featuredSectionStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.2rem' }}>Featured Writings</h2>
        <div style={gridStyle}>
          {/* Mock Articles */}
          {[1, 2, 3].map((i) => (
            <div key={i} style={cardStyle}>
              <span style={categoryStyle}>{i % 2 === 0 ? 'Poetry' : 'Short Story'}</span>
              <h3 style={cardTitleStyle}>The Whispers of the Wind {i}</h3>
              <p style={cardExcerptStyle}>An exploration of solitude and the quiet moments that define our existence...</p>
              <Link href={`/writing/featured-${i}`} style={readMoreStyle}>Read More &rarr;</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Inline Styles
const heroSectionStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4rem',
  padding: '6rem 0',
  flexWrap: 'wrap',
};

const heroImageContainerStyle = {
  flex: '1',
  minWidth: '300px',
  display: 'flex',
  justifyContent: 'center',
};

const heroImageStyle = {
  maxWidth: '100%',
  maxHeight: '550px',
  borderRadius: '8px',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
};

const heroContentStyle = {
  flex: '1',
  minWidth: '300px',
  maxWidth: '500px',
};

const heroTagStyle = {
  display: 'block',
  fontSize: '0.9rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  color: 'var(--accent)',
  fontWeight: '600',
  marginBottom: '1.5rem',
};

const heroTitleStyle = {
  fontSize: '3.5rem',
  marginBottom: '1.5rem',
  lineHeight: '1.1',
};

const heroDescStyle = {
  fontSize: '1.2rem',
  color: 'var(--text-secondary)',
  marginBottom: '2.5rem',
  lineHeight: '1.7',
};

const btnGroupStyle = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
};

const featuredSectionStyle = {
  padding: '4rem 0',
  borderTop: '1px solid var(--border-color)',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '3rem',
};

const cardStyle = {
  padding: '2rem',
  backgroundColor: '#fff',
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

const categoryStyle = {
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: 'var(--accent)',
  fontWeight: '600',
  display: 'block',
  marginBottom: '1rem',
};

const cardTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
};

const cardExcerptStyle = {
  color: 'var(--text-secondary)',
  marginBottom: '1.5rem',
  fontSize: '0.95rem',
};

const readMoreStyle = {
  fontWeight: '600',
  fontSize: '0.9rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: 'var(--text-primary)',
};
