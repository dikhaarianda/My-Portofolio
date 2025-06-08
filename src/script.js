let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah
    navbar.classList.remove("translate-y-0");
    navbar.classList.add("-translate-y-full");
    navbar.classList.remove("shadow-md");
  } else {
    // Scroll ke atas
    navbar.classList.remove("-translate-y-full");
    navbar.classList.add("translate-y-0");
    navbar.classList.add("shadow-md");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});