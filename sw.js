self.addEventListener('push', event => {
  const body = event.data?.text() ?? 'Push Notification';
  event.waitUntil(
    self.registration.showNotification('Push Notification', {
      body,
    })
  );
});

let staticCacheName = 'push-notification-v1';
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll([
        '/',
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  )
});