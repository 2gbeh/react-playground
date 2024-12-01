import React, { ReactElement } from "react";
import Head from "next/head";
//
import HomeLayout from "@/components/layouts/home-layout";
import Banner from "@/components/atoms/banner";

const Home = () => {
  console.log("🚀 ~ Home");
  // renders
  // <div className="flex items-center justify-center h-screen text-slate-800 flex-col">
  //   <a href={APP.mailto} target="_top">Contact Us</a>
  //   <a href={APP.tel} target="_top">Call Us</a>
  // </div>
  return <h1>Home</h1>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <Banner />
      <HomeLayout>{page}</HomeLayout>
    </>
  );
};

export default Home;
