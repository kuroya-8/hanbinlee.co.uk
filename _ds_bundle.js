/* @ds-bundle: {"format":3,"namespace":"HanBinLeeOphthalmologyDesignSystem_17f2f2","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"ea524e7278cf","components/core/Badge.jsx":"f811cacf85cb","components/core/Button.jsx":"7e9714217238","components/core/Card.jsx":"c96deafc93ba","components/core/IconButton.jsx":"dfdd481a379e","components/core/Tag.jsx":"b05c631ae627","components/feedback/Accordion.jsx":"f83d268d78c8","components/feedback/Callout.jsx":"3d56a2782102","components/forms/Checkbox.jsx":"29445437ec18","components/forms/Input.jsx":"2a4c6531fc56","components/forms/SegmentedControl.jsx":"a4f8830bc0e2","components/forms/Select.jsx":"36979a4502b4","components/forms/Textarea.jsx":"cf097cc5716c","ui_kits/practice-website/BookingScreen.jsx":"cfe29130a429","ui_kits/practice-website/FeesScreen.jsx":"a21689f0dd21","ui_kits/practice-website/HomeScreen.jsx":"0ec29015895c","ui_kits/practice-website/PressScreen.jsx":"9e1ea76e3aac","ui_kits/practice-website/ProfileScreen.jsx":"f97d3b2f5176","ui_kits/practice-website/chrome.jsx":"bcea30e3ea79"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HanBinLeeOphthalmologyDesignSystem_17f2f2 = window.HanBinLeeOphthalmologyDesignSystem_17f2f2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 28,
  sm: 36,
  md: 48,
  lg: 64,
  xl: 88
};
function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
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
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: styles
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--neutral-100)',
    fg: 'var(--neutral-700)',
    dot: 'var(--neutral-500)'
  },
  primary: {
    bg: 'var(--teal-50)',
    fg: 'var(--teal-700)',
    dot: 'var(--teal-500)'
  },
  success: {
    bg: 'var(--color-success-soft)',
    fg: 'var(--color-success)',
    dot: 'var(--color-success)'
  },
  warning: {
    bg: 'var(--color-warning-soft)',
    fg: 'var(--color-warning)',
    dot: 'var(--color-warning)'
  },
  danger: {
    bg: 'var(--color-danger-soft)',
    fg: 'var(--color-danger)',
    dot: 'var(--color-danger)'
  },
  accent: {
    bg: 'var(--gold-200)',
    fg: 'var(--gold-600)',
    dot: 'var(--gold-500)'
  }
};
function Badge({
  tone = 'neutral',
  size = 'md',
  dot = false,
  solid = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const sm = size === 'sm';
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    height: sm ? 20 : 24,
    padding: sm ? '0 8px' : '0 10px',
    fontFamily: 'var(--font-sans)',
    fontSize: sm ? '0.6875rem' : 'var(--text-xs)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '0.02em',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    background: solid ? t.dot : t.bg,
    color: solid ? '#fff' : t.fg,
    whiteSpace: 'nowrap',
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: styles
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? '#fff' : t.dot,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    fontSize: 'var(--text-sm)',
    padding: '0 14px',
    height: 36,
    gap: 8,
    radius: 'var(--radius-md)'
  },
  md: {
    fontSize: 'var(--text-base)',
    padding: '0 20px',
    height: 44,
    gap: 9,
    radius: 'var(--radius-md)'
  },
  lg: {
    fontSize: 'var(--text-md)',
    padding: '0 28px',
    height: 52,
    gap: 10,
    radius: 'var(--radius-lg)'
  }
};
function variantStyle(variant, hovered, active) {
  switch (variant) {
    case 'secondary':
      return {
        background: hovered ? 'var(--teal-50)' : 'var(--surface-card)',
        color: 'var(--color-primary-strong)',
        border: '1.5px solid var(--teal-300)',
        boxShadow: active ? 'none' : 'var(--shadow-xs)'
      };
    case 'ghost':
      return {
        background: hovered ? 'var(--teal-50)' : 'transparent',
        color: 'var(--color-primary)',
        border: '1.5px solid transparent'
      };
    case 'subtle':
      return {
        background: hovered ? 'var(--neutral-100)' : 'var(--neutral-50)',
        color: 'var(--text-body)',
        border: '1.5px solid transparent'
      };
    case 'accent':
      return {
        background: hovered ? 'var(--gold-500)' : 'var(--gold-400)',
        color: 'var(--color-on-accent)',
        border: '1.5px solid transparent',
        boxShadow: active ? 'none' : 'var(--shadow-sm)'
      };
    case 'danger':
      return {
        background: hovered ? '#a8281c' : 'var(--color-danger)',
        color: '#fff',
        border: '1.5px solid transparent'
      };
    case 'primary':
    default:
      return {
        background: hovered ? 'var(--color-primary-hover)' : 'var(--color-primary)',
        color: 'var(--color-on-primary)',
        border: '1.5px solid transparent',
        boxShadow: active ? 'none' : 'var(--shadow-sm)'
      };
  }
}
function Button({
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
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, iconLeft), children && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, iconRight));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: styles
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: styles
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'elevated',
  padding = 'md',
  interactive = false,
  as = 'div',
  children,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const variants = {
    elevated: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: interactive && hovered ? 'var(--shadow-lg)' : 'var(--shadow-card)'
    },
    outline: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      boxShadow: interactive && hovered ? 'var(--shadow-md)' : 'none'
    },
    soft: {
      background: 'var(--surface-mist)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'none'
    },
    tint: {
      background: 'var(--surface-tint)',
      border: '1px solid var(--border-tint)',
      boxShadow: 'none'
    }
  };
  const styles = {
    borderRadius: 'var(--radius-card)',
    padding: pads[padding] ?? pads.md,
    transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
    transform: interactive && hovered ? 'translateY(-2px)' : 'none',
    cursor: interactive ? 'pointer' : 'default',
    ...(variants[variant] || variants.elevated),
    ...style
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: styles,
    onMouseEnter: interactive ? () => setHovered(true) : undefined,
    onMouseLeave: interactive ? () => setHovered(false) : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
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
    primary: {
      background: hovered ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: '#fff',
      border: '1.5px solid transparent'
    },
    secondary: {
      background: hovered ? 'var(--teal-50)' : 'var(--surface-card)',
      color: 'var(--color-primary-strong)',
      border: '1.5px solid var(--teal-300)'
    },
    ghost: {
      background: hovered ? 'var(--teal-50)' : 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid transparent'
    },
    subtle: {
      background: hovered ? 'var(--neutral-100)' : 'var(--neutral-50)',
      color: 'var(--text-muted)',
      border: '1.5px solid transparent'
    }
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
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    style: styles,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  variant = 'soft',
  iconLeft = null,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const variants = {
    soft: {
      background: 'var(--teal-50)',
      color: 'var(--teal-700)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid var(--border-strong)'
    },
    neutral: {
      background: 'var(--neutral-100)',
      color: 'var(--neutral-700)',
      border: '1px solid transparent'
    }
  };
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    height: 30,
    padding: '0 12px',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--fw-medium)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    whiteSpace: 'nowrap',
    ...(variants[variant] || variants.soft),
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: styles
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0,
      opacity: 0.85
    }
  }, iconLeft), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      marginRight: -4,
      padding: 0,
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      background: hovered ? 'rgba(0,0,0,0.08)' : 'transparent',
      color: 'currentColor',
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      ...style
    }
  }, rest), items.map((item, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        width: '100%',
        padding: '16px 20px',
        border: 'none',
        cursor: 'pointer',
        background: isOpen ? 'var(--surface-mist)' : 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-md)',
        fontWeight: 'var(--fw-semibold)',
        color: 'var(--text-heading)',
        textAlign: 'left',
        transition: 'background var(--duration-fast) var(--ease-standard)'
      }
    }, item.title, /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--color-primary)",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      style: {
        flexShrink: 0,
        transform: isOpen ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    }))), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 20px 18px',
        fontSize: 'var(--text-base)',
        lineHeight: 'var(--leading-normal)',
        color: 'var(--text-muted)'
      }
    }, item.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: 'var(--color-info-soft)',
    border: 'var(--teal-300)',
    fg: 'var(--teal-700)',
    title: 'var(--teal-800)'
  },
  success: {
    bg: 'var(--color-success-soft)',
    border: 'var(--color-success)',
    fg: 'var(--green-500)',
    title: 'var(--green-500)'
  },
  warning: {
    bg: 'var(--color-warning-soft)',
    border: 'var(--color-warning)',
    fg: 'var(--amber-500)',
    title: 'var(--amber-500)'
  },
  danger: {
    bg: 'var(--color-danger-soft)',
    border: 'var(--color-danger)',
    fg: 'var(--color-danger)',
    title: 'var(--color-danger)'
  }
};
function Callout({
  tone = 'info',
  variant = 'block',
  title,
  icon = null,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  if (variant === 'quote') {
    return /*#__PURE__*/React.createElement("blockquote", _extends({
      style: {
        margin: 0,
        padding: '6px 0 6px 22px',
        borderLeft: '3px solid var(--color-primary)',
        fontFamily: 'var(--font-sans)',
        fontStyle: 'italic',
        fontSize: 'var(--text-lg)',
        lineHeight: 'var(--leading-snug)',
        color: 'var(--text-strong)',
        ...style
      }
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 12,
      padding: '16px 18px',
      background: t.bg,
      borderLeft: `3px solid ${t.border}`,
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0,
      color: t.fg,
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-base)',
      color: t.title
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
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
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 11,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 20,
      height: 20,
      marginTop: description ? 2 : 0,
      borderRadius: 'var(--radius-xs)',
      border: on ? '1.5px solid var(--color-primary)' : '1.5px solid var(--border-strong)',
      background: on ? 'var(--color-primary)' : 'var(--surface-card)',
      transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      lineHeight: 1.35
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
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
  const borderColor = invalid ? 'var(--color-danger)' : focused ? 'var(--color-primary)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-body)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-danger)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 14px',
      background: disabled ? 'var(--neutral-50)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused && !invalid ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
      opacity: disabled ? 0.6 : 1
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-subtle)',
      flexShrink: 0
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    required: required,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      height: '100%'
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-subtle)',
      flexShrink: 0
    }
  }, iconRight)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: invalid ? 'var(--color-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  fullWidth = false,
  style,
  ...rest
}) {
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (opts[0] && opts[0].value));
  const current = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  const h = size === 'sm' ? 36 : 44;
  const pad = size === 'sm' ? '0 14px' : '0 20px';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: 4,
      background: 'var(--neutral-100)',
      borderRadius: 'var(--radius-pill)',
      width: fullWidth ? '100%' : 'auto',
      ...style
    }
  }, rest), opts.map(o => {
    const selected = o.value === current;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "tab",
      "aria-selected": selected,
      onClick: () => select(o.value),
      style: {
        flex: fullWidth ? 1 : 'initial',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
        height: h,
        padding: pad,
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        background: selected ? 'var(--surface-card)' : 'transparent',
        color: selected ? 'var(--color-primary-strong)' : 'var(--text-muted)',
        boxShadow: selected ? 'var(--shadow-sm)' : 'none',
        fontFamily: 'var(--font-sans)',
        fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)',
        fontWeight: 'var(--fw-semibold)',
        whiteSpace: 'nowrap',
        transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)'
      }
    }, o.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex'
      }
    }, o.icon), o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
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
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-body)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-danger)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    required: required,
    disabled: disabled,
    defaultValue: placeholder ? '' : undefined,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: h,
      padding: '0 40px 0 14px',
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      background: disabled ? 'var(--neutral-50)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused && !invalid ? 'var(--focus-ring)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-subtle)",
    strokeWidth: "2",
    style: {
      position: 'absolute',
      right: 13,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: invalid ? 'var(--color-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-body)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-danger)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    required: required,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      padding: '11px 14px',
      resize: 'vertical',
      background: disabled ? 'var(--neutral-50)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused && !invalid ? 'var(--focus-ring)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-body)',
      outline: 'none',
      opacity: disabled ? 0.6 : 1,
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: invalid ? 'var(--color-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice-website/BookingScreen.jsx
try { (() => {
// Booking / enquiry screen
const NS_b = window.HanBinLeeOphthalmologyDesignSystem_17f2f2;
const {
  Input: BInput,
  Textarea: BTextarea,
  Select: BSelect,
  Checkbox: BCheckbox,
  Button: BBtn,
  Card: BCard,
  Callout: BCallout,
  SegmentedControl: BSeg
} = NS_b;
const bico = n => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n
});
function BookingScreen({
  go
}) {
  const [submitted, setSubmitted] = React.useState(false);
  const [pay, setPay] = React.useState('Self-pay');
  if (submitted) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-mist)',
        minHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 40px'
      }
    }, /*#__PURE__*/React.createElement(BCard, {
      variant: "elevated",
      padding: "lg",
      style: {
        maxWidth: 480,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'var(--color-success-soft)',
        color: 'var(--color-success)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18
      }
    }, bico('check-circle-2')), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-2xl)',
        margin: '0 0 10px',
        color: 'var(--text-strong)'
      }
    }, "Request received"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-base)',
        color: 'var(--text-muted)',
        lineHeight: 1.6,
        margin: '0 0 24px'
      }
    }, "Thank you \u2014 the practice will confirm your appointment by text within one working day."), /*#__PURE__*/React.createElement(BBtn, {
      variant: "primary",
      onClick: () => {
        setSubmitted(false);
        go('home');
      }
    }, "Back to home")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-mist)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: '52px 40px 80px',
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 36,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Book a Consultation"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-3xl)',
      margin: '0 0 8px',
      color: 'var(--text-strong)'
    }
  }, "Request an appointment"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      margin: '0 0 28px'
    }
  }, "Complete the form and the practice will be in touch to confirm a time."), /*#__PURE__*/React.createElement(BCard, {
    variant: "elevated",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-body)',
      marginBottom: 8
    }
  }, "Payment method"), /*#__PURE__*/React.createElement(BSeg, {
    options: ['Self-pay', 'Insured'],
    value: pay,
    onChange: setPay,
    fullWidth: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(BInput, {
    label: "First name",
    placeholder: "Jane",
    required: true
  }), /*#__PURE__*/React.createElement(BInput, {
    label: "Last name",
    placeholder: "Doe",
    required: true
  }), /*#__PURE__*/React.createElement(BInput, {
    label: "Email",
    type: "email",
    placeholder: "jane@email.com",
    iconLeft: bico('mail'),
    required: true
  }), /*#__PURE__*/React.createElement(BInput, {
    label: "Phone",
    placeholder: "07700 900000",
    iconLeft: bico('phone'),
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(BSelect, {
    label: "Preferred location",
    placeholder: "Choose a clinic",
    options: ['Parkside Suite, Frimley', 'Benenden Hospital', 'Parkside Hospital'],
    required: true
  }), /*#__PURE__*/React.createElement(BSelect, {
    label: "Appointment type",
    options: ['First consultation', 'Follow-up', 'YAG laser capsulotomy']
  })), pay === 'Insured' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(BInput, {
    label: "Insurer authorisation code",
    placeholder: "e.g. AX-00123",
    hint: "Required by your insurer before the appointment"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(BTextarea, {
    label: "Reason for appointment",
    rows: 3,
    hint: "Briefly describe your symptoms or referral"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(BCheckbox, {
    required: true,
    label: "I consent to be contacted about my appointment",
    description: "We'll only use your details to arrange and provide your care."
  })), /*#__PURE__*/React.createElement(BBtn, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: bico('arrow-right')
  }, "Submit request")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 92,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(BCard, {
    variant: "tint",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-md)',
      margin: '0 0 14px',
      color: 'var(--text-strong)'
    }
  }, "What to expect"), [['clock', 'Confirmation within 1 working day'], ['stethoscope', 'Consultant-led assessment'], ['file-text', 'Clear written treatment plan']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--color-primary)'
    }
  }, bico(ic)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, t)))), /*#__PURE__*/React.createElement(BCallout, {
    tone: "info",
    icon: bico('phone'),
    title: "Prefer to call?"
  }, "Appointments line: 07737 228 164 \u2014 WhatsApp available."))));
}
Object.assign(window, {
  BookingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice-website/BookingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice-website/FeesScreen.jsx
try { (() => {
// Fees screen
const NS_f = window.HanBinLeeOphthalmologyDesignSystem_17f2f2;
const {
  SegmentedControl: FSeg,
  Card: FCard,
  Callout: FCallout,
  Button: FBtn,
  Badge: FBadge
} = NS_f;
const fico = n => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n
});
const FEE_LOCATIONS = [{
  name: 'Parkside Suite, Frimley',
  address: 'Frimley Park Hospital, Portsmouth Rd, Camberley GU16 7UJ',
  rows: [['First consultation', '£250'], ['Follow-up consultation', '£175'], ['YAG laser capsulotomy', 'On request']]
}, {
  name: 'Benenden Hospital',
  address: 'Goddards Green Rd, Cranbrook TN17 4AX',
  rows: [['First consultation', '£250'], ['Follow-up consultation', '£175'], ['Cataract surgery', 'On request']]
}];
function FeeCard({
  loc
}) {
  return /*#__PURE__*/React.createElement(FCard, {
    variant: "elevated",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, loc.name), /*#__PURE__*/React.createElement("a", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--color-primary)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, fico('map-pin'), " Map")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-subtle)',
      margin: '0 0 16px'
    }
  }, loc.address), /*#__PURE__*/React.createElement("div", null, loc.rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '12px 0',
      borderTop: i === 0 ? '1px solid var(--border-subtle)' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--color-primary-strong)'
    }
  }, v)))));
}
function FeesScreen({
  go
}) {
  const [mode, setMode] = React.useState('Self-pay');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-mist)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      padding: '56px 40px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Transparent Pricing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-4xl)',
      margin: '0 0 12px',
      color: 'var(--text-strong)'
    }
  }, "Consultation & surgery fees"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      maxWidth: 520,
      margin: '0 auto'
    }
  }, "Quick, direct access to treatment \u2014 no private insurance or GP referral required for self-pay patients.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(FSeg, {
    options: ['Self-pay', 'Insured'],
    value: mode,
    onChange: setMode
  })), mode === 'Self-pay' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, FEE_LOCATIONS.map(l => /*#__PURE__*/React.createElement(FeeCard, {
    key: l.name,
    loc: l
  }))) : /*#__PURE__*/React.createElement(FCard, {
    variant: "elevated",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(FBadge, {
    tone: "primary",
    dot: true,
    style: {
      marginBottom: 14
    }
  }, "Registered provider"), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: '0 0 10px',
      color: 'var(--text-strong)'
    }
  }, "Insured patients"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      lineHeight: 1.65,
      margin: '0 0 18px'
    }
  }, "I am a registered provider with most major insurance companies. Please ensure you have your authorisation code ready before booking, and let me know if you have any queries."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, ['Bupa', 'AXA Health', 'Aviva', 'Vitality', 'WPA'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-default)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-muted)'
    }
  }, n)))), /*#__PURE__*/React.createElement(FCallout, {
    tone: "info",
    icon: fico('info'),
    title: "Good to know",
    style: {
      marginTop: 24
    }
  }, "Fees cover the consultant's time only. Diagnostic tests, theatre and lens charges are quoted separately before any procedure."), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(FBtn, {
    variant: "primary",
    size: "lg",
    iconLeft: fico('calendar-check'),
    onClick: () => go('booking')
  }, "Book a consultation"))));
}
Object.assign(window, {
  FeesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice-website/FeesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice-website/HomeScreen.jsx
try { (() => {
// Home / landing screen
const NS_h = window.HanBinLeeOphthalmologyDesignSystem_17f2f2;
const {
  Button: HBtn,
  Badge: HBadge,
  Tag: HTag,
  Card: HCard
} = NS_h;
const hico = n => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n
});
const SERVICES = [{
  icon: 'eye',
  title: 'Cataract surgery',
  body: 'Premium lens cataract surgery to restore clear, comfortable vision with rapid recovery.'
}, {
  icon: 'scan-eye',
  title: 'Corneal conditions',
  body: 'Diagnosis and surgical treatment of complex corneal disease, including artificial cornea transplantation.'
}, {
  icon: 'droplet',
  title: 'Dry eye management',
  body: 'Thorough assessment and tailored treatment plans for persistent dry and irritated eyes.'
}, {
  icon: 'zap',
  title: 'YAG laser capsulotomy',
  body: 'Quick, painless laser treatment for clouding that can occur after cataract surgery.'
}];
function Stat({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--color-primary-strong)',
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, label));
}
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--teal-50) 0%, var(--surface-page) 78%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '64px 40px 56px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 16
    }
  }, "Consultant Ophthalmologist \xB7 London & Surrey"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-5xl)',
      lineHeight: 1.05,
      margin: '0 0 20px',
      color: 'var(--text-strong)'
    }
  }, "Clearer vision, expertly restored."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      lineHeight: 1.6,
      margin: '0 0 24px',
      maxWidth: 460
    }
  }, "Miss Han Bin Lee is a consultant ophthalmologist specialising in cataract surgery and complex corneal conditions \u2014 combining digital precision with patient-centred care."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(HTag, null, "Cataract surgery"), /*#__PURE__*/React.createElement(HTag, null, "Corneal conditions"), /*#__PURE__*/React.createElement(HTag, null, "Dry eye"), /*#__PURE__*/React.createElement(HTag, null, "YAG laser")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(HBtn, {
    variant: "primary",
    size: "lg",
    iconLeft: hico('calendar-check'),
    onClick: () => go('booking')
  }, "Book a consultation"), /*#__PURE__*/React.createElement(HBtn, {
    variant: "secondary",
    size: "lg",
    onClick: () => go('profile')
  }, "Meet the consultant"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
      border: '6px solid #fff'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/portrait.jpg",
    alt: "Miss Han Bin Lee",
    style: {
      width: '100%',
      height: 440,
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -18,
      left: -18,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--gold-200)',
      color: 'var(--gold-600)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, hico('award')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)'
    }
  }, "EndoArt\xAE Pioneer"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "First commercial artificial cornea")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '22px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Practising at"), ['Frimley Health NHS', 'Benenden Hospital', 'Parkside Hospital', 'Queen Victoria Hospital'].map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--neutral-500)'
    }
  }, h)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '72px 40px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 600,
      margin: '0 auto 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Specialist Services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, "Focused expertise across the anterior eye")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(HCard, {
    key: s.title,
    variant: "elevated",
    padding: "lg",
    interactive: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--teal-50)',
      color: 'var(--color-primary)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, hico(s.icon)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      margin: '0 0 8px',
      color: 'var(--text-strong)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 1.55
    }
  }, s.body))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '64px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center',
      background: 'var(--surface-tint)',
      borderRadius: 'var(--radius-2xl)',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      height: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/endoart-award.jpg",
    alt: "EndoArt Pioneer award",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 40px 12px 12px'
    }
  }, /*#__PURE__*/React.createElement(HBadge, {
    tone: "accent",
    style: {
      marginBottom: 16
    }
  }, "Recognised distinction"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      margin: '0 0 14px',
      color: 'var(--text-strong)'
    }
  }, "A pioneer in artificial cornea transplantation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      lineHeight: 1.65,
      margin: '0 0 22px'
    }
  }, "Miss Lee performed one of the first commercial transplants using an artificial cornea \u2014 featured by the BBC and Frimley Health NHS Foundation Trust \u2014 translating digital predictive modelling into real surgical outcomes."), /*#__PURE__*/React.createElement(HBtn, {
    variant: "ghost",
    iconRight: hico('arrow-right'),
    onClick: () => go('press')
  }, "Read the coverage")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '56px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      margin: '0 0 8px',
      color: '#fff'
    }
  }, "Ready to see more clearly?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-on-dark-muted)',
      margin: 0
    }
  }, "Direct self-pay access \u2014 no GP referral required. Most major insurers accepted.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(HBtn, {
    variant: "accent",
    size: "lg",
    iconLeft: hico('calendar-check'),
    onClick: () => go('booking')
  }, "Book a consultation"), /*#__PURE__*/React.createElement(HBtn, {
    variant: "secondary",
    size: "lg",
    iconLeft: hico('phone'),
    style: {
      background: 'transparent',
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.4)'
    }
  }, "07737 228 164")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice-website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice-website/PressScreen.jsx
