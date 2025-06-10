// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5459AC',
          light: '#5459AC',
          dark: '#52357B',
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        heading: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
