<script setup lang="ts">
// import DefaultLayout from '~/components/Layouts/Default.vue'
// import mdxComponents from '~/lib/mdx/mdxComponents'
// import { useSeoMeta } from '@vueuse/head'

default defineProps<{
    meta?: any
}>()

const props = defineProps()
// Placeholder for SEO meta
// useSeoMeta(props.meta)
</script>

<template>
    <DefaultLayout>
        <!-- <NextSeo v-bind="props.meta" /> -->
        <div class="prose max-w-none">
            <slot />
        </div>
    </DefaultLayout>
</template>
