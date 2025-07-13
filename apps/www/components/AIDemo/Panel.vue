<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
defineProps({
    incomingMessages: {
        type: Array,
        default: () => []
    }
})
</script>
<template>
    <div
        :class="[$style['border-gradient'], 'w-full shadow-2xl relative h-full bg-surface-75 border border-text-light/25 rounded-md overflow-hidden']">
        <div class="absolute inset-0 flex flex-col">
            <div class="z-30 border-b border-b-muted flex items-center gap-x-3 px-5 h-[46px]">
                <!-- AiIconAnimation loading={false} allowHoverEffect -->
                <div class="text-sm flex-1">Assistant</div>
            </div>
            <div class="flex-1 overflow-y-auto p-5 flex flex-col">
                <!-- Messages would be rendered here -->
            </div>
            <div class="p-5 pt-0 relative z-10">
                <form>
                    <input type="text" placeholder="Ask your data anything..."
                        class="w-full bg-background-muted rounded-md" />
                </form>
            </div>
        </div>
    </div>
</template>
<style module src="./assistant.module.css"></style>
