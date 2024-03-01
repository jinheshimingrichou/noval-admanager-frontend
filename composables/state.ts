export const useCookieConsent = (visible: Boolean) => useState<Boolean>('cookieConsent', () => visible)
export const useSetLocalStroageWithMaxAge = <T>(key: string, value: T, maxAge?: number) =>
    useState<T>('setLocalStroageWithMaxAge', () => <T>setLocalStroageWithMaxAge(key, value, maxAge))
export const useGetLoaclStroageWithMaxAge = <T>(key: string) =>
    useState<T>('getLoaclStroageWithMaxAge', () => <T>getLoaclStroageWithMaxAge(key))

/**
 * 设置带过期时间的 LocalStorage
 * @param {String} key 键
 * @param {Any} value 数据
 * @param {Number} maxAge 过期时间 (秒)s
 */
export const setLocalStroageWithMaxAge = <T>(key: string, value: T, maxAge?: number) => {
    if (maxAge) {
        maxAge = new Date().getTime() + maxAge * 1000
    }
    const data = {
        value,
        maxAge,
    }
    localStorage.setItem(key, JSON.stringify(data))
}

/**
 * 获取带过期时间的 LocalStorage
 * @param {String} key 键
 * @returns {Any} 数据
 */
export const getLoaclStroageWithMaxAge = <T>(key: string): T | null => {
    const data = localStorage.getItem(key) || ''
    if (data) {
        const res = JSON.parse(data)
        const value = res.value
        const maxAge = res.maxAge

        if (new Date().getTime() <= maxAge) {
            return value
        }
    }
    return null
}
