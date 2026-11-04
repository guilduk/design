# Guild Design

The design system behind [guilduk.com](https://guilduk.com) and every Guild UK product: Skeleton v2: forest, DM Sans, colour fields, the stamp on finished work, real photos of people of every skin colour, and parts that work on a phone first.

**Read [DESIGN.md](DESIGN.md)** for the rules. **Open [examples/index.html](examples/index.html)** to see every part, and [examples/app.html](examples/app.html) for an app with a phone tab bar and a computer side menu.

## What is in it

| Folder | What |
|---|---|
| `tokens/tokens.json` | Every colour, size, space and timing. The one source. |
| `css/tokens.css` | The tokens as CSS variables, light and dark. Made from the JSON. |
| `css/guild.css` | Base styles and parts: buttons, forms, cards, badges, tables, app shell, dialogs, toasts, the stamp. |
| `css/fonts.css`, `fonts/` | DM Sans (and DM Serif Display, used only in the logo lettering) to serve from your own site, with their licences. |
| `css/shadcn.css`, `tailwind/preset.cjs` | The same values for Next.js projects using Tailwind and shadcn/ui. |
| `assets/brand/` | The Guild UK logo and crown stamp (see [BRAND.md](BRAND.md) before using them). |
| `assets/icons/` | Product icons: the stamp frame with each product's symbol. |
| `email/template.html` | An email layout that works in Gmail, Outlook and Apple Mail. |
| `scripts/` | `build.mjs` makes the CSS, `check-contrast.mjs` tests every colour pairing, `make-icon.mjs` makes product icons. |
| `AGENTS.md` | Rules for AI coding assistants, so they build in this style by default. |

## Use it

### A plain website

Copy `css/` and `fonts/` into your site, then:

```html
<html lang="en-GB">
<link rel="stylesheet" href="/css/fonts.css">
<link rel="stylesheet" href="/css/tokens.css">
<link rel="stylesheet" href="/css/guild.css">
<body class="gu">
  <h1>Good technology, done properly.</h1>
  <a class="gu-btn" href="/start/">Let’s talk</a>
</body>
```

### Next.js with Tailwind and shadcn/ui

See [docs/nextjs.md](docs/nextjs.md). In short: add the preset to `tailwind.config`, paste `css/shadcn.css` into `app/globals.css`, load the two fonts with `next/font/google`, and add `css/guild.css` for the parts Tailwind does not have.

### A new product icon

```bash
node scripts/make-icon.mjs register '<path d="m9 14 2 2 4-4"/>'
```

Draw the symbol on a 24 by 24 grid in the Lucide style. You get a forest mark, a white mark and an app icon.

## Change it

1. Edit `tokens/tokens.json`.
2. `npm run build` to remake the CSS.
3. `npm test` to check every colour pairing still passes WCAG 2.2 AA.
4. Add the change to the decisions table in DESIGN.md and to CHANGELOG.md.

## Licence

The code and CSS are under the [MIT licence](LICENSE). The fonts are under the SIL Open Font License (`fonts/OFL-*.txt`). **The Guild UK name, logo, crown and stamp frame are not covered by either**: see [BRAND.md](BRAND.md).

A Guild UK project. Guild UK Systems Limited, registered in England and Wales, company number 17552887.
