# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Johnny's Blog — a single-page personal blog/portfolio site built with React 19 + Vite. Uses GSAP for animations and Locomotive Scroll for smooth scrolling.

## Development

```bash
npm install          # install dependencies
npm run dev          # start dev server (Vite)
npm run build        # production build
npm run preview      # preview production build
npm run lint         # run ESLint
```

## Architecture

React SPA with component-based structure. All in `src/`.

- `index.html` — entry point, loads Google Fonts (Inter + Noto Sans SC)
- `src/main.jsx` — React entry, renders `<App />`
- `src/App.jsx` — root component, initializes Locomotive Scroll + GSAP ScrollTrigger, contains all animation logic
- `src/index.css` — all styles; "Geometric Tech" aesthetic with warm beige background (`#FDF6EC`), responsive breakpoints at 768px and 480px
- `src/components/` — React components:
  - `Navbar.jsx` — fixed nav with scroll-aware styling, smooth scroll via Locomotive Scroll
  - `Hero.jsx` — hero section with SVG geometric composition
  - `About.jsx` — three cards (Developer, Designer, Explorer)
  - `Blog.jsx` — blog post cards
  - `Contact.jsx` — contact links (email, GitHub, Twitter)
  - `Footer.jsx` — copyright footer
  - `GeoBackground.jsx` — fixed SVG background with grid lines and geometric shapes
  - `FloatingShapes.jsx` — floating decorative geometric particles

## Key Technical Details

- **Locomotive Scroll** handles smooth scrolling; GSAP ScrollTrigger is synced via `scrollerProxy`
- **GSAP animations** are initialized in `App.jsx` useEffect; all ScrollTrigger instances use the Locomotive Scroll scroller
- SVG geometric shapes are inline JSX (triangles, circles, rectangles, diamonds)
- Language is `zh-CN` (Chinese)
- Accent colors: red (`#E63946`) / yellow (`#F4A261`) / blue (`#457B9D`) / brown (`#5C4033`) on beige (`#FDF6EC`)
