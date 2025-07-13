<template>
    <blockquote class="quote">
        <slot />
        <footer v-if="author">— {{ author }}</footer>
    </blockquote>
</template>

<script setup lang="ts">
defineProps<{
    author?: string
}>()
</script>

<style scoped>
.quote {
    border-left: 4px solid #3b82f6;
    background: #f1f5f9;
    padding: 1em;
    margin: 1em 0;
    font-style: italic;
    border-radius: 4px;
}

footer {
    margin-top: 0.5em;
    font-size: 0.9em;
    color: #64748b;
}
</style>
