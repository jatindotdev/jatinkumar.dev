import { AnimatedSection } from '@/components/ui/animated-section'
import { cn } from '@/lib/utils'
import type { MDXComponents } from 'mdx/types'
import type { JSX } from 'react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: ({ src, alt, ...props }: JSX.IntrinsicElements['img']) => {
      return (
        <AnimatedSection>
          <figure>
            <img
              src={src}
              alt={alt}
              className="rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800/10"
              height={356}
              width={608}
              loading="lazy"
              {...props}
            />
            <figcaption className="text-center">{alt}</figcaption>
          </figure>
        </AnimatedSection>
      )
    },
    h1: (props: JSX.IntrinsicElements['h1']) => (
      <AnimatedSection>
        <h1 {...props} />
      </AnimatedSection>
    ),
    h2: (props: JSX.IntrinsicElements['h2']) => (
      <AnimatedSection>
        <h2 {...props} />
      </AnimatedSection>
    ),
    h3: (props: JSX.IntrinsicElements['h3']) => (
      <AnimatedSection>
        <h3 {...props} />
      </AnimatedSection>
    ),
    h4: (props: JSX.IntrinsicElements['h4']) => (
      <AnimatedSection>
        <h4 {...props} />
      </AnimatedSection>
    ),
    h5: (props: JSX.IntrinsicElements['h5']) => (
      <AnimatedSection>
        <h5 {...props} />
      </AnimatedSection>
    ),
    h6: (props: JSX.IntrinsicElements['h6']) => (
      <AnimatedSection>
        <h6 {...props} />
      </AnimatedSection>
    ),
    p: (props: JSX.IntrinsicElements['p']) => (
      <AnimatedSection>
        <p {...props} />
      </AnimatedSection>
    ),
    li: (props: JSX.IntrinsicElements['li']) => (
      <AnimatedSection>
        <li {...props} />
      </AnimatedSection>
    ),
    pre: (
      props: JSX.IntrinsicElements['pre'] & { 'data-language'?: string },
    ) => (
      <AnimatedSection>
        <>
          {props['data-language'] && (
            <figcaption className="flex items-center justify-between rounded-t-lg border-x border-t border-zinc-200 bg-transparent px-4 py-2 dark:border-zinc-800">
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                {props['data-language']}
              </span>
            </figcaption>
          )}
          <pre
            className={cn(
              'relative rounded-t-none rounded-b-lg border border-zinc-200 bg-transparent px-0 py-4 text-zinc-900 dark:border-zinc-800 dark:text-[#abb2bf]',
              {
                'rounded-t-lg px-4': props['data-language'] === undefined,
              },
            )}
            {...props}
          />
        </>
      </AnimatedSection>
    ),
  }
}
