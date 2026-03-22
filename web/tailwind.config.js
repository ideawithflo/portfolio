/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['Anonymous Pro', 'monospace'],
      },
      colors: {
        dark: '#0f0f0f',
        light: '#ffffff',
      },
    },
  },
  plugins: [],
}
