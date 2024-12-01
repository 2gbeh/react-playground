import React, { ReactElement } from "react";
import Head from "next/head";
//
import { APP } from "@/constants/APP";
import HomeLayout from "@/components/layouts/home-layout";
import Tent from "@/components/atoms/tent";

const Gallery = () => {
  console.log("🚀 ~ Gallery");
  // renders
  return <Tent>Gallery</Tent>;
};

Gallery.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Gallery | {APP.name_short}</title>
      </Head>
      <HomeLayout>{page}</HomeLayout>
    </>
  );
};

export default Gallery;
