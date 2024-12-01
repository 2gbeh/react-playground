import React from "react";
import Figure from "../../atoms/figure";

interface IProps {}

const Gallery: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Gallery");
  // renders
  return (
    <section className="gallery">
      <h1>Car Categories</h1>
      <ul>
        {[...Array(16)].map((_, i) => (
          <li key={i}>
            <figure>
              <Figure src="/images/image-placeholder.png" size={160} />
              <figcaption>{i + 1}. Hatchbacks</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default React.memo(Gallery);
