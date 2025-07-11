import { Timer } from 'lucide-react'
// import { CubeIcon } from '@heroicons/react/outline' // Disabled: missing module/type
import { Image } from 'ui'
import { AIData } from './solutions.types'

const data: AIData = {
  metadata: {
    metaTitle: 'Supabase for AI Builders',
    metaDescription:
      'Leading enterprises use Supabase to build faster, better, and more scalable products.',
  },
  heroSection: {
    id: 'hero',
    title: 'AI Builders',
    h1: 'Supabase for AI Builders',
    subheader: [
      'Supabase is the Postgres development platform that powers a new generation of developer tools. Give your users an integrated, scalable backend that lets them focus on building without worrying about infrastructure.'
    ],
    image: {
      dark: '/images/solutions/ai-builders/ai-builders-agent-dark.svg',
      light: '/images/solutions/ai-builders/ai-builders-agent-light.svg',
      alt: 'AI agent for ai builders',
      width: 1000,
      height: 1000
    },
    ctas: [
      {
        label: 'Start your project',
        href: 'https://supabase.com/dashboard',
        type: 'primary',
      },
      {
        label: 'Connect your app',
        href: 'https://supabase.com/docs/guides/integrations/build-a-supabase-integration',
        type: 'default',
      },
    ],
    logos: [
      {
        name: 'GitHub',
        image: '/images/enterprise/github.svg',
      },
      {
        name: 'PwC',
        image: '/images/enterprise/pwc.svg',
      },
    ],
  },
  quotes: {
    id: 'quotes',
    items: [
      {
        icon: '/images/logos/publicity/lovable.svg',
        avatar: '/images/avatars/anton-osika.jpg',
        author: 'Anton Osika',
        authorTitle: 'Lovable - CEO',
        quote: "We chose Supabase because it's extremely user friendly and covers all the needs to build full-stack applications.",
      },
      {
        icon: '/images/logos/publicity/bolt.svg',
        avatar: '/images/avatars/eric-simons.jpg',
        author: 'Eric Simmons',
        authorTitle: 'Bolt.new - CEO',
        quote: 'Supabase is awesome. Supabase is the key database integration that we have...because it’s the best product in the world for storing and retrieving data.',
      },
      {
        icon: '/images/logos/publicity/v0.svg',
        avatar: '/images/avatars/guillermo-rauch.jpg',
        author: 'Guillermo Rauch',
        authorTitle: 'Vercel (v0) - CEO',
        quote: 'v0 integrates with Supabase seamlessly. If you ask v0 to generate an application and it needs Supabase, you’ll be prompted to create a Supabase account right there in the application.',
      },
      {
        icon: '/images/logos/publicity/tempo.svg',
        avatar: '/images/avatars/kevin-michael.jpg',
        author: 'Kevin Michael',
        authorTitle: 'Tempo - CEO',
        quote: 'Supabase is the missing piece for building full-stack React apps and has been our go-to for a long time. We love Supabase and so do our customers.',
      },
    ],
  },
  why: {
    id: 'why-supabase',
    label: '',
    heading: 'Why AI Builders choose Supabase',
    features: [
      {
        id: 'get-to-market-faster',
        icon: 'timer',
        heading: 'Get to market faster',
        subheading:
          'Supabase is easy to use and set up. Use your existing Postgres knowledge and skills. Build with your favorite frameworks and tools.',
      },
      {
        id: 'the-tools-you-need-at-a-great-price',
        icon: null,
        heading: 'The tools you need at a great price',
        subheading:
          'Supabase offers a fully integrated suite of tools including authentication, storage, edge functions, real-time subscriptions, and vector search. Use one or all.',
      },
      {
        id: 'scalable-and-dependable',
        icon: 'custom-scalable',
        heading: 'Scalable and dependable',
        subheading:
          'Supabase is Postgres, with all the performance, high availability, and flexibility your users need to grow.',
      },
    ],
  },
  features: {
    id: 'features',
    heading: 'Supabase powers next generation tools',
    subheading:
      'Build a delightful application building experience backed seamlessly by a powerful application backend.',
    features: [
      {
        id: 'mgmt-api',
        icon: 'timer',
        heading: 'Management API',
        subheading: 'Enable your customers to scale their projects. Use the Management API to programmatically back every project with a powerful Supabase backend.',
        img: {
          dark: '/images/solutions/ai-builders/mgmt-api-permissions-dark.png',
          light: '/images/solutions/ai-builders/mgmt-api-permissions-light.png',
          alt: 'Management Api Permissions panel',
          width: 900,
          height: 900
        },
      },
      {
        id: 'postgres',
        icon: 'timer',
        heading: 'A complete platform, built on Postgres',
        subheading: 'Build on powerful platform that grows with your customers. Supabase offers the tools developers need to build powerful applications. Your customers will appreciate knowing they can start quickly with a prototype and scale to millions with ease.',
        img: {
          svg: true,
          description: 'Postgres platform illustration',
        },
      },
      {
        id: 'branching',
        icon: 'timer',
        heading: 'Branching',
        subheading: 'Offer production and development branches. Enable your customers to deploy and test changes without affecting their main production applications.',
      },
      {
        id: 'pricing',
        icon: 'timer',
        heading: 'Pricing',
        subheading: 'Pricing that’s designed for builders. Supabase offers pricing options for AI Builders that enable you to build substantial businesses that empower your users to go into production.',
      },
    ],
  },
  testimonials: {
    id: 'testimonials',
    label: '',
    heading: 'Powerful tools, powered by Supabase',
    videos: {
      lovable: {
        url: 'https://www.youtube.com/watch?v=9GQtXXERnqU',
      },
      bolt: {
        url: 'https://www.youtube.com/watch?v=LfAV5fmRybg',
      },
    },
  },
  'cta-section': {
    id: 'connect-to-supabase',
    label: '',
    heading: 'Connect your app to Supabase now',
    subheading:
      'Set up a Supabase OAuth app so your users can start interacting with their Supabase Project.',
    cta: {
      label: 'View docs',
      href: 'https://supabase.com/docs/guides/auth/auth-google',
      type: 'text',
    },
  },
}


export default data
