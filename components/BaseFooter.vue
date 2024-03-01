<script lang="ts" setup>
import { ref, reactive } from 'vue'
const data = ref([
    {
        to: '/contactus',
        text: 'Contact Us',
    },
    {
        to: '/privacy',
        text: 'Privacy Policy',
    },
    {
        to: '/legalterms',
        text: 'Legal Terms',
    },
])
</script>

<template>
    <footer class="w-full">
        <div class="relative h-[30px] flex justify-center gap-[20px] flex-items-center bg-theme">
            <a
                v-for="(item, index) in data"
                :key="index"
                :href="item.to"
                class="text-[14px] color-[#333] hover:color-[#666] hover:underline"
            >
                {{ item.text }}</a
            >
        </div>
    </footer>
</template>

<style scoped lang="less"></style>
