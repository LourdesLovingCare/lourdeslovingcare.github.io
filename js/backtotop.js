document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.querySelector(".back-to-top");

  function toggleButton() {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }

  // Run once on load (fixes refresh issue)
  toggleButton();

  // Run on scroll
  window.addEventListener("scroll", toggleButton);

  // Smooth scroll back to top when clicked
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
