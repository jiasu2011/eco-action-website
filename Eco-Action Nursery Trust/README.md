# Eco-Action Nursery Trust — website rebuild

A static, plain HTML/CSS/JS rebuild of the Eco-Action Nursery Trust website
(previously on Wix). No build step, no frameworks — open `index.html`
directly in a browser or deploy the folder as-is to any static host.

## Files

- `index.html` — Who are we? (homepage)
- `how-can-i-help.html` — How can I help? (planting days + donations)
- `how-are-we-doing.html` — How are we doing? (impact, species, supporters)
- `resources.html` — Resources for volunteers
- `styles.css` — shared stylesheet for all pages
- `script.js` — mobile nav disclosure + copy-to-clipboard button (both are
  progressive enhancements; the site works without JavaScript)
- `images/` — empty folder for real photos once you have them

## Swapping in real photos

Every image is currently a [placehold.co](https://placehold.co) placeholder
so the layout and image slots are obvious. Each one is preceded by an HTML
comment naming the real photo that belongs there, e.g.:

```html
<!-- Photo: circular photo — nursery / plants -->
<img src="https://placehold.co/500x500/e2ede2/1c4430?text=Photo%3A+nursery+%2F+plants" alt="Native plants growing at an Eco-Action nursery">
```

To swap one in:

1. Save the real photo into the `images/` folder (e.g. `images/nursery-plants.jpg`).
2. Replace the `src` with the local path: `src="images/nursery-plants.jpg"`.
3. Update the `alt` text if needed so it still accurately describes the photo.
4. You can leave or delete the HTML comment once the real photo is in place.

Search each HTML file for `<!-- Photo:` to find every slot.

## Updating the planting day dates

All four 2026 planting days live in **`how-can-i-help.html`**, inside a block
marked with HTML comments:

```html
<!-- PLANTING DAYS DATA — edit dates/times/locations here. Keep the JSON-LD block in <head> in sync. -->
<ul class="event-list">
  ...
</ul>
<!-- END PLANTING DAYS DATA -->
```

Each planting day is one `<li class="event-card">` with a label, date, and
time/location. Edit the text directly — no templating involved.

There is also an `Event` JSON-LD block near the top of the same file's
`<head>` (search for `"@type": "Event"`) that mirrors these same four dates
for search engines. When you change a date in the visible list, update the
matching `startDate`/`endDate` in that JSON-LD block too (ISO format,
`+12:00` is New Zealand Standard Time — use `+13:00` during NZ Daylight
Time, roughly late September to early April).

## Deploying

This is a plain static site — no build step required. Any of these work:

- **Netlify / Cloudflare Pages**: drag-and-drop the folder, or connect a git
  repo and set the publish directory to the project root (no build command).
- **GitHub Pages**: push the folder to a repo and enable Pages on the branch/
  root directory.

## Accessibility & SEO notes

- Each page has one `<h1>`, semantic landmarks (`header`, `nav`, `main`,
  `footer`), a skip-to-content link, and visible focus outlines.
- Social icons are links with `aria-label`s naming the platform, not
  icon-only buttons.
- Every page has a unique `<title>`, meta description, and Open Graph tags.
- The homepage includes `Organization`-style (`NGO`) JSON-LD; the "How can I
  help?" page includes `Event` JSON-LD for the four planting days.
- Animations/transitions respect `prefers-reduced-motion`.

## Suggested content corrections

The brief for this rebuild asked me to reproduce all page copy **verbatim**,
including known typos inherited from the original site, and to list
suggested corrections separately rather than fix them silently. That list
was provided in the chat that produced this build — check there for the
full list before making any wording changes to the HTML.
