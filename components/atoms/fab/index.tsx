import React from "react";
import { ChevronUpIcon } from "lucide-react";

interface IProps {}

const Fab: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Fab");
  // renders
  return (
    <div className="flex-centered absolute bottom-5 right-5 h-[56px] w-[56px] rounded-[16px] bg-brand">
      <ChevronUpIcon color="white" size={24} />
    </div>
  );
};

export default React.memo(Fab);
