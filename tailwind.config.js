/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/home/home.jpg')",
      },
      gridTemplateColumns: {
        "resume-template": "2fr 3fr",
        "contact-template": "2fr 3fr",
      },
    },
  },
  plugins: [],
};
