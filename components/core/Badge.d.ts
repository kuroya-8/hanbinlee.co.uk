import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colour tone. @default 'neutral' */
  tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'accent';
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Leading status dot */
  dot?: boolean;
  /** Solid fill instead of soft tint */
  solid?: boolean;
  children?: React.ReactNode;
}

/**
 * Small status pill — appointment state, insurer acceptance, "Pioneer" marks.
 * Soft tint by default; use `solid` for high emphasis, `accent` (gold) for distinctions.
 */
export function Badge(props: BadgeProps): JSX.Element;
