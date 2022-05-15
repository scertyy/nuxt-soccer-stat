import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: 'nuxt-soccer-stat',
  },
  css: ['~/assets/css/main.sass', '~/assets/css/variables.sass'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/css/mixins.sass"',
        },
      },
    },
    plugins: [
      eslintPlugin(),
    ],
  },
  publicRuntimeConfig: {
    apiKey: process.env.AUTH_TOKEN,
  },
  ssr: false,
})
