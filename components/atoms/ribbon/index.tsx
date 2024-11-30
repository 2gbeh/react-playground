import React, { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  title: string;
  badge?: number | string;
}

const Ribbon: React.FC<IProps> = ({ children, title, badge }) => {
  let showBadge = typeof badge === "number" || typeof badge === "string";
  console.log("🚀 ~ Ribbon");
  // renders
  return (
    <div className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center">
          {title}
          {showBadge && (
            <span className="ml-2 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {badge}
            </span>
          )}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default React.memo(Ribbon);
