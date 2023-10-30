/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    screens: {
      mobile: '360px',
      pc: '768px',
    },
  },
  plugins: [],
};
