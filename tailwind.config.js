/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0B0F0D',
          panel: '#10150F',
          border: '#23301F',
          amber: '#F2A900',
          'amber-dim': '#7A5600',
          'amber-glow': 'rgba(242,169,0,0.14)',
          text: '#E8E6DE',
          muted: '#8B9088',
          ok: '#6FCF7C',
        },
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};