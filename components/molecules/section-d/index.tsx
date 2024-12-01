import React from "react";

interface IProps {}

const SectionIV: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ SectionIV");
  // renders
  return (
    <section className="section-iv">
      <h1>
        Make a reservation today without any surprises on extra charges at the
        pick up location
      </h1>
      <button>REQUEST A CALLBACK</button>
    </section>
  );
};

export default React.memo(SectionIV);
