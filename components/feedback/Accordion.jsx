import React from 'react';

export function Accordion({ items = [], allowMultiple = false, defaultOpen = [], style, ...rest }) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));

  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  return (
    <div
      style={{
        border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)',
        overflow: 'hidden', background: 'var(--surface-card)', ...style,
      }}
      {...rest}
    >
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                width: '100%', padding: '16px 20px', border: 'none', cursor: 'pointer',
                background: isOpen ? 'var(--surface-mist)' : 'transparent',
                fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)',
                fontWeight: 'var(--fw-semibold)', color: 'var(--text-heading)', textAlign: 'left',
                transition: 'background var(--duration-fast) var(--ease-standard)',
              }}
            >
              {item.title}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2"
                strokeLinecap="round" style={{ flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--duration-base) var(--ease-standard)' }}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {isOpen && (
              <div style={{ padding: '0 20px 18px', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)', color: 'var(--text-muted)' }}>
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
