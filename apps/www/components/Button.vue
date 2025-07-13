<script setup lang="ts">
defineProps<{
  type?: 'primary' | 'secondary'
  text: string
  url?: string
  className?: string
  hideArrow?: boolean
}>()

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  text: {
    type: String,
    required: true,
  },
  url: String,
  className: String,
  hideArrow: {
    type: Boolean,
    default: false,
  },
})

const colorClass =
  props.type === 'primary'
    ? 'px-3 py-2 shadow-sm border border-transparent text-white bg-brand-400 hover:bg-brand-300 focus:ring-2 focus:ring-offset-2 focus:ring-brand-300'
    : 'text-brand-400 bg-none'

const textClass = props.type === 'primary' ? 'font-medium left-3 group-hover:left-0' : 'font-normal'
const arrowClass = props.type === 'primary' ? '' : 'relative -left-1 group-hover:left-0'

const buttonStyles = {
  textShadow: props.type === 'primary' ? '0px 0px 6px rgba(13, 128, 86, 0.8)' : 'none',
}
</script>

<template>
  <component :is="props.url ? 'a' : 'button'"
    :href="props.url"
    type="button"
    :class="[
      'group inline-flex items-center rounded-md text-sm leading-4 transition focus:outline-none',
      colorClass,
      props.className
    ]"
    :style="buttonStyles"
  >
    <span :class="['relative transition-all', props.url ? textClass : '']">
      {{ props.text }}
    </span>
    <span v-if="props.url && !props.hideArrow" :class="['ml-2 opacity-0 transition-all group-hover:opacity-100', arrowClass]">
      &rarr;
    </span>
  </component>
</template>
