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
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ],
      script: [
        {src: 'https://unpkg.com/flowbite@1.4.5/dist/flowbite.js'}
      ],
      link: [],
      // please note that this is an area that is likely to change
      style: [],
      noscript: []
    },
  },
})
