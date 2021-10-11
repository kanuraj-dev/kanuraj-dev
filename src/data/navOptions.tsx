import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailIcon from "@mui/icons-material/Mail";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const navOptions = [
  {
    icon: <HomeRepairServiceIcon />,
    to: "/our-services",
    label: "Services",
  },
  { icon: <LocalOfferIcon />, to: "/pricing", label: "Pricing" },
  // { icon: <TelegramIcon />, to: "/about-us", label: "About Us" },
  { icon: <MailIcon />, to: "/contact-us", label: "Contact" },
];

export default navOptions;
