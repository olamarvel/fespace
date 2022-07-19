/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f47cc8',
        secondary: '#788cdf',
        white: '#fff',
        dark: '#333333',
      },
      boxShadow: {
        'card': '0 0 5px  rgba(0, 0, 0, 0.3)',
      },

      fontFamily: {
        Lora: ['Lora', 'sans-serif'],
        Roboto: ['Roboto', 'serif'],
        Pacifioco: ['pacifioco', 'serif'],
      },
      spacing: {
        'pixeledSpacing-1': '5px',
        'pixeledSpacing-2': '10px',
        'pixeledSpacing-3': '15px',
        'pixeledSpacing-4': '20px',
        'pixeledSpacing-5': '25px',
        'pixeledSpacing-6': '30px',
        'pixeledSpacing-7': '35px',
        'pixeledSpacing-8': '40px',
        'pixeledSpacing-9': '45px',
        'pixeledSpacing-10': '50px',
        'pixeledSpacing-11': '55px',
        'pixeledSpacing-12': '60px',
      },
    },
  },
  plugins: [],
}
