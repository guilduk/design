# Rules for AI coding assistants

This file is for Claude, Copilot, Cursor and any other assistant working on a Guild UK product. Follow it unless the person you are working with says otherwise. The full guide is [DESIGN.md](DESIGN.md).

## Always

- **Use the kit, do not reinvent it.** Colours, sizes and timings come from `tokens/tokens.json` (`--gu-*` variables, or the Tailwind preset). Parts come from `css/guild.css` (`gu-*` classes) or shadcn/ui themed by `css/shadcn.css`. Never hard-code a new colour.
- **Skeleton v2 (4 November 2026).** Read section 2 of DESIGN.md. The v1 signature details (italic second line, label above, arrow) are retired: they are what every AI builder now makes.
- **Headings:** DM Sans 500, tight tracking, about five words, two lines at most. One face and one colour: no italic or coloured accent word.
- **No small label above a heading** and no decorative 01 / 02 / 03. Sections are separated by space and a change of field colour, not lines.
- **One main button per screen:** a flat filled block with words that say what happens. No arrows or icons in buttons or links.
- **Photos:** real photographs; wherever people appear, a mix of skin colours, ages and backgrounds.
- **Phone first.** Design at 390 pixels wide. Apps get a bottom tab bar on phones and a forest side menu from 1024 pixels.
- **Light by default, dark follows the device.** Check both.
- **Accessibility:** WCAG 2.2 AA. 44 pixel targets, visible focus, labels on every field, `aria-label` on icon buttons, `aria-current="page"` in navigation, a skip link, `lang="en-GB"`, respect `prefers-reduced-motion`, a pause button for anything that moves for more than five seconds.
- **Saved things get a reference** people can read out (`REG-2611-K4PQ`), shown with `gu-ref`. Important finishes show the stamp (`gu-done` and `gu-stamp`).
- **Footer:** "A Guild UK project" with the crown (`gu-made-by`), linking to https://guilduk.com.
- **Fonts from the product's own domain** (`next/font` or `css/fonts.css`), never a request to Google at runtime.
- **No trackers, no analytics that follow people, no adverts.** If a cookie is not strictly necessary, do not set it.
- **Icons:** Lucide, 2 px stroke.

## Writing

- UK English. Plain words. Short sentences.
- **No long dashes (—) and no exclamation marks.** Use a full stop or a colon.
- Say what people get in their words. No jargon, no tool names in the interface.
- Errors say what went wrong and how to fix it: "Check the email address, for example name@example.org". Never "Invalid input" or "Something went wrong" alone.
- Never invent clients, quotes, reviews, numbers, results or photos. Example data is clearly marked as made up.
- "Charities, community and faith groups", never one group alone.

## Never

- Coral words on a white background (too faint). In v2 coral is only the stamp's tick and the focus ring on forest.
- Recolour, redraw or stretch the Guild UK logo, or put the crown in another product's icon. Make product icons with `scripts/make-icon.mjs`.
- The tells in DESIGN.md section 2: labels above headings, decorative numbering, italic or coloured accent words, arrows, thin rules and outlined boxes everywhere, gradients, glows, shadows at rest, rows of identical icon cards, cream with coral.
- Put secrets, real people's data, or internal business details in a public repository. See [docs/open-source.md](docs/open-source.md).

## Before you say it is done

- `npm test` passes, including colour contrast if you changed tokens.
- You looked at it at 390, 768 and 1280 pixels wide, in light and dark.
- Keyboard only: you can reach and use everything, and you can see where you are.
