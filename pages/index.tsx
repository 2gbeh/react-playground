import React, { ReactElement } from "react";
import Head from "next/head";
//
import HomeLayout from "@/components/layouts/home-layout";
import { APP } from "@/constants/APP";

const Home = () => {
  console.log("🚀 ~ Home");
  // renders
  return (
    <>
      <a href={`"${APP.mailto}"`}>Contact Us</a>
      <a href={`"${APP.tel}"`}>Call Us</a>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <HomeLayout>{page}</HomeLayout>
    </>
  );
};

export default Home;
