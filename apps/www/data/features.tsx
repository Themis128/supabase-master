import { FunctionComponent } from 'react'
import {
  Activity,
  BarChart,
  Braces,
  Brain,
  ChartScatter,
  Clock,
  Cloud,
  CloudCog,
  Database,
  DatabaseBackup,
  DatabaseZap,
  Eye,
  FileCode2,
  Folders,
  GitBranch,
  Globe,
  Image,
  Lock,
  Mail,
  MessageCircle,
  Package,
  Puzzle,
  RectangleEllipsis,
  Server,
  Shield,
  ShieldCheck,
  ShieldPlus,
  Smartphone,
  Terminal,
  UploadCloud,
  Users,
  UserX,
  Zap,
} from 'lucide-react'
import { FlutterIcon, JsIcon, PythonIcon, SwiftIcon } from '~/components/svg-icons'
import {
  PRODUCT,
  PRODUCT_MODULE,
  PRODUCT_MODULES_SHORTNAMES,
  PRODUCT_SHORTNAMES,
  PRODUCT_NAMES,
} from 'shared-data/products'
import type { LucideIcon } from 'lucide-react'

enum ADDITIONAL_PRODUCTS {
  PLATFORM = 'platform',
  STUDIO = 'studio',
}

export type FeatureProductType = PRODUCT | PRODUCT_MODULE | ADDITIONAL_PRODUCTS

export type FeatureType = {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon | FunctionComponent<any>
  products: FeatureProductType[]
  heroImage?: string
  heroImageLight?: string
  docsUrl?: string
  slug: string
  status: {
    stage: string
    availableOnSelfHosted: boolean
  }
}

export enum PRODUCT_STAGES {
  PRIVATE_ALPHA = 'Private Alpha',
  PUBLIC_ALPHA = 'Public Alpha',
  BETA = 'Beta',
  PUBLIC_BETA = 'Public Beta',
  GA = 'General Availability',
}

export const features: FeatureType[] = [
  {
    title: 'Postgres database',
    subtitle: 'Every project is a full Postgres database.',
    description: `
Every Supabase project is a dedicated [Postgres database](https://www.postgresql.org/) - _"a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance"_.

It's 100% portable, which means you can easily migrate your data to and from other Postgres databases, ensuring that your data is never locked into a proprietary system.

## Key benefits
1. Advanced data types: Utilize JSON, arrays, and custom types to store complex data structures efficiently.
2. Powerful indexing: Improve query performance with various indexing options, including B-tree, Hash, and GiST.
3. Full SQL support: Execute complex queries and leverage advanced SQL features for data manipulation and analysis.
4. ACID compliance: Ensure data integrity and consistency with Postgres's transactional capabilities.
5. Extensibility: Add custom functions and extensions to extend database functionality.
6. Scalability: Handle growing data volumes and user loads with Postgres's proven scalability.
7. Community support: Benefit from a large, active community and extensive documentation.
`,
    icon: Database,
    products: [PRODUCT_SHORTNAMES.DATABASE],
    heroImage: '/images/features/postgres-database.png',
    heroImageLight: '/images/features/postgres-database-light.png',
    docsUrl: 'https://supabase.com/docs/guides/database/overview',
    slug: 'postgres-database',
    status: {
      stage: PRODUCT_STAGES.GA,
      availableOnSelfHosted: true,
    },
  },
  {
    title: 'Vector database',
    subtitle: 'Store vector embeddings right next to the rest of your data.',
    description: `
Supabase provides an open source toolkit for developing AI applications using Postgres and pgvector. Use the Supabase client libraries to store, index, and query your vector embeddings at scale.

## Key benefits
1. Unified data storage: Keep vector embeddings and relational data in one place, simplifying your data architecture.
2. Efficient similarity search: Perform fast and accurate similarity searches on high-dimensional data.
3. Seamless integration: Easily incorporate vector search into existing applications without additional infrastructure.
4. Scalability: Handle large volumes of vector data with Postgres's proven scalability.
5. Cost-effective: Eliminate the need for separate vector databases, reducing infrastructure costs.
6. Advanced querying: Combine vector similarity search with traditional SQL queries for powerful hybrid searches.
7. Real-time updates: Continuously update and query vector data without complex ETL processes.
`,
    icon: ChartScatter,
    products: [PRODUCT_SHORTNAMES.DATABASE],
    heroImage: 'https://www.youtube-nocookie.com/embed/ibzlEQmgPPY',
    docsUrl: 'https://supabase.com/docs/guides/ai',
    slug: 'vector-database',
    status: {
      stage: PRODUCT_STAGES.GA,
      availableOnSelfHosted: true,
    },
  },
  // ...keep the rest of your feature objects here...
]
  .filter(f => !!f && typeof f === 'object')
  .filter(f => Array.isArray(f.products));
