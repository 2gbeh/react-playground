import React, { ReactElement } from "react";
import Head from "next/head";
//
import { APP } from "@/constants/APP";
import HomeLayout from "@/components/layouts/home-layout";
import Banner from "@/components/atoms/banner";
import Hero from "@/components/molecules/hero";
import SectionA from "@/components/molecules/section-a";

const Home = () => {
  console.log("🚀 ~ Home");
  // renders
  // <div className="flex items-center justify-center h-screen text-slate-800 flex-col">
  //   <a href={APP.mailto} target="_top">Contact Us</a>
  //   
  // </div>
  return (
    <>
      <Hero />
      <SectionA/>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>{APP.name}</title>
      </Head>
      <Banner />
      <HomeLayout>{page}</HomeLayout>
    </>
  );
};

export default Home;
