'use client';

import { useEffect, useRef, useState } from 'react';

const SIZES = [
  { id: 'paperback', label: 'Regular', edition: 'Paperback', note: 'light & easy to carry' },
  { id: 'hardcover', label: 'Large', edition: 'Hardcover', note: 'rich, full-bodied, lasts forever' },
];

const CAFES = [
  {
    id: 'amazon',
    name: 'Amazon',
    logo: '/coffee/logo/Amazon_icon.png',
    links: {
      paperback: 'https://www.amazon.in/dp/B0HLG2VXFW',
      hardcover: 'https://www.amazon.in/dp/B0HLG2SFPR',
    },
  },
  {
    id: 'notionpress',
    name: 'NotionPress',
    logo: '/coffee/logo/Notion_Press_Logo.png',
    links: {
      paperback: 'https://notionpress.com/in/read/coffee-1410198188/paperback',
      hardcover: 'https://notionpress.com/in/read/coffee-1410198188',
    },
  },
];

// Each line appears once the cup fills past its threshold.
const BREW_LINES = [
  { at: 5, text: 'Grinding the beans… two lives.' },
  { at: 30, text: 'Brewing… two unfinished journeys.' },
  { at: 60, text: 'Pouring… between crowded offices and quiet streets.' },
  { at: 100, text: 'Some stories begin long before we realize we are living them.' },
];

const BREW_MS = 3600;

// Cup interior spans y=70..190 in the SVG.
const CUP_TOP = 70;
const CUP_HEIGHT = 120;

