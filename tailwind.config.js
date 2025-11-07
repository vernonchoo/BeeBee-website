/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#D91616',
          600: '#B71C1C',
          700: '#991616',
          800: '#7F1D1D',
          900: '#661414',
        },
        tech: {
          DEFAULT: 'var(--color-tech)',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#1F6FEB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#1A2B5A',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          muted: 'var(--color-muted)',
        },
        gold: {
          DEFAULT: '#CDAF63',
          light: '#E5D4A1',
          dark: '#A58C4F',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          dark: '#0B1220',
          muted: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Noto Sans Thai',
          'Source Han Sans',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        display: [
          'Inter',
          'Noto Sans Thai',
          'Source Han Sans',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        card: '16px',
        'card-lg': '20px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.1)',
        glow: '0 0 20px rgba(217, 22, 22, 0.15)',
        'glow-tech': '0 0 20px rgba(31, 111, 235, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          from: { transform: 'translateY(-10px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

