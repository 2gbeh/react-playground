import React from "react";
import Logo from "../logo";

interface IProps {}

const Footer: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Footer");
  // renders
  return (
    <footer>
      <ul>
        <li>
          <Logo />
          <article>
            Plan Your Trip With Auto Leasing. Rent a Car Online Today & Enjoy
            the Best Deals, Rates & Accessories.
          </article>
        </li>
        <li>
          <h1>Rental Vehicles</h1>
          <ol>
            <li>Cars & Crossovers</li>
            <li>Luxury Cars</li>
            <li>Vans & SUV</li>
          </ol>
        </li>
        <li>
          <h1>About Us</h1>
          <ol>
            <li>Location</li>
            <li>Deals</li>
            <li>Reservation</li>
          </ol>
        </li>
        <li>
          <h1>Contact Us</h1>
          <ol>
            <li>11559 Ventura Boulevard, Studio City, CA 91604</li>
            <li>(123) 456-7890</li>
            <li>Info@demolink.org</li>
          </ol>
        </li>
      </ul>
      <address>&copy; 2020 Auto Leasing, All rights reserved.</address>
    </footer>
  );
};

export default React.memo(Footer);
