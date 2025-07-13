import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

// Helper to strip emojis and dashes (implement as needed)
function stripEmojis(str: string): string {
  // Simple emoji strip (expand as needed)
  return str.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').replace(/-/g, '')
}

export function useActiveAnchors(
  anchorsQuerySelector: string = 'h2',
  tocQuerySelector: string = '.prose-toc a',
  offset: number = 200
) {
  const route = useRoute()
  const anchors = ref<NodeListOf<HTMLHeadingElement> | null>(null)
  const toc = ref<NodeListOf<HTMLAnchorElement> | null>(null)

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset
    let newActiveAnchor = ''
    anchors.value?.forEach((anchor) => {
      if (pageYOffset >= anchor.offsetTop - offset) {
        newActiveAnchor = anchor.id
      }
    })
    toc.value?.forEach((link) => {
      link.classList.remove('toc-animate')
      const sanitizedHref = stripEmojis(decodeURI(link.getAttribute('href') ?? '').replace('#', ''))
      const isMatch = sanitizedHref === newActiveAnchor.replace(/-/g, '')
      if (isMatch) {
        link.classList.add('toc-animate')
      }
    })
  }

  onMounted(() => {
    anchors.value = document.querySelectorAll(anchorsQuerySelector)
    toc.value = document.querySelectorAll(tocQuerySelector)
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
