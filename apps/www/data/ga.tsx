// import { KeyIcon, RewindIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/outline' // Disabled: missing module/type
import { Activity } from 'lucide-react'
import { IconDiscord, IconGitHubSolid, IconTwitterX, IconYoutubeSolid } from 'ui'

export const data = (isDark: boolean) => ({
  hero: {
    title: "We are moving to General Availability",
    publishedAt: '15 April 2024',
    // publishedAt: null,
    sections: [
      { title: 'General Availability', link: '#ga' },
      { title: 'Open Source & Community', link: '#open-source' },
      { title: 'Scale to millions', link: '#scale' },
      { title: 'Enterprise', link: '#enterprise' },
      { title: 'Our partners', link: '#partners' },
      { title: "What's new", link: '#whats-new' },
      { title: "What's next", link: '#whats-next' },
    ],
  },
  highlightsSection: {
    highlights: [
      {
        number: '1,000,000+',
        text: 'databases managed',
      },
      {
        number: '2,500+',
        text: 'databases launched daily',
      },
      {
        number: 'Top 125 GitHub Ranking',
        text: 'GitHub repo star rating',
      },
    ],
  },
  companySection: {
    id: 'ga',
    title: 'General Availability',
    paragraph: '01',
    content: `
During the first year of Supabase we set ourselves a goal: build a managed platform capable of securely running 1 million databases. Today we've proven that metric and we're announcing the General Availability of the platform that will serve the next 99 million.

![top user growth over time by days after launch](/images/ga/database-growth--dark.svg?v=2)

We've been production-ready for years now. We kept the “beta” label because we wanted to make sure that our *organization* can support all types of customers, no matter their demands.

Today we're confident in our ability to take any profile of customer and help them become successful. We have a crew of amazing Postgres engineers and support staff who work tirelessly to educate customers with Postgres technicalities, improving our product simultaneously.

Whether you're an indie hacker or a Fortune 500, Supabase can scale comfortably for your production workload. Rocketships like [Udio](https://www.udio.com/), [Krea](https://www.krea.ai), [Humata](https://www.humata.ai/), and [Pika](https://pika.art) use Supabase to build fast and scale faster. Enterprise customers such as Mozilla, PwC, Johnson & Johnson, and 1Password use Supabase to manage their applications securely. 36% of the last Y Combinator batch used Supabase to launch their start up.

> *Supabase has been great to develop applications. As a firm focused on security, we've been happy to work with Row Level Security Policies to secure database operations.*
-  Matthieu, Tech Lead. PwC France

`,
  },
  openSourceSection: {
    id: 'open-source',
    title: 'Open Source & Community',
    paragraph: '02',
    content: `
Our community is the driving force behind the development and adoption of Supabase.

![top user growth over time by days after launch](/images/ga/github-start-growth--dark.svg?v=1)

The GitHub community is the foundation of our company: submitting feature requests, discovering bugs, creating PRs, and pushing our team to develop a useful product.

We're committed to our licenses - all of our public repos have OSI-compliant licenses. We have no plans to change this.

Self-hosting is easier than ever. You can get started in [less than 5 minutes](https://www.youtube.com/watch?v=FqiQKRKsfZE) on a hosted VPS.

We're committed to our Free Plan - we know the importance of this for testing hobby projects and prototyping. Almost all of the largest databases on Supabase today started on the Free Plan, a clear indication that our Free Plan is important for building an enduring platform.
`,
  },
  communityStats: {
    highlights: [
      {
        number: '65,000',
        text: 'GitHub stars',
        url: 'https://github.com/supabase',
        icon: "github",
      },
      {
        number: '106,000',
        text: 'Twitter followers',
        url: 'https://twitter.com/supabase',
        icon: "twitter-x",
      },
      {
        number: '25,000',
        text: 'Discord members',
        url: 'https://discord.com/invite/R7bSpeBSJE',
        icon: "discord",
      },
      {
        number: '23,000',
        text: 'YouTube subscribers',
        url: 'https://www.youtube.com/c/supabase',
        icon: "youtube",
      },
      {
        number: '10,000',
        text: 'Reddit subs',
        url: 'https://www.reddit.com/r/Supabase/',
        icon: "reddit",
      },
    ],
  },
  scaleSection: {
    id: 'scale',
    title: 'Build in a weekend, scale to millions',
    paragraph: '03',
    content: `
Our tagline is “Build in a weekend, scale to millions”. This isn't hyperbole. In the past, reaching 1 million users was an incredible challenge. It took Instagram 2.5 months, Facebook 10 months, and Twitter 24 months.

In the past year, we've had 12 companies start on Supabase and grow from zero to over 1 million users.

![top user growth over time by days after launch](/images/ga/project-user-growth--dark.svg?v=3)

Most of these were AI companies, like Udio, Krea, Humata, Chatbase, Pika, Quivr, Mendable, Markprompt and [MDN search](https://developer.mozilla.org/en-US/blog/introducing-ai-help/) by Mozilla.

Postgres has been instrumental in our scalability and adoption. It's versatility is best demonstrated by pgvector: we were the first cloud provider to offer it, and today 15% of all new Supabase projects use pgvector for AI and ML workloads. Look out for a few related announcements this week.
`,
  },
  enterpriseSection: {
    id: 'enterprise',
    title: 'Enterprise',
    paragraph: '04',
    content: `
Supabase can now scale comfortably to any workload. Companies such as 1Password, PwC, and Johnson & Johnson use Supabase to build Postgres-backed applications.

We've spent years working with larger organizations to meet their requirements for running Supabase in production. This includes enhanced security tooling, industry best-practices (SOC2 and HIPAA), round the clock support, and SLAs.

This week we've added support for Supabase in the AWS Marketplace. Enterprise customers can now purchase Supabase as part of their committed AWS spend.

We'll continue to expand the Supabase Enterprise offering to include more deployment options, including "Bring your own cloud". If you're interested in using Supabase in your organization, get in touch via the [Supabase for Enterprise form](https://forms.supabase.com/enterprise).
`,
    companies: [
      {
        name: '1Password',
        image: isDark
          ? '/images/ga/enterprise/1-password--dark.svg'
          : '/images/ga/enterprise/1-password--light.svg',
      },
      {
        name: 'johnson-and-johnson',
        image: isDark
          ? '/images/ga/enterprise/johnson-and-johnson--dark.svg'
          : '/images/ga/enterprise/johnson-and-johnson--light.svg',
      },
      {
        name: 'pwc',
        image: isDark
          ? '/images/ga/enterprise/pwc--dark.svg'
          : '/images/ga/enterprise/pwc--light.svg',
      },
      {
        name: 'mozilla',
        image: isDark
          ? '/images/ga/enterprise/mozilla--dark.png'
          : '/images/ga/enterprise/mozilla--light.png',
      },
    ],
    highlights: [
      {
        text: 'SOC 2',
        icon: null, // Removed: ShieldCheckIcon (missing icon)
      },
      {
        text: 'HIPAA',
        icon: "activity",
      },
      {
        text: 'Data Encryption',
        icon: null, // Removed: KeyIcon (missing icon)
      },
      {
        text: 'Role-based access control',
        icon: null, // Removed: UserGroupIcon (missing icon)
      },
      {
        text: 'Backups',
        icon: null, // Removed: RewindIcon (missing icon)
      },
      {
        text: 'DDoS Protection',
        icon: null, // Removed: ShieldCheckIcon (missing icon)
      },
    ],
  },
  integrationsSection: {
    id: 'partners',
    title: 'Our partners',
    paragraph: '05',
    content: `
The Supabase community doesn't exist in isolation. It's part of a group of developer focused companies and communities who are constantly pushing the boundaries of developer experience and developer productivity.

We've [teamed up with Fly](/blog/postgres-on-fly-by-supabase) to bring Postgres to developers across the world. (More on this later this week).

Vercel users can use the [Supabase integration](https://vercel.com/integrations/supabase) to connect Supabase to their Next.js projects, and we have deep integrations with [Flutterflow](https://docs.flutterflow.io/data-and-backend/supabase), [Resend](https://resend.com/blog/how-to-configure-supabase-to-send-emails-from-your-domain), and [Twilio](https://www.twilio.com/en-us/blog/send-sms-notifications-supabase-users-node-js-twilio-messaging).

Cloudflare recently announced the Supabase integration for [Workers](https://developers.cloudflare.com/workers/databases/native-integrations/supabase/) and [Hyperdrive](https://developers.cloudflare.com/hyperdrive/examples/supabase/).

Developers have different preferences on how to connect to their database, and Supabase is ["just Postgres"](https://itsjustpostgres.com/) you can connect natively with [Prisma](https://www.prisma.io/docs/orm/overview/databases/supabase), [Drizzle](https://orm.drizzle.team/docs/get-started-postgresql#supabase), or [Kysely](https://github.com/kysely-org/kysely-supabase).

You can find the [full list of partners and integrations](https://supabase.com/partners/integrations) on our Partners page. If you're interested in partnering with Supabase head over to the [Partner Portal](https://supabase.com/partners).
`,
    partners: [
      {
        name: 'fly',
        image: isDark ? '/images/ga/partners/fly--dark.svg' : '/images/ga/partners/fly--light.svg',
      },
      {
        name: 'cloudflare',
        image: isDark
          ? '/images/ga/partners/cloudflare--dark.svg'
          : '/images/ga/partners/cloudflare--light.svg',
      },
      {
        name: 'flutterflow',
        image: isDark
          ? '/images/ga/partners/flutterflow--dark.svg'
          : '/images/ga/partners/flutterflow--light.svg',
      },
      {
        name: 'resend',
        image: isDark
          ? '/images/ga/partners/resend--dark.svg'
          : '/images/ga/partners/resend--light.svg',
      },
      {
        name: 'twilio',
        image: isDark
          ? '/images/ga/partners/twilio--dark.svg'
          : '/images/ga/partners/twilio--light.svg',
      },
      {
        name: 'vercel',
        image: isDark
          ? '/images/ga/partners/vercel--dark.svg'
          : '/images/ga/partners/vercel--light.svg',
      },
    ],
  },
  'whats-new': {
    id: 'whats-new',
    title: "What's new?",
    paragraph: '06',
    content: `
In addition to General Availability, we also have several other major announcements to make today.

- The Supabase [Index Advisor](https://github.com/supabase/index_advisor) is now available inside Supabase Studio. As its name suggests, this will analyze your database and make recommendations to add or remove table indexes. This is just the beginning of our plan to make automated data analysis tooling available to all developers.

- [Supabase Branching](https://supabase.com/blog/branching-publicly-available) works like Git branches. You can create and test database changes or try out features in a separate, temporary instance without affecting your production setup. Today Branching enters public availability.

- Supabase has [acquired Oriole](https://supabase.com/blog/supabase-acquires-oriole). Oriole is a company founded by Postgres Hacker Alexander Korotkov to solve the hairy problems of Postgres.

- We're constantly on the lookout for ways to remove the friction in getting started with your new projects. [Supabase Bootstrap](https://supabase.com/blog/supabase-bootstrap) is now the easiest way to get started with Supabase and your favorite development framework.

- Today Supabase Swift SDK will join supabase-js as an [officially supported client library](https://supabase.com/blog/supabase-swift), and supabase-swift maintainer Guilherme Souza will join the Supabase team full time. The goal of Supabase is to become the default backend for all kinds of developers.

`,
  },
  'whats-next': {
    id: 'whats-next',
    title: "What's next?",
    paragraph: '07',
    content: `
One of our key metrics at Supabase is "Time to Value". How fast can a user go from idea to production? We'll never stop pushing on what's possible here.

It is only the first day of Supabase GA Week. Today's releases are just the start: we have 4 more days of exciting announcements to come. [Follow the new announcements here](https://supabase.com/ga-week).

If you want to try Supabase today, we just started an asynchronous hackathon. It's a great way to try out all the new features. Go here to [read the rules and start hacking](https://supabase.com/blog/supabase-oss-hackathon).

Together with the developer community we're looking forward to deploying our next 100 million databases.
`,
  },
})
