/* Spades Solutions — header, mobile menu, quote form */
(function () {
  "use strict";

  /* ---- Sticky header state ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-stuck", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile menu ---- */
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");
  if (menuBtn && nav) {
    var setMenu = function (open) {
      nav.classList.toggle("is-open", open);
      header.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    menuBtn.addEventListener("click", function () {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") { setMenu(false); menuBtn.focus(); }
    });
    window.matchMedia("(min-width: 761px)").addEventListener("change", function (mq) { if (mq.matches) setMenu(false); });
  }

  /* ---- Quote form ---- */
  var form = document.getElementById("quote-form");
  if (form) {
    var status = form.querySelector(".form-status");
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Pre-select the service from contact.html#apparel or #events (a hash survives clean-URL redirects)
    var wanted = window.location.hash.slice(1) || new URLSearchParams(window.location.search).get("service");
    var select = form.querySelector("#service");
    if (wanted && /^[a-z]+$/.test(wanted) && select && select.querySelector('option[value="' + wanted + '"]')) select.value = wanted;

    var isBad = function (input) {
      var v = input.value.trim();
      return !v || (input.type === "email" && !emailRe.test(v));
    };
    var mark = function (input, bad) {
      input.closest(".field").classList.toggle("invalid", bad);
      input.setAttribute("aria-invalid", bad ? "true" : "false");
    };

    form.querySelectorAll("[data-required]").forEach(function (input) {
      input.addEventListener("blur", function () { if (input.value) mark(input, isBad(input)); });
      input.addEventListener("input", function () {
        if (input.closest(".field").classList.contains("invalid")) mark(input, isBad(input));
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstBad = null;
      form.querySelectorAll("[data-required]").forEach(function (input) {
        var bad = isBad(input);
        mark(input, bad);
        if (bad && !firstBad) firstBad = input;
      });
      if (firstBad) {
        status.textContent = "Some fields need fixing. Check the messages above.";
        status.className = "form-status bad";
        firstBad.focus();
        return;
      }

      // TODO(launch): demo only. Nothing is sent yet. Wire to Formspree or a backend before launch.
      var btn = form.querySelector('button[type="submit"]');
      var label = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Sending…";
      status.textContent = "";
      status.className = "form-status";

      setTimeout(function () {
        form.reset();
        form.querySelectorAll("[aria-invalid]").forEach(function (el) { el.removeAttribute("aria-invalid"); });
        btn.disabled = false;
        btn.textContent = label;
        status.textContent = "Thanks, your request is in.";
        status.className = "form-status ok";
      }, 900);
    });
  }

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
})();
