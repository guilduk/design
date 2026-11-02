# Guild Design

How every Guild UK product looks, moves, reads and behaves. Follow this guide and a new product feels like it came from the same careful hands as guilduk.com, without anyone copying a screen.

The values live in [`tokens/tokens.json`](tokens/tokens.json). The parts live in [`css/guild.css`](css/guild.css). Both are shown working in [`examples/index.html`](examples/index.html) and [`examples/app.html`](examples/app.html).

---

## 1. What we are going for

**Good technology. Real people.** Products for people who run things: charities, community and faith groups, small businesses, teachers, families. Most of them are busy volunteers, not technical, and often on a phone.

The look is **calm, clear and signed off**. Old craft guilds stamped finished work to say it was done properly; our stamp says the same.

Seven principles, in order of importance:

1. **Plain first.** If a sentence, a field or a screen can go, it goes. Say what people get, in their words.
2. **One clear next step.** Every screen has one main action. Everything else is quieter.
3. **Phone first, calm on a computer.** Design at 390 pixels wide, then give the extra room to white space, not to more things.
4. **Everyone can use it.** WCAG 2.2 AA is the floor, not the goal. Big targets, real contrast, works with a keyboard and a screen reader, respects reduced motion.
5. **Theirs, not ours.** People's data is in their name, can be downloaded in one go, and is never sold or tracked. No adverts, no trackers, no cookie banner needed.
6. **Honest.** Never invent clients, quotes, numbers or photos. Prices exactly as published. Errors say what happened and what to do.
7. **Finished properly.** Tested before release, documented, with a reference number people can quote.

---

## 2. The signature: what makes it ours

These seven details carry the brand. Any product using at least five of them will feel like Guild UK.

| Detail | How | Where |
|---|---|---|
| **The two-line heading** | DM Serif Display. First line plain, second line an italic phrase: "Take the register. *Ten seconds.*" | Page and section openings |
| **The italic accent** | Forest on light, coral on dark. One per heading, never more. | Headings only |
| **The label above** | Small capitals with spacing: `01 / WHAT WE DO`, or a trail: `GUILD UK / SERVICES`, `TODAY / TUESDAY MATHS` | Above every section heading |
| **The arrow** | ↗ (Lucide `arrow-up-right`) on every link or button that takes you somewhere. It nudges up and right on hover. | Buttons, link cards, rows |
| **The stamp frame** | The octagonal frame from the logo, around a symbol. The crown for Guild UK, the product's own symbol for each product. | Logo, app icon, the "done" moment |
| **The forest band** | A full-width forest area with white words, a coral accent and a coral main button. | Openings, closing calls to action, the side menu |
| **The reference** | Every saved thing gets a short reference people can read out: `GUK-2611-XPFUTY`, `REG-2611-K4PQ`. | Confirmations, emails, receipts |

---

## 3. Colour

Forest does most of the work. Coral is used sparingly, one accent at a time. White space keeps it calm.

| Name | Hex | Use |
|---|---|---|
| Forest | `#174131` | Headings, buttons, links, dark bands, the side menu, the logo on light |
| Forest deep | `#0F3326` | Button hover, pressed states |
| Ink | `#142019` | Body text; the darkest backgrounds |
| Coral | `#F39380` | The italic accent on dark, the main button on dark, thin lines, step numbers |
| Sage | `#E0F0E7` | Soft panels, table headers, selected rows, the reference box in emails |
| Moss | `#5A635D` | Quieter text: hints, dates, captions |
| White | `#FFFFFF` | Page backgrounds; words and the logo on forest or ink |

**Status colours** are deeper than usual so they pass as words on white: danger `#B42318`, warning `#8A5300`, success `#17603F`. Each has a soft background to sit on. Never use colour alone to say something: add a word or an icon ("Absent", not just a red dot).

**Charts** use, in order: forest, coral, `#5E9C7E`, `#2F5D8A`, `#C9A227`, `#8C5A9E`. Label lines directly rather than relying on a legend.

### Rules that keep it readable

- **Coral is never words on white.** It is 2.3 to 1. Use it for large italic headings on dark, lines, shapes and the main button on dark (with ink words, 7.4 to 1).
- **Words on forest are white.** Words on sage are ink or forest.
- **Never recolour the logo coral.** Forest on light, white on dark, nothing else.
- Every pairing used by the kit is checked by `npm test` ([`scripts/check-contrast.mjs`](scripts/check-contrast.mjs)). If you add a colour, add its pairings there.

### Dark mode

Light is the default. Dark follows the device unless the person chooses (put `data-theme="dark"` or `"light"` on `<html>`, or the `.dark` class for shadcn). Remember their choice on that device only.

