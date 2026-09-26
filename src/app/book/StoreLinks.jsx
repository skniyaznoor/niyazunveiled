"use client";

import { useState } from 'react';

export default function StoreLinks() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleClick = (e, store) => {
    e.preventDefault();
    setActiveTooltip(store);
    setTimeout(() => setActiveTooltip(null), 3000);
  };

  const btnStyle = { 
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
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    position: 'relative'
  };

  const tooltipStyle = {
    position: 'absolute',
    bottom: 'calc(100% + 10px)',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'var(--ink)',
    color: 'var(--paper)',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '0.85rem',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: 10,
    fontFamily: 'var(--font-inter)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    opacity: 1,
    animation: 'fadeIn 0.2s ease-in-out'
  };

  return (
    <div className="btn-row" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, 5px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .store-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.08) !important;
        }
      `}</style>
      
      <a 
        href="#" 
        className="btn store-btn" 
        style={btnStyle}
        onClick={(e) => handleClick(e, 'notionpress')}
      >
        <img src="/coffee/logo/Notion_Press_Logo.png" alt="NotionPress" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
        NotionPress
        {activeTooltip === 'notionpress' && (
          <div style={tooltipStyle}>
            Link will be active by Monday (28) Sept
          </div>
        )}
      </a>
      
      <a 
        href="#" 
        className="btn store-btn" 
        style={btnStyle}
        onClick={(e) => handleClick(e, 'amazon')}
      >
        <img src="/coffee/logo/Amazon_icon.png" alt="Amazon" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
        Amazon
        {activeTooltip === 'amazon' && (
          <div style={tooltipStyle}>
            Link will be active by Monday (28) Sept
          </div>
        )}
      </a>

      <a 
        href="#" 
        className="btn store-btn" 
        style={btnStyle}
        onClick={(e) => handleClick(e, 'flipkart')}
      >
        <img src="/coffee/logo/Flipkart-Emblem.png" alt="Flipkart" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
        Flipkart
        {activeTooltip === 'flipkart' && (
          <div style={tooltipStyle}>
            Link will be active by Monday (28) Sept
          </div>
        )}
      </a>
    </div>
  );
}
