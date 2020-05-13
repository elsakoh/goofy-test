'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "31bf73de3afcc96ebfbdbcb79edfb761",
"/": "31bf73de3afcc96ebfbdbcb79edfb761",
"main.dart.js": "8414f38e522d93afcbc008770d4d84d1",
"favicon.png": "b179d7c5124ba36c0065cec040e602f7",
"icons/favicon-16x16.png": "0fdc0081559edf0ea6951c7efd328906",
"icons/favicon.ico": "d4419615f2373e647ad49927c8d9a4bb",
"icons/apple-icon.png": "d0cecf55b2b98305607a6bc04729f1c1",
"icons/apple-icon-144x144.png": "7a7ffce53f8a1a66c9823f6bdeabc004",
"icons/android-icon-192x192.png": "e36e668d6837f595f80e5f39c1b51c12",
"icons/apple-icon-precomposed.png": "d0cecf55b2b98305607a6bc04729f1c1",
"icons/apple-icon-114x114.png": "fb52b269ae901de1b816cb6bbdcc28ad",
"icons/ms-icon-310x310.png": "811caaa945dbe6d3ca1bcd6a2fdb6423",
"icons/ms-icon-144x144.png": "7a7ffce53f8a1a66c9823f6bdeabc004",
"icons/apple-icon-57x57.png": "b953f0d7fa8afa4f8ccbda978bd19337",
"icons/apple-icon-152x152.png": "be6a69781bedc8ccff5632433ac1e0bd",
"icons/ms-icon-150x150.png": "61102299bbc57948db70e80c1da590d9",
"icons/android-icon-72x72.png": "b0a0905f80a80c26f3c8a77e13cce037",
"icons/android-icon-96x96.png": "71441501f48bbc534f73fb0384080072",
"icons/android-icon-36x36.png": "76f849e5a631002f03db3d2217a73024",
"icons/apple-icon-180x180.png": "16fb51e0a4d7e1136a1b0e9c88270623",
"icons/favicon-96x96.png": "71441501f48bbc534f73fb0384080072",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "269f6868de4ce707bc1974a838b0800f",
"icons/apple-icon-76x76.png": "0a06e38a0fe807c6fea6adb2e30b3023",
"icons/apple-icon-60x60.png": "8611a703101980845687d042d8a02201",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "7a7ffce53f8a1a66c9823f6bdeabc004",
"icons/apple-icon-72x72.png": "b0a0905f80a80c26f3c8a77e13cce037",
"icons/apple-icon-120x120.png": "239c778500db0838f1ac13353b85804b",
"icons/favicon-32x32.png": "a9e32b2b96f53585fc8a27c0b1cd8d3a",
"icons/ms-icon-70x70.png": "410d293bfb1e789558c16625a49c930e",
"manifest.json": "8906ab49f45c184144c3fd6488182ea6",
".git/config": "32c6ebbf24f0c966c1a64ff7ef43a1ae",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/b14a46bbe9fea233cbbf33672813a84498e6aa": "1457e89f2de1762d882c8f1a4954087b",
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
".git/objects/65/1ec0bd27cf9b9eaa6e5b482f60b854f0658efa": "046b25e29ec6c0b63690ad66db9f120b",
".git/objects/65/959eeba53748766de2cfae5e9b41386a9fbc07": "1b50c9e26ece4cfd5a5c0709ff7d0c04",
".git/objects/5b/fffc9f903c8e15fae68aa6942bff4bea10717a": "ae5b74258851bb45a01ebf92a939e81e",
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
".git/objects/f8/f6a5be0c6d116bd314bfef61fb3e2b028de305": "00d693e01c4cdcd70f73f85f91741701",
".git/objects/41/8235ea937943b9b73e47938807d427e216eff1": "a1c2b48bfb008a7e83113186186880ef",
".git/objects/84/5d18faab5b923bebbd62fcf85a4a97c9bc4e0c": "e4c83c90c77019e2a5c44fddc566e9e2",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/13/c9fe477a7d1fd94f5a76271fed4995031b985c": "566db69d16eb0396ae78100092fd26ba",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6db28eebf18ddad6ffe1837f5c38bbbf",
".git/logs/refs/heads/master": "6db28eebf18ddad6ffe1837f5c38bbbf",
".git/logs/refs/remotes/origin/master": "80a14efe69d61b63d68a0475821a8cfb",
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
".git/refs/heads/master": "90ea26856f256d42063746cca9a5b4c8",
".git/refs/remotes/origin/master": "90ea26856f256d42063746cca9a5b4c8",
".git/index": "022255d8531daa64283c65491db30e29",
".git/COMMIT_EDITMSG": "17ee9b7ad0fb30f1ef2bb4fe2bc675d5",
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
