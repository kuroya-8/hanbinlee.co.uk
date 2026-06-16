# Han Bin Lee — Practice Website (Jekyll)

A static, GitHub-Pages-ready Jekyll site for the practice of **Miss Han Bin Lee, Consultant Ophthalmologist**, built on the Han Bin Lee Ophthalmology Design System (petrol-teal + gold, Source Sans Pro). No client-side framework — plain HTML, Liquid templates and compiled SCSS, with a little progressive-enhancement JS.

## Pages
| URL | File | |
|-----|------|--|
| `/` | `index.html` | Home — hero, services, EndoArt feature, CTA |
| `/clinical-profile/` | `clinical-profile.html` | Bio, qualifications, contact card |
| `/fees/` | `fees.html` | Self-pay / Insured toggle, fee cards |
| `/booking/` | `booking.html` | Appointment request form |
| `/press/` | `press.html` | Media coverage |

## Run locally
```bash
cd site
bundle install
bundle exec jekyll serve
# → http://127.0.0.1:4000
```

## Deploy to GitHub Pages
Push the **contents of this `site/` folder** to a repo (so `_config.yml` is at the repo root), then either:

- **GitHub Actions (recommended):** repo → *Settings → Pages → Source: GitHub Actions*. The included `.github/workflows/jekyll.yml` builds and deploys on every push to `main`.
- **Branch build:** *Settings → Pages → Source: Deploy from a branch → `main` / (root)*. This site is plugin-free, so GitHub's native Jekyll build works with no workflow.

### Project vs user/custom-domain sites
If the site is served from a subpath (`https://<user>.github.io/<repo>/`), set `baseurl: "/<repo>"` in `_config.yml`. For a custom domain or `<user>.github.io` root, leave `baseurl: ""` and set `url:` to your domain. The Actions workflow passes the correct `--baseurl` automatically. All internal links use `relative_url`, so they resolve correctly either way.

## Editing content
- **Practice details** (phone, locations, nav) live in `_config.yml` under `practice:` and `nav:` — edit once, used everywhere.
- **Page copy** is in each page's HTML.
- **Booking form** currently shows a JS success message and does not send anything. To collect real submissions, wire the `<form>` to a backend such as [Formspree](https://formspree.io): add `action="https://formspree.io/f/XXXX" method="POST"`, give each field a `name`, and remove the `data-booking-form` attribute (and its handler in `assets/js/site.js`).

## Structure
```
site/
├─ _config.yml            site + practice settings
├─ Gemfile                github-pages gem
├─ _layouts/default.html  page shell (head, header, footer, scripts)
├─ _includes/             header.html, footer.html
├─ _sass/                 _tokens, _base, _components, _layout
├─ assets/
│  ├─ css/main.scss       imports the partials + @font-face
│  ├─ js/site.js          nav, fee toggle, booking form
│  ├─ fonts/              Source Sans Pro (woff2)
│  └─ images/             logo, portrait, photography, favicon
├─ index.html  clinical-profile.html  fees.html  booking.html  press.html
└─ .github/workflows/jekyll.yml
```

## Notes
- Icons: [Lucide](https://lucide.dev) via CDN. Intermediate font weights come from Google's *Source Sans 3*; 400/700 + italics are bundled locally.
- Content (fees, locations, press) is drawn from the original practice site; the second fee location and insurer list are representative placeholders — confirm before going live.
