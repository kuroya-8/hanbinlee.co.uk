import * as React from 'react';

export interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Allow multiple panels open at once. @default false */
  allowMultiple?: boolean;
  /** Indices open on first render */
  defaultOpen?: number[];
}

/** Expandable list for FAQs, fee breakdowns, and pre/post-operative guidance. */
export function Accordion(props: AccordionProps): JSX.Element;
