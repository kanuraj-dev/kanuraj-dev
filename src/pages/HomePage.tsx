import MainBanner from "components/sections/MainBanner";
import OurServices from "components/sections/OurServices";
import PricingSection from "components/sections/PricingSection";

export default function HomePage() {
  return (
    <div>
      <MainBanner />
      <OurServices />
      <PricingSection />
    </div>
  );
}
