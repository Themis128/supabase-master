<template>
    <code :class="inlineClass"><slot /></code>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

const slots = useSlots()
const inlineClass = computed(() => {
    const children = slots.default?.()[0]?.children
    if (typeof children !== 'string') return ''
    return children.length < 70 ? 'short-inline-codeblock' : ''
})
</script>

<style scoped>
.short-inline-codeblock {
    white-space: pre;
}
</style>
