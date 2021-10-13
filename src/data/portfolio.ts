import OnlineDhaba from "assets/image/online-dhaba.png";
import PhotuFind from "assets/image/photufind.png";
import ShopWorld from "assets/image/shop-world.png";
import UrlTools from "assets/image/urltools.png";
import SuppNotes from "assets/image/suppnotes.png";

export type PortfolioItem = {
  title: string;
  description: string;
  url: string;
  image: string;
};

const portfolioData: Array<PortfolioItem> = [
  {
    title: "Online Dhaba",
    description: "Delicious Online Food Ordering WebApp, just like its name",
    url: "https://online-dhaba-101.web.app/",
    image: OnlineDhaba,
  },
  {
    title: "Photu Find",
    description:
      "Search through Millions of images with this Clean & Simple App",
    url: "https://photufind.web.app/",
    image: PhotuFind,
  },
  {
    title: "Shop World",
    description: "Modern Design WebApp for Online Shopping Site",
    url: "https://shopworld18.vercel.app/",
    image: ShopWorld,
  },
  {
    title: "Url Tools",
    description: "2 IN 1 App for converting link to QR code & shortening them",
    url: "https://urltools-101.web.app/",
    image: UrlTools,
  },
  {
    title: "SuppNotes",
    description: "Clean & simple designed App keeping notes",
    url: "https://suppnotes-101.web.app/",
    image: SuppNotes,
  },
];

export default portfolioData;
