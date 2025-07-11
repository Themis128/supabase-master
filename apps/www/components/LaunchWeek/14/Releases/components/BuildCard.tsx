import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Tilt from 'vanilla-tilt'
import { useWindowSize } from 'react-use'
import { cn } from 'ui'
import { useBreakpoint } from 'common'

import { AdventDay } from '../data'
import { AdventLink } from '../data/lw14_build_stage'

const BuildCard = ({ day, index }: { day: AdventDay; index: number }) => {
  const isTablet = useBreakpoint(1024)
  const tiltRef = useRef<HTMLDivElement>(null)
  const hiddenRef = useRef<HTMLDivElement>(null)
  const { width } = useWindowSize()
  const [hiddenHeight, setHiddenHeight] = useState(0)
  const transition = { type: 'spring', damping: 10, mass: 0.75, stiffness: 100, delay: index / 15 }
  const variants = {
    initial: {
      rotateY: -90,
      opacity: 0,
    },
    ...(day.is_shipped && {
      reveal: {
        rotateY: 0,
        opacity: 1,
        transition,
      },
    }),
  }
  const isClientLibsCard = day.type === 'clientLibs'

  useEffect(() => {
    if (tiltRef.current) {
      Tilt.init(tiltRef.current, {
        glare: false,
        max: isClientLibsCard ? 1 : 4,
        gyroscope: false,
        'full-page-listening': false,
      })
    }
  }, [tiltRef])

  useEffect(() => {
    if (hiddenRef?.current) {
      const { height } = hiddenRef.current.getBoundingClientRect()
      setHiddenHeight(height)
    }
  }, [hiddenRef, width])

  return (
    <div id={day.id} ref={tiltRef} className="absolute -inset-px group will-change">
      <motion.div
        className={cn(
          'opacity-0 flex flex-col justify-between w-full h-full p-6 rounded-xl bg-surface-75 transition-colors border border-strong hover:border-stronger overflow-hidden',
          isClientLibsCard && 'xl:flex-row'
        )}
        variants={variants}
      >
        <div className="relative w-full h-full flex flex-col flex-1">
          <div className="flex-1 opacity-30 group-hover:opacity-100 transition-opacity text-foreground-light">
            {day.icon}
          </div>
          <div
            className={cn(
              'relative group-hover:!bottom-0 !ease-&lsqb;.25,.25,0,1&rsqb; duration-300 transition-all flex flex-col gap-1'
            )}
            style={{
              bottom: isTablet ? 0 : -hiddenHeight + 'px',
            }}
          >
            <h4 className="text-foreground text-lg leading-6">{day.title}</h4>
            <div
              ref={hiddenRef}
              className="relative z-10 !ease-&lsqb;.25,.25,0,1&rsqb; duration-300 transition-opacity opacity-100 lg:opacity-0 group-hover:opacity-100"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                WebkitFontSmoothing: 'subpixel-antialiased',
              }}
            >
              <p className="text-foreground-lighter text-sm">{day.description}</p>
              <div className="flex gap-1 mt-3 flex-wrap">
                {day.links?.map((link: AdventLink) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    target={link.target ?? '_self'}
                    className="px-2 py-1 pointer-events-auto border transition-colors text-foreground-light bg-surface-100 hover:bg-surface-200 rounded text-xs"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {isClientLibsCard && (
          <div className="flex xl:h-full order-first xl:order-last items-end justify-start xl:justify-end xl:w-2/3 gap-4 xl:gap-6 pb-4 mb-4 xl:pb-0 flex-wrap">
            {day.icons?.map((link: AdventLink) => (
              <Link
                key={link.url}
                href={link.url}
                title={link.label}
                target={link.target ?? '_self'}
                className="w-8 h-8 md:w-6 md:h-6 xl:w-14 xl:h-14 xl:p-1 inline-flex items-center justify-center pointer-events-auto transition-colors text-foreground-light hover:text-foreground"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default BuildCard
