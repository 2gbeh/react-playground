import React from "react";
import Figure from "@/components/atoms/figure";

interface IProps {}

const SectionI: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ SectionI");
  // renders
  return (
    <section className="section-i">
      <h1>Rental Vehicles</h1>
      <ul>
        <li>
          <figure>
            <Figure
              src="https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-rental1-1.jpg"
              size={160}
            />
            <figcaption>Cars & Crossovers</figcaption>
          </figure>
        </li>
        <li>
          {" "}
          <figure>
            <Figure
              src="https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-rental1-1.jpg"
              size={160}
            />
            <figcaption>Luxury Cars</figcaption>
          </figure>
        </li>
        <li>
          {" "}
          <figure>
            <Figure
              src="https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-rental3-1.jpg"
              size={160}
            />
            <figcaption>Vans & SUV</figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
};

export default React.memo(SectionI);
