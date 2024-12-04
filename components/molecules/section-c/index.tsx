import React from "react";
import { backgroundImageStyles } from "@/utils/backgroundImageStyles";
import { APP } from "@/constants/APP";

interface IProps {}

const SectionC: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ SectionC");
  // renders
  return (
    <section
      className="flex-col-center h-screen  bg-accent py-4 text-white"
      style={backgroundImageStyles("/uploads/cover-5.png")}
    >
      <div className="container">
        <div className="max-w-[640px] space-y-10 bg-[#000000cc] px-14 py-10">
          <hgroup className="">
            <h1 className="h3">Why rent your car with</h1>
            <h1 className="h3">{APP.name_short}?</h1>
          </hgroup>
          <article className="p">
            Are you looking to navigate one of the most popular cities in the
            world, or set off on a road trip into the country? We are here to help. 
            A car rental in Florida affords you an unmatched sense
            of freedom and flexibility, inviting you to delve deep into the
            cultural and historical wealth of this beautiful city. Rent a car
            that best suits your trip using our straightforward booking panel.
            Hiring a car has never been easier, and you get to enjoy a variety
            of benefits.
          </article>
          <button className="button">LEARN MORE</button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SectionC);
