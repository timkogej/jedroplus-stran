// Generated from Slovenian source and src/locales/en.json.
import { CalendarCheck2, Check, Clock3, LayoutGrid, MessageSquareText, QrCode, Sparkles, Tag, UsersRound } from "lucide-react";

const previews = {
  "sms-reminders": { icon: MessageSquareText, title: "The right time. The right message.", label: "Appointment reminder", rows: [["Client", "Ana"], ["Appointment", "Thursday, 14:30"], ["Service", "Haircut"]], message: "Hello Ana! Your haircut is tomorrow at 14:30. We look forward to seeing you.", result: "Reminder linked to the appointment" },
  "online-booking": { icon: CalendarCheck2, title: "Your next visit.", label: "Online booking", rows: [["Choose a service", "Haircut"], ["Team member", "Maja"], ["Available slot", "Thursday, 14:30"]], message: "The client chooses a service, team member and time. The booking appears in your calendar.", result: "From choosing to booking" },
  "client-crm": { icon: UsersRound, title: "Every client has a story.", label: "Client card", rows: [["Client", "Ana"], ["Last visit", "Haircut"], ["Note", "Prefers afternoon appointments"]], message: "Contacts, visit history and important notes stay in one place.", result: "Connected to visit history" },
  "ai-communication": { icon: Sparkles, title: "Words in your voice.", label: "AI communication", rows: [["Message type", "Thank-you after a visit"], ["Tone", "Personal and friendly"], ["Recipient", "Ana"]], message: "Ana, thank you for visiting today! We’re glad you took some time for yourself. See you at your next appointment.", result: "Personalised for the client and service" },
  "promotions-discounts": { icon: Tag, title: "An offer at the right moment.", label: "Example promotion", rows: [["Promotion", "Afternoon offer"], ["Service", "Selected service"], ["Example discount", "10 %"]], message: "Set the promotion rules, eligible services and validity period.", result: "Your rules, your offer" },
  "resources": { icon: LayoutGrid, title: "Rooms need a schedule too.", label: "Rooms and equipment", rows: [["Appointment", "Massage, 14:30"], ["Team member", "Maja"], ["Room", "Treatment room 1"]], message: "Plan appointments around the team member, room and required equipment.", result: "Resources linked to the appointment" },
  "appointment-requests": { icon: Clock3, title: "Clients request. You confirm.", label: "Appointment request", rows: [["Client", "Ana"], ["Service", "Consultation"], ["Preferred time", "Thursday afternoon"]], message: "Review the client’s request and confirm an exact time that fits your schedule.", result: "Review before confirming" },
  "booking-designs-qr-codes": { icon: QrCode, title: "Your brand. Your booking experience.", label: "Booking designs and QR codes", rows: [["Appearance", "In your brand colours"], ["Channel", "Website, Instagram or reception desk"], ["Destination", "Your booking page"]], message: "Share a link or print a QR code that takes clients to online booking.", result: "A shorter path to the next appointment" },
};

export function FeaturePreview({ slug }: { slug: string }) {
  const preview = previews[slug as keyof typeof previews];
  if (!preview) return null;
  const Icon = preview.icon;
  return (
    <figure className="feature-preview">
      <div className="feature-preview__brand"><span>Jedro+</span><small>{preview.label}</small></div>
      <div className="feature-preview__body"><span className="feature-preview__icon"><Icon size={30} strokeWidth={1.4} aria-hidden="true" /></span><p className="feature-preview__title">{preview.title}</p><dl>{preview.rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="feature-preview__message">{preview.message}</p><div className="feature-preview__result"><Check size={16} aria-hidden="true" />{preview.result}</div></div>
      <figcaption>Illustration using sample data.</figcaption>
    </figure>
  );
}
