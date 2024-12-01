import React from "react";

interface IProps {}

const Banner: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Banner");
  // renders
  return (
    <section className="bg-accent py-4">
      <div className="container flex justify-end gap-x-2 font-bold">
        <p className="text-white">BOOK ONLINE NOW. CALL</p>
        <p className="text-brand">(123) 456-7 8910</p>
      </div>
    </section>
  );
};

export default React.memo(Banner);
