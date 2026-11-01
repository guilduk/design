// Checks the kit holds together. Run: npm test
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';

const read = rel => fs.readFileSync(new URL('../' + rel, import.meta.url), 'utf8');
const require = createRequire(import.meta.url);

// 1. The CSS is up to date with the tokens
const before = [read('css/tokens.css'), read('css/shadcn.css')];
execFileSync(process.execPath, [new URL('./build.mjs', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')]);
assert.deepEqual([read('css/tokens.css'), read('css/shadcn.css')], before, 'css/tokens.css and css/shadcn.css match tokens.json (run npm run build and commit)');

// 2. Every gu- class used in the examples exists in guild.css
const css = read('css/guild.css');
for (const page of ['examples/index.html', 'examples/app.html']) {
  const used = new Set([...read(page).matchAll(/class="([^"]+)"/g)].flatMap(m => m[1].split(/\s+/)).filter(c => c.startsWith('gu-')));
  for (const c of used) assert.ok(css.includes('.' + c), `${page} uses .${c}, which guild.css does not have`);
}

// 3. Nothing loads from anywhere else: no fonts or styles from other sites
for (const f of ['css/guild.css', 'css/fonts.css', 'css/tokens.css', 'examples/index.html', 'examples/app.html']) {
  assert.doesNotMatch(read(f), /(src|href)=["']https?:\/\/(?!guilduk\.com)|url\(["']?https?:/, `${f} loads nothing from other sites`);
}
for (const font of fs.readdirSync(new URL('../fonts/', import.meta.url)).filter(f => f.endsWith('.woff2'))) {
  assert.ok(read('css/fonts.css').includes(font), `fonts.css uses ${font}`);
}
assert.ok(fs.existsSync(new URL('../fonts/OFL-DM-Sans.txt', import.meta.url)) && fs.existsSync(new URL('../fonts/OFL-DM-Serif-Display.txt', import.meta.url)), 'the font licences travel with the fonts');

// 4. The writing rules: no long dashes, no exclamation marks in the words people read
const prose = ['DESIGN.md', 'README.md', 'AGENTS.md', 'BRAND.md', 'docs/nextjs.md', 'docs/open-source.md', 'examples/index.html', 'examples/app.html', 'email/template.html'];
for (const f of prose) {
  const text = read(f).replace(/```[\s\S]*?```/g, '').replace(/`[^`]*`/g, '').replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' ');
  const dash = f === 'AGENTS.md' ? text.replace('(—)', '') : text;
  assert.doesNotMatch(dash, /—|–/, `${f} has a long dash`);
  assert.doesNotMatch(text.replace(/<!doctype[^>]*>/gi, ''), /[A-Za-z)]!(\s|$)/, `${f} has an exclamation mark`);
}

// 5. The Tailwind preset loads and points at the shadcn colours
const preset = require('../tailwind/preset.cjs');
assert.equal(preset.theme.extend.colors.primary.DEFAULT, 'hsl(var(--primary) / <alpha-value>)');
assert.equal(preset.theme.extend.colors.forest.DEFAULT, JSON.parse(read('tokens/tokens.json')).color.brand.forest, 'preset forest matches the tokens');

// 6. Product icons: the frame is the logo's frame
const frame = read('assets/brand/guild-uk-mark-forest.svg').match(/d="(M34[^"]+)"/)[1];
for (const f of fs.readdirSync(new URL('../assets/icons/', import.meta.url))) assert.ok(read('assets/icons/' + f).includes(frame), `${f} uses the stamp frame`);

console.log('All kit checks passed.');
