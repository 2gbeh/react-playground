import React from "react";

interface IProps {}

const Hero: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Hero");
  // renders
  return (
    <section
      className="flex min-h-[580px] flex-col justify-center bg-accent"
      style={{
        backgroundImage:
          "linear-gradient(0deg, #00000080, #11111100), url(./images/cover.png)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        opacity: "revert",
      }}
    >
      <div className="container">
        <div className="max-w-[640px] space-y-6 text-white">
          <hgroup className="space-y-2">
            <h2 className="font-bold tracking-wide">
              WE ARE OPEN 24/7 INCLUDING MAJOR HOLIDAYS
            </h2>
            <h1 className="text-6xl font-semibold">
              Plan Your Trip With Auto Leasing
            </h1>
          </hgroup>
          <p className="text-lg">
            Rent a Car Online Today & Enjoy the Best Deals, Rates & Accessories.
          </p>
          <button className="button">VISIT CAR GALLERY</button>
          <button className="button-alt ml-5">CONTACT US</button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
