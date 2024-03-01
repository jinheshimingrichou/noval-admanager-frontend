import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
    scrollBehavior(to, from, savedPosition) {
        // if (to.name === 'p-uid') {
        //     return { top: 60 }
        // }
        return { top: 0 }
    },
}
