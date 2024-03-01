import { apaAd } from '@/utils/apa'

interface FrameBehavior {
    frameId: string | undefined
    pauseGame: (status: boolean) => void
    btnCallback: (type: string) => void
    showStartAdProcess: () => void
    showNextAdProcess: () => void
    showPauseAdProcess: () => void
    clickBtnListener: (btnType: string) => void
    listener: (frameId: string) => void
}

// iframe 行为
export const frameBehavior: FrameBehavior = {
    frameId: undefined,
    // 暂停游戏
    pauseGame: function (status: boolean) {
        const frame = document.getElementById(frameBehavior.frameId!) as HTMLIFrameElement
        frame!.contentWindow!.postMessage(
            {
                type: 'pause',
                status,
            },
            '*'
        )
    },
    // 按钮回调
    btnCallback: function (type: string) {
        const frame = document.getElementById(frameBehavior.frameId!) as HTMLIFrameElement
        frame!.contentWindow!.postMessage(
            {
                type: 'btnCallback',
                status: type,
            },
            '*'
        )
    },
    // 展示 Start 广告
    showStartAdProcess: function () {
        apaAd.showStart(
            () => {
                frameBehavior.btnCallback('start')
            },
            () => {
                // 暂停游戏
                frameBehavior.pauseGame(true)
            },
            () => {
                // 继续游戏
                frameBehavior.pauseGame(false)
            }
        )
    },
    // 展示 Next 广告
    showNextAdProcess: function () {
        apaAd.showNext(
            () => {
                frameBehavior.btnCallback('next')
            },
            () => {
                // 暂停游戏
                frameBehavior.pauseGame(true)
            },
            () => {
                // 继续游戏
                frameBehavior.pauseGame(false)
            }
        )
    },
    // 展示 Pause 广告
    showPauseAdProcess: function () {
        apaAd.showPause(
            () => {
                frameBehavior.btnCallback('pause')
            },
            () => {
                // 暂停游戏
                frameBehavior.pauseGame(true)
            },
            () => {
                // 继续游戏
                frameBehavior.pauseGame(false)
            }
        )
    },
    // 按钮监听
    clickBtnListener: function (btnType: string) {
        switch (btnType) {
            case 'start':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                // frameBehavior.showStartAdProcess()
                break
            case 'restart':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                frameBehavior.showNextAdProcess()
                break
            case 'next':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                frameBehavior.showNextAdProcess()
                break
            case 'index':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                frameBehavior.showNextAdProcess()
                break
            case 'voice':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                frameBehavior.showPauseAdProcess()
                break
            case 'back':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                frameBehavior.showNextAdProcess()
                break
            case 'complete':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                frameBehavior.showNextAdProcess()
                break
            case 'page':
                // 暂时不处理
                break
            case 'scale':
                // 暂时不处理
                break
            case 'tip':
                // 暂时不处理
                break
        }
    },
    // 监听
    listener: function (frameId: string) {
        frameBehavior.frameId = frameId
        window.addEventListener('message', function (e) {
            const msg = e.data
            const msgType = msg?.type
            const msgData = msg?.data
            if (msgType === 'frameOnComplete') {
                if (msgData?.status) {
                    // 通关
                } else {
                    // 失败
                }
            } else if (msgType === 'frameOnBtn') {
                const btnType = msgData?.type
                frameBehavior.clickBtnListener(btnType)
            }
        })
    },
}
