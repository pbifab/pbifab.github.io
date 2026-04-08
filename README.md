# PBIFab Solutions LLP — Website

## Project Overview
Full multi-page website for PBIFab Solutions LLP, a Microsoft Power BI & Fabric analytics consultancy.

## File Structure
```
pbifab/
├── index.html              # Home / Executive Summary
├── README.md               # This file
├── css/
│   └── style.css           # Main stylesheet (all pages)
├── js/
│   └── main.js             # Navbar, chatbot, animations, contact form
├── assets/
│   └── logo.png            # Place your logo here (PNG, ~36x36px)
└── pages/
    ├── overview.html       # Company Overview
    ├── mission.html        # Mission & Vision
    ├── services.html       # Products & Services
    ├── markets.html        # Target Market & Customers
    ├── advantages.html     # Competitive Advantages
    ├── team.html           # Leadership & Team
    ├── developments.html   # Recent Developments
    └── contact.html        # Contact Information + Form
```

## Features
- 9-page website with full navigation
- Responsive design (mobile, tablet, desktop)
- Sticky navbar with scroll effect
- Mobile hamburger menu
- Scroll-triggered animations
- Interactive chatbot (bottom right) with smart responses
- Contact form that opens mailto: to analytics@pbifab.com
- Chatbot form that sends email to analytics@pbifab.com
- Dark corporate theme (slate/azure/green)
- Syne + DM Sans Google Fonts

## Deployment

### Option 1: Static Hosting (Recommended)
Upload the entire `pbifab/` folder to any static host:
- **Netlify**: Drag & drop the folder at netlify.com/drop
- **Vercel**: `npx vercel` in the pbifab/ directory
- **GitHub Pages**: Push to a repo, enable Pages in settings
- **Azure Static Web Apps**: Deploy via Azure Portal or CLI

### Option 2: Web Server
Upload to any web server (Apache, Nginx, IIS) — no backend required.
All paths are relative so the site works from any subdirectory.

### Option 3: Local Preview
Open `index.html` directly in a browser. 
Note: For best results use a local server (VS Code Live Server, Python http.server, etc.)

## Adding Your Logo
1. Place your logo file (PNG format recommended) in the `assets/` folder
2. Name it `logo.png`
3. The navbar will automatically display it (36x36px display size)
4. If no logo file is found, the text wordmark "PBIFab" is shown instead

## Customization

### Colors (css/style.css — :root variables)
```css
--azure: #0078d4;        /* Microsoft Blue — primary */
--azure-light: #00b4d8;  /* Cyan accent */
--fabric: #74c647;       /* Green — secondary/success */
--slate: #0d1b2a;        /* Dark background */
```

### Contact Email
The email `analytics@pbifab.com` is used in:
- Footer (all pages)
- Contact page form (mailto: link)
- Chatbot form (mailto: link)
- js/main.js (search for `analytics@pbifab.com` to update)

### Fonts
Currently using Google Fonts (Syne + DM Sans).
For offline/intranet use, download fonts and update the `<link>` tags.

## Browser Support
- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Mobile: iOS Safari 14+, Android Chrome 90+

## No Backend Required
The contact form and chatbot use `mailto:` links — no server-side code needed.
For a proper form submission backend, integrate with:
- Formspree.io (free tier available)
- Netlify Forms (automatic with Netlify hosting)
- EmailJS (client-side email sending)

## License
© 2025 PBIFab Solutions LLP. All rights reserved.
