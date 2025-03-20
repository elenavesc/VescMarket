/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        height: {
          '100': '25rem',    // 400px
          '120': '30rem',    // 480px
          '128': '32rem',    // 512px
          '144': '36rem',    // 576px
          '160': '40rem',    // 640px
          '192': '48rem',    // 768px
          '200': '50rem',    // 800px
          '256': '64rem',    // 1024px
        }
      }
    },
    plugins: [],
  }