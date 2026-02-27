const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(section => observer.observe(section));
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});