import { ArrowUpRight } from 'lucide-react'
import { IconDiscord, IconDiscussions, IconGitHubSolid } from 'ui'

const data = {
  meta_title: 'Help & Support | Supabase',
  meta_description:
    'Find help and support for Supabase. Our Support team provide answers on all types of issues, including account information, billing, and refunds.',
  hero: {
    h1: 'Support',
    title: 'Hello, how can we help?',
  },
  cards: [
    {
      title: 'Issues',
      paragraph: "Found a bug? We'd love to hear about it in our GitHub issues.",
      links: [
        {
          label: 'Open GitHub Issue',
          link: 'https://github.com/supabase/supabase/issues',
          target: '_blank',
          icon: "github",
          type: 'default',
        },
      ],
    },
    {
      title: 'Feature requests',
      paragraph: 'Want to suggest a new feature? Share it with us and the community.',
      links: [
        {
          label: 'Request feature',
          link: 'https://github.com/orgs/supabase/discussions/categories/feature-requests',
          target: '_blank',
          icon: "github",
          type: 'default',
        },
      ],
    },
    {
      title: 'Ask the Community',
      paragraph:
        'Join our GitHub discussions or our Discord server to browse for help and best practices.',
      links: [
        {
          label: 'Ask a question',
          link: 'https://github.com/supabase/supabase/discussions',
          target: '_blank',
          icon: "discussions",
          type: 'default',
        },
        {
          label: 'Join Discord',
          link: 'https://discord.supabase.com/',
          target: '_blank',
          icon: "discord",
          type: 'secondary',
        },
      ],
      className: 'col-span-full xl:col-span-1',
    },
  ],
  banner: {
    title: "Can't find what you're looking for?",
    paragraph: "The Supabase Support Team is ready to help. Response time for support tickets will vary depending on plan type and severity of the issue.",
    links: [
      {
        label: 'Contact Enterprise Sales',
        link: 'https://forms.supabase.com/enterprise',
        target: '_blank',
        type: 'default',
      },
      {
        label: 'Open Ticket',
        link: 'https://supabase.com/dashboard/support/new',
        target: '_blank',
        icon: "arrow-up-right",
        className: '!text-foreground-light hover:!text-foreground',
        type: 'text',
      },
    ],
  },
}

export default data
