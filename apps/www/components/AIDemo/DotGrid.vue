<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps({
    rows: { type: Number, required: true },
    columns: { type: Number, required: true },
    count: { type: Number, required: true },
})
const totalDots = computed(() => props.rows * props.columns)
</script>
<template>
    <div class="relative w-full h-full min-h-[600px]">
        <div class="grid h-full md:w-full aspect-square justify-between items-space-between items-start" :style="{
            gridTemplateColumns: `repeat(${props.columns}, 1px)`,
            gridTemplateRows: `repeat(${props.rows}, 1fr)`,
            rowGap: 'auto',
        }" aria-label={`Grid of ${props.rows * props.columns} dots, ${props.count} highlighted`}>
            <template v-for="index in totalDots" :key="index-1">
                <div
                    :class="['w-[2px] h-[2px] dark:w-[1px] dark:h-[1px] rounded-full bg-foreground-lighter', index <= props.count ? 'opacity-100 animate-pulse' : 'opacity-30']" />
            </template>
            <div
                class="absolute bg-gradient-to-b lg:bg-gradient-to-r inset-0 w-full h-full from-background to-transparent to-40%" />
            <div
                class="absolute bg-gradient-to-t lg:bg-gradient-to-l inset-0 w-full h-full from-background to-transparent to-20%" />
        </div>
    </div>
</template>
