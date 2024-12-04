import React from "react";
import { APP } from "@/constants/APP";

interface IProps {}

const Banner: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Banner");
  // renders
  return (
    <section className="bg-accent py-4">
      <div className="container flex justify-end gap-x-2 font-bold">
        <p className="text-white">RENT A LIMO TODAY, CALL</p>
        <p className="text-brand">
          <a href={APP.tel} target="_top">
            {APP.phone}
          </a>
        </p>
      </div>
    </section>
  );
};

export default React.memo(Banner);
