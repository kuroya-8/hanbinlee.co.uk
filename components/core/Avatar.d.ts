import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL; falls back to initials from `name` */
  src?: string;
  /** Full name — used for initials and alt text */
  name?: string;
  /** @default 'md' */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Teal focus ring */
  ring?: boolean;
}

/**
 * Circular avatar for the consultant, staff, or patient — photo or initials fallback.
 */
export function Avatar(props: AvatarProps): JSX.Element;
