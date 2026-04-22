// Service Worker — Daily App
// כל פעם שמעלים גרסה חדשה, שנו את מספר הגרסה כאן:
const VERSION = 'v1';
const CACHE = 'daily-' + VERSION;

// התקנה — שמור קבצים בcache
self.addEventListener('install', e => {
  self.skipWaiting(); // עבור מיד לגרסה החדשה
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(['/', '/index.html', '/foods.js']))
  );
});

// הפעלה — מחק cache ישן
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim()) // קח שליטה על כל הטאבים מיד
  );
});

// בקשות — תמיד מהרשת קודם, cache כגיבוי
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // עדכן cache בכל בקשה מוצלחת
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request)) // אם אין אינטרנט — מה cache
  );
});
