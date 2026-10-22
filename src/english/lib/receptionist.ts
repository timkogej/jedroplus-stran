// Generated from Slovenian source and src/locales/en.json.
// Shared by the product page, the pricing page and structured data.
export const RECEPTIONIST_PATH = "/en/features/receptionist-plus";
export const RECEPTIONIST_APP_URL = "https://app.jedroplus.com/receptionist-plus";
export const RECEPTIONIST_TRIAL_CREDITS = 30;
export const RECEPTIONIST_CREDITS_PER_MINUTE = 1;
export const RECEPTIONIST_GREETING = "Salon Luna, hello! I’m the salon’s digital assistant. How can I help you?";

export const receptionistPacks = [
  { name: "Starter", credits: 100, price: 15, description: "For your first calls and lighter usage." },
  { name: "Standard", credits: 300, price: 39, description: "For businesses where the phone rings every day." },
  { name: "Professional", credits: 750, price: 89, description: "For more conversations and a larger team." },
];

export function receptionistMinuteRate(pack: { price: number; credits: number }) {
  return new Intl.NumberFormat("en-GB", { minimumFractionDigits: 3, maximumFractionDigits: 3 }).format(pack.price / pack.credits);
}

export const receptionistPricingAnswer = `Choose from our call minute packs. ${receptionistPacks.map((pack) => `The ${pack.name} pack includes ${pack.credits} minutes for ${pack.price} €`).join(". ")}. On first activation, you receive ${RECEPTIONIST_TRIAL_CREDITS} free trial minutes. Call minutes are purchased separately from your Jedro+ subscription. Prices exclude VAT.`;

export const receptionistUsageFaq = [
  { q: "Do Receptionist+ minutes expire?", a: "No. Purchased Receptionist+ minutes do not expire. They stay on your account for future calls, so you can use them to suit your business needs." },
  { q: "How is a call shorter than a minute charged?", a: "Usage is calculated in proportion to the conversation’s duration. For example, a 30-second conversation uses 0.5 minutes from your pack, and 90 seconds uses 1.5 minutes. You can track usage in the Jedro+ app." },
  { q: "Does each business get its own phone number?", a: "Yes. Every business receives its own phone number for Receptionist+. Our team at info@jedroplus.com helps set up the phone service and check your number’s settings." },
];

export const receptionistFaq = [
  { q: "What is Receptionist+?", a: "Receptionist+ is the AI receptionist within Jedro+. It answers calls in the client’s language, books, reschedules or cancels appointments, answers questions, sends reminders and records the agreement. It helps service businesses reduce interruptions and organise phone bookings." },
  { q: "Which language does it speak?", a: "Receptionist+ speaks the client’s language so each person can communicate comfortably, arrange an appointment or get an answer." },
  { q: "How much does one call minute cost?", a: receptionistPricingAnswer },
  { q: "Am I buying minutes or a Receptionist+ subscription?", a: "The 100, 300 and 750-minute packs are one-time purchases of call minutes, separate from your Jedro+ subscription. Choose a pack to suit your call volume and buy more minutes as needed. Activation requires a Jedro+ account." },
  { q: "Are appointments automatically added to Jedro+?", a: "Yes. Receptionist+ connects to your Jedro+ calendar and can create appointments agreed over the phone directly in the system. The call log also links to the appointment." },
  { q: "Can it reschedule or cancel appointments too?", a: "Yes. At the client’s request, Receptionist+ can create a new booking, move an existing appointment to another free slot or cancel it. Changes are recorded in your Jedro+ calendar." },
  { q: "Can it send a reminder?", a: "Yes. Receptionist+ can send a reminder for an agreed appointment. Appointments, changes and communication stay connected in Jedro+." },
  { q: "Can I review conversations and usage?", a: "Yes. The call log shows the time, duration, minutes used and outcome. It also shows a transcript where available and links to the created appointment." },
  { q: "Can I turn the AI receptionist off?", a: "Yes. Turn Receptionist+ on or off in settings, where you can also edit the greeting and low-minute alert threshold." },
  { q: "How do I start and connect a phone number?", a: "Open Receptionist+ in your Jedro+ account and activate it. On first activation, you receive 30 free trial minutes. Each business gets its own phone number; email info@jedroplus.com for phone setup and a settings check." },
  { q: "How do we set up Receptionist+ in another EU country?", a: "Jedro+ is available to businesses across the EU. For Receptionist+, we check phone number availability and phone service settings for your business’s country during activation. Send your preferred country and language to info@jedroplus.com." },
  ...receptionistUsageFaq,
];
