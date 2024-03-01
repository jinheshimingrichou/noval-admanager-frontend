<script lang="ts" setup>
import { simpleSiteUrl } from '@/constants/index'
</script>

<template>
    <div class="policy-container">
        <h1>Contact Us</h1>
        <p>IF you have any questions or inquiries, please contact us via support@{{ simpleSiteUrl }}</p>
    </div>
</template>

<style scoped lang="scss">
.policy-container {
    min-height: calc(100vh - 90px);
    padding: 10px 20px;
    background-color: #f383a7;

    h1 {
        color: #fff;
        font-size: 30px;
        font-weight: bold;
        margin: 10px 0;
    }

    p {
        font-size: 1rem;
        color: #fff;
    }
}
</style>
