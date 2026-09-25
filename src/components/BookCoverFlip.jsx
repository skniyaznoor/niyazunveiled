'use client';

import { useState } from 'react';

export default function BookCoverFlip({ frontImage, backImage }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="book-cover" 
      style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '400px', 
        margin: '0 auto', 
        perspective: '1500px', 
        cursor: 'pointer',
        transform: isHovered ? 'rotate(0deg)' : 'rotate(-2deg)',
        transition: 'transform 0.35s ease'
      }} 
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{ 
        position: 'absolute', 
        top: '18px', 
        right: '-34px', 
        background: 'var(--gold)', 
        color: 'var(--ink)', 
        fontSize: '0.72rem', 
        letterSpacing: '0.08em', 
        textTransform: 'uppercase', 
        padding: '5px 40px', 
        transform: 'rotate(8deg) translateZ(10px)', 
        boxShadow: '0 6px 12px rgba(0,0,0,0.18)', 
        zIndex: 10, 
        fontWeight: 'bold' 
      }}>Out Now</span>
      
      <div 
        style={{
          width: '100%',
          aspectRatio: '2/3',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          borderRadius: '3px', 
          boxShadow: 'var(--shadow), inset -6px 0 14px rgba(0,0,0,0.25)', 
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '34px 26px', 
          color: 'var(--paper-2)', 
          overflow: 'hidden',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}>
          <img src={frontImage} alt="Cover Front" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ fontFamily: 'var(--font-newsreader)', fontStyle: 'italic', fontSize: '0.85rem', opacity: 0.85, display: 'block', color: 'var(--paper-2)', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>A love story</span>
          </div>
        </div>

        {/* Back */}
        <div style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          borderRadius: '3px', 
          boxShadow: 'var(--shadow), inset 6px 0 14px rgba(0,0,0,0.25)', 
          overflow: 'hidden',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}>
          <img src={backImage} alt="Cover Back" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
        </div>
      </div>
    </div>
  );
}
