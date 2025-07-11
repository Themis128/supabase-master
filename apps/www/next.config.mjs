import bundleAnalyzer from '@next/bundle-analyzer'
import nextMdx from '@next/mdx'

import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import redirects from './lib/redirects.js'
import remotePatterns from './lib/remotePatterns.js'
// REPLACE rewritesConfig import with inline dynamic version
// import rewritesConfig from './lib/rewrites.js'

import { remarkCodeHike } from '@code-hike/mdx'
import codeHikeTheme from 'config/code-hike.theme.json' with { type: 'json' }

import { withContentlayer } from 'next-contentlayer2'

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: codeHikeTheme,
          lineNumbers: true,
          showCopyButton: true,
        },
      ],
      remarkGfm,
    ],
    rehypePlugins: [rehypeSlug],
    providerImportSource: '@mdx-js/react',
  },
})

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const baseConfig = {
  basePath: '',
  assetPrefix: getAssetPrefix(),
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  trailingSlash: false,
  transpilePackages: [
    'ui',
    'ui-patterns',
    'common',
    'shared-data',
    'icons',
    'api-types',
    '@octokit/plugin-paginate-graphql',
  ],
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'all' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
      {
        source: '/.well-known/vercel/flags',
        headers: [{ key: 'content-type', value: 'application/json' }],
      },
      {
        source: '/favicon/:slug*',
        headers: [{ key: 'cache-control', value: 'public, max-age=86400' }],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value:
              process.env.NEXT_PUBLIC_IS_PLATFORM === 'true' &&
              process.env.VERCEL === '1'
                ? 'max-age=31536000; includeSubDomains; preload'
                : '',
          },
        ],
      },
    ]
  },
  async rewrites() {
    const uiUrl = process.env.UI_URL || 'http://192.168.0.23:3001'
    return [
      {
        source: '/ui',
        destination: uiUrl,
      },
      {
        source: '/ui/:path*',
        destination: `${uiUrl}/:path*`,
      },
    ]
  },
  async redirects() {
    return redirects
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

function getAssetPrefix() {
  if (
    process.env.FORCE_ASSET_CDN !== '1' &&
    process.env.VERCEL_ENV !== 'production'
  ) {
    return undefined
  }
  if (process.env.FORCE_ASSET_CDN === '-1') {
    return undefined
  }
  return `https://frontend-assets.supabase.com/${process.env.SITE_NAME}/${process.env.VERCEL_GIT_COMMIT_SHA?.substring(0, 12)}`
}

const finalConfig = [withContentlayer, withMDX, withBundleAnalyzer].reduce(
  (acc, plugin) => plugin(acc),
  baseConfig
)

export default finalConfig
