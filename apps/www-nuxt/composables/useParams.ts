import { useRoute } from 'vue-router'
import { computed } from 'vue'

export function useParams() {
  const route = useRoute()
  return computed(() => {
    const params: Record<string, string | undefined> = {}
    for (const [key, value] of Object.entries(route.query)) {
      if (Array.isArray(value)) {
        params[key] = value[0]
      } else {
        params[key] = value as string | undefined
      }
    }
    return params
  })
}
