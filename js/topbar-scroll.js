(() => {
  const MOBILE_BP = 1024;
  const DELTA = 12;
  const START_COLLAPSE_AT = 80;

  const body = document.body;
  const topbar = document.querySelector(".topbar");
  if (!body || !topbar) return;

  let lastY = window.scrollY || 0;
  let ticking = false;

  function setCollapsed(collapsed) {
    body.classList.toggle("topbar-collapsed", collapsed);
  }

  function update() {
    ticking = false;

    if (window.innerWidth > MOBILE_BP) {
      setCollapsed(false);
      lastY = window.scrollY || 0;
      return;
    }

    const currentY = Math.max(window.scrollY || 0, 0);
    const diff = currentY - lastY;

    if (currentY <= 24) {
      setCollapsed(false);
    } else if (Math.abs(diff) >= DELTA) {
      if (diff > 0 && currentY > START_COLLAPSE_AT) {
        setCollapsed(true);
      } else if (diff < 0) {
        setCollapsed(false);
      }
      lastY = currentY;
      return;
    }

    lastY = currentY;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
})();
