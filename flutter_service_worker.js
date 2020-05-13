'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "8937cfd7c1883c0fb65f459ee34209cb",
"/": "8937cfd7c1883c0fb65f459ee34209cb",
"main.dart.js": "728a42031e890020c39b163f80796a91",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e42dce9bbd669c78035a64e74988983d",
"assets/LICENSE": "f9f6a95033a217df9e7f922903cdf23a",
"assets/images/carousel2.jpg": "cdbb5f758eed260f5b10b7cb4f66c8f9",
"assets/images/carousel3.jpg": "2f372ec668a5fe5b0c3b1446015e60f0",
"assets/images/carousel1.jpg": "d091045229a1b0243f8dd2653ee4460a",
"assets/images/carousel4.jpg": "0afa813fda15b810e84b80cf47ec011e",
"assets/images/carousel5.jpg": "abd2e96283e05669aaefcb6ad7821de6",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/logo.png": "781f23c742ca85eed2c8b23f78bea087",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
