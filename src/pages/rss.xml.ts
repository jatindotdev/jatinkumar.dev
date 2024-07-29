import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => {
    return data.hidden !== true;
  });

  return rss({
    title: 'Jatin',
    description: "Jatin's personal website",
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}`,
    })),
    site: context.site || 'https://jatinkumar.dev',
  });
}
