// Generated from Slovenian source and src/locales/en.json.
import { receptionistPricingAnswer, receptionistUsageFaq } from "@/english/lib/receptionist";

// FAQ content for the redesign pages. Answers are written in natural language,
// 2–4 sentences, so they read well and are quotable. Panoga-specific FAQs live
// on each Panoga in panoge-data.ts.

export type FaqItem = { q: string; a: string };

export const homeFaq: FaqItem[] = [
  {
    q: "When can we start using Jedro+?",
    a: "Straight away. Create an account, enter your business details and the system is ready in minutes. We can help import your existing client database so you can start taking bookings immediately.",
  },
  {
    q: "Are reminders really personalised?",
    a: "Yes. AI writes every message individually, adapting it to the service, appointment, team member and your business’s tone. Clients receive a personal message at the right time, without taking up your time.",
  },
  {
    q: "Does Jedro+ support email and SMS reminders?",
    a: "Yes. Email reminders are included in all paid plans. SMS reminders are included in Jedro Pro (250 SMS per month) and Enterprise. With Jedro Plus, you can buy SMS as needed, from €4 for 50 SMS. Reminders go out automatically before and after appointments.",
  },
  {
    q: "What are “inactive clients” and how does this help?",
    a: "The Inactive clients feature identifies people who have not visited for a while and invites them back automatically. This helps fill empty slots and recover missed revenue.",
  },
  {
    q: "How is data kept secure?",
    a: "Data is stored securely, access is restricted, and processing follows good security practices and GDPR requirements. Your data and your clients’ data stay confidential and under your control.",
  },
  {
    q: "How much does it cost, and can I start free?",
    a: "Start with the Free plan, free forever. Jedro Plus costs €14.90 per month or €142.80 billed annually (€11.90 per month). Receptionist+ minutes are purchased separately. Compare all plans and options on the Pricing page.",
  },
];

export const agencijaFaq: FaqItem[] = [
  {
    q: "What does Jedro+ Agency offer?",
    a: "We develop business systems, communication systems and websites for service businesses. Everything is built on AI and delivered by one team, from your business system to your website.",
  },
  {
    q: "How quickly can you build a system or website?",
    a: "We measure projects in days and weeks. We get your business up and running quickly, with quality built into the work.",
  },
  {
    q: "What makes Jedro+ Agency different?",
    a: "We specialise in service businesses and understand appointments, clients and everyday operations. Our AI-based solutions work smarter, faster and more automatically.",
  },
  {
    q: "Can you connect everything in one system?",
    a: "Yes. We combine operations, communication and online presence in one platform, from appointments and clients to booking, messaging and reports.",
  },
];

export const cenikFaq: FaqItem[] = [
  { q: "Do prices include VAT?", a: "No. All displayed prices are in euros (EUR), excluding VAT. This applies to subscription plans and Receptionist+ minute packs." },
  {
    q: "How much do I actually pay with annual billing?",
    a: "You pay €142.80 for a full year of Jedro Plus (equivalent to €11.90 per month) or €298.80 for a full year of Jedro Pro (equivalent to €24.90 per month). The monthly figure under annual billing is a cost comparison, not a monthly payment. Compared with twelve monthly payments, you save €36 on Plus or €60 on Pro.",
  },
  {
    q: "What does Free include, and when should I choose a paid plan?",
    a: "Free includes a calendar, appointments and clients, unlimited services and staff, one app user, client import from Excel and a one-time trial of SMS and email reminders. Choose Jedro Plus or Pro for online booking, analytics and ongoing personalised reminders.",
  },
  {
    q: "What SMS and email allowances are included?",
    a: "Jedro Plus includes 500 emails per month; SMS packs are available from €4 for 50 SMS. Jedro Pro includes 2,000 emails and 250 SMS per month. Enterprise allowances are agreed individually. Receptionist+ call minutes are separate from these allowances.",
  },
  {
    q: "Can I try Jedro+ for free?",
    a: "Yes. Start free with no credit card and upgrade when you’re ready. We can also show you Jedro+ in a 15-minute demo.",
  },
  {
    q: "How much do the plans cost?",
    a: "Free is free forever. Jedro Plus is €14.90 per month and Jedro Pro €29.90 per month (€11.90 and €24.90 per month respectively with annual billing). Enterprise pricing is on request. All paid plans include databases, an appointment calendar, online booking and analytics.",
  },
  {
    q: "What is the difference between Plus and Pro?",
    a: "Jedro Plus includes a calendar, databases and reminders for an organised overview. Jedro Pro adds inactive-client notifications, SMS reminders and advanced communication features to help fill your schedule.",
  },
  {
    q: "Is there a contract, and how do I cancel?",
    a: "Choose monthly or annual billing. The annual amount is paid for a full year; the displayed monthly price is its monthly equivalent. You can cancel in the app under the Terms of Use.",
  },
];

const receptionistPricingFaq: FaqItem = {
  q: "Is Receptionist+ included in my subscription?",
  a: receptionistPricingAnswer,
};

homeFaq.push(receptionistPricingFaq);
cenikFaq.push(receptionistPricingFaq);

cenikFaq.push(...receptionistUsageFaq);

const europeanAvailabilityFaq: FaqItem[] = [
  { q: "Can we use Jedro+ outside Slovenia?", a: "Yes. Jedro+ is available to service businesses across the European Union. We tailor setup to your services, team and workflow. The fiscal cash register with FURS invoice confirmation is a separate module for Slovenia." },
  { q: "Can you adapt Jedro+ to another language?", a: "Yes, additional language customisation is available by arrangement. The website currently supports Slovenian, English, Italian and German; the app supports Slovenian and English. Contact info@jedroplus.com to agree your language and the scope before setup." },
];
homeFaq.push(...europeanAvailabilityFaq);
cenikFaq.push(...europeanAvailabilityFaq);
