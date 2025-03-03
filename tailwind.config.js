/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily:{
        pingfang: ['PingFang TC', 'Noto Sans TC', 'Microsoft JhengHei', 'sans-serif'],
        times:['Times New Roman', 'Times', 'serif']
      }

    },
  },
  plugins: [],
}

