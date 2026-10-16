/* Birmingham Biohazard Cleaning - shared script */
(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Prefill the contact form from the enquiry card (?service=&urgency=&phone=)
  var form = document.getElementById("contact-form");
  if (form) {
    var params = new URLSearchParams(window.location.search);
    ["service", "urgency", "phone"].forEach(function (key) {
      var value = params.get(key);
      var field = form.elements[key];
      if (value && field) {
        field.value = value;
      }
    });
  }
})();
