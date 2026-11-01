// Writes css/tokens.css (plain CSS variables) and css/shadcn.css (the HSL variables shadcn/ui and Tailwind expect)
// from tokens/tokens.json, so every product reads the same values. Run: npm run build
import fs from 'node:fs';

const t = JSON.parse(fs.readFileSync(new URL('../tokens/tokens.json', import.meta.url), 'utf8'));
const out = rel => new URL('../' + rel, import.meta.url);
const HEAD = '/* Made by scripts/build.mjs from tokens/tokens.json. Change the tokens, then run `npm run build`. Do not edit by hand. */\n';

const vars = (obj, prefix) => Object.entries(obj).filter(([k]) => !k.startsWith('$')).map(([k, v]) => `  --gu-${prefix}${k}: ${v};`).join('\n');
const theme = mode => Object.entries(t.color[mode]).map(([k, v]) => `  --gu-${k}: ${v};`).join('\n');

const css = `${HEAD}
/* Brand colours, the same in light and dark */
:root {
${vars(t.color.brand, '')}
${t.color.chart.map((c, i) => `  --gu-chart-${i + 1}: ${c};`).join('\n')}

  /* Lettering */
  --gu-font-serif: ${t.font.serif};
  --gu-font-sans: ${t.font.sans};
  --gu-font-email-serif: ${t.font['email-serif']};
  --gu-font-email-sans: ${t.font['email-sans']};
${vars(t.size, 'size-')}
${vars(t.leading, 'leading-')}
${vars(t.tracking, 'tracking-')}

  /* Space, width and shape */
${vars(t.space, 'space-')}
${vars(t.gutter, 'gutter-')}
${vars(t.width, 'width-')}
${vars(t.radius, 'radius-')}
${vars(t.shadow, 'shadow-')}
${vars(t.target, 'target-')}

  /* Motion */
${vars(t.motion, 'motion-')}
${Object.entries(t.z).map(([k, v]) => `  --gu-z-${k}: ${v};`).join('\n')}
}

/* Light: the default */
:root, [data-theme="light"], .light {
  color-scheme: light;
${theme('light')}
}

/* Dark: follows the device unless the page chooses (data-theme="light" or "dark" on <html>, or the .dark class) */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]):not(.light) {
    color-scheme: dark;
${theme('dark').replace(/^/gm, '  ')}
  }
}
[data-theme="dark"], .dark {
  color-scheme: dark;
${theme('dark')}
}
`;
fs.writeFileSync(out('css/tokens.css'), css);

// shadcn/ui: HSL numbers without hsl(), as its components expect
const hsl = h => {
  const n = parseInt(h.slice(1), 16); const [r, g, b] = [n >> 16, (n >> 8) & 255, n & 255].map(x => x / 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2; let s = 0, hue = 0;
  if (max !== min) {
    const d = max - min; s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    hue = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4; hue *= 60;
  }
  return `${Math.round(hue)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
};
const shad = m => {
  const c = t.color[m];
  const map = {
    background: c.background, foreground: c.text, card: c.surface, 'card-foreground': c.text, popover: c.surface, 'popover-foreground': c.text,
    primary: c.action, 'primary-foreground': c['action-text'], secondary: c['surface-soft'], 'secondary-foreground': c.heading,
    muted: c['surface-soft'], 'muted-foreground': c['text-muted'], accent: c['surface-soft'], 'accent-foreground': c.text,
    destructive: c.danger, 'destructive-foreground': m === 'light' ? '#FFFFFF' : '#142019', border: c.line, input: c['line-strong'], ring: c.focus,
    success: c.success, warning: c.warning, coral: t.color.brand.coral, forest: t.color.brand.forest, sage: t.color.brand.sage
  };
  return Object.entries(map).map(([k, v]) => `    --${k}: ${hsl(v)};`).join('\n') + '\n' + t.color.chart.slice(0, 5).map((v, i) => `    --chart-${i + 1}: ${hsl(v)};`).join('\n');
};
const shadcn = `${HEAD}/* For Next.js projects using shadcn/ui and Tailwind: put this in app/globals.css after the @tailwind lines,
   and use tailwind/preset.cjs in tailwind.config. */
@layer base {
  :root {
${shad('light')}
    --radius: ${t.radius.md};
  }
  .dark {
${shad('dark')}
  }
  @media (prefers-color-scheme: dark) {
    :root:not(.light) {
${shad('dark').replace(/^/gm, '  ')}
    }
  }
}
`;
fs.writeFileSync(out('css/shadcn.css'), shadcn);
console.log('Wrote css/tokens.css and css/shadcn.css');
