/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      base: {
        100: '#FAFAFA',
        200: '#F3F2F2',
        300: '#EDEDED',
        400: '#E6E5E5',
        500: '#D7D5D5',
        600: '#8D8686',
        700: '#574F4D',
        800: '#403937',
        900: '#272221',
      },
      purple: {
        300: '#EBE5F9',
        500: '#8047F8',
        800: '#4B2995',
      },
      yellow: {
        300: '#F1E9C9',
        500: '#DBAC2C',
        900: '#C47F17',
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        title: 'var(--font-baloo)',
      },
    },
  },
  plugins: [],
}
