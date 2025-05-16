import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    theme: {
      extend: {
        colors: {
          primary: "#f4f4f7",
          secondary: "#222529",
          tertiary: "#222529",
          gray: {
            100: "#EEEEEE",
            200: "#A2A2A2",
            300: "#7B7B7B",
            500: "#585858",
            900: "#141414",
          },
        },
        screens: {
          // xs: "400px",
          // sm: "640px",
          // md: "768px",
          // lg: "1024px",
          // xl: "1280px",
          // "2xl": "1536px",
          // "3xl": "1680px",
          // "4xl": "2200px",
        },
        // backgroundImage: {
        //   'hero-img': "url('/src/assets/bg.jpg')",
        //   banner: "url(/src/assets/bg.jpg)"
        // },
      },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})