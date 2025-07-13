<template>
    <component :is="as" v-bind="attrs" :class="computedClass">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

defaultProps = {
    as: 'div',
    class: ''
}

const props = defineProps({
    as: {
        type: String,
        default: defaultProps.as
    },
    class: {
        type: String,
        default: defaultProps.class
    }
})

const attrs = useAttrs()
const computedClass = computed(() => props.class)
</script>
