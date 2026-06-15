import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** @default 'elevated' */
  variant?: 'elevated' | 'outline' | 'soft' | 'tint';
  /** Inner padding. @default 'md' */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift + deepen shadow on hover */
  interactive?: boolean;
  /** Element tag to render. @default 'div' */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/**
 * Surface container for fee panels, service cards, and content blocks.
 * Soft teal-tinted elevation; `interactive` adds a hover lift for clickable cards.
 *
 * @startingPoint section="Core" subtitle="Card surfaces — elevated, outline, tint" viewport="700x220"
 */
export function Card(props: CardProps): JSX.Element;
