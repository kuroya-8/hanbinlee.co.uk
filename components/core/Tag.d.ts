import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'soft' */
  variant?: 'soft' | 'outline' | 'neutral';
  /** Optional leading icon node */
  iconLeft?: React.ReactNode;
  /** When provided, renders a removable × button */
  onRemove?: () => void;
  children?: React.ReactNode;
}

/**
 * Pill tag for specialties, conditions treated, and filters
 * (e.g. "Cataract surgery", "Corneal", "Dry eye").
 */
export function Tag(props: TagProps): JSX.Element;
