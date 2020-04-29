const CACHE_NAME = 'default'

const CACHE_ENTRIES = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/icons/favicon.ico',
  '/global.css',
  '/build/bundle.css',
  '/build/bundle.js'
]

self.addEventListener('install', async event => {
  event.awaitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_ENTRIES))
  )
})

async function respondToFetch(fetchEvent) {
  try {
    console.debug('Handling fetch event', fetchEvent.request.url)
    const cache = await caches.open(CACHE_NAME)

    if (!navigator.onLine || fetchEvent.request.url.includes('localhost')) {
      let response = await cache.match(fetchEvent.request)
      // Cache hit - return response
      if (response) {
        console.debug('The response was cached. Will return it')
        return response
      }

    }
    // IMPORTANT: Clone the request. A request is a stream and
    // can only be consumed once. Since we are consuming this
    // once by cache and once by the browser for fetch, we need
    // to clone the response.
    const fetchRequest = fetchEvent.request.clone();

    console.debug('Cache didnt hit. Will execute request')
    let response = await fetch(fetchRequest)

    // Check if we received a valid response
    if (!response || response.status !== 200 || response.type !== 'basic') {
      console.warn('Got a non 2XX response. Returning the error', fetchRequest.url)
      return response
    }

    // IMPORTANT: Clone the response. A response is a stream
    // and because we want the browser to consume the response
    // as well as the cache consuming the response, we need
    // to clone it so we have two streams.
    const responseToCache = response.clone();

    console.debug('Caching response')
    cache.put(fetchEvent.request, responseToCache)
    return response

  } catch (err) {
    console.warn('Error while handling fetch', err)
    throw err
  }
}

self.addEventListener('fetch', function (event) {
  event.respondWith(respondToFetch(event));
});


self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(
        keys => Promise.all(
          keys.map(key => caches.delete(key))
        )
      )
  )
})