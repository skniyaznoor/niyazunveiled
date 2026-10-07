'use client';

import { useEffect, useRef, useState } from 'react';
import { EMAIL } from '@/lib/site';

// mailto: silently does nothing on devices with no mail app configured,
// so every click also copies the address and says so.
export default function EmailLink({ children = EMAIL, className, style }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2500);
  };

  return (
    <span style={wrapperStyle}>
      <a href={`mailto:${EMAIL}`} className={className} style={style} onClick={handleClick}>
        {children}
      </a>
      <span role="status" style={{ ...toastStyle, opacity: copied ? 1 : 0 }}>
        {copied ? `Copied ${EMAIL}` : ''}
      </span>
    </span>
  );
}

const wrapperStyle = { position: 'relative', display: 'inline-block' };

const toastStyle = {
  position: 'absolute',
  bottom: 'calc(100% + 6px)',
  left: '50%',
  transform: 'translateX(-50%)',
  whiteSpace: 'nowrap',
  background: 'var(--ink)',
  color: 'var(--paper-2)',
  fontSize: '0.78rem',
  fontStyle: 'normal',
  padding: '4px 10px',
  borderRadius: '6px',
  pointerEvents: 'none',
  transition: 'opacity 0.2s ease',
  zIndex: 10,
};
