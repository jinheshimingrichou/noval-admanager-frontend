// 新 AFG 广告相关

interface AdConfigOptions {
    preloadAdBreaks?: 'on' | 'off'
    onReady?: () => void
}

interface AdConfig {
    (options: AdConfigOptions): void
}

interface AdBreakOptions {
    type: string
    name: string
    beforeAd?: () => void
    afterAd?: () => void
    beforeReward?: (showAdFn: () => void) => void
    adDismissed?: () => void
    adViewed?: () => void
    adBreakDone: (info: any) => void
}

interface AdBreak {
    (options: AdBreakOptions): void
}

interface WindowWithDataLayer extends Window {
    dataLayer: any[]
}

interface ApaAd {
    triggerAd: () => void
    initConfig: () => void
    start: (breakFunc?: () => void, beforeAdFunc?: () => void) => any
    showPreroll: (breakFunc: () => void) => void
    showStart: (breakFunc: () => void, beforeAdFunc: () => void, afterAdFunc: () => void) => void
    showNext: (breakFunc: () => void, beforeAdFunc: () => void, afterAdFunc: () => void) => void
    showPause: (breakFunc: () => void, beforeAdFunc: () => void, afterAdFunc: () => void) => void
    showReward: (
        rewardFunc: () => void,
        dismissFunc: () => void,
        beforeAdFunc: () => void,
        afterAdFunc: () => void
    ) => void
}

export const apaAd: ApaAd = {
    triggerAd: function () {
        const windowWithDataLayer = window as unknown as WindowWithDataLayer
        windowWithDataLayer.dataLayer.push({
            event: '5555NB', // 发送 Tag Manager
        })
    },
    initConfig: function () {
        const adConfig: AdConfig = (options) => {
            // ...
        }
        adConfig({
            preloadAdBreaks: 'on',
            onReady: () => {
                // console.log('apa ready!');
            },
        })
    },
    start: function (breakFunc = () => {}, beforeAdFunc = () => {}) {
        const adConfigPromise = new Promise<boolean>((resolve, reject) => {
            const adConfig: AdConfig = (options) => {
                // ...
                resolve(true)
            }
            adConfig({
                preloadAdBreaks: 'on',
                onReady: () => {
                    // console.log('apa ready!');
                },
            })
        })
        const timeoutPromise = new Promise<boolean>((resolve, reject) => {
            const timer = setTimeout(() => {
                resolve(false)
                clearTimeout(timer)
            }, 10000)
        })
        Promise.race([adConfigPromise, timeoutPromise]).then((isShow) => {
            if (isShow) {
                apaAd.showPreroll(breakFunc)
                apaAd.triggerAd()
                beforeAdFunc()
            } else {
                breakFunc()
            }
        })
    },
    showPreroll: function (breakFunc: () => void) {
        const adBreak: AdBreak = (options) => {
            // ...
        }
        adBreak({
            type: 'preroll',
            name: 'preroll_ad',
            adBreakDone: (info: any) => {
                setTimeout(() => {
                    breakFunc()
                }, 200)
            },
        })
    },
    showStart: function (breakFunc: () => void, beforeAdFunc: () => void, afterAdFunc: () => void) {
        const adBreak: AdBreak = (options) => {
            // ...
        }
        adBreak({
            type: 'start',
            name: 'start_ad',
            beforeAd: () => {
                apaAd.triggerAd()
                beforeAdFunc()
            },
            afterAd: afterAdFunc,
            adBreakDone: (info: any) => {
                setTimeout(() => {
                    breakFunc()
                }, 200)
            },
        })
    },
    showNext: function (breakFunc: () => void, beforeAdFunc: () => void, afterAdFunc: () => void) {
        const adBreak: AdBreak = (options) => {
            // ...
        }
        adBreak({
            type: 'next',
            name: 'next_ad',
            beforeAd: () => {
                apaAd.triggerAd()
                beforeAdFunc()
            },
            afterAd: afterAdFunc,
            adBreakDone: (info: any) => {
                setTimeout(() => {
                    breakFunc()
                }, 200)
            },
        })
    },
    showPause: function (breakFunc: () => void, beforeAdFunc: () => void, afterAdFunc: () => void) {
        const adBreak: AdBreak = (options) => {
            // ...
        }
        adBreak({
            type: 'pause',
            name: 'pause_ad',
            beforeAd: () => {
                apaAd.triggerAd()
                beforeAdFunc()
            },
            afterAd: afterAdFunc,
            adBreakDone: (info: any) => {
                setTimeout(() => {
                    breakFunc()
                }, 200)
            },
        })
    },
    showReward: function (
        rewardFunc: () => void,
        dismissFunc: () => void,
        beforeAdFunc: () => void,
        afterAdFunc: () => void
    ) {
        const adBreak: AdBreak = (options) => {}
        adBreak({
            type: 'reward',
            name: 'reward_ad',
            beforeAd: () => {
                beforeAdFunc()
            },
            afterAd: afterAdFunc,
            beforeReward: (showAdFn) => {
                showAdFn()
            },
            // 用户取消
            adDismissed: () => {
                dismissFunc()
            },
            // 看完广告
            adViewed: () => {
                rewardFunc()
            },
            adBreakDone: (info) => {
                setTimeout(() => {
                    dismissFunc()
                }, 200)
            },
        })
    },
}
