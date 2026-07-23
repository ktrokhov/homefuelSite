# HomeFuel — marketing site

Static site, no build step. The home page is `index.html`; the legal pages are
`privacy.html` and `terms.html`.

## Run locally
Just open `index.html` in a browser, or:

```bash
cd website && python3 -m http.server 8080
```

## Deploy (free options)
- **Cloudflare Pages / Vercel / Netlify** — drag the `website/` folder in, done.
- **GitHub Pages** — push the folder to a repo, enable Pages on the root.

## App Store
Both download calls to action use Apple's official badge artwork and link to the
HomeFuel product page on the App Store.

## Legal pages
- `privacy.html` — browser-readable Privacy Policy with a PDF download
- `terms.html` — browser-readable Terms & Conditions with a PDF download
- `assets/legal/` — downloadable PDF copies

## Android
The Android badge is intentionally a non-clickable "IN DEVELOPMENT" chip.
When the Android app ships: make it an `<a>`, add the Play Store URL, and
swap the chip for Google's official badge.

## Design source
Colors, type, rings and card language mirror the iOS app's design system
(`DesignSystem/Theme.swift`, `KGFuelRings.swift`) — if the app's palette
changes, update the `:root` tokens at the top of `styles.css`.
# homefuelSite
