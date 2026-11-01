# Rules for AI coding assistants

This file is for Claude, Copilot, Cursor and any other assistant working on a Guild UK product. Follow it unless the person you are working with says otherwise. The full guide is [DESIGN.md](DESIGN.md).

## Always

- **Use the kit, do not reinvent it.** Colours, sizes and timings come from `tokens/tokens.json` (`--gu-*` variables, or the Tailwind preset). Parts come from `css/guild.css` (`gu-*` classes) or shadcn/ui themed by `css/shadcn.css`. Never hard-code a new colour.
- **Headings:** DM Serif Display, never bold. Openings and section headings use two lines, the second an italic phrase in `<em>`: `Take the register.<br><em>Ten seconds.</em>`
- **A small label above each section heading:** `<p class="gu-eyebrow">01 / What we do</p>` or a trail like `Today / Tuesday maths`.
- **One main button per screen.** Buttons that go somewhere carry the `arrow-up-right` icon. Button words say what happens.
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

- Coral words on a white background (too faint). Coral is for the accent on dark, lines, shapes and the main button on dark.
- Recolour, redraw or stretch the Guild UK logo, or put the crown in another product's icon. Make product icons with `scripts/make-icon.mjs`.
- Bold serif headings, more than one italic accent per heading, heavy shadows, gradients on buttons, or square corners on everything.
- Put secrets, real people's data, or internal business details in a public repository. See [docs/open-source.md](docs/open-source.md).

## Before you say it is done

- `npm test` passes, including colour contrast if you changed tokens.
- You looked at it at 390, 768 and 1280 pixels wide, in light and dark.
- Keyboard only: you can reach and use everything, and you can see where you are.
