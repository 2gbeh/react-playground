import React from "react";
import Logo from "../logo";
import { APP } from "@/constants/APP";

interface IProps {}

const Footer: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Footer");
  // renders
  return (
    <footer className="bg-accent px-4 text-white">
      <div className="container space-y-10">
        <ul className="flex gap-20 pt-20">
          <li className="flex-1 space-y-2">
            <h1 className="h3 text-brand">{APP.name_short}</h1>
            <article className="p text-gray-200">
              Plan Your Trip With Auto Leasing. Rent a Car Online Today & Enjoy
              the Best Deals, Rates & Accessories.
            </article>
          </li>
          <li className="flex-1 space-y-4">
            <h1 className="h4">Rental Vehicles</h1>
            <ol className="p space-y-2 text-gray-200">
              <li>Cars & Crossovers</li>
              <li>Luxury Cars</li>
              <li>Vans & SUV</li>
            </ol>
          </li>
          <li className="flex-1 space-y-4">
            <h1 className="h4">About Us</h1>
            <ol className="p space-y-2 text-gray-200">
              <li>Location</li>
              <li>Deals</li>
              <li>Reservation</li>
            </ol>
          </li>
          <li className="flex-1 space-y-4">
            <h1 className="h4">Contact Us</h1>
            <ol className="p space-y-2 text-gray-200">
              <li>11559 Ventura Boulevard, Studio City, CA 91604</li>
              <li>(123) 456-7890</li>
              <li>Info@demolink.org</li>
            </ol>
          </li>
        </ul>
        <address
          className="border-t border-t-gray-400 p-5 text-center text-sm text-gray-200"
          style={{ fontStyle: "normal" }}
        >
          &copy; 2020 Auto Leasing, All rights reserved.
        </address>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
