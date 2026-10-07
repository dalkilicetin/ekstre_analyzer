// Ekstre Analiz – çevrimdışı önbellek.
// index.html'i ya da başka bir dosyayı güncellediğinde aşağıdaki sürümü bir artır (v2, v3...).
const VERSION = 'ekstre-v1';
const FILES = [
  './',
  'index.html',
  'manifest.json',
  'pdf.min.js',
  'pdf.worker.min.js',
  'xlsx.full.min.js',
  'icon-180.png',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Önce önbellek: sayfa hiç internete gitmeden açılır.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => {
      if (hit) return hit;
      if (e.request.mode === 'navigate') return caches.match('index.html');
      return fetch(e.request);
    })
  );
});
