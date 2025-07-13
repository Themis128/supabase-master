<script setup lang="ts">
import { computed } from 'vue'
defineProps<{
    images: Array<{ name: string; image: string; alt?: string; link?: string }>
    smCols?: number
    mdCols?: number
    lgCols?: number
    padding?: number
    className?: string
    animated?: boolean
    removeFilter?: boolean
    bg?: boolean
}>()
const props = defineProps({
    images: Array,
    smCols: { type: Number, default: 3 },
    mdCols: { type: Number, default: 6 },
    lgCols: { type: Number, default: 8 },
    padding: { type: Number, default: 8 },
    className: String,
    animated: Boolean,
    removeFilter: Boolean,
    bg: Boolean,
})
const smBreakpoint = computed(() => `grid-cols-${props.smCols}`)
const mdBreakpoint = computed(() => `md:grid-cols-${props.mdCols}`)
const lgBreakpoint = computed(() => `lg:grid-cols-${props.lgCols}`)
const imgPadding = computed(() => {
    if (props.padding === 6) return 'h-6 '
    if (props.padding === 8) return 'h-8 '
    if (props.padding === 12) return 'h-12 '
    return ''
})
</script>
<template>
    <div :class="['grid gap-0.5 rounded-lg overflow-hidden items-center', smBreakpoint, mdBreakpoint, lgBreakpoint]">
        <template v-for="(x, i) in props.images" :key="i">
            <component :is="x.link ? 'NuxtLink' : 'div'" :to="x.link" v-if="x.link">
                <div class="scale-100 transform cursor-pointer duration-100 ease-in-out hover:shadow-sm">
                    <div :class="['relative h-8 w-full overflow-auto', imgPadding, props.className]">
                        <img :src="x.image" :alt="`${x.name} logo`" class="object-scale-down object-center bg-no-repeat"
                            :class="!props.removeFilter ? 'contrast-0 filter opacity-50' : ''" />
                    </div>
                </div>
            </component>
            <div v-else :class="['relative h-8 w-full overflow-auto', imgPadding, props.className]">
                <img :src="x.image" :alt="`${x.name} logo`" class="object-scale-down object-center bg-no-repeat"
                    :class="!props.removeFilter ? 'contrast-0 filter opacity-50' : ''" />
            </div>
        </template>
    </div>
</template>
