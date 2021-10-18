export type PricingDataType = {
  title: string;
  amount: number;
  features: Array<string>;
};

const pricingPlans = [
  {
    title: "Standard Plan",
    amount: 2999,
    features: [
      "1 Free Domain Name",
      "Single Page (Dynamic/Static Website)",
      "Business Email id",
      "Unlimited Images & Videos",
      "Unlimited (Bandwidth/ Space)",
      "SEO Ready Website",
      "Email Integration",
      "100% Responsive Website",
      "Social Media Integration",
      "SSL Certificate",
      "24/7 Support (Phone/Email/Chat)",
      "Annual Renewal Rs. 1999",
    ],
  },
  {
    title: "Advanced Plan",
    amount: 4999,
    features: [
      "1 Free Domain Name",
      "UL Pages* (Dynamic Website)",
      "Unlimited Email id",
      "Unlimited Images & Videos",
      "Unlimited (Bandwidth/ Space)",
      "SEO (Express) Ready Website",
      "100% Responsive Website",
      "Payment Gateway Integration",
      "Social Media Integration",
      "Dashboard Access",
      "SSL Certificate",
      "24/7 Support (Phone/Email/Chat)",
      "Annual Renewal Rs. 2999",
    ],
  },
];

export default pricingPlans;
