<template>
    <div>
        <div v-if="showToolbar"
            class="bg-surface-100 border-overlay flex h-7 w-full items-center gap-1.5 rounded-t-lg border border-b-0 px-4">
            <div class="flex items-center gap-1.5">
                <div class="bg-surface-300 h-2.5 w-2.5 rounded-full"></div>
                <div class="bg-surface-300 h-2.5 w-2.5 rounded-full"></div>
                <div class="bg-surface-300 h-2.5 w-2.5 rounded-full"></div>
            </div>
        </div>
        <div class="border-overlay overflow-hidden rounded-b-lg border"
            :style="{ maxHeight: MAX_HEIGHT + 'px', transform: 'translateZ(0)' }">
            <div class="transition-transform duration-500" :style="{ transform: `translate3d(0, -${position}px, 0)` }">
                <CodeBlock v-bind="codeBlockProps">{{ childrenWithPadding }}</CodeBlock>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import CodeBlock from './CodeBlock/CodeBlock.vue'

const props = defineProps({
    highlightLines: String,
    showToolbar: Boolean,
    // ...other CodeBlockProps
    // children: String
})

const MAX_HEIGHT = 520
const CODE_LINE_HEIGHT = 22
const TOP_OFFSET = 4

const highlightLinesArr = computed(() => {
    if (!props.highlightLines) return []
    // parse-numeric-range equivalent in JS
    return props.highlightLines.split(',').flatMap(r => {
        if (r.includes('-')) {
            const [start, end] = r.split('-').map(Number)
            return Array.from({ length: end - start + 1 }, (_, i) => start + i)
        }
        return [Number(r)]
    })
})
const firstLine = computed(() => Math.min(...highlightLinesArr.value))
const lastLine = computed(() => Math.max(...highlightLinesArr.value))
const firstLinePosition = computed(() => firstLine.value * CODE_LINE_HEIGHT)
const lastLinePosition = computed(() => lastLine.value * CODE_LINE_HEIGHT)
const middlePosition = computed(() => (firstLinePosition.value + lastLinePosition.value) / 2)
const position = computed(() => Math.max(middlePosition.value - MAX_HEIGHT / 2 + TOP_OFFSET, 0))

const codeBlockProps = computed(() => {
    const { highlightLines, showToolbar, ...rest } = props
    return rest
})
const childrenWithPadding = computed(() => (props.children || '') + '\n'.repeat(100))
</script>
