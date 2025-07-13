<template>
    <div :class="['admonition', type]">
        <strong v-if="title">{{ title }}</strong>
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    type?: string
    title?: string
}>()
</script>

<style scoped>
.admonition {
    border-left: 4px solid var(--color-primary, #3b82f6);
    background: #f8fafc;
    padding: 1em;
    margin: 1em 0;
    border-radius: 4px;
}

.admonition.info {
    border-color: #3b82f6;
}

.admonition.warning {
    border-color: #f59e42;
}

.admonition.error {
    border-color: #ef4444;
}
</style>
