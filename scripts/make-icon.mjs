// Makes a product's icons: the Guild UK stamp frame with the product's own symbol inside.
// The frame is what makes every product look like one family; the symbol says what this one does.
// Run: node scripts/make-icon.mjs <name> "<svg inner markup on a 24 by 24 grid, Lucide style>"
//   or node scripts/make-icon.mjs --examples   (writes the examples in assets/icons)
// Writes assets/icons/<name>-mark.svg (forest frame, for light backgrounds), <name>-mark-white.svg and
// <name>-app.svg (white stamp on forest, for the browser tab and phone home screen).
import fs from 'node:fs';

const FRAME = 'M34,12 H116 L138,34 V116 L116,138 H34 L12,116 V34 Z';
const FOREST = '#174131';

// The symbol sits in the middle at 3.6 times its 24 pixel grid, with a stroke that matches the frame's weight
const symbol = (inner, colour) => `<g transform="translate(75,75) scale(3.6) translate(-12,-12)" fill="none" stroke="${colour}" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">${inner}</g>`;
const mark = (inner, colour) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><path d="${FRAME}" fill="none" stroke="${colour}" stroke-width="9"/>${symbol(inner, colour)}</svg>\n`;
const app = inner => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><rect width="150" height="150" fill="${FOREST}"/><g transform="translate(15,15) scale(0.8)"><path d="${FRAME}" fill="none" stroke="#FFFFFF" stroke-width="9"/>${symbol(inner, '#FFFFFF')}</g></svg>\n`;

export function makeIcon(name, inner, dir = new URL('../assets/icons/', import.meta.url)) {
  if (!/^[a-z0-9-]+$/.test(name)) throw new Error('Use a short lower-case name, like here or health');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(new URL(`${name}-mark.svg`, dir), mark(inner, FOREST));
  fs.writeFileSync(new URL(`${name}-mark-white.svg`, dir), mark(inner, '#FFFFFF'));
  fs.writeFileSync(new URL(`${name}-app.svg`, dir), app(inner));
  return [`${name}-mark.svg`, `${name}-mark-white.svg`, `${name}-app.svg`];
}

// Symbols drawn on a 24 by 24 grid in the Lucide style (ISC licence, lucide.dev), one per example product
export const EXAMPLES = {
  // Here, the class register: a clipboard with a tick
  here: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  // Health, the family tracker: a heart with a pulse
  health: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>'
};

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, '/').split('/').pop())) {
  const [name, inner] = process.argv.slice(2);
  if (name === '--examples') for (const [n, i] of Object.entries(EXAMPLES)) console.log(makeIcon(n, i).join(' '));
  else if (name && inner) console.log(makeIcon(name, inner).join(' '));
  else console.log('Give a name and the symbol markup, or --examples');
}
