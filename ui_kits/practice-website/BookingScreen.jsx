// Booking / enquiry screen
const NS_b = window.HanBinLeeOphthalmologyDesignSystem_17f2f2;
const { Input: BInput, Textarea: BTextarea, Select: BSelect, Checkbox: BCheckbox, Button: BBtn, Card: BCard, Callout: BCallout, SegmentedControl: BSeg } = NS_b;
const bico = (n) => <i data-lucide={n}></i>;

function BookingScreen({ go }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [pay, setPay] = React.useState('Self-pay');

  if (submitted) {
    return (
      <div style={{ background: 'var(--surface-mist)', minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 40px' }}>
        <BCard variant="elevated" padding="lg" style={{ maxWidth: 480, textAlign: 'center' }}>
          <span style={{ display: 'inline-flex', width: 64, height: 64, borderRadius: '50%', background: 'var(--color-success-soft)', color: 'var(--color-success)', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>{bico('check-circle-2')}</span>
          <h2 style={{ fontSize: 'var(--text-2xl)', margin: '0 0 10px', color: 'var(--text-strong)' }}>Request received</h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 24px' }}>
            Thank you — the practice will confirm your appointment by text within one working day.
          </p>
          <BBtn variant="primary" onClick={() => { setSubmitted(false); go('home'); }}>Back to home</BBtn>
        </BCard>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--surface-mist)', minHeight: '100%' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '52px 40px 80px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 36, alignItems: 'start' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Book a Consultation</div>
          <h1 style={{ fontSize: 'var(--text-3xl)', margin: '0 0 8px', color: 'var(--text-strong)' }}>Request an appointment</h1>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', margin: '0 0 28px' }}>Complete the form and the practice will be in touch to confirm a time.</p>

          <BCard variant="elevated" padding="lg">
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-body)', marginBottom: 8 }}>Payment method</div>
                <BSeg options={['Self-pay', 'Insured']} value={pay} onChange={setPay} fullWidth />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <BInput label="First name" placeholder="Jane" required />
                <BInput label="Last name" placeholder="Doe" required />
                <BInput label="Email" type="email" placeholder="jane@email.com" iconLeft={bico('mail')} required />
                <BInput label="Phone" placeholder="07700 900000" iconLeft={bico('phone')} required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <BSelect label="Preferred location" placeholder="Choose a clinic" options={['Parkside Suite, Frimley', 'Benenden Hospital', 'Parkside Hospital']} required />
                <BSelect label="Appointment type" options={['First consultation', 'Follow-up', 'YAG laser capsulotomy']} />
              </div>
              {pay === 'Insured' && (
                <div style={{ marginBottom: 16 }}>
                  <BInput label="Insurer authorisation code" placeholder="e.g. AX-00123" hint="Required by your insurer before the appointment" />
                </div>
              )}
              <div style={{ marginBottom: 18 }}>
                <BTextarea label="Reason for appointment" rows={3} hint="Briefly describe your symptoms or referral" />
              </div>
              <div style={{ marginBottom: 22 }}>
                <BCheckbox required label="I consent to be contacted about my appointment"
                  description="We'll only use your details to arrange and provide your care." />
              </div>
              <BBtn type="submit" variant="primary" size="lg" fullWidth iconRight={bico('arrow-right')}>Submit request</BBtn>
            </form>
          </BCard>
        </div>

        {/* Summary aside */}
        <div style={{ position: 'sticky', top: 92, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <BCard variant="tint" padding="lg">
            <h4 style={{ fontSize: 'var(--text-md)', margin: '0 0 14px', color: 'var(--text-strong)' }}>What to expect</h4>
            {[['clock', 'Confirmation within 1 working day'], ['stethoscope', 'Consultant-led assessment'], ['file-text', 'Clear written treatment plan']].map(([ic, t]) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ display: 'inline-flex', color: 'var(--color-primary)' }}>{bico(ic)}</span>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>{t}</span>
              </div>
            ))}
          </BCard>
          <BCallout tone="info" icon={bico('phone')} title="Prefer to call?">
            Appointments line: 07737 228 164 — WhatsApp available.
          </BCallout>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { BookingScreen });
