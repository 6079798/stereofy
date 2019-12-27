import SmoothScroll from "smooth-scroll";
import Choices from "choices.js";

import "./lib/media";
import "./lib/modals";

SmoothScroll("[data-scroll]", {
  updateURL: false,
  speedAsDuration: true
});

const navBtn = document.querySelector("[data-nav-toggle]");
const navContainer = document.querySelector(".nav");

navBtn.addEventListener("click", ({ currentTarget }) => {
  currentTarget.classList.toggle("nav-btn--active");
  if (navContainer.style.height) {
    navContainer.style.height = "";
  } else {
    navContainer.style.height = `${navContainer.scrollHeight}px`;
  }
});

const stickyTrigger = document.querySelector("[data-sticky-trigger]");
if (stickyTrigger) {
  const height = stickyTrigger.scrollHeight;
  document.addEventListener("scroll", () => {
    if (window.scrollY >= height) {
      document.body.classList.add("page--sticky-header");
    } else {
      document.body.classList.remove("page--sticky-header");
    }
  });
}

const searchBtn = document.querySelector(".header__search .search__btn");
const searchInput = document.querySelector(".header__search .search__input");

searchBtn.addEventListener("click", () => {
  searchInput.classList.toggle("search__input--open");
});

const langSelect = new Choices("#lang", {
  searchEnabled: false
});
