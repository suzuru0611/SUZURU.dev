// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
      '@unocss/nuxt',
    ],
    head () {
      return {
        bodyAttrs: {
          class: 'reset-body'
        }
      }
    }
})