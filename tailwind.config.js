/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#0a0e17',
          elevated: '#12182a',
          panel: '#1a2236',
        },
        signal: '#e8b84a',
        beam: '#5ec8e8',
        orbit: '#6b5b95',
        muted: '#8b95a8',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-beam': 'pulse-beam 2s ease-in-out infinite',
        'ticker': 'ticker 40s linear infinite',
      },
      keyframes: {
        'pulse-beam': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
