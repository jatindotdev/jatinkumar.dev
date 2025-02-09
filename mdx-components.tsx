import { cn } from '@/lib/utils'
import type { MDXComponents } from 'mdx/types'
import type { JSX } from 'react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img
            src={src}
            alt={alt}
            className="rounded-xl"
            height="342"
            width="608"
          />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    pre: (
      props: JSX.IntrinsicElements['pre'] & { 'data-language'?: string },
    ) => (
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
    ),
  }
}
