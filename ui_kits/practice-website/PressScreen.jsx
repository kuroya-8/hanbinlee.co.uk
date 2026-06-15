// Press / media coverage screen
const NS_pr = window.HanBinLeeOphthalmologyDesignSystem_17f2f2;
const { Card: PrCard, Badge: PrBadge, Button: PrBtn, SegmentedControl: PrSeg } = NS_pr;
const prico = (n) => <i data-lucide={n}></i>;

const ARTICLES = [
  { source: 'BBC News', tag: 'bbc.co.uk', title: 'First commercial transplant using an artificial cornea', body: 'National coverage of a landmark procedure restoring sight where donor tissue was not an option.', date: 'Featured' },
  { source: 'Frimley Health NHS', tag: 'fhft.nhs.uk', title: 'Frimley Health surgeon pioneers artificial cornea transplant', body: 'The trust reports on one of the first EndoArt® artificial cornea transplants performed in commercial practice.', date: 'Featured' },
];

function PressScreen({ go }) {
  return (
    <div style={{ background: 'var(--surface-mist)', minHeight: '100%' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '56px 40px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>In the Media</div>
          <h1 style={{ fontSize: 'var(--text-4xl)', margin: '0 0 12px', color: 'var(--text-strong)' }}>Press &amp; recognition</h1>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)' }}>Selected coverage featuring Miss Han Bin Lee.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {ARTICLES.map((a) => (
            <PrCard key={a.source} variant="elevated" padding="lg" interactive>
              <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
                <span style={{ display: 'inline-flex', width: 56, height: 56, flexShrink: 0, borderRadius: 'var(--radius-lg)', background: 'var(--teal-50)', color: 'var(--color-primary)', alignItems: 'center', justifyContent: 'center' }}>{prico('newspaper')}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-bold)', color: 'var(--text-strong)' }}>{a.source}</span>
                    <PrBadge tone="accent" size="sm">{a.date}</PrBadge>
                  </div>
                  <h3 style={{ fontSize: 'var(--text-lg)', margin: '0 0 4px', color: 'var(--text-strong)' }}>{a.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>{a.body}</p>
                </div>
                <span style={{ display: 'inline-flex', color: 'var(--text-subtle)', flexShrink: 0 }}>{prico('arrow-up-right')}</span>
              </div>
            </PrCard>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <PrBtn variant="secondary" onClick={() => go('home')}>Back to home</PrBtn>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PressScreen });
