// Checks every text and background pairing in tokens/tokens.json against WCAG 2.2 AA.
// Run: node scripts/check-contrast.mjs   (also part of `npm test`)
import fs from 'node:fs';

const tokens = JSON.parse(fs.readFileSync(new URL('../tokens/tokens.json', import.meta.url), 'utf8'));
const hex = ref => {
  const [group, name] = ref.split('.');
  const value = tokens.color[group]?.[name];
  if (!value) throw new Error(`No colour called ${ref}`);
  return value;
};
const channel = c => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const luminance = h => { const n = parseInt(h.slice(1), 16); return 0.2126 * channel(n >> 16) + 0.7152 * channel((n >> 8) & 255) + 0.0722 * channel(n & 255); };
export const contrast = (a, b) => { const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

let failed = 0;
for (const [fg, bg, min] of tokens.contrast.pairs) {
  const ratio = contrast(hex(fg), hex(bg));
  const ok = ratio >= min;
  if (!ok) failed++;
  console.log(`${ok ? 'pass' : 'FAIL'}  ${ratio.toFixed(2).padStart(5)}  ${fg} on ${bg} (needs ${min})`);
}
// Coral is never used for words on white: make sure nobody adds that pairing by mistake
if (tokens.contrast.pairs.some(([fg, bg]) => hex(fg) === tokens.color.brand.coral && hex(bg) === '#FFFFFF')) { console.log('FAIL  coral words on white are not allowed'); failed++; }
console.log(failed ? `\n${failed} pairing(s) fail.` : '\nEvery pairing passes.');
process.exitCode = failed ? 1 : 0;
