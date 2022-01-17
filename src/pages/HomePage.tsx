import Footer from "components/navigation/Footer";
import BackToTopButton from "components/others/BackToTopButton";
import Blogs from "components/sections/Blogs";
import ContactUs from "components/sections/ContactUs";
import MainBanner from "components/sections/MainBanner";
import OurServices from "components/sections/OurServices";
import Portfolio from "components/sections/Portfolio";
import PricingSection from "components/sections/PricingSection";
import TechnologiesUsed from "components/sections/TechnologiesUsed";

export default function HomePage() {
  return (
    <div>
      <div id="back-to-top-anchor"></div>
      <MainBanner />
      <OurServices />
      {/* <!--       <PricingSection /> --> */}
      <Portfolio />
      <ContactUs />
      <TechnologiesUsed />
      <Blogs />
      <Footer />
      <BackToTopButton />
    </div>
  );
}
