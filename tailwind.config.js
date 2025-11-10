/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // 禁用暗色模式，避免与 dark 颜色冲突
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: '#FFFBF0',
          100: '#FFF7E0',
          200: '#FFEEC0',
          300: '#FFE5A0',
          400: '#FFD970',
          500: '#FFB800', // 主色 - Logo 金黄色
          600: '#E6A600',
          700: '#CC9400',
          800: '#B38200',
          900: '#997000',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          50: '#F5F0EB',
          100: '#E8DCC8',
          200: '#D4C4A5',
          300: '#C0AC82',
          400: '#AC945F',
          500: '#8B4513', // 主色 - Logo 棕色
          600: '#7A3D11',
          700: '#69350F',
          800: '#582D0D',
          900: '#47250B',
        },
        dark: {
          DEFAULT: 'var(--color-dark)',
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#666666',
          600: '#4D4D4D',
          700: '#333333',
          800: '#1A1A1A',
          900: '#000000', // Logo 黑色背景
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          muted: 'var(--color-muted)',
        },
        gold: {
          DEFAULT: '#FFB800',
          light: '#FFD970',
          dark: '#E6A600',
        },
        brown: {
          DEFAULT: '#8B4513',
          light: '#AC945F',
          dark: '#69350F',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          dark: '#000000',
          muted: '#FAFAFA',
          warm: '#FFFBF0', // 浅金黄色背景
        },
        // 保留 tech 色用于特殊场景（如链接）
        tech: {
          DEFAULT: '#1F6FEB',
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
        glow: '0 0 20px rgba(255, 184, 0, 0.2)', // 金黄色光晕
        'glow-gold': '0 0 20px rgba(255, 184, 0, 0.25)',
        'glow-brown': '0 0 20px rgba(139, 69, 19, 0.15)',
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

