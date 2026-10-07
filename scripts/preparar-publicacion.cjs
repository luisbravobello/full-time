/* Ejecutar con Node al configurar el dominio. No forma parte del JS del navegador. */
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const configuration = JSON.parse(
  fs.readFileSync(path.join(root, "docs/publicacion.json"), "utf8"),
);
if (!configuration.siteUrl) {
  throw new Error(
    "Completa siteUrl en docs/publicacion.json con la dirección HTTPS asignada por Cloudflare Pages.",
  );
}
const origin = new URL(
  configuration.siteUrl.endsWith("/")
    ? configuration.siteUrl
    : configuration.siteUrl + "/",
);
if (
  origin.protocol !== "https:" ||
  /^(localhost|127\.|0\.|\[::1\])/.test(origin.hostname) ||
  origin.username ||
  origin.password ||
  origin.search ||
  origin.hash
) {
  throw new Error(
    "Usa una URL HTTPS pública sin credenciales, consulta ni fragmento.",
  );
}
const escape = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const baseFiles = [
  "index.html",
  ...fs
    .readdirSync(path.join(root, "pages"))
    .filter((name) => name.endsWith(".html"))
    .map((name) => "pages/" + name),
];
const locales = ["es", "en", "fr", "pt", "de", "it", "ru", "ht"];
const files = locales.flatMap((locale) =>
  baseFiles.map((file) => (locale === "es" ? file : locale + "/" + file)),
);
const publicPath = (name) =>
  name.endsWith("index.html")
    ? name.slice(0, -10)
    : name.replace(/\.html$/, "");
for (const name of files) {
  const file = path.join(root, name),
    url = new URL(publicPath(name), origin).href;
  let html = fs
    .readFileSync(file, "utf8")
    .replace(/\s*<link\s+rel="canonical"[^>]*>/g, "")
    .replace(/\s*<link\s+rel="alternate"[^>]*>/g, "")
    .replace(/\s*<meta\s+property="og:(?:url|image|image:alt)"[^>]*>/g, "");
  html = html.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
    (full, text) => {
      const business = JSON.parse(text);
      if (
        configuration.address?.streetAddress &&
        configuration.address?.addressLocality
      ) {
        business.address = {
          "@type": "PostalAddress",
          ...Object.fromEntries(
            Object.entries(configuration.address).filter(([, value]) => value),
          ),
        };
      }
      business.url = origin.href;
      business.image = new URL(
        "images/portada-full-time-profesional.png",
        origin,
      ).href;
      return (
        '<script type="application/ld+json">' +
        JSON.stringify(business, null, 2).replaceAll("<", "\\u003c") +
        "</script>"
      );
    },
  );
  const base = /^(en|fr|pt|de|it|ru|ht)\//.test(name) ? name.slice(3) : name;
  const alternates = locales
    .map(
      (locale) =>
        `<link rel="alternate" hreflang="${locale}" href="${escape(new URL(publicPath(locale === "es" ? base : locale + "/" + base), origin).href)}">`,
    )
    .join("");
  html = html.replace(
    "</head>",
    alternates +
      `<link rel="alternate" hreflang="x-default" href="${escape(new URL(publicPath(base), origin).href)}"></head>`,
  );
  html = html.replace(
    "</head>",
    `<link rel="canonical" href="${escape(url)}"><meta property="og:url" content="${escape(url)}"><meta property="og:image" content="${escape(new URL("images/portada-full-time-profesional.png", origin).href)}"><meta property="og:image:alt" content="Escena ilustrativa de cuidado de prendas en FULL TIME"></head>`,
  );
  fs.writeFileSync(file, html);
}
fs.writeFileSync(
  path.join(root, "sitemap.xml"),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    files
      .map(
        (name) =>
          `  <url><loc>${escape(new URL(publicPath(name), origin).href)}</loc></url>`,
      )
      .join("\n") +
    "\n</urlset>\n",
);
fs.writeFileSync(
  path.join(root, "robots.txt"),
  "User-agent: *\nAllow: /\n\nSitemap: " +
    new URL("sitemap.xml", origin).href +
    "\n",
);
console.log(
  "Canonical, Open Graph, LocalBusiness, sitemap y robots preparados para " +
    origin.href,
);
if (
  !configuration.address?.streetAddress ||
  !configuration.address?.addressLocality
)
  console.log(
    "LocalBusiness sigue parcial: falta la dirección postal confirmada.",
  );
