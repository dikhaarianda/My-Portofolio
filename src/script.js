  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = {
    profile: null, // profile tidak punya section
    about: document.getElementById("about"),
    portfolio: document.getElementById("portfolio"),
    contact: document.getElementById("contact")
  };
  let lastScrollTop = 0;
  const threshold = 10;

  // Ganti active link
  function setActiveLink(section) {
    navLinks.forEach(link => {
      if (link.dataset.section === section) {
        link.classList.add("bg-gray-900", "rounded-xl", "text-white");
      } else {
        link.classList.remove("bg-gray-900", "rounded-xl", "text-white");
      }
    });
  }

  // Detect scroll & update navbar visibility + active link
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Navbar visibility
    if (scrollTop <= threshold) {
      navbar.classList.remove("shadow-md", "-translate-y-full", "rounded-b-xl");
      navbar.classList.add("translate-y-0");
    } else {
      navbar.classList.add("shadow-md");

      if (scrollTop > lastScrollTop) {
        navbar.classList.add("-translate-y-full");
        navbar.classList.remove("translate-y-0", "rounded-b-xl");
      } else {
        navbar.classList.remove("-translate-y-full");
        navbar.classList.add("translate-y-0", "rounded-b-xl");
      }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    // ScrollSpy logic
    let currentSection = "profile"; // default
    for (const [key, section] of Object.entries(sections)) {
      if (!section) continue;
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = key;
        break;
      }
    }
    setActiveLink(currentSection);
  });

  // Klik manual link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const section = link.dataset.section;
      setActiveLink(section);
    });
  });

  // Init: set Profile aktif
  setActiveLink("profile");