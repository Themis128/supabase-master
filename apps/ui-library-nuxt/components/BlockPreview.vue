<template>
  <div :class="['mt-4 w-full', wide ? '2xl:-ml-12 2xl:-mr-12' : '']">
    <div :class="['relative border rounded-lg overflow-hidden bg-muted min-h-[150px] h-[600px]', isPair ? 'rounded-none' : '']">
      <div class="w-full h-full flex items-center justify-center">
        <div v-if="loading" class="flex items-center text-sm text-muted-foreground">Loading...</div>
        <iframe
          v-else
          :src="`${basePath}/example/${name}`"
          style="border: none; width: 100%; height: 100%; display: block;"
          name="preview-frame"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const props = defineProps<{ name: string; wide?: boolean; isPair?: boolean }>()
const wide = props.wide ?? false
const isPair = props.isPair ?? false
const basePath = '' // Set this to your base path if needed, or use runtime config
const loading = ref(false) // Placeholder for suspense-like loading
// You can implement loading logic if needed
</script>
