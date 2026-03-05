/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020205',
        charcoal: '#0a0a0f',
        primary: '#ff5e00',
        secondary: '#ffffff',
        accent: '#ffaa00',
        glassBg: 'rgba(255, 255, 255, 0.02)',
        glassBorder: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'Syne', 'sans-serif'],
        body: ['Outfit', 'Inter', 'Satoshi', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'levitate': 'levitate 5s ease-in-out infinite',
        'glow-border': 'glow-border 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(1deg)' },
        },
        levitate: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'glow-border': {
          '0%, 100%': { borderColor: 'rgba(255, 94, 0, 0.1)' },
          '50%': { borderColor: 'rgba(255, 94, 0, 0.5)' },
        }
      },
    },
  },
  plugins: [],
}
