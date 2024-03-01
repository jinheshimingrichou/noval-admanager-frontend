<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'

const btnShow = ref<Boolean>(false)

const backTop = () => {
    // document.documentElement.scrollTop = 0
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToTop = () => {
    const pageLookHeight = document.documentElement.clientHeight || document.body.clientHeight
    const scroll = document.documentElement.scrollTop
    btnShow.value = scroll >= pageLookHeight * 0.618
}

onMounted(() => {
    window.addEventListener('scroll', scrollToTop)
})
</script>

<template>
    <div
        v-if="btnShow"
        class="t-back-top fixed bottom-[70px] right-[40px] z-5000 h-[50px] w-[100px] flex cursor-pointer items-center justify-center overflow-hidden rd-[200px] bg-[#fff] transition transition-all duration-500 ease-in-out"
        @click="backTop"
    >
        <div class="i-svg-back-top h-[50px] w-[50px]"></div>
    </div>
</template>

<style scoped lang="less"></style>
