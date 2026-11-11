# Deploying friensys.com on IIS

The new site (`friensys-next/`) builds to plain static files. IIS serves them directly. Node.js is not needed on the server.

## Build

```bash
cd friensys-next
npm install
npm run build        # writes the site to friensys-next/out/
```

`out/` is the whole website, including `web.config`. To make a zip:

```powershell
Compress-Archive -Path friensys-next\out\* -DestinationPath deploy\friensys-site.zip -Force
```

## Server requirements (one-time)

1. IIS with the **Static Content** feature.
2. **IIS URL Rewrite** module: https://www.iis.net/downloads/microsoft/url-rewrite
   Without it, `web.config` fails with HTTP 500.19. It handles clean URLs (`/about` serves `about.html`) and the old-site redirects.
3. HTTPS binding for friensys.com and www.friensys.com.

## Deploy

1. Back up the current site folder (the old React site).
2. Empty the IIS site's physical folder, then copy in the contents of `out/` (or unzip the zip). `index.html` and `web.config` must sit at the top of the folder, not inside a subfolder.
3. Browse to `/`, `/about`, `/school-erp`, `/services/agentic-ai`, `/contact` and a made-up URL (it should show the site's 404 page).
4. Check an old URL redirects, for example `/product/schoolErp` should go to `/school-erp`.

## After go-live

- **Contact form:** add `https://friensys.com` and `https://www.friensys.com` to the allowed origins in the EmailJS dashboard, then send a test enquiry.
- **Google Search Console:** submit `https://friensys.com/sitemap.xml`.
- **LinkedIn:** the product links and the first company post can go live once `/services/agentic-ai` loads.

## What changed for the static build

- `next.config.ts` uses `output: "export"` and unoptimised images. School logos were resized to 200 px and three large screenshots converted to JPEG, so pages stay light without Next's image optimiser.
- Old-URL redirects moved from `next.config.ts` to `public/web.config`.
- Social share images use one static image, `public/og-default.png`, instead of images generated per page.
