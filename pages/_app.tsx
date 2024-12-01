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
  // renders
  return getLayout(
    <>
      <Head>
        <title>
          {pageProps?.title
            ? `${pageProps.title} | ${APP.name_short}`
            : APP.name_short}
            &reg;
        </title>
        <meta property="og:title" content={APP.name_short} />
      </Head>
      {router.asPath === "/" && <Banner />}
      <Header />
      <Component {...pageProps} />
    </>,
  );
}
