import React from "react";

interface IProps {}

const SectionII: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ SectionII");
  // renders
  return (
    <section
      className="flex min-h-[480px] items-center bg-accent py-4 text-white"
      style={{
        backgroundImage:
          "linear-gradient(0deg, #000000e6, #11111100), url(/uploads/cover-3.png)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container space-y-10 text-center">
        <hgroup className="space-y-4">
          <h1 className="h2">10% Off on Any Rental!</h1>
          <p className="">First Time Renters Only!</p>
        </hgroup>
        <div className="space-x-5">
          <button className="button-alt">BOOK ONLINE</button>
          <button className="button">VIEW ALL DEALS</button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SectionII);
