let nav = document.querySelector("nav.navbar"),
  menuBtn = document.querySelector(".phone-menu"),
  menu = document.querySelector(".navbar__container>ul");


// on scrolling
document.addEventListener("scroll", (e) => {
  let pageScroll = document.scrollingElement.scrollTop,
    navPosition = nav.offsetTop;

  if (pageScroll > navPosition + 0.5) {
    nav.classList.add("navbar--show")
  } else {
    nav.classList.remove("navbar--show")
  }
});

// on clicking phone menu
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show-list")
  nav.classList.toggle("white-nav")
})