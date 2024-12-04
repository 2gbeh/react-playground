import React from "react";
//
import Tent from "@/components/atoms/tent";
import Hero from "@/components/molecules/hero";
import SectionA from "@/components/molecules/section-a";
import SectionB from "@/components/molecules/section-b";
import Gallery from "@/components/molecules/gallery";
import SectionC from "@/components/molecules/section-c";
import Testimonials from "@/components/molecules/testimonials";
import SectionD from "@/components/molecules/section-d";
import Footer from "@/components/atoms/footer";

export default function Home() {
  console.log("🚀 ~ Home");
  // renders
  return (
    <main>
      <Hero />
      <SectionA />
      <SectionB />
      <Gallery />
      <SectionC />
      <Testimonials />
      <SectionD />
      <Footer />
    </main>
  );
}
