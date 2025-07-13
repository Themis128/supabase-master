import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useBreakpoint } from 'common'

import { PRODUCT_NAMES, PRODUCT_SHORTNAMES } from 'shared-data/products'
import pageData from '~/data/products/functions/page'
import { Globe, Shield, Braces, Cloud } from 'lucide-react'
import { JsIcon, PythonIcon, SwiftIcon, FlutterIcon } from '~/components/svg-icons'

import DefaultLayout from '~/components/Layouts/Default'
import SectionContainer from '~/components/Layouts/SectionContainer'
import ProductHeader from '~/components/Sections/ProductHeader2'
import HighlightColumns from '~/components/Sections/HighlightColumns'
import ProductsNav from '~/components/Products/ProductsNav'
import Image from 'next/image'

const ExamplesCarousel = dynamic(() => import('~/components/Examples/ExamplesCarousel'))
const GlobalPresenceSection = dynamic(
  () => import('~/components/Products/Functions/GlobalPresenceSection')
)
const SingleQuote = dynamic(() => import('~/components/Sections/SingleQuote'))
const LocalDXGrid = dynamic(() => import('~/components/Products/Functions/LocalDXGrid'))
const ProductsCta = dynamic(() => import('~/components/Sections/ProductsCta2'))
const TimedAccordionPanels = dynamic(() => import('~/components/Sections/TimedAccordionPanels'))
const TimedAccordionSection = dynamic(() => import('~/components/Sections/TimedAccordionSection'))

function EdgeFunctions() {
  // Ensure heroSection.h1 is always a valid string
  let heroSection = { ...(pageData.heroSection || {}) }
  if (typeof heroSection.h1 !== 'string' || !heroSection.h1) {
    console.warn('edge-functions: heroSection.h1 is missing or not a string. Using fallback value.')
    heroSection.h1 = 'Supabase Edge Functions'
  }
  // Runtime warnings for missing data
  if (!pageData.heroSection) {
    console.warn('Warning: pageData.heroSection is missing')
  }
  if (!Array.isArray(pageData.highlightsSection)) {
    console.warn('Warning: pageData.highlightsSection is missing or not an array')
  }
  if (!pageData.cardsSection || !Array.isArray(pageData.cardsSection.cards)) {
    console.warn('Warning: pageData.cardsSection.cards is missing or not an array')
  }
  if (!pageData.globalPresenceSection) {
    console.warn('Warning: pageData.globalPresenceSection is missing')
  }
  if (!pageData.o11y) {
    console.warn('Warning: pageData.o11y is missing')
  } else if (!('title' in pageData.o11y)) {
    console.warn('Warning: pageData.o11y.title is missing')
  }
  if (!pageData.integratesWithSupabase) {
    console.warn('Warning: pageData.integratesWithSupabase is missing')
  } else if (!('title' in pageData.integratesWithSupabase)) {
    console.warn('Warning: pageData.integratesWithSupabase.title is missing')
  }
  const { basePath } = useRouter()
  const isXs = useBreakpoint(640)
  // pageData is now imported as an object, not a function

  // Map svg string keys to actual React components for highlightsSection
  const svgMap = {
    FullyManaged: Cloud, // Substitute with the closest Lucide or custom icon
    Globe: Globe,
    SecureScalable: Shield,
    NodeSupport: Braces, // Substitute with the closest Lucide or custom icon
    JsIcon: JsIcon,
    PythonIcon: PythonIcon,
    SwiftIcon: SwiftIcon,
    FlutterIcon: FlutterIcon,
  }

  const highlightsWithComponents = Array.isArray(pageData.highlightsSection)
    ? pageData.highlightsSection
        .map((item) => ({
          ...item,
          svg: item.svg && svgMap[item.svg] ? React.createElement(svgMap[item.svg]) : null,
        }))
        .filter((item) => item && typeof item.title === 'string' && item.title.length > 0)
    : []

  return (
    <>
      <NextSeo
        title={pageData.metaTitle}
        description={pageData.metaDescription}
        openGraph={{
          title: pageData.metaTitle,
          description: pageData.metaDescription,
          url: `https://supabase.com/edge-functions`,
          images: [
            {
              url: `https://supabase.com${basePath}/images/product/functions/functions-og.jpg`,
            },
          ],
        }}
      />
      <DefaultLayout>
        <ProductsNav activePage={PRODUCT_NAMES.FUNCTIONS} />
        {heroSection ? (
          <ProductHeader
            {...heroSection}
            footer={<HighlightColumns highlights={highlightsWithComponents} />}
          />
        ) : null}
        <SingleQuote
          id="quote"
          className="!pb-8 md:!pb-12 [&_q]:max-w-2xl"
          quote={{
            text: "Supabase gave us the flexibility and scalability needed at every growth stage. It's rare to find a tool that works just as well for startups as it does for large-scale operations.",
            author: 'Zeno Rocha',
            role: 'CEO at Resend',
            link: '/customers/resend',
            logo: (
              <Image
                draggable={false}
                src="/images/blog/avatars/zeno-rocha.png"
                alt="Zeno Rocha, CEO at Resend"
                className="w-10 h-10 rounded-full overflow-hidden object-cover"
                width={28}
                height={28}
              />
            ),
          }}
        />
        <div className="overflow-hidden">
          <SectionContainer className="flex flex-col gap-4 lg:gap-8 !pb-0" id="examples">
            {pageData.examplesSection ? <ExamplesCarousel {...pageData.examplesSection} /> : null}
          </SectionContainer>
        </div>
        <SectionContainer className="flex flex-col gap-4" id="developer-experience">
          <div>
            <h2 className="h2">
              {pageData.cardsSection?.cards?.[0]?.label || 'First-class local dev experience'}
            </h2>
            <p className="text-foreground-lighter lg:w-1/2">
              {pageData.cardsSection?.cards?.[0]?.paragraph || ''}
            </p>
          </div>
          <div className="mt-4 md:mt-8">
            <LocalDXGrid />
          </div>
        </SectionContainer>
        <SectionContainer className="flex flex-col gap-4 lg:gap-8" id="global-presence">
          {pageData.globalPresenceSection ? (
            <GlobalPresenceSection {...pageData.globalPresenceSection} />
          ) : null}
        </SectionContainer>
        <div className="overflow-hidden">
          <SectionContainer className="flex flex-col gap-4 lg:gap-8" id="observability">
            <h2 className="h2">
              {pageData.o11y && typeof pageData.o11y.title === 'string'
                ? pageData.o11y.title
                : 'Built-in observability'}
            </h2>
            {pageData.o11y ? <TimedAccordionPanels {...pageData.o11y} /> : null}
          </SectionContainer>
        </div>
        <div className="overflow-hidden">
          <SectionContainer className="flex flex-col gap-4 lg:gap-8" id="integrates-with-supabase">
            <h2 className="h2">
              {pageData.integratesWithSupabase &&
              typeof pageData.integratesWithSupabase.title === 'string'
                ? pageData.integratesWithSupabase.title
                : 'Integrates with Supabase'}
            </h2>
            {pageData.integratesWithSupabase?.useCases ? (
              <TimedAccordionSection tabs={pageData.integratesWithSupabase.useCases} />
            ) : null}
          </SectionContainer>
        </div>
        <ProductsCta currentProduct={PRODUCT_SHORTNAMES.FUNCTIONS} className="!pt-0 lg:!pt-16" />
      </DefaultLayout>
    </>
  )
}

export default EdgeFunctions
