// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      colors: {
        primary: colors.blue,
        gray: colors.gray,
        purpleCustom: '#3940F5',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        wave: 'wave 1.5s infinite',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.purpleCustom'),
              fontWeight: '700',
              textUnderlineOffset: '4px',
              '&:hover': {
                textDecoration: 'underline',
                textUnderlineOffset: '5px',
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.wide'),
            },
            h2: {
              textDecoration: 'underline',
              textUnderlineOffset: '6px',
              textDecorationThickness: '1px',
            },
            p: {
              // lineHeight: '2.5rem',
              // fontWeight: '500',
            },
            'li, ul': {
              // fontWeight: '500',
              // lineHeight: '2.5rem',
            },
            h3: {
              fontWeight: '600',
            },
            strong: {
              fontWeight: '800',
            },
            code: {
              color: theme('colors.black'),
              fontWeight: '700',
              padding: '2px',
              borderRadius: '0.375rem',
              backgroundColor: theme('colors.gray.300'),
            },
          },
        },
        invert: {
          css: {
            a: {
              // color: theme('colors.primary.500'),
              color: theme('colors.blue.400'),
              '&:hover': {
                color: `${theme('colors.green.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
}
