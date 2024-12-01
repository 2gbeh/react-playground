import { mailto, tel } from "@/utils";

export const APP = {
  url: "https://peterrenzlimoservices.com",
  domain: "peterrenzlimoservices.com",
  name: "Peter Renz Limo Services Corp",
  address: "2930 NW 55th ave apt 1B Lauderhill FL 33313",
  address_line1: "2930 NW 55th ave apt 1B",
  address_line2: "Lauderhill FL 33313",
  email: "perenz12@yahoo.com",
  phone: "(786) 624-0376",
  mailto: mailto(
    "contact@peterrenzlimoservices.com",
    "Re: Prospective Client - Peter Renz Limo Services",
    null,
    "perenz12@yahoo.com"
  ),
  tel: tel("(786) 624-0376"),
  webmail: "contact@peterrenzlimoservices.com",
  theme: {
    brand: "#f16820",
    accent: "#060709",
  },
  //
  user: {
    name: "Emanuel",
    email: "dehphantom@yahoo.com",
    imageUrl: "/images/my-avatar.png",
  },
  //
  userNavigation: [
    { name: "My Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Logout", href: "#" },
  ],
  //
  navigation: [
    { name: "Dashboard", href: "/dashboard", current: true },
    { name: "Brands", href: "/brands", current: false },
    { name: "Products", href: "/products", current: false },
    { name: "Reports", href: "#", current: false },
  ],
};
