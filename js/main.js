// Minimal vanilla JS — mobile nav toggle only. No frameworks, no build step.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("nav.primary-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
    var expanded = nav.classList.contains("open");
    toggle.setAttribute("aria-expanded", String(expanded));
  });
});
