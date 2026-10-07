# FULL TIME

Web de lavandería, secado industrial y arreglos de sastrería, con contacto directo mediante WhatsApp, teléfono y mapa.

## Abrir y publicar

Sirve la carpeta completa con Live Server o cualquier servidor estático. `index.html` es la entrada. No requiere frameworks ni compilación. No uses file://, porque JavaScript usa módulos.

## Estructura

```text
full-time/
├── index.html
├── README.md
├── pages/
│   ├── lavanderia.html
│   ├── sastreria.html
│   ├── cuidados.html
│   ├── preguntas.html
│   └── contacto.html
├── assets/
│   └── css/style.css
├── images/
│   └── fotos, logo y SVG
├── js/
│   ├── app.js
│   ├── config.js
│   └── animaciones.js
└── docs/
    └── DECISIONES.md
```

## Páginas

- Inicio: presentación, servicios, fotos, opiniones y consulta.
- Lavandería: lavado, secado, tipos de prendas y equipos.
- Sastrería: arreglos y consulta del servicio.
- Cuidados: preparación de prendas antes de la visita.
- Preguntas frecuentes: precios, plazos y cuidados.
- Contacto: teléfono, horario, mapa y preparación de mensaje.

## HTML, CSS y JavaScript

El contenido, la navegación y el footer están en HTML. CSS Grid organiza el diseño adaptable. JavaScript controla el menú, genera el mensaje de WhatsApp y aplica animaciones discretas. El contenido permanece visible sin JavaScript y las animaciones respetan movimiento reducido.

`config.js` conserva los datos confirmados del negocio. El formulario prepara una consulta; no envía mensajes automáticamente. Los enlaces de servicio pueden seleccionar una opción mediante `contacto.html?servicio=...`.

## Contacto confirmado

- +1 829-760-2825.
- Lunes a viernes: 8:30 a. m.–7:00 p. m.
- Sábados: 8:30 a. m.–5:00 p. m.
- Mapa: https://share.google/odrjH0Jc6dyiD6DUu.

La dirección escrita y el horario del domingo no han sido aportados. No se inventan precios, plazos, testimonios ni servicios de recogida.

## Fotografías y opiniones

Las imágenes están guardadas en `images/`. Se combinan fotos aportadas por el negocio con escenas ilustrativas creadas y fotografías de apoyo. Las opiniones enlazan cuatro reseñas originales de Google; no se reproducen textos, autores ni puntuaciones sin verificar.

Consulta [DECISIONES.md](docs/DECISIONES.md) para las fuentes de imágenes y los prompts de generación. El dominio definitivo aún no está configurado; al publicar se podrá añadir canonical, imagen social absoluta y la dirección postal confirmada.

## Revisión oficial

Consulta [REVISION-SEO-ACCESIBILIDAD.md](docs/REVISION-SEO-ACCESIBILIDAD.md) para las fuentes oficiales, comprobaciones y límites actuales. JSON-LD correcto sintácticamente no significa que se hayan cumplido todas las propiedades exigidas por Google para resultados enriquecidos.

## Optimización y Cloudflare Pages

Las siete imágenes utilizadas tienen versiones WebP: de 7.39 MB a 0.47 MB en total (94% menos), sin recortar las escenas y conservando la transparencia. Los originales permanecen guardados.

Consulta [CLOUDFLARE.md](docs/CLOUDFLARE.md). Puedes empezar con el subdominio pages.dev asignado al crear el proyecto. docs/publicacion.json y scripts/preparar-publicacion.cjs permiten generar canonical, Open Graph, sitemap y robots con esa URL pública, sin inventarla. El script utiliza las rutas sin extensión que sirve Cloudflare Pages.

## Idiomas y nueva identidad

Selector SVG con Español, English, Français, Português, Deutsch, Italiano, Русский y Kreyòl Ayisyen. Son versiones HTML estáticas (48 páginas), no dependen de un traductor en el navegador. Inglés revisado manualmente; las seis traducciones adicionales se generaron automáticamente y requieren revisión de redacción por hablantes antes de publicación comercial. El selector conserva ruta, consulta y sección.

idiomas.js adapta mensajes de interfaz, horario y consulta de WhatsApp. traducciones.js contiene los textos locales. El generador de publicación incluye las 48 URLs y alternates hreflang con el dominio definitivo.

Nuevo logo SVG: monograma FT, aro dorado y gota. Se aplica a cabecera, footer y favicon. La versión anterior está guardada en images/logo-full-time-anterior.svg.

## Logo actual

La identidad actual usa azul #1949db, verde suave #e0f187 y azul oscuro #12203b. Incluye una prenda estilizada y un detalle de cuidado en el símbolo. Se aplicó a las ocho versiones de idioma y al favicon. La propuesta dorada anterior permanece como respaldo.
