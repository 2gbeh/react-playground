import React from "react";
import { classNames } from "@/utils";
import { APP } from "@/constants/APP";

interface IProps {}

const Navbar: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Navbar");
  // renders
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {APP.navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium"
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Navbar);
