// Reheeshaa — Nav component (mobile-optimised)
const Nav = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <nav className="nav-root" style={{
        background: isScrolled ? 'rgba(251,242,228,.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(14px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(61,43,31,.08)' : '1px solid transparent',
      }}>

        {/* Logo */}
        <div style={{ fontFamily: "'Fraunces',serif", fontWeight: 500, fontSize: 18, letterSpacing: '-.01em', color: '#3D2B1F', display: 'flex', alignItems: 'center', gap: 8, zIndex: 101, position: 'relative' }}>
          <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#3D2B1F', color: '#FBF2E4', display: 'grid', placeItems: 'center', fontSize: 13, fontFamily: "'Fraunces',serif" }}>R</span>
          Reheeshaa
        </div>

        {/* Desktop links */}
        <div className="nav-links">
          {['About', 'Food', 'Routines', 'Collabs'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#contact" className="nav-cta">Let's talk</a>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
          style={{ zIndex: 101, position: 'relative' }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`}>
        {/* Decorative motif */}
        <svg width="60" height="85" style={{ position: 'absolute', top: 60, right: 40, color: 'rgba(201,106,78,.2)', pointerEvents: 'none' }} viewBox="0 0 100 140">
          <path d="M50 5 L50 135" stroke="currentColor" strokeWidth="2" fill="none"></path>
          <path d="M50 25 Q30 20 25 5 Q45 15 50 25 Z" fill="currentColor"></path>
          <path d="M50 55 Q70 50 75 35 Q55 45 50 55 Z" fill="currentColor"></path>
          <path d="M50 85 Q28 82 22 65 Q44 75 50 85 Z" fill="currentColor"></path>
        </svg>
        <svg width="18" height="18" style={{ position: 'absolute', bottom: '20%', left: '15%', color: '#C96A4E', animation: 'floatStar 3s ease-in-out infinite', opacity: .7 }} viewBox="0 0 20 20">
          <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor"></path>
        </svg>

        {['About', 'Food', 'Routines', 'Collabs'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={close}>{l}</a>
        ))}
        <a href="#contact" className="nav-mobile-cta" onClick={close}>Let's talk</a>
      </div>
    </>
  );
};

Object.assign(window, { Nav });
