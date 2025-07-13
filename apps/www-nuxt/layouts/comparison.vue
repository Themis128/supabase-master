<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
// Placeholders for composables and helpers
// import { useAuthors } from '~/composables/useAuthors'
// import { generateReadingTime } from '~/composables/useReadingTime'
// import CTABanner from '~/components/CTABanner.vue'
// import DefaultLayout from '~/components/Layouts/Default.vue'
// import MdxRenderer from '~/components/MdxRenderer.vue'
// import { useSeoMeta } from '@vueuse/head'

default defineProps<{
    blog: any
    prevPost?: any
    nextPost?: any
    components?: any
}>()

const props = defineProps()
const route = useRoute()

// Placeholder for author lookup logic
const authors = computed(() => {
    if (!props.blog?.author) return []
    return props.blog.author.split(',').map((id: string) => ({
        author: id,
        author_url: '#',
        author_image_url: '',
        position: ''
    }))
})

// Placeholder for reading time
const readingTime = computed(() => 'X min read')

// Placeholder for SEO meta
// useSeoMeta({
//   title: props.blog.title,
//   description: props.blog.description,
//   ogTitle: props.blog.title,
//   ogDescription: props.blog.description,
//   ogUrl: `https://supabase.com/alternatives/${props.blog.slug}`,
//   ogType: 'article',
//   ogImage: `https://supabase.com/images/blog/${props.blog.image || props.blog.thumb}`
// })
</script>

<template>
    <DefaultLayout>
        <article class="mx-auto max-w-5xl px-8 py-16 sm:px-16 xl:px-20">
            <div class="mb-16 max-w-5xl space-y-8">
                <div class="space-y-4">
                    <p class="text-brand text-center">Alternative</p>
                    <h1 class="h1 text-center">{{ props.blog.title }}</h1>
                    <div class="text-muted flex justify-center space-x-3 text-sm">
                        <p>{{ props.blog.date }}</p>
                        <p>•</p>
                        <p>{{ readingTime }}</p>
                    </div>
                    <div class="flex justify-center gap-3">
                        <div v-for="author in authors" :key="author.author" class="mt-6 mb-8 mr-4 w-max lg:mb-0">
                            <NuxtLink :to="author.author_url" class="cursor-pointer">
                                <div class="flex items-center gap-3">
                                    <div v-if="author.author_image_url" class="w-10 h-10 relative">
                                        <img :src="author.author_image_url" alt="author avatar"
                                            class="rounded-full border border-default w-full" />
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-foreground mb-0 text-sm">{{ author.author }}</span>
                                        <span class="text-muted mb-0 text-xs">{{ author.position }}</span>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="prose prose-docs max-w-none">
                    <!-- Replace with MDX/Markdown renderer as needed -->
                    <slot />
                </div>
                <div class="py-16">
                    <div class="text-foreground-lighter text-sm">Share this article</div>
                    <div class="mt-4 flex items-center space-x-4">
                        <a :href="`https://twitter.com/share?text=${props.blog.title}&url=https://supabase.com/blog/${props.blog.slug}`"
                            target="_blank" class="text-muted hover:text-foreground">
                            <!-- Twitter SVG icon -->
                            <svg height="26" width="26" viewBox="-89 -46.8 644 446.8" fill="currentColor">
                                <path
                                    d="m154.729 400c185.669 0 287.205-153.876 287.205-287.312 0-4.37-.089-8.72-.286-13.052a205.304 205.304 0 0 0 50.352-52.29c-18.087 8.044-37.55 13.458-57.968 15.899 20.841-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 0 1 -64.098 24.511c-18.42-19.628-44.644-31.904-73.682-31.904-55.744 0-100.948 45.222-100.948 100.965 0 7.925.887 15.631 2.619 23.025-83.895-4.223-158.287-44.405-208.074-105.504a100.739 100.739 0 0 0 -13.668 50.754c0 35.034 17.82 65.961 44.92 84.055a100.172 100.172 0 0 1 -45.716-12.63c-.015.424-.015.837-.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.036 101.036 0 0 1 -26.617 3.553c-6.493 0-12.821-.639-18.971-1.82 12.851 40.122 50.115 69.319 94.296 70.135-34.549 27.089-78.07 43.224-125.371 43.224a204.9 204.9 0 0 1 -24.078-1.399c44.674 28.645 97.72 45.359 154.734 45.359"
                                    fill-rule="nonzero" />
                            </svg>
                        </a>
                        <a :href="`https://www.linkedin.com/shareArticle?url=https://supabase.com/blog/${props.blog.slug}&title=${props.blog.title}`"
                            target="_blank" class="text-muted hover:text-foreground">
                            <!-- LinkedIn SVG icon -->
                            <svg width="20" height="20" viewBox="0 5 1036 990" fill="currentColor">
                                <path
                                    d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="grid gap-8 py-8 lg:grid-cols-1">
                    <div>
                        <slot name="prevPost" />
                    </div>
                    <div>
                        <slot name="nextPost" />
                    </div>
                </div>
            </div>
        </article>
        <!-- <CTABanner /> -->
    </DefaultLayout>
</template>
