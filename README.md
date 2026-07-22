# HomeFuel — marketing site

Static site, no build step. Three files: `index.html`, `styles.css`, `script.js`.

## Run locally
Just open `index.html` in a browser, or:

```bash
cd website && python3 -m http.server 8080
```

## Deploy (free options)
- **Cloudflare Pages / Vercel / Netlify** — drag the `website/` folder in, done.
- **GitHub Pages** — push the folder to a repo, enable Pages on the root.

## At launch — two edits
1. **App Store link:** search `index.html` for `TODO: replace href` (2 places — hero + download section) and paste the real App Store URL.
2. Change both badges' small text from "Coming soon on the" to "Download on the" — and consider swapping the drawn badge for Apple's official artwork from [Apple Marketing Tools](https://tools.applemediaservices.com/app-store).

## Android
The Android badge is intentionally a non-clickable "IN DEVELOPMENT" chip.
When the Android app ships: make it an `<a>`, add the Play Store URL, and
swap the chip for Google's official badge.

## Design source
Colors, type, rings and card language mirror the iOS app's design system
(`DesignSystem/Theme.swift`, `KGFuelRings.swift`) — if the app's palette
changes, update the `:root` tokens at the top of `styles.css`.
# homefuelSite