In dark mode the page is a deep green-black (`#0E1712`), panels are ink (`#142019`), words are near-white, the italic accent and the main button turn **coral with ink words**, and links turn a soft green (`#A9DCC0`). The forest band stays forest. Every pairing passes AA in both modes.

---

## 4. Lettering

| Use | Typeface | Size |
|---|---|---|
| Opening (one per page at most) | DM Serif Display | `clamp(42px, 6.2vw, 92px)`, line height 1.05 |
| Page heading | DM Serif Display | `clamp(36px, 4.6vw, 58px)` |
| Section heading | DM Serif Display | `clamp(30px, 3.2vw, 43px)` |
| Card or panel heading | DM Serif Display | `clamp(22px, 2vw, 29px)` |
| Lead paragraph | DM Sans | `clamp(17px, 1.35vw, 20px)`, moss |
| Body | DM Sans 400 | 16 px, line height 1.7 |
| Buttons, labels | DM Sans 500 to 600 | 15 px |
| Label above a heading | DM Sans 600, capitals, spacing 0.16em | 12 px |
| Captions, dates | DM Sans | 13 px, moss |

- Headings are never bold: DM Serif Display has one weight and that is the point.
- Small headings inside forms and lists (h4 and below) use DM Sans SemiBold.
- Numbers that line up (tables, money, scores) use tabular figures: class `gu-num`.
- Keep lines of text under about 68 characters (`gu-measure`).
- Form fields are always 16 px or larger, so phones do not zoom in.
- **Fonts are served by your own site, never from Google.** Plain sites use [`css/fonts.css`](css/fonts.css) and the `fonts` folder. Next.js uses `next/font/google`, which downloads them at build time and serves them from your domain ([docs/nextjs.md](docs/nextjs.md)).
- **Email is the exception:** Georgia for headings, Arial for text. The logo is an image so it still shows in the brand lettering.

---

## 5. Space, size and shape

**Spacing steps:** 4, 8, 12, 16, 24, 32, 48, 64, 86 pixels. Use the steps; avoid one-off numbers.

**Page edges:** 6% on phones, 5% on tablets, 7.5% on computers. Sections have 86 px above and below on computers, 65 on tablets, 48 on phones.

**Widths:** text up to 68 characters; content up to 1280 px; an opening can use up to 1800 px on very wide screens.

**Corners:** 3 px for buttons and fields, 6 px for cards, 20 px for feature panels, round for icon buttons and badges. Never fully square, never bubbly.

**Shadows:** almost none. Lines do the separating. One soft shadow for floating things (a badge on a photo), one long soft shadow for a feature panel or dialog.

**Targets:** 44 px for anything you tap (24 px is the legal minimum, 44 is ours). Fields are 46 px tall. Bottom tab bar items are 60 px.

**Breakpoints:** 640 px (phone to tablet), 1024 px (tablet to computer: side menu appears, tab bar goes), 1100 px (two-column openings), 1600 px (wide).

**Test sizes:** 360, 390, 768, 1024 (landscape), 1280 and 1920 pixels wide. Nothing scrolls sideways at any of them.

---

## 6. Parts

All in [`css/guild.css`](css/guild.css), prefixed `gu-`, shown in the examples.

### Buttons
- **Main** (`gu-btn`): forest with white words; coral with ink words on a forest band or in dark mode. One per screen.
- **Secondary** (`gu-btn--secondary`): outlined. **Ghost** (`gu-btn--ghost`): words only, for Cancel.
- **Danger** (`gu-btn--danger`): only for the final confirm of something that cannot be undone, and it says exactly what it will do: "Delete the class", never "OK".
- **Icon** (`gu-btn--icon`): round, 44 px, always with an `aria-label`. Add `gu-btn--ring` for a thin ring.
- Buttons that go somewhere carry the arrow. Buttons that do something in place do not.
- A short reassurance line under the main button where it helps (`gu-btn-note`): "No obligation. We reply within one working day."
- Button words are verbs and say the result: "Save the register", "Send message", "Track your job".

### Links
- In text: forest, underlined. Standalone: `gu-link` with the arrow.
- A card that is one link (`a.gu-card`) is clickable all over and shows the arrow in its top corner. A card without the arrow does nothing on click. A picture is a link only when it carries the round arrow badge.

### Cards, panels and tiles
- `gu-card`: white, thin line, 6 px corners. `gu-tile`: sage, no line. `gu-panel`: forest feature panel with coral accents and numbered steps.
- `gu-steps`: numbered coral discs for "what happens next". Three steps is ideal, five at most.
- `gu-stat`: a big serif number with a small label. Use for the two or three numbers that matter, not a wall of them.

