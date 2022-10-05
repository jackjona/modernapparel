module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      border: ['hover'],
      backgroundImage: {
        'hero': "url(/images/hero.jpg)",
        'banner' : "url(/images/banner.jpg)",
        'banner2' : "url(/images/wrapping-paper.jpg)",
      },
      lineHeight: {
        '12': '3rem',
      },
      height: {
        lg: '24rem',
        xl: '28rem',
        vh: '55vh',
        lgvh: '65vh',
      },
      keyframes: {
        fadeOut: {      
          '0%': { opacity: '1' },
          '80%': { opacity: '1' }, 
          '90%': { opacity: '0' },
          '100%': { opacity: '0' },
        }
      },
      animation: {
        hideme: 'fadeOut 10s linear forwards',
      }
    },
  },
  plugins: [],
}
