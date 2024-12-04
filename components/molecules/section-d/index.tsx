import React from "react";
import { backgroundImageStyles } from "@/utils/backgroundImageStyles";
import { APP } from "@/constants/APP";

interface IProps {}

const SectionD: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ SectionD");
  // renders
  return (
    <section
      className="flex-col-center min-h-[320px] bg-accent py-4 text-white"
      style={backgroundImageStyles("/uploads/cover-6.png")}
    >
      <div className="container space-y-10">
        <h1 className="h3  max-w-[640px]">{APP.about}</h1>
        <button className="button">RENT A VEHICLE</button>
      </div>
    </section>
  );
};

export default React.memo(SectionD);
