import React from "react";
import { backgroundImageStyles } from "@/utils/backgroundImageStyles";

interface IProps {}

const Hero: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Hero");
  // renders
  return (
    <section
      className="flex-col-center h-screen bg-accent text-white"
      style={backgroundImageStyles("/uploads/cover-2.png", "fixed")}
    >
      <div className="container">
        <div className="max-w-[520px] space-y-6">
          <hgroup className="space-y-2">
            <h2 className="h4">WE ARE OPEN 24/7 INCLUDING MAJOR HOLIDAYS</h2>
            <h1 className="h1">Plan Your Trip With Auto Leasing</h1>
          </hgroup>
          <p className="text-lg">
            Rent a Car Online Today & Enjoy the Best Deals, Rates & Accessories.
          </p>
          <div className="space-x-6">
            <button className="button">VISIT CAR GALLERY</button>
            <button className="button-alt">CONTACT US</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
