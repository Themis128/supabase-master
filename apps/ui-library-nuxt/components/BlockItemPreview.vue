<template>
    <div class="flex items-center justify-center relative border rounded-lg">
        <iframe :src="src" class="w-full h-[600px] border-0 rounded-md" :title="title" />
    </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; src: string }>()
</script>
