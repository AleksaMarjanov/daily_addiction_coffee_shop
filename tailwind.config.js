const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/container/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'coffee-dark': '#24252D',
        'coffee-gray-1': '#E3E1E3',
        'coffee-gray-2': '#888888',
        'coffee-gray-3': '#4F4F4F',
        'coffee-black-1': '#2D2E36',
        'coffee-black-2': '#1B1A21',
        'coffee-black-3': '#2A2D3A',
        'coffee-black-4': '#24252D',
        'coffee-red-violet': '#DA18A3',
        'coffee-red-violet-darker': '#DA1855',
        'coffee-transparent-0': 'rgba(255,255,255,0.18)',
        'coffee-transparent': 'rgba(255, 255, 255, 0.25)',
        'file-active': '#2196f3',
        'file-accept': '#00e676',
        'file-reject': '#ff1744',
        'overlay-black': 'rgba(0, 0, 0, 0.8)',
        'primary-color': '#edf2f8',
        'secondary-color': '#313bac',
        'black-color': '#030303',
        'lightGray-color': '#e4e4e4',
        'gray-color': '#6b768',
        'brown-color': '#46364a',
        'white-color': '#ffffff',
      },
      keyframes: {
        extend: {
            '0%': { width: 0 },
        },
        extend2: {
            '0%': { width: '0%' },
            '100%': { width: '100%' },
        },
    },
    animation: {
        'extend': 'extend 2s ease-in-out 1s 1 forwards',
        'extend2': 'extend2 1s ease-in-out 1s 1 forwards',
    },
        textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      width: {
        215: '215px',
        357: '357px',
        557: '557px',
      },
      minHeight: {
        '1/2': '50%',
      },
      minWidth: {
        155: '155px',
        190: '190px',
        215: '215px',
        240: '240px',
        256: '256px',
        327: '327px',
      },
      height: {
        300: '300px',
        557: '557px',
      },
      inset: {
        45: '45%',
        65: '65px',
      },
      spacing: {
        65: '65px',
      },
      flex: {
        2: '2 2 0%',
      },
      lineHeight: {
        70: '70px',
      },
      zIndex: {
        '-5': '-5',
        0: '0',
      },
    },
    screens: {
      xl: { max: '2300px'},
      lg: { max: '1800px' },
      minlg: {max: '1600px'},
      minmd: {max: '1300px '},
      md: { max: '990px' },
      sm: { max: '600px' },
      xs: { max: '400px' },
      // minmd: '1700px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  plugins: [require('tailwindcss-children')],
};
