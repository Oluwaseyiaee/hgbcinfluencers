/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './public/**/*.{html,js}',
      './src/**/*.{html,js}',
    ],
    theme: {
        extend: {
          backgroundImage: {
            "my-showcase" : "url(img/showcase.jpg)",
            "my-showcase1" : "url(img/showcase1.jpg)",
            "my-showcase2" : "url(img/showcase2.jpg)",
            "my-showcase3" : "url(img/showcase3.jpg)",
            "my-footer" : "url(img/footer.jpg)",
          },
          colors: {
            secondary: '#A020F0',
            primary: {
              100: '#fc6c0d',
              200: '#fc9b5a',
              300: '#f0ac7f',
            },
            title: '#707070',
            small: '#fef7f2'
          },
          fontFamily: {
            body: ['Outfit']
          }
        },
      },
    plugins: [],
  }
  
  