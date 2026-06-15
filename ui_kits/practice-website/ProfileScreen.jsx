// Clinical Profile screen
const NS_p = window.HanBinLeeOphthalmologyDesignSystem_17f2f2;
const { Button: PBtn, Card: PCard, Callout: PCallout, Tag: PTag, Avatar: PAvatar, IconButton: PIconBtn } = NS_p;
const pico = (n) => <i data-lucide={n}></i>;

const FACTS = [
  { label: 'Specialties', value: 'Cataract surgery · Corneal conditions · Dry eye · YAG laser' },
  { label: 'NHS base', value: 'Frimley Health NHS Foundation Trust' },
  { label: 'Private practice', value: 'Benenden Hospital · Parkside Hospital' },
  { label: 'Qualifications', value: 'MBBS, University College London (2012)' },
  { label: 'Fellowships', value: 'Corneoplastic Unit, Queen Victoria Hospital · Frimley Park Hospital' },
  { label: 'Academic', value: 'Former Honorary Clinical Lecturer, Brighton & Sussex Medical School' },
];

function ProfileScreen({ go }) {
  return (
    <div style={{ background: 'var(--surface-mist)', minHeight: '100%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '52px 40px 72px', display: 'grid', gridTemplateColumns: '320px 1fr', gap: 40, alignItems: 'start' }}>
        {/* Sidebar card */}
        <PCard variant="elevated" padding="lg" style={{ position: 'sticky', top: 92 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <PAvatar size="xl" src="../../assets/images/portrait.jpg" name="Han Bin Lee" ring />
            <h3 style={{ fontSize: 'var(--text-xl)', margin: '16px 0 2px', color: 'var(--text-strong)' }}>Miss Han Bin Lee</h3>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-primary)' }}>Consultant Ophthalmologist</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 10, fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
              <span style={{ display: 'inline-flex', color: 'var(--color-primary)' }}>{pico('check-circle-2')}</span> Adult &amp; senior care
            </div>
          </div>
          <PBtn variant="primary" fullWidth iconLeft={pico('calendar-check')} onClick={() => go('booking')} style={{ marginTop: 20 }}>Book a consultation</PBtn>
          <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <PIconBtn label="Phone" variant="secondary" shape="circle">{pico('phone')}</PIconBtn>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>Appointments</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-body)' }}>07737 228 164</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <PIconBtn label="WhatsApp" variant="secondary" shape="circle">{pico('message-circle')}</PIconBtn>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>WhatsApp</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-body)' }}>Message the practice</div>
              </div>
            </div>
          </div>
        </PCard>

        {/* Main content */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Clinical Profile</div>
          <h1 style={{ fontSize: 'var(--text-4xl)', margin: '0 0 6px', color: 'var(--text-strong)' }}>Miss Han Bin Lee</h1>
          <div style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', marginBottom: 24 }}>Consultant Ophthalmologist</div>

          <PCallout variant="quote" style={{ marginBottom: 28 }}>
            Advancing surgical excellence through digital integration and precision patient care.
          </PCallout>

          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: 16 }}>
            Miss Han Bin Lee is a highly experienced consultant ophthalmologist specialising in cataract surgery and complex corneal conditions. She holds substantive consultant posts at Frimley Health NHS Foundation Trust and Benenden Hospital, where she is dedicated to delivering exceptional, patient-centred eye care.
          </p>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: 32 }}>
            Her practice is grounded in precision and technological innovation. Recently she has been instrumental in the EndoArt initiative, successfully transitioning digital predictive modelling into practical, operating-room solutions.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
            <PTag variant="soft">Cataract surgery</PTag>
            <PTag variant="soft">Corneal conditions</PTag>
            <PTag variant="soft">Dry eye management</PTag>
            <PTag variant="soft">YAG laser capsulotomy</PTag>
          </div>

          <PCard variant="outline" padding="none">
            {FACTS.map((f, i) => (
              <div key={f.label} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 20, padding: '16px 22px', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>{f.label}</div>
                <div style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)' }}>{f.value}</div>
              </div>
            ))}
          </PCard>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ProfileScreen });
