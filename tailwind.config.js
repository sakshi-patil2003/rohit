/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a09',        // near-black, slightly warm (base bg)
        raised: '#131311',     // slightly raised panels
        paper: '#f3f1ea',      // warm off-white (primary text)
        mute: '#8c887f',       // muted warm gray (secondary text)
        hairline: 'rgba(243,241,234,0.12)',
        tally: '#e8442c',      // signature accent — "tally light" red
        oxblood: '#2b0a08',    // deep wine-red, the base gradient tone
        amber: '#e8a33d',      // warm tungsten-light highlight 
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
