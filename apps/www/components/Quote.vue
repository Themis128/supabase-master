<script setup lang="ts">
import Avatar from './Avatar.vue'
defineProps<{
    caption: string
    img: string
}>()
const props = defineProps({
    caption: String,
    img: String,
})
</script>

<template>
    <blockquote class="text-foreground">
        <slot />
        <Avatar v-if="props.caption && props.img" :caption="props.caption" :img="props.img" />
    </blockquote>
</template>
