import React from 'react';

const SIZES = {
  sm: { fontSize: 'var(--text-sm)', padding: '0 14px', height: 36, gap: 8, radius: 'var(--radius-md)' },
  md: { fontSize: 'var(--text-base)', padding: '0 20px', height: 44, gap: 9, radius: 'var(--radius-md)' },
  lg: { fontSize: 'var(--text-md)', padding: '0 28px', height: 52, gap: 10, radius: 'var(--radius-lg)' },
};

function variantStyle(variant, hovered, active) {
  switch (variant) {
    case 'secondary':
      return {
        background: hovered ? 'var(--teal-50)' : 'var(--surface-card)',
        color: 'var(--color-primary-strong)',
        border: '1.5px solid var(--teal-300)',
        boxShadow: active ? 'none' : 'var(--shadow-xs)',
      };
    case 'ghost':
      return {
        background: hovered ? 'var(--teal-50)' : 'transparent',
        color: 'var(--color-primary)',
        border: '1.5px solid transparent',
      };
    case 'subtle':
      return {
        background: hovered ? 'var(--neutral-100)' : 'var(--neutral-50)',
        color: 'var(--text-body)',
        border: '1.5px solid transparent',
      };
    case 'accent':
      return {
        background: hovered ? 'var(--gold-500)' : 'var(--gold-400)',
        color: 'var(--color-on-accent)',
        border: '1.5px solid transparent',
        boxShadow: active ? 'none' : 'var(--shadow-sm)',
      };
    case 'danger':
      return {
        background: hovered ? '#a8281c' : 'var(--color-danger)',
        color: '#fff',
        border: '1.5px solid transparent',
      };
    case 'primary':
    default:
      return {
        background: hovered ? 'var(--color-primary-hover)' : 'var(--color-primary)',
        color: 'var(--color-on-primary)',
        border: '1.5px solid transparent',
        boxShadow: active ? 'none' : 'var(--shadow-sm)',
      };
  }
}

export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  href,
  children,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = variantStyle(variant, hovered && !disabled, active && !disabled);

  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1,
    letterSpacing: '0.01em',
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...v,
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => { setHovered(false); setActive(false); },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
  };

  const content = (
    <>
      {iconLeft && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    return <a href={href} style={styles} {...handlers} {...rest}>{content}</a>;
  }
  return (
    <button type={type} disabled={disabled} style={styles} {...handlers} {...rest}>
      {content}
    </button>
  );
}
