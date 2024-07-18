// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      Manrope: [400, 500, 600, 700, 800],
    },
    download: true,
    useStylesheet: true
  }
})
