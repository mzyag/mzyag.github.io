# mzyag.github.io

Ming Zhou 的个人 portfolio 站点，展示 AI Agent 平台项目经验和技术文章。

## Directory Structure

```
index.html                          Main page (hero, projects, writing, about, contact)
writing/                            7 technical articles (standalone HTML pages)
  deterministic-gating.html
  three-layers-evaluation.html
  when-not-to-use-llm.html
  engineering-the-harness.html
  ai-native-engineering.html
  memory-architecture.html
  distributed-systems-production.html
css/style.css                       Global styles
js/main.js                          Language toggle, nav, interactions
assets/
  Ming_Zhou_Resume.pdf              Downloadable resume
  fonts/                            Inter + JetBrains Mono (woff2)
sitemap.xml                         8 URLs for search engines
robots.txt                          Points to sitemap
google629a9468a31d348a.html         Google Search Console verification
```

## Tech Stack

- Pure HTML / CSS / JS — no framework, no build step
- Hosted on GitHub Pages (`https://mzyag.github.io/`)
- Bilingual (EN/ZH) via `data-en` / `data-zh` attribute toggle in JS

## Architecture

### Bilingual System

Language state lives on `<html data-lang="en|zh">`. CSS handles visibility:

```css
[data-lang="en"] [data-zh] { display: none; }
[data-lang="zh"] [data-en] { display: none; }
```

Every user-visible string is a pair of sibling spans:

```html
<span data-en>Projects</span><span data-zh>项目</span>
```

JS (`main.js`) toggles `data-lang` on click and persists to `localStorage`.

### Page Types

**Main page** (`index.html`):
- Sections: `#hero` → `#projects` → `#writing` → `#about` → `#contact`
- Each section uses `.section` (dark bg) or `.section-alt` (slightly lighter bg), wrapped in `.container`
- Project cards: `.project-card > .project-header + .project-body`
- Article cards: `.article-card` inside `.articles-grid`

**Article pages** (`writing/*.html`):
- Body has `.article-page` class (triggers reading progress bar in JS)
- Nav starts with `.nav.scrolled` (always compact, no hero)
- Links back to main page use `../` prefix: `href="../#writing"`
- Same nav/footer structure as main page, same JS file (`../js/main.js`)

### CSS Architecture

- Dark theme only, CSS custom properties in `:root`
- Key tokens: `--bg` `--surface` `--border` `--text` `--text-secondary` `--accent`
- Fonts: Inter (sans) / JetBrains Mono (mono), self-hosted woff2
- Class naming: flat BEM-like (`.project-card`, `.project-header`, `.metric-value`)
- Responsive: single breakpoint approach, mobile-first

### JS Behaviors (`main.js`)

- Scroll → nav gets `.scrolled` class (compact style) when `scrollY > 40`
- Mobile hamburger → `.nav-hamburger.open` + `.nav-links.open`
- IntersectionObserver → `.reveal.visible` on cards/timeline for entrance animation
- Article pages → `.reading-progress` bar appended to body, width = scroll %
- Nav highlight → active section gets `.active` on corresponding nav anchor

## Commands

```bash
# Dev
python3 -m http.server 8000    # Serve locally on :8000, no build step
```

## Testing

No test suite — this is a static site. Validate changes by visual inspection in a browser.

## Conventions

- New article: create `writing/<slug>.html` → add card to `index.html` `.articles-grid` → add `<url>` to `sitemap.xml` → add full SEO head (OG, Twitter Card, JSON-LD, canonical, favicon — copy from any existing article page)
- Bilingual parity: every user-visible string MUST have both `<span data-en>` and `<span data-zh>` siblings
- No build pipeline — edit HTML directly
- Commit message format: follow repo convention via `git log`

## Gotchas

- DO NOT remove `.reveal` or `.visible` CSS classes — they are added by JS IntersectionObserver at runtime, not in source HTML
- Article pages MUST have `.article-page` on `<body>` — without it, the reading progress bar won't initialize
- `google629a9468a31d348a.html` is a Google Search Console verification file — DO NOT delete or modify

## SEO

- All 8 pages have: canonical URL, Open Graph, Twitter Card, JSON-LD, favicon
- `sitemap.xml` (8 URLs) + `robots.txt` in place
- Google Search Console verified
- When adding a page: update `sitemap.xml`, add full meta tags in `<head>` (copy pattern from existing article)
