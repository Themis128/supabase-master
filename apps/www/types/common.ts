import type { ButtonProps } from 'ui'
type ButtonType = NonNullable<ButtonProps['type']>

export interface CTA {
  label: string
  href: string
  type?: ButtonType
  target?: HTMLAnchorElement['target']
}
