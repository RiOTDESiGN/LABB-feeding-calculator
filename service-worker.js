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
          'IMAGES/Logo-Labb-App.png',
          'JSON/foodTypes.JSON',
          'JSON/profiles.JSON',
          'FONTS/ultramagneticbold.ttf',
          '/manifest.json',
          '/script.js',
          '/styles.css',
          '/index.html',
          '/android-chrome-144x144.png',
          '/apple-touch-icon.png',
          '/browserconfig.xml',
          'IMAGES/favicon-16x16.png',
          'https://erik-r-u-kodehode.github.io/Puppy-Feeder/favicon-32x32.png',
          '/favicon.ico',
          '/mstile-150x150.png',
          '/safari-pinned-tab.svg',
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
