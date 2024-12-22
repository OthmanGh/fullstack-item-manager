import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#FAFAFA',
        primary: '#633CFF',
        'primary-hover': '#BEADFF',
        'primary-light': '#EFEBFF',
        'dark-grey': '#333333',
        grey: '#737373',
        borders: '#D9D9D9',
        custom_red: '#EE3939',
      },
    },
  },
  plugins: [],
} satisfies Config
