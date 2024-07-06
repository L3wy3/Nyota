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
  modules: ['@tresjs/nuxt'],
  runtimeConfig: {
    apiKey: '',
    apiBaseUrl: '',
    apiWooKey: '',
    apiWooVal: '',
    public: {
      imgBaseUrl: ''
    }
  }
})
