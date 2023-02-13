// nav menu click scroll

const menuItems = document.querySelectorAll(".site-nav a href^=['#']");

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

// toTop button

function toTop() {
  window.scrollTo(0, 0);
}