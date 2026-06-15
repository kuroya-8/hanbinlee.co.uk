import * as React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text or node */
  label?: React.ReactNode;
  /** Secondary description under the label */
  description?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}

/** Teal checkbox for consent, insurer confirmation, and multi-select options. */
export function Checkbox(props: CheckboxProps): JSX.Element;
