// Reheeshaa — About section (mobile-optimised + floating motifs)
const About = () => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const fadeStyle = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
  });

  return (
    <section id="about" ref={ref} className="section-pad" style={{ background: '#E8C5C0', position: 'relative', overflow: 'hidden' }}>

      {/* ── Floating motifs ── */}
      {/* Sprig top-right */}
      <svg width="70" height="100" style={{ position:'absolute', top:20, right:30, color:'rgba(61,43,31,.14)', animation:'floatLeaf1 7s ease-in-out infinite', pointerEvents:'none', zIndex:1 }} viewBox="0 0 100 140">
        <path d="M50 5 L50 135" stroke="currentColor" strokeWidth="2" fill="none"></path>
        <path d="M50 25 Q30 20 25 5 Q45 15 50 25 Z" fill="currentColor"></path>
        <path d="M50 55 Q70 50 75 35 Q55 45 50 55 Z" fill="currentColor"></path>
        <path d="M50 85 Q28 82 22 65 Q44 75 50 85 Z" fill="currentColor"></path>
      </svg>
      {/* Star bottom-left */}
      <svg width="20" height="20" style={{ position:'absolute', bottom:'18%', left:'6%', color:'#C96A4E', animation:'floatStar 5s ease-in-out infinite 1s', opacity:.6, pointerEvents:'none', zIndex:1 }} viewBox="0 0 20 20">
        <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor"></path>
      </svg>
      {/* Dot blob top-left */}
      <div style={{ position:'absolute', top:'12%', left:'3%', width:44, height:44, borderRadius:'50%', background:'rgba(201,106,78,.18)', animation:'floatSlow 6s ease-in-out infinite .5s', pointerEvents:'none' }}></div>
      {/* Wavy scribble bottom-right */}
      <svg width="100" height="14" style={{ position:'absolute', bottom:'12%', right:'8%', color:'rgba(61,43,31,.25)', animation:'floatSlow 5s ease-in-out infinite .3s', pointerEvents:'none', zIndex:1 }} viewBox="0 0 160 24">
        <path d="M4 14 Q 30 4,55 12 T 105 14 T 156 10" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"></path>
      </svg>
      {/* Food sticker */}
      <div style={{ position:'absolute', top:40, right:-30, width:180, height:180, borderRadius:'50%', backgroundImage:"url('assets/food-pasta.png')", backgroundSize:'cover', backgroundPosition:'center', transform:'rotate(10deg)', boxShadow:'0 20px 40px -15px rgba(61,43,31,.3)', border:'5px solid #E8C5C0' }}></div>

      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Section head */}
        <div className="section-header" style={fadeStyle(0)}>
          <span style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:18, color:'#C96A4E', fontWeight:500 }}>01 —</span>
          <h2 style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:'clamp(32px,5vw,52px)', lineHeight:1, color:'#3D2B1F', letterSpacing:'-.03em' }}>About <em style={{ fontStyle:'italic', color:'#C96A4E' }}>me</em></h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-grid">
          {/* Left: text */}
          <div style={fadeStyle(0.15)}>
            <p style={{ fontFamily:"'Fraunces',serif", fontWeight:300, fontSize:'clamp(20px,3vw,30px)', lineHeight:1.3, color:'#3D2B1F', letterSpacing:'-.01em', marginBottom:24 }}>
              I document <em style={{ fontStyle:'italic' }}>slow mornings</em>, the small rituals that make a day feel whole, and the kind of cooking that doesn't photograph loud but eats <em style={{ fontStyle:'italic' }}>honestly</em>.
            </p>
            <div style={{ display:'flex', alignItems:'center', gap:10, fontSize:12, letterSpacing:'.2em', textTransform:'uppercase', color:'#5A4436' }}>
              <div style={{ width:28, height:1, background:'#5A4436' }}></div>
              Based in Mumbai, India
            </div>
          </div>

          {/* Right: keyword cards */}
          <div style={{ ...fadeStyle(0.3), display:'flex', flexDirection:'column', gap:14 }}>
            {[['Calm','the pace','-.8deg'],['Authentic','the voice','.6deg',true],['Aesthetic','the eye','-.3deg']].map(([word, note, rot, italic]) => (
              <div key={word} style={{ background:'#FBF2E4', borderRadius:4, padding:'16px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', transform:`rotate(${rot})`, boxShadow:'0 6px 18px -8px rgba(61,43,31,.2)' }}>
                <div style={{ fontFamily:"'Fraunces',serif", fontSize:26, letterSpacing:'-.02em', color:italic?'#C96A4E':'#3D2B1F', fontWeight:500, fontStyle:italic?'italic':'normal' }}>{word}</div>
                <div style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', color:'#5A4436', fontSize:13 }}>{note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { About });
