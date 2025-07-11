import solutions from '~/data/MainProducts'

// Remove all dynamic imports and use string keys instead. Components will be injected in the page/component file.

const pageData = {
  metaTitle: 'Supabase Edge Functions - Deploy JavaScript globally in seconds',
  metaDescription:
    'Execute your code closest to your users with fast deploy times and low latency.',
  heroSection: {
    title: solutions.functions.name,
    h1: 'Deploy JavaScript globally in seconds',
    subheader: [
      'Easily author, deploy and monitor serverless functions distributed globally at the edge, close to your users.',
    ],
    image: 'FunctionsHero',
    ctas: [
      {
        label: 'Create a free account',
        href: '/dashboard',
        type: 'primary',
      },
      {
        label: 'Read documentation',
        href: '/docs/guides/functions',
        type: 'default',
      },
    ],
  },
  highlightsSection: [
    {
      title: 'Fully Managed',
      paragraph: 'No infrastructure to manage, just deploy your code.',
      svg: 'FullyManaged',
    },
    {
      title: 'Global deployments',
      paragraph: 'Deploy worldwide for maximum resiliency and low latency',
      svg: 'Globe',
    },
    {
      title: 'Secure and Scalable',
      paragraph: 'Simply write your code in TypeScript and deploy',
      svg: 'SecureScalable',
    },
    {
      title: 'Node.js Support',
      paragraph: 'Easily migrate existing workloads, with support for Node and more than 1 million NPM modules',
      svg: 'NodeSupport',
    },
  ],
  cardsSection: {
    cards: [
      {
        id: 'localDX',
        label: 'First-class local dev experience',
        paragraph: 'Write code with hot code reloading, a fast Language server for autocompletion, type checking and linting',
        className: '',
        image: 'LocalDXImage',
      },
      {
        id: 'parity',
        label: 'Dev and Prod parity',
        paragraph: 'The open source Edge runtime (see:github.com/supabase/edge-runtime) runs your functions locally during development and the same runtime powers functions in production.',
        className: '',
        image: 'ParityImage',
      },
      {
        id: 'ecosystem',
        label: 'Use any NPM module',
        paragraph: 'Tap into the 2+ million modules in the Deno and NPM ecosystem',
        className: '',
        image: 'NpmEcosystem',
      },
      {
        id: 'ci',
        label: 'Continuous Integration',
        paragraph: 'Use the Supabase CLI with Github actions (see:/docs/guides/functions/cicd-workflow) to preview and deploy your functions along with the rest of your application.',
        className: '',
        image: 'CI',
      },
    ],
  },
  globalPresenceSection: {
    title: 'Edge Functions run server-side logic geographically close to users, offering low latency and great performance.',
    features: [
      {
        label: 'Global presence',
        paragraph: "Edge functions run globally or can be pinned to your database's proximity (see:/docs/guides/functions/regional-invocation)",
      },
      {
        label: 'Automatic scaling',
        paragraph: 'Seamlessly scale with usage without any manual tuning',
      },
      {
        label: 'Secure',
        paragraph: 'Scale with confidence with SSL, Firewall and DDOS protection built in',
      },
    ],
  },
  o11y: {
    title: 'Built-in observability',
    panels: [
      {
        id: 'realtime-logs',
        label: 'Realtime logs',
        icon: '',
        paragraph: 'Stream logs to the dashboard in realtime. Logs are populated with rich metadata to help debugging',
        image: 'RealtimeLogs',
      },
      {
        id: 'log-explorer',
        label: 'Query Logs via Log explorer',
        icon: '',
        paragraph: 'Get deeper insights into how your functions are behaving by writing SQL queries on function logs',
        image: 'QueryLogs',
      },
      {
        id: 'metrics',
        label: 'Metrics',
        icon: '',
        paragraph: 'Dashboards show the health of your functions at all times',
        image: 'Metrics',
      },
    ],
  },
  integratesWithSupabase: {
    title: 'Integrates seamlessly with the Supabase ecosystem',
    useCases: [
      {
        label: 'Zero configuration',
        paragraph: 'Pre-populated environment variables required to access your supabase project',
        panel: 'ZeroConfigPanel',
      },
      {
        label: 'Connect to your database',
        paragraph: 'Connect to your Postgres database from an Edge Function by using the supabase-js client',
        panel: 'ConnectToDBPanel',
      },
      {
        label: 'Trigger via webhook',
        paragraph: 'Database Webhooks allow you to send real-time data from your database to another system whenever a table event occurs',
        panel: 'TriggerViaWebhookPanel',
      },
      {
        label: 'Works with Supabase Auth',
        paragraph: 'Edge Functions are designed to work seamlessly with Supabase Auth (see:/docs/guides/functions/auth)',
        panel: 'WorksWithAuthPanel',
      },
      {
        label: 'Works with Supabase Storage',
        paragraph: 'Edge Functions are designed to work seamlessly with Supabase Storage (see:/docs/guides/functions/storage-caching)',
        panel: 'WorksWithStoragePanel',
      },
    ],
  },
};

export default pageData;
