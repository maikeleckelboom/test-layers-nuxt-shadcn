import {dirname} from "path";
import {fileURLToPath} from "url";

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',

    devtools: {enabled: true},

    future: {
        compatibilityVersion: 4
    },

    alias: {
        '~~': currentDir,
    },

    tailwindcss: {
        viewer: false,
        cssPath: './layers/ui/assets/css/tailwind.css',
    }
})