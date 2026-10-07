# Publicar FULL TIME en Cloudflare Pages

No es necesario comprar un dominio para empezar. Pages asigna una dirección `https://nombre-del-proyecto.pages.dev` al proyecto. El nombre concreto se conoce al crearlo y depende de su disponibilidad.

## Primera publicación

1. En Cloudflare, crea un proyecto de Pages mediante Direct Upload.
2. Sube la carpeta `full-time/` o un ZIP con `index.html` en la raíz, conservando `pages/`, `assets/`, `images/`, `js/`, `_headers` y `_redirects`.
3. No hace falta instalar paquetes ni ejecutar una compilación para esta web estática.
4. Copia la URL pública asignada y comprueba navegación, imágenes y WhatsApp.

## Completar los metadatos de publicación

1. Escribe la URL pública en `siteUrl` dentro de `docs/publicacion.json`.
2. Cuando esté confirmada, añade también la dirección postal en `address`; no la sustituyas por el enlace del mapa.
3. Desde la carpeta del proyecto, ejecuta:

```powershell
node scripts/preparar-publicacion.cjs
```

4. El script actualiza canonical, Open Graph y las URLs del negocio; crea `sitemap.xml` y `robots.txt`. La dirección postal se incorpora únicamente si están completos calle y localidad.
5. Vuelve a subir la carpeta actualizada a Pages. Comprueba los enlaces públicos y registra el sitemap en Search Console.

No se han generado URLs con un subdominio inventado ni se ha publicado el sitio automáticamente. El JSON-LD mantiene los datos confirmados; sin dirección postal LocalBusiness permanece parcial para los requisitos de Google.

`_headers` establece cabeceras básicas y `_redirects` redirige `/index.html` hacia `/`. Las rutas de las páginas permanecen en `/pages/`. Direct Upload y conexión Git son modalidades diferentes; revisa cuál prefieres antes de crear el proyecto.

## Fuentes oficiales

- [Cloudflare: sitios HTML estáticos](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/).
- [Cloudflare: Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/).
- [Cloudflare: cabeceras](https://developers.cloudflare.com/pages/configuration/headers/).
- [Cloudflare: redirecciones](https://developers.cloudflare.com/pages/configuration/redirects/).
