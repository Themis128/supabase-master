import {
  Activity,
  ArrowLeftRight,
  ClipboardCheck,
  DollarSign,
  FolderLock,
  Globe2,
  LayoutList,
  Lightbulb,
  LineChart,
  Lock,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Timer,
  Users,
  UserX,
} from 'lucide-react'
import RequestADemoForm from '../components/Forms/RequestADemoForm'

const enterpriseData = {
  metadata: {
    metaTitle: 'Supabase for Enterprise',
    metaDescription:
      'Leading enterprises use Supabase to build faster, better, and more scalable products.',
  },
  heroSection: {
    id: 'hero',
    title: 'Supabase for Enterprise',
    h1: "Innovative Enterprises use Supabase",
    subheader: [
      "Leading enterprises use Supabase to build faster, better, and more scalable products. From GitHub to PwC, innovative companies trust Supabase to drive their digital transformation strategy."
    ],
    image: "RequestADemoForm",
    logos: [
      {
        name: 'GitHub',
        image: '/images/enterprise/github.svg',
      },
      {
        name: 'PwC',
        image: '/images/enterprise/pwc.svg',
      },
    ],
  },
  'use-cases': {
    id: 'use-cases',
    label: "Build with Supabase",
    heading: "Stay on the forefront",
    stories: [
      {
        icon: '/images/customers/logos/light/mozilla.png',
        url: 'https://developer.mozilla.org/en-US/blog/introducing-ai-help/',
        target: '_blank',
        heading: 'Mozilla use Supabase for GenAI and RAG',
        subheading: "We store embeddings in a PostgreSQL database, hosted by Supabase, to perform a similarity search to identify the most relevant sections within the MDN.",
      },
      {
        icon: '/images/customers/logos/light/epsilon3.png',
        url: '/customers/epsilon3',
        heading: 'Epsilon3 use Supabase to build software for NASA',
        subheading: "Billion dollar missions need to run reliably and securely. We use Supabase because they give us an open-source scalable back-end built by database experts that we can self-host.",
      },
      {
        icon: '/images/customers/logos/light/pebblely.png',
        url: '/customers/pebblely',
        heading: 'Pebblely use Supabase to scale to millions of users.',
        subheading: "It streamlined the database, the API, and authentication. Everything was up and running in two days. It is easy to get started and provides all the solutions we require as we continue to grow.",
      },
    ],
    highlights: [
      {
        icon: LineChart,
        heading: '100x scale',
        subheading: 'Maergo handled 100x their highest sustained traffic with Supabase.',
        url: '/customers/maergo',
      },
      {
        icon: DollarSign,
        heading: '83% cost reduction',
        subheading: 'Shotgun reduced costs by 83% by migrating to Supabase.',
        url: '/customers/shotgun',
      },
      {
        icon: Timer,
        heading: '20% faster dev',
        subheading: 'Voypost enjoyed a 20% faster development process.',
        url: '/customers/voypost',
      },
      {
        icon: Scale,
        heading: 'GDPR compliance',
        subheading: 'Markprompt use Supabase to build GDPR-compliant AI chatbots.',
        url: '/customers/markprompt',
      },
    ],
  },
  performance: {
    id: 'performance',
    heading: "Top performance, at any scale",
    subheading:
      "Supabase ensures optimal database performance at any scale, so you can focus on innovating and growing without worrying about infrastructure limitations—whether you're handling high-traffic applications, complex queries, or massive data volumes.",
    highlights: [
      {
        heading: 'Databases managed',
        subheading: '1,000,000+',
      },
      {
        heading: 'Databases launched daily',
        subheading: '3,500+',
      },
    ],
  },
  security: {
    id: 'security',
    label: 'Security',
    heading: "Trusted for medical records, missions to the moon, and everything in between",
    subheading:
      'Keep your data secure with SOC 2, HIPAA, and GDPR compliance. Your customers’ data is encrypted at rest and in transit, with built-in tools for monitoring and managing security threats.',
    cta: {
      label: 'Learn more about Security',
      url: '/security',
    },
    features: [
      {
        icon: ShieldCheck,
        heading: 'SOC 2 Type II certified',
      },
      {
        icon: Activity,
        heading: 'HIPAA compliant',
      },
      {
        icon: ShieldAlert,
        heading: 'DDoS Protection',
      },
      {
        icon: Lock,
        heading: 'Multi-factor Authentication',
      },
      {
        icon: ClipboardCheck,
        heading: 'Vulnerability Management',
      },
      {
        icon: Users,
        heading: 'Role-based access control',
      },
      {
        icon: LayoutList,
        heading: 'Database Audit Logs',
      },
      {
        icon: Lightbulb,
        heading: 'Security Advisors',
      },
      {
        icon: FolderLock,
        heading: 'Encrypted Storage',
      },
      {
        icon: UserX,
        heading: 'Network restrictions',
      },
    ],
  },
  support: {
    id: 'support',
    label: 'Support',
    heading: "Get expert help, whenever you need it",
    features: [
      {
        icon: Globe2,
        heading: 'Global Support, 24/7',
        subheading:
          'Our team has 100% global coverage. No matter where you are, we’re always available to resolve issues and keep your operations running smoothly.',
      },
      {
        icon: Users,
        heading: 'Dedicated team of experts',
        subheading:
          'Get direct access to talented engineers. From onboarding to optimizations, our expert team is here to provide personalized, hands-on support whenever you need it.',
      },
      {
        icon: ArrowLeftRight,
        heading: 'Migration & Success Support',
        subheading:
          'Our team ensures a smooth transition to Supabase while guiding you with best practices for scaling. We’re dedicated to your long-term success, every step of the way.',
      },
    ],
  },
  quote: {
    id: 'quote',
    quote: {
      text: 'Supabase powers prototyping for fast-moving teams such as GitHub Next.',
      author: 'Idan Gazit',
      logo: "github-logo-svg",
      role: 'Senior Director of Research, GitHub Next',
    },
  },
  'request-a-demo': {
    id: 'request-a-demo',
    heading: 'Request a demo',
    subheading:
      'We can take your requirements and show you how Supabase can help you achieve your goals.',
    quote: {
      text: 'Supabase powers prototyping for fast-moving teams such as GitHub Next.',
      author: '',
      logo: '',
      company: 'GitHub',
    },
  },
}
export default enterpriseData;
