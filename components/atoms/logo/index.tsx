import React from "react";
import Figure from "../figure";

interface IProps {}

const Logo: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Logo");
  // renders
  return (
    <Figure
      src="https://template68211.motopreview.com/mt-demo/68200/68211/mt-content/uploads/2018/08/mt-1582-home-logo1.png"
      size={160}
      priority
    />
  );
};

export default React.memo(Logo);
