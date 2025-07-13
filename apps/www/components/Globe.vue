<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// import createGlobe from 'cobe' // TODO: add cobe for globe rendering
// import { useTheme } from 'some-theme-lib' // TODO: theme support
// import { debounce } from 'lodash-es'

const canvasRef = ref(null)
let rotation = 0
let width = 0

function onResize() {
    if (canvasRef.value) width = canvasRef.value.offsetWidth
}

onMounted(() => {
    // TODO: Replace with actual theme logic
    // const resolvedTheme = 'light'
    // const debouncedResize = debounce(onResize, 10)
    window.addEventListener('resize', onResize)
    onResize()
    // TODO: createGlobe(canvasRef.value, { ... })
    setTimeout(() => {
        if (canvasRef.value) canvasRef.value.style.opacity = '0.8'
    }, 10)
})
onUnmounted(() => {
    window.removeEventListener('resize', onResize)
    // TODO: destroy globe instance
})
</script>
<template>
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full opacity-0 transition-opacity object-contain" />
</template>
