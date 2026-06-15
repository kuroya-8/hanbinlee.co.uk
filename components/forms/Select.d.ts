import * as React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  /** String values or {value,label} objects */
  options?: Array<string | SelectOption>;
  /** Disabled placeholder option shown first */
  placeholder?: string;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  required?: boolean;
}

/** Styled native select for hospital location, insurer, or appointment type. */
export function Select(props: SelectProps): JSX.Element;