export default function CoffeeBrew() {
  const [size, setSize] = useState('paperback');
  const [cafe, setCafe] = useState('amazon');
  const [fill, setFill] = useState(0);
  const [brewing, setBrewing] = useState(false);
  const frameRef = useRef(null);

  const ready = fill >= 100;
  const selectedCafe = CAFES.find(c => c.id === cafe);
  const selectedSize = SIZES.find(s => s.id === size);
  const shownLines = BREW_LINES.filter(l => fill >= l.at);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  const brew = () => {
    if (brewing) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setFill(100);
      return;
    }
    setBrewing(true);
    setFill(0);
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / BREW_MS, 1);
      // Ease-out so the pour slows as the cup nears the brim.
      setFill(Math.round((1 - Math.pow(1 - t, 2.2)) * 100));
      if (t < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setBrewing(false);
      }
    };
    frameRef.current = requestAnimationFrame(tick);
  };

  const reset = () => {
    cancelAnimationFrame(frameRef.current);
    setBrewing(false);
    setFill(0);
  };

  const levelY = CUP_TOP + CUP_HEIGHT - (fill / 100) * (CUP_HEIGHT - 8);

  return (
    <section id="coffee-counter" className="cb-section">
      <style>{css}</style>
      <div className="container">
        <div className="cb-head">
          <span className="eyebrow">The Coffee Counter</span>
          <h2>Order a cup of <em>Coffee</em></h2>
          <p>My novel is best served warm. Pick your size, choose your café, and let it brew.</p>
        </div>

        <div className="cb-grid">
          {/* CUP */}
          <div className="cb-stage" aria-hidden="true">
            <svg viewBox="0 0 260 260" className="cb-svg">
              <defs>
                <clipPath id="cb-cup-clip">
                  <path d="M44 70 L196 70 L184 172 Q180 190 160 190 L80 190 Q60 190 56 172 Z" />
                </clipPath>
                <linearGradient id="cb-coffee" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#8a5a36" />
                  <stop offset="1" stopColor="#3b2213" />
                </linearGradient>
                <linearGradient id="cb-mug" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#fffbf4" />
                  <stop offset="0.7" stopColor="#f3e6d3" />
                  <stop offset="1" stopColor="#e2cfb4" />
                </linearGradient>
              </defs>

              {/* Steam — curls into a heart when ready */}
              <g className={`cb-steam ${ready ? 'is-on' : ''}`}>
                <path className="s1" d="M95 60 C85 45 105 35 95 18" />
                <path className="s2" d="M120 58 C110 40 130 30 120 10" />
                <path className="s3" d="M145 60 C135 45 155 35 145 18" />
              </g>
              <path
                className={`cb-heart ${ready ? 'is-on' : ''}`}
                d="M120 30 C112 18 94 22 96 36 C98 48 120 58 120 58 C120 58 142 48 144 36 C146 22 128 18 120 30 Z"
              />

              {/* Pour stream */}
              {brewing && <rect className="cb-stream" x="117" y="0" width="6" height={levelY} rx="3" />}

              {/* Saucer */}
              <ellipse cx="120" cy="200" rx="100" ry="14" fill="#e2cfb4" />
              <ellipse cx="120" cy="197" rx="78" ry="8" fill="#efe1cc" />

              {/* Handle */}
              <path d="M190 95 C230 95 232 150 184 158" fill="none" stroke="#e2cfb4" strokeWidth="14" strokeLinecap="round" />

              {/* Mug body */}
              <path d="M44 70 L196 70 L184 172 Q180 190 160 190 L80 190 Q60 190 56 172 Z" fill="url(#cb-mug)" />

              {/* Coffee */}
              <g clipPath="url(#cb-cup-clip)">
                <rect x="30" y={levelY} width="180" height="140" fill="url(#cb-coffee)" />
                <g transform={`translate(0 ${levelY})`} style={{ opacity: fill > 0 ? 1 : 0 }}>
                  <path
                    className="cb-wave"
                    d="M0 0 Q15 -5 30 0 T60 0 T90 0 T120 0 T150 0 T180 0 T210 0 T240 0 T270 0 T300 0 T330 0 T360 0 V12 H0 Z"
                    fill="#a06b43"
                  />
                </g>
              </g>

              {/* Rim */}
              <ellipse cx="120" cy="70" rx="76" ry="7" fill="none" stroke="#e2cfb4" strokeWidth="3" />

              {/* Label on mug */}
              <text x="120" y="135" textAnchor="middle" className={`cb-mug-label ${fill > 55 ? 'is-lit' : ''}`}>
                Coffee
              </text>
              <text x="120" y="152" textAnchor="middle" className={`cb-mug-sub ${fill > 55 ? 'is-lit' : ''}`}>
                Sk Niyaz Noor
              </text>
            </svg>

            <div className="cb-meter">
              <span style={{ width: `${fill}%` }} />
            </div>
          </div>

          {/* ORDER TICKET */}
          <div className="cb-ticket">
            <div className="cb-ticket-title">Order ticket</div>

            <fieldset className="cb-field" disabled={brewing}>
              <legend>1. Choose your size</legend>
              <div className="cb-options">
                {SIZES.map(s => (
                  <button
                    key={s.id}
                    type="button"
                    className={`cb-opt ${size === s.id ? 'is-active' : ''}`}
                    aria-pressed={size === s.id}
                    onClick={() => { setSize(s.id); if (ready) reset(); }}
                  >
                    <strong>{s.label}</strong>
                    <span>{s.edition}</span>
                    <small>{s.note}</small>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="cb-field" disabled={brewing}>
              <legend>2. Pick your café</legend>
              <div className="cb-options">
                {CAFES.map(c => (
                  <button
                    key={c.id}
                    type="button"
                    className={`cb-opt cb-opt-row ${cafe === c.id ? 'is-active' : ''}`}
                    aria-pressed={cafe === c.id}
                    onClick={() => { setCafe(c.id); if (ready) reset(); }}
                  >
                    <img src={c.logo} alt="" />
                    <strong>{c.name}</strong>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="cb-lines" aria-live="polite">
              {shownLines.length === 0 ? (
                <p className="cb-line cb-hint">Your cup is empty… for now.</p>
              ) : (
                shownLines.map(l => (
                  <p key={l.at} className={`cb-line ${l.at === 100 ? 'is-final' : ''}`}>{l.text}</p>
                ))
              )}
            </div>

            {ready ? (
              <div className="cb-ready">
                <a
                  href={selectedCafe.links[size]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary cb-cta"
                >
                  Your {selectedSize.edition} is ready: take it from {selectedCafe.name} →
                </a>
                <button type="button" className="cb-rebrew" onClick={reset}>Brew another</button>
              </div>
            ) : (
              <button type="button" className="btn btn-primary cb-cta" onClick={brew} disabled={brewing}>
                {brewing ? `Brewing… ${fill}%` : '☕ Brew my copy'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const css = `
.cb-section { padding: 84px 0; background: radial-gradient(ellipse at 20% 40%, rgba(216,184,119,0.22), transparent 60%), var(--paper); }
.cb-head { text-align: center; max-width: 640px; margin: 0 auto 44px; }
.cb-head h2 { font-size: clamp(2rem, 4vw, 2.8rem); margin: 8px 0 12px; }
.cb-head h2 em { color: var(--berry); font-style: italic; }
.cb-head p { color: var(--ink-soft); margin: 0; }

.cb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }

.cb-stage { max-width: 380px; width: 100%; margin: 0 auto; }
.cb-svg { width: 100%; height: auto; display: block; overflow: visible; filter: drop-shadow(0 18px 24px rgba(59,38,28,0.16)); }
.cb-mug-label { font-family: var(--font-accent), cursive; font-size: 30px; font-weight: 700; fill: var(--berry-dark); opacity: .35; transition: fill .6s ease, opacity .6s ease; }
.cb-mug-sub { font-family: var(--font-body), serif; font-size: 9px; letter-spacing: .2em; text-transform: uppercase; fill: var(--berry-dark); opacity: .3; transition: fill .6s ease, opacity .6s ease; }
.cb-mug-label.is-lit, .cb-mug-sub.is-lit { fill: var(--paper-2); opacity: .92; }

.cb-wave { animation: cb-wave 2.4s linear infinite; }
@keyframes cb-wave { to { transform: translateX(-60px); } }
.cb-stream { fill: #6b4226; animation: cb-stream .25s ease-in-out infinite alternate; }
@keyframes cb-stream { from { width: 6px; } to { width: 8px; } }

.cb-steam path { fill: none; stroke: var(--ink-soft); stroke-width: 3; stroke-linecap: round; opacity: 0; }
.cb-steam.is-on path { animation: cb-steam 3s ease-in-out infinite; }
.cb-steam.is-on .s2 { animation-delay: .6s; }
.cb-steam.is-on .s3 { animation-delay: 1.2s; }
@keyframes cb-steam {
  0% { opacity: 0; transform: translateY(8px); }
  40% { opacity: .45; }
  100% { opacity: 0; transform: translateY(-14px); }
}
.cb-heart { fill: #c0506b; opacity: 0; transform-origin: 120px 40px; transform: scale(.4) translateY(20px); transition: opacity .8s ease .3s, transform .9s cubic-bezier(.2,1.6,.4,1) .3s; }
.cb-heart.is-on { opacity: .9; transform: scale(1) translateY(-18px); animation: cb-beat 1.6s ease-in-out 1.4s infinite; }
@keyframes cb-beat { 0%,100% { transform: scale(1) translateY(-18px); } 50% { transform: scale(1.1) translateY(-20px); } }

.cb-meter { height: 6px; border-radius: 999px; background: var(--paper-3); margin: 20px auto 0; max-width: 220px; overflow: hidden; }
.cb-meter span { display: block; height: 100%; background: linear-gradient(90deg, var(--gold-soft), var(--berry)); }

.cb-ticket {
  background: var(--paper-2);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 30px 28px;
  box-shadow: var(--shadow);
  position: relative;
  transform: rotate(0.6deg);
}
.cb-ticket::before, .cb-ticket::after {
  content: ""; position: absolute; left: 0; right: 0; height: 10px;
  background: radial-gradient(circle at 8px -2px, transparent 7px, var(--paper-2) 7.5px) repeat-x;
  background-size: 16px 10px;
}
.cb-ticket::before { top: -9px; transform: rotate(180deg); }
.cb-ticket::after { bottom: -9px; }
.cb-ticket-title { font-family: var(--font-accent), cursive; font-size: 1.7rem; color: var(--berry-dark); border-bottom: 1px dashed var(--line); padding-bottom: 8px; margin-bottom: 18px; }

.cb-field { border: none; margin-bottom: 18px; }
.cb-field legend { font-size: .78rem; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 10px; }
.cb-options { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.cb-opt {
  font-family: var(--font-body), serif; text-align: left; cursor: pointer;
  background: #fff; border: 1.5px solid var(--line); border-radius: 8px; padding: 12px 14px;
  display: flex; flex-direction: column; gap: 2px; color: var(--ink);
  transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
}
.cb-opt:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 14px rgba(0,0,0,.06); }
.cb-opt:disabled { cursor: not-allowed; opacity: .7; }
.cb-opt.is-active { border-color: var(--berry); box-shadow: 0 0 0 3px rgba(107,66,38,.12); }
.cb-opt strong { font-family: var(--font-heading), serif; font-size: 1.05rem; }
.cb-opt span { font-size: .92rem; color: var(--berry); }
.cb-opt small { font-size: .78rem; color: var(--ink-soft); font-style: italic; }
.cb-opt-row { flex-direction: row; align-items: center; gap: 10px; }
.cb-opt-row img { height: 22px; width: auto; object-fit: contain; }

.cb-lines { min-height: 118px; margin: 6px 0 18px; padding: 12px 0; border-top: 1px dashed var(--line); }
.cb-line { margin: 0 0 6px; font-style: italic; color: var(--ink-soft); animation: cb-in .5s ease both; }
.cb-line.is-final { font-family: var(--font-heading), serif; font-style: normal; color: var(--ink); font-size: 1.08rem; margin-top: 10px; }
.cb-hint { opacity: .7; }
@keyframes cb-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

.cb-cta { width: 100%; text-align: center; }
.cb-cta:disabled { opacity: .85; cursor: progress; transform: none; }
.cb-ready { display: flex; flex-direction: column; align-items: center; gap: 10px; animation: cb-in .5s ease both; }
.cb-ready .cb-cta { animation: cb-glow 2s ease-in-out infinite; }
@keyframes cb-glow { 0%,100% { box-shadow: 0 10px 24px rgba(107,66,38,.3); } 50% { box-shadow: 0 10px 34px rgba(185,139,62,.55); } }
.cb-rebrew { background: none; border: none; color: var(--ink-soft); text-decoration: underline; cursor: pointer; font-family: var(--font-body), serif; font-size: .9rem; }

@media (max-width: 768px) {
  .cb-grid { grid-template-columns: 1fr; gap: 32px; }
  .cb-ticket { transform: none; padding: 24px 18px; }
  .cb-stage { max-width: 280px; }
}
@media (prefers-reduced-motion: reduce) {
  .cb-wave, .cb-steam.is-on path, .cb-heart.is-on, .cb-ready .cb-cta { animation: none; }
}
`;
