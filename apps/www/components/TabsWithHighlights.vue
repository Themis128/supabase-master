<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ tabs: Array<{ label: string; highlights: Array<{ label: string; link?: string }> }> }>()
const props = defineProps({
    tabs: Array,
})
const activeTabIdx = ref(0)
function handleTabClick(idx: number) {
    activeTabIdx.value = idx
}
</script>
<template>
    <div class="relative flex flex-col gap-8 lg:gap-12 items-center">
        <div class="relative w-full col-span-full flex justify-center gap-2" role="tablist">
            <button v-for="(tab, index) in props.tabs" :key="index" @click="handleTabClick(index)"
                :aria-selected="index === activeTabIdx" role="tab">
                <span :class="[
                    'py-1.5 px-3 lg:py-2 lg:px-8 hover:border-foreground-lighter hover:text-foreground opacity-80',
                    index === activeTabIdx ? 'opacity-100 !border-foreground' : ''
                ]">
                    {{ tab.label }}
                </span>
            </button>
        </div>
        <ul
            class="position order-last lg:order-2 w-ful flex flex-wrap items-center gap-x-8 gap-y-4 lg:gap-8 justify-center text-center mx-auto z-30">
            <li v-for="highlight in props.tabs[activeTabIdx]?.highlights || []" :key="highlight.label">
                <NuxtLink :to="highlight.link || '#'"
                    class="group cursor-pointer flex items-center gap-2 text-sm whitespace-nowrap text-foreground-light hover:text-foreground transition-colors hover:underline">
                    <!-- TODO: Replace with icon if needed -->
                    <span>&#10003;</span>
                    <span>{{ highlight.label }}</span>
                </NuxtLink>
            </li>
        </ul>
        <!-- TODO: Add BrowserFrame and animated panel if needed -->
        <div class="overflow-hidden lg:order-last bg-default w-full max-w-6xl mx-auto">
            <slot :name="props.tabs[activeTabIdx]?.label" />
        </div>
    </div>
</template>
