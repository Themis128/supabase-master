// Vue composable version for reference only
import { useRoute } from 'vue-router'

export function useDarkLaunchWeeks() {
  const route = useRoute()
  const path = route.path
  return (
    path.startsWith('/launch-week/7') ||
    path.startsWith('/launch-week/8') ||
    path.startsWith('/launch-week/x')
  )
}
