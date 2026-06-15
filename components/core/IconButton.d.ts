import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default 'ghost' */
  variant?: 'primary' | 'secondary' | 'ghost' | 'subtle';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** @default 'square' */
  shape?: 'square' | 'circle';
  /** Accessible label (also used as title tooltip) */
  label: string;
  disabled?: boolean;
  /** Icon node (e.g. a Lucide SVG) */
  children?: React.ReactNode;
}

/**
 * Square or circular icon-only button — toolbar actions, close, menu, social.
 * Always pass `label` for accessibility.
 */
export function IconButton(props: IconButtonProps): JSX.Element;
