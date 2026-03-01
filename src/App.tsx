import React, { useState, useEffect } from 'react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [copyText, setCopyText] = useState('0x69420...CATO');
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  const handleCopy = () => {
    setCopyText('SYSTEM_COPIED');
    setTimeout(() => setCopyText('0x69420...CATO'), 2000);
  };

  const colors = {
    neon: '#00ccff',
    hot: '#ff0055',
    yellow: '#f3f315',
    dark: '#050505',
    grid: '#111111',
    text: '#ffffff',
  };

  const pixelBorderStyle = (color) => ({
    boxShadow: `
      0 -4px 0 0 ${color},
      0 4px 0 0 ${color},
      -4px 0 0 0 ${color},
      4px 0 0 0 ${color}
    `,
    margin: '4px',
  });

  const buttonStyle = (color = colors.neon, solid = true) => ({
    backgroundColor: solid ? color : 'transparent',
    color: solid ? colors.dark : color,
    border: `4px solid ${color}`,
    padding: '12px 24px',
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: '1rem',
    fontWeight: '900',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.1s steps(4)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'inline-block',
    ...pixelBorderStyle(solid ? 'black' : color),
    transform: 'skewX(-10deg)',
  });

  const sectionStyle = {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  };

  return (
    <div style={{ 
      backgroundColor: colors.dark, 
      color: colors.text, 
      fontFamily: '"Courier New", Courier, monospace',
      minHeight: '100vh',
      overflowX: 'hidden',
      backgroundImage: `linear-gradient(${colors.grid} 1px, transparent 1px), linear-gradient(90deg, ${colors.grid} 1px, transparent 1px)`,
      backgroundSize: '40px 40px',
    }}>
      {/* SCANLINE EFFECT */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
        backgroundSize: '100% 4px, 3px 100%',
        pointerEvents: 'none',
        zIndex: 9999
      }} />

      {/* NAV */}
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%',
        height: '70px',
        borderBottom: `4px solid ${colors.hot}`,
        backgroundColor: `${colors.dark}ee`,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        justifyContent: 'space-between',
        boxShadow: `0 5px 20px ${colors.hot}44`
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '30px', height: '30px', backgroundColor: colors.yellow, clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)' }} />
          <span style={{ color: colors.yellow, letterSpacing: '4px' }}>CATO_OS</span>
        </div>
        {!isMobile && (
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {['MISSION', 'DATA', 'CORE', 'TOKENOMICS', 'FAQ'].map(link => (
              <a key={link} href="#" style={{ color: colors.neon, textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>{`> ${link}`}</a>
            ))}
            {/* additional navbar buttons */}
            <a href="#buy" style={{ ...buttonStyle(colors.yellow, false), padding: '6px 12px', fontSize: '0.8rem', transform: 'skewX(0deg)', border: `2px solid ${colors.yellow}`, boxShadow: 'none', marginLeft: '10px' }}>BUY</a>
            <a href="#chart" style={{ ...buttonStyle(colors.neon, false), padding: '6px 12px', fontSize: '0.8rem', transform: 'skewX(0deg)', border: `2px solid ${colors.neon}`, boxShadow: 'none' }}>CHART</a>
          </div>
        )}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button style={{ ...buttonStyle(colors.hot), padding: '8px 16px', fontSize: '0.8rem' }}>ACCESS_TERMINAL</button>
          <button style={{ ...buttonStyle(colors.yellow), padding: '8px 12px', fontSize: '0.8rem' }}>CONNECT_WALLET</button>
        </div>
      </nav>

      {/* HERO */}
      <header style={{ 
        ...sectionStyle, 
        paddingTop: '180px',
        textAlign: 'center',
        minHeight: '80vh'
      }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <h1 style={{ 
            fontSize: isMobile ? '5rem' : '10rem', 
            margin: 0, 
            lineHeight: 0.8,
            color: colors.text,
            textShadow: `${glitch ? '4px' : '0px'} 0px ${colors.hot}, -${glitch ? '4px' : '0px'} 0px ${colors.neon}`,
            fontWeight: '900',
            letterSpacing: '-10px'
          }}>
            CATO
          </h1>
          <div style={{ 
            backgroundColor: colors.yellow, 
            color: 'black', 
            padding: '4px 10px', 
            fontSize: '1rem', 
            fontWeight: 'bold',
            position: 'absolute',
            bottom: '-10px',
            right: '0',
            transform: 'rotate(-2deg)'
          }}>VER_2.0.77</div>
        </div>

        <p style={{ 
          maxWidth: '600px', 
          margin: '40px auto', 
          color: colors.neon, 
          fontSize: '1.1rem',
          lineHeight: '1.4',
          textTransform: 'uppercase'
        }}>
          {`// SYSTEM_STATUS: ONLINE_`}
          <br />
          {`// PROTOCOL: PURR_AND_DESTROY_`}
          <br />
          The future of decentralized feline dominance starts in the neon shadows.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <button style={buttonStyle(colors.yellow)}>BUY_FUEL_</button>
          <a 
            href="https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={buttonStyle(colors.neon, false)}
          >
            VIEW_PROTOCOLS
          </a>
        </div>

        <div onClick={handleCopy} style={{
          marginTop: '60px',
          border: `2px solid ${colors.neon}22`,
          padding: '12px',
          cursor: 'pointer',
          display: 'inline-flex',
          gap: '15px',
          backgroundColor: '#000000aa'
        }}>
          <span style={{ color: colors.hot }}>[ ADDRESS ]</span>
          <span style={{ color: colors.neon }}>{copyText}</span>
        </div>
      </header>

      {/* DATA PACKS */}
      <section style={sectionStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '40px' }}>
          {[
            { id: '01', title: 'CYBERNETIC_STRIKE', desc: 'Instant execution logic for maximum market impact.' },
            { id: '02', title: 'NEURAL_NETWORK', desc: '100% community hive-mind driven development.' },
            { id: '03', title: 'NULL_REVENUE', desc: 'No taxes. No backdoors. No mercy.' }
          ].map((item, i) => (
            <div key={i} style={{
              border: `1px solid ${colors.neon}`,
              padding: '30px',
              backgroundColor: '#0a0a0aaa',
              position: 'relative',
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
            }}>
              <div style={{ color: colors.hot, fontSize: '0.8rem', marginBottom: '10px' }}>MODUL_#{item.id}</div>
              <h3 style={{ color: colors.yellow, margin: '0 0 15px 0', fontSize: '1.2rem' }}>{item.title}</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <section style={{ ...sectionStyle, borderTop: `1px solid ${colors.grid}` }}>
        <h2 style={{ color: colors.hot, textAlign: 'center', fontSize: '2rem', marginBottom: '60px' }}>NETWORK_STATS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '20px' }}>
          {[
            ['SUPPLY', '1.0B $CATO'],
            ['LIQUIDITY', 'BURNED_99%'],
            ['TAX_RATE', '0.00%'],
            ['UPTIME', '100.00%']
          ].map(([label, val], i) => (
            <div key={i} style={{ textAlign: 'center', border: `1px solid #222`, padding: '20px' }}>
              <div style={{ fontSize: '0.7rem', color: '#555', marginBottom: '5px' }}>{label}</div>
              <div style={{ color: colors.neon, fontSize: '1.2rem', fontWeight: 'bold' }}>{val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN */}
      <section style={{ ...sectionStyle, textAlign: 'center' }}>
        <div style={{ 
          border: `4px solid ${colors.yellow}`, 
          padding: '80px 20px', 
          backgroundColor: '#000',
          boxShadow: `inset 0 0 50px ${colors.yellow}22`,
          ...pixelBorderStyle(colors.yellow)
        }}>
          <h2 style={{ fontSize: '3rem', margin: '0 0 20px 0', color: colors.yellow }}>INITIALIZE_CONNECTION</h2>
          <p style={{ color: colors.neon, marginBottom: '40px' }}>JOIN THE CRYPTO-RESISTANCE TODAY.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button style={{ ...buttonStyle(colors.text), width: '220px' }}>TELEGRAM_LINK</button>
            <button style={{ ...buttonStyle(colors.hot), width: '220px' }}>JOIN_SQUAD_6</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '60px 40px', textAlign: 'center', color: '#444', fontSize: '0.7rem' }}>
        <div style={{ color: colors.hot, fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>CATO_FOUNDATION_</div>
        <p>DECENTRALIZED_CAT_ENTITY // NO_VALUE // NO_LIMITS</p>
        <p style={{ marginTop: '20px' }}>RUNNING_ON_BLOCKCHAIN_PROTOCOL_V4.2.0</p>
      </footer>
    </div>
  );
}