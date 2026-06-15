import React from 'react';

const TONES = {
  neutral: { bg: 'var(--neutral-100)', fg: 'var(--neutral-700)', dot: 'var(--neutral-500)' },
  primary: { bg: 'var(--teal-50)', fg: 'var(--teal-700)', dot: 'var(--teal-500)' },
  success: { bg: 'var(--color-success-soft)', fg: 'var(--color-success)', dot: 'var(--color-success)' },
  warning: { bg: 'var(--color-warning-soft)', fg: 'var(--color-warning)', dot: 'var(--color-warning)' },
  danger: { bg: 'var(--color-danger-soft)', fg: 'var(--color-danger)', dot: 'var(--color-danger)' },
  accent: { bg: 'var(--gold-200)', fg: 'var(--gold-600)', dot: 'var(--gold-500)' },
};

export function Badge({
  tone = 'neutral',
  size = 'md',
  dot = false,
  solid = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const sm = size === 'sm';
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    height: sm ? 20 : 24,
    padding: sm ? '0 8px' : '0 10px',
    fontFamily: 'var(--font-sans)',
    fontSize: sm ? '0.6875rem' : 'var(--text-xs)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '0.02em',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    background: solid ? t.dot : t.bg,
    color: solid ? '#fff' : t.fg,
    whiteSpace: 'nowrap',
    ...style,
  };
  return (
    <span style={styles} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: solid ? '#fff' : t.dot, flexShrink: 0 }} />}
      {children}
    </span>
  );
}
