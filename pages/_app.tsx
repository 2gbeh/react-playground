import "./globals.css";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
//
import Header from "@/components/atoms/header";
import Banner from "@/components/atoms/banner";
import { APP } from "@/constants/APP";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);
  const pageTitle = pageProps?.title
    ? `${pageProps.title} | ${APP.name_short}`
    : APP.name_short;
  // renders
  return getLayout(
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={APP.description} />
        <meta name="keywords" content={APP.keywords} />
        <meta name="theme-color" content={APP.theme.accent} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={APP.url} />
        {/* OPEN GRAPH */}
        <meta property="og:site_name" content={APP.name_short} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={APP.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={APP.url} />
        <meta property="og:image" content="/social-preview.png" />
        <meta property="og:image:alt" content={APP.name_short} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:determiner" content="auto" />
        <meta property="og:locale" content="en_US" />
      </Head>

      {/* MARKUP */}
      {router.asPath === "/" && <Banner />}
      <Header />
      <Component {...pageProps} />
    </>,
  );
}
