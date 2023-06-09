self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          '/IMAGES/aktiv.png',
          '/IMAGES/aktiv.webp',
          '/IMAGES/ekstrem.png',
          '/IMAGES/ekstrem.webp',
          '/IMAGES/senior.png',
          '/IMAGES/senior.webp',
          '/IMAGES/sensitiv.png',
          '/IMAGES/sensitiv.webp',
          '/IMAGES/valp.png',
          '/IMAGES/valp.webp',
          '/IMAGES/vektkontroll.png',
          '/IMAGES/vektkontroll.webp',
          '/IMAGES/voksen.png',
          '/IMAGES/voksen.webp',
          '/IMAGES/FK.svg',
          '/IMAGES/left-arrow.png',
          '/IMAGES/Logo-Labb.png',
          '/JSON/foodTypes.JSON',
          '/JSON/profiles.JSON',
          '/FONTS/Ultramagnetic_Bold.tff',
          // Add other files and assets you want to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  