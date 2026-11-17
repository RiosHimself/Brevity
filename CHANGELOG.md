# Changelog

All notable changes to this project are recorded here. Dates are the day the change landed.

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
