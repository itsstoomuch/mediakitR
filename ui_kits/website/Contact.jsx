// Reheeshaa — Contact / CTA section (mobile-optimised + floating motifs)
const Contact = () => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="section-pad" style={{ background: '#FBF2E4', paddingBottom: 60, position: 'relative', overflow: 'hidden' }}>

      {/* ── Floating motifs ── */}
      {/* Sprig top-right */}
      <svg width="160" height="110" style={{ position:'absolute', top:40, right:40, color:'#6E7A4F', opacity:.28, animation:'floatLeaf3 9s ease-in-out infinite .4s', pointerEvents:'none', transform:'rotate(160deg)' }} viewBox="0 0 100 140">
        <path d="M50 5 L50 135" stroke="currentColor" strokeWidth="2" fill="none"></path>
        <path d="M50 25 Q30 20 25 5 Q45 15 50 25 Z" fill="currentColor"></path>
        <path d="M50 50 Q70 45 75 30 Q55 40 50 50 Z" fill="currentColor"></path>
        <path d="M50 80 Q25 78 18 60 Q43 70 50 80 Z" fill="currentColor"></path>
        <path d="M50 110 Q75 105 82 90 Q55 100 50 110 Z" fill="currentColor"></path>
      </svg>
      {/* Stars */}
      <svg width="20" height="20" style={{ position:'absolute', top:'22%', left:'6%', color:'#C96A4E', animation:'floatStar 4s ease-in-out infinite .6s', opacity:.5, pointerEvents:'none' }} viewBox="0 0 20 20">
        <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor"></path>
      </svg>
      <svg width="14" height="14" style={{ position:'absolute', bottom:'28%', right:'12%', color:'#F3D89B', animation:'floatStar 5s ease-in-out infinite 1.5s', opacity:.6, pointerEvents:'none' }} viewBox="0 0 20 20">
        <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor"></path>
      </svg>
      {/* Tape strip */}
      <div style={{ position:'absolute', top:'15%', right:'28%', width:80, height:20, background:'rgba(201,106,78,.2)', transform:'rotate(10deg)', animation:'floatTape 6s ease-in-out infinite 1s', pointerEvents:'none' }}></div>
      {/* Dot blob */}
      <div style={{ position:'absolute', top:70, left:'40%', width:56, height:56, borderRadius:'50%', background:'#C96A4E', opacity:.9, pointerEvents:'none' }}></div>
      {/* Wide leaf bottom */}
      <svg width="100" height="65" style={{ position:'absolute', bottom:60, left:'5%', color:'rgba(110,122,79,.15)', animation:'floatLeaf1 8s ease-in-out infinite 2s', pointerEvents:'none' }} viewBox="0 0 120 80">
        <path d="M5 40 C25 10,55 10,75 28 C85 38,100 42,115 40 C100 55,85 62,70 58 C50 75,25 70,5 40 Z" fill="currentColor"></path>
      </svg>

      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:'#5A4436', fontFamily:"'Inter',sans-serif", fontWeight:500, marginBottom:18, opacity:visible?1:0, transition:'all .6s ease-out' }}>Let's talk —</div>

        <h2 style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:'clamp(40px,7vw,92px)', lineHeight:.95, letterSpacing:'-.035em', color:'#3D2B1F', maxWidth:880, marginBottom:52, opacity:visible?1:0, transform:visible?'none':'translateY(30px)', transition:'opacity .8s ease-out .1s, transform .8s ease-out .1s' }}>
          Let's create<br />
          something <em style={{ fontStyle:'italic', color:'#C96A4E' }}>slow</em><br />
          <span style={{ fontStyle:'italic', color:'#D9A5A0' }}>&amp;</span> <em style={{ fontStyle:'italic', color:'#C96A4E' }}>beautiful</em>.
        </h2>

        <div className="contact-details" style={{ opacity:visible?1:0, transition:'all .8s ease-out .3s' }}>
          <div>
            <div style={{ fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:'#5A4436', marginBottom:6 }}>Email</div>
            <a href="mailto:reheeshaanandanwar26@gmail.com" style={{ fontFamily:"'Fraunces',serif", fontSize:'clamp(14px,2vw,18px)', color:'#3D2B1F', letterSpacing:'-.01em', textDecoration:'none' }}>reheeshaanandanwar26<br />@gmail.com</a>
          </div>
          <div>
            <div style={{ fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:'#5A4436', marginBottom:6 }}>Instagram</div>
            <a href="https://instagram.com/reheeshaa.n" target="_blank" rel="noreferrer" style={{ fontFamily:"'Fraunces',serif", fontSize:'clamp(16px,2vw,20px)', fontStyle:'italic', color:'#3D2B1F', textDecoration:'none' }}>@reheeshaa.n</a>
          </div>
        </div>

        {/* Signature */}
        <div style={{ fontFamily:"'Caveat',cursive", fontSize:'clamp(36px,6vw,56px)', color:'#C96A4E', transform:'rotate(-6deg)', marginTop:48, display:'inline-block', opacity:visible?1:0, transition:'all .9s ease-out .5s' }}>— with care, R.</div>
      </div>

      {/* Footer */}
      <div style={{ maxWidth:1180, margin:'60px auto 0', padding:'20px 0', borderTop:'1px solid rgba(61,43,31,.12)', display:'flex', flexWrap:'wrap', gap:12, justifyContent:'space-between', alignItems:'center', fontSize:11, letterSpacing:'.18em', textTransform:'uppercase', color:'#5A4436', fontFamily:"'Inter',sans-serif", position:'relative', zIndex:2 }}>
        <span>Reheeshaa <span style={{ width:5, height:5, borderRadius:'50%', background:'#C96A4E', display:'inline-block', margin:'0 6px', verticalAlign:'middle' }}></span> Media Kit <span style={{ width:5, height:5, borderRadius:'50%', background:'#C96A4E', display:'inline-block', margin:'0 6px', verticalAlign:'middle' }}></span> 2026</span>
        <span>Thanks for reading — x</span>
      </div>
    </section>
  );
};

Object.assign(window, { Contact });
