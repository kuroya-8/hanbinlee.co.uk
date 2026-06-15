import * as React from 'react';

export interface CalloutProps extends React.HTMLAttributes<HTMLElement> {
  /** Colour tone for the block variant. @default 'info' */
  tone?: 'info' | 'success' | 'warning' | 'danger';
  /** 'block' = tinted notice; 'quote' = italic teal-bar pull quote. @default 'block' */
  variant?: 'block' | 'quote';
  /** Bold heading (block variant) */
  title?: string;
  /** Leading icon node (block variant) */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Tinted notice block or italic pull quote.
 * The `quote` variant reproduces the practice's signature teal-bar mission quote;
 * `block` is for insurer notes, pre-op guidance, and confirmations.
 */
export function Callout(props: CalloutProps): JSX.Element;
