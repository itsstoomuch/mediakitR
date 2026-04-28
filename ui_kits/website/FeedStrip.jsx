// Reheeshaa — Feed strip + Quote section (mobile-optimised)
const FEED_IMGS = [
  'assets/food-pink-eggs.png',
  'assets/tea.jpg',
  'assets/food-pasta.png',
  'assets/night.jpg',
  'assets/food-egg-pizza.png',
  'assets/garden.jpg',
];

const FeedStrip = () => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-pad" style={{ background: '#E8C5C0', position: 'relative', overflow: 'hidden' }}>

      {/* ── Floating motifs ── */}
      <svg width="55" height="75" style={{ position:'absolute', top:20, right:20, color:'rgba(61,43,31,.12)', animation:'floatLeaf1 7s ease-in-out infinite 2s', pointerEvents:'none' }} viewBox="0 0 100 140">
        <path d="M50 5 L50 135" stroke="currentColor" strokeWidth="2" fill="none"></path>
        <path d="M50 25 Q30 20 25 5 Q45 15 50 25 Z" fill="currentColor"></path>
        <path d="M50 55 Q70 50 75 35 Q55 45 50 55 Z" fill="currentColor"></path>
        <path d="M50 85 Q28 82 22 65 Q44 75 50 85 Z" fill="currentColor"></path>
      </svg>
      <svg width="14" height="14" style={{ position:'absolute', bottom:'20%', left:'6%', color:'#C96A4E', animation:'floatStar 5s ease-in-out infinite .7s', opacity:.6, pointerEvents:'none' }} viewBox="0 0 20 20">
        <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor"></path>
      </svg>
      <div style={{ position:'absolute', bottom:'10%', right:'5%', width:36, height:36, borderRadius:'50%', background:'rgba(201,106,78,.2)', animation:'floatSlow 6s ease-in-out infinite 1s', pointerEvents:'none' }}></div>

      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div className="section-header" style={{ opacity:visible?1:0, transition:'all .7s ease-out' }}>
          <span style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:18, color:'#C96A4E', fontWeight:500 }}>05 —</span>
          <h2 style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:'clamp(28px,4vw,52px)', lineHeight:1, color:'#3D2B1F', letterSpacing:'-.03em' }}>Recent <em style={{ fontStyle:'italic', color:'#C96A4E' }}>work</em></h2>
          <div className="section-divider" style={{ background:'rgba(61,43,31,.3)' }}></div>
        </div>

        <div className="feed-grid">
          {FEED_IMGS.map((src, i) => (
            <div key={i} style={{ aspectRatio:'1', backgroundImage:`url('${src}')`, backgroundSize:'cover', backgroundPosition:'center', outline:'2px solid #E8C5C0', opacity:visible?1:0, transform:visible?'scale(1)':'scale(.95)', transition:`opacity .6s ease-out ${i*.08}s, transform .6s ease-out ${i*.08}s`, cursor:'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.zIndex = 2; e.currentTarget.style.outline = '2px solid #C96A4E'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.zIndex = 1; e.currentTarget.style.outline = '2px solid #E8C5C0'; }}
            ></div>
          ))}
        </div>

        {/* Pull quote */}
        <div style={{ marginTop:48, opacity:visible?1:0, transform:visible?'none':'translateY(20px)', transition:'all .8s ease-out .5s' }}>
          <p style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:'clamp(18px,3vw,28px)', lineHeight:1.35, color:'#3D2B1F', maxWidth:720, letterSpacing:'-.01em' }}>
            "Slow living isn't a trend — it's a choice I make every morning. I document it because I know some of you are choosing it too."
          </p>
          <span style={{ display:'block', fontFamily:"'Caveat',cursive", fontSize:28, fontStyle:'normal', marginTop:10, color:'#C96A4E' }}>— Reheeshaa</span>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { FeedStrip });
