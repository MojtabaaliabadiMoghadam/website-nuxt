// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
      '~/assets/css/main.css',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ],
      script: [],
      link: [],
      style: [],
      noscript: []
    }
  }
})
