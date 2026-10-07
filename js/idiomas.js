import { translations } from "./traducciones.js";
/* Textos del comportamiento; las páginas completas se traducen en su HTML. */
export const english = document.documentElement.lang === "en";
const messages = {
  "Hola FULL TIME. Quisiera consultar por":
    "Hello FULL TIME. I would like to ask about",
  "Abrir menú": "Open menu",
  "Cerrar menú": "Close menu",
  "Hola FULL TIME. Quisiera consultar sus servicios de lavandería y sastrería.":
    "Hello FULL TIME. I would like to ask about your laundry and tailoring services.",
  "Número pendiente de confirmar.": "Phone number to be confirmed.",
  "Abre la ubicación de FULL TIME en el mapa.":
    "Open the FULL TIME location on the map.",
  "Consulta el horario por WhatsApp antes de tu visita.":
    "Check opening hours on WhatsApp before your visit.",
  "Lunes a viernes: 8:30 a. m.–7:00 p. m. · Sábados: 8:30 a. m.–5:00 p. m.":
    "Monday–Friday: 8:30 AM–7:00 PM · Saturday: 8:30 AM–5:00 PM.",
  "Escribe una consulta antes de continuar.":
    "Write an enquiry before continuing.",
  "Tu mensaje está listo. Pulsa Abrir WhatsApp para revisarlo y enviarlo.":
    "Your message is ready. Select Open WhatsApp to review and send it.",
  "Mensaje preparado. Puedes copiarlo; falta confirmar el número del negocio.":
    "Message prepared. You can copy it; the business number is still to be confirmed.",
  "Mensaje copiado.": "Message copied.",
  "No se pudo copiar automáticamente. Selecciona el texto del mensaje para copiarlo.":
    "Automatic copying was unavailable. Select the message text to copy it.",
};
export function translate(message) {
  const locale = document.documentElement.lang;
  if (locale === "es") return message;
  if (locale === "en") return messages[message] || message;
  return translations[locale]?.[message] || message;
}
const selector = document.querySelector(".language-menu");
selector?.querySelectorAll("a").forEach((link) => {
  const url = new URL(link.href);
  url.search = location.search;
  url.hash = location.hash;
  link.href = url.href;
});
document.addEventListener("click", (event) => {
  if (selector && !selector.contains(event.target)) selector.open = false;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && selector?.open) {
    selector.open = false;
    selector.querySelector("summary").focus();
  }
});
