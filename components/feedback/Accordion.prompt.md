**Accordion** — expandable list for FAQs, fee breakdowns, and pre/post-op guidance.

```jsx
<Accordion defaultOpen={[0]} items={[
  { title: 'Do I need a GP referral?', content: 'Not for self-pay consultations.' },
  { title: 'Which insurers do you accept?', content: 'Most major UK insurers.' },
]} />
```

`allowMultiple` keeps several panels open; `defaultOpen` lists initially-open indices.
