"use strict";var precacheConfig=[["/index.html","c5b6b9195e288bd445229c51234fa64f"],["/static/css/main.f1b34472.css","9ef160a8b7afc1029bdc07ab9f8874c1"],["/static/js/main.b853dde7.js","2f1ce0dd022d3daff1ccf580f7322c69"],["/static/media/AngularJS_logo.svg.cf42bf59.png","cf42bf59c71a48a51469d361946438ce"],["/static/media/companies_photo.a025ac57.jpg","a025ac57c644792f15b248c1d5537a47"],["/static/media/emirates_photo.129b9fa9.jpg","129b9fa9dfa3b7f095ab2935458df780"],["/static/media/msz_photo.c3bac15e.jpg","c3bac15e946f948befaac9947dd71ffb"],["/static/media/projects_photo.60f98e89.jpg","60f98e895a0e74ceeaed24598caa2de4"],["/static/media/react_logo_transparent.2188f76e.png","2188f76e6a3e0fae11430f4d37a438ef"],["/static/media/technologies_photo.18ab74e1.jpg","18ab74e104970d356f01eac96dae9281"],["/static/media/thumb_up_photo.7de8c68c.jpg","7de8c68c0c0e73df5936e509ba6df382"],["/static/media/ts_logo.063b2673.jpg","063b267309613ec6c745a011270340ec"],["/static/media/wcag_logo.1b3a8ada.png","1b3a8ada29d54a91fc81177e351f466c"],["/static/media/working-photo.8efe1fa9.jpg","8efe1fa9cf1d24a1af49160973453bf2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});