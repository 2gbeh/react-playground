import React, { PropsWithChildren } from "react";
//
import Header from "@/components/atoms/header";

interface IProps extends PropsWithChildren {}

const DashboardLayout: React.FC<IProps> = ({ children }) => {
  console.log("🚀 ~ DashboardLayout");
  // renders
  return (
    <div className="min-h-full">
      <Header />
      {children}
    </div>
  );
};

export default React.memo(DashboardLayout);
