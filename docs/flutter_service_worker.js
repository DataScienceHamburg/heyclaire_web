'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "af165f595a563eedde0a45f089594af7",
"assets/AssetManifest.bin.json": "cadc333e0acbe6036712de6e6970d6b4",
"assets/AssetManifest.json": "1d34cfcbdd19bcef2cdb5c8cb259aa78",
"assets/assets/fonts/Lora-Bold.ttf": "04a54a65953cf0c6f9c2170ee70ee8b7",
"assets/assets/fonts/Lora-Medium.ttf": "4e4f1dc55a062af61b51c783c510b6ca",
"assets/assets/fonts/Lora-Regular.ttf": "5fbbc2dd9545c49556bbf4323e73ffe0",
"assets/assets/fonts/Lora-SemiBold.ttf": "585af3507153b8b738555012c675662f",
"assets/assets/images/alt-battery-0-svgrepo-com.svg": "2e57821461d92629ec57d206a19f4201",
"assets/assets/images/alt-battery-2-svgrepo-com.svg": "d47ada95264cfe9df339b5c711100c76",
"assets/assets/images/alt-battery-3-svgrepo-com.svg": "9ccebd4b9a4fe528b2cd9ad8663e0b66",
"assets/assets/images/alt-battery-4-svgrepo-com.svg": "2e8a199295fc95025d29957d7322b41a",
"assets/assets/images/alt-battery-5-svgrepo-com.svg": "a4efa9468d78366a8fd6788678250b6d",
"assets/assets/images/chatbot.svg": "ae053d011231522683c1f6ad4ac301fc",
"assets/assets/images/claire_advantages.pdn": "b5deba0e7683041bcf47de2ce558741e",
"assets/assets/images/claire_advantages.png": "093a283c9b2684f77f3a38be29a30d1a",
"assets/assets/images/claire_s.png": "691287bb9df05e6a1d436baf2e38edee",
"assets/assets/images/claire_sitting.png": "c7a1f70ce064c14945b6296aa9cbfb62",
"assets/assets/images/claire_small.png": "659d597fabf543d7ffdbe55cc293e15c",
"assets/assets/images/claire_s_no_bg.png": "9e5bee0272f094dd469946299a9c7380",
"assets/assets/images/claire_s_white_round.png": "8dbb7977d4dd096347c56cd7055173eb",
"assets/assets/images/claire_s_white_round2.png": "14525ddf82d8432209683d142d97e383",
"assets/assets/images/claire_xxl.png": "63b15aeaabafa2ec8e33054e03dcabe5",
"assets/assets/images/dreamstime_xxl_122445093.jpg": "afbbfbead46f6c8a7cae8603a8503b0a",
"assets/assets/images/Hands.png": "33a7e1c0997d19ecae7ea40941d5661d",
"assets/assets/images/send.png": "7c65b3872305ce20c9f81f05307c0451",
"assets/assets/images/Setup.png": "bae22791fbb37920b2a7a3dd09a5f60f",
"assets/assets/images/Setup_Thumbnail.png": "d8f96caa49cfdf26c7cc190d1c564962",
"assets/FontManifest.json": "b11909eca2f4b0e6859960f57ca101ed",
"assets/fonts/MaterialIcons-Regular.otf": "09e4a7f5a0e8d7987b7cc50a550f5e27",
"assets/NOTICES": "aa610bc8311146985ba6fae3c0e08143",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"chatbot.js": "6e1dc512cf0e6b5c540ccf6988f0537d",
"favicon.png": "a9c8c97df3e561888f0fd923adef4a1f",
"favicon.svg": "650795077aadfbe9b40e1f1d6c53c097",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac124b2c17f5b01f4261a25a04dae6ec",
"/": "ac124b2c17f5b01f4261a25a04dae6ec",
"main.dart.js": "d2e7384e4261a66dc349c441548e0637",
"manifest.json": "e76cd82539f143bfabb1a6ba8d19e6a2",
"version.json": "73be94451399d6d89ceb7499d04660f1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
