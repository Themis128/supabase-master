<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
const props = defineProps({
    duration: {
        type: Number,
        default: 2000,
    },
    triggerAnimOnScroll: {
        type: Boolean,
        default: false,
    },
    referenceElId: {
        type: String,
        default: '',
    },
})
const countTo = ref(0)
const count = ref(0)
const animTriggered = ref(false)
const frameDuration = 1000 / 60
function easeOutQuad(t: number) {
    return t * (2 - t)
}
function startCount() {
    let frame = 0
    const totalFrames = Math.round(props.duration / frameDuration)
    count.value = 0
    const counter = setInterval(() => {
        frame++
        const progress = easeOutQuad(frame / totalFrames)
        count.value = Math.floor(countTo.value * progress)
        if (frame === totalFrames) clearInterval(counter)
    }, frameDuration)
}
onMounted(() => {
    countTo.value = parseInt((typeof (useSlots().default?.()[0]?.children) === 'string' ? useSlots().default?.()[0]?.children : '0') as string, 10)
    if (props.triggerAnimOnScroll) {
        const handleScroll = () => {
            const reference = document.getElementById(props.referenceElId)
            if (reference && !animTriggered.value) {
                const yOffset = reference.getBoundingClientRect().top - window.innerHeight + 20
                if (yOffset <= 0) {
                    animTriggered.value = true
                    startCount()
                }
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        onUnmounted(() => window.removeEventListener('scroll', handleScroll))
    } else {
        startCount()
    }
})
</script>
<template>
    <span>{{ count }}</span>
</template>
