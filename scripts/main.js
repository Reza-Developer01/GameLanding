const getMenuIcon = document.querySelector(".menu-icon");
const getCloseIcon = document.querySelector(".close-icon");
const getNavigation = document.querySelector(".navigation");
const getCover = document.querySelector(".cover");

getMenuIcon.addEventListener("click", () => {
  getNavigation.classList.add("navigation--open");
  getCover.classList.add("cover--show");
});

getCloseIcon.addEventListener("click", () => {
  getNavigation.classList.remove("navigation--open");
  getCover.classList.remove("cover--show");
});
