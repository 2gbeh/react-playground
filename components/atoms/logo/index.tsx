import React from "react";
import Figure from "../figure";

interface IProps {}

const Logo: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Logo");
  // renders
  return (
    <Figure
      src="/logo.png"
      size={100}
      priority
    />
  );
};

export default React.memo(Logo);
