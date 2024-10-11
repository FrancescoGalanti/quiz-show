/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#fff',
        background: '#009efa',
        primary: '#845ec2',
        secondary: '#00d2fc',
        tertiary: '#4ffbdf',
        correct: '#57a283',
        incorrect: '#d76a6a',
        skipped: '#bbb858',
      }
    },
  },
  plugins: [],
}