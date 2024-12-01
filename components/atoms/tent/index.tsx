import React, { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  as?: "page" | "partial";
}

const Tent: React.FC<IProps> = ({ children, as = "page" }) => {
  console.log("🚀 ~ Tent");
  // renders
  return as === "page" ? (
    <main className="flex-centered h-screen">
      <p className="text-xl">{children}</p>
    </main>
  ) : (
    <section className="flex-centered min-h-[480px]">
      <p className="text-xl">{children}</p>
    </section>
  );
};

export default React.memo(Tent);
