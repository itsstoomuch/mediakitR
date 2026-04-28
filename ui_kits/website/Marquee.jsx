// Reheeshaa — Marquee ticker strip (between sections)
const Marquee = ({ bg = '#C96A4E', fg = '#FBF2E4', items }) => {
  const defaults = ['Slow Living', '✦', 'Mumbai', '✦', 'Food', '✦', 'Simple Meals', '✦', 'Calm Routines', '✦', 'Beauty & Wellness', '✦', 'Honest Content', '✦'];
  const list = items || defaults;
  // Duplicate for seamless loop
  const doubled = [...list, ...list];

  return (
    <div style={{ overflow: 'hidden', background: bg, padding: '12px 0', position: 'relative', zIndex: 5 }}>
      <div style={{
        display: 'flex', gap: 32, width: 'max-content',
        animation: 'marqueeScroll 22s linear infinite',
        whiteSpace: 'nowrap',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: item === '✦' ? 'normal' : 'italic',
            fontSize: item === '✦' ? 10 : 13,
            letterSpacing: item === '✦' ? 0 : '.12em',
            textTransform: 'uppercase',
            color: fg,
            opacity: item === '✦' ? .6 : 1,
          }}>{item}</span>
        ))}
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

Object.assign(window, { Marquee });
