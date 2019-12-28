const CACHE_NAME = 'default'

async function installCache(){
  const cache = await caches.open(CACHE_NAME)
  await cache.addAll([
    'manifest.webmanifest',
    '/icons/favicon.ico',
    '/global.css',
    '/build/bundle.css',
    '/build/bundle.js'
  ])
}

self.addEventListener('install', async event => {
  event.awaitUntil(installCache())
})

self.addEventListener('fetch', async event => {
  let url = new URL(event.request.url);
  let response = caches.match(url) || fetch(event.request);
  event.respondWith(await response);
});