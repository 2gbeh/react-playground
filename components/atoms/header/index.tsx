import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//
import Logo from "../logo";
import { GridIcon, MenuIcon } from "lucide-react";

interface IProps {}

const Header: React.FC<IProps> = ({}) => {
  const router = useRouter();
  console.log("🚀 ~ Header");
  // renders
  return (
    <header className="bg-white py-4">
      <div className="flex-center-between container">
        <Logo />
        <nav className="">
          <i className="block sm:hidden">
            <MenuIcon size={32} />
          </i>
          <ul className="hidden space-x-5 text-sm font-semibold sm:block">
            {[
              { label: "HOME", path: "/" },
              { label: "ABOUT US", path: "/about-us" },
              { label: "CAR GALLERY", path: "/gallery" },
              { label: "CONTACT US", path: "/contact-us" },
            ].map(({ label, path }, i) => (
              <Link
                key={i}
                href={path}
                className={router.asPath === path ? "text-brand" : ""}
              >
                {label}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
