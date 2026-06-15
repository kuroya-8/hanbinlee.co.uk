import * as React from 'react';

export interface SegmentOption { value: string; label: string; icon?: React.ReactNode; }

export interface SegmentedControlProps {
  /** Strings or {value,label,icon} objects */
  options: Array<string | SegmentOption>;
  /** Controlled selected value */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Stretch segments to fill width */
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

/**
 * Pill toggle — the practice's signature control for Self-pay vs Insured fees
 * and switching press sources. White active pill on a neutral track.
 */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
