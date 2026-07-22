//
//  HomeFuel site — tiny progressive-enhancement layer.
//  1. Nav gains a blurred backdrop after the first scroll.
//  2. .reveal elements fade in as they enter the viewport.
//  3. Fuel rings (SVG .prog circles) sweep from empty to their
//     data-frac when scrolled into view — same "honest wow" beat
//     as the app: real numbers, only the drawing animates.
//  Everything degrades gracefully with JS off (rings render full).
//

(function () {
  "use strict";

  // ── Nav scroll state ───────────────────────────────────────
  var nav = document.getElementById("nav");
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ── Footer year ────────────────────────────────────────────
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)").matches;

  // ── Ring setup: dasharray from radius, start empty ─────────
  var rings = Array.prototype.slice.call(
    document.querySelectorAll(".rings-svg .prog"));
  rings.forEach(function (c) {
    var r = parseFloat(c.getAttribute("r"));
    var circ = 2 * Math.PI * r;
    var frac = Math.min(1, Math.max(0,
      parseFloat(c.getAttribute("data-frac") || "1")));
    c.style.strokeDasharray = String(circ);
    c.dataset.target = String(circ * (1 - frac));
    c.style.strokeDashoffset = reduceMotion
      ? c.dataset.target        // no sweep — final state immediately
      : String(circ);           // empty until revealed
  });

  function fillRings(svg) {
    svg.querySelectorAll(".prog").forEach(function (c) {
      c.style.strokeDashoffset = c.dataset.target;
    });
  }

  // ── IntersectionObserver reveals ───────────────────────────
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("in");
    });
    document.querySelectorAll(".rings-svg").forEach(fillRings);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      if (el.classList.contains("reveal")) el.classList.add("in");
      if (el.classList.contains("rings-svg")) fillRings(el);
      io.unobserve(el);
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -6% 0px" });

  document.querySelectorAll(".reveal, .rings-svg").forEach(
    function (el) { io.observe(el); });
})();
