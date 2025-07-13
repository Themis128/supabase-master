// Utility functions migrated from legacy React/Next.js helpers

export function generateReadingTime(text: string): string {
  const wordsPerMinute = 200
  const noOfWords = text.split(/\s/g).length
  const minutes = noOfWords / wordsPerMinute
  const readTime = Math.ceil(minutes)
  return `${readTime} minute read`
}

export function isNotNullOrUndefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

export function capitalize(word: string): string {
  return word[0].toUpperCase() + word.substring(1).toLowerCase()
}

export function toPixels(value: string | number): string {
  if (typeof value === 'number') {
    return `${value}px`
  }
  return value
}

export function stripEmojis(str: string): string {
  return str
    .replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ''
    )
    .replace(/\s+/g, ' ')
    .trim()
}
