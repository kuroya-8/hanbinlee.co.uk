// Header + Footer chrome for the Han Bin Lee practice website
const NS = window.HanBinLeeOphthalmologyDesignSystem_17f2f2;
const { Button, IconButton } = NS;
const ico = (n) => <i data-lucide={n}></i>;

function SiteHeader({ route, go }) {
  const nav = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Clinical Profile' },
    { id: 'fees', label: 'Fees' },
    { id: 'press', label: 'Press' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 40px', background: 'rgba(255,255,255,0.86)',
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <a onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
        <img src="../../assets/brand/logo-mark.png" alt="" style={{ height: 38, width: 'auto' }} />
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--fw-bold)', color: 'var(--text-strong)', letterSpacing: '-0.01em' }}>Han Bin Lee</span>
          <span style={{ fontSize: '0.7rem', fontWeight: 'var(--fw-semibold)', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>Consultant Ophthalmologist</span>
        </span>
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {nav.map((n) => (
          <button key={n.id} onClick={() => go(n.id)} style={{
            border: 'none', background: 'transparent', cursor: 'pointer',
            padding: '8px 14px', borderRadius: 'var(--radius-md)',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
            fontWeight: route === n.id ? 'var(--fw-semibold)' : 'var(--fw-regular)',
            color: route === n.id ? 'var(--color-primary-strong)' : 'var(--text-muted)',
          }}>{n.label}</button>
        ))}
        <Button variant="primary" size="sm" iconLeft={ico('calendar-check')} onClick={() => go('booking')} style={{ marginLeft: 10 }}>Book</Button>
      </nav>
    </header>
  );
}

function SiteFooter({ go }) {
  return (
    <footer style={{ background: 'var(--surface-ink)', color: 'var(--text-on-dark)', padding: '52px 40px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40, maxWidth: 1100, margin: '0 auto' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <img src="../../assets/brand/logo-mark.png" alt="" style={{ height: 40, filter: 'saturate(0.2) brightness(1.6)' }} />
            <span style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--fw-bold)' }}>Han Bin Lee</span>
          </div>
          <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: 320, margin: 0, fontSize: 'var(--text-sm)' }}>
            Consultant Ophthalmologist specialising in cataract surgery and complex corneal conditions across NHS and private practice.
          </p>
        </div>
        <div>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', marginBottom: 14, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Practice</div>
          {[['Home','home'],['Clinical Profile','profile'],['Fees','fees'],['Press','press'],['Book a consultation','booking']].map(([l,id]) => (
            <div key={id} style={{ marginBottom: 9 }}>
              <a onClick={() => go(id)} style={{ color: 'var(--text-on-dark)', cursor: 'pointer', fontSize: 'var(--text-sm)' }}>{l}</a>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', marginBottom: 14, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Contact</div>
          <div style={{ fontSize: 'var(--text-sm)', lineHeight: 1.9 }}>
            <div>Appointments: 07737 228 164</div>
            <div>WhatsApp available</div>
            <div>Parkside Suite, Frimley GU16 7UJ</div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: '36px auto 0', paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'var(--text-on-dark-muted)' }}>
        <span>© 2026 Han Bin Lee. All rights reserved.</span>
        <span>Frimley Health NHS · Benenden · Parkside</span>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter });
