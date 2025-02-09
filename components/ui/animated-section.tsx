'use client'

import { TRANSITION_SECTION, VARIANTS_SECTION } from '@/lib/constants'
import { motion } from 'motion/react'
import type { PropsWithChildren } from 'react'

export const AnimatedSection = ({ children }: PropsWithChildren) => {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      {children}
    </motion.section>
  )
}
