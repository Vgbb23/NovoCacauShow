import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: 'var(--background)',
        white: 'var(--white)',
        brown: 'var(--brown)',
        'brown-dark': 'var(--brown-dark)',
        black: 'var(--black)',
        cacau: 'var(--cacau)',
      },
      keyframes: {
        pulse: {
          '0%': { transform: 'scale(.95)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(.95)' },
        },
      },
      animation: {
        pulse: 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
