**Select** — styled native dropdown for location, insurer, or appointment type.

```jsx
<Select label="Preferred location" placeholder="Choose a clinic"
  options={['Parkside Suite, Frimley', 'Benenden Hospital', 'Parkside Hospital']} />
```

`options` accepts strings or `{value,label}`; `placeholder` adds a disabled first option. Same hint/error API as Input.
