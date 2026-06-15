import React from 'react';

export function Tag({
  variant = 'soft',
  iconLeft = null,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const variants = {
    soft: { background: 'var(--teal-50)', color: 'var(--teal-700)', border: '1px solid transparent' },
    outline: { background: 'transparent', color: 'var(--text-body)', border: '1px solid var(--border-strong)' },
    neutral: { background: 'var(--neutral-100)', color: 'var(--neutral-700)', border: '1px solid transparent' },
  };
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    height: 30,
    padding: '0 12px',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--fw-medium)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    whiteSpace: 'nowrap',
    ...(variants[variant] || variants.soft),
    ...style,
  };
  return (
    <span style={styles} {...rest}>
      {iconLeft && <span style={{ display: 'inline-flex', flexShrink: 0, opacity: 0.85 }}>{iconLeft}</span>}
      {children}
      {onRemove && (
        <button
          type="button"
          aria-label="Remove"
          onClick={onRemove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 16, height: 16, marginRight: -4, padding: 0, border: 'none',
            borderRadius: '50%', cursor: 'pointer',
            background: hovered ? 'rgba(0,0,0,0.08)' : 'transparent',
            color: 'currentColor', fontSize: 14, lineHeight: 1,
          }}
        >×</button>
      )}
    </span>
  );
}
