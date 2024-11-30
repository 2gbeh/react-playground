import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

interface IProps {
  onClick?: () => void;
}

const CTAButton: React.FC<IProps> = ({ onClick = () => undefined }) => {
  console.log("🚀 ~ CTAButton");
  // renders
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
    >
      <PlusCircleIcon aria-hidden="true" className="mr-2 size-5 sm:size-4" />
      Add New
    </button>
  );
};

export default React.memo(CTAButton);
