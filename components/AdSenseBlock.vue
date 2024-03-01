<script lang="ts" setup>
import { ref, reactive } from 'vue'

const propsData = defineProps({
    // 广告单元 ID
    dataAdSlot: {
        type: String,
        default: '',
    },
    rootClass: {
        type: String,
        default: 'adswrapper',
    },
    insClass: {
        type: String,
        default: '',
    },
    insStyle: {
        type: String,
        default: 'display: block;',
    },
    dataAdFormat: {
        type: String,
        default: 'auto',
    },
    // 自适应屏幕宽度
    dataFullWidthResponsive: {
        type: String,
        default: 'true',
    },
    adBoxStyle: {
        type: String,
        default: 'height: auto !important; min-height: 300px !important;',
    },
    tagShow: {
        type: Boolean,
        default: true,
    },
    tagClass: {
        type: String,
        default: 'color-#8f8f8f text-3.5 text-center mb-0.5',
    },
    screenWidthRange: {
        type: Array<number>,
        default: () => [-1, -1],
    },
})

const runtimeConfig = useRuntimeConfig()
const adSenseClientId = runtimeConfig.public.adSenseClientId

const allowShowAd = ref(true)
const props = toReactive(propsData)

const allowReqAd = computed(() => {
    const curWidth = window.innerWidth
    const minWidth = props.screenWidthRange[0]
    const maxWidth = props.screenWidthRange[1]
    const minValid = curWidth >= minWidth
    const maxValid = maxWidth === -1 ? true : curWidth <= maxWidth
    return minValid && maxValid
})

const showAd = () => {
    if (!allowReqAd.value) {
        allowShowAd.value = false
        return
    }
    setTimeout(() => {
        try {
            // @ts-ignore
            ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (e) {
            // eslint-disable-next-line
            console.error(e)
        }
    }, 50)
}

onMounted(() => {
    showAd()
})
</script>

<template>
    <div v-if="allowShowAd" class="ad-block" :style="adBoxStyle">
        <div v-if="tagShow" :class="tagClass">ADVERTISEMENT</div>
        <ins
            class="adsbygoogle"
            :class="insClass"
            :style="insStyle"
            :data-ad-client="adSenseClientId"
            :data-ad-slot="dataAdSlot"
            :data-ad-format="dataAdFormat"
            :data-full-width-responsive="dataFullWidthResponsive"
        >
        </ins>
    </div>
</template>

<style scoped lang="scss"></style>
