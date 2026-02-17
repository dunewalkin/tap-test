export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: false },
  css: ['~/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      productsApiBase: '',
    },
  },
  compatibilityDate: '2025-01-01',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/variables.scss" as *;\n@use "~/assets/styles/mixins.scss" as *;',
        },
      },
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: false,
    },
  },
})
