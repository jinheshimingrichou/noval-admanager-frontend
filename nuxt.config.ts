// seo信息
import { appName, keyWords, appDescription } from './constants/index'

export default defineNuxtConfig({
    // 模块
    modules: [
        'nuxt-swiper',
        '@unocss/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/device',
        '@vite-pwa/nuxt',
        '@nuxtjs/sitemap',
        '@zadigetvoltaire/nuxt-gtm',
    ],

    // 开启ssr
    ssr: true,

    runtimeConfig: {
        // 全局变量
        public: {
            baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
            baseApi: process.env.NUXT_PUBLIC_BASE_API,
            subdomain: process.env.NUXT_PUBLIC_SUBDOMAIN,
            imgBaseUrl: process.env.NUXT_PUBLIC_IMG_BASE_URL,
            adSenseClientId: process.env.NUXT_PUBLIC_ADSENSE_CLIENT_ID,
            adP1: process.env.NUXT_PUBLIC_AD_P_1,
            adP2: process.env.NUXT_PUBLIC_AD_P_2,
            adP3: process.env.NUXT_PUBLIC_AD_P_3,
        },
    },

    // header信息
    app: {
        head: {
            viewport:
                'user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width, height=device-height',
            link: [
                { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
            ],
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                { name: 'description', content: appDescription },
                { name: 'keywords', content: keyWords },
                {
                    name: 'apple-mobile-web-app-status-bar-style',
                    content: 'black-translucent',
                },
            ],
            script: [
                {
                    innerHTML:
                        'window.adsbygoogle = window.adsbygoogle || [];let adBreak = adConfig = function (o) {adsbygoogle.push(o);}',
                    type: 'text/javascript',
                },
                {
                    async: true,
                    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
                    'data-ad-client': process.env.NUXT_PUBLIC_ADSENSE_CLIENT_ID,
                    'data-ad-frequency-hint': '30s',
                    // 'data-adbreak-test': 'on'  // 广告测试开关
                },
            ],
        },
    },

    // 全局css样式
    css: ['@unocss/reset/tailwind.css', '~/assets/css/main.scss'],

    // 服务启动端口号
    devServer: {
        port: 3000,
    },

    // devtools工具
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },

    // 判断设备类型
    device: {
        refreshOnResize: true,
    },

    // 实验性配置 https://nuxt.com/docs/guide/going-further/experimental-features
    experimental: {
        payloadExtraction: false,
        typedPages: true,
    },

    // gtm配置
    gtm: {
        enabled: true,
        debug: false,
        id: process.env.NUXT_CONFIG_GTM_ID ?? '',
    },

    // 页面缓存地址
    nitro: {
        // 路由渲染规则
        routeRules: {
            '/': {
                swr: process.env.NUXT_CONFIG_CACHE_TTL
                    ? Number(process.env.NUXT_CONFIG_CACHE_TTL) > 0
                        ? Number(process.env.NUXT_CONFIG_CACHE_TTL)
                        : false
                    : 300,
            }, // 单位 s
            '/p/**': {
                swr: process.env.NUXT_CONFIG_CACHE_TTL
                    ? Number(process.env.NUXT_CONFIG_CACHE_TTL) > 0
                        ? Number(process.env.NUXT_CONFIG_CACHE_TTL)
                        : false
                    : 300,
            },
            '/c/**': {
                swr: process.env.NUXT_CONFIG_CACHE_TTL
                    ? Number(process.env.NUXT_CONFIG_CACHE_TTL) > 0
                        ? Number(process.env.NUXT_CONFIG_CACHE_TTL)
                        : false
                    : 300,
            },
            '/contactus': {
                swr: process.env.NUXT_CONFIG_CACHE_TTL
                    ? Number(process.env.NUXT_CONFIG_CACHE_TTL) > 0
                        ? Number(process.env.NUXT_CONFIG_CACHE_TTL)
                        : false
                    : 300,
            },
            '/privacy': {
                swr: process.env.NUXT_CONFIG_CACHE_TTL
                    ? Number(process.env.NUXT_CONFIG_CACHE_TTL) > 0
                        ? Number(process.env.NUXT_CONFIG_CACHE_TTL)
                        : false
                    : 300,
            },
            '/legalterms': {
                swr: process.env.NUXT_CONFIG_CACHE_TTL
                    ? Number(process.env.NUXT_CONFIG_CACHE_TTL) > 0
                        ? Number(process.env.NUXT_CONFIG_CACHE_TTL)
                        : false
                    : 300,
            },
            '/api/**': {
                proxy: process.env.NUXT_PUBLIC_BASE_API + '/api/**',
            },
            '/site_api/**': {
                proxy: process.env.NUXT_PUBLIC_BASE_API + '/site_api/**',
            },
        },
        storage: {
            cache: {
                driver: 'redis',
                host: 'localhost',
                port: 6379,
                db: 0,
            },
        },
        devStorage: {
            cache: {
                driver: 'redis',
                host: 'localhost',
                port: 6379,
                db: 0,
            },
        },
        externals: {
            traceInclude: [],
        },
    },

    // pwa配置
    pwa: {
        registerType: 'autoUpdate',
        base: '/',
        manifest: {
            id: '/',
            scope: '/',
            name: appName,
            short_name: appName,
            description: appDescription,
            theme_color: '#ffffff',
            icons: [
                {
                    src: 'pwa-64x64.png',
                    sizes: '64x64',
                    type: 'image/png',
                },
                {
                    src: 'pwa-96x96.png',
                    sizes: '96x96',
                    type: 'image/png',
                },
                {
                    src: 'pwa-128x128.png',
                    sizes: '128x128',
                    type: 'image/png',
                },
                {
                    src: 'pwa-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: 'pwa-256x256.png',
                    sizes: '256x256',
                    type: 'image/png',
                },
                {
                    src: 'pwa-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any',
                },
                {
                    src: 'pwa-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'maskable',
                },
            ],
        },
        workbox: {
            globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
            navigateFallbackDenylist: [/^\/p\//, /^\/api\//],
            navigateFallback: '/',
            cleanupOutdatedCaches: true,
            runtimeCaching: [
                {
                    urlPattern: /^https:\/\/fonts.googleapis.com\/.*/i,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'google-fonts-cache',
                        expiration: {
                            maxEntries: 10,
                            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                        },
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                },
                {
                    urlPattern: /^https:\/\/fonts.gstatic.com\/.*/i,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'gstatic-fonts-cache',
                        expiration: {
                            maxEntries: 10,
                            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                        },
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                },
            ],
        },
        registerWebManifestInRouteRules: true,
        writePlugin: true,
        devOptions: {
            enabled: process.env.NUXT_ENV === 'production' || process.env.NUXT_ENV === 'test',
            navigateFallback: '/',
        },
    },

    // sitemap配置
    sitemap: {
        xsl: false,
        excludeAppSources: ['nuxt:pages'],
        cacheMaxAgeSeconds: 60 * 60 * 24, // 1 day
        sources: [['/site_api/v1/page/sitemap', { headers: { accept: 'application/json' } }]],
    },
})
