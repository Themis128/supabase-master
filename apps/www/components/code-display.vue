<template>
    <pre class="code-display"><code><slot /></code></pre>
</template>

<script setup lang="ts">
// No logic needed; acts as a styled code block
</script>

<style scoped>
.code-display {
    background: transparent;
    color: var(--color-code, #e5e7eb);
    font-size: 1rem;
    font-family: var(--font-mono, 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace);
    padding: 0;
    margin: 0;
    overflow-x: auto;
}
</style>
