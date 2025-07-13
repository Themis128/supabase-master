<template>
    <div class="relative h-full w-full">
        <video class="relative z-10 block w-full h-full reduce-motion:hidden" height="100%" width="100%" loop muted
            autoplay playsinline :poster="video.poster">
            <source v-for="(source, i) in video.sources" :key="`${source.src}${i === 0 ? '.webm' : '.mp4'}`"
                :src="`${source.src}${i === 0 ? '.webm' : '.mp4'}`"
                :type="source.type || (i === 0 ? 'video/webm' : 'video/mp4')" />
        </video>
        <img :src="video.poster" :alt="video.title" width="1920" height="1080"
            class="reduce-motion:block relative z-0 overflow-hidden" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    video: Object
})
</script>
