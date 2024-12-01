import React from "react";
import Figure from "@/components/atoms/figure";

interface IProps {}

const SectionA: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ SectionA");
  // renders
  return (
    <section className="min-h-[480px] bg-red-100 py-4">
      <div className="container">
        <h1>Rental Vehicles</h1>
        <ul className="flex-centered">
          <li>
            <figure className="relative">
              <Figure src="/uploads/section-a1.png" size={320} />
              <figcaption className="absolute bottom-5 font-black text-white">
                Cars & Crossovers
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="relative">
              <Figure src="/uploads/section-a2.png" size={320} />
              <figcaption className="absolute bottom-5 font-black text-white">
                Luxury Cars
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="relative">
              <Figure src="/uploads/section-a3.png" size={320} />
              <figcaption className="absolute bottom-5 font-black text-white">
                Vans & SUV
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default React.memo(SectionA);
