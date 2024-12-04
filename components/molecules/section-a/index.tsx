import React from "react";
import Figure from "@/components/atoms/figure";

interface IProps {}

const SectionA: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ SectionA");
  // renders
  return (
    <section className="flex-col-center sm:h-screen bg-white py-4">
      <div className="container space-y-10">
        <h1 className="h2 text-center">Our Catalogue</h1>
        <ul className="flex-centered gap-10">
          <li>
            <figure className="relative">
              <Figure src="/uploads/section-a1.png" size={480} />
              <figcaption className="h3 absolute bottom-5 left-5 text-white">
                Limousines
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="relative">
              <Figure src="/uploads/section-a2.png" size={480} />
              <figcaption className="h3 absolute bottom-5 left-5 text-white">
                Luxury Cars
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="relative">
              <Figure src="/uploads/section-a3.png" size={480} />
              <figcaption className="h3 absolute bottom-5 left-5 text-white">
                Luxury SUVs
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default React.memo(SectionA);
