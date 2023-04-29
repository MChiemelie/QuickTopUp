/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
     },
     screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'}, 
      'lg': {'max': '1023px'}, 
      'md': {'max': '767px'},
      'sm': {'max': '639px'}, 
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./public/heromap.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}