import { english, translate } from "./idiomas.js";
import { business } from "./config.js";
/* Navegación nativa: solo se controla la visibilidad del menú móvil. */
const menu = document.querySelector(".menu-button");
const nav = document.querySelector("#main-nav");
function closeMenu() {
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", translate("Abrir menú"));
  nav.classList.remove("is-open");
}
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute(
    "aria-label",
    open ? translate("Cerrar menú") : translate("Abrir menú"),
  );
  nav.classList.toggle("is-open", open);
});
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menu.focus();
  }
});
matchMedia("(min-width:761px)").addEventListener("change", closeMenu);
/* Los destinos públicos se activan con datos reales, sin envío automático. */
const whatsappUrl = (message) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  if (!business.whatsapp) return;
  link.href = whatsappUrl(
    translate(
      "Hola FULL TIME. Quisiera consultar sus servicios de lavandería y sastrería.",
    ),
  );
  link.target = "_blank";
  link.rel = "noopener";
});
if (document.querySelector("#contact-form")) {
  const phone = document.querySelector("#business-phone");
  phone.textContent =
    business.phone || translate("Número pendiente de confirmar.");
  document.querySelector("#business-address").textContent =
    business.address || translate("Abre la ubicación de FULL TIME en el mapa.");
  document.querySelector("#business-hours").textContent =
    translate(business.hours) ||
    translate("Consulta el horario por WhatsApp antes de tu visita.");
  if (business.map) {
    const directions = document.querySelector("#directions");
    directions.href = business.map;
    directions.hidden = false;
  }
  if (business.phone) {
    const call = document.querySelector("#call");
    call.href = "tel:" + business.phone.replace(/[^+\d]/g, "");
    call.hidden = false;
  }
  /* La consulta seleccionada es editable antes de abrir WhatsApp. */
  const form = document.querySelector("#contact-form");
  const service = document.querySelector("#service");
  const message = document.querySelector("#message");
  const initialService = new URLSearchParams(location.search).get("servicio");
  if ([...service.options].some((option) => option.value === initialService))
    service.value = initialService;
  const status = document.querySelector("#contact-status");
  const prepared = document.querySelector("#prepared");
  document.querySelectorAll("[data-service]").forEach((link) =>
    link.addEventListener("click", () => {
      service.value = link.dataset.service;
      prepared.hidden = true;
      status.textContent = "";
    }),
  );
  form.addEventListener("input", () => {
    message.setCustomValidity("");
    prepared.hidden = true;
    status.textContent = "";
  });
  form.addEventListener("change", () => {
    prepared.hidden = true;
    status.textContent = "";
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!message.value.trim()) {
      message.setCustomValidity(
        translate("Escribe una consulta antes de continuar."),
      );
      message.reportValidity();
      return;
    }
    const text = `${translate("Hola FULL TIME. Quisiera consultar por")} ${service.selectedOptions[0].textContent.toLowerCase()}.\n\n${message.value.trim()}`;
    document.querySelector("#prepared-text").textContent = text;
    prepared.hidden = false;
    const link = document.querySelector("#whatsapp-message");
    link.hidden = !business.whatsapp;
    if (business.whatsapp) link.href = whatsappUrl(text);
    status.textContent = business.whatsapp
      ? translate(
          "Tu mensaje está listo. Pulsa Abrir WhatsApp para revisarlo y enviarlo.",
        )
      : translate(
          "Mensaje preparado. Puedes copiarlo; falta confirmar el número del negocio.",
        );
  });
  document
    .querySelector("#copy-message")
    .addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(
          document.querySelector("#prepared-text").textContent,
        );
        status.textContent = translate("Mensaje copiado.");
      } catch {
        status.textContent = translate(
          "No se pudo copiar automáticamente. Selecciona el texto del mensaje para copiarlo.",
        );
      }
    });
}
