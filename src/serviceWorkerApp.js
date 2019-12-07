// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const EXTENSIONS = [".eot", ".woff", ".ttf", ".png", ".svg", ".jpeg", ".jpg", ".chunk.compressed.js", ".compressed.js", ".chunk.compressed.css", ".compressed.css"];
var CACHE_NAME = 'app-cache-v1';


window.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
    return cache.addAll(EXTENSIONS);
  }).catch((err) => {
    console.log("Error in sw caching for " + CACHE_NAME + " : ", err, err.message);
  }));
});

// 'fetch' event handler for the service worker.
window.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (resp) {
    return resp || fetch(event.request).then(function (response) {
      caches.open(CACHE_NAME).then(function (cache) {
        cache.put(event.request, response.clone()).catch((err) => {
          console.log("Error while adding new resource in cache during fetch for " + CACHE_NAME + " : ", err, err.message);
        });;
      });
      return response;
    });
  }).catch(function (err) {
    console.log("Error in caching during fetch for " + CACHE_NAME + " : ", err, err.message);
  }));
});

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/serviceWorkerApp.js`;
      // registerValidSW(swUrl, config);
      if (isLocalhost) {
        // Do Nothing
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

export function registerValidSW(swUrl, config) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register(swUrl)
      .then(function () {
        console.log("Service Worker Registered");
      }).catch(error => {
        console.error('Error during service worker registration:', error);
      });
  }
}

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);
