import React from "react";
import { backgroundImageStyles } from "@/utils/backgroundImageStyles";

interface IProps {}

const SectionC: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ SectionC");
  // renders
  return (
    <section
      className="flex min-h-[640px] items-center bg-accent py-4 text-white"
      style={backgroundImageStyles("/uploads/cover-5.png")}
    >
      <div className="container">
        <div className="max-w-[640px] space-y-10 bg-[#000000cc] py-10 px-14">
          <hgroup className="">
            <h1 className="h3">Why rent your car with</h1>
            <h1 className="h3">Auto Leasing in Florida?</h1>
          </hgroup>
          <article className="p">
            Are you looking to navigate one of the most popular cities in the
            world, or set off on a road trip into the country? Auto Leasing is
            here to help. A car rental in Florida affords you an unmatched sense
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
