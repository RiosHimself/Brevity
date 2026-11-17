# Brevity

**Less clutter. Better newsletters.**

A browser-based builder for HTML emails that survive Gmail. Compose with blocks, frame photos in circles, pick a palette, sign your name, then copy the whole thing into a Gmail compose window and send.

It is one HTML file. No build step, no dependencies to install, no server, no account. Open it and start writing.

---

## Why it exists

Email clients are not browsers. Gmail strips `<style>` blocks, ignores `border-radius`, drops flexbox and grid, and silently clips any message whose markup passes about 102 KB. Most "modern" email built in a normal editor arrives looking broken.

Brevity works inside those limits instead of around them:

- **Tables and inline styles only.** No stylesheet reaches the message.
- **Web-safe font stacks only,** so the recipient sees the typeface you chose.
- **Photo frames are baked into the pixels.** A circular portrait is drawn onto a canvas and embedded as an image, because a CSS circle would arrive square.
- **One renderer.** The editing canvas and the exported email come from the same function, so the preview is the email rather than an approximation of it.

## Features

**Composing**
- Eighteen block types: header, heading, text, two columns, round photo, photo row, photo with text, wide photo, event, table, button, link row, quote, callout, signature, divider, spacer, footer
- **Event** blocks show a date badge with Add to calendar links for Google Calendar and Outlook
- **Tables** for menus and schedules: paste cells straight from a spreadsheet
- **Two columns** sit side by side on a computer and stack on a phone
- Edit text directly on the canvas, with bold, italic, underline, strikethrough, links, bulleted and numbered lists, and text colour and highlight that follow the palette
- Drag blocks to reorder, or use the keyboard (`Alt+↑` / `Alt+↓`, `Ctrl+D` to duplicate, `Delete` to remove)
- Undo and redo across everything, including palette changes and photo moves
- Emoji from the Unicode list, browsed by category from a dropdown or searched by name, in any skin tone, dropped in at the cursor

**Photos**
- Drop files anywhere, paste from the clipboard, or pick them
- Circular frames: plain, ring, double ring, halo
- Drag a photo inside its frame to reposition it, and zoom in
- Drop two to four photos at once to get a row of framed faces
- Logos in the header, above or beside the name, with transparent PNGs kept transparent

**Signatures**
- Draw with a mouse, finger or stylus. Strokes are smoothed as you write and settled when you lift the pen; the line thins as you move faster, and stylus pressure is used where available
- Or type your name in one of four handwriting styles
- Either way the result is rasterized, so the recipient needs no fonts

**Style**
- Eighteen palettes, including dark ones and three with a built-in second colour
- Set main colour, second colour and background by hand
- Page corners, button shape and spacing

**Layouts**
- Twenty-one starters, split into general use and school use, written as working drafts rather than lorem ipsum
- Save your own email as a reusable layout, photos included
- Reset back to the original of whichever layout you started from
- Save any single block as a reusable section, such as a school footer

**Before you send**
- A checklist for the expensive mistakes: no subject line, placeholder photos, missing alt text, unsigned signature blocks, buttons with no link, past event dates, heavy photos, hard-to-read colours, links that say "click here" and very long paragraphs
- A dark mode preview of how Gmail's phone apps may recolour the email
- Photo quality: Sharp, or Smaller at about half the weight
- A size meter against Gmail's 102 KB clipping threshold
- Optionally send emoji as small pictures, so flags and the newest emoji look right on older phones and on Windows
- Copy for Gmail, copy raw HTML, download an `.html` file, copy a plain-text version, or print and save as PDF

**Quality of life**
- Several drafts at once, autosaved to IndexedDB, so a reload loses nothing
- Save an email as a `.brevity` file, photos included, to move it between computers or share it with a colleague
- Phone-width preview
- Light and dark interface, following the system setting
- Works on a phone, with panels switched by a bottom tab bar

## Using it

Open `index.html` in any modern browser. That is the whole installation.

To send:

1. Select **Copy for Gmail**.
2. Open a new message in Gmail and click into the body.
3. Paste with `Ctrl+V` or `⌘V`. Photos travel inside the message.
4. **Send yourself a test first.** Always.

### Hosting it

Any static host works. For GitHub Pages: push this repository, then under **Settings → Pages** choose **Deploy from a branch**, branch `main`, folder `/ (root)`. The app will be live at `https://<user>.github.io/<repo>/`.

## Privacy

Nothing leaves the browser. There is no server, no analytics and no network request except the webfonts loaded from Google Fonts for the interface and the handwriting styles. Drafts, photos and saved layouts live in your own browser's IndexedDB; clearing site data deletes them.

## Limitations worth knowing

- **Photos are embedded as data URIs,** which keeps the email self-contained but counts against Gmail's 25 MB message limit. A newsletter service such as Mailchimp wants photos hosted online instead.
- **Outlook on Windows** uses the Word rendering engine and will square off some rounded corners. Circular photos survive because they are baked images.
- **No mail merge, no sending.** Brevity composes; your mail client sends.
- **Flags on Windows.** Windows has no flag emoji, so Windows readers see two letters for a flag sent as text. Turn on **Send emoji as pictures** in Check and export to send real flags. A flag in the subject line stays text.
- **Dark mode in mail clients** may recolour parts of the message. Test if your recipients are likely to read in dark mode.
- **Drafts, saved layouts and sections are per browser.** They do not sync between devices; save a `.brevity` file to move an email.
- **Add to calendar** covers Google Calendar and Outlook. Apple Calendar needs an `.ics` file, which an email body cannot carry; Apple Mail offers to add dates it finds in the text.
- **Emoji are drawn by the recipient's device** unless you send them as pictures. Pictures are made with your own device's emoji font, so an emoji your device cannot draw (dimmed in the picker; on Windows that includes flags) stays as text. The subject line is always text.

## How the code is organised

One file, around 2,100 lines, commented throughout.

| Part | What it does |
| --- | --- |
| `doc` | The entire email: subject, preheader, palette choices, and an ordered array of block objects. The only state. |
| `rb()` | Renders one block to email HTML. Feeds both the canvas and the export; an `ed` flag adds the editing hooks. |
| `bake()` | Draws a photo into a canvas with its crop, frame and circle, and returns a data URI. |
| `theme()` | Resolves the active palette, user overrides included, and derives readable text colours. |
| `STARTS` | Starter layouts, each a function returning a complete document. |
| `checks()` | The pre-send checklist; `readability()` adds the contrast, link wording and paragraph rules. |
| `saveNow()`, `openDraft()` | Drafts in IndexedDB, one key per email. |
| `openBrevity()`, `sanDoc()` | Opening a `.brevity` file, checking every field before anything is rendered. |
| `buildEmail()` | Wraps the blocks in the outer table structure Gmail expects. |

The DOM is always a rendering of `doc` and is rebuilt wholesale on change, which removes a class of bugs where the model and the view disagree.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The short version: keep it one file with no build step, and test anything you change by actually pasting it into Gmail.

## Licence

MIT. See [LICENSE](LICENSE).

Country flag artwork on Windows comes from [Twemoji](https://github.com/twitter/twemoji) by Twitter, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), via the "Twemoji Country Flags" font from TalkJS's [country-flag-emoji-polyfill](https://github.com/talkjs/country-flag-emoji-polyfill) (MIT). The font is embedded unchanged in `index.html` and is only used where the computer cannot draw flags itself.
