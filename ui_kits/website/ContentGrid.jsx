// Reheeshaa — Content Grid section (mobile-optimised + floating motifs)
const CARDS = [
  { img: 'assets/1.jpg',               cat: '7AM — Weekly',         title: 'The morning hour',    italic: 'morning',  badge: 'Slow Mornings',      badgeBg: '#F3D89B', badgeFg: '#3D2B1F', rot: '6deg',  pos: 'right' },
  { img: 'assets/2.jpg',               cat: 'Daily Rituals',        title: 'Habits that ground',  italic: 'ground',   badge: 'Calm Routines',      badgeBg: '#FBF2E4', badgeFg: '#3D2B1F', rot: '-3deg', pos: 'right', badgeBorder: true },
  { img: 'assets/3.jpg',               cat: 'Rituals · Weekly',     title: 'Small acts, big care',italic: 'big',      badge: 'Beauty & Self Care', badgeBg: '#6E7A4F', badgeFg: '#FBF2E4', rot: '5deg',  pos: 'left' },
  { img: 'assets/food-pink-eggs.png',  cat: 'Food · Simple & Honest',title: 'The Egg Diaries',   italic: 'Egg',      badge: 'Egg Recipes',        badgeBg: '#C96A4E', badgeFg: '#FBF2E4', rot: '-5deg', pos: 'right' },
  { img: 'assets/food-wrap.png',       cat: 'Weeknight Meals',      title: 'Bowls that hug back', italic: 'hug',      badge: 'Comfort Food',       badgeBg: '#3D2B1F', badgeFg: '#FBF2E4', rot: '4deg',  pos: 'left' },
  { img: 'assets/food-pasta.png',      cat: '10-Min Meals',         title: 'Fast & honest food',  italic: 'honest',   badge: 'Quick Bites',        badgeBg: '#E8C5C0', badgeFg: '#3D2B1F', rot: '-7deg', pos: 'right' },
];

const ContentGrid = () => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="food" ref={ref} className="section-pad" style={{ background: '#FBF2E4', position: 'relative', overflow: 'hidden' }}>

      {/* ── Floating motifs ── */}
      {/* Wide leaf top-right */}
      <svg width="120" height="80" style={{ position:'absolute', top:30, right:-10, color:'rgba(110,122,79,.18)', animation:'floatLeaf1 9s ease-in-out infinite 1s', pointerEvents:'none' }} viewBox="0 0 120 80">
        <path d="M5 40 C25 10,55 10,75 28 C85 38,100 42,115 40 C100 55,85 62,70 58 C50 75,25 70,5 40 Z" fill="currentColor"></path>
      </svg>
      {/* Star accent */}
      <svg width="16" height="16" style={{ position:'absolute', top:'8%', left:'12%', color:'#C96A4E', animation:'floatStar 4s ease-in-out infinite .5s', opacity:.5, pointerEvents:'none' }} viewBox="0 0 20 20">
        <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor"></path>
      </svg>
      {/* Tape strip */}
      <div style={{ position:'absolute', bottom:'10%', left:'5%', width:70, height:18, background:'rgba(201,106,78,.2)', transform:'rotate(8deg)', animation:'floatTape 6s ease-in-out infinite 1.2s', pointerEvents:'none' }}></div>
      {/* Dot */}
      <div style={{ position:'absolute', bottom:'20%', right:'4%', width:38, height:38, borderRadius:'50%', background:'rgba(243,216,155,.35)', animation:'floatSlow 5s ease-in-out infinite .8s', pointerEvents:'none' }}></div>

      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div className="section-header" style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all .7s ease-out' }}>
          <span style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:18, color:'#C96A4E', fontWeight:500 }}>02 —</span>
          <h2 style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:'clamp(28px,4vw,52px)', lineHeight:1, color:'#3D2B1F', letterSpacing:'-.03em' }}>What I <em style={{ fontStyle:'italic', color:'#C96A4E' }}>create</em> &amp; share</h2>
          <div className="section-divider"></div>
        </div>

        <div className="content-grid">
          {CARDS.map((card, i) => (
            <div key={i} className="card-lift" style={{ position:'relative', aspectRatio:'3/4', overflow:'hidden', boxShadow:'0 14px 30px -18px rgba(61,43,31,.3)', opacity:visible?1:0, transform:visible?'translateY(0)':'translateY(40px)', transition:`opacity .7s ease-out ${i * 0.1}s, transform .7s ease-out ${i * 0.1}s`, cursor:'pointer' }}
              onMouseEnter={e => e.currentTarget.querySelector('.ph').style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.querySelector('.ph').style.transform = 'scale(1)'}>
              <div className="ph" style={{ position:'absolute', inset:0, backgroundImage:`url('${card.img}')`, backgroundSize:'cover', backgroundPosition:'center', transition:'.5s ease-out' }}></div>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(61,43,31,.72) 0%, rgba(61,43,31,0) 55%)' }}></div>
              <div style={{ position:'absolute', zIndex:3, top:14, [card.pos]:14, padding:'6px 11px', borderRadius:999, fontSize:9, letterSpacing:'.16em', textTransform:'uppercase', fontWeight:600, background:card.badgeBg, color:card.badgeFg, border:card.badgeBorder?'1px solid #3D2B1F':'none', transform:`rotate(${card.rot})`, boxShadow:'0 4px 10px rgba(61,43,31,.2)' }}>{card.badge}</div>
              <div style={{ position:'relative', zIndex:2, padding:'18px 18px 20px', color:'#FBF2E4' }}>
                <div style={{ fontSize:9, letterSpacing:'.2em', textTransform:'uppercase', opacity:.8, marginBottom:5 }}>{card.cat}</div>
                <div style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:22, lineHeight:1.05, letterSpacing:'-.02em' }}>
                  {card.title.split(card.italic).map((part, j, arr) => j < arr.length - 1
                    ? <React.Fragment key={j}>{part}<em style={{ fontStyle:'italic' }}>{card.italic}</em></React.Fragment>
                    : part)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ContentGrid });
