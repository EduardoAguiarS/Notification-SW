console.log('Service Worker Loaded...');

self.addEventListener('push', event => {
  const body = event.data?.text() ?? 'Push Notification';
  event.waitUntil(
    self.registration.showNotification('Push Notification', {
      body,
    })
  );
});