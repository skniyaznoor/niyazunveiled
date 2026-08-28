'use client';

import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const target = new Date(targetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isClient) return null; // Avoid hydration mismatch

  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      fontFamily: 'var(--font-fraunces)',
      marginTop: '10px',
      marginBottom: '32px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--berry)' }}>{timeLeft.days}</div>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)' }}>Days</div>
      </div>
      <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--ink-soft)' }}>:</div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--berry)' }}>{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)' }}>Hours</div>
      </div>
      <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--ink-soft)' }}>:</div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--berry)' }}>{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)' }}>Mins</div>
      </div>
      <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--ink-soft)' }}>:</div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--berry)' }}>{timeLeft.seconds.toString().padStart(2, '0')}</div>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)' }}>Secs</div>
      </div>
    </div>
  );
}
