# Changelog

All notable changes to this project are recorded here. Dates are the day the change landed.

## [Unreleased]

### Fixed
- Country flags showed as two letters on Windows, which has no flag emoji. Where a computer cannot draw flags, Brevity now uses a bundled flag font in the picker, the canvas and the subject line, and emoji sent as pictures carry real flags to every reader

## [1.1.0] — 2026-11-17

### Added
- Emoji in the Add tab: the full Unicode emoji list (through Emoji 17.0) by category, with a dropdown to switch categories and a search box. Picking one puts it at the cursor in the email or the subject line
- Skin-tone swatches for the emoji picker, remembered per browser
- Emoji this device cannot draw are dimmed in the picker
- "Send emoji as pictures" in Check and export, off by default: emoji in the body are embedded as small images so they look the same on every device
- Checklist warnings for flags and emoji newer than 2022 in the subject line, and in the body when they are sent as text
- Text colour and highlight for selected words. Swatches follow the palette, so changing palettes recolours them; a custom colour stays as picked
- Strikethrough, bulleted and numbered lists, and a Clear button that removes formatting from the selected words
- Drafts: several emails in progress at once, with New, Open, Duplicate and Delete. A 1.0 draft becomes the first in the list
- Save an email as a `.brevity` file, photos included, and open it on another computer or send it to a colleague. Opened files are checked field by field, so they cannot carry script
- Event block with a date badge and Add to calendar links for Google Calendar and Outlook, carrying the sender's time zone
- Table block with a heading row and shading; paste cells from a spreadsheet to fill it
- Two-column block, text and text or photo and text, side by side on a computer and stacked on a phone
- Link row block: simple icons for a website, email, phone, map, calendar, video, document or message
- Reusable sections: save any block, such as a school footer, and add it to any email
- Dark mode preview of how Gmail's phone apps may recolour the email
- Photo quality setting (Sharp or Smaller, about half the weight) and the heaviest blocks listed in Check and export
- Print or save as PDF
- Checklist rules for heavy emails, hard-to-read coloured words, links that say "click here", and very long paragraphs

### Fixed
- Button shape Square showed pill-shaped buttons
- Page corners Square left wide photos and callout boxes rounded; they now follow the setting
- Emoji search missed names with capitals or accents, such as country flags; it now ignores case and accents and knows common alternative country names
- Download .html only appeared in some browsers; it now works everywhere

## [1.0.0] — 2026-11-16

First public release.

### Added
- Fourteen block types, edited in place on the canvas, with drag reordering, keyboard shortcuts and full undo and redo
- Circular photo framing baked into the image, with plain, ring, double ring and halo frames, drag to reposition and zoom
- Photo rows built automatically when several images are dropped together
- Header logos, placed above or beside the name, with transparent PNGs preserved
- Six header styles: colour band, soft band, underline, masthead, split and badge
- Signatures, drawn with smoothing and speed-based line weight, or typed in one of four handwriting styles
- Eighteen colour palettes, plus main, second and background colours set by hand
- Twenty-one starter layouts, including nine written for schools
- Saved layouts, stored with their photos, and reset back to the original of whichever layout a draft started from
- Pre-send checklist and a size meter against Gmail's 102 KB clipping threshold
- Export by copying for Gmail, copying HTML, downloading an `.html` file, or copying plain text
- Autosave to IndexedDB, phone-width preview, and a light and dark interface

### Fixed
- Palettes using Georgia, Trebuchet or Courier lost their font sizes, weights and alignment in the exported email, caused by quoting in the font stacks

### Removed
- Complementary colour suggestions in the Style tab, in favour of setting the three colours directly
