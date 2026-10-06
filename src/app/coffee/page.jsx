import Link from 'next/link';
import BookCoverFlip from '@/components/BookCoverFlip';
import StoreLinks from './StoreLinks';
import CoffeeBrew from '@/components/CoffeeBrew';
import JsonLd from '@/components/JsonLd';
import { AUTHOR_NAME, BOOK, OPEN_GRAPH_BASE, bookJsonLd } from '@/lib/site';

export const metadata = {
  title: {
    absolute: `Coffee? — A Novel by ${AUTHOR_NAME} | Buy on Amazon, Flipkart & NotionPress`,
  },
  description: `${BOOK.description} Available now in paperback and hardcover on Amazon, Flipkart and NotionPress.`,
  keywords: ['Coffee novel', 'Coffee? novel', 'Coffee by Sk Niyaz Noor', 'Sk Niyaz Noor', 'Sk Niyaz Noor novel', 'Nirvit and Suprita', 'Niyaz Unveiled'],
  alternates: { canonical: BOOK.path },
  openGraph: {
    ...OPEN_GRAPH_BASE,
    type: 'book',
    url: BOOK.path,
    title: `Coffee? — A Novel by ${AUTHOR_NAME}`,
    description: BOOK.description,
    isbn: BOOK.editions[0].isbn,
    authors: [AUTHOR_NAME],
  },
};

export default function BookPage() {
  return (
    <>
      <JsonLd data={bookJsonLd} />
      <section style={{ background: 'var(--paper-3)', position: 'relative', padding: '84px 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container book-inner" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '64px', alignItems: 'center' }}>

          <BookCoverFlip 
            frontImage="/coffee/coffee-novel-sk-niyaz-noor-front-cover.jpg" 
            backImage="/coffee/coffee-novel-sk-niyaz-noor-back-cover.jpg" 
            preload
          />

          <div>
            <span className="eyebrow" style={{ color: 'var(--berry)' }}>My debut novel</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', margin: '10px 0 20px', color: 'var(--ink)', lineHeight: '1.1' }}>Coffee?</h1>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--ink-soft)', margin: '-8px 0 24px' }}>A novel by Sk Niyaz Noor</p>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.08rem', marginBottom: '32px', maxWidth: '52ch', lineHeight: '1.7' }}>
              Some stories begin long before we realize we are living them.
              <br /><br />
              Two lives. Two unfinished journeys. Between crowded offices and quiet streets, their paths begin to overlap.
              <br /><br />
              And sometimes, the people who enter our lives are not answers... They are questions.
            </p>

            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)', marginBottom: '16px', fontFamily: 'var(--font-body)' }}>Available Now On</h2>
              <StoreLinks />
            </div>
            
            <p className="marginalia" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.25rem', color: 'var(--ink-soft)', maxWidth: 'none', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '24px' }}>
              Nirvit and Suprita — where two unfinished journeys quietly overlap.
            </p>
          </div>
        </div>
      </section>

      <CoffeeBrew />
    </>
  );
}
