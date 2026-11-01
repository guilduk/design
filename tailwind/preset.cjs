// Guild Design preset for Tailwind CSS 3. Colours come from css/shadcn.css, so light and dark switch by themselves.
// tailwind.config:  presets: [require('@guilduk/design/tailwind/preset.cjs')]
// Fonts: load DM Serif Display and DM Sans with next/font (see docs/nextjs.md) as --font-serif and --font-sans.
const c = name => `hsl(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        border: c('border'), input: c('input'), ring: c('ring'),
        background: c('background'), foreground: c('foreground'),
        primary: { DEFAULT: c('primary'), foreground: c('primary-foreground') },
        secondary: { DEFAULT: c('secondary'), foreground: c('secondary-foreground') },
        muted: { DEFAULT: c('muted'), foreground: c('muted-foreground') },
        accent: { DEFAULT: c('accent'), foreground: c('accent-foreground') },
        destructive: { DEFAULT: c('destructive'), foreground: c('destructive-foreground') },
        card: { DEFAULT: c('card'), foreground: c('card-foreground') },
        popover: { DEFAULT: c('popover'), foreground: c('popover-foreground') },
        success: c('success'), warning: c('warning'),
        // The brand colours by name, for the few places that need them directly
        forest: { DEFAULT: '#174131', deep: '#0F3326' },
        ink: '#142019',
        coral: '#F39380',
        sage: '#E0F0E7',
        moss: '#5A635D',
        chart: { 1: c('chart-1'), 2: c('chart-2'), 3: c('chart-3'), 4: c('chart-4'), 5: c('chart-5') }
      },
      fontFamily: {
        serif: ['var(--font-serif)', '"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', '"DM Sans"', 'system-ui', 'sans-serif']
      },
      fontSize: {
        display: ['clamp(42px, 6.2vw, 92px)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        h1: ['clamp(36px, 4.6vw, 58px)', { lineHeight: '1.1' }],
        h2: ['clamp(30px, 3.2vw, 43px)', { lineHeight: '1.13' }],
        h3: ['clamp(22px, 2vw, 29px)', { lineHeight: '1.2' }],
        lead: ['clamp(17px, 1.35vw, 20px)', { lineHeight: '1.7' }],
        eyebrow: ['12px', { lineHeight: '1.7', letterSpacing: '0.16em' }]
      },
      borderRadius: { lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: '3px', panel: '20px' },
      boxShadow: {
        soft: '0 2px 10px rgba(20, 32, 25, 0.14)',
        panel: '0 30px 60px -30px rgba(20, 32, 25, 0.45)'
      },
      minHeight: { target: '44px', field: '46px' },
      minWidth: { target: '44px' },
      maxWidth: { text: '68ch', content: '1280px' },
      transitionTimingFunction: { out: 'cubic-bezier(0.23, 1, 0.32, 1)', drawer: 'cubic-bezier(0.32, 0.72, 0, 1)' },
      transitionDuration: { fast: '150ms', base: '250ms', slow: '600ms' },
      keyframes: {
        'gu-rise': { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'none' } },
        'gu-stamp': { '0%': { opacity: '0', transform: 'scale(1.25) rotate(-8deg)' }, '60%': { opacity: '1', transform: 'scale(0.96) rotate(1deg)' }, '100%': { transform: 'none' } }
      },
      animation: {
        'gu-rise': 'gu-rise 0.8s cubic-bezier(0.23, 1, 0.32, 1) both',
        'gu-stamp': 'gu-stamp 0.45s cubic-bezier(0.23, 1, 0.32, 1) both'
      }
    }
  }
};
