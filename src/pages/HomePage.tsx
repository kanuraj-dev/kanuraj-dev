import ContactUs from "components/sections/ContactUs";
import MainBanner from "components/sections/MainBanner";
import OurServices from "components/sections/OurServices";
import Portfolio from "components/sections/Portfolio";
import PricingSection from "components/sections/PricingSection";

export default function HomePage() {
  return (
    <div>
      <MainBanner />
      <OurServices />
      <PricingSection />
      <Portfolio />
      <ContactUs />
    </div>
  );
}
