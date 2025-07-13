<script setup lang="ts">
import { ref, watch } from 'vue'
defineProps<{
    visible: boolean
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
    className?: string
    onCancel?: () => void
}>()
const props = defineProps({
    visible: Boolean,
    size: { type: String, default: 'large' },
    className: String,
    onCancel: Function,
})
const open = ref(props.visible)
watch(() => props.visible, (val) => { open.value = val })
function handleOpenChange(val: boolean) {
    if (props.visible !== undefined && !val && props.onCancel) props.onCancel()
    else open.value = val
}
</script>
<template>
    <div v-if="open" :class="['fixed inset-0 z-50 flex items-center justify-center', props.className]">
        <div class="fixed inset-0 bg-black bg-opacity-50" @click="handleOpenChange(false)" />
        <div :class="['relative bg-white rounded shadow-lg', `modal-size-${props.size}`]">
            <slot />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
defineProps<{
    visible: boolean
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
    className?: string
    onCancel?: () => void
}>()
const props = defineProps({
    visible: Boolean,
    size: { type: String, default: 'large' },
    className: String,
    onCancel: Function,
})
const open = ref(props.visible)
watch(() => props.visible, (val) => { open.value = val })
function handleOpenChange(val: boolean) {
    if (props.visible !== undefined && !val && props.onCancel) props.onCancel()
    else open.value = val
}
</script>
<template>
    <div v-if="open" :class="['fixed inset-0 z-50 flex items-center justify-center', props.className]">
        <div class="fixed inset-0 bg-black bg-opacity-50" @click="handleOpenChange(false)" />
        <div :class="['relative bg-white rounded shadow-lg', `modal-size-${props.size}`]">
            <slot />
        </div>
    </div>
</template>
