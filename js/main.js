/*
  FROM SNEAKERS TO SHARP — site behavior
  Vanilla JS, no dependencies. Handles: mobile nav, scroll-in reveals,
  footer year, and front-end form submission feedback.

  NOTE ON FORMS: This is a static site with no server. Forms below
  prevent the default page reload and show a success message so the
  page works out of the box. To actually collect emails/messages,
  point each <form action="..."> at a form backend (e.g. Formspree,
  Getform, Basin, Mailchimp/ConvertKit embed, or your own endpoint)
  and remove/adjust the preventDefault behavior in handleFormSubmit
  if that backend needs a real navigation or fetch POST instead.
*/

(function () {
  "use strict";

  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initFooterYear() {
    var els = document.querySelectorAll("[data-year]");
    var year = String(new Date().getFullYear());
    els.forEach(function (el) {
      el.textContent = year;
    });
  }

  function handleFormSubmit(event) {
    var form = event.target;
    if (!form.classList.contains("js-form")) return;

    if (!form.checkValidity()) {
      return; // let native validation messages show
    }

    event.preventDefault();

    var success = form.parentElement.querySelector(".form-success");
    form.classList.add("is-submitted");
    if (success) {
      success.classList.add("is-visible");
      success.focus && success.focus();
    }
    form.reset();
  }

  function initForms() {
    document.querySelectorAll("form.js-form").forEach(function (form) {
      form.addEventListener("submit", handleFormSubmit);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initFooterYear();
    initForms();
  });
})();
