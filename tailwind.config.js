/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lemo: {
          primary: '#ff23d0',
          secondary: '#e4027e',
          dark: '#13161b',
          'dark-secondary': '#151515',
        }
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'monospace'],
        'mplus1': ['var(--font-m-plus-1)', 'sans-serif'],
      },
      maxWidth: {
        'mobile': '768px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'scroll-right': 'scroll-right 20s linear infinite',
        'scroll-left': 'scroll-left 20s linear infinite',
      },
      keyframes: {
        'scroll-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-1503px)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(-1503px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}