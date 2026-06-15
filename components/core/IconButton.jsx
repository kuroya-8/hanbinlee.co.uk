import React from 'react';

const SIZES = { sm: 32, md: 40, lg: 48 };

export function IconButton({
  variant = 'ghost',
  size = 'md',
  shape = 'square',
  disabled = false,
  label,
  children,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const dim = SIZES[size] || SIZES.md;

  const variants = {
    primary: { background: hovered ? 'var(--color-primary-hover)' : 'var(--color-primary)', color: '#fff', border: '1.5px solid transparent' },
    secondary: { background: hovered ? 'var(--teal-50)' : 'var(--surface-card)', color: 'var(--color-primary-strong)', border: '1.5px solid var(--teal-300)' },
    ghost: { background: hovered ? 'var(--teal-50)' : 'transparent', color: 'var(--color-primary)', border: '1.5px solid transparent' },
    subtle: { background: hovered ? 'var(--neutral-100)' : 'var(--neutral-50)', color: 'var(--text-muted)', border: '1.5px solid transparent' },
  };

  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dim,
    height: dim,
    flexShrink: 0,
    borderRadius: shape === 'circle' ? '50%' : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)',
    ...(variants[variant] || variants.ghost),
    ...style,
  };

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      style={styles}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...rest}
    >
      {children}
    </button>
  );
}
