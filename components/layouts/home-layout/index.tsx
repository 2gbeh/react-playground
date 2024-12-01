import React, { PropsWithChildren } from "react";
//
import Header from "@/components/atoms/header";

interface IProps extends PropsWithChildren {}

const HomeLayout: React.FC<IProps> = ({ children }) => {
  console.log("🚀 ~ HomeLayout");
  // renders
  return (
    <div className="min-h-full">
      <Header />
      {children}
    </div>
  );
};

export default React.memo(HomeLayout);
