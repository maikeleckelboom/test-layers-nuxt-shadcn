import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import {defineNuxtConfig} from 'nuxt/config'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
    modules: [
        join(currentDir, './nuxt.module.ts'),
        '@nuxtjs/tailwindcss',
        "shadcn-nuxt",
    ],
    alias: {
        '~': currentDir,
    },
    components: [
        {
            path: join(currentDir, './components'),
            extensions: ['.vue'],
        },
        {
            path: join(currentDir, './components/ui'),
            extensions: ['.vue'],
        },
    ],
    tailwindcss: {
        cssPath: join(currentDir, './assets/css/tailwind.css'),
    },

    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: join(currentDir, './components/ui')
    },
})
