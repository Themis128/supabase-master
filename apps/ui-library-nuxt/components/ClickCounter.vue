<template>
  <button
    @click="count++"
    class="whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
  >
    {{ count }} Clicks
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
