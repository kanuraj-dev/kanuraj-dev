import WebDevelopmentImg from "assets/image/services/web-development.png";
import ResponsiveDesignImg from "assets/image/services/responsive-design.png";
import EmailTemplateImg from "assets/image/services/email-template.png";
import AnalyticsImg from "assets/image/services/analytics.png";

export type ServiceType = {
  title: string;
  description: string;
  image: string;
};

const services: ServiceType[] = [
  {
    title: "Web Development",
    description:
      "Here we help you build your online presence with eye-catching Web Apps, to grow your business.",
    image: WebDevelopmentImg,
  },
  {
    title: "Responsive Design",
    description:
      "High converting and individual websites that format across all devices from desktops to tablets and mobiles.",
    image: ResponsiveDesignImg,
  },
  {
    title: "Email Templates",
    description:
      "You are at the right place to build reliable, high converting email templates for your ad campaigns",
    image: EmailTemplateImg,
  },
  {
    title: "Analytics",
    description:
      "Keep an eye on your business from anywhere around the world, with Digital Analytics & Reports.",
    image: AnalyticsImg,
  },
];

export default services;
