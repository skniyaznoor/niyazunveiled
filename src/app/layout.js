import { Inter, Lora } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora', style: ['normal', 'italic'] });

export const metadata = {
  title: 'Niyaz Unveiled',
  description: 'A tapestry of love and poetic intrigue by Sk Niyaz Noor.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable}`}>
        <nav style={navStyle}>
          <div className="container" style={navContainerStyle}>
            <Link href="/" style={logoStyle}>Niyaz Unveiled</Link>
            <div style={navLinksStyle}>
              <Link href="/book" style={linkStyle}>The Book</Link>
              <Link href="/writing" style={linkStyle}>Writing</Link>
              <Link href="/about" style={linkStyle}>About</Link>
            </div>
          </div>
        </nav>
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <footer style={footerStyle}>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Niyaz Unveiled. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

// Inline styles for structural elements (can be moved to css modules later if needed)
const navStyle = {
  borderBottom: '1px solid var(--border-color)',
  padding: '1.5rem 0',
  position: 'sticky',
  top: 0,
  backgroundColor: 'rgba(253, 252, 248, 0.95)',
  backdropFilter: 'blur(10px)',
  zIndex: 100,
};

const navContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontFamily: 'var(--font-lora)',
  fontSize: '1.5rem',
  fontWeight: '600',
  letterSpacing: '-0.02em',
};

const navLinksStyle = {
  display: 'flex',
  gap: '2rem',
};

const linkStyle = {
  fontSize: '0.95rem',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

const footerStyle = {
  borderTop: '1px solid var(--border-color)',
  padding: '3rem 0',
  textAlign: 'center',
  color: 'var(--text-secondary)',
  marginTop: '4rem',
};
