import React from "react";
import { backgroundImageStyles } from "@/utils/backgroundImageStyles";

interface IProps {}

const SectionD: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ SectionD");
  // renders
  return (
    <section
      className="flex min-h-[320px] items-center bg-accent py-4 text-white"
      style={backgroundImageStyles("/uploads/cover-6.png")}
    >
      <div className="container space-y-10">
        <hgroup>
          <h1 className="h3">Make a reservation today without any surprises</h1>
          <h1 className="h3">on extra charges at the pick up location</h1>
        </hgroup>
        <button className="button">REQUEST A CALLBACK</button>
      </div>
    </section>
  );
};

export default React.memo(SectionD);
