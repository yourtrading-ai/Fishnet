/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        primary: { DEFAULT: '#1DC3CF', strong: '#0192A7' },
        dark: '#172025',
        success: '#00C667',
        danger: '#FF3B30',
        'light-20': '#F6F8FB',
        'dark-20': '#91989C',
        'dark-40': '#5C6569',
        'light-blue': '#EDF2FA',
        'dark-50': '#223038',
        'text-dark': '#244141',
        'form-bg': '#F6FAFB',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
