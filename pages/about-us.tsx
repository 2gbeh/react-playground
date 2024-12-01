import React, { ReactElement } from "react";
import Head from "next/head";
//
import { APP } from "@/constants/APP";
import HomeLayout from "@/components/layouts/app-layout";
import Tent from "@/components/atoms/tent";

const AboutUs = () => {
  console.log("🚀 ~ AboutUs");
  // renders
  return <Tent>AboutUs</Tent>;
};

AboutUs.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>About Us | {APP.name_short}</title>
      </Head>
      <HomeLayout>{page}</HomeLayout>
    </>
  );
};

export default AboutUs;