try { (() => {
// Press / media coverage screen
const NS_pr = window.HanBinLeeOphthalmologyDesignSystem_17f2f2;
const {
  Card: PrCard,
  Badge: PrBadge,
  Button: PrBtn,
  SegmentedControl: PrSeg
} = NS_pr;
const prico = n => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n
});
const ARTICLES = [{
  source: 'BBC News',
  tag: 'bbc.co.uk',
  title: 'First commercial transplant using an artificial cornea',
  body: 'National coverage of a landmark procedure restoring sight where donor tissue was not an option.',
  date: 'Featured'
}, {
  source: 'Frimley Health NHS',
  tag: 'fhft.nhs.uk',
  title: 'Frimley Health surgeon pioneers artificial cornea transplant',
  body: 'The trust reports on one of the first EndoArt® artificial cornea transplants performed in commercial practice.',
  date: 'Featured'
}];
function PressScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-mist)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      padding: '56px 40px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "In the Media"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-4xl)',
      margin: '0 0 12px',
      color: 'var(--text-strong)'
    }
  }, "Press & recognition"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)'
    }
  }, "Selected coverage featuring Miss Han Bin Lee.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, ARTICLES.map(a => /*#__PURE__*/React.createElement(PrCard, {
    key: a.source,
    variant: "elevated",
    padding: "lg",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 56,
      height: 56,
      flexShrink: 0,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--teal-50)',
      color: 'var(--color-primary)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, prico('newspaper')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)'
    }
  }, a.source), /*#__PURE__*/React.createElement(PrBadge, {
    tone: "accent",
    size: "sm"
  }, a.date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      margin: '0 0 4px',
      color: 'var(--text-strong)'
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 1.55
    }
  }, a.body)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-subtle)',
      flexShrink: 0
    }
  }, prico('arrow-up-right')))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(PrBtn, {
    variant: "secondary",
    onClick: () => go('home')
  }, "Back to home"))));
}
Object.assign(window, {
  PressScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice-website/PressScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice-website/ProfileScreen.jsx
try { (() => {
// Clinical Profile screen
const NS_p = window.HanBinLeeOphthalmologyDesignSystem_17f2f2;
const {
  Button: PBtn,
  Card: PCard,
  Callout: PCallout,
  Tag: PTag,
  Avatar: PAvatar,
  IconButton: PIconBtn
} = NS_p;
const pico = n => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n
});
const FACTS = [{
  label: 'Specialties',
  value: 'Cataract surgery · Corneal conditions · Dry eye · YAG laser'
}, {
  label: 'NHS base',
  value: 'Frimley Health NHS Foundation Trust'
}, {
  label: 'Private practice',
  value: 'Benenden Hospital · Parkside Hospital'
}, {
  label: 'Qualifications',
  value: 'MBBS, University College London (2012)'
}, {
  label: 'Fellowships',
  value: 'Corneoplastic Unit, Queen Victoria Hospital · Frimley Park Hospital'
}, {
  label: 'Academic',
  value: 'Former Honorary Clinical Lecturer, Brighton & Sussex Medical School'
}];
function ProfileScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-mist)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '52px 40px 72px',
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(PCard, {
    variant: "elevated",
    padding: "lg",
    style: {
      position: 'sticky',
      top: 92
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(PAvatar, {
    size: "xl",
    src: "../../assets/images/portrait.jpg",
    name: "Han Bin Lee",
    ring: true
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: '16px 0 2px',
      color: 'var(--text-strong)'
    }
  }, "Miss Han Bin Lee"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--color-primary)'
    }
  }, "Consultant Ophthalmologist"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 10,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--color-primary)'
    }
  }, pico('check-circle-2')), " Adult & senior care")), /*#__PURE__*/React.createElement(PBtn, {
    variant: "primary",
    fullWidth: true,
    iconLeft: pico('calendar-check'),
    onClick: () => go('booking'),
    style: {
      marginTop: 20
    }
  }, "Book a consultation"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 18,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PIconBtn, {
    label: "Phone",
    variant: "secondary",
    shape: "circle"
  }, pico('phone')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, "Appointments"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-body)'
    }
  }, "07737 228 164"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PIconBtn, {
    label: "WhatsApp",
    variant: "secondary",
    shape: "circle"
  }, pico('message-circle')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, "WhatsApp"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-body)'
    }
  }, "Message the practice"))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Clinical Profile"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-4xl)',
      margin: '0 0 6px',
      color: 'var(--text-strong)'
    }
  }, "Miss Han Bin Lee"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-muted)',
      marginBottom: 24
    }
  }, "Consultant Ophthalmologist"), /*#__PURE__*/React.createElement(PCallout, {
    variant: "quote",
    style: {
      marginBottom: 28
    }
  }, "Advancing surgical excellence through digital integration and precision patient care."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      lineHeight: 1.7,
      marginBottom: 16
    }
  }, "Miss Han Bin Lee is a highly experienced consultant ophthalmologist specialising in cataract surgery and complex corneal conditions. She holds substantive consultant posts at Frimley Health NHS Foundation Trust and Benenden Hospital, where she is dedicated to delivering exceptional, patient-centred eye care."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      lineHeight: 1.7,
      marginBottom: 32
    }
  }, "Her practice is grounded in precision and technological innovation. Recently she has been instrumental in the EndoArt initiative, successfully transitioning digital predictive modelling into practical, operating-room solutions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(PTag, {
    variant: "soft"
  }, "Cataract surgery"), /*#__PURE__*/React.createElement(PTag, {
    variant: "soft"
  }, "Corneal conditions"), /*#__PURE__*/React.createElement(PTag, {
    variant: "soft"
  }, "Dry eye management"), /*#__PURE__*/React.createElement(PTag, {
    variant: "soft"
  }, "YAG laser capsulotomy")), /*#__PURE__*/React.createElement(PCard, {
    variant: "outline",
    padding: "none"
  }, FACTS.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f.label,
    style: {
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      gap: 20,
      padding: '16px 22px',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, f.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)'
    }
  }, f.value)))))));
}
Object.assign(window, {
  ProfileScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice-website/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/practice-website/chrome.jsx
try { (() => {
// Header + Footer chrome for the Han Bin Lee practice website
const NS = window.HanBinLeeOphthalmologyDesignSystem_17f2f2;
const {
  Button,
  IconButton
} = NS;
const ico = n => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n
});
function SiteHeader({
  route,
  go
}) {
  const nav = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'profile',
    label: 'Clinical Profile'
  }, {
    id: 'fees',
    label: 'Fees'
  }, {
    id: 'press',
    label: 'Press'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 40px',
      background: 'rgba(255,255,255,0.86)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/logo-mark.png",
    alt: "",
    style: {
      height: 38,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)',
      letterSpacing: '-0.01em'
    }
  }, "Han Bin Lee"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Consultant Ophthalmologist"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => go(n.id),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: '8px 14px',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: route === n.id ? 'var(--fw-semibold)' : 'var(--fw-regular)',
      color: route === n.id ? 'var(--color-primary-strong)' : 'var(--text-muted)'
    }
  }, n.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: ico('calendar-check'),
    onClick: () => go('booking'),
    style: {
      marginLeft: 10
    }
  }, "Book")));
}
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--text-on-dark)',
      padding: '52px 40px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 40,
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/logo-mark.png",
    alt: "",
    style: {
      height: 40,
      filter: 'saturate(0.2) brightness(1.6)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "Han Bin Lee")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-muted)',
      maxWidth: 320,
      margin: 0,
      fontSize: 'var(--text-sm)'
    }
  }, "Consultant Ophthalmologist specialising in cataract surgery and complex corneal conditions across NHS and private practice.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      marginBottom: 14,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, "Practice"), [['Home', 'home'], ['Clinical Profile', 'profile'], ['Fees', 'fees'], ['Press', 'press'], ['Book a consultation', 'booking']].map(([l, id]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    style: {
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go(id),
    style: {
      color: 'var(--text-on-dark)',
      cursor: 'pointer',
      fontSize: 'var(--text-sm)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      marginBottom: 14,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("div", null, "Appointments: 07737 228 164"), /*#__PURE__*/React.createElement("div", null, "WhatsApp available"), /*#__PURE__*/React.createElement("div", null, "Parkside Suite, Frimley GU16 7UJ")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '36px auto 0',
      paddingTop: 22,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Han Bin Lee. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Frimley Health NHS \xB7 Benenden \xB7 Parkside")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/practice-website/chrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
