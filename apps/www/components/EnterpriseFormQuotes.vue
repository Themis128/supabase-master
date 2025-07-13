<template>
    <div class="enterprise-form-quotes">
        <slot />
    </div>
</template>

<script setup lang="ts">
// No logic needed; acts as a styled container for enterprise form quotes
</script>

<style scoped>
.enterprise-form-quotes {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2rem 0;
}
</style>
