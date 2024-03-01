export default defineNuxtPlugin(() => {
    window.addEventListener('hashchange', function () {
        if (location.hash === '#google_vignette') {
            // @ts-ignore
            window.dataLayer.push({
                event: '4444NB', // 发送 Tag Manager
            })
        }
    })
})
