import React from "react";
import Link from "next/link";
//
import Logo from "../logo";

interface IProps {}

const Header: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Header");
  // renders
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          {[
            { label: "HOME", path: "/" },
            { label: "ABOUT", path: "/" },
            { label: "CAR RENTALS", path: "/" },
            { label: "LUXURY CARS", path: "/" },
            { label: "VAN & SUV RENTALS", path: "/" },
            { label: "LOCATION", path: "/" },
            { label: "DEALS", path: "/" },
            { label: "RESERVATION", path: "/" },
            { label: "TESTIMONIALS", path: "/" },
            { label: "CONTACT", path: "/" },
          ].map(({ label, path }, i) => (
            <Link key={i} href={path}>
              {label}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);