### Forms
- Labels above fields. Hint text under the label, before the field. The problem under the field, in plain words, after they leave it or press send.
- Mark the optional ones "(optional)", not the required ones.
- When sending fails, show `gu-problems` at the top listing each problem as a link to its field, move focus to it, and **never clear what they typed**.
- For 2 to 6 options on a phone, use big tappable rows (`gu-choices`) rather than a dropdown.
- Ask only for what you will use, and say why next to anything personal ("We only use it to reply to you").
- Consent tick boxes are never pre-ticked and say exactly what happens: "You can email me now and then with free help. I can stop any time."
- Use the right `autocomplete` and `inputmode` on every field.

### Status
- **Badges** (`gu-badge`, with `--success`, `--warning`, `--danger`, `--neutral`): a dot and a word.
- **Notices** (`gu-notice`): an icon, then one or two sentences. Info is sage, warning amber, danger red.
- **The done moment** (`gu-done` with `gu-stamp`): when something important is finished, show the stamp with a tick, a short past-tense heading ("Register saved."), the reference, and what happens next. The stamp lands once with a small press; never on routine saves.
- **Toasts** (`gu-toast`): for routine saves. Short ("Saved."), with Undo where it makes sense, gone after five seconds, announced to screen readers (`role="status"`).
- **Empty states** (`gu-empty`): what this space is for, how long it takes, and the one button to start.
- **Loading**: show the shape of what is coming (`gu-skeleton`) rather than a spinner. Anything longer than about two seconds says what it is doing.
- **References** (`gu-ref`): short, upper case, grouped with hyphens, no letters that look alike (no O and 0, no I and 1).

### Tables and lists
- `gu-table`: sage header, thin lines, numbers right-aligned and tabular. Add `gu-table--stack` and `data-label` on each cell so it turns into a list of cards on phones.
- `gu-rows`: a simple list of tappable rows, 60 px tall, with the arrow when a row goes somewhere.

### Navigation
- **Public sites:** logo left, a few words of navigation in the middle, one main button right ("Let's talk"). On phones, a full-screen menu (`gu-menu`) with large serif words and the arrow, the phone number at the bottom.
- **Apps:** a bottom tab bar on phones (`gu-tabbar`, 3 to 5 items, icon and word), a forest side menu on computers (`gu-sidenav`) with a coral line marking where you are. The current page always has `aria-current="page"`.
- Always a "Skip to content" link first (`gu-skip`).
- The footer of every product carries **"A Guild UK project"** with the crown (`gu-made-by`), linking to guilduk.com.

### Dialogs
- Native `<dialog>` (`gu-dialog`). A bottom sheet on phones, centred on computers.
- Only to confirm something that cannot be undone, or a short task that must not lose its page. The heading is the question; the buttons are the answers ("Keep it", "Delete the class").

---

## 7. Icons and pictures

- **Icons:** [Lucide](https://lucide.dev), 2 px stroke, round ends, 16 to 22 px. Use the same icon for the same idea everywhere.
- **Social marks:** WhatsApp, Instagram and Facebook as filled marks in the current colour, inside a thin round ring.
- **Product icons:** the stamp frame with the product's own Lucide-style symbol inside. Make them with `node scripts/make-icon.mjs <name> "<symbol>"`: you get a forest mark, a white mark and an app icon (white on forest). Never put the crown in another product's icon: the crown is Guild UK itself.
- **Photos:** real people, real work, real places, with written permission. Generated pictures only as obvious illustrations, never as a client, a real job or a real person.
- **Alt text** says what the picture shows and why it is there. Decorative pictures get `alt=""`.

---

## 8. Motion

Warm, quick and quiet. Motion explains what happened; it is never decoration that gets in the way.

| What | How long | Easing |
|---|---|---|
| Hover colour | 150 ms | linear |
| Small things (arrow nudge, toast in) | 250 ms | `cubic-bezier(0.23, 1, 0.32, 1)` |
| Picture zoom on hover | 500 to 600 ms | same |
| Sections appearing on scroll | 800 ms, staggered 90 ms | same |
| Drawers and sheets | 300 ms | `cubic-bezier(0.32, 0.72, 0, 1)` |
| The stamp | 450 ms, once | a small press and settle |

- **Reduced motion:** when the device asks for it, nothing moves on its own and changes are instant. Built into `guild.css`.
- **Anything that moves on its own for more than five seconds has a pause button** (`gu-pause`), and the choice is remembered.
- Nothing flashes more than three times a second.
- Press feedback: buttons shrink to 98% while held.

---

## 9. Writing

- **UK English.** Organise, colour, programme, licence (noun).
- **Plain words, short sentences, short paragraphs.** One point at a time.
- **No long dashes and no exclamation marks.** Use a full stop or a colon.
- **Say what people get, in their words:** "a website your committee can update", not "a CMS".
- **No tool names in public** (except privacy, cookies and legal pages).
- **Never invent** clients, quotes, reviews, numbers, results or photos.
- **Open to everyone:** "charities, community and faith groups", never one group alone.
- **Headings** are short statements, not questions, with the italic accent on the human part.
- **Buttons** say what happens: "Save the register", not "Submit".
- **Errors** say what went wrong and how to fix it, without blame: "Check the email address, for example name@example.org". Never "Invalid input".
- **Confirmations** are past tense and give the reference: "Register saved. Reference REG-2611-K4PQ."
- **Dates** in full where there is room: "Tuesday 3 November 2026". Times as "2pm" or "14:30" consistently within a product. Money as "£1,250".
- **Numbers** as figures (3 learners), except at the start of a sentence.

---

## 10. Accessibility checklist

Before anything ships:

- [ ] Every pairing passes WCAG 2.2 AA (`npm test`).
- [ ] Works with only a keyboard; focus is always visible (2 px forest ring, coral on dark).
- [ ] Every page has one `h1`, headings in order, landmarks (`header`, `nav`, `main`, `footer`), a skip link and `lang="en-GB"`.
- [ ] Every control has a name a screen reader can say; icon buttons have `aria-label`.
- [ ] Targets are at least 44 px; nothing important is under 24 px.
- [ ] Zoomed to 200% and at 320 px wide, nothing is cut off or scrolls sideways.
- [ ] Reduced motion is respected; anything that moves for over five seconds can be paused.
- [ ] Forms: labels, hints linked with `aria-describedby`, errors announced, nothing cleared on error.
- [ ] Status messages use `role="status"`; urgent ones `role="alert"`.
- [ ] Tested on a real phone (Safari and Chrome), not only a narrow browser window.

---

## 11. Email

Email apps ignore most styling, so emails are tables with styles written into each tag. Every product's emails use the same layout as guilduk.com's own.

- **The forest band first:** the logo in white on a see-through background (a PNG, 180 px wide), the heading in Georgia, white, and a short coral rule under it. Never bake the forest into the logo picture: some mail apps recolour the band in dark mode, and a baked-in box then shows.
- **The letter:** white, text in Arial, ink, 16 px, short paragraphs. A reference sits in a sage box with a coral edge. Sub-headings in Georgia, forest.
- **One button:** forest with white words, in light and in dark (in dark it gets a thin light-green edge, `#A9DCC0`). This is the one place email differs from the web: the Outlook phone apps recolour emails themselves and turn a coral button brick red, while they leave dark colours almost alone (tested 2 November 2026). At least 44 px tall, with the full link written underneath for people whose email blocks buttons.
- **The signature:** a thin coral line, the mark (white on its own forest tile with 8 px corners, so it never sits on a white square in dark mode), the person's name in Georgia, their role and email.
- **The footer:** deep forest, who sent it, why they got it, how to stop, and the organisation's details.
- **Light and dark:** the inline colours are the light theme. A style block switches to the dark tokens (`color.dark` in tokens.json: page `#0E1712`, letter `#142019`, soft panel `#1C2B23`, text `#EEF5F1`, muted `#A7B5AD`, headings white, links `#A9DCC0`) in Apple Mail, the Outlook apps and Outlook.com. Never pick dark colours by eye: use the tokens, so email, web and documents stay one palette.

- **The preview line** (the grey text an inbox shows under the subject) is hidden with `display:none` only. Never white text, a 1 px font or filler characters: spam filters score that as hidden text.

A working starting point is in [`email/template.html`](email/template.html).

---

## 12. Documents and print

White page, the logo top left, headings in DM Serif Display, text in DM Sans, a thin coral line above the footer. Send as PDF so the lettering travels with it. For print, give the printer the hex codes and ask for a proof: coral can print darker or more orange than on screen.

---

## 13. Naming a product

- **Short, lower case, a real word** that says what it does or how it feels: `here` (a register), `health` (a family tracker).
- Shown in DM Serif Display next to its stamp mark.
- Each product's footer and About page say **"A Guild UK project"** with the crown, linking to guilduk.com.
- The Guild UK name, crown and stamp frame belong to Guild UK Systems Limited. See [BRAND.md](BRAND.md).

---

## 14. Decisions

| Date | Decision |
|---|---|
| 1 November 2026 | Guild Design v1: the guilduk.com look made into a kit for every product. Dark mode added (coral actions on deep green). Product icons: the stamp frame with each product's symbol. |
| 30 October 2026 | Forest and coral, DM Serif Display and DM Sans, the crown stamp kept and recoloured. |
