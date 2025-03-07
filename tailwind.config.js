/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily:{
        pingfang: ['PingFang TC', 'Noto Sans TC', 'Microsoft JhengHei', 'sans-serif'],
        times:['Times New Roman', 'Times', 'serif'],
        helveticaNeue:['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      },
      backgroundImage:{
        'pound-cake': "url('https://bit.ly/2OhbMHr')",
        'macarons-and-coffee': "url('https://bit.ly/2R5tqwD')",
        'cream-pie': "url('https://bit.ly/2Dwoxd7')",
        'popsicle': "url('https://bit.ly/2OUteif')",
        'cake-white-suger': "url('https://bit.ly/2Qodh3Z')",
        'complete-page':"url('https://bit.ly/2P7GhNd')"
      }
      

    },
  },
  plugins: [],
}

