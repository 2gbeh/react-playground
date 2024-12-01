import React, { ReactElement } from "react";
import Head from "next/head";
//
import { APP } from "@/constants/APP";
import HomeLayout from "@/components/layouts/home-layout";
import Tent from "@/components/atoms/tent";

const ContactUs = () => {
  console.log("🚀 ~ ContactUs");
  // renders
  return <Tent>ContactUs</Tent>;
};

ContactUs.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Contact Us | {APP.name_short}</title>
      </Head>
      <HomeLayout>{page}</HomeLayout>
    </>
  );
};

export default ContactUs;
