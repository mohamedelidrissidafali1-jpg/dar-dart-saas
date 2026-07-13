/*
 * Dar D'Art — service worker.
 *
 * Goals: make the app installable + resilient offline, WITHOUT ever caching
 * authenticated or sensitive data. Bump CACHE_VERSION to invalidate old caches.
 */
const CACHE_VERSION = "v1";
const STATIC_CACHE = `dardart-static-${CACHE_VERSION}`;
const PAGES_CACHE = `dardart-pages-${CACHE_VERSION}`;
const OFFLINE_URL = "/offline.html";

// Minimal app shell precached on install so the app opens offline.
const PRECACHE_URLS = [
  OFFLINE_URL,
  "/manifest.webmanifest",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/apple-touch-icon.png",
];

// Paths that must NEVER be served from cache — anything auth-gated or that
// depends on a live Supabase session. We always go to the network here.
const NEVER_CACHE_PATHS = [
  "/dashboard",
  "/complete-profile",
  "/sign-in",
  "/sign-up",
  "/reset-password",
  "/auth",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== STATIC_CACHE && k !== PAGES_CACHE)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Allow the page to trigger an immediate update.
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

function isNeverCache(pathname) {
  return NEVER_CACHE_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
}

// Cache-first for immutable/static assets (hashed _next assets, icons, images, fonts).
function isStaticAsset(url) {
  if (url.pathname.startsWith("/_next/static/")) return true;
  if (url.pathname.startsWith("/icons/")) return true;
  if (url.pathname.startsWith("/rooms/")) return true;
  if (url.pathname.startsWith("/excursions/")) return true;
  return /\.(?:css|js|woff2?|ttf|otf|png|jpg|jpeg|webp|gif|svg|ico)$/i.test(
    url.pathname
  );
}

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Never touch non-GET requests — protects the checkout POST and any mutation.
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Only handle our own origin. Supabase, wa.me (WhatsApp), and any third
  // party pass straight through to the network untouched.
  if (url.origin !== self.location.origin) return;

  // Never cache API routes or auth-gated pages — always live network, and if
  // the network is down we surface the real failure (no stale/authed data).
  if (url.pathname.startsWith("/api/") || isNeverCache(url.pathname)) {
    return; // default browser fetch
  }

  // Static assets → cache-first with background refresh.
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        const network = fetch(request)
          .then((res) => {
            if (res && res.ok) cache.put(request, res.clone());
            return res;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  // Navigations (public info pages) → network-first, fall back to the last
  // cached copy of that page, then to the branded offline page.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(PAGES_CACHE).then((cache) => cache.put(request, copy));
          }
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  // Everything else → network with cache fallback.
  event.respondWith(fetch(request).catch(() => caches.match(request)));
});
