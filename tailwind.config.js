const px0_400 = { ...Array.from(Array(401)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s infinite',
      },
      colors: {
        primary: '#514FFF',
        secondary: '#EAEAFF',
      },
    },
    screens: {
      mobile: { min: '360px', max: '767px' },
      pc: { min: '768px' },
    },
    fontFamily: {
      Pretendard: 'Pretendard-Regular',
    },
  },
  plugins: [],
};
