import React from 'react';

const SIZES = { xs: 28, sm: 36, md: 48, lg: 64, xl: 88 };

export function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dim,
    height: dim,
    flexShrink: 0,
    borderRadius: '50%',
    overflow: 'hidden',
    background: 'var(--teal-100)',
    color: 'var(--teal-700)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: dim * 0.38,
    letterSpacing: '0.01em',
    userSelect: 'none',
    boxShadow: ring ? '0 0 0 2px var(--surface-page), 0 0 0 4px var(--teal-300)' : 'none',
    ...style,
  };

  return (
    <span style={styles} {...rest}>
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : (initials || '·')}
    </span>
  );
}
