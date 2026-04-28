// Reheeshaa — Hero section (mobile-optimised + extended motifs)
const Hero = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero-bg');
      if (hero) hero.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#EFE3D1', display: 'flex', alignItems: 'center' }}>
      {/* Parallax bg */}
      <div id="hero-bg" style={{ position: 'absolute', inset: '-20%', backgroundImage: "url('assets/1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(.55)', willChange: 'transform' }}></div>
      {/* Grain overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`, opacity: .5, pointerEvents: 'none' }}></div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1180, margin: '0 auto', padding: 'clamp(90px,14vw,120px) clamp(20px,5vw,48px) 80px', width: '100%' }}>
        {/* Eyebrow */}
        <div className="fade-up-1" style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(251,242,228,.7)', fontWeight: 500, marginBottom: 24 }}>
          Creator · Slow Living · Mumbai
        </div>

        {/* Headline */}
        <h1 className="fade-up-2" style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(52px,9vw,120px)', lineHeight: .92, letterSpacing: '-.035em', color: '#FBF2E4', maxWidth: 800, marginBottom: 28 }}>
          Slow mornings,<br />simple <em style={{ fontStyle: 'italic', color: '#C96A4E' }}>meals</em>.
        </h1>

        <p className="fade-up-3" style={{ fontFamily: "'Inter',sans-serif", fontSize: 'clamp(14px,2vw,16px)', lineHeight: 1.65, color: 'rgba(251,242,228,.75)', maxWidth: 480, marginBottom: 40 }}>
          From a small flat in Mumbai — I cook, I rest, I document the unhurried parts of everyday life.
        </p>

        {/* Niche pills */}
        <div className="fade-up-4" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 56 }}>
          {[['Slow Living', '#3D2B1F', '#FBF2E4'], ['Food', '#C96A4E', '#FBF2E4'], ['Beauty & Wellness', '#E8C5C0', '#3D2B1F'], ['Calm Routines', 'transparent', '#FBF2E4']].map(([label, bg, fg]) => (
            <span key={label} style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', padding: '8px 14px', borderRadius: 999, background: bg, color: fg, border: bg === 'transparent' ? '1px solid rgba(251,242,228,.5)' : 'none' }}>{label}</span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(251,242,228,.5)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase' }}>
          <div style={{ width: 1, height: 48, background: 'rgba(251,242,228,.3)', animation: 'scrollPulse 2s ease-in-out infinite' }}></div>
          Scroll
        </div>
      </div>

      {/* ── Floating motifs ── */}
      {/* Stars */}
      <svg width="28" height="28" style={{ position:'absolute', top:'18%', right:'12%', color:'#C96A4E', animation:'floatStar 4s ease-in-out infinite', zIndex:3, opacity:.9 }} viewBox="0 0 20 20"><path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor"></path></svg>
      <svg width="18" height="18" style={{ position:'absolute', bottom:'22%', right:'26%', color:'#F3D89B', animation:'floatStar 5s ease-in-out infinite 1s', zIndex:3, opacity:.85 }} viewBox="0 0 20 20"><path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor"></path></svg>
      <svg width="14" height="14" style={{ position:'absolute', top:'42%', left:'8%', color:'#F3D89B', animation:'floatStar 6s ease-in-out infinite 2s', zIndex:3, opacity:.6 }} viewBox="0 0 20 20"><path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor"></path></svg>

      {/* Sprig leaves */}
      <svg width="80" height="110" style={{ position:'absolute', top:'-10px', left:'5%', color:'rgba(110,122,79,.45)', animation:'floatLeaf1 6s ease-in-out infinite', zIndex:2, pointerEvents:'none' }} viewBox="0 0 100 140">
        <path d="M50 5 L50 135" stroke="currentColor" strokeWidth="2" fill="none"></path>
        <path d="M50 25 Q30 20 25 5 Q45 15 50 25 Z" fill="currentColor"></path>
        <path d="M50 50 Q70 45 75 30 Q55 40 50 50 Z" fill="currentColor"></path>
        <path d="M50 80 Q25 78 18 60 Q43 70 50 80 Z" fill="currentColor"></path>
        <path d="M50 110 Q75 105 82 90 Q55 100 50 110 Z" fill="currentColor"></path>
      </svg>
      <svg width="65" height="90" style={{ position:'absolute', bottom:'5%', right:'6%', color:'rgba(110,122,79,.35)', animation:'floatLeaf2 7s ease-in-out infinite 1.5s', zIndex:2, pointerEvents:'none', transform:'rotate(140deg)' }} viewBox="0 0 100 140">
        <path d="M50 5 L50 135" stroke="currentColor" strokeWidth="2" fill="none"></path>
        <path d="M50 25 Q30 20 25 5 Q45 15 50 25 Z" fill="currentColor"></path>
        <path d="M50 50 Q70 45 75 30 Q55 40 50 50 Z" fill="currentColor"></path>
        <path d="M50 80 Q25 78 18 60 Q43 70 50 80 Z" fill="currentColor"></path>
      </svg>
      {/* Wide leaf */}
      <svg width="140" height="90" style={{ position:'absolute', top:'30%', right:'-20px', color:'rgba(110,122,79,.2)', animation:'floatLeaf1 8s ease-in-out infinite .5s', zIndex:2, pointerEvents:'none' }} viewBox="0 0 120 80">
        <path d="M5 40 C25 10,55 10,75 28 C85 38,100 42,115 40 C100 55,85 62,70 58 C50 75,25 70,5 40 Z" fill="currentColor"></path>
      </svg>

      {/* Spinning ring */}
      <svg width="90" height="90" style={{ position:'absolute', top:'14%', left:'38%', color:'rgba(243,216,155,.25)', animation:'spinSlow 18s linear infinite', zIndex:2, pointerEvents:'none' }} viewBox="0 0 90 90">
        <circle cx="45" cy="45" r="40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="8 6"></circle>
      </svg>

      {/* Scribble circle */}
      <div style={{ position:'absolute', top:'25%', right:'22%', width:100, height:60, border:'2.5px solid rgba(201,106,78,.5)', borderRadius:'50%', transform:'rotate(-8deg)', animation:'floatSlow 5.5s ease-in-out infinite .7s', zIndex:3, pointerEvents:'none' }}></div>

      {/* Dot blobs */}
      <div style={{ position:'absolute', bottom:'15%', left:'15%', width:60, height:60, borderRadius:'50%', background:'rgba(201,106,78,.25)', animation:'floatSlow 6s ease-in-out infinite 1.8s', zIndex:2, pointerEvents:'none' }}></div>
      <div style={{ position:'absolute', top:'12%', right:'35%', width:50, height:50, borderRadius:'50%', background:'rgba(243,216,155,.2)', animation:'floatSlow 5s ease-in-out infinite .4s', zIndex:2, pointerEvents:'none' }}></div>

      {/* Tape strip */}
      <div style={{ position:'absolute', top:'8%', right:'18%', width:90, height:22, background:'rgba(233,197,192,.4)', transform:'rotate(-18deg)', animation:'floatTape 5s ease-in-out infinite .6s', zIndex:3, pointerEvents:'none', boxShadow:'0 2px 8px rgba(61,43,31,.1)' }}></div>

      {/* Scribble underline */}
      <svg width="120" height="18" style={{ position:'absolute', bottom:'28%', left:'10%', color:'rgba(201,106,78,.45)', animation:'floatSlow 6s ease-in-out infinite .3s', zIndex:3, pointerEvents:'none' }} viewBox="0 0 160 24">
        <path d="M4 14 Q 30 4,55 12 T 105 14 T 156 10" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"></path>
      </svg>

      {/* Steam wisps — evoke coffee/cooking */}
      <svg width="24" height="40" style={{ position:'absolute', top:'15%', left:'20%', color:'rgba(251,242,228,.18)', pointerEvents:'none', zIndex:2 }} viewBox="0 0 24 48">
        <path d="M12 40 Q6 28 12 16 Q18 4 12 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" style={{ animation:'steamRise 3s ease-in-out infinite' }}></path>
        <path d="M18 40 Q12 30 16 18 Q20 8 16 2" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" style={{ animation:'steamRise 3s ease-in-out infinite .8s' }}></path>
      </svg>
    </section>
  );
};

Object.assign(window, { Hero });
