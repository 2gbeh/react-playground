import { mailto, tel } from "@/utils/formatHref";
// Lauderhill is a city in Broward County, Florida, United States
export const APP = {
  url: "https://peterrenzlimoservices.com",
  domain: "peterrenzlimoservices.com",
  name: "Peter Renz Limo Services Corp",
  name_short: "Peter Renz Limo Services",
  about:
    "We provide limousine and SUV transportation in Lauderhill, Florida and the greater Bay area.",
  description:
    "Peter Renz Limo Services provides limousine and SUV chauffeured transportation in Lauderhill, Florida and the greater Bay area. Book online or call our dedicated customer service agents 24 hours a day at (786) 624-0376.",
  keywords:
    "Peter Renz Limo,Peter Renz Limo Services,Peter Renz Limo Services Corp,limousine rental service,SUV rental service,limousine rental Lauderhill,limousine rental Florida",
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
};
