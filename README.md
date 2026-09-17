# From Sneakers to Sharp — Website

Marketing site for *From Sneakers to Sharp*, built with plain HTML, CSS, and
JavaScript — no build step, no framework, no dependencies. Drop the folder
into a GitHub Pages repo and it works as-is.

## Structure

```
index.html               Home
book.html                Quick Start vs. Full Edition, pricing, decision guide
see-the-difference.html  Visual proof: fit, shoes, Levels, Formulas, personalization
about.html                Miguel's story + governing brand principle
media.html                Podcast/media kit + booking form
workshops.html            Workshop format, audiences, request form
creators.html              Influencer positioning, asset kit, request form
ai-assistant.html          AI Wardrobe Assistant explainer + waitlist
connect.html                Email signup + role-based contact
css/styles.css              Shared design system (colors, type, components)
js/main.js                   Mobile nav, scroll reveals, form handling
assets/favicon.svg           Site favicon (S2S monogram)
robots.txt / sitemap.xml     Basic SEO
CNAME                        GitHub Pages custom domain (fromsneakerstosharp.com)
```

## Design system

The palette follows the book's own "Safe Foundation + Controlled Accent"
principle: one neutral base (ivory/charcoal), one controlled accent (burnt
amber), and one sparing echo tone. All colors, spacing, and type live as CSS
custom properties at the top of `css/styles.css` — change them there and the
whole site updates.

Fonts are loaded from Google Fonts (Fraunces for headlines, Inter for body)
with system-font fallbacks defined, so the site still renders acceptably
without a network connection to Google Fonts.

## Deploying to GitHub Pages

1. Push this repo's contents to the `main` branch (or whichever branch your
   Pages source uses).
2. In the repo's **Settings → Pages**, set the source to that branch, root
   folder.
3. The `CNAME` file already points at `sneakerstosharp.com`. Make sure
   your domain's DNS has the appropriate A/ALIAS/CNAME records pointing at
   GitHub Pages (see GitHub's "Managing a custom domain" docs).

## Forms

This is a static site with no server, so every `<form class="js-form">`
currently just prevents the page reload and shows an inline success message
— nothing is actually sent anywhere yet. To start collecting real
submissions, either:

- Point the `<form>`'s `action` at a form backend (Formspree, Getform,
  Basin, etc.) and adjust/remove the `preventDefault` logic in
  `js/main.js` → `handleFormSubmit`, or
- Wire an email marketing tool's embed/API (Mailchimp, ConvertKit, etc.)
  in place of the plain `<form>`.

The forms already in place:

- Home + AI Assistant + Connect: email capture
- Media: podcast booking request
- Workshops: workshop request
- Creators: creator-kit request

## Content source

Copy, structure, and pricing are based on Section 16 ("Website Strategy")
and Section 17 ("Product Architecture") of the *From Sneakers to Sharp*
marketing plan (Quick Start $12.99 / Full Edition $24.99 working paperback
MSRPs). Replace the placeholder photography (`.placeholder-frame` blocks)
with real See the Difference comparisons, headshots, and cover art as they
become available.
