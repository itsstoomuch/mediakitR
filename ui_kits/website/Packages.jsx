// Reheeshaa — Collaboration Packages section (mobile-optimised + floating motifs)
const PACKAGES = [
  {
    num: 'package one', title: 'Story Feature', italic: 'Feature',
    tl: '1 story · 24 hr',
    items: ['One dedicated story slide', 'Product in-use photograph', 'Tag + link sticker', 'Screenshot archive sent after'],
    featured: false,
  },
  {
    num: 'package two', title: 'Feed Post', italic: 'Post',
    tl: '1 static post · 72 hr turnaround',
    items: ['One in-feed photograph', 'Long-form caption, my voice', '2 rounds of creative review', 'Usage rights for 30 days'],
    featured: true, ribbon: 'most loved',
  },
  {
    num: 'package three', title: 'Full Collab', italic: 'Collab',
    tl: '3 posts + stories · 2 weeks',
    items: ['Three coordinated feed posts', 'Supporting story series', 'One reel (if brand fits)', 'Performance recap included'],
    featured: false,
  },
];

const Packages = () => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="collabs" ref={ref} className="section-pad" style={{ background: '#F6E8D4', position: 'relative', overflow: 'hidden' }}>

      {/* ── Floating motifs ── */}
      {/* Wide leaf */}
      <svg width="100" height="65" style={{ position:'absolute', bottom:30, left:-10, color:'rgba(110,122,79,.2)', animation:'floatLeaf3 8s ease-in-out infinite 1s', pointerEvents:'none' }} viewBox="0 0 120 80">
        <path d="M5 40 C25 10,55 10,75 28 C85 38,100 42,115 40 C100 55,85 62,70 58 C50 75,25 70,5 40 Z" fill="currentColor"></path>
      </svg>
      {/* Star terra */}
      <svg width="18" height="18" style={{ position:'absolute', top:'12%', right:'8%', color:'#C96A4E', animation:'floatStar 4.5s ease-in-out infinite .3s', opacity:.55, pointerEvents:'none' }} viewBox="0 0 20 20">
        <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor"></path>
      </svg>
      {/* Tape strip */}
      <div style={{ position:'absolute', top:'8%', left:'18%', width:80, height:20, background:'rgba(201,106,78,.18)', transform:'rotate(-12deg)', animation:'floatTape 5.5s ease-in-out infinite .9s', pointerEvents:'none' }}></div>
      {/* Scribble circle */}
      <div style={{ position:'absolute', bottom:'18%', right:'6%', width:70, height:45, border:'2px solid rgba(201,106,78,.3)', borderRadius:'50%', transform:'rotate(6deg)', animation:'floatSlow 6s ease-in-out infinite 1.3s', pointerEvents:'none' }}></div>
      {/* Dot gold */}
      <div style={{ position:'absolute', top:'30%', left:'4%', width:32, height:32, borderRadius:'50%', background:'rgba(243,216,155,.4)', animation:'floatSlow 5s ease-in-out infinite .6s', pointerEvents:'none' }}></div>

      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div className="section-header" style={{ opacity:visible?1:0, transform:visible?'none':'translateY(20px)', transition:'all .7s ease-out' }}>
          <span style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:18, color:'#C96A4E', fontWeight:500 }}>04 —</span>
          <h2 style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:'clamp(28px,4vw,52px)', lineHeight:1, color:'#3D2B1F', letterSpacing:'-.03em' }}>Collab <em style={{ fontStyle:'italic', color:'#C96A4E' }}>packages</em></h2>
          <div className="section-divider"></div>
        </div>

        <div className="packages-grid">
          {PACKAGES.map((pk, i) => (
            <div key={i} className="package-card card-lift" style={{ borderRight: i < 2 ? '1px solid rgba(61,43,31,.2)' : 'none', background: pk.featured ? '#3D2B1F' : 'transparent', opacity:visible?1:0, transform:visible?'translateY(0)':'translateY(30px)', transition:`opacity .7s ease-out ${i*.15}s, transform .7s ease-out ${i*.15}s` }}>
              {pk.ribbon && <span style={{ position:'absolute', top:12, right:12, fontSize:9, letterSpacing:'.18em', textTransform:'uppercase', background:'#C96A4E', color:'#FBF2E4', padding:'4px 8px', fontWeight:600, transform:'rotate(4deg)' }}>{pk.ribbon}</span>}
              <div style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:13, color:pk.featured?'#F3D89B':'#C96A4E' }}>{pk.num}</div>
              <h3 style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:'clamp(22px,2.5vw,28px)', lineHeight:1.05, letterSpacing:'-.02em', color:pk.featured?'#FBF2E4':'#3D2B1F' }}>
                {pk.title.replace(pk.italic, '').trim() + ' '}
                <em style={{ fontStyle:'italic' }}>{pk.italic}</em>
              </h3>
              <div style={{ fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:pk.featured?'#F3D89B':'#5A4436' }}>{pk.tl}</div>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:8, marginTop:4 }}>
                {pk.items.map((item, j) => (
                  <li key={j} style={{ fontSize:13, color:pk.featured?'rgba(251,242,228,.8)':'#5A4436', paddingLeft:16, position:'relative', lineHeight:1.4 }}>
                    <span style={{ position:'absolute', left:0, top:8, width:7, height:1, background:'currentColor', opacity:.5, display:'block' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop:'auto', fontFamily:"'Fraunces',serif", fontSize:16, fontStyle:'italic', color:pk.featured?'#FBF2E4':'#3D2B1F', paddingTop:16, borderTop:`1px solid ${pk.featured?'rgba(251,242,228,.2)':'rgba(61,43,31,.2)'}` }}>Contact for rates</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Packages });
