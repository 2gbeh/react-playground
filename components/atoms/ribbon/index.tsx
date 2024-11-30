import React from "react";

interface IProps {
  title: string;
}

const Ribbon: React.FC<IProps> = ({ title }) => {
  console.log("🚀 ~ Ribbon");
  // renders
  return (
    <div className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default React.memo(Ribbon);
