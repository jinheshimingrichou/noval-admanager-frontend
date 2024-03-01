export default defineNuxtPlugin(() => {
    const adIframeClick = (callback: any) => {
        const isTrack = ref(false)

        setInterval(() => {
            const iframeEleNodeList = document.querySelectorAll('.ad-block ins iframe')

            if (document.activeElement) {
                const iframeEleArr = Array.prototype.slice.call(iframeEleNodeList)
                const activeEle = document.activeElement

                if (iframeEleArr.includes(activeEle)) {
                    if (!isTrack.value) {
                        isTrack.value = true
                        callback()
                    }
                } else {
                    isTrack.value = false
                }
            }
        }, 200)
    }

    adIframeClick(() => {
        window.dataLayer?.push({
            event: '1111NB',
        })
    })
})
