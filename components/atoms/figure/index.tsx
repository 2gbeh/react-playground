import React from "react";
import Image from "next/image";

type TSize = number | `${number}` | undefined;

interface IProps {
  src: string;
  size: TSize | [TSize, TSize];
  priority?: boolean;
}

const Figure: React.FC<IProps> = ({ src, size, priority = false }) => {
  const [width, height] = Array.isArray(size) ? size : [size, size];
  console.log("🚀 ~ Figure");
  // renders
  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      priority={priority}
      // className="dark:invert"
      // style={{
      //   width,
      //   height,
      // }}
    />
  );
};

export default React.memo(Figure);
