import createMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import rehypeExternalLinks from 'rehype-external-links'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

/** @type {import('rehype-pretty-code').Options} */
const options = {
  keepBackground: false,
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      [rehypePrettyCode, options],
      rehypeUnwrapImages,
      [
        rehypeExternalLinks,
        { target: '_blank', rel: ['noopener', 'noreferrer'] },
      ],
    ],
  },
})

export default withMDX(nextConfig)
