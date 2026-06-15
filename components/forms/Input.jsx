import React from 'react';

export function Input({
  label,
  hint,
  error,
  iconLeft = null,
  iconRight = null,
  size = 'md',
  id,
  required = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const autoId = React.useId ? React.useId() : 'in';
  const fieldId = id || autoId;
  const h = size === 'sm' ? 38 : size === 'lg' ? 52 : 44;
  const invalid = Boolean(error);

  const borderColor = invalid
    ? 'var(--color-danger)'
    : focused ? 'var(--color-primary)' : 'var(--border-strong)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-body)' }}>
          {label}{required && <span style={{ color: 'var(--color-danger)', marginLeft: 2 }}>*</span>}
        </label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        height: h, padding: '0 14px',
        background: disabled ? 'var(--neutral-50)' : 'var(--surface-card)',
        border: `1.5px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focused && !invalid ? 'var(--focus-ring)' : 'none',
        transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
        opacity: disabled ? 0.6 : 1,
      }}>
        {iconLeft && <span style={{ display: 'inline-flex', color: 'var(--text-subtle)', flexShrink: 0 }}>{iconLeft}</span>}
        <input
          id={fieldId}
          required={required}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)',
            height: '100%',
          }}
          {...rest}
        />
        {iconRight && <span style={{ display: 'inline-flex', color: 'var(--text-subtle)', flexShrink: 0 }}>{iconRight}</span>}
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 'var(--text-xs)', color: invalid ? 'var(--color-danger)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
