import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost' | 'subtle' | 'accent' | 'danger';
  /** Control height / padding. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Icon node rendered before the label */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label */
  iconRight?: React.ReactNode;
  /** Stretch to fill the container width */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as an anchor when set */
  href?: string;
  children?: React.ReactNode;
}

/**
 * Primary call-to-action button for the Han Bin Lee practice system.
 * Petrol-teal fill with soft elevation; secondary/ghost for lower emphasis,
 * accent (gold) reserved for distinctions, danger for destructive actions.
 *
 * @startingPoint section="Core" subtitle="Buttons — primary, secondary, ghost, accent" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
