import { useIntersectionObserver } from '@vueuse/core'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('lazy', {
        mounted(el, binding) {
            el.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
            const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    el.src = binding.value
                    stop()
                }
            })
        },
    })
})
