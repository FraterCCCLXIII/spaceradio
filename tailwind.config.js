/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#1a1a18',
          elevated: '#242422',
          panel: '#2e2e2c',
          surface: '#383836',
        },
        signal: '#e8e8e6',
        beam: '#c4c4c2',
        orbit: '#949492',
        muted: '#6e6e6c',
        charcoal: {
          50: '#f4f4f2',
          100: '#e8e8e6',
          200: '#d0d0ce',
          300: '#b0b0ae',
          400: '#8e8e8c',
          500: '#727270',
          600: '#5a5a58',
          700: '#484846',
          800: '#383836',
          900: '#2e2e2c',
          950: '#1a1a18',
        },
      },
      fontFamily: {
        sans: ['"Barlow"', 'system-ui', 'sans-serif'],
        display: ['"Abel"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        logo: '0.28em',
      },
      animation: {
        'pulse-beam': 'pulse-beam 2s ease-in-out infinite',
        ticker: 'ticker 40s linear infinite',
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
