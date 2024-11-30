import React from "react";
import { Disclosure } from "@headlessui/react";
//
import Logo from "../logo";
import Navbar from "../navbar";
import NotificationMenu from "../notification-menu";
import AvatarMenu from "../avatar-menu";
import Drawer from "../drawer";

interface IProps {}

const Header: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Header");
  // renders
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              {/* LOGO */}
              <Logo />
            </div>

            {/* NAVBAR */}
            <Navbar />
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* NOTIFICATION MENU */}
              <NotificationMenu />

              {/* AVATAR MENU */}
              <AvatarMenu />
            </div>
          </div>
        </div>
      </div>
      {/* DRAWER */}
      <Drawer />
    </Disclosure>
  );
};

export default React.memo(Header);
