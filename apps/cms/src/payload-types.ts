// Config interface for site-wide settings (used in generateMeta.ts)
export interface Config {
  /**
   * Globals configuration (used in getGlobals.ts)
   */
  globals: Record<string, any>;
  siteName?: string;
  siteDescription?: string;
  siteUrl?: string;
  favicon?: string | Media;
  db: {
    defaultIDType: string;
    // Add other db config fields as needed
  };
  /**
   * Collections configuration (used in getDocument.ts)
   */
  collections: Record<string, any>;
  // Add other config fields as needed
}
export interface CallToActionBlock {
  id?: string;
  title?: string;
  text?: string;
  url?: string;
  // Add other fields as needed for your app
}
export interface Media {
  id: string;
  url?: string;
  alt?: string;
  title?: string;
  height?: number;
  width?: number;
  updatedAt?: string;
  mimeType?: string;
  filename?: string;
  /**
   * Responsive image sizes, e.g. for Open Graph (og)
   */
  sizes?: {
    og?: {
      url?: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
  // Add other fields as needed for your app
}
export interface Author {
  id?: string | number;
  name?: string;
  bio?: string;
  avatar?: string;
  author?: string;
  // Add other fields as needed for your app
}
export interface Event {
  id: string;
  name: string;
  slug: string;
  date?: string;
  _status?: 'published' | 'draft' | string;
  // Add other fields as needed for your app
}
export interface Customer {
  id: string;
  name: string;
  email: string;
  slug: string;
  _status?: 'published' | 'draft' | string;
  // Add other fields as needed for your app
}
export interface YouTubeBlock {
  id?: string;
  url?: string;
  title?: string;
  description?: string;
  youtubeId?: string;
  // Add other fields as needed for your app
}
export interface Page {
  id: string;
  title: string;
  slug: string;
  layout?: any[]; // Add a more specific type if available
  blocks?: any[];
  meta?: {
    description?: string;
    image?: any;
    [key: string]: any;
  };
  // Add other fields as needed for your app
}
export interface QuoteBlock {
  id?: string;
  img?: string;
  caption?: string;
  text?: string;
  quote?: string;
  author?: string;
  // Add other fields as needed for your app
}
export interface MediaBlock {
  id?: string;
  media?: any; // Replace 'any' with a more specific type if available
  caption?: string;
  altText?: string;
  // Add other fields as needed for your app
}
export interface ContentBlock {
  id?: string;
  content?: DefaultTypedEditorState;
  columns?: Array<{
    size?: 'full' | 'half' | 'oneThird' | 'twoThirds';
    [key: string]: any;
  }>;
  // Add other fields as needed for your app
}
// Temporary: define DefaultTypedEditorState as any until the correct type is available
export type DefaultTypedEditorState = any;
export interface BannerBlock {
  id?: string;
  title?: string;
  subtitle?: string;
  image?: any;
  ctaText?: string;
  ctaUrl?: string;
  content?: DefaultTypedEditorState;
  style?: 'info' | 'error' | 'success' | 'warning';
  // Add other fields as needed for your app
}
export interface ArchiveBlock {
  id?: string;
  categories?: Array<string | { id: string }>;
  introContent?: unknown;
  limit?: number;
  populateBy?: string;
  selectedDocs?: Array<{ value: number | Post }>;
}
export interface Post {
  id: string;
  title: string;
  slug: string;
  categories?: Array<string | { id: string; title?: string }>;
  meta?: {
    description?: string;
    image?: any;
    [key: string]: any;
  };
  // Add other fields as needed for your app
  _status?: 'published' | 'draft' | string;
  /**
   * Array of populated author objects for this post (used in formatAuthors)
   */
  populatedAuthors?: Author[];
}
export interface User {
  id: string;
  email: string;
  roles?: string[];
  // Add other fields as needed
}

export const CallToAction = {
  slug: 'callToAction',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      required: false,
    },
    {
      name: 'links',
      type: 'array',
      label: 'Links',
      required: false,
      fields: [
        {
          name: 'link',
          type: 'text', // You can change this to 'relationship' or 'link' if you have a custom link field type
          label: 'Link',
          required: true,
        },
      ],
    },
  ],
}
