import React from 'react';

export function Card({
  variant = 'elevated',
  padding = 'md',
  interactive = false,
  as = 'div',
  children,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const pads = { none: 0, sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' };

  const variants = {
    elevated: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: interactive && hovered ? 'var(--shadow-lg)' : 'var(--shadow-card)',
    },
    outline: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      boxShadow: interactive && hovered ? 'var(--shadow-md)' : 'none',
    },
    soft: {
      background: 'var(--surface-mist)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'none',
    },
    tint: {
      background: 'var(--surface-tint)',
      border: '1px solid var(--border-tint)',
      boxShadow: 'none',
    },
  };

  const styles = {
    borderRadius: 'var(--radius-card)',
    padding: pads[padding] ?? pads.md,
    transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
    transform: interactive && hovered ? 'translateY(-2px)' : 'none',
    cursor: interactive ? 'pointer' : 'default',
    ...(variants[variant] || variants.elevated),
    ...style,
  };

  const Tag = as;
  return (
    <Tag
      style={styles}
      onMouseEnter={interactive ? () => setHovered(true) : undefined}
      onMouseLeave={interactive ? () => setHovered(false) : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
