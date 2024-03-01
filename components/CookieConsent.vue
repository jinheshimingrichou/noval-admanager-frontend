<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const cookieBarVisible = ref(false)

const allowCookie = () => {
    useSetLocalStroageWithMaxAge<Boolean>('cookieconsent', true, 365 * 24 * 60 * 60)
    cookieBarVisible.value = false
}
onMounted(() => {
    cookieBarVisible.value = !useGetLoaclStroageWithMaxAge<Boolean>('cookieconsent').value
})
</script>

<template>
    <div
        v-if="cookieBarVisible"
        class="fixed bottom-0 left-0 z-5000 w-full flex items-center flex-justify-between rd-t-[10px] bg-[#fff] px4 py2 line-height-[16px]"
    >
        <div class="mr2 text-[14px] color-[#000]">
            <span class="">This website uses cookies to ensure you get the best experience on our website. </span>
            <a
                class="color-bg hover:color-[#ff9800] hover:underline-solid"
                aria-label="learn more about cookies"
                role="button"
                href="/privacy"
                target="_blank"
            >
                Learn more
            </a>
        </div>
        <div
            class="t-cookie-bar cursor-pointer whitespace-nowrap b-transparent rd-[20px] bg-bg px8 py-[0.8rem] line-height-[16px] color-[#fff] hover:bg-[#e995b0]"
            @click="allowCookie"
        >
            Got it!
        </div>
    </div>
</template>

<style scoped lang="less"></style>
