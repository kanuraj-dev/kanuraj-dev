import P1 from "assets/image/portfolio/1.png";
import P2 from "assets/image/portfolio/2.png";
import P3 from "assets/image/portfolio/3.png";
import P4 from "assets/image/portfolio/4.png";
import P5 from "assets/image/portfolio/5.png";
import P6 from "assets/image/portfolio/6.png";
import P7 from "assets/image/portfolio/7.png";
import P8 from "assets/image/portfolio/8.png";
import P9 from "assets/image/portfolio/9.png";
import P10 from "assets/image/portfolio/10.png";
import P11 from "assets/image/portfolio/11.png";
import P12 from "assets/image/portfolio/12.png";

export type PortfolioItem = {
  title: string;
  description: string;
  url: string | null;
  image: string;
};

export const portfolioImages: string[] = [P1, P2, P3, P4, P5];

const portfolioData: Array<PortfolioItem> = [
  {
    title: "CodeEffect",
    description:
      "Created a fully functional bilingual business website for the client using NextJs and AntDesign.",
    url: "https://www.codeeffect.io/",
    image: P1,
  },
  {
    title: "Ryong Konzept",
    description:
      "Created a menu web application using NextJs, NetlifyCMS, and SwiperJs.",
    url: "https://menu.ryong.de/",
    image: P2,
  },
  {
    title: "Alphadragon",
    description:
      "Created an NFT website for the client using the GIF provided. The tech stack used was ReactJS and CSS.",
    url: "https://alphadrago.com/",
    image: P3,
  },
  {
    title: "Raseet Health",
    description:
      "I developed website, applications and user dashboards using ReactJs and other packages. I previously worked in the same company as a Lead Front-end Developer.",
    url: "https://www.raseet.com/",
    image: P4,
  },
  {
    title: "BrighterBlu",
    description: "Developed a mood-tracking web app using NextJs and Supabase.",
    url: "https://www.brighterblu.com/",
    image: P5,
  },
  {
    title: "JusticeDenied",
    description:
      "Developed this site using NextJs and Supabase for an Australian court case.",
    url: "https://www.justicedenied.com/",
    image: P6,
  },
  {
    title: "BrighterBlu Blog",
    description: "Created this Blog site using NextJs and NetlifyCMS.",
    url: "https://blog.brighterblu.com/",
    image: P7,
  },
  {
    title: "DOS Phnom",
    description:
      "Created a fully functional internal dashboard webapp for the client using NextJs and AntDesign.",
    url: null,
    image: P8,
  },
  {
    title: "PhotuFind",
    description:
      "Search through Millions of images with this Clean & Simple App",
    url: "https://photufind.web.app/",
    image: P9,
  },
  {
    title: "URL Tools",
    description: "2 IN 1 App for converting link to QR code & shortening them",
    url: "https://urltools-101.web.app/",
    image: P10,
  },
  {
    title: "Online Dhaba",
    description: "Delicious Online Food Ordering WebApp, just like its name",
    url: "https://online-dhaba-101.web.app/",
    image: P11,
  },
  {
    title: "SuppNotes",
    description: "Clean & simple designed App keeping notes",
    url: "https://suppnotes-101.web.app/",
    image: P12,
  },
];

export default portfolioData;
