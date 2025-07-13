<template>
  <AlertShadcn v-bind="$attrs">
    <span v-if="icon" class="mr-4 text-2xl">{{ icon }}</span>
    <AlertTitleShadcn v-if="title">{{ title }}</AlertTitleShadcn>
    <AlertDescriptionShadcn>
      <slot />
    </AlertDescriptionShadcn>
  </AlertShadcn>
</template>

<script setup lang="ts">
// Import AlertShadcn, AlertTitleShadcn, AlertDescriptionShadcn from your UI library or create wrappers
const props = defineProps<{ icon?: string; title?: string }>()
</script>
