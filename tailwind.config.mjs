/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f7',
          100: '#fdeaea',
          200: '#fbd4d4',
          300: '#f7abab',
          400: '#f07a7a',
          500: '#C75353',
          600: '#b34545',
          700: '#943939',
          800: '#7a3030',
          900: '#662929',
          950: '#361414',
        },
        neutral: {
          900: '#232120',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
