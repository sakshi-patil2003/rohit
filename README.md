# Rohit Patil — Portfolio

React + Vite + Tailwind + Framer Motion. Content and media are sourced
directly from https://www.behance.net/rohitpatil204 — see `src/data/projects.js`
for the exact real values (profile info, 9 real projects, real thumbnail URLs,
real embed URLs) pulled from that profile. Nothing is invented; anything
Behance doesn't expose (categories, dates, durations) is simply left out.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
```

This sandbox has no network access, so I wasn't able to run `npm install` /
`npm run build` myself to prove it compiles — you'll need to run those two
commands once on your machine. The code follows standard, current APIs for
every package in `package.json`, but flag it to me if `npm run build` throws
anything and I'll fix it directly.

## How the Behance media is actually loaded (no local files, ever)

Two different mechanisms, chosen per what each piece of UI needs:

**1. Grid/card thumbnails → direct image hotlink.**
Every project card (`ProjectCard.jsx`, the Showreel spotlight, the hero still)
points straight at the thumbnail URL Behance itself serves on the public
profile grid, e.g.:
`https://mir-s3-cdn-cf.behance.net/projects/404/8c6e77253774059...jpg`
This is the same URL your browser already loads when you open the profile —
Behance's own page hotlinks it the same way — so it's a safe, stable `<img>`
source. `loading="lazy"` on every one, so nothing off-screen fetches early.

**2. Full project content (all images, credits, any video) → Behance's own
embed iframe.**
Behance publishes a sanctioned "Embed Project" mechanism at
`https://www.behance.net/embed/project/{id}`. This is a real, first-party
Behance product — not scraping, not a worked-around CORS block — it's the
same iframe you'd get from the "</>" embed button on any Behance project
page. `BehanceEmbed.jsx` wraps this iframe with an `IntersectionObserver` so
it doesn't mount (and doesn't fire a network request) until it's scrolled
into view or a modal opens it — that's the lazy-loading requirement satisfied
for the heaviest media on the page.

Project detail pages (`/work/:slug`) and the fullscreen "Watch Showreel" /
Showreel-section modal both use this embed, so whatever Rohit has actually
posted for that project — stills, carousel, embedded video — is what
renders, straight from Behance, always current with his real profile.

**Why no direct `<video>` tag:** Behance doesn't expose a stable, public raw
video file URL for hotlinking outside its own player — only the embed above.
Using the iframe is the "closest technically valid Behance embed method" the
brief asked for, rather than a fragile scraped or guessed video URL.

## Known real-content caveats

- Three separate projects are literally titled "Music Video" on Behance —
  they're kept distinct via their project IDs/slugs (`music-video-251952673`,
  `music-video-251046209`, `music-video-250525327`), not renamed.
- No project categories/tags or dates were exposed on the profile or project
  grid I could read, so cards don't show a genre label or year — showing one
  would mean guessing.
- Work experience dates weren't listed either (Behance just shows role /
  org / location), so the About section doesn't show any.
- If Rohit posts new projects later, `src/data/projects.js` is the one file
  to update — add an entry with the new project's id/slug/thumb/title and
  everything else (embed, detail page, "next project" link) wires up
  automatically.
