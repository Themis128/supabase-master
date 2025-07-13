<template>
    <div class="event-callout">
        <slot />
    </div>
</template>

<script setup lang="ts">
// No logic needed; acts as a styled callout for events
</script>

<style scoped>
.event-callout {
    background: var(--color-bg-callout, #fef3c7);
    border-left: 4px solid var(--color-accent, #f59e42);
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
    color: var(--color-text-callout, #92400e);
}
</style>
