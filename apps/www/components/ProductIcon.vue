<template>
    <div :class="containerClass">
        <svg :class="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="icon" />
        </svg>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    icon: String,
    color: {
        type: String,
        default: 'black'
    }
})

const containerClass = computed(() => {
    switch (props.color) {
        case 'green':
            return 'inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-brand text-brand-100'
        case 'alt':
            return 'inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-alternative text-brand'
        case 'gray':
            return 'inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-border-strong text-foreground-light'
        case 'black':
        default:
            return 'inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-foreground text-background-alternative'
    }
})

const svgClass = computed(() => {
    switch (props.color) {
        case 'green':
            return 'h-5 w-5 stroke-brand-200'
        case 'alt':
            return 'h-5 w-5 stroke-brand'
        case 'gray':
            return 'h-5 w-5 stroke-foreground-light'
        case 'black':
        default:
            return 'h-5 w-5 stroke-background'
    }
})
</script>
