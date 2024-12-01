import React from "react";
import Link from "next/link";
//
import Logo from "../logo";

interface IProps {}

const Header: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Header");
  // renders
  return (
    <header className="py-4">
      <div className="flex-center-between container">
        <Logo />
        <nav className="">
          <ul className="space-x-5 text-xs font-semibold">
            {[
              { label: "HOME", path: "/" },
              { label: "ABOUT US", path: "/" },
              { label: "CAR GALLERY", path: "/" },
              { label: "CONTACT US", path: "/" },
            ].map(({ label, path }, i) => (
              <Link key={i} href={path} className="">
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
