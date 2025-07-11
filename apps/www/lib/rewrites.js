const studioUrl = process.env.NEXT_PUBLIC_STUDIO_URL || 'http://192.168.0.23:8082'
const docsUrl = process.env.NEXT_PUBLIC_DOCS_URL || 'http://192.168.0.23:3005'
const uiLibraryUrl = process.env.NEXT_PUBLIC_UI_LIBRARY_URL || 'http://192.168.0.23:3001'
const referenceDocsUrl = process.env.NEXT_PUBLIC_REFERENCE_DOCS_URL || 'https://192.168.0.23:3010'

module.exports = [
  {
    source: '/:path*',
    destination: '/:path*',
  },
  {
    source: '/dashboard',
    destination: `${studioUrl}`,
  },
  {
    source: '/dashboard/:path*',
    destination: `${studioUrl}/:path*`,
  },
  {
    source: '/docs',
    destination: `${docsUrl}`,
  },
  {
    source: '/docs/',
    destination: `${docsUrl}`,
  },
  {
    source: '/docs/:path*',
    destination: `${docsUrl}/:path*`,
  },
  {
    source: '/ui',
    destination: `${uiLibraryUrl}`,
  },
  {
    source: '/ui/:path*',
    destination: `${uiLibraryUrl}/:path*`,
  },
  {
    source: '/new-docs',
    destination: `${referenceDocsUrl}`,
  },
  {
    source: '/new-docs/',
    destination: `${referenceDocsUrl}`,
  },
  {
    source: '/new-docs/:path*',
    destination: `${referenceDocsUrl}/:path*`,
  },
  {
    source: '/humans.txt',
    destination: `${docsUrl}/humans.txt`,
  },
  {
    source: '/lawyers.txt',
    destination: `${docsUrl}/lawyers.txt`,
  },
  {
    source: '/.well-known/security.txt',
    destination: `${docsUrl}/.well-known/security.txt`,
  },
  {
    source: '/llms.txt',
    destination: `${docsUrl}/llms.txt`,
  },
  {
    source: '/llms/:path(.*\\.txt$)',
    destination: `${docsUrl}/llms/:path`,
  },
  {
    source: '/feed.xml',
    destination: '/rss.xml',
  },
]
