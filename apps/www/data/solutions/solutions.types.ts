import { LucideIcon } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

export type HeroIcon = ComponentType<SVGProps<SVGSVGElement>>
export type IconType = LucideIcon | HeroIcon

interface Metadata {
  metaTitle: string
  metaDescription: string
}

export interface HeroSection {
  id: string
  title: string
  h1: string
  subheader: string[]
  image: {
    dark: string
    light: string
    alt: string
    width: number
    height: number
  }
  className?: string
  sectionContainerClassName?: string
  icon?: string
  ctas: {
    label: string
    href: string
    type: 'primary' | 'default'
  }[]
  logos: {
    name: string
    image: string
  }[]
  footer?: string
  footerPosition?: 'left' | 'right'
}

export interface Quote {
  icon?: string
  author: string
  authorTitle?: string
  quote: string
  avatar: string
}

export interface Quotes {
  id: string
  items: Quote[]
}

export interface Highlight {
  icon?: IconType
  heading: string | JSX.Element
  subheading: string | JSX.Element
  url?: string
}

export interface Feature {
  id?: string
  icon?: IconType | string
  iconNoStroke?: boolean
  heading: string
  subheading: string
  img?: {
    dark?: string
    light?: string
    alt?: string
    width?: number
    height?: number
    svg?: boolean
    description?: string
  }
}

export interface FeaturesSection {
  id: string
  label?: string
  heading: JSX.Element
  subheading?: string
  features: Feature[]
  // {
  //   [key: string]: Feature
  // }
}

export interface Testimonials {
  id: string
  label: string
  heading: JSX.Element
  videos: {
    [key: string]: {
      url: string
    }
  }
}

interface CTASection {
  id: string
  label: string
  heading: string
  subheading: string
  cta: {
    label: string
    href: string
    type: string
  }
}

export interface AIData {
  metadata: Metadata
  heroSection: HeroSection
  quotes: Quotes
  why: FeaturesSection
  features: FeaturesSection
  testimonials: Testimonials
  'cta-section': CTASection
}
