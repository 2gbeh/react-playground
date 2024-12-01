import React from "react";

interface IProps {}

const Hero: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Hero");
  // renders
  return (
    <section className="hero">
      <h2>WE ARE OPEN 24/7 INCLUDING MAJOR HOLIDAYS</h2>
      <h1>Plan Your Trip</h1>
      <h1>With Auto Leasing</h1>
      <p>
        Rent a Car Online Today & Enjoy the Best Deals, Rates & Accessories.
      </p>
      <button>BROWSE THE FLEET</button>
    </section>
  );
};

export default React.memo(Hero);
