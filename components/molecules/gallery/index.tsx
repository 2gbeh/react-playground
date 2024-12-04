import React from "react";
//
import Figure from "../../atoms/figure";
import { useDeviceManager } from "@/hooks/useDeviceManager";

interface IProps {}

const Gallery: React.FC<IProps> = ({}) => {
  const { isMobile } = useDeviceManager();
  console.log("🚀 ~ Gallery");
  // renders
  return (
    <section className="bg-white py-[120px]">
      <div className="container space-y-10">
        <h1 className="h2 text-center">Car Gallery</h1>
        <ul className="flex-centered flex-wrap gap-10">
          {[...Array(12)].map((_, i) => {
            let j = i + 1;
            return (
              <li key={i}>
                <figure className="space-y-4">
                  {/* <Figure src="/images/image-placeholder.png" size={240} /> */}
                  {/* <figcaption className="h4 text-center">{name}</figcaption> */}
                  <Figure
                    src={`https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-categories${j}.jpg`}
                    size={isMobile ? 480 : 240}
                  />
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default React.memo(Gallery);
