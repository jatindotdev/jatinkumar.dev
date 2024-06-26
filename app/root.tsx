import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type MetaFunction,
} from '@remix-run/react';
import '~/tailwind.css';
import { Nav } from './components/nav';
import { Analytics } from '@vercel/analytics/react';

export const meta: MetaFunction = () => {
  const meta = {
    title: 'Jatin - Software Developer',
    description:
      'Software Developer learning and building applications, softwares and interfaces.',
    image: '/assets/img/cover.png',
    url: 'https://jatinkumar.dev',
    type: 'website',
  };
  return [
    { title: meta.title },
    {
      tagName: 'link',
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
    {
      tagName: 'link',
      rel: 'apple-touch-icon',
      href: '/logo.png',
      type: 'image/png',
    },
    {
      name: 'description',
      content: meta.description,
    },
    {
      tagName: 'meta',
      name: 'og:title',
      content: meta.title,
    },
    {
      tagName: 'meta',
      name: 'og:description',
      content: meta.description,
    },
    {
      tagName: 'meta',
      name: 'og:image',
      content: meta.image,
    },
    {
      tagName: 'meta',
      name: 'og:url',
      content: meta.url,
    },
    {
      tagName: 'meta',
      name: 'og:type',
      content: meta.type,
    },
    {
      tagName: 'meta',
      name: 'twitter:title',
      content: meta.title,
    },
    {
      tagName: 'meta',
      name: 'twitter:description',
      content: meta.description,
    },
    {
      tagName: 'meta',
      name: 'twitter:image',
      content: meta.image,
    },
    {
      tagName: 'meta',
      name: 'twitter:url',
      content: meta.url,
    },
    {
      tagName: 'meta',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        {children}
        <Analytics />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
