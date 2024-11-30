import React from "react";
// 
import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/utils";
import { APP } from "@/constants/APP";

interface IProps {}

const Drawer: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Drawer");
  // renders
  return (
    <DisclosurePanel className="md:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        {APP.navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
      <div className="border-t border-gray-700 pb-3 pt-4">
        <div className="flex items-center px-5">
          <div className="shrink-0">
            <img
              alt=""
              src={APP.user.imageUrl}
              className="size-10 rounded-full"
            />
          </div>
          <div className="ml-3">
            <div className="text-base/5 font-medium text-white">
              {APP.user.name}
            </div>
            <div className="text-sm font-medium text-gray-400">
              {APP.user.email}
            </div>
          </div>
          <button
            type="button"
            className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2">
          {APP.userNavigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </div>
    </DisclosurePanel>
  );
};

export default React.memo(Drawer);
