// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},

    future: {
        compatibilityVersion: 4
    },

    modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],

    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './layers/ui/components/ui'
    },

    tailwindcss: {
        viewer: false,
        cssPath: './layers/ui/assets/css/tailwind.css',
    }
})