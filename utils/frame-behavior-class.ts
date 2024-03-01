import { apaAd } from '@/utils/apa'

interface FrameBehavior {
    frameId: string | undefined
    pauseGame: (status: boolean) => void
    btnCallback: (type: string) => void
    showStartAdProcess: () => void
    showNextAdProcess: () => void
    showPauseAdProcess: () => void
    clickBtnListener: (btnType: string) => void
    listener: () => void
}

export class IframeBehavior implements FrameBehavior {
    frameId: string | undefined
    pauseGame: (status: boolean) => void = () => {}
    btnCallback: (type: string) => void = () => {}
    showStartAdProcess: () => void = () => {}
    showNextAdProcess: () => void = () => {}
    showPauseAdProcess: () => void = () => {}
    clickBtnListener: (btnType: string) => void = () => {}
    listener: () => void = () => {}

    /*
     * 暂停游戏
     * @param {status: boolean} status 暂停状态 true: 暂停 false: 继续
     * @return {void}
     * */
    static pauseGame(status: boolean, frameId: string) {
        const frame = document.getElementById(frameId!) as HTMLIFrameElement
        frame!.contentWindow!.postMessage(
            {
                type: 'pause',
                status,
            },
            '*'
        )
    }

    /*
     * 按钮回调
     * @param {type: string} type: 按钮类型 start: 开始 next: 下一关
     * @return {void}
     * */
    static btnCallback(type: string, frameId: string) {
        const frame = document.getElementById(frameId!) as HTMLIFrameElement
        frame!.contentWindow!.postMessage(
            {
                type: 'btnCallback',
                status: type,
            },
            '*'
        )
    }

    /*
     * 展示 Start 广告
     * @return
     * */
    static showStartAdProcess(frameId: string) {
        apaAd.showStart(
            () => {
                IframeBehavior.btnCallback('start', frameId)
            },
            () => {
                // 暂停游戏
                IframeBehavior.pauseGame(true, frameId)
            },
            () => {
                // 继续游戏
                IframeBehavior.pauseGame(false, frameId)
            }
        )
    }

    /*
     * 展示 Next 广告
     * @return
     * */
    static showNextAdProcess(frameId: string) {
        apaAd.showNext(
            () => {
                IframeBehavior.btnCallback('next', frameId)
            },
            () => {
                // 暂停游戏
                IframeBehavior.pauseGame(true, frameId)
            },
            () => {
                // 继续游戏
                IframeBehavior.pauseGame(false, frameId)
            }
        )
    }

    /*
     * 展示 Pause 广告
     * @return
     * */
    static showPauseAdProcess(frameId: string) {
        apaAd.showPause(
            () => {
                IframeBehavior.btnCallback('pause', frameId)
            },
            () => {
                // 暂停游戏
                IframeBehavior.pauseGame(true, frameId)
            },
            () => {
                // 继续游戏
                IframeBehavior.pauseGame(false, frameId)
            }
        )
    }

    /*
     * 按钮监听
     * @param {btnType: string}
     * btnType: 按钮类型 start: 开始 next: 下一关
     * @return
     * */
    static clickBtnListener(btnType: string, frameId: string) {
        switch (btnType) {
            case 'start':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                IframeBehavior.showStartAdProcess(frameId)
                break
            case 'restart':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                IframeBehavior.showNextAdProcess(frameId)
                break
            case 'next':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                IframeBehavior.showNextAdProcess(frameId)
                break
            case 'index':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                IframeBehavior.showPauseAdProcess(frameId)
                break
            case 'voice':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                IframeBehavior.showPauseAdProcess(frameId)
                break
            case 'back':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                IframeBehavior.showNextAdProcess(frameId)
                break
            case 'complete':
                // 播放广告， 广告结束后恢复游戏，触发回调函数
                IframeBehavior.showNextAdProcess(frameId)
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
    }

    static listener(frameId: string) {
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
                IframeBehavior.clickBtnListener(btnType, frameId)
            }
        })
    }
}
