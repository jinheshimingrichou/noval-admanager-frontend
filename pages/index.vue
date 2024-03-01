<script lang="ts" setup>
const { data, error } = useFetch<APIResponseType<IndexPageType>>('/api/v1/game/page/index', {
    headers: { accept: 'application/json' },
})
</script>

<template>
    <div class="h-[calc(100vh-90px)] w-full bg-bg">
        <div>data: {{ data }}</div>
        <div>data: {{ data?.data }}</div>
        <div>indexGameList: {{ data?.data.indexGameList }}</div>
    </div>
</template>

<style scoped lang="scss"></style>
