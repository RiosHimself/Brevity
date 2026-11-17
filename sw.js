/* Brevity's offline helper (a service worker).

   Only used when Brevity is served from a website such as GitHub Pages, where
   it lets the installed app open with no connection. index.html never depends
   on it: opened straight from disk, Brevity is still the single file.

   - The page itself: network first, so a new version arrives as soon as you
     are online, with the last copy kept for when you are not.
   - Icons, the manifest and the Google Fonts the interface uses: cached the
     first time they load, then served from the cache.

   Nothing you write passes through here. Drafts live in the browser's
   IndexedDB, and this file only ever stores the app's own files.
   Change VERSION to make every phone drop its old copies. */
const VERSION = 'brevity-v2';
const APP = ['./', './manifest.webmanifest', './icons/icon.svg', './icons/favicon-32.png', './icons/icon-192.png',
  './icons/icon-512.png', './icons/maskable-192.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(APP)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (req.mode === 'navigate') {
    e.respondWith(fetch(req)
      .then(res => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put('./', copy)); } return res; })
      .catch(() => caches.match('./', { ignoreSearch: true })));
    return;
  }

  if (url.origin === self.location.origin || FONT_HOSTS.includes(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    })));
  }
});
