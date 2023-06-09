const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
          'IMAGES/aktiv.png',
          'IMAGES/aktiv.webp',
          'IMAGES/ekstrem.png',
          'IMAGES/ekstrem.webp',
          'IMAGES/senior.png',
          'IMAGES/senior.webp',
          'IMAGES/sensitiv.png',
          'IMAGES/sensitiv.webp',
          'IMAGES/valp.png',
          'IMAGES/valp.webp',
          'IMAGES/vektkontroll.png',
          'IMAGES/vektkontroll.webp',
          'IMAGES/voksen.png',
          'IMAGES/voksen.webp',
          'IMAGES/FK.svg',
          'IMAGES/left-arrow.png',
          'IMAGES/Logo-Labb.png',
          'JSON/foodTypes.JSON',
          'JSON/profiles.JSON',
          'FONTS/ultramagneticbold.ttf',
          // Add other files and assets you want to cache
        ])
    );
  });
  
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});