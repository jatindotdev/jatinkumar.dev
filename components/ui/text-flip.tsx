'use client'

import { cn } from '@/lib/utils'
import {
  AnimatePresence,
  motion,
  Variants,
  type AnimatePresenceProps,
} from 'motion/react'
import { Children } from 'react'

export type FlipTextProps = {
  children: React.ReactNode[]
  className?: string
  transition?: { duration: number }
  variants?: Variants
  mode?: AnimatePresenceProps['mode']
  flip: boolean
}

export function FlipText({
  children,
  className,
  transition = { duration: 0.3 },
  variants,
  mode = 'popLayout',
  flip,
}: FlipTextProps) {
  const items = Children.toArray(children)
  const currentIndex = flip ? 1 : 0

  const motionVariants: Variants = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 },
  }

  return (
    <div className={cn('relative inline-block whitespace-nowrap', className)}>
      <AnimatePresence initial={false} mode={mode}>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={variants || motionVariants}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
