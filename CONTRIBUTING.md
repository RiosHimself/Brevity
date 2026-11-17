# Contributing to Brevity

Thanks for looking. A few ground rules keep this project usable.

## The constraints

1. **One file, no build step.** `index.html` must open and run straight from disk. No bundler, no package manager, no transpiler. If a change needs tooling to run, it does not belong here. The only other files are `manifest.webmanifest`, `sw.js` and `icons/`, which let the hosted copy install as an app; `index.html` must never depend on them. If you add a file the app loads, list it in `APP` in `sw.js` and bump `VERSION`.
2. **No runtime dependencies** beyond the Google Fonts link for the interface and the handwriting styles. No frameworks, no CDN libraries.
3. **The email output is the product.** Anything rendered into a message must use tables, inline styles and web-safe fonts. No `<style>` block, no flexbox, no grid, no `border-radius` that matters, no external image URLs.
4. **One renderer.** `rb()` produces both the canvas and the export. Resist adding a separate export path; they drift apart within a release.
5. **Nothing leaves the browser.** No analytics, no telemetry, no uploads.

## Testing a change

There is no test suite. There is Gmail, which is the only opinion that counts.

Before opening a pull request:

- Open `index.html` and exercise the feature you touched.
- Build an email that uses it, select **Copy for Gmail**, paste into a real Gmail compose window, and send it to yourself.
- Read that email on a phone as well as a desktop.
- Check the interface in both light and dark mode, and at a phone width (under 920px, where the layout collapses to one pane).
- Check the size meter in **Check and export** if your change adds markup.

Say in the pull request which clients you tested in. "Gmail web and Gmail iOS" is a useful sentence; "looks fine" is not.

## Style

- Match the surrounding code. It is dense in places on purpose: the whole app ships as one file.
- Comment **why**, not what. The existing comments explain email-client constraints and non-obvious decisions; keep that bar.
- Interface strings are plain English, no exclamation marks, no jargon. Error and toast messages should say what to do next.
- Alt text, labels and keyboard access are not optional extras. Every control needs a reachable name.

## Good first contributions

- New starter layouts, written as real working drafts rather than placeholder text
- Additional palettes, checked for text contrast against their own background
- Client-specific rendering fixes, with a note on which client needed it
- Checklist rules for mistakes that are expensive after sending

## Reporting a bug

Say what you did, what the email looked like, and **which mail client and device** showed the problem. A screenshot of the received message helps more than a screenshot of the editor.
