import { Playfair_Display, Lora, Dancing_Script } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { AuthProvider } from '@/context/AuthContext';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, OPEN_GRAPH_BASE, SHARE_IMAGE } from '@/lib/site';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', weight: ['400', '500', '600', '700'] });
const lora = Lora({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500'], style: ['normal', 'italic'] });
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-accent', weight: ['500', '600', '700'] });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${AUTHOR_NAME} — Author of the Novel Coffee? | ${SITE_NAME}`,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: `${AUTHOR_NAME} is the author of the romance novel Coffee? and writes short stories and poetry as ${SITE_NAME}.`,
  applicationName: SITE_NAME,
  authors: [{ name: AUTHOR_NAME, url: `${SITE_URL}/about` }],
  creator: AUTHOR_NAME,
  openGraph: {
    ...OPEN_GRAPH_BASE,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [SHARE_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} ${dancingScript.variable}`}>
        <AuthProvider>
          <header style={headerStyle}>
            <div className="container nav-inner" style={navContainerStyle}>
              <Link href="/" style={brandStyle}>
                Niyaz <span style={brandSpanStyle}>Unveiled</span>
              </Link>
              <nav className="nav-links" style={navLinksStyle}>
                <Link href="/writing" className="nav-link" style={linkStyle}>Writing</Link>
                <Link href="/about" className="nav-link" style={linkStyle}>About</Link>
                <Link href="/feedback" className="nav-link" style={linkStyle}>Feedback</Link>
                <Link href="/coffee" className="btn btn-primary nav-cta" style={navCtaStyle}>Get the book</Link>
              </nav>
            </div>
          </header>

          <main id="top" style={{ minHeight: '80vh' }}>
            {children}
          </main>


          <footer style={footerStyle}>
            <div className="container">
              <div className="footer-inner" style={footerInnerStyle}>
                <Link href="#top" style={brandStyle}>Niyaz <span style={brandSpanStyle}>Unveiled</span></Link>
                <div className="footer-links-wrapper" style={footerLinksWrapperStyle}>
                  <Link href="/writing" className="footer-link" style={footerLinkStyle}>Stories & Poetry</Link>
                  <Link href="/coffee" className="footer-link" style={footerLinkStyle}>Coffee? — The Novel</Link>
                  <Link href="/about" className="footer-link" style={footerLinkStyle}>About Sk Niyaz Noor</Link>
                  <Link href="/feedback" className="footer-link" style={footerLinkStyle}>Feedback</Link>
                </div>
                <div className="social-links" style={socialStyle}>
                  <a href="mailto:niyazunveiled@gmail.com" className="footer-link" style={footerLinkStyle}>Email</a>
                  <a href="https://www.instagram.com/niyazunveiled" target="_blank" rel="noopener noreferrer" className="footer-link" style={footerLinkStyle}>Instagram</a>
                  <a href="https://www.reddit.com/user/niyazunveiled" target="_blank" rel="noopener noreferrer" className="footer-link" style={footerLinkStyle}>Reddit</a>
                </div>
              </div>
              <p style={copyrightStyle}>&copy; {new Date().getFullYear()} Niyaz Unveiled. Words made with tea and patience.</p>
            </div>
          </footer>
        </AuthProvider>
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
  fontFamily: 'var(--font-heading)',
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
  fontFamily: 'var(--font-body)',
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
