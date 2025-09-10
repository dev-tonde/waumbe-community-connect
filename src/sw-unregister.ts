if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations?.().then(async (regs) => {
    for (const r of regs) {
      try {
        await r.unregister();
      } catch {}
    }
    if ("caches" in window) {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      } catch {}
    }
  });
}
