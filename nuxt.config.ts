// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig:{
    public: {
      wordpressUrl: 'http://80.229.31.61/wordpress/graphql'
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
})