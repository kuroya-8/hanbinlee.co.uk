import React from 'react';

export function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  size = 'md',
  id,
  required = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const autoId = React.useId ? React.useId() : 'sel';
  const fieldId = id || autoId;
  const h = size === 'sm' ? 38 : size === 'lg' ? 52 : 44;
  const invalid = Boolean(error);
  const borderColor = invalid ? 'var(--color-danger)' : focused ? 'var(--color-primary)' : 'var(--border-strong)';

  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-body)' }}>
          {label}{required && <span style={{ color: 'var(--color-danger)', marginLeft: 2 }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <select
          id={fieldId}
          required={required}
          disabled={disabled}
          defaultValue={placeholder ? '' : undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%', height: h, padding: '0 40px 0 14px',
            appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
            background: disabled ? 'var(--neutral-50)' : 'var(--surface-card)',
            border: `1.5px solid ${borderColor}`,
            borderRadius: 'var(--radius-md)',
            boxShadow: focused && !invalid ? 'var(--focus-ring)' : 'none',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)',
            outline: 'none', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1,
            transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
          }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {opts.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" strokeWidth="2"
          style={{ position: 'absolute', right: 13, pointerEvents: 'none' }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 'var(--text-xs)', color: invalid ? 'var(--color-danger)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
