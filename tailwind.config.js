module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: { },
        backgroundImage:{
          'image': "url('/src/image/home/hero-pattern.jpg')"

        }
     
    },
    plugins: [require("daisyui")],
  }