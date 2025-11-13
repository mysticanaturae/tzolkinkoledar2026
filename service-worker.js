const CACHE_NAME = 'tzolkin-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',  // če imaš zunanjo css datoteko
  './icon-192.png',
  './icon-512.png',
  // Tukaj dodaj še vse slike iz tvojega tzolkinSignImages in tzolkinNumberImages
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
