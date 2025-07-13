// Simple composable for reading time in Nuxt 3
import { computed } from 'vue'

export function useReadingTime(text: string) {
  return computed(() => {
    const wordsPerMinute = 200
    const noOfWords = text.split(/\s/g).length
    const minutes = noOfWords / wordsPerMinute
    const readTime = Math.ceil(minutes)
    return `${readTime} minute read`
  })
}
