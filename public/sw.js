/* eslint no-restricted-globals: 0 */

self.addEventListener('install', onInstall);
self.addEventListener('activate', onActivate);
self.addEventListener('beforeinstallprompt', beforeInstallPrompt);
self.addEventListener('fetch', onFetch);

const IGNORED_REGEX = new RegExp('localhost(?!.*(webpack-hmr|_next\/static))');
const STATIC = 'bok_static';
const DYNAMIC = 'bok_dynamic';
const STATIC_FILES = [
  '/',
  '/manifest.json',
  '/fonts/Modern_Era_Light.otf',
  '/fonts/Modern_Era_Medium.otf',
  '/fonts/Modern_Era_Bold.otf',
  '/fonts/ModernEra-Regular.otf',
  '/fonts/ModernEra-Italic.otf',
  '/fonts/ModernEra-Black.otf',
  '/fonts/adobe-garamond-pro.otf',
  '/fonts/adobe-garamond-pro-Italic.otf',
  '/fonts/adobe-garamond-pro-Bold.otf',
];

function onInstall(e) {
  e.waitUntil(
    caches.open(STATIC)
      .then(cache => {
        cache.addAll(STATIC_FILES);
      }),
  );
}

function onActivate(e) {
  e.waitUntil(
    caches.keys().then(keyList => (
      Promise.all(keyList.map(key => (
        (key !== STATIC && key !== DYNAMIC) && caches.delete(key)
      )))
    )),
  );

  return self.clients.claim();
}

function beforeInstallPrompt(e) {
  e.prompt();
}

function onFetch(e) {
  const { request } = e;
  const { url } = request;

  // replace this with the domain url
  if (IGNORED_REGEX.test(url)) {
    e.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            return response;
          }

          return fetch(request).then(res => {
            if (!IGNORED_REGEX.test(url)) {
              return res;
            }

            const item = {
              url,
              value: res.clone(),
            };

            return putCache(DYNAMIC, item);
          });
        })
        .then(res => {
          if (!(res instanceof Response)) {
            return new Response();
          }

          return res;
        }),
    );
  }
}

function putCache(name, { url, value }) {
  caches.open(name).then(cache => {
    cache.put(url, value);
    return value;
  });
}
