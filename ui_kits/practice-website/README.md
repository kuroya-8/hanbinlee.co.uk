# Practice Website — UI Kit

An interactive, click-through recreation of the Han Bin Lee consultant ophthalmology website, composed entirely from the design-system primitives.

## Run it
Open `index.html`. It loads `../../styles.css` (tokens) and `../../_ds_bundle.js` (components via `window.HanBinLeeOphthalmologyDesignSystem_17f2f2`), plus Lucide icons from CDN.

## Screens
| File | Screen | Highlights |
|------|--------|-----------|
| `HomeScreen.jsx` | Landing | Split hero + portrait, EndoArt pioneer badge, trust strip, services grid, distinction feature, teal CTA band |
| `ProfileScreen.jsx` | Clinical profile | Sticky sidebar contact card, mission quote, specialty tags, qualifications table |
| `FeesScreen.jsx` | Fees | Self-pay / Insured `SegmentedControl`, per-location fee cards, insurer chips |
| `BookingScreen.jsx` | Booking | Full enquiry form (conditional insurer field), summary aside, success state |
| `PressScreen.jsx` | Press | BBC + NHS coverage cards |
| `chrome.jsx` | Header + Footer | Sticky blurred nav, logo lockup, dark footer |

`index.html` holds the route state and swaps screens; navigation is fully interactive (book flow, fee toggle, form submission).

## Components used
Button, IconButton, Badge, Tag, Avatar, Card, Input, Textarea, Select, Checkbox, SegmentedControl, Callout — no primitives are re-implemented here.

## Notes
- Content is real (specialties, fees, locations, press) drawn from the source site; insurer names and a second fee location are representative placeholders.
- Icons are Lucide (see root readme → Iconography).
