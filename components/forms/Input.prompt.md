**Input** — labelled text field with icon, hint and error support.

```jsx
<Input label="Email" type="email" required hint="We'll confirm your booking here" />
<Input label="Authorisation code" error="Code not recognised" />
```

`iconLeft`/`iconRight` take icon nodes; `error` turns the field red and replaces `hint`; sizes `sm|md|lg`.
