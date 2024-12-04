import React from "react";
//
import Tent from "@/components/atoms/tent";
import Hero from "@/components/molecules/hero";
import SectionA from "@/components/molecules/section-a";
import SectionB from "@/components/molecules/section-b";
import SectionC from "@/components/molecules/section-c";
import Testimonials from "@/components/molecules/testimonials";
import SectionD from "@/components/molecules/section-d";
import Footer from "@/components/atoms/footer";

export default function Home() {
  console.log("🚀 ~ Home");
  // renders
  // <div className="flex items-center justify-center h-screen text-slate-800 flex-col">
  //   <a href={APP.mailto} target="_top">Contact Us</a>
  //
  // </div>
  return (
    <main>
      {/* <Hero />
      <SectionA />
      <SectionB />
      <Tent as="partial">Gallery</Tent>
      <SectionC />
      <Testimonials />
      <SectionD /> */}
      <Footer />
    </main>
  );
}
