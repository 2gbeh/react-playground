import React from "react";

interface IProps {}

const SectionII: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ SectionII");
  // renders
  return (
    <section className="section-ii">
      <h1>10% Off on Any Rental!</h1>
      <p>First Time Renters Only!</p>
      <button>BOOK ONLINE</button>
      <button>VIEW ALL DEALS</button>
    </section>
  );
};

export default React.memo(SectionII);
