<template>
    <Panel outerClassName="w-full" innerClassName="relative">
        <div class="relative z-10 flex flex-col gap-4 p-4 md:p-8 h-full">
            <div class="flex items-center gap-2">
                <h4 class="text-lg text-foreground">{{ title }}</h4>
                <Badge v-if="badge" class="border-strong !bg-alternative-200 text-foreground">{{ badge }}</Badge>
            </div>
            <div class="flex flex-col w-full xl:w-2/3 flex-grow mb-4 sm:mb-10 lg:mb-8 2xl:xl:mb-32">
                <ul class="flex flex-col text-foreground-lighter text-sm gap-1">
                    <li v-for="feature in features" :key="feature" class="flex items-start gap-2">
                        <span class="w-3 mt-0.5 flex items-center">
                            <Check class="stroke-2" />
                        </span>
                        <p>{{ feature }}</p>
                    </li>
                </ul>
            </div>
            <div class="flex items-center flex-wrap gap-1">
                <Button v-for="cta in ctas" :type="cta.type" asChild>
                    <NuxtLink :to="cta.href" :target="cta.target">
                        {{ cta.label }}
                    </NuxtLink>
                </Button>
            </div>
        </div>
        <div v-if="image"
            class="hidden sm:flex lg:hidden xl:flex absolute object-bottom inset-0 left-auto items-center h-full aspect-[296/275]">
            <Image :src="image" :alt="`database ${title}`" width="296" height="275" />
        </div>
    </Panel>
</template>

<script setup lang="ts">
import Panel from '~/components/Panel.vue'
import Badge from 'ui/Badge.vue'
import Button from 'ui/Button.vue'
import Image from 'ui/Image.vue'
import Check from 'lucide-vue-next/icons/Check'
import { NuxtLink } from '#components'

defineProps({
    title: String,
    features: Array,
    badge: String,
    ctas: Array,
    image: [String, Object]
})
</script>
