<script setup lang="ts">
defineProps<{
    url?: string
    label: string
}>()
const props = defineProps({
    url: String,
    label: String,
})
</script>

<template>
    <NuxtLink :to="props.url || ''"
        class="text-foreground-light hover:text-foreground mt-3 block cursor-pointer text-sm">
        <div class="group flex items-center gap-1">
            <span class="sr-only">{{ `${props.label} about ${props.url}` }}</span>
            <span>{{ props.label }}</span>
            <div class="transition-all group-hover:ml-0.5">
                <!-- Replace with an icon component if available -->
                <span>&rarr;</span>
            </div>
        </div>
    </NuxtLink>
</template>
