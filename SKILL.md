---
name: hanbinlee-design
description: Use this skill to generate well-branded interfaces and assets for the Han Bin Lee consultant ophthalmology practice, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick orientation:
- `styles.css` is the single entry point — link it and everything else (tokens, fonts, base) comes with it.
- Design language: petrol-teal (`--color-primary` #007A87) + sparing gold accent on a cool clinical slate, Source Sans Pro, soft 16px-radius cards, quiet diffuse shadows, clean modern medical tone. Full guidance in `readme.md` (Content Fundamentals, Visual Foundations, Iconography).
- Components live under `components/` and compile to `window.HanBinLeeOphthalmologyDesignSystem_17f2f2` via `_ds_bundle.js`. Icons are Lucide (CDN). Never use emoji.
- A full interactive product recreation is in `ui_kits/practice-website/`.
- Brand assets (logo, eye mark, photography, fonts) are in `assets/`.
