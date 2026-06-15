**Button** — the primary action control; petrol-teal fill with soft elevation, used for booking, submitting, and key navigation.

```jsx
<Button variant="primary" size="md" onClick={book}>Book a consultation</Button>
```

Variants: `primary` (teal fill, default), `secondary` (teal outline on white), `ghost` (text-only teal), `subtle` (neutral fill), `accent` (gold — distinctions/awards only, used sparingly), `danger` (cancel/remove).
Sizes: `sm` 36px · `md` 44px · `lg` 52px. Pass `iconLeft` / `iconRight` a Lucide icon node, `fullWidth` to stretch, `href` to render as a link.
