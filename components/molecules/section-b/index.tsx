import React from "react";
import { backgroundImageStyles } from "@/utils/backgroundImageStyles";

interface IProps {}

const SectionB: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ SectionB");
  // renders
  return (
    <section
      className="flex-col-center h-screen bg-accent text-white"
      style={backgroundImageStyles("/uploads/cover-3.png")}
    >
      <div className="container space-y-10 text-center">
        <hgroup className="space-y-4">
          <h1 className="h2">10% Off on Any Rental!</h1>
          <p className="h4">First Time Renters Only!</p>
        </hgroup>
        <div className="space-x-6 space-y-6">
          <button className="button-alt">MAKE PAYMENT</button>
          <button className="button">RETURN POLICY</button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SectionB);
