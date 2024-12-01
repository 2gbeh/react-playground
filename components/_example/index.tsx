import React from "react";

interface IProps {}

const Example: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Example");
  // renders
  return <div>Example</div>;
};

export default React.memo(Example);
