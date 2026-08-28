import { Fraunces, Newsreader, Caveat } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', weight: ['400', '500', '600', '700'] });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader', weight: ['400', '500'], style: ['normal', 'italic'] });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat', weight: ['500', '600', '700'] });

export const metadata = {
  title: 'Niyaz Unveiled — Writer',
  description: 'Writer of small, true things and captivating poetry.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${newsreader.variable} ${caveat.variable}`}>
        <header style={headerStyle}>
          <div className="container" style={navContainerStyle}>
            <Link href="/" style={brandStyle}>
              Niyaz <span style={brandSpanStyle}>Unveiled</span>
            </Link>
            <nav style={navLinksStyle}>
              <Link href="/writing" className="nav-link" style={linkStyle}>Writing</Link>
              <Link href="/book" className="nav-link" style={linkStyle}>The Book</Link>
              <Link href="/book" className="btn btn-primary nav-cta" style={navCtaStyle}>Get the book</Link>
            </nav>
          </div>
        </header>

        <main id="top" style={{ minHeight: '80vh' }}>
          {children}
        </main>

        <footer style={footerStyle}>
          <div className="container">
            <div style={footerInnerStyle}>
              <Link href="#top" style={brandStyle}>Niyaz <span style={brandSpanStyle}>Unveiled</span></Link>
              <div style={footerLinksWrapperStyle}>
                <Link href="/writing" className="footer-link" style={footerLinkStyle}>Stories & Poetry</Link>
                <Link href="/book" className="footer-link" style={footerLinkStyle}>The Book</Link>
              </div>
              <div style={socialStyle}>
                {/* Social icons placeholder */}
                <span className="footer-link" style={footerLinkStyle}>Instagram</span>
                <span className="footer-link" style={footerLinkStyle}>Goodreads</span>
              </div>
            </div>
            <p style={copyrightStyle}>&copy; {new Date().getFullYear()} Niyaz Unveiled. Words made with tea and patience.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

// Inline Styles
const headerStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 100,
  background: 'rgba(246, 236, 223, 0.88)',
  backdropFilter: 'blur(8px)',
  borderBottom: '1px solid var(--line)',
};

const navContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '18px 32px',
};

const brandStyle = {
  fontFamily: 'var(--font-fraunces)',
  fontSize: '1.35rem',
  fontWeight: '700',
  letterSpacing: '0.01em',
  color: 'var(--ink)'
};

const brandSpanStyle = {
  color: 'var(--berry)'
};

const navLinksStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '34px',
  fontSize: '0.95rem',
};

const linkStyle = {
  color: 'var(--ink-soft)',
  transition: 'color 0.2s ease',
  position: 'relative',
  padding: '4px 0'
};

const navCtaStyle = {
  background: 'var(--berry)',
  color: 'var(--paper-2)',
  padding: '9px 20px',
  borderRadius: '999px',
  fontFamily: 'var(--font-newsreader)',
  fontSize: '0.92rem',
  boxShadow: '0 6px 16px rgba(147,49,75,0.28)',
};

const footerStyle = {
  padding: '54px 0 40px',
  borderTop: '1px solid var(--line)',
};

const footerInnerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '20px',
};

const footerLinksWrapperStyle = {
  display: 'flex',
  gap: '26px',
  fontSize: '0.9rem',
};

const footerLinkStyle = {
  color: 'var(--ink-soft)',
};

const socialStyle = {
  display: 'flex',
  gap: '16px',
};

const copyrightStyle = {
  fontSize: '0.82rem',
  color: 'var(--ink-soft)',
  marginTop: '18px',
  textAlign: 'center',
};
