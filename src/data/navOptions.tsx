import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import MailIcon from "@mui/icons-material/Mail";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";

const navOptions = [
  {
    icon: <HomeRepairServiceIcon />,
    to: "services#our-services",
    label: "Services",
  },
  { icon: <LocalOfferIcon />, to: "pricing-plans#pricing", label: "Pricing" },
  { icon: <MailIcon />, to: "contact#contact-us", label: "Contact" },
  {
    icon: <BackupTableIcon />,
    to: "our-portfolio#portfolio",
    label: "Portfolio",
  },
  { icon: <LaptopChromebookIcon />, to: "blogs#blogs", label: "Blogs" },
];

export default navOptions;
