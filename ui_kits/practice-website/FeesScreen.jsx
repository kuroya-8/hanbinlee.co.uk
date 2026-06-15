// Fees screen
const NS_f = window.HanBinLeeOphthalmologyDesignSystem_17f2f2;
const { SegmentedControl: FSeg, Card: FCard, Callout: FCallout, Button: FBtn, Badge: FBadge } = NS_f;
const fico = (n) => <i data-lucide={n}></i>;

const FEE_LOCATIONS = [
  {
    name: 'Parkside Suite, Frimley',
    address: 'Frimley Park Hospital, Portsmouth Rd, Camberley GU16 7UJ',
    rows: [['First consultation', '£250'], ['Follow-up consultation', '£175'], ['YAG laser capsulotomy', 'On request']],
  },
  {
    name: 'Benenden Hospital',
    address: 'Goddards Green Rd, Cranbrook TN17 4AX',
    rows: [['First consultation', '£250'], ['Follow-up consultation', '£175'], ['Cataract surgery', 'On request']],
  },
];

function FeeCard({ loc }) {
  return (
    <FCard variant="elevated" padding="lg">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 4 }}>
        <h4 style={{ fontSize: 'var(--text-xl)', margin: 0, color: 'var(--text-strong)' }}>{loc.name}</h4>
        <a style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-primary)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
          {fico('map-pin')} Map
        </a>
      </div>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-subtle)', margin: '0 0 16px' }}>{loc.address}</p>
      <div>
        {loc.rows.map(([k, v], i) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderTop: i === 0 ? '1px solid var(--border-subtle)' : '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)' }}>{k}</span>
            <span style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--fw-bold)', color: 'var(--color-primary-strong)' }}>{v}</span>
          </div>
        ))}
      </div>
    </FCard>
  );
}

function FeesScreen({ go }) {
  const [mode, setMode] = React.useState('Self-pay');
  return (
    <div style={{ background: 'var(--surface-mist)', minHeight: '100%' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '56px 40px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Transparent Pricing</div>
          <h1 style={{ fontSize: 'var(--text-4xl)', margin: '0 0 12px', color: 'var(--text-strong)' }}>Consultation &amp; surgery fees</h1>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto' }}>
            Quick, direct access to treatment — no private insurance or GP referral required for self-pay patients.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <FSeg options={['Self-pay', 'Insured']} value={mode} onChange={setMode} />
        </div>

        {mode === 'Self-pay' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {FEE_LOCATIONS.map((l) => <FeeCard key={l.name} loc={l} />)}
          </div>
        ) : (
          <FCard variant="elevated" padding="lg">
            <FBadge tone="primary" dot style={{ marginBottom: 14 }}>Registered provider</FBadge>
            <h4 style={{ fontSize: 'var(--text-xl)', margin: '0 0 10px', color: 'var(--text-strong)' }}>Insured patients</h4>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', lineHeight: 1.65, margin: '0 0 18px' }}>
              I am a registered provider with most major insurance companies. Please ensure you have your authorisation code ready before booking, and let me know if you have any queries.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Bupa', 'AXA Health', 'Aviva', 'Vitality', 'WPA'].map((n) => (
                <span key={n} style={{ padding: '6px 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-muted)' }}>{n}</span>
              ))}
            </div>
          </FCard>
        )}

        <FCallout tone="info" icon={fico('info')} title="Good to know" style={{ marginTop: 24 }}>
          Fees cover the consultant's time only. Diagnostic tests, theatre and lens charges are quoted separately before any procedure.
        </FCallout>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <FBtn variant="primary" size="lg" iconLeft={fico('calendar-check')} onClick={() => go('booking')}>Book a consultation</FBtn>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { FeesScreen });
