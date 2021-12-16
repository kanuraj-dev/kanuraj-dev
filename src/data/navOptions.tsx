import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import MailIcon from "@mui/icons-material/Mail";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";

export type navOptionType = {
  icon: any;
  to: string;
  label: string;
};

const navOptions: navOptionType[] = [
  {
    icon: <HomeRepairServiceIcon />,
    to: "#our-services",
    label: "Services",
  },
  { icon: <BackupTableIcon />, to: "#portfolio", label: "Portfolio" },
  { icon: <MailIcon />, to: "#contact-us", label: "Contact" },
//   {
//     icon: <BackupTableIcon />,
//     to: "#portfolio",
//     label: "Portfolio",
//   },
  { icon: <LaptopChromebookIcon />, to: "#blogs", label: "Blogs" },
];

export default navOptions;
