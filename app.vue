<script lang="ts" setup>
import { title, appDescription, ogImage } from '@/constants'

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public.baseUrl ?? ''

useHead({
    title,
})

useSeoMeta({
    description: appDescription,
    // Facebook / Open Graph
    ogUrl: baseUrl,
    ogType: 'website',
    ogTitle: title,
    ogDescription: appDescription,
    ogImage,

    // Twitter
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: appDescription,
    twitterImage: ogImage,
})
</script>

<template>
    <!-- pwa -->
    <VitePwaManifest />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style scoped lang="scss"></style>
