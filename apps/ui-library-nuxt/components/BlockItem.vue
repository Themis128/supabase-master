<template>
    <div class="mt-4">
        <Command :name="name" highlight />
        <OpenInV0Button :name="name" class="w-fit shrink-0 mt-4" />
    </div>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
// Import Command and OpenInV0Button as Vue components or wrappers
// import Command from './Command.vue'
// import OpenInV0Button from './OpenInV0Button.vue'
</script>
