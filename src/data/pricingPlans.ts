export type PricingDataType = {
  title: string;
  amount: number;
  features: Array<string>;
};

const pricingPlans = [
  {
    title: "Standard Plan",
    amount: 4999,
    features: [
      "1 Free Domain Name",
      "5 Page (Dynamic Website)",
      "Business Email id",
      "Unlimited Images & Videos",
      "Unlimited (Bandwidth/ Space)",
      "SEO Ready Website",
      "100% Responsive Website",
      "Live Chat Integration",
      "Payment Gateway Integration",
      "Social Media Integration",
      "24/7 Support (Phone/Email/Chat)",
      "Annual Renewal Rs. 2500",
    ],
  },
  {
    title: "Advanced Plan",
    amount: 8999,
    features: [
      "1 Free Domain Name",
      "UL Pages* (Dynamic Website)",
      "Unlimited Email id",
      "Unlimited Images & Videos",
      "Unlimited (Bandwidth/ Space)",
      "SEO (Express) Ready Website",
      "100% Responsive Website",
      "Live Chat Integration",
      "Payment Gateway Integration",
      "Social Media Integration",
      "cPanel* Access",
      "SSL Certificate",
      "24/7 Support (Phone/Email/Chat)",
      "Annual Renewal Rs. 3500",
    ],
  },
];

export default pricingPlans;
