<script setup lang="ts">
// TODO: This is a placeholder. The original uses framer-motion and advanced React hooks.
// You will need to port the animation logic to Vue (e.g., with Motion One or VueUse/motion).
// The products data structure should be imported or defined as needed.
defineProps<{ currentProduct: string }>()
const products = [
    // Fill with your product data as needed
    { shortname: 'database', name: 'Database', icon: '', url: '/database' },
    { shortname: 'authentication', name: 'Authentication', icon: '', url: '/auth' },
    { shortname: 'storage', name: 'Storage', icon: '', url: '/storage' },
    { shortname: 'edge-functions', name: 'Edge Functions', icon: '', url: '/edge-functions' },
    { shortname: 'realtime', name: 'Realtime', icon: '', url: '/realtime' },
    { shortname: 'vector', name: 'Vector', icon: '', url: '/vector' },
]
</script>
<template>
    <div
        class="relative mx-auto w-full max-w-md grid grid-cols-3 md:flex items-center justify-center gap-y-8 md:gap-2 px-4">
        <div v-for="product in products" :key="product.shortname"
            class="relative mx-auto md:w-[150px] bg-transparent group">
            <NuxtLink :to="product.url" class="flex w-full flex-col items-center text-center group">
                <div
                    class="relative w-[30px] !min-w-[30px] md:!min-w-[50px] aspect-square bg-background rounded-xl border p-3 text-foreground-lighter group-hover:text-foreground">
                    <!-- TODO: Render SVG icon for product.icon -->
                </div>
                <div
                    class="text-foreground flex justify-center relative opacity-70 md:absolute md:bottom-0 md:opacity-0 group-hover:opacity-100 transition-opacity md:translate-y-8 md:-left-20 md:md:-right-20 font-mono uppercase text-center text-xs mt-2">
                    {{ product.name }}
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
// TODO: This is a placeholder. The original uses framer-motion and advanced React hooks.
// You will need to port the animation logic to Vue (e.g., with Motion One or VueUse/motion).
// The products data structure should be imported or defined as needed.
defineProps<{ currentProduct: string }>()
const products = [
    // Fill with your product data as needed
    { shortname: 'database', name: 'Database', icon: '', url: '/database' },
    { shortname: 'authentication', name: 'Authentication', icon: '', url: '/auth' },
    { shortname: 'storage', name: 'Storage', icon: '', url: '/storage' },
    { shortname: 'edge-functions', name: 'Edge Functions', icon: '', url: '/edge-functions' },
    { shortname: 'realtime', name: 'Realtime', icon: '', url: '/realtime' },
    { shortname: 'vector', name: 'Vector', icon: '', url: '/vector' },
]
</script>
<template>
    <div
        class="relative mx-auto w-full max-w-md grid grid-cols-3 md:flex items-center justify-center gap-y-8 md:gap-2 px-4">
        <div v-for="product in products" :key="product.shortname"
            class="relative mx-auto md:w-[150px] bg-transparent group">
            <NuxtLink :to="product.url" class="flex w-full flex-col items-center text-center group">
                <div
                    class="relative w-[30px] !min-w-[30px] md:!min-w-[50px] aspect-square bg-background rounded-xl border p-3 text-foreground-lighter group-hover:text-foreground">
                    <!-- TODO: Render SVG icon for product.icon -->
                </div>
                <div
                    class="text-foreground flex justify-center relative opacity-70 md:absolute md:bottom-0 md:opacity-0 group-hover:opacity-100 transition-opacity md:translate-y-8 md:-left-20 md:md:-right-20 font-mono uppercase text-center text-xs mt-2">
                    {{ product.name }}
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
