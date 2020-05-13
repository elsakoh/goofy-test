'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "9b189c51b9f7a4a31c62bcf759211994",
"/": "9b189c51b9f7a4a31c62bcf759211994",
"main.dart.js": "8414f38e522d93afcbc008770d4d84d1",
"favicon.png": "b179d7c5124ba36c0065cec040e602f7",
"icons/Icon-192.png": "b179d7c5124ba36c0065cec040e602f7",
"icons/Icon-512.png": "b179d7c5124ba36c0065cec040e602f7",
"manifest.json": "e42dce9bbd669c78035a64e74988983d",
".git/config": "32c6ebbf24f0c966c1a64ff7ef43a1ae",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/56/3352c2b8d35c04eb9107265b72213481209da2": "1e38b3da0898b6e51134a41d061faffe",
".git/objects/0b/88ecdb2c57b7877b5c28f35072c24b561e9ed9": "b77f0d0d51738a56d18f9c4b7f2e0454",
".git/objects/93/83175bddd9c52185dee7a1b7840377bbd8207b": "4ae577f72615d4b534d196080d0058c5",
".git/objects/5a/212b30202a1d093fe8f11b939715b6fedc91e9": "6facb18533880c6a83f8d506b7861d44",
".git/objects/05/0d67c03de01f3cc8e744ea1b6ca18bf9201156": "89b0428c2c6bd3dc163c2d0327c93141",
".git/objects/02/5a24c00dd1d9b6a70f7b8b5e28d5087d9b1d5f": "6932f8e0b7bcdb6fd3f950829a50a4f7",
".git/objects/a5/d6d74cad15fadf3839181ce7c5358fb363caf8": "be833c8048be5651dbc8cc639ae540fc",
".git/objects/e5/67c6a796142074e3edf7c1db38eca5768f71db": "e038b299eb87dbbe9004d8381a2449de",
".git/objects/eb/458c44a4779139919ba722f43e610e281a19e9": "e4717b33aeb511b363769bcc67720334",
".git/objects/c9/531282ec5cdc2e1977bbc7039e0d61ef6396f4": "28040aa1c5bc164342c833bec15b1c21",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/f2/600461f99e327172b861468c4ad23e6386deda": "3afe0518bc3b087c1c6ba474f950e1f4",
".git/objects/4e/51aeb2e6b2b8257b33688597f9b7813b899d27": "d4b575a6526b969f3d12c80169165e67",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/00eca0d6ce626c5923619af86df045d5292b16": "fda8bcdf7411659faa556e7dca5eb93f",
".git/objects/89/35f21524b57428ab1fc7dcaaace1636d928e62": "8b677446bd803ab389a67e5850b240d3",
".git/objects/28/465a1b4488171ad49ffdec494a226b9c3fd628": "33dc64c0beacbd00a1ca43fc370c43d3",
".git/objects/28/472d22680e84ab630fa47481586999bf2051bf": "00b9af45af111810d37d5d5448b1a780",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/ec0bc541fbfe493121178e07d04443a88dbae1": "2e90f1411aa4d325429fe140e80b2eab",
".git/objects/81/6a20d4cdd32d7b99dde13e48f9ec91f3c036ad": "78ea0aed8a64b3d95b3f22f51e838019",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/2a/dced27996393d1346b26bf801170043880c364": "3afd8691177b6b8f655548a4b9db87e8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/06aae93720c64e38c2d2ee8243cc3f3ffaa4c5": "b7fef439c309beece31e64bb257ed8ae",
".git/objects/31/94a43607d82d219f44e2c51091d5533204385e": "74138f1416090b8ec3e7c8dbaf71d7be",
".git/objects/65/959eeba53748766de2cfae5e9b41386a9fbc07": "1b50c9e26ece4cfd5a5c0709ff7d0c04",
".git/objects/37/ab0352b9987d31c0d138c265881791007f89d9": "107d00029a824c14629079c3b32b452b",
".git/objects/08/7ff2f9fcbe68b0e698b327ffee19fe4522fe20": "6d28ddec1f4340e5aaaddabc39f28c51",
".git/objects/08/edea71c81a910a50c89e6b9c45fb59b5a05296": "871799f8da326d054042e2a9afeb60bf",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/af/da4c3ac3167b19dbe94fb29ad9808a295d3112": "f962a4430a6bc5d45bded7b6d22beea6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a1/b67c1af2d6a966605a168707e13bc702ff6061": "9b65024839190d7e22fd256531f22f2f",
".git/objects/cc/d91cc29cc5b1d26110c2734faece73f90fa3f5": "f48060efc2916c64f0493bf752e2d8e8",
".git/objects/e6/39fba2e30973c1b183226c93888550cc2fb476": "0acb9afb39e648d9831dc6ed9f79af38",
".git/objects/e9/ea0bb76b5ed181c49e549483f91720f4eeffd2": "1f40bb97c5343fc65a08005b702df018",
".git/objects/41/8235ea937943b9b73e47938807d427e216eff1": "a1c2b48bfb008a7e83113186186880ef",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/13/c9fe477a7d1fd94f5a76271fed4995031b985c": "566db69d16eb0396ae78100092fd26ba",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6120f10f672ad66aab004247fc207b2a",
".git/logs/refs/heads/master": "6120f10f672ad66aab004247fc207b2a",
".git/logs/refs/remotes/origin/master": "e4998ebf8e1c59ee58c57a8693f49977",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "62d09d69e61d4dbeb2cc1b471b35e7ad",
".git/refs/remotes/origin/master": "62d09d69e61d4dbeb2cc1b471b35e7ad",
".git/index": "176fa6396ee0e1ca020ee0901921859d",
".git/COMMIT_EDITMSG": "5a0130bcb1fe760580402925a173a93e",
"assets/LICENSE": "f9f6a95033a217df9e7f922903cdf23a",
"assets/images/img4.jpeg": "b4842da866a5f920701d01c09d6050ee",
"assets/images/img2.jpeg": "c2597291c9d225dfdf439aab81a0028f",
"assets/images/img3.jpeg": "8376d098efeffd78c86411344960c6e6",
"assets/images/img5.jpg": "d76a9383659944e86545cf2b9a57369a",
"assets/images/img6.jpg": "0a1941f228632cda39113b4b33fa6b37",
"assets/images/img1.jpeg": "70ec0c1b77e160fe2e484b28717725dc",
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
