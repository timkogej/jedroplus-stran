// Generated from Slovenian source and src/locales/en.json.
// Shared pricing for visible plans and structured data.
export interface Tier {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  subtitle: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaLabel: string;
  ctaHref?: string;
}

export const subscriptionPlans: Tier[] = [
  {
    name: "Free",
    monthlyPrice: "0 €",
    yearlyPrice: "0 €",
    subtitle: "Get started with a basic calendar and clients, free forever",
    description: "Calendar, appointments and clients for solo businesses getting started.",
    features: [
      "Calendar, appointments and clients",
      "Unlimited services and staff",
      "1 app user",
      "Client import from Excel",
      "One-time reminder trial (SMS and email)",
    ],
    ctaLabel: "Start for free",
    ctaHref: "https://app.jedroplus.com/signup",
  },
  {
    name: "Jedro Plus",
    monthlyPrice: "14.90 €",
    yearlyPrice: "11.90 €",
    subtitle: "For businesses seeking an organised system and a clear overview",
    description: "Calendar, databases and reminders to simplify your day.",
    features: [
      "Client and appointment database",
      "Services and staff database",
      "Personalised reminders before and after appointments",
      "Email sending (500 emails/month)",
      "SMS reminders with optional packs (from €4 for 50 SMS)",
      "Communication",
      "Full analytics",
      "Online booking",
      "A choice of online booking designs",
    ],
    ctaLabel: "Choose plan",
  },
  {
    name: "Jedro Pro",
    monthlyPrice: "29.90 €",
    yearlyPrice: "24.90 €",
    subtitle: "For businesses seeking higher occupancy and fewer empty slots",
    description:
      "Includes inactive-client notifications, SMS reminders and advanced communication tools.",
    features: [
      "Everything in Jedro Plus",
      "Inactive-client notifications",
      "SMS sending (250 SMS/month)",
      "Email sending (2,000 emails/month)",
      "Additional online booking designs",
    ],
    popular: true,
    ctaLabel: "Choose plan",
  },
  {
    name: "Enterprise",
    monthlyPrice: "On request",
    yearlyPrice: "On request",
    subtitle: "For businesses with specific requirements and customisation needs",
    description:
      "We tailor designs, features and the whole system to your business.",
    features: [
      "Custom AI features (receptionist and more)",
      "Custom booking designs with image processing and advanced elements",
      "Custom business process automation",
      "Custom SMS and email allowances",
      "Dedicated manager and priority support",
    ],
    ctaLabel: "Send an enquiry",
    ctaHref: "mailto:info@jedroplus.com?subject=Enterprise%20enquiry",
  },
];

// Reviewed plan limits; columns follow subscriptionPlans order.
export const planComparisonRows = [
  { label: "Calendar, appointments and clients", values: ["Included", "Included", "Included", "On request"] },
  { label: "Online booking and analytics", values: ["Not included", "Included", "Included", "On request"] },
  { label: "Personalised reminders", values: ["One-time trial", "Before and after appointments", "Before and after appointments", "On request"] },
  { label: "Email messages", values: ["One-time trial", "500 per month", "2,000 per month", "Custom allowance"] },
  { label: "SMS messages", values: ["One-time trial", "Add-on: from €4 for 50 SMS", "250 per month", "Custom allowance"] },
  { label: "Custom SMS sender name", values: ["Not included", "Not included", "Add-on: €4.90 per month", "On request"] },
  { label: "Inactive-client notifications", values: ["Not included", "Not included", "Included", "On request"] },
  { label: "Receptionist+ minutes", values: ["Separate purchase", "Separate purchase", "Separate purchase", "Separate purchase"] },
];

export const PRICING_TAX_NOTE = "All prices are in EUR, excluding VAT.";
