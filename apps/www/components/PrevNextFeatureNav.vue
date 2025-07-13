<template>
    <div :class="['h-full w-full max-w-2xl absolute mx-auto inset-0 pointer-events-none', wrapperClassName]"
        v-bind="$attrs">
        <div
            :class="['absolute top-9 w-fit pointer-events-auto flex items-center text-sm gap-1 text-foreground-light right-8 md:right-0', className]">
            <ButtonLink :to="prevLink" class="text-right pl-2">
                <ArrowLeft class="w-4 h-4 flex-shrink-0" />
                <span class="sr-only">Previous feature</span>
            </ButtonLink>
            <DropdownMenu v-model:open="open">
                <DropdownMenuTrigger
                    class="relative z-10 flex items-center gap-1 px-2 pointer-events-auto overflow-hidden !h-[30px] !min-w-[30px] !max-w-[30px] py-1 justify-center rounded-full border bg-default hover:bg-surface-100 hover:text-foreground hover:border-foreground-lighter transition-all p-0">
                    <List class="w-4 h-4 flex-shrink-0" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" :alignOffset="-38" class="pb-0">
                    <DropdownMenuItem asChild class="text-foreground-lighter p-0">
                        <NuxtLink to="/features"
                            class="group/link flex items-center gap-2 px-2 py-1.5 w-full hover:text-foreground">
                            <span class="truncate flex-grow">All Features</span>
                        </NuxtLink>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator class="mb-0" />
                    <DropdownMenuGroup class="max-h-[400px] overflow-y-scroll py-1">
                        <DropdownMenuItem v-for="feature in sortedFeatures" :key="feature.slug" asChild class="p-0">
                            <NuxtLink :to="`/features/${feature.slug}`"
                                class="group/link flex items-center gap-2 px-2 py-1.5 w-full hover:text-foreground">
                                <component :is="feature.icon"
                                    class="w-3 h-3 text-foreground-lighter group-hover:text-foreground transition-colors" />
                                <span class="line-clamp-1 flex-grow">{{ feature.title }}</span>
                            </NuxtLink>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <ButtonLink :to="nextLink">
                <span class="sr-only">Next feature</span>
                <ArrowRight class="w-4 h-4 flex-shrink-0" />
            </ButtonLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ArrowLeft from 'lucide-vue-next/icons/ArrowLeft'
import ArrowRight from 'lucide-vue-next/icons/ArrowRight'
import List from 'lucide-vue-next/icons/List'
import { useRouter } from 'vue-router'
import { features } from '~/data/features'
import ButtonLink from '~/components/ButtonLink.vue'
import DropdownMenu from 'ui/DropdownMenu.vue'
import DropdownMenuContent from 'ui/DropdownMenuContent.vue'
import DropdownMenuGroup from 'ui/DropdownMenuGroup.vue'
import DropdownMenuItem from 'ui/DropdownMenuItem.vue'
import DropdownMenuLabel from 'ui/DropdownMenuLabel.vue'
import DropdownMenuSeparator from 'ui/DropdownMenuSeparator.vue'
import DropdownMenuTrigger from 'ui/DropdownMenuTrigger.vue'
import { NuxtLink } from '#components'

defineProps({
    className: String,
    wrapperClassName: String,
    currentFeature: Object,
    prevLink: String,
    nextLink: String
})

const open = ref(false)
const sortedFeatures = computed(() =>
    [...features].sort((a, b) => a.title.localeCompare(b.title))
)
</script>
