**SegmentedControl** — the practice's signature pill toggle (Self-pay / Insured fees, press sources).

```jsx
<SegmentedControl options={['Self-pay fees', 'Insured fees']}
  defaultValue="Self-pay fees" onChange={setMode} />
```

White active pill on a neutral track. Controlled (`value`+`onChange`) or uncontrolled (`defaultValue`). `fullWidth` stretches segments; options may carry an `icon`.
