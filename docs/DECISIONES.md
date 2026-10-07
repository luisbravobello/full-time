# FULL TIME

Web de lavandería y arreglos de sastrería orientada a dos acciones: encontrar el negocio y contactar rápidamente.

## Abrir y publicar

Abre esta carpeta con Live Server u otro servidor estático. Publica la carpeta completa, con `index.html` en la raíz. No necesita frameworks, compilación ni una API.

## Organización

```text
full-time/
├── index.html
├── README.md
├── assets/
│   └── style.css
├── images/
│   ├── favicon.svg
│   ├── lavadora-industrial.png
│   ├── secadora-industrial.png
│   └── torre-lavado.png
└── js/
    ├── app.js
    └── config.js
```

## Primero: HTML

Portada, servicios, sastrería, proceso de consulta, equipos, preguntas frecuentes, contacto y footer. HTML semántico con un h1, secciones identificadas, imágenes con texto alternativo y formulario etiquetado. Los equipos usan las imágenes facilitadas por el usuario. La sastrería se presenta con una fotografía real de costura, guardada en images/.

## Después: CSS

Fondo blanco, azul para acciones, verde suave para destacar sastrería y tonos claros para superficies. Manrope para titulares y DM Sans para lectura. Retícula de 12 columnas en escritorio, una columna en móvil, foco visible y movimiento reducido. Botón persistente de contacto en móvil. Los iconos son SVG.

## Finalmente: JavaScript

`config.js` concentra teléfono, WhatsApp, mapa, dirección escrita y horario. `app.js` controla el menú móvil, prepara el texto de consulta y conecta las acciones con esos datos. El contenido no se reconstruye con JavaScript.

El formulario no envía datos automáticamente ni usa un backend: crea un mensaje editable y abre WhatsApp cuando el usuario lo solicita. Los enlaces externos no se activan durante las pruebas con envíos reales.

## Datos aportados

- Teléfono: **+1 829-760-2825**.
- WhatsApp: **18297602825**.
- [Ubicación del negocio](https://share.google/odrjH0Jc6dyiD6DUu).
- Lunes a viernes: **8:30 a. m.–7:00 p. m.**.
- Sábados: **8:30 a. m.–5:00 p. m.**.

No se ha indicado el horario del domingo ni el texto exacto de la dirección. La página permite llegar usando el mapa confirmado. No se inventan precios, plazos, reseñas ni servicios de recogida.

## Encontrar el negocio

Incluye título, meta description, Open Graph y datos estructurados con la marca, teléfono, mapa y horarios confirmados. Cuando se tenga el dominio definitivo y la dirección escrita, añadir canonical, URL absoluta para la imagen social y dirección postal. Mantener el nombre y los datos consistentes con el perfil del negocio en Google.

Las fuentes de Google requieren conexión; hay tipografías del sistema como alternativa. Las imágenes de los equipos son locales.

## Verificación

Se comprobaron las imágenes locales, enlaces y anclas, botones a WhatsApp, llamada y mapa, texto de consulta editable, navegación móvil y anchos de 320, 390, 768 y 1024 px, sin desbordamientos ni errores JavaScript. No se ha publicado la web en un dominio ni se han enviado mensajes al negocio.

## Ampliación visual y reseñas

Nuevas secciones: consultas por tipo de prenda, preparación antes de la visita, ventajas del contacto directo y opiniones en Google. Se guardaron localmente costura-real.jpg, herramientas-sastreria.jpg y toallas-limpias.jpg. Son fotografías ilustrativas de apoyo; no documentan el local ni el equipo humano de FULL TIME.

Los cuatro enlaces de reseñas facilitados apuntan a opiniones del mismo perfil en Google Maps. Como sus textos no fueron accesibles, se muestran accesos a los originales, sin inventar autores, citas, fechas, estrellas o una puntuación agregada. No se añadió AggregateRating a los datos estructurados.

Fuentes de fotografías:
- Costura: https://unsplash.com/s/photos/seamstress (recurso photo-1708234165852-89c978e5e33d).
- Herramientas: https://unsplash.com/photos/0tBvf_HJ34c (Darling Arias).
- Toallas: https://www.pexels.com/photo/4210372/ (Karolina Grabowska).

## Identidad y recorte de secadora

Logo vectorial: images/logo-full-time.svg. Una percha dentro de un ciclo circular relaciona lavandería y sastrería. Se aplica en cabecera, footer y favicon.

Secadora: images/secadora-sin-fondo.png, editada con la herramienta integrada de imágenes. Prompt: retirar únicamente el fondo gris y la sombra exterior, conservar la máquina, perspectiva, panel y puerta, con fondo PNG transparente. El original secadora-industrial.png permanece guardado.

## Portada con dirección visual

Imagen: images/portada-full-time-profesional.png, creada con la herramienta integrada de generación. Prompt: fotografía publicitaria ilustrativa, persona adulta sonriente con ropa doblada en una lavandería luminosa, tonos blanco y azul, iluminación natural y encuadre limpio, sin textos ni marcas. La escena no documenta el local ni una clienta real. Se usa para acompañar el mensaje de marca, sin testimonio atribuido.

## Ajustes de servicios y contacto

La franja azul superior se retiró. Nuevos SVG de lavado, secado y sastrería. El botón flotante circular usa verde y símbolo WhatsApp, servido localmente en images/whatsapp.svg (Simple Icons), y apunta al número confirmado.

La sección de contacto sencillo tiene fondo blanco y images/cuidado-lavanderia-sastreria.png. Imagen ilustrativa creada con la herramienta integrada. Prompt: composición publicitaria luminosa con ropa clara doblada y herramientas de sastrería, fondo blanco, tonos azul suave y textiles naturales, sin textos ni marcas. No representa instalaciones reales.

## Sastrería e iconografía unificada

Sastrería tiene fondo blanco e images/sastreria-full-time.png, imagen ilustrativa creada con la herramienta integrada. Prompt: manos ajustando una prenda azul en una máquina blanca sin marcas, luz natural, composición editorial limpia y colores suaves, sin textos. No representa el local real.

Los símbolos de servicio se reutilizan en las consultas por prendas. Se incorporaron iconos coherentes en cuidados previos, ventajas de contacto y horario, manteniendo iconos decorativos fuera de la lectura del lector de pantalla.

## Reseñas y animaciones

Tarjetas de opiniones con perfiles SVG neutros y enlaces originales. Los avatares no son fotografías de los autores y no se atribuyen nombres, puntuaciones o comentarios no verificados.

js/animaciones.js usa IntersectionObserver para revelar una sola vez servicios, imágenes, pasos, opiniones y contacto con un desplazamiento de 18 px. El contenido permanece visible sin JavaScript; con prefers-reduced-motion no se oculta ni se anima. El foco de teclado también revela el bloque correspondiente.
