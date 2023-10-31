const px0_400 = { ...Array.from(Array(401)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
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
