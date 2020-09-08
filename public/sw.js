// self.addEventListener("install", e => {
//     e.waitUntil(
//         caches.open("static").then(cache => {
//             return cache.addAll(["./", "./src/css/style.css", "./src/css/results.css", "./src/css/moredetails.css"])
//         })
//     )
//     console.log("sw installed!")
// })