import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
// import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { s3Storage } from '@payloadcms/storage-s3'

import { getServerSideURL } from '../utilities/getURL.js'
 // make sure extension is included

const siteName = 'Supabase'

const generateTitle = ({ doc, collectionSlug }) => {
  switch (collectionSlug) {
    case 'customers':
      return `${doc.name} | ${siteName} Customer Stories`
    case 'events':
      return `${doc.title} | ${siteName} Events`
    case 'posts':
      return doc.title
    default:
      return `${doc.title} | ${siteName}`
  }
}

const generateURL = ({ doc }) => {
  const url = getServerSideURL()
  return doc?.slug ? `${url}/${doc.slug}` : url
}

const plugins = [
  nestedDocsPlugin({
    collections: ['categories'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  payloadCloudPlugin(),
  s3Storage({
    collections: {
      media: {
        prefix: 'media',
      },
    },
    bucket: process.env.S3_BUCKET || '',
    config: {
      forcePathStyle: true,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
      },
      region: process.env.S3_REGION,
      endpoint: process.env.S3_ENDPOINT,
    },
  }),
]

export default plugins
