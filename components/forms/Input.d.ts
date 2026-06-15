import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label */
  label?: string;
  /** Helper text under the field */
  hint?: string;
  /** Error message — turns the field red and replaces the hint */
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  required?: boolean;
  disabled?: boolean;
}

/**
 * Labelled text field with optional icons, hint and error states —
 * patient name, email, phone, authorisation code, search.
 */
export function Input(props: InputProps): JSX.Element;
