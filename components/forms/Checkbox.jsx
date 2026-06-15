import React from 'react';

export function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const autoId = React.useId ? React.useId() : 'cb';
  const fieldId = id || autoId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(Boolean(defaultChecked));
  const on = isControlled ? checked : internal;

  const toggle = (e) => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };

  return (
    <label
      htmlFor={fieldId}
      style={{
        display: 'flex', alignItems: description ? 'flex-start' : 'center', gap: 11,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.55 : 1, ...style,
      }}
    >
      <input
        id={fieldId} type="checkbox" checked={isControlled ? checked : undefined}
        defaultChecked={isControlled ? undefined : defaultChecked}
        disabled={disabled} onChange={toggle}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }}
        {...rest}
      />
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        width: 20, height: 20, marginTop: description ? 2 : 0,
        borderRadius: 'var(--radius-xs)',
        border: on ? '1.5px solid var(--color-primary)' : '1.5px solid var(--border-strong)',
        background: on ? 'var(--color-primary)' : 'var(--surface-card)',
        transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      }}>
        {on && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 1.35 }}>{label}</span>
        {description && <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{description}</span>}
      </span>
    </label>
  );
}
