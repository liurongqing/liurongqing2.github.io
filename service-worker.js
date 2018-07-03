
let CACHE_NAME = 'liurongqing-v2018-07-02-09-56';

// 页面文件
let pageToCache = ["/mathjax-latex", "/high-performance", "/nginx-gzip", "/yahoo-35", "/phaser2-custom", "/linux-crontab", "/css-rect", "/gitignore", "/server-git", "/shortcuts", "/vscode", "/https-encrypt", "/gulp", "/git-use", "/linux-all", "/nvm", "/gogs", "/scss", "/ghost", "/mnmp", "/mac-software", "/jekyll-github", "/react-1", "/react-2", "/phaser-2048-1", "/phaser-2048-2", "/phaser-2048-3", "/phaser-2048-4", "/phaser-2048-5", "/phaser-2048-6"];

let resToCache = [
    '/',
    '/assets/css/style.css',
    '/assets/js/main.js',
    '/assets/images/favicon.ico',
    '/assets/images/logo.svg',
];

// let cache_list = pageToCache.concat(resToCache);

// 安装
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                cache.addAll(pageToCache);
                return cache.addAll(resToCache);
            })
    );
});


// 激活
self.addEventListener('activate', function (event) {

    event.waitUntil(
        caches.keys()
            .then(function (keys) {
                return Promise.all(keys
                    .filter(function (key) {
                        return key !== CACHE_NAME;
                    })
                    .map(function (key) {
                        return caches.delete(key);
                    })
                );
            })
    );
});

// 提取
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});