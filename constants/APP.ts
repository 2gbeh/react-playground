import { mailto, tel } from "@/utils/formatHref";

export const APP = {
  url: "https://peterrenzlimoservices.com",
  domain: "peterrenzlimoservices.com",
  name: "Peter Renz Limo Services Corp",
  name_short: "Peter Renz Limo Services",
  address: "2930 NW 55th ave apt 1B Lauderhill FL 33313",
  address_line1: "2930 NW 55th ave apt 1B",
  address_line2: "Lauderhill FL 33313",
  email: "perenz12@yahoo.com",
  phone: "(786) 624-0376",
  mailto: mailto(
    "contact@peterrenzlimoservices.com",
    "Re: Prospective Client - Peter Renz Limo Services",
    null,
    "perenz12@yahoo.com",
  ),
  tel: tel("(786) 624-0376"),
  webmail: "contact@peterrenzlimoservices.com",
  theme: {
    brand: "#f16820",
    accent: "#060709",
  },
  opacity: {
    point5: "#0000000d",
    point10: "#0000001a",
    point15: "#00000026",
    point20: "#00000033",
    point25: "#00000040",
    point30: "#0000004d",
    point35: "#00000059",
    point40: "#00000066",
    point45: "#00000073",
    point50: "#00000080",
    point55: "#0000008c",
    point60: "#00000099",
    point65: "#000000a6",
    point70: "#000000b3",
    point75: "#000000bf",
    point80: "#000000cc",
    point85: "#000000d9",
    point90: "#000000e6",
    point95: "#000000f2",
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
