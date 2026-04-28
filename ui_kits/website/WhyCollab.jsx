// Reheeshaa — Why Collaborate section (mobile-optimised + floating motifs)
const WhyCollab = () => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const cards = [
    { idx: 'a. the audience', title: 'A niche audience, not a loud one', italic: 'niche', body: 'Followers who came for slow mornings and simple food — they read captions, save recipes, and actually reply to stories.' },
    { idx: 'b. the craft', title: 'High visual quality, consistent grid', italic: 'visual', body: "Every photo is shot in natural window light, on real dishes, at the pace real cooking happens. No AI, no props I wouldn't own." },
    { idx: 'c. the community', title: 'An engaged, reply-back community', italic: 'engaged', body: 'Small following, high trust. When I recommend something, the people here listen because I only talk about what I actually use.' },
  ];

  return (
    <section id="routines" ref={ref} className="section-pad" style={{ background: '#3D2B1F', position: 'relative', overflow: 'hidden' }}>

      {/* ── Floating motifs ── */}
      {/* Leaf bg top-left */}
      <svg width="160" height="160" style={{ position:'absolute', top:-20, left:-10, color:'rgba(251,242,228,.06)', pointerEvents:'none' }} viewBox="0 0 100 120">
        <path d="M50 5 C15 25,15 95,50 115 C85 95,85 25,50 5 Z" fill="currentColor"></path>
      </svg>
      {/* Floating sprig right */}
      <svg width="55" height="80" style={{ position:'absolute', top:'20%', right:'4%', color:'rgba(243,216,155,.18)', animation:'floatLeaf1 8s ease-in-out infinite .5s', pointerEvents:'none' }} viewBox="0 0 100 140">
        <path d="M50 5 L50 135" stroke="currentColor" strokeWidth="2" fill="none"></path>
        <path d="M50 30 Q28 25 22 8 Q44 18 50 30 Z" fill="currentColor"></path>
        <path d="M50 60 Q72 55 78 38 Q56 48 50 60 Z" fill="currentColor"></path>
        <path d="M50 90 Q26 87 20 70 Q44 80 50 90 Z" fill="currentColor"></path>
      </svg>
      {/* Star gold */}
      <svg width="22" height="22" style={{ position:'absolute', bottom:'14%', left:'8%', color:'#F3D89B', animation:'floatStar 5s ease-in-out infinite 1.5s', opacity:.55, pointerEvents:'none' }} viewBox="0 0 20 20">
        <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor"></path>
      </svg>
      {/* Scribble underline */}
      <svg width="90" height="14" style={{ position:'absolute', bottom:'8%', right:'10%', color:'rgba(243,216,155,.3)', animation:'floatSlow 6s ease-in-out infinite .8s', pointerEvents:'none' }} viewBox="0 0 160 24">
        <path d="M4 14 Q 30 4,55 12 T 105 14 T 156 10" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"></path>
      </svg>
      {/* Dot blob */}
      <div style={{ position:'absolute', top:'10%', right:'28%', width:40, height:40, borderRadius:'50%', background:'rgba(251,242,228,.06)', animation:'floatSlow 7s ease-in-out infinite 2s', pointerEvents:'none' }}></div>
      {/* Food sticker */}
      <div style={{ position:'absolute', top:28, right:-40, width:140, height:140, borderRadius:'50%', backgroundImage:"url('assets/food-pink-eggs.png')", backgroundSize:'cover', backgroundPosition:'center', transform:'rotate(15deg)', border:'5px solid #3D2B1F', boxShadow:'0 20px 40px -15px rgba(0,0,0,.5)', pointerEvents:'none' }}></div>

      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div className="section-header" style={{ opacity:visible?1:0, transition:'all .7s ease-out' }}>
          <span style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:18, color:'#F3D89B', fontWeight:500 }}>03 —</span>
          <h2 style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:'clamp(28px,4vw,52px)', lineHeight:1, color:'#FBF2E4', letterSpacing:'-.03em' }}>Why <em style={{ fontStyle:'italic', color:'#F3D89B' }}>collaborate</em></h2>
          <div className="section-divider" style={{ background:'rgba(251,242,228,.2)' }}></div>
        </div>

        <div className="collab-grid">
          {cards.map((card, i) => (
            <div key={i} style={{ border:'1px solid rgba(251,242,228,.18)', padding:'28px 28px 32px', display:'flex', flexDirection:'column', gap:12, background:'rgba(251,242,228,.03)', minHeight:240, opacity:visible?1:0, transform:visible?'translateY(0)':'translateY(30px)', transition:`opacity .7s ease-out ${i*.15}s, transform .7s ease-out ${i*.15}s` }}>
              <div style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:13, color:'#F3D89B' }}>{card.idx}</div>
              <h3 style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:'clamp(20px,2.5vw,26px)', letterSpacing:'-.02em', lineHeight:1.05, color:'#FBF2E4' }}>
                {card.title.split(card.italic).map((part, j, arr) => j < arr.length - 1
                  ? <React.Fragment key={j}>{part}<em style={{ fontStyle:'italic', color:'#F3D89B' }}>{card.italic}</em></React.Fragment>
                  : part)}
              </h3>
              <p style={{ fontSize:13, lineHeight:1.6, color:'rgba(251,242,228,.72)' }}>{card.body}</p>
              <svg style={{ marginTop:'auto', color:'#F3D89B' }} width="80" height="14" viewBox="0 0 160 24"><path d="M4 14 Q 30 4,55 12 T 105 14 T 156 10" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"></path></svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { WhyCollab });
