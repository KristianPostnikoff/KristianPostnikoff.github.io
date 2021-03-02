'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "c8201d2d7bde4268fba02482828628d6",
".git/logs/HEAD": "89b0d0a30289e2667297c5782365c014",
".git/logs/refs/remotes/origin/HEAD": "18ac1920be350430e0590d9e999556f4",
".git/logs/refs/remotes/origin/master": "7e5a93c84b32f0e793bc8a9fdc1f31d8",
".git/logs/refs/heads/master": "89b0d0a30289e2667297c5782365c014",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/b7/9207a10628dc146a8ff8679f2d54ada18b71e0": "900aeb93fb3b3dc1f9a4d0861c166249",
".git/objects/af/c2b3dee817d156faf7215c1b9275c6ee585e31": "468ed608bcc98e15fd94c8d033e62621",
".git/objects/e5/00a2c5012c076eb23c9058745e83c707ef2f38": "49b7c4614194e2b2c52f3d6c2c9e9504",
".git/objects/66/6e191219fbc2d5f9b405726bc9656e14808124": "2caa1a85bfb91682a3563031b5fdeb93",
".git/objects/2c/a95117ad4a8a713e48e18a21c46ab62416369c": "a2603333744e56a76414ed6bc0583a7b",
".git/objects/71/0adfb2b1c1401e2d010a97ed64cf9903d257ed": "0be6255bdc7cad4864903a9cdb2c280c",
".git/objects/ef/2edf8ea3fc42258464231e29140c8723458c1e": "1582856bbd06da50094f56e9a1d1d8e4",
".git/objects/08/0d6c77ac21bb2ef88a6992b2b73ad93daaca92": "f26fdfe06721560cfda28c4d18d77457",
".git/objects/6b/60c1042f58d9fabb75485aa3624dddcf633b5c": "ae322a11c2bb563e44437a28f9f9f5e7",
".git/objects/74/b5e053450a48a6bdb4d71aad648e7af821975c": "86409cfc44b46eaccb13a8246a7a5cf1",
".git/objects/54/786d199bb5168c131924f66fafd9dbcd8224e0": "6bbba7392be3d23238ebd525d83cb961",
".git/objects/54/9c7b3fc33365ccaed6d705ada7b74777957ed2": "f176d34446d1dd0b454945f98950609b",
".git/objects/81/e1b5608d30fff8babee1b0bb23c76fb6c15048": "680a8f927022cc0ce9c041edeac07412",
".git/objects/10/23c479b8750aa7236318f2019a1be46a7cc4a1": "4e237a858186464a13409ce5c229267e",
".git/objects/89/e7be489f34c84aa9a7ccbcd9bd8d3d546310d0": "67543294b1549bde20ac4d69129c06d6",
".git/objects/00/8bde36b04251084ce6c3f99317c8c82d8693c8": "086f40fda8611988bc211b5244b7b3cb",
".git/objects/e3/4b635ce8992575d5bc78ab9b31896d6a9dc436": "6b494fcda5b4332b3f0651fef63058ec",
".git/objects/8f/2609b7b3e0e3897ab3bcaad13caf6876e48699": "f18775d58d6660023c692edb91cfbc93",
".git/objects/0c/83cde2ce793a26e49d9a3ef8b180384cdc5a38": "eb41ab61fab0a03964f16c24c9986ab4",
".git/objects/a1/1777cc471a4344702741ab1c8a588998b1311a": "f0bb36bf0ddee93dfc3200f4c8429c9e",
".git/objects/e9/01ce61db1ebf1b7a509ea6b8e4a3f78a19dae8": "8cc3648a04d9e179d8fa391f27f65447",
".git/objects/e9/e57dc4d41b9b46e05112e9f45b7ea6ac0ba15e": "a2d5b36ef6f3dc9b3d2585f84fa8ae47",
".git/objects/37/845757234ccb68531c10cf7a2ffc589c47e342": "7aba0becd8aaec2077687a5c220d0851",
".git/objects/4d/29575de80483b005c29bfcac5061cd2f45313e": "7f127d2f958120c0a0a2fa9dc0ea74a8",
".git/objects/52/53d3ad9e6be6690549cb255f5952337b02401d": "6b6835f956fbe23e69168c4611b6d114",
".git/objects/aa/069f27cbd9d53394428171c3989fd03db73c76": "b8cac44fd2c52ec63d0cb621a9ae7f6b",
".git/objects/22/c13ac4e0735cc67d51a5c9d1612c6daac13b3a": "39f34dfd4a4a4c490797da0b44678592",
".git/objects/1f/03afeece5ac28064fa3c73a29215037465f789": "a317bbf43c11f99a48d342bddcf9ce7b",
".git/objects/8e/29b36dea7f04ae8729d8b33ecc05c3c9b0fe46": "b8f97b6fbc7fee4d6b7df601a8d60c14",
".git/objects/8e/58bfc5c0a746a5a1a9e40fbad64bd9a1ed58ae": "64acc8137ae40a0fba4d7c49664dbbac",
".git/objects/6a/9f85fe9c677d07dcb919087e26622b2840b4e4": "3991dc6e0f0eb3171ed7ed07277db0dc",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/a0/fd768284887640786d8d7c99d49be3898e41de": "def3febe9f6f9474bee61fabca49a3ad",
".git/objects/45/f20fa7c5fa641518b6c323d7b63bdca5965392": "5d2e55359acf89ddb25689b5dfddd05f",
".git/objects/c5/218832f638c02ee3ddbfaba36242c4337d1516": "cf3c2d6a349f894df61e4507d203c18c",
".git/objects/90/3e7526dfab0efc91e96fb1fa5954f85c1956d5": "85d2ae5e25eadc2554fede26798e9587",
".git/objects/60/59c2935a2a81a66e0a87861b94e590b3be24fe": "50f35bdee39e288b510c9fd55be5e485",
".git/objects/a4/e47a6545bc15971f8f63fba70e4013df88a664": "2511086bcbe568dba2f6e949fb061f6c",
".git/objects/8b/c494ebbda087989025a200b2c31ad650fd35fd": "a57d7e951a24789b84d4b6ffda910a4a",
".git/objects/df/680356c3d222e228239ca3bbd151f52c4bd949": "3f58d9e6f7385072ed5d6c0b0b380bcd",
".git/objects/fc/44b0a3796c0e0a64c3d858ca038bd4570465d9": "aa1db0c30ac5a1b003fa1db8d3f87636",
".git/objects/cc/8336decd1c59354c1ff912dbac59062da23f7e": "548344a05bb32bd3f11c5a71b82737f3",
".git/objects/ec/2585e8c0bb8188184ed1e0703c4c8f2a8419b0": "f403ec4133882df022be178ad306848b",
".git/objects/4c/ac311f237d51810146c8ea25e7345904a4b3da": "f83914d176d561b652059312469753eb",
".git/objects/64/7ca3c1ae43e9784d48326fde077846a32c93c3": "3608b8b13754f95343f20e1892671130",
".git/objects/f4/ab0f8baf76970cb57c976d1480bb3823eb27d2": "9d9a9ec94092b23b4118f0bf26994e0f",
".git/objects/03/88bf29e1147bdb1195d5fbd6ca609702f7d409": "96bf08df87f9138e5386ea2421c56eb1",
".git/objects/c2/c4ff71c5615b8d42114eb96fc8aa5c4d02a488": "cc7a59d12b1d337d9108c15e007dc2b1",
".git/objects/e2/625bd469349612f9f13b87adb60eaa348dec84": "58f44cd28a097e699962a73bd70fcc40",
".git/objects/11/cfae09d4766243ed7dd8dbecda277ab0f85dec": "d77fb9f763bfc05acdb973083c8fc1d2",
".git/objects/11/e84f6a54b3616c830d3d7d71cbea84c6172681": "712ded02b28bcbb2deaca24c231e4500",
".git/config": "ea8898139f7702dfd7c275e3c17f5fde",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/packed-refs": "d56c491c5cc40832bc4a009d0382a9a4",
".git/COMMIT_EDITMSG": "593deff6cd96de119c7e4f0f987a4e3f",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "8b238c8ff7d9bfd62df0d94b114e1e0a",
".git/refs/heads/master": "8b238c8ff7d9bfd62df0d94b114e1e0a",
"manifest.json": "8b33a07f7b7f55bffc41f9f9e5e64090",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "dbc912bd53b30ac52de0b3561165395c",
"/": "dbc912bd53b30ac52de0b3561165395c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "7268e5725b24be8b7dbcec6d2bed5da6",
".idea/modules.xml": "be066d83c11b00d07ca0083744d51281",
".idea/libraries/Dart_SDK.xml": "713f26df5e2b59e8a3c8997f3c78ced5",
".idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
".idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
".idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
"version.json": "d301ff750031e64fab85ccde4142350f",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "b87e7ceb9de555cb3775cbfd1db2618c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
".dart_tool/version": "a03fe3a197e75b945b39e13abe90e06b",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/web_release_bundle.stamp": "51b9925be0aba58c9de5919cf479b66c",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/dart2js.d": "c3348b0af2755e248b7dcb30fca9ec9c",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/dart2js.stamp": "0c4ee7e9ef47d8966dd1799d1681a174",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/main.dart.js": "7268e5725b24be8b7dbcec6d2bed5da6",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/web_resources.d": "e2202f234f284e4fa9bfcc78d94a26f9",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/outputs.json": "e9559ab1c794bf9005203c9c72a26665",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/main.dart": "aff491564a99e0eab4e43b4206a61200",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/service_worker.d": "e010b2eb68704fac4ec3c95d83e4c32a",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/app.dill.deps": "bd1d0549271a46472a5b1183c71db622",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/flutter_assets.d": "e035dfe5e737403bd22cd9e7548a043a",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/web_service_worker.stamp": "6a4df6b9433f6c14a5789178816fa785",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/web_entrypoint.stamp": "db61a5b27313302c7e564e64185cd2ff",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/app.dill": "5f3d6fc5ab7aff24422f6b7ff537331f",
".dart_tool/flutter_build/5d81335f743fa405582311a109312b85/main.dart.js.deps": "50721037cd9da41fd6ad0d9fb9d64a54",
".dart_tool/package_config_subset": "c12ff7fcf36cad4485ce5b11f1533cfe",
".dart_tool/package_config.json": "42390b0f7b64dd1d09f5e9515d22a263"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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