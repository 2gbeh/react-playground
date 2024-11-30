import React from "react";

type PropValue = number | string;

interface IProps {
  w?: PropValue;
  h?: PropValue;
  br?: PropValue;
  mt?: PropValue;
  mb?: PropValue;
  ml?: PropValue;
  mr?: PropValue;
}

const Skeleton: React.FC<IProps> = ({
  w = 0,
  h = 0,
  br = 0,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
}) => {
  console.log("🚀 ~ Skeleton");
  // renders
  return (
    <div
      style={{
        backgroundColor: "#eee",
        width: w,
        height: h,
        borderRadius: br,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
      }}
    ></div>
  );
};

export default React.memo(Skeleton);
