self.addEventListener('fetch', function(event) {
  // TODO: respond with an entry from the cache if there is one.
  // If there isn't, fetch from the network.
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  )
});