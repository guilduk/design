# Guild Design in a Next.js project

For projects using Next.js, Tailwind CSS 3 and shadcn/ui, such as here and health.

## 1. Get the files

Until the package is published, copy `tailwind/preset.cjs`, `css/shadcn.css` and `css/guild.css` into your project, for example into `styles/guild/`. Or add this repository as a dependency:

```bash
npm install github:guilduk/design
```

## 2. Tailwind

```js
// tailwind.config.mjs
import guild from '@guilduk/design/tailwind/preset.cjs';

export default {
  presets: [guild],
  darkMode: ['class'],
  content: ['./app/**/*.{js,jsx,ts,tsx,mdx}', './components/**/*.{js,jsx,ts,tsx}'],
};
```

Remove any old colour, radius and font settings from `theme.extend`: the preset brings them.

## 3. Colours, light and dark

In `app/globals.css`, after the three `@tailwind` lines, paste the contents of `css/shadcn.css` (replace the old `:root` and `.dark` blocks). Then import the parts:

```css
@import '@guilduk/design/css/tokens.css';
@import '@guilduk/design/css/guild.css';
```

shadcn components (Button, Card, Dialog, Input) now pick up forest, coral and sage by themselves. Use the `gu-` classes for the parts shadcn does not have: the eyebrow label, the stamp, steps, stats, the tab bar.

## 4. Fonts, served from your own domain

```js
// app/layout.js
import { DM_Serif_Display, DM_Sans } from 'next/font/google';

const serif = DM_Serif_Display({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif' });
const sans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans' });

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <body className="gu font-sans">{children}</body>
    </html>
  );
}
```

`next/font` downloads the fonts when you build and serves them from your site, so visitors never contact Google. Then set the CSS variables the kit reads:

```css
:root { --gu-font-serif: var(--font-serif), Georgia, serif; --gu-font-sans: var(--font-sans), system-ui, sans-serif; }
```

## 5. Dark mode

Dark follows the device. To let people choose, set `class="dark"` or `class="light"` on `<html>` (next-themes does this with `attribute="class"`), and keep the choice on that device only.

## 6. The heading pattern in JSX

```jsx
<p className="gu-eyebrow">Today / Tuesday maths</p>
<h1 className="font-serif text-h1 text-primary">
  Take the register.<br /><em>Ten seconds.</em>
</h1>
```

## 7. Check it

- `npm test` in this kit checks the colours.
- In your project, run the accessibility checks you already have (axe, Playwright) at 390, 768 and 1280 pixels wide, in light and dark.
