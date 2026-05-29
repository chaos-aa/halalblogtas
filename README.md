# Well & Truly Eaten — Restaurant Review Blog

A personal restaurant review blog built with [Astro](https://astro.build), hosted on GitHub Pages. No database, no CMS, no ads.

## Getting Started

```bash
npm install
npm run dev       # localhost:4321
npm run build     # production build → ./dist
```

## Adding a New Review

Create a new `.md` file in `src/content/restaurants/`:

```
src/content/restaurants/restaurant-name.md
```

Use this template:

```markdown
---
name: "Restaurant Name"
suburb: "Suburb"
cuisine: "Italian"          # used for filtering
rating: 8                   # 1–10
price: "$$$"                # $  $$  $$$  $$$$
visited: 2024-12-01
tags: ["tag1", "tag2"]
address: "123 Street, Suburb"   # optional
highlight: "One-line summary shown on the card."
recommended_dishes: ["Dish 1", "Dish 2"]   # optional
would_return: true
---

Your full review here in Markdown...
```

Commit and push — GitHub Actions builds and deploys automatically.

## Deploying to GitHub Pages

1. Go to your repo Settings → Pages
2. Set Source to **GitHub Actions**
3. Update `site` in `astro.config.mjs` to your GitHub Pages URL
4. Push to `main` — the workflow handles the rest

## Structure

```
src/
├── content/
│   ├── config.ts              # Zod schema for restaurant entries
│   └── restaurants/           # One .md file per restaurant
├── components/
│   └── RestaurantCard.astro   # Card used on index page
├── layouts/
│   └── Base.astro             # Site-wide nav, fonts, CSS vars
└── pages/
    ├── index.astro            # Homepage with filters + sort
    ├── about.astro
    └── restaurants/
        └── [slug].astro       # Individual review page
```
