"use strict";
const menuButton = document.querySelector(".mobile_nav_toggle");
const mobileNav = document.querySelector("nav");

menuButton.addEventListener("click", (e) => {
  const visibility = mobileNav.getAttribute("data-visible");

  if (visibility === "false") {
    mobileNav.setAttribute("data-visible", "true");
    menuButton.setAttribute("aria-expandedcd ", "true");
  } else {
    mobileNav.setAttribute("data-visible", "false");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
