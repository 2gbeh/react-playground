import React, { PropsWithChildren } from "react";
//
import Header from "@/components/atoms/header";

interface IProps extends PropsWithChildren {}

const HomeLayout: React.FC<IProps> = ({ children }) => {
  console.log("🚀 ~ HomeLayout");
  // renders
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default React.memo(HomeLayout);
