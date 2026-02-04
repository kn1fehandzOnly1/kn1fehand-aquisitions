# Landing Page Template

A clean, responsive landing page template built with HTML, CSS, and JavaScript. Features design tokens for easy customization, accessibility, and integration with Resend for email notifications.

## Features

- Mobile-first responsive design
- Dark theme with orange accent
- Pricing tiers with toggle
- Email signup form with Resend integration
- Accessible components (skip links, semantic HTML, ARIA)
- No dependencies, pure static files

## Customization

Edit the CSS variables in `styles.css` to change colors, fonts, and spacing:

```css
:root {
  --brand: #ff631f; /* Accent color */
  --bg: #0b0c10; /* Background */
  /* ... */
}
```

Update content in `index.html` and email settings in `main.js`.

## Deployment

### Vercel

1. Push this code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click "New Project" and import your repository.
4. Vercel will automatically detect it as a static site and deploy.

### Other Platforms

This is static HTML, so it works on any web host (Netlify, GitHub Pages, etc.).

## Email Setup

To enable email sending:

1. Sign up for [Resend](https://resend.com).
2. Get your API key.
3. In `main.js`, replace `YOUR_RESEND_API_KEY` with your key.
4. Verify a domain and update the `from` email.

For production, consider server-side integration to keep API keys secure.

## License

© 2026 Christopher Gray. All rights reserved.