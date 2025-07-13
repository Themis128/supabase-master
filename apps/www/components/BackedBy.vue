<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const props = defineProps({
    className: String,
    layout: {
        type: String,
        default: 'vertical',
    },
})
const route = useRoute()
const basePath = computed(() => route.path)
</script>
<template>
    <div
        :class="['flex text-center gap-4 md:gap-2', props.layout === 'horizontal' ? 'flex-col lg:flex-row items-center justify-center' : 'flex-col items-center', props.className]">
        <small class="small text-xs">backed by</small>
        <div class="w-full sm:max-w-lg lg:ml-0">
            <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-8 sm:flex-nowrap">
                <div class="relative h-6 w-6 sm:h-8">
                    <img :src="`${basePath}/images/logos/yc--grey.png`" alt="Y Combinator"
                        class="object-contain w-full h-full" />
                </div>
                <div class="relative w-20 h-4 sm:h-5">
                    <img :src="`${basePath}/images/logos/mozilla--grey.png`" alt="Mozilla"
                        class="object-contain w-full h-full" />
                </div>
                <div class="relative w-20 h-4 sm:h-5">
                    <img :src="`${basePath}/images/logos/coatue.png`" alt="Coatue"
                        class="object-contain w-full h-full" />
                </div>
                <div class="relative w-20 h-5 sm:h-6">
                    <img :src="`${basePath}/images/logos/felicis.png`" alt="Felicis"
                        class="object-contain w-full h-full" />
                </div>
            </div>
        </div>
    </div>
</template>
