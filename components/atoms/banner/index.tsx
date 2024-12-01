import React from "react";

interface IProps {}

const Banner: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Banner");
  // renders
  return (
    <section className="banner">
      <p>BOOK ONLINE NOW. CALL (123) 456-7 8910</p>
    </section>
  );
};

export default React.memo(Banner);
