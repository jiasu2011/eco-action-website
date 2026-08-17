/* =========================================================
   Eco-Action Nursery Trust — progressive-enhancement scripts
   1. Mobile nav disclosure (works without JS: nav list is
      visible by default; this only adds the collapse/expand).
   2. Copy-to-clipboard button for the bank account number.
   ========================================================= */

(function () {
  "use strict";

  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav-list");
    if (!toggle || !nav) return;

    nav.setAttribute("data-collapsed", "true");
    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.setAttribute("data-collapsed", String(expanded));
    });

    // Close the menu after choosing a link (small screens only).
    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && window.innerWidth < 760) {
        toggle.setAttribute("aria-expanded", "false");
        nav.setAttribute("data-collapsed", "true");
      }
    });
  }

  function initCopyButtons() {
    var buttons = document.querySelectorAll("[data-copy-target]");
    buttons.forEach(function (button) {
      var targetId = button.getAttribute("data-copy-target");
      var target = document.getElementById(targetId);
      if (!target || !navigator.clipboard) {
        button.hidden = true;
        return;
      }
      var defaultLabel = button.textContent;
      button.addEventListener("click", function () {
        var text = target.textContent.trim();
        navigator.clipboard.writeText(text).then(function () {
          button.textContent = "Copied!";
          button.setAttribute("data-copied", "true");
          window.setTimeout(function () {
            button.textContent = defaultLabel;
            button.removeAttribute("data-copied");
          }, 2000);
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initCopyButtons();
  });
})();
