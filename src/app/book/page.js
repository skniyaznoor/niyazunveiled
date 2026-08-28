import Link from 'next/link';

export const metadata = {
  title: 'The Book | Niyaz Unveiled',
};

export default function BookPage() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={bookContainerStyle}>
        <div style={imageColStyle}>
           <img 
            src="https://placehold.co/500x750/2c2a29/ffffff?text=Niyaz+Unveiled" 
            alt="Niyaz Unveiled: The Anthology" 
            style={coverStyle}
          />
        </div>
        <div style={contentColStyle}>
          <span style={tagStyle}>Available for Pre-order</span>
          <h1 style={titleStyle}>Niyaz Unveiled: The Anthology</h1>
          <p style={authorStyle}>by Sk Niyaz Noor</p>
          
          <div style={synopsisStyle}>
            <p>
              In this mesmerizing anthology, Sk Niyaz Noor pulls back the curtain on the deepest human emotions. From the quiet solitude of a midnight storm to the overwhelming rush of new love, <em>Niyaz Unveiled</em> explores the intricate tapestry of our shared experiences.
            </p>
            <p>
              This collection brings together over 50 original short stories and poems, each crafted with the signature lyrical elegance that readers have come to love. It is a journey through loss, redemption, and the beautiful complexities of simply being alive.
            </p>
          </div>

          <div style={purchaseSectionStyle}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontFamily: 'var(--font-inter)' }}>Pre-order your copy:</h3>
            <div style={btnGroupStyle}>
              {/* Users will replace these links with actual platform links (Amazon, Barnes & Noble, etc) */}
              <a href="#" className="btn-primary" style={fullBtnStyle}>Amazon</a>
              <a href="#" className="btn-secondary" style={fullBtnStyle}>Barnes &amp; Noble</a>
              <a href="#" className="btn-secondary" style={fullBtnStyle}>Local Bookstore</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const bookContainerStyle = {
  display: 'flex',
  gap: '5rem',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  maxWidth: '1000px',
  margin: '0 auto',
};

const imageColStyle = {
  flex: '1',
  minWidth: '300px',
};

const coverStyle = {
  width: '100%',
  borderRadius: '4px',
  boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
};

const contentColStyle = {
  flex: '1.5',
  minWidth: '350px',
};

const tagStyle = {
  display: 'block',
  fontSize: '0.9rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  color: 'var(--accent)',
  fontWeight: '600',
  marginBottom: '1rem',
};

const titleStyle = {
  fontSize: '3.5rem',
  marginBottom: '0.5rem',
  lineHeight: '1.1',
};

const authorStyle = {
  fontSize: '1.2rem',
  color: 'var(--text-secondary)',
  marginBottom: '3rem',
  fontStyle: 'italic',
};

const synopsisStyle = {
  fontSize: '1.15rem',
  lineHeight: '1.8',
  color: 'var(--text-primary)',
  marginBottom: '4rem',
};

const purchaseSectionStyle = {
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  border: '1px solid var(--border-color)',
};

const btnGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const fullBtnStyle = {
  textAlign: 'center',
  width: '100%',
};
