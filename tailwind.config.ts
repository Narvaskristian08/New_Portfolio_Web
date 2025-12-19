import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sketch: ['var(--font-sketch)', 'cursive'] },
      animation: { draw: 'draw 2s ease-in-out forwards', 'fade-in': 'fadeIn 1s ease-in' },
      keyframes: {
        draw: { '0%': { strokeDashoffset: '1000' }, '100%': { strokeDashoffset: '0' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
    },
  },
  plugins: [],
}
export default config
