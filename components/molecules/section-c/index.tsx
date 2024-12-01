import React from "react";

interface IProps {}

const SectionIII: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ SectionIII");
  // renders
  return (
    <section className="section-iii">
      <h1>Why rent your car with</h1>
      <h1>Auto Leasing in Florida?</h1>
      <article>
        Are you looking to navigate one of the most popular cities in the world,
        or set off on a road trip into the country? Auto Leasing is here to
        help. A car rental in Florida affords you an unmatched sense of freedom
        and flexibility, inviting you to delve deep into the cultural and
        historical wealth of this beautiful city. Rent a car that best suits
        your trip using our straightforward booking panel. Hiring a car has
        never been easier, and you get to enjoy a variety of benefits.
      </article>
      <button>LEARN MORE</button>
    </section>
  );
};

export default React.memo(SectionIII);
