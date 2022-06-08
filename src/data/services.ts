import WebDevelopmentImg from "assets/image/services/web-development.png";
import ResponsiveDesignImg from "assets/image/services/responsive-design.png";
import EmailTemplateImg from "assets/image/services/email-template.png";
import AnalyticsImg from "assets/image/services/analytics.png";
import AppDevelopmentImg from "assets/image/services/app-development.png";

export type ServiceType = {
  title: string;
  description: string;
  image: string;
};

const services: ServiceType[] = [
  {
    title: "Web Development",
    description:
      "Here we help you build your online presence with eye-catching modern Web apps, to take your business to the moon.",
    image: WebDevelopmentImg,
  },
  {
    title: "Responsive Design",
    description:
      "High converting and individual websites that format across all devices from desktops to tablets and mobiles.",
    image: ResponsiveDesignImg,
  },
  {
    title: "App Development",
    description:
      "Converting your existing website to an application or creating one from scratch, we got your back for both of them.",
    image: AppDevelopmentImg,
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
