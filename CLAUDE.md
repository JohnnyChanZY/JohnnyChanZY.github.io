# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal blog/portfolio website deployed to GitHub Pages (JohnnyChanZY.github.io). It uses vanilla HTML, CSS, and JavaScript with no build system or framework.

## Local Development

To preview the site locally:

```bash
# Using Python
python -m http.server 8000

# Or using Node.js
npx serve .
```

Then visit http://localhost:8000

## Architecture

### Main Site Structure
- `index.html` - Main portfolio/blog page with sections: Hero, Projects, About, Contact
- `css/style.css` - Global stylesheet with CSS variables for the design system
- `js/main.js` - JavaScript interactions (custom cursor, navbar scroll effects, mobile menu)

### Sub-sites
- `yico/` - Independent sub-site with its own pages (trip schedule visualization)

### Design System
The site uses a consistent color palette defined in CSS variables:
- `--red: #9D1301` - Primary accent
- `--blue: #405DAA` - Secondary accent
- `--cream: #FEE6AA` - Warm highlight
- `--gold: #F7BF17` - Decorative accent

Fonts: Cormorant Garamond (headings), Noto Sans SC (body, Chinese support)

### Key Features
- Custom animated cursor (desktop only, hidden on mobile)
- Smooth scroll navigation
- Responsive design with breakpoints at 768px and 480px
- Fixed navbar with blur backdrop effect

## Deployment

The site deploys automatically to GitHub Pages when pushing to the main branch. The `.nojekyll` file indicates this is a plain static site, not Jekyll.
