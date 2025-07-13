<script setup lang="ts">
import Button from './Button.vue'

defineProps<{
  title: string
  type: 'Project Example' | 'Case Study' | 'Blog Post'
  description: string
  imgUrl: string
  url: string
  logoUrl?: string
  ctaText?: string
  icons?: any[]
  postMeta?: {
    name: string
    avatarUrl: string
    publishDate: string
    readLength: number | string
  }
}>()

const props = defineProps({
  title: String,
  type: {
    type: String,
    required: true,
  },
  description: String,
  imgUrl: String,
  url: String,
  logoUrl: String,
  ctaText: String,
  icons: Array,
  postMeta: Object,
})
</script>

<template>
  <a
    :href="props.url"
    target="_blank"
    class="relative flex transform flex-col overflow-hidden rounded-md shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
  >
    <div class="flex-shrink-0">
      <img class="h-64 w-full text-foreground-light object-cover" :src="props.imgUrl" :alt="props.title" />
    </div>
    <div class="bg-surface-100 flex flex-1 flex-col justify-between p-8">
      <div class="flex-1">
        <!--
        <div v-if="props.icons && props.icons.length" class="-mt-12 mb-6 flex -space-x-3">
          <img
            v-for="icon in props.icons"
            :key="icon.imgAlt"
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            :src="icon.imgUrl"
            :alt="icon.imgAlt"
          />
        </div>
        -->
        <p class="font-base text-foreground-lighter text-sm capitalize">{{ props.type }}</p>
        <div class="mt-2 flex h-32 flex-col justify-between">
          <!-- <img v-if="props.logoUrl" :src="props.logoUrl" class="h-9 my-4" /> -->
          <p v-if="props.title" class="text-xl text-foreground">{{ props.title }}</p>
          <p class="text-foreground-lighter mt-3 text-base">
            {{ props.type !== 'Project Example' && props.postMeta ? props.postMeta.publishDate : props.description }}
          </p>
        </div>
      </div>
      <div v-if="props.type === 'Case Study' && props.postMeta && props.postMeta.name.length > 0" class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <span class="sr-only">{{ props.postMeta.name }}</span>
          <img class="h-10 w-10 rounded-full" :src="props.postMeta.avatarUrl" alt="" />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-foreground">{{ props.postMeta.name }}</p>
          <div class="text-foreground-lighter flex space-x-1 text-sm">
            <time :datetime="props.postMeta.publishDate">{{ props.postMeta.publishDate }}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{{ props.postMeta.readLength }} min read</span>
          </div>
        </div>
      </div>
      <Button v-if="props.ctaText" class="mt-5" type="secondary" :text="props.ctaText" :url="props.url" />
    </div>
  </a>
</template>
