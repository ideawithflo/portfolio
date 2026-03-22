# ideawithflo.com — Portfolio Website

**Florian Huber e.U. — Industrial Designer, Vienna**
*"Florian Huber manifestiert Ideen"*

🌐 Live: https://ideawithflo.com

## Stack
- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **CMS:** Sanity v3 (sanity.io/manage → Project: m7bjlhok)
- **Fonts:** DM Sans + Anonymous Pro
- **Features:** Dark/Light Mode, Project Slider, 3D GLB Viewer, Structured Data (SEO/GEO)

## Lokale Entwicklung

### Frontend starten
```bash
cd web
npm install
npm run dev        # Dev: http://localhost:3000
npm run build      # Production build
npm start          # Production: http://localhost:3000
```

### Sanity Studio starten
```bash
cd cms
npm install
npm run dev        # http://localhost:3333
```

## Deployment → Vercel

1. GitHub Repo erstellen und Code pushen
2. vercel.com → Import Git Repository
3. Environment Variables setzen:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID=m7bjlhok`
   - `NEXT_PUBLIC_SANITY_DATASET=production`
   - `NEXT_PUBLIC_SITE_URL=https://ideawithflo.com`
4. Domain `ideawithflo.com` in Vercel verbinden
5. Sanity CORS: sanity.io/manage → API → CORS Origins → `https://ideawithflo.com` hinzufügen

## Inhalt pflegen

1. Sanity Studio öffnen: http://localhost:3333 (lokal) oder https://florianhuber.sanity.studio
2. Projekt anlegen: Titel, Kategorie, Jahr, Cover Image, Beschreibung
3. **Publish** klicken → sofort live auf der Website
4. Ein Projekt als **Featured** markieren → erscheint als Hero

## Dateien
```
florianhuber-portfolio/
├── web/              → Next.js Frontend
│   ├── app/          → Seiten & Layout
│   ├── components/   → Hero, Navbar, Projects, Slider...
│   ├── lib/          → Sanity Client & Queries
│   └── public/       → Logos, Bilder
├── cms/              → Sanity Studio
│   └── schemaTypes/  → Project & Settings Schema
├── assets/           → Original Logo-Dateien
└── README.md
```

## Domain & SEO
- Domain: ideawithflo.com (Namecheap)
- Structured Data: Person, ProfessionalService, WebSite (JSON-LD)
- Sitemap: https://ideawithflo.com/sitemap.xml
- robots.txt: erlaubt GPTBot, Claude, PerplexityBot
- Google Search Console: Token in `app/layout.tsx` → `verification.google` eintragen
