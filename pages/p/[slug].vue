<script lang="ts" setup>
import { ref, reactive } from 'vue'

const route = useRoute('p-slug')
const slug = route.params.slug
</script>

<template>
    <div class="h-[calc(100vh-90px)] w-full bg-bg">play {{ slug }}</div>
</template>

<style scoped lang="scss"></style>
