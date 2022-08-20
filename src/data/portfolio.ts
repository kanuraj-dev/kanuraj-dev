import OnlineDhaba from "assets/image/portfolio-old/online-dhaba.png";
import PhotuFind from "assets/image/portfolio-old/photufind.png";
import ShopWorld from "assets/image/portfolio-old/shop-world.png";
import UrlTools from "assets/image/portfolio-old/urltools.png";
import SuppNotes from "assets/image/portfolio-old/suppnotes.png";
import Brighterblu from "assets/image/portfolio-old/brighterblu.png";
import Justicedenied from "assets/image/portfolio-old/justicedenied.png";

import P1 from "assets/image/portfolio/1.png";
import P2 from "assets/image/portfolio/2.png";
import P3 from "assets/image/portfolio/3.png";
import P4 from "assets/image/portfolio/4.png";
import P5 from "assets/image/portfolio/5.png";

export type PortfolioItem = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export const portfolioImages: string[] = [P1, P2, P3, P4, P5];

const portfolioData: Array<PortfolioItem> = [
  {
    title: "JusticeDenied",
    description:
      "Together we stand, divided we fall. Lets fight the unjustice done by corrupted judges.",
    url: "https://www.justicedenied.com.au/",
    image: Justicedenied,
  },
  {
    title: "BrighterBlu",
    description:
      "Have a track of your mood and improve it with the help of Brighterblu",
    url: "https://www.brighterblu.com/",
    image: Brighterblu,
  },
  {
    title: "PhotuFind",
    description:
      "Search through Millions of images with this Clean & Simple App",
    url: "https://photufind.web.app/",
    image: PhotuFind,
  },
  {
    title: "Online Dhaba",
    description: "Delicious Online Food Ordering WebApp, just like its name",
    url: "https://online-dhaba-101.web.app/",
    image: OnlineDhaba,
  },
  {
    title: "URL Tools",
    description: "2 IN 1 App for converting link to QR code & shortening them",
    url: "https://urltools-101.web.app/",
    image: UrlTools,
  },
  // {
  //   title: "Shop World",
  //   description: "Modern Design WebApp for Online Shopping Site",
  //   url: "https://shopworld18.vercel.app/",
  //   image: ShopWorld,
  // },
  {
    title: "SuppNotes",
    description: "Clean & simple designed App keeping notes",
    url: "https://suppnotes-101.web.app/",
    image: SuppNotes,
  },
];

export default portfolioData;
