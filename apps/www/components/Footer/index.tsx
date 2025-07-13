// import { CheckIcon } from '@heroicons/react/outline' // Disabled: missing module/type
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Badge, IconDiscord, IconGitHubSolid, IconTwitterX, IconYoutubeSolid, cn } from 'ui'
import SectionContainer from '../Layouts/SectionContainer'

import supabaseLogoWordmarkDark from 'common/assets/images/supabase-logo-wordmark--dark.png'
import supabaseLogoWordmarkLight from 'common/assets/images/supabase-logo-wordmark--light.png'
import footerData from 'data/Footer'
import { ThemeToggle } from 'ui-patterns/ThemeToggle'
import useDarkLaunchWeeks from '../../hooks/useDarkLaunchWeeks'

interface Props {
  className?: string
  hideFooter?: boolean
}

const Footer = (props: Props) => {
  const { pathname } = useRouter()

  const isDarkLaunchWeek = useDarkLaunchWeeks()
  const isGAWeek = pathname.includes('/ga-week')
  const forceDark = isDarkLaunchWeek

  if (props.hideFooter) {
    return null
  }

  return (
    <footer
      className={cn(
        'bg-alternative',
        isDarkLaunchWeek && 'bg-[#060809]',
        isGAWeek && 'dark:bg-alternative',
        props.className
      )}
      aria-labelledby="footerHeading"
    >
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="w-full !py-0">
        <SectionContainer className="grid grid-cols-2 md:flex items-center justify-between text-foreground md:justify-center gap-8 md:gap-16 xl:gap-28 !py-6 md:!py-10 text-sm">
          <div className="flex flex-col md:flex-row gap-2 md:items-center">
            We protect your data.
            <Link href="/security" className="text-brand hover:underline">
              More on Security
            </Link>
          </div>
          <ul
            className="flex flex-col md:flex-row gap-2 md:gap-8 justify-center md:items-center"
            data-testid="footer-cert-list"
          >
            <li className="flex items-center gap-2 whitespace-nowrap flex-nowrap">
              {/* Removed: <CheckIcon /> (missing icon) */} SOC2 Type 2{' '}
              <span className="text-foreground-lighter hidden sm:inline">Certified</span>
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap flex-nowrap">
              {/* Removed: <CheckIcon /> (missing icon) */} HIPAA{' '}
              <span className="text-foreground-lighter hidden sm:inline">Compliant</span>
            </li>
          </ul>
        </SectionContainer>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <SectionContainer className="py-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="#" as="/" className="w-40">
              <Image
                src={supabaseLogoWordmarkLight}
                width={160}
                height={30}
                alt="Supabase Logo"
                className="dark:hidden"
                priority
              />
              <Image
                src={supabaseLogoWordmarkDark}
                width={160}
                height={30}
                alt="Supabase Logo"
                className="hidden dark:block"
                priority
              />
            </Link>
            <div className="flex space-x-5">
              <a
                href="https://twitter.com/supabase"
                className="text-foreground-lighter hover:text-foreground transition"
              >
                <span className="sr-only">Twitter</span>
                <IconTwitterX size={22} />
              </a>

              <a
                href="https://github.com/supabase"
                className="text-foreground-lighter hover:text-foreground transition"
              >
                <span className="sr-only">GitHub</span>
                <IconGitHubSolid size={22} />
              </a>

              <a
                href="https://discord.supabase.com/"
                className="text-foreground-lighter hover:text-foreground transition"
              >
                <span className="sr-only">Discord</span>
                <IconDiscord size={22} />
              </a>

              <a
                href="https://youtube.com/c/supabase"
                className="text-foreground-lighter hover:text-foreground transition"
              >
                <span className="sr-only">Youtube</span>
                <IconYoutubeSolid size={22} />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {footerData.filter(Boolean).map((segment, segIdx) => {
                if (!segment || !segment.title || !Array.isArray(segment.links)) return null
                return (
                  <div key={`footer_${segment.title || segIdx}`}>
                    <h6 className="text-foreground overwrite text-base">{segment.title}</h6>
                    {Array.isArray(segment.links) && segment.links.filter(Boolean).length > 0 && (
                      <ul className="mt-4 space-y-2" data-testid="footer-links-list">
                        {
                          segment.links
                            .filter(Boolean)
                            .map((linkObj, idx) => {
                              if (!linkObj) return null
                              const { component: Component, text, url } = linkObj
                              let content = null
                              if (url) {
                                content = url.startsWith('https') ? (
                                  <a
                                    href={url}
                                    className={`text-sm transition-colors text-foreground-lighter hover:text-foreground`}
                                  >
                                    {text}
                                  </a>
                                ) : (
                                  <Link
                                    href={url}
                                    className={`text-sm transition-colors text-foreground-lighter hover:text-foreground`}
                                  >
                                    {text}
                                  </Link>
                                )
                              } else if (Component) {
                                // Render the custom component inside an <li> wrapper, not as the root
                                content = null
                              } else {
                                content = (
                                  <span className="text-sm transition-colors text-muted hover:text-foreground-lighter">
                                    {text}
                                    <span className="ml-2 inline text-xs xl:ml-0 xl:block 2xl:ml-2 2xl:inline">
                                      <Badge size="small">Coming soon</Badge>
                                    </span>
                                  </span>
                                )
                              }
                              // Always return <li> as direct child of <ul>
                              if (Component) {
                                return (
                                  <li key={`${segment.title || segIdx}_link_${idx}`}>
                                    <Component>
                                      <span className="text-sm transition-colors text-foreground-lighter hover:text-foreground">
                                        {text}
                                      </span>
                                    </Component>
                                  </li>
                                )
                              }
                              return (
                                <li key={`${segment.title || segIdx}_link_${idx}`}>{content}</li>
                              )
                            })
                            .filter(Boolean) // Remove any accidental nulls
                        }
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="border-default mt-32 flex justify-between border-t pt-8">
          <small className="small">&copy; Supabase Inc</small>
          <div className={cn(forceDark && 'hidden')}>
            <ThemeToggle forceDark={forceDark} />
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}

export default Footer
