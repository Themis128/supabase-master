import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

import Layout from '~/components/Layouts/Default'
import ProductHeader from '~/components/Sections/ProductHeader2'

import content from '~/data/enterprise'
import React from 'react'
import EnterpriseLogos from '../components/Enterprise/EnterpriseLogos'

const EnterpriseUseCases = dynamic(() => import('components/Enterprise/UseCases'))
const EnterprisePerformance = dynamic(() => import('components/Enterprise/Performance'))
const EnterpriseSecurity = dynamic(() => import('components/Enterprise/Security'))
const EnterpriseSupport = dynamic(() => import('components/Enterprise/Support'))
const EnterpriseQuote = dynamic(() => import('~/components/Sections/SingleQuote'))
const CTAForm = dynamic(() => import('components/Enterprise/CTAForm'))

const mapIconToElement = (icon) => {
  if (!icon) return undefined
  // If icon is a function (Lucide component), return as React element
  if (typeof icon === 'function') return React.createElement(icon)
  return icon
}

const useCases = {
  ...content['use-cases'],
  highlights: content['use-cases'].highlights?.map((h) => ({
    ...h,
    icon: mapIconToElement(h.icon),
  })),
}

const security = {
  ...content.security,
  features: content.security.features?.map((f) => ({
    ...f,
    icon: mapIconToElement(f.icon),
  })),
}

const support = {
  ...content.support,
  features: content.support.features?.map((f) => ({
    ...f,
    icon: mapIconToElement(f.icon),
  })),
}

const Enterprise: NextPage = () => (
  <>
    <NextSeo
      title={content.metadata.metaTitle}
      description={content.metadata.metaDescription}
      openGraph={{
        title: content.metadata.metaTitle,
        description: content.metadata.metaDescription,
        url: `https://supabase.com/enterprise`,
        images: [
          {
            url: `/images/enterprise/enterprise-og.png`,
          },
        ],
      }}
    />
    <Layout className="overflow-visible">
      <ProductHeader
        {...content.heroSection}
        className="[&_h1]:2xl:!text-5xl bg-default border-0 lg:pb-8 [&_.ph-footer]:mt-0 [&_.ph-footer]:lg:mt-16 [&_.ph-footer]:xl:mt-32"
        sectionContainerClassName="lg:gap-4"
        footer={<EnterpriseLogos className="lg:max-w-xs xl:max-w-none" />}
        footerPosition="left"
      />
      <EnterpriseUseCases {...useCases} />
      <EnterprisePerformance {...content.performance} />
      <EnterpriseSecurity {...security} />
      <EnterpriseSupport {...support} />
      <EnterpriseQuote {...content.quote} />
      <CTAForm />
    </Layout>
  </>
)

export default Enterprise
