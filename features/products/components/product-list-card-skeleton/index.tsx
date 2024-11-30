import React from "react";
//
import Skeleton from "@/components/atoms/skeleton";

interface IProps {
  len?: number;
}

const ProductListCardSkeleton: React.FC<IProps> = ({ len = 1 }) => {
  console.log("🚀 ~ ProductListCardSkeleton");
  // renders
  return [...Array(len)].map((_, i) => (
    <div key={i} className="flex items-center justify-between gap-x-6 py-5">
      <div className="flex-1 flex items-center gap-x-4">
        <Skeleton w={48} h={48} br={"100%"} />
        <div className="flex-1 flex flex-col gap-y-6">
          <Skeleton w={160} h={14} br={10} />
          <Skeleton w={"90%"} h={10} br={10} mt={14} />
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-x-3">
          <Skeleton w={16} h={16} br={2} />
          <Skeleton w={100} h={14} br={10} />
        </div>
        <Skeleton w={80} h={10} br={10} mt={14} />
      </div>
    </div>
  ));
};

export default React.memo(ProductListCardSkeleton);
