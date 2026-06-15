import React from 'react';

const TONES = {
  info: { bg: 'var(--color-info-soft)', border: 'var(--teal-300)', fg: 'var(--teal-700)', title: 'var(--teal-800)' },
  success: { bg: 'var(--color-success-soft)', border: 'var(--color-success)', fg: 'var(--green-500)', title: 'var(--green-500)' },
  warning: { bg: 'var(--color-warning-soft)', border: 'var(--color-warning)', fg: 'var(--amber-500)', title: 'var(--amber-500)' },
  danger: { bg: 'var(--color-danger-soft)', border: 'var(--color-danger)', fg: 'var(--color-danger)', title: 'var(--color-danger)' },
};

export function Callout({
  tone = 'info',
  variant = 'block',
  title,
  icon = null,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;

  if (variant === 'quote') {
    return (
      <blockquote
        style={{
          margin: 0, padding: '6px 0 6px 22px',
          borderLeft: '3px solid var(--color-primary)',
          fontFamily: 'var(--font-sans)', fontStyle: 'italic',
          fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-snug)',
          color: 'var(--text-strong)', ...style,
        }}
        {...rest}
      >
        {children}
      </blockquote>
    );
  }

  return (
    <div
      style={{
        display: 'flex', gap: 12, padding: '16px 18px',
        background: t.bg, borderLeft: `3px solid ${t.border}`,
        borderRadius: 'var(--radius-md)', ...style,
      }}
      {...rest}
    >
      {icon && <span style={{ display: 'inline-flex', flexShrink: 0, color: t.fg, marginTop: 1 }}>{icon}</span>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {title && <span style={{ fontWeight: 'var(--fw-semibold)', fontSize: 'var(--text-base)', color: t.title }}>{title}</span>}
        <div style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)', color: 'var(--text-body)' }}>{children}</div>
      </div>
    </div>
  );
}
