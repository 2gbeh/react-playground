import React from "react";

interface IProps {}

const Logo: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Logo");
  // renders
  return (
    <img
      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
      alt=""
      className="size-8"
    />
  );
};

export default React.memo(Logo);
