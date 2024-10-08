const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1');
  await cache.addAll(resources);
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    addResourcesToCache([
      './IMAGES/android-chrome-144x144.png',
      './IMAGES/apple-touch-icon.png',
      './IMAGES/favicon-16x16.png',
      './IMAGES/favicon-32x32.png',
      './IMAGES/favicon.ico',
      './IMAGES/mstile-150x150.png',
      './IMAGES/safari-pinned-tab.svg',
      './IMAGES/aktiv.png',
      './IMAGES/aktiv.webp',
      './IMAGES/ekstrem.png',
      './IMAGES/ekstrem.webp',
      './IMAGES/senior.png',
      './IMAGES/senior.webp',
      './IMAGES/sensitiv.png',
      './IMAGES/sensitiv.webp',
      './IMAGES/valp.png',
      './IMAGES/valp.webp',
      './IMAGES/vektkontroll.png',
      './IMAGES/vektkontroll.webp',
      './IMAGES/voksen.png',
      './IMAGES/voksen.webp',
      './IMAGES/FK.svg',
      './IMAGES/left-arrow.png',
      './IMAGES/right-arrow.png',
      './IMAGES/up-arrow.png',
      './IMAGES/Logo-Labb.png',
      './IMAGES/Logo-Labb-App.png',
      './JSON/foodTypes.JSON',
      './JSON/profiles.JSON',
      './JSON/manifest.json',
      './FONTS/ultramagneticbold.ttf',
      './service-worker.js',
      './script.js',
      './styles.css',
      './index.html',
      './browserconfig.xml',
    ])
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
