<template>
    <div v-if="isBlogPost" class="h-[2px] w-full flex justify-start relative">
        <div class="h-full top-0 bottom-0 right-0 absolute w-screen bg-brand will-change-transform transition-opacity"
            :style="{
                display: isActive ? 'absolute' : 'relative',
                transform: `translate3d(${isActive ? progressPercentage - 100 + '%' : '0'},0,0)`,
                opacity: isActive ? 1 : 0,
            }" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const progressPercentage = ref(0)
const route = useRoute()
const isBlogPost = computed(() => route.path.includes('/blog/'))

const handleScroll = () => {
    const article = document?.querySelector('article')
    if (!article) return
    const { top, height } = (article as HTMLElement).getBoundingClientRect()
    const scrollDistance = -top
    progressPercentage.value = (scrollDistance / (height - document.documentElement.clientHeight)) * 100
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const isActive = computed(() => progressPercentage.value <= 100)
</script>
