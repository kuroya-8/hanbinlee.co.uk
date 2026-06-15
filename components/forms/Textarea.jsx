import React from 'react';

export function Textarea({
  label,
  hint,
  error,
  rows = 4,
  id,
  required = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const autoId = React.useId ? React.useId() : 'ta';
  const fieldId = id || autoId;
  const invalid = Boolean(error);
  const borderColor = invalid ? 'var(--color-danger)' : focused ? 'var(--color-primary)' : 'var(--border-strong)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-body)' }}>
          {label}{required && <span style={{ color: 'var(--color-danger)', marginLeft: 2 }}>*</span>}
        </label>
      )}
      <textarea
        id={fieldId}
        rows={rows}
        required={required}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%', padding: '11px 14px', resize: 'vertical',
          background: disabled ? 'var(--neutral-50)' : 'var(--surface-card)',
          border: `1.5px solid ${borderColor}`,
          borderRadius: 'var(--radius-md)',
          boxShadow: focused && !invalid ? 'var(--focus-ring)' : 'none',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
          lineHeight: 'var(--leading-normal)', color: 'var(--text-body)',
          outline: 'none', opacity: disabled ? 0.6 : 1,
          transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ fontSize: 'var(--text-xs)', color: invalid ? 'var(--color-danger)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
