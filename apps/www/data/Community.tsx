import DeveloperSignups from 'data/DeveloperSignups'

type CommunityItem = {
  title: string
  stat: string
  statLabel: string
  img: string
  detail: any // some component to show when selected
  invertImgDarkMode?: boolean
}

const data: CommunityItem[] = [
  {
    title: 'Developers',
    stat: '1,700,000+',
    statLabel: 'Registered developers',
    img: 'supabase.png',
  detail: 'DeveloperSignupsGrid',
  },
  {
    title: 'GitHub',
    stat: '79,000+',
    statLabel: 'GitHub stars',
    img: 'github.png',
    invertImgDarkMode: true,
    detail: 'GrowthChart',
  },
  {
    title: 'Twitter',
    stat: '140,000+',
    statLabel: 'Followers',
    img: 'twitter.png',
    detail: 'TwitterCallouts',
  },
  {
    title: 'Discord',
    stat: '34,000+',
    statLabel: 'SupaTroopers',
    img: 'discord.png',
    detail: 'DiscordHighlight',
  },
]

export default data
