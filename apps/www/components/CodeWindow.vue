<template>
    <div class="code-window">
        <slot />
    </div>
</template>

<script setup lang="ts">
// No logic needed; acts as a styled container for code blocks
</script>

<style scoped>
.code-window {
    background: var(--color-bg-code, #18181b);
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    padding: 1.5rem;
    overflow-x: auto;
    font-family: var(--font-mono, 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace);
}
</style>
