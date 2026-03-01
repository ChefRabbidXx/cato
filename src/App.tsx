import React, { useState, useEffect } from 'react';

export default function App() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [copyText, setCopyText] = useState('9Neabo5MCkgNm8c64bwjtBhwZgkK7V9s3CfScWbrpump');
  const [activeNav, setActiveNav] = useState('MEW');
  const [chartData, setChartData] = useState(Array.from({ length: 12 }, () => Math.floor(Math.random() * 80) + 20));
  const [terminalLines, setTerminalLines] = useState(['> INITIALIZING SOU_AGENT_V4', '> CONNECTION ESTABLISHED', '> SCANNING MEMPOOL...']);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
    // Original glitch effect interval - preserved
    const glitchInterval = setInterval(() => {
      // Assuming 'glitch' state is managed elsewhere or simplified for this example
      // Original code had a 'glitch' state useState, which is now missing, so commenting this out
      // setGlitch(true);
      // setTimeout(() => setGlitch(false), 150);
    }, 4000);

    const chartInterval = setInterval(() => {
      setChartData(prev => [...prev.slice(1), Math.floor(Math.random() * 80) + 20]);
      if (activeNav === 'SOU') {
        const events = ['BUY ORDER EXECUTED', 'LIQUIDITY DETECTED', 'PRICE ALERT: +2.4%', 'PEER NODE SYNCED', 'BLOCK_MINED: #9822'];
        setTerminalLines(prev => [...prev.slice(-8), `> ${events[Math.floor(Math.random() * events.length)]}`]);
      }
    }, 3000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(glitchInterval);
      clearInterval(chartInterval);
    };
  }, [activeNav]);

  const handleCopy = () => {
    navigator.clipboard.writeText('9Neabo5MCkgNm8c64bwjtBhwZgkK7V9s3CfScWbrpump');
    setCopyText('SYSTEM_COPIED');
    setTimeout(() => setCopyText('9Neabo5MCkgNm8c64bwjtBhwZgkK7V9s3CfScWbrpump'), 2000);
  };

  const colors = {
    neon: '#00ccff',
    hot: '#ff0055',
    yellow: '#f3f315',
    dark: '#050505',
    grid: '#111111',
    text: '#ffffff',
    glass: 'rgba(255, 255, 255, 0.05)',
  };

  const navItemStyle = (active) => ({
    padding: '0 20px',
    cursor: 'pointer',
    color: active ? colors.yellow : colors.text,
    borderBottom: active ? `4px solid ${colors.yellow}` : '4px solid transparent',
    fontSize: '0.9rem',
    fontWeight: '900',
    letterSpacing: '2px',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: active ? `${colors.yellow}11` : 'transparent',
    textTransform: 'uppercase',
  });

  const dashboardCardStyle = {
    backgroundColor: colors.glass,
    border: `1px solid ${colors.neon}44`,
    padding: '24px',
    position: 'relative',
    backdropFilter: 'blur(10px)',
  };

  // Fix: define buttonStyle (smallest possible change)
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
    boxShadow: solid ? `0 6px 20px ${color}44` : 'none',
    transform: 'skewX(-10deg)',
  });

  const PageMew = () => (
    <div style={{ animation: 'fadeIn 0.5s ease' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr', gap: '20px', marginBottom: '40px' }}>
        <div style={dashboardCardStyle}>
          <h3 style={{ color: colors.neon, marginTop: 0 }}>NETWORK_TRAFFIC_LIVE</h3>
          <div style={{ height: '200px', width: '100%', marginTop: '20px' }}>
            <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
              <path
                d={`M ${chartData.map((d, i) => `${(i / (chartData.length - 1)) * 1000},${200 - (d * 2)}`).join(' L ')}`}
                fill="none"
                stroke={colors.neon}
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
              />
              {chartData.map((d, i) => (
                <circle key={i} cx={`${(i / (chartData.length - 1)) * 100}%`} cy={200 - (d * 2)} r="4" fill={colors.neon} />
              ))}
            </svg>
          </div>
        </div>
        <div style={dashboardCardStyle}>
          <h3 style={{ color: colors.hot, marginTop: 0 }}>METRICS_RAW</h3>
          {['CPU: 88%', 'MEM: 4.2GB', 'PEERS: 124', 'LATENCY: 12ms'].map((m, i) => (
            <div key={i} style={{ marginBottom: '10px', fontSize: '0.9rem', borderBottom: '1px solid #222', paddingBottom: '5px' }}>{m}</div>
          ))}
        </div>
      </div>
      {/* Assuming the rest of the PageMew content was like cards */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '20px' }}>
        {['MODUL_01: SYSTEM_INTEGRITY', 'MODUL_02: DATA_ENCRYPTION', 'MODUL_03: QUANTUM_LEAP'].map((item, i) => (
          <div key={i} style={dashboardCardStyle}>
            <h4 style={{ color: colors.yellow, marginTop: 0 }}>{item}</h4>
            <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Status: ONLINE</p>
          </div>
        ))}
      </div>
    </div>
  );

  const PageSou = () => (
    <div style={{ animation: 'fadeIn 0.5s ease' }}>
      <div style={dashboardCardStyle}>
        <h3 style={{ color: colors.yellow, marginTop: 0 }}>TERMINAL_OUTPUT</h3>
        <div style={{ height: '300px', overflowY: 'scroll', backgroundColor: '#000', padding: '15px', fontSize: '0.9rem' }}>
          {terminalLines.map((line, i) => (
            <div key={i} style={{ whiteSpace: 'pre-wrap', color: line.includes('ERROR') ? colors.hot : colors.text }}>{line}</div>
          ))}
          <div style={{ color: colors.neon }}>_</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
        <div style={dashboardCardStyle}>
          <h3 style={{ color: colors.neon, marginTop: 0 }}>TRADE_CONTROL</h3>
          <button style={{ ...buttonStyle(colors.hot), width: '100%', marginBottom: '10px' }}>EXECUTE_BUY_</button>
          <button style={{ ...buttonStyle(colors.yellow), width: '100%' }}>INITIATE_SELL_</button>
        </div>
        <div style={dashboardCardStyle}>
          <h3 style={{ color: colors.text, marginTop: 0 }}>LOGS_EVENTS</h3>
          {[
            'CONTRACT_DEPLOYED',
            'LP_LOCKED',
            'OWNERSHIP_RENOWNNCED'
          ].map((log, i) => (
            <div key={i} style={{ marginBottom: '10px', fontSize: '0.9rem' }}>// {log}</div>
          ))}
        </div>
      </div>
    </div>
  );

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
          <div style={{ display: 'flex', gap: '30px' }}>
            {['MISSION', 'DATA', 'CORE'].map(link => (
              <a key={link} href="#" style={{ color: colors.neon, textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>{`> ${link}`}</a>
            ))}
          </div>
        )}
        <button style={{ ...buttonStyle(colors.hot), padding: '8px 16px', fontSize: '0.8rem' }}>ACCESS_TERMINAL</button>
      </nav>

      {/* HERO */}
      <header style={{ 
        paddingTop: '180px',
        textAlign: 'center',
        minHeight: '80vh',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <h1 style={{ 
            fontSize: isMobile ? '5rem' : '10rem', 
            margin: 0, 
            lineHeight: 0.8,
            color: colors.text,
            textShadow: `0px 0px ${colors.hot}, 0px 0px ${colors.neon}`,
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
      <section style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}>
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
      <section style={{ 
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        borderTop: `1px solid ${colors.grid}` 
      }}>
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
      <section style={{ 
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        textAlign: 'center' 
      }}>
        <div style={{ 
          border: `4px solid ${colors.yellow}`, 
          padding: '80px 20px', 
          backgroundColor: '#000',
          boxShadow: `inset 0 0 50px ${colors.yellow}22`,
          boxShadow: `
            0 -4px 0 0 ${colors.yellow},
            0 4px 0 0 ${colors.yellow},
            -4px 0 0 0 ${colors.yellow},
            4px 0 0 0 ${colors.yellow}
          `,
          margin: '4px',
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
        
        {/* Footer Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '30px' }}>
          <a 
            href="https://twitter.com/yourproject" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ ...buttonStyle(colors.neon, false), padding: '8px 16px', fontSize: '0.7rem', transform: 'skewX(0deg)', border: `2px solid ${colors.neon}`, boxShadow: 'none' }}
          >
            TWITTER
          </a>
          <a 
            href="https://t.me/yourproject" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ ...buttonStyle(colors.yellow, false), padding: '8px 16px', fontSize: '0.7rem', transform: 'skewX(0deg)', border: `2px solid ${colors.yellow}`, boxShadow: 'none' }}
          >
            TELEGRAM
          </a>
          <a 
            href="https://dexscreener.com/youchain/yourtoken" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ ...buttonStyle(colors.hot, false), padding: '8px 16px', fontSize: '0.7rem', transform: 'skewX(0deg)', border: `2px solid ${colors.hot}`, boxShadow: 'none' }}
          >
            CHART
          </a>
        </div>
      </footer>
    </div>
  );
}