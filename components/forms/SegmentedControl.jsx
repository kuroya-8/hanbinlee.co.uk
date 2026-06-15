import React from 'react';

export function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  fullWidth = false,
  style,
  ...rest
}) {
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (opts[0] && opts[0].value));
  const current = isControlled ? value : internal;

  const select = (v) => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };

  const h = size === 'sm' ? 36 : 44;
  const pad = size === 'sm' ? '0 14px' : '0 20px';

  return (
    <div
      role="tablist"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4, padding: 4,
        background: 'var(--neutral-100)', borderRadius: 'var(--radius-pill)',
        width: fullWidth ? '100%' : 'auto', ...style,
      }}
      {...rest}
    >
      {opts.map((o) => {
        const selected = o.value === current;
        return (
          <button
            key={o.value}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => select(o.value)}
            style={{
              flex: fullWidth ? 1 : 'initial',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7,
              height: h, padding: pad,
              border: 'none', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
              background: selected ? 'var(--surface-card)' : 'transparent',
              color: selected ? 'var(--color-primary-strong)' : 'var(--text-muted)',
              boxShadow: selected ? 'var(--shadow-sm)' : 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)',
              fontWeight: 'var(--fw-semibold)', whiteSpace: 'nowrap',
              transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)',
            }}
          >
            {o.icon && <span style={{ display: 'inline-flex' }}>{o.icon}</span>}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
