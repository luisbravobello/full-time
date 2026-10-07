# Revisión de documentación y código

Revisión: 7 de octubre de 2026. Se contrastó el código de las seis páginas con documentación oficial.

## Fuentes consultadas

- [HTML Living Standard: secciones](https://html.spec.whatwg.org/multipage/sections.html): `section` representa una sección temática; `div` es apropiado para agrupaciones de estilo que no tienen un elemento semántico mejor.
- [WAI: encabezados](https://www.w3.org/WAI/tutorials/page-structure/headings/): jerarquía coherente y evitar saltos de nivel al abrir subsecciones.
- [Google: guía inicial de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es): contenido útil, enlaces rastreables, organización, títulos, descripciones y acceso a los recursos.
- [Google: LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=es): propiedades obligatorias y prueba de resultados enriquecidos antes de publicar.

## Comprobado en el proyecto

- Idioma, viewport, título y meta description en cada página.
- Open Graph propio por página.
- Un h1 y un main, identificadores únicos y referencias a secciones existentes.
- Navegación y contenido en HTML; enlaces reales con href.
- Texto alternativo en imágenes; SVG decorativos con aria-hidden.
- Etiquetas vinculadas a controles, mensajes de estado y foco visible.
- Animaciones desactivadas con movimiento reducido y contenido visible sin JavaScript.
- WhatsApp, teléfono, horarios y mapa coinciden con los datos facilitados.
- Se corrigió el formulario para rechazar consultas compuestas solo por espacios.

## Lo que todavía no está completo

El JSON-LD actual contiene datos reales y tiene sintaxis válida, pero **no equivale a una validación completa de resultados enriquecidos**: Google exige `address` en LocalBusiness y todavía no tenemos una dirección postal confirmada. No se inventó una dirección ni se copió un horario externo.

El dominio definitivo permitirá completar canonical, sitemap y URL absoluta de la imagen social. Estos datos no deben apuntar a localhost. Después de publicar, comprobar la URL pública con Rich Results Test y Search Console; no se ha ejecutado una inspección de Google de este servidor local.

Las fotografías utilizadas ya tienen versiones WebP optimizadas: 7.39 MB se redujeron a 0.47 MB en total. Una prueba visual de navegador no sustituye una medición Lighthouse o de Core Web Vitals en el alojamiento público.

No se incluyen puntuaciones agregadas ni reseñas inventadas. El proyecto enlaza las opiniones originales. Los `div` de retícula no se sustituyen por secciones vacías: cambiar etiquetas sin significado no mejora la semántica ni garantiza posicionamiento.
