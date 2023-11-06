import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwind from "~/tailwind.css";

import { Nav } from "~/components/nav";

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }]
    : [
        {
          rel: "stylesheet",
          href: tailwind,
        },
      ]),
];

export const meta: MetaFunction = () => {
  const meta = {
    title: "Jatin - Software Developer",
    description:
      "Software Developer learning and building applications, softwares and interfaces.",
    image: "/assets/img/cover.png",
    url: "https://jatinkumar.dev",
    type: "website",
  };
  return [
    { title: meta.title },
    {
      tagName: "link",
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      tagName: "link",
      rel: "icon",
      href: "/logo.webp",
      type: "image/webp",
    },
    {
      name: "description",
      content: meta.description,
    },
    {
      tagName: "meta",
      name: "og:title",
      content: meta.title,
    },
    {
      tagName: "meta",
      name: "og:description",
      content: meta.description,
    },
    {
      tagName: "meta",
      name: "og:image",
      content: meta.image,
    },
    {
      tagName: "meta",
      name: "og:url",
      content: meta.url,
    },
    {
      tagName: "meta",
      name: "og:type",
      content: meta.type,
    },
    {
      tagName: "meta",
      name: "twitter:title",
      content: meta.title,
    },
    {
      tagName: "meta",
      name: "twitter:description",
      content: meta.description,
    },
    {
      tagName: "meta",
      name: "twitter:image",
      content: meta.image,
    },
    {
      tagName: "meta",
      name: "twitter:url",
      content: meta.url,
    },
    {
      tagName: "meta",
      name: "twitter:card",
      content: "summary_large_image",
    },
  ];
};

export default function App() {
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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
