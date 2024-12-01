import React from "react";
//
import Tent from "@/components/atoms/tent";

export const getStaticProps = () => ({ props: { title: "About Us" } });

export default function AboutUs() {
  console.log("🚀 ~ AboutUs");
  // renders
  return <Tent>AboutUs</Tent>;
}
