/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "42ff999ae6ada6925fc7d82c6513e048"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.71247bc6.css",
    "revision": "19a1886aebd49acff4cace04a26bee2e"
  },
  {
    "url": "assets/img/delete.06a1d8a1.png",
    "revision": "06a1d8a1dd2a4a1605555e60c997a0bf"
  },
  {
    "url": "assets/img/exception.fb574dc2.png",
    "revision": "fb574dc27b77767b3017ba337e1d0eb5"
  },
  {
    "url": "assets/img/get.5036c0fe.png",
    "revision": "5036c0fe921e45dd6c5f18a43aacf7a3"
  },
  {
    "url": "assets/img/getAll.76c11e50.png",
    "revision": "76c11e50c01685e5106ce73214b3950e"
  },
  {
    "url": "assets/img/patch.76c4879c.png",
    "revision": "76c4879c0d5479dbf5f4966aa92b817f"
  },
  {
    "url": "assets/img/post.7e6ecac3.png",
    "revision": "7e6ecac38fc36296e9acba6c9406200e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.1bd44772.png",
    "revision": "1bd44772faff82c09e81141618c9d635"
  },
  {
    "url": "assets/js/1.54c93666.js",
    "revision": "bc49b53e9c080e93636260a59ae99db8"
  },
  {
    "url": "assets/js/10.d96f368d.js",
    "revision": "bb351805716b73afb4c517421ce90fc2"
  },
  {
    "url": "assets/js/13.143540f4.js",
    "revision": "587a2c05dac4f80aca8285fc00cb2533"
  },
  {
    "url": "assets/js/14.deb64674.js",
    "revision": "e850d0766babd121dd37b05ad50d49ef"
  },
  {
    "url": "assets/js/15.570e3662.js",
    "revision": "7e2cc312c499a1ed3b307bd693943c0b"
  },
  {
    "url": "assets/js/16.62ff83ab.js",
    "revision": "576bb9d257160432a6d47d4e96d59ab7"
  },
  {
    "url": "assets/js/17.6db2bb35.js",
    "revision": "76aa97537cc23020296e6f31a7af9fa9"
  },
  {
    "url": "assets/js/18.86d967dc.js",
    "revision": "7561401ca6797f52e93ca7545a18a449"
  },
  {
    "url": "assets/js/19.9b8f087f.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.43f8de3e.js",
    "revision": "b7422624f2dbbd6c97424414ae5c46bb"
  },
  {
    "url": "assets/js/20.4f28f51a.js",
    "revision": "57a67a37ff8c60c8505d99aa972fe64d"
  },
  {
    "url": "assets/js/21.39425e04.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.d2077878.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.a8d2cf7c.js",
    "revision": "14da4ef08ef27a0da0632f29adb7a8eb"
  },
  {
    "url": "assets/js/25.9b82b3b9.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.590bbba7.js",
    "revision": "263fdeb3a6421d841b88e0d0908be681"
  },
  {
    "url": "assets/js/27.a526235e.js",
    "revision": "18971c4e90770b501dec1ec769e98b6a"
  },
  {
    "url": "assets/js/28.47557661.js",
    "revision": "a917e1749d72caa61bfbbded0ded5210"
  },
  {
    "url": "assets/js/29.0f027b3a.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.3a389e6a.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.db964205.js",
    "revision": "717ec6735036b21722cfbd7cfcde6756"
  },
  {
    "url": "assets/js/31.4120ba93.js",
    "revision": "884c4acc42d751e79e9c9d470cab7805"
  },
  {
    "url": "assets/js/32.64a9d3f2.js",
    "revision": "7b4f0d1f391fdb41fd36b2207c22cf28"
  },
  {
    "url": "assets/js/33.771feb05.js",
    "revision": "72d8731c0b4be183e4ab1b1829cf38f2"
  },
  {
    "url": "assets/js/34.e1fdbc5d.js",
    "revision": "21b024f64760a5a8b1ba24b96c96e503"
  },
  {
    "url": "assets/js/35.843b3f0d.js",
    "revision": "e794b08d576aa30efb28206e65b17f5e"
  },
  {
    "url": "assets/js/36.c58c44f5.js",
    "revision": "c157f7aa30cb9f5f56f9085459a71b55"
  },
  {
    "url": "assets/js/37.e5ab8d1f.js",
    "revision": "3e1b5793b66483416d6a9ac9f32daee3"
  },
  {
    "url": "assets/js/38.a4760ea8.js",
    "revision": "dbeedd59cd0998c49659eb9e40842cd4"
  },
  {
    "url": "assets/js/39.41bf9c11.js",
    "revision": "c46b16ebfec41ddd661266e33759edb6"
  },
  {
    "url": "assets/js/4.cc7926c4.js",
    "revision": "bdb017a10c6ba324dcec8661815b98d7"
  },
  {
    "url": "assets/js/41.e195d4a4.js",
    "revision": "818903a05f1c64a9f9571cff5473b1f6"
  },
  {
    "url": "assets/js/5.4c252c60.js",
    "revision": "0493ddce8b93355ec7fad6a2b2a11c98"
  },
  {
    "url": "assets/js/6.c74211c7.js",
    "revision": "a5ab7b5b5cadc00d4247781fb447d70b"
  },
  {
    "url": "assets/js/7.39dca9a4.js",
    "revision": "4730cb72157641cc9aba4f1f32445acb"
  },
  {
    "url": "assets/js/8.05a0faf3.js",
    "revision": "a6f7e651bff01b51f0963a7cbc424d4d"
  },
  {
    "url": "assets/js/9.34b1872e.js",
    "revision": "c8b4c308d0fc50818b8920ce505881a9"
  },
  {
    "url": "assets/js/app.42894b0f.js",
    "revision": "2c49813f213f02039589eed22ea95073"
  },
  {
    "url": "assets/js/vendors~docsearch.0d1e900e.js",
    "revision": "f32567f7f6dc3aea2c28803554263b53"
  },
  {
    "url": "conclusion/index.html",
    "revision": "7f76300a9388c11f35c9a4f68a5d43a7"
  },
  {
    "url": "design/index.html",
    "revision": "37cb6933316fef4749ccc6e6fcd0d18d"
  },
  {
    "url": "index.html",
    "revision": "3a6425be4872d6e5706a6e8b17c89f71"
  },
  {
    "url": "intro/index.html",
    "revision": "71fbe1e87fe40f4d719a045e2f1f4f56"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "4fb5dd19009b6e0b5e10080f710350d8"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "93a5ded5e26a9e33024110049ea0f7fd"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "bdb81f4ecf6c51d1244aa281644a9ac4"
  },
  {
    "url": "software/index.html",
    "revision": "797234b7f2bd8a5c52907e378066f48a"
  },
  {
    "url": "test/index.html",
    "revision": "9ea2f441cdc1f415e65c6219d770e503"
  },
  {
    "url": "use cases/index.html",
    "revision": "6dc97028160d92c39f346ae0af2ddf5e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
