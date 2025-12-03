// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    modules: [
      '@nuxt/image',
      '@nuxtjs/tailwindcss',
      '@vueuse/nuxt',
      '@nuxtjs/google-fonts',
      'nuxt-marquee',
    ],

    googleFonts: {
        display: 'swap',
        preconnect: true,
        families: {
            Outfit: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Shantell Sans': [300, 400, 500, 600, 700, 800],
        },
    },

    runtimeConfig: {
        public: {
            api: import.meta.env.VITE_STRAPI_API_URL,
            token: import.meta.env.AUTHENTICATION_TOKEN,
        },
    },
});