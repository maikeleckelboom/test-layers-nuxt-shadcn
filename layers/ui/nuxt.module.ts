import {createResolver, defineNuxtModule} from '@nuxt/kit'
import type {ModuleOptions, Nuxt} from '@nuxt/schema'

interface UiOptions extends ModuleOptions {
}

const {resolve} = createResolver(import.meta.url)

export default defineNuxtModule<UiOptions>({
    meta: {
        name: 'ui'
    },
    setup(options: UiOptions, nuxt: Nuxt) {

    },
})
