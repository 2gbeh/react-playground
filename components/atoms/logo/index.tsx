import React from "react";

interface IProps {}

const Logo: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Logo");
  // renders
  return <img src="/icon.svg" alt="" className="size-8" />;
};

export default React.memo(Logo);
