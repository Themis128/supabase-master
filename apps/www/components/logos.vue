<script setup lang="ts">
import { computed } from 'vue'
// import { range } from 'lodash-es' // If needed

defineProps<{
    showHeading?: boolean
    className?: string
    align?: 'left' | 'center'
}>()
const props = defineProps({
    showHeading: { type: Boolean, default: true },
    className: String,
    align: { type: String, default: 'center' },
})
const gap = 'gap-4 lg:gap-8'
const logos = [
    { image: '/images/logos/publicity/mozilla.svg', alt: 'mozilla', name: 'mozilla' },
    { image: '/images/logos/publicity/github.svg', alt: 'github', name: 'github' },
    { image: '/images/logos/publicity/1password.svg', alt: '1password', name: '1password' },
    { image: '/images/logos/publicity/pwc.svg', alt: 'pwc', name: 'pwc' },
    { image: '/images/logos/publicity/pika.svg', alt: 'pika', name: 'pika' },
    { image: '/images/logos/publicity/humata.svg', alt: 'humata', name: 'humata' },
    { image: '/images/logos/publicity/udio.svg', alt: 'udio', name: 'udio' },
    { image: '/images/logos/publicity/langchain.svg', alt: 'langchain', name: 'langchain' },
    { image: '/images/logos/publicity/resend.svg', alt: 'resend', name: 'resend' },
    { image: '/images/logos/publicity/loops.svg', alt: 'loops', name: 'loops' },
    { image: '/images/logos/publicity/mobbin.svg', alt: 'mobbin', name: 'mobbin' },
    { image: '/images/logos/publicity/gopuff.svg', alt: 'gopuff', name: 'gopuff' },
    { image: '/images/logos/publicity/chatbase.svg', alt: 'chatbase', name: 'chatbase' },
    { image: '/images/logos/publicity/betashares.svg', alt: 'betashares', name: 'betashares' },
    { image: '/images/logos/publicity/submagic.svg', alt: 'submagic', name: 'submagic' },
]
const logosRow = computed(() => Array(4).fill(0))
</script>
<template>
    <div :class="['pb-14 md:pb-24', props.className]">
        <div class="max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
            <div :class="[
                'relative w-full mx-auto max-w-4xl opacity-90 dark:opacity-70',
                'overflow-hidden',
                'flex flex-nowrap justify-center',
                'px-5 lg:px-12',
                props.align === 'left' ? 'justify-start ml-0' : 'justify-center',
                gap
            ]">
                <template v-for="(_, i) in logosRow" :key="i">
                    <div :class="[gap, 'flex flex-nowrap w-fit']">
                        <template v-for="logo in logos" :key="logo.name">
                            <div :class="'h-12 lg:h-12 w-max !inline-block'">
                                <img :src="logo.image" :alt="logo.alt"
                                    class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                            </div>
                        </template>
                    </div>
                </template>
            </div>
        </div>
        <p v-if="props.showHeading" class="w-full text-center text-sm text-foreground-lighter mt-6 lg:mt-8">
            Trusted by fast-growing companies worldwide
        </p>
    </div>
</template>
