<script setup lang="ts">
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
    <div class="align-center m-0 flex h-8 items-center gap-3">
        <img :src="'/images/blog/avatars/' + props.img" class="h-8 w-8 rounded-full object-cover text-center m-0"
            :alt="`${props.caption} avatar`" width="32" height="32" />
        <figcaption style="margin-top: 0" class="text-foreground-lighter font-normal not-italic not-prose">
            <p>{{ props.caption }}</p>
        </figcaption>
    </div>
</template>
