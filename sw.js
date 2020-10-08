self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('global-web-chat').then(function(cache) {
        return cache.addAll([
          'https://global-web-chat.github.io/',
          'index.html',
          'script.js',
          'style.css',
          'cover.svg',
          'global-web-chat.png',
          'app.webmanifest',
          'about-us/',
          'contact-us/',
          'privacy-policies/',
          'terms-of-services/',
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });
   
   
