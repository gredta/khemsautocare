# KhemsAutoCare

Professional car detailing business website for KhemsAutoCare, based in Jamaica, NY.

🌐 **Live Site:** [khemsautocare.netlify.app](https://khemsautocare.netlify.app/)

## Tech Stack

- [Eleventy (11ty)](https://www.11ty.dev/) — Static site generator
- [Nunjucks](https://mozilla.github.io/nunjucks/) — Templating
- [SASS](https://sass-lang.com/) — CSS preprocessing
- [Decap CMS](https://decapcms.org/) — Content management (blog)
- [Netlify](https://www.netlify.com/) — Hosting & deployment

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (site + CMS)
npm start
```

The site will be available at **http://localhost:8080**.

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start dev server with live reload + local CMS |
| `npm run build` | Production build |
| `npm run preview` | Production build served locally |

## Project Structure

```
src/
├── _data/          # Global data (client info)
├── _includes/      # Shared components & layouts
├── admin/          # Decap CMS config
├── assets/
│   ├── images/     # Site images
│   ├── js/         # JavaScript
│   ├── sass/       # SASS stylesheets
│   └── svgs/       # SVG assets
└── content/
    ├── blog/       # Blog posts (managed via CMS)
    └── pages/      # Site pages
```

## Deployment

Pushes to `main` automatically trigger a deploy on Netlify.
