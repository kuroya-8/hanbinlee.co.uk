import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** @default 4 */
  rows?: number;
  required?: boolean;
}

/** Multi-line field for the reason for referral, symptoms, or message to the practice. */
export function Textarea(props: TextareaProps): JSX.Element;
