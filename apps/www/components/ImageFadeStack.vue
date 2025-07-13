<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
defineProps<{
    autoplay?: boolean
    images: string[]
    height?: 'default'
    delay?: number
    altText?: string
    showNavigation?: boolean
}>()
const props = defineProps({
    autoplay: Boolean,
    images: Array,
    height: { type: String, default: 'default' },
    delay: { type: Number, default: 3000 },
    altText: { type: String, default: 'Image' },
    showNavigation: Boolean,
})
const currentImageIndex = ref(0)
const isPlaying = ref(props.autoplay)
let intervalId: any = null
watch(() => props.images, () => { currentImageIndex.value = 0 })
watch(isPlaying, (val) => {
    if (val) startAutoplay()
    else stopAutoplay()
})
function startAutoplay() {
    stopAutoplay()
    intervalId = setInterval(() => {
        currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length
    }, props.delay)
}
function stopAutoplay() {
    if (intervalId) clearInterval(intervalId)
}
onMounted(() => { if (isPlaying.value) startAutoplay() })
onUnmounted(() => stopAutoplay())
function handleNavClick(index: number) {
    isPlaying.value = false
    currentImageIndex.value = index
}
</script>
<template>
    <div :class="['relative', props.height === 'default' ? 'h-[300px]' : 'h-[400px]', 'my-6']">
        <template v-for="(image, index) in props.images" :key="index">
            <img class="absolute top-0 left-0" :src="image" :alt="props.altText" :style="{
                opacity: currentImageIndex === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
            }" />
        </template>
        <div class="absolute bottom-4 right-4 flex gap-3">
            <template v-if="props.showNavigation">
                <button v-for="(_, index) in props.images" :key="index" class="text-white"
                    @click="handleNavClick(index)">
                    <div
                        :class="['w-2 h-2 rounded-full bg-foreground-muted hover:bg-surface-100 transition-colors', currentImageIndex === index ? 'bg-border-strong' : '']" />
                </button>
            </template>
            <button @click="isPlaying = !isPlaying"
                class="text-white bg-foreground-light hover:bg-overlay rounded-full p-0.5 transition-colors">
                <span v-if="isPlaying">⏸️</span>
                <span v-else>▶️</span>
            </button>
        </div>
    </div>
</template>
