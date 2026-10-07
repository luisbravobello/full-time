/* Apariciones discretas: sin bloquear el contenido si JS o el observador fallan. */
const motionPreference = matchMedia("(prefers-reduced-motion: reduce)");
const elements = [
  ...document.querySelectorAll(
    ".section-heading, .service-card, .garment-grid article, .tailoring-photo, .tailoring-grid>header, .steps li, .care-photo, .care-grid>header, .equipment-grid figure, .confidence-grid>header, .confidence-grid>figure, .reviews-heading, .review-card, .faq-section>header, .contact-grid>header, .contact-form",
  ),
];
let observer;
function revealAll() {
  observer?.disconnect();
  elements.forEach((element) => element.classList.remove("reveal-pending"));
}
if (!motionPreference.matches && "IntersectionObserver" in window) {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("reveal-pending");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
  );
  elements.forEach((element) => {
    // No animamos los elementos ya visibles al abrir un enlace de sección.
    if (element.getBoundingClientRect().top < innerHeight) return;
    element.classList.add("scroll-reveal", "reveal-pending");
    observer.observe(element);
  });
}
motionPreference.addEventListener("change", revealAll);
document.addEventListener("focusin", (event) => {
  event.target.closest(".reveal-pending")?.classList.remove("reveal-pending");
});
