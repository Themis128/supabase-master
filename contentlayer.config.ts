import { defineDocumentType, makeSource } from 'contentlayer/source-files'

// Example DocumentType for Markdown files in /content
export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    date: { type: 'date', required: false },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Doc],
})
