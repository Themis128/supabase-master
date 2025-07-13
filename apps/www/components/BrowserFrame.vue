<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
    className: String,
    contentClassName: String,
    hasFrameButtons: {
        type: Boolean,
        default: true,
    },
})
</script>
<template>
    <div
        :class="['relative rounded-2xl shadow-lg p-2 w-full h-full bg-alternative-200 border flex flex-col', props.className]">
        <div v-if="props.hasFrameButtons" class="w-full px-2 pt-1 pb-3 relative flex items-center gap-1.5 lg:gap-2">
            <div class="w-2 h-2 bg-border rounded-full" />
            <div class="w-2 h-2 bg-border rounded-full" />
            <div class="w-2 h-2 bg-border rounded-full" />
        </div>
        <div :class="['h-full w-full rounded-lg', props.contentClassName]">
            <slot />
        </div>
    </div>
</template>
