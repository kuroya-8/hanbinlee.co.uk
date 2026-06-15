// Home / landing screen
const NS_h = window.HanBinLeeOphthalmologyDesignSystem_17f2f2;
const { Button: HBtn, Badge: HBadge, Tag: HTag, Card: HCard } = NS_h;
const hico = (n) => <i data-lucide={n}></i>;

const SERVICES = [
  { icon: 'eye', title: 'Cataract surgery', body: 'Premium lens cataract surgery to restore clear, comfortable vision with rapid recovery.' },
  { icon: 'scan-eye', title: 'Corneal conditions', body: 'Diagnosis and surgical treatment of complex corneal disease, including artificial cornea transplantation.' },
  { icon: 'droplet', title: 'Dry eye management', body: 'Thorough assessment and tailored treatment plans for persistent dry and irritated eyes.' },
  { icon: 'zap', title: 'YAG laser capsulotomy', body: 'Quick, painless laser treatment for clouding that can occur after cataract surgery.' },
];

function Stat({ value, label }) {
  return (
    <div>
      <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--fw-bold)', color: 'var(--color-primary-strong)', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 6 }}>{label}</div>
    </div>
  );
}

function HomeScreen({ go }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, var(--teal-50) 0%, var(--surface-page) 78%)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 40px 56px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Consultant Ophthalmologist · London &amp; Surrey</div>
            <h1 style={{ fontSize: 'var(--text-5xl)', lineHeight: 1.05, margin: '0 0 20px', color: 'var(--text-strong)' }}>Clearer vision, expertly restored.</h1>
            <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 460 }}>
              Miss Han Bin Lee is a consultant ophthalmologist specialising in cataract surgery and complex corneal conditions — combining digital precision with patient-centred care.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 30 }}>
              <HTag>Cataract surgery</HTag>
              <HTag>Corneal conditions</HTag>
              <HTag>Dry eye</HTag>
              <HTag>YAG laser</HTag>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <HBtn variant="primary" size="lg" iconLeft={hico('calendar-check')} onClick={() => go('booking')}>Book a consultation</HBtn>
              <HBtn variant="secondary" size="lg" onClick={() => go('profile')}>Meet the consultant</HBtn>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '6px solid #fff' }}>
              <img src="../../assets/images/portrait.jpg" alt="Miss Han Bin Lee" style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', bottom: -18, left: -18, background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'inline-flex', width: 40, height: 40, borderRadius: '50%', background: 'var(--gold-200)', color: 'var(--gold-600)', alignItems: 'center', justifyContent: 'center' }}>{hico('award')}</span>
              <div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-bold)', color: 'var(--text-strong)' }}>EndoArt® Pioneer</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>First commercial artificial cornea</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-page)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '22px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--fw-semibold)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>Practising at</span>
          {['Frimley Health NHS', 'Benenden Hospital', 'Parkside Hospital', 'Queen Victoria Hospital'].map((h) => (
            <span key={h} style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--fw-semibold)', color: 'var(--neutral-500)' }}>{h}</span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 40px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 44px' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Specialist Services</div>
          <h2 style={{ fontSize: 'var(--text-3xl)', margin: 0, color: 'var(--text-strong)' }}>Focused expertise across the anterior eye</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {SERVICES.map((s) => (
            <HCard key={s.title} variant="elevated" padding="lg" interactive>
              <span style={{ display: 'inline-flex', width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: 'var(--teal-50)', color: 'var(--color-primary)', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>{hico(s.icon)}</span>
              <h3 style={{ fontSize: 'var(--text-lg)', margin: '0 0 8px', color: 'var(--text-strong)' }}>{s.title}</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>{s.body}</p>
            </HCard>
          ))}
        </div>
      </section>

      {/* Distinction / EndoArt feature */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', background: 'var(--surface-tint)', borderRadius: 'var(--radius-2xl)', padding: 12 }}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: 320 }}>
            <img src="../../assets/images/endoart-award.jpg" alt="EndoArt Pioneer award" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ padding: '12px 40px 12px 12px' }}>
            <HBadge tone="accent" style={{ marginBottom: 16 }}>Recognised distinction</HBadge>
            <h2 style={{ fontSize: 'var(--text-2xl)', margin: '0 0 14px', color: 'var(--text-strong)' }}>A pioneer in artificial cornea transplantation</h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', lineHeight: 1.65, margin: '0 0 22px' }}>
              Miss Lee performed one of the first commercial transplants using an artificial cornea — featured by the BBC and Frimley Health NHS Foundation Trust — translating digital predictive modelling into real surgical outcomes.
            </p>
            <HBtn variant="ghost" iconRight={hico('arrow-right')} onClick={() => go('press')}>Read the coverage</HBtn>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: 'var(--surface-deep)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontSize: 'var(--text-3xl)', margin: '0 0 8px', color: '#fff' }}>Ready to see more clearly?</h2>
            <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-on-dark-muted)', margin: 0 }}>Direct self-pay access — no GP referral required. Most major insurers accepted.</p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <HBtn variant="accent" size="lg" iconLeft={hico('calendar-check')} onClick={() => go('booking')}>Book a consultation</HBtn>
            <HBtn variant="secondary" size="lg" iconLeft={hico('phone')} style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>07737 228 164</HBtn>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomeScreen });
