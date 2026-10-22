// Generated from Slovenian source and src/locales/en.json.
// Content for each /panoge/[slug] subpage. The CTA band is identical across
// pages and is rendered directly in the page template.

import type { FaqItem } from "./faq-data";

export type PanogaListItem = { b: string; rest: string };
export type PanogaCard = { title: string; text: string };
export type PanogaMessage = { dir: "out" | "in"; text: string };

export type Panoga = {
  title: string; // h1 (may contain "&")
  heroTag: string; // hero placeholder label
  mediaTag: string; // split media placeholder label
  heroSub: string;
  lead: string;
  pains: string[]; // dodatni uvodni odstavki o specifičnih bolečinah panoge
  list: PanogaListItem[];
  useCasesHead: string; // h2 fragment za sekcijo use-casov
  useCases: PanogaCard[]; // 3–4 konkretni use-casi
  msgHead: string; // h2 za primer sporočila
  messages: PanogaMessage[]; // primer dejanskega opomnika
  cards: PanogaCard[]; // "kaj pridobite" – funkcijske kartice
  whyTitle: string; // h2 "zakaj … izberejo Jedro+"
  whyLead: string;
  whyList: PanogaListItem[];
  faq: FaqItem[]; // panoga-specific FAQ (3–4 items)
};

export const panoge: Record<string, Panoga> = {
  "hair-salons": {
    title: "Hair, beauty & barber salons",
    heroTag: "PHOTO — wide view of a hair and barber salon",
    mediaTag: "PHOTO — serving a client in a hair salon",
    heroSub:
      "Jedro+ handles bookings and reminders so you can focus on the client in your chair.",
    lead: "Every empty salon slot costs revenue. Jedro+ sends timely reminders in your voice, invites inactive clients back and offers online booking 24/7, without replying to messages manually.",
    pains: [
      "A salon day revolves around the chair, yet calls interrupt colour treatments and haircuts. Someone needs to reschedule, another wants a price, and a no-show leaves an hour that is hard to fill at short notice.",
      "Salon clients return in cycles: haircuts every four to six weeks, colour refreshes every three. A break in that rhythm often means they simply forgot to book again. Jedro+ helps keep them on track.",
    ],
    list: [
      { b: "Fewer cancellations", rest: " — timely reminders reduce no-shows" },
      { b: "More repeat visits", rest: " — automated follow-ups after a service" },
      { b: "Online booking", rest: " — in your colours, with no coding" },
    ],
    useCasesHead: "Four problems made simpler",
    useCases: [
      { title: "Empty slots during the day", text: "Clients get a reminder the day before and on the morning of their appointment. Fewer forgotten visits mean fewer hours with an empty chair." },
      { title: "Clients who will “book soon”", text: "Jedro+ notices when someone has not visited for seven weeks and sends a friendly invitation. Fill quieter weekday slots without making calls." },
      { title: "Calls while you work", text: "Online booking accepts reservations while you cut hair. Clients choose their stylist, service and slot, leaving you an organised schedule instead of missed calls." },
      { title: "Multiple stylists, one calendar", text: "Each team member has their own schedule, breaks and services. Appointments do not overlap, and clients see only genuinely available slots." },
    ],
    msgHead: "A reminder from your salon",
    messages: [
      { dir: "out", text: "Hello Maja! ✂️ Your colour and blow-dry appointment with Nika is tomorrow at 16:00. Message us if anything changes — otherwise, see you then! 💜" },
      { dir: "out", text: "Hi Tina! It’s been six weeks since your last haircut 😊 We have a slot on Thursday morning. Shall we book it for you? One click and it’s sorted." },
      { dir: "in", text: "Yes please! Thanks for the reminder 🙏" },
    ],
    cards: [
      { title: "Smart scheduling", text: "Appointments, breaks and multiple stylists in one place." },
      { title: "Client database", text: "Every client’s visit history, colours and preferences." },
      { title: "Automated reminders", text: "SMS or email before the appointment, sent automatically." },
    ],
    whyTitle: "Why hair salons choose Jedro+",
    whyLead: "Jedro+ is set up around your salon’s services, stylists and tone of voice. Once running, reminders, confirmations and invitations to return go out automatically, saving you time.",
    whyList: [
      { b: "Set up for you", rest: " — we import your services, prices and team so you can start taking bookings." },
      { b: "Messages in your voice", rest: " — warm and personal, so clients recognise your salon’s voice." },
      { b: "Everything in one place", rest: " — schedules, client records with colour history and preferences, and reminders." },
      { b: "No long-term commitment", rest: " — try it free and see the impact from your first appointments." },
    ],
    faq: [
      {
        q: "Can clients book online themselves?",
        a: "Yes. Jedro+ offers 24/7 online booking in your colours and with your logo, with no coding. Clients book any time, saving you from replying to booking messages.",
      },
      {
        q: "How does Jedro+ reduce cancellations and no-shows?",
        a: "The system sends timely SMS or email reminders before appointments, helping reduce forgotten visits and cancellations.",
      },
      {
        q: "Can I manage schedules for several stylists?",
        a: "Yes. Smart scheduling brings appointments, breaks and multiple stylists into one overview of the whole salon.",
      },
      {
        q: "Does Jedro+ store client history and preferences?",
        a: "Yes. Client records store visit history, colours used and preferences, helping tailor each service.",
      },
    ],
  },
  "clinics": {
    title: "Dental, aesthetic & medical clinics",
    heroTag: "PHOTO — bright dental or aesthetic clinic",
    mediaTag: "PHOTO — clinic reception and treatment",
    heroSub:
      "Each patient gets the right instructions before and after treatment, while you keep a complete appointment overview.",
    lead: "Timely instructions before and after treatment build trust and a professional impression. See appointments, statuses and visit history without lost records or duplicate entries.",
    pains: [
      "Every detail matters in a clinic, from preparation to aftercare. Verbal instructions or manually sent messages can be missed. Patients arrive unprepared, treatments run late or need rescheduling, and the experience suffers.",
      "Last-minute cancellations are especially costly for clinics: long appointments, reserved equipment and prepared staff. Jedro+ reminds patients in time and shares the right instructions so they arrive prepared and on schedule.",
    ],
    list: [
      { b: "Before-treatment instructions", rest: " — automatic for each service" },
      { b: "Aftercare", rest: " — build trust and a professional impression" },
      { b: "Organised CRM", rest: " — patient history, notes and preferences" },
    ],
    useCasesHead: "Where Jedro+ helps most",
    useCases: [
      { title: "Treatment preparation", text: "Patients receive instructions for their service automatically, including what to do or avoid beforehand. Fewer treatments need rescheduling due to lack of preparation." },
      { title: "Aftercare following a visit", text: "The clinic sends care recommendations and lets patients know when a follow-up is due. Patients feel supported, building trust." },
      { title: "Costly cancellations", text: "Timely reminders reduce last-minute cancellations when staff and equipment are already prepared." },
      { title: "Scattered records", text: "Visit history, notes and recommended follow-ups stay in one place, without searching through files or duplicate entries." },
    ],
    msgHead: "A message from your clinic",
    messages: [
      { dir: "out", text: "Dear Mr Novak, your whitening appointment is tomorrow at 9:00. Please avoid coloured foods and coffee for 2 hours beforehand. See you then!" },
      { dir: "out", text: "Hello Ms Kos. Following today’s treatment, we recommend cold compresses and rest for 48 hours. Contact us with any questions — wishing you a smooth recovery! 💙" },
      { dir: "in", text: "Thank you for looking after me and for the clear instructions." },
    ],
    cards: [
      { title: "Digital patient records", text: "Patient information stored securely in one place." },
      { title: "Timely reminders", text: "Appointment reminders help reduce cancellations and late arrivals." },
      { title: "Visit tracking", text: "An overview of treatments and recommended follow-ups." },
    ],
    whyTitle: "Why clinics choose Jedro+",
    whyLead: "Patients expect reliability and clear communication. Jedro+ supports both without adding to reception’s workload. We configure the system around your services and instructions, then reminders and before- and after-treatment messages run automatically.",
    whyList: [
      { b: "Fewer cancellations", rest: " — timely reminders reduce missed high-value appointments." },
      { b: "A professional impression", rest: " — patients receive the right instructions at every step." },
      { b: "Secure data", rest: " — patient history and notes in one organised place." },
      { b: "Less work at reception", rest: " — messages and reminders go out automatically." },
    ],
    faq: [
      {
        q: "Does Jedro+ automatically send preparation and aftercare instructions?",
        a: "Yes. Patients receive timely instructions before and after treatment, automatically based on the service, building trust and a professional impression.",
      },
      {
        q: "How is patient data stored?",
        a: "Patient information is stored securely in digital records in one place, without lost files or duplicate entries. Access is restricted and GDPR compliant.",
      },
      {
        q: "Does the system help reduce cancellations?",
        a: "Yes. Automated reminders notify patients in time, helping reduce cancellations and late arrivals.",
      },
    ],
  },
  wellness: {
    title: "Massage & wellness studios, physiotherapy",
    heroTag: "PHOTO — a calm wellness or massage studio",
    mediaTag: "PHOTO — massage or physiotherapy treatment",
    heroSub:
      "From individual treatments to series and packages, Jedro+ connects everything in a calm, organised schedule.",
    lead: "Many services run as series or packages. Jedro+ connects recurring appointments, sends gentle reminders and invites inactive clients back, helping keep your schedule full and the atmosphere relaxed.",
    pains: [
      "Wellness and massage often rely on a series of treatments. Clients may stop early because they forget to book again or lose their routine. A broken series can mean weaker results for the client and lost revenue for you.",
      "A calm, relaxing atmosphere is part of your service. Jedro+ sends gentle reminders in your studio’s voice to preserve that feeling and keep your schedule full without constant manual messages.",
    ],
    list: [
      { b: "Series and packages", rest: " — linked appointments with one click" },
      { b: "Gentle reminders", rest: " — in a tone that suits your service" },
      { b: "Return visits", rest: " — automatic invitations for inactive clients" },
    ],
    useCasesHead: "Where Jedro+ makes the difference",
    useCases: [
      { title: "Interrupted treatment series", text: "After each treatment, the system suggests the next appointment at the right time so clients keep their routine and complete their package." },
      { title: "Inactive clients", text: "Clients who have not visited recently get a gentle invitation tailored to the season or their last treatment." },
      { title: "Packages and repeat visits", text: "Book several treatments together, with the system tracking how many remain." },
      { title: "Booking without interruptions", text: "Clients book through a link while you focus on their treatment." },
    ],
    msgHead: "A reminder from your studio",
    messages: [
      { dir: "out", text: "Hello Eva 🌿 Your relaxing massage is tomorrow at 17:00. Arrive a few minutes early to unwind with tea. See you then!" },
      { dir: "out", text: "Hello Nina! For the best results, we recommend your next treatment this week. Would you like us to book a slot? 💆" },
      { dir: "in", text: "Yes please, Friday afternoon 🙏" },
    ],
    cards: [
      { title: "Package appointments", text: "Several treatments booked together." },
      { title: "Suggested next visit", text: "The system suggests a booking at the right time." },
      { title: "Treatment history", text: "Track each client’s progress." },
    ],
    whyTitle: "Why wellness studios choose Jedro+",
    whyLead: "Wellness and massage studios rely on return visits and a calm atmosphere. Jedro+ supports both with timely invitations and gentle communication in your voice, automatically, so you can focus on treatments.",
    whyList: [
      { b: "More completed treatment series", rest: " — suggestions for the next appointment at the right time." },
      { b: "Gentle communication", rest: " — messages that preserve your studio’s atmosphere." },
      { b: "A full schedule", rest: " — inactive clients return without you making calls." },
      { b: "Fewer interruptions", rest: " — bookings through a link while you give treatments." },
    ],
    faq: [
      {
        q: "Can I book a series or package of appointments together?",
        a: "Yes. Jedro+ connects recurring and package appointments with one click, booking the whole treatment series together.",
      },
      {
        q: "Are reminders tailored to the treatment?",
        a: "Yes. Jedro+ sends gentle reminders in a tone suited to your service, helping clients feel relaxed and happy to return.",
      },
      {
        q: "Does Jedro+ invite inactive clients back?",
        a: "Yes. It identifies inactive clients automatically and sends a gentle invitation to return, helping keep your schedule full.",
      },
    ],
  },
  "fitness": {
    title: "Gyms, yoga, Pilates & personal trainers",
    heroTag: "PHOTO — gym or yoga studio",
    mediaTag: "PHOTO — group class or personal training",
    heroSub:
      "Group classes and personal training in one clear overview.",
    lead: "From personal training to group sessions and packages, Jedro+ notifies members, accepts bookings through a link and invites inactive members back. Less coordination by phone and messages, more filled slots.",
    pains: [
      "Gym and class schedules change weekly, and members often book late through messages you need to coordinate manually. A no-show leaves a reserved place empty after preventing someone else from booking.",
      "Members who gradually disappear are another quiet loss. They miss one week, then two, and stop returning. Jedro+ reminds and invites them back before they lose their training routine.",
    ],
    list: [
      { b: "Group sessions", rest: " — class bookings in one place" },
      { b: "Training reminders", rest: " — members remember their reserved classes" },
      { b: "Member reactivation", rest: " — invitations for inactive members to return" },
    ],
    useCasesHead: "Where Jedro+ helps most",
    useCases: [
      { title: "Empty class places", text: "Booked members get reminders before class, helping reduce unused reserved places." },
      { title: "Members who drift away", text: "Members who have not attended for a while get an encouraging invitation before they lose their routine." },
      { title: "Bookings through messages", text: "Members book through a link, saving phone coordination and showing you who is coming." },
      { title: "Personal training", text: "Personal trainers manage client sessions easily and send timely reminders." },
    ],
    msgHead: "A reminder from your studio",
    messages: [
      { dir: "out", text: "Hi Luka! 💪 Your group class is tomorrow at 18:00. See you there — remember water and a towel!" },
      { dir: "out", text: "Hi Sara! We haven’t seen you for a while 😊 We have morning yoga places this week. Join us? One click to book." },
      { dir: "in", text: "Yes, thanks for the nudge! I’ll book Wednesday 🧘" },
    ],
    cards: [
      { title: "Class schedule", text: "Sessions, capacity and bookings in one place." },
      { title: "Group bookings", text: "Members choose their own class and available slot." },
      { title: "Class reminders", text: "Automatic notifications before training." },
    ],
    whyTitle: "Why gyms and trainers choose Jedro+",
    whyLead: "Keeping members in a routine matters. Jedro+ handles bookings, class reminders and invitations for inactive members automatically, leaving you more time to coach.",
    whyList: [
      { b: "Fewer unused places", rest: " — reminders before every class." },
      { b: "Fewer phone calls", rest: " — members book through a link." },
      { b: "Returning members", rest: " — timely invitations for inactive members." },
      { b: "Attendance overview", rest: " — see who is coming and how full each session is." },
    ],
    faq: [
      {
        q: "Can members book group classes themselves?",
        a: "Yes. Members book through a link, and the system tracks bookings for every session.",
      },
      {
        q: "Does Jedro+ show available class places?",
        a: "Yes. The system shows available and booked sessions so you and your members can see capacity.",
      },
      {
        q: "Can I invite inactive members back?",
        a: "Yes. Jedro+ identifies members who have not attended for a while and automatically invites them back.",
      },
    ],
  },
  "garages": {
    title: "Garages, tyre centres & cleaning services",
    heroTag: "PHOTO — garage / workshop",
    mediaTag: "PHOTO — mechanic at work or tyre centre",
    heroSub:
      "Clients know when to visit and collect their vehicle, with fewer calls.",
    lead: "Jedro+ sends reminders when servicing or tyre changes are due and notifies clients when their vehicle is ready. Fewer calls, an organised workflow and happy returning clients.",
    pains: [
      "In garages and tyre centres, the day is split between working on vehicles and answering calls about collection times, availability and tyre changes. Calls interrupt work, often when your hands are dirty.",
      "Your services are often seasonal and predictable: spring and autumn tyre changes, servicing at mileage intervals. Clients delay until it is urgent, creating peaks. Jedro+ reminds them at the right time and spreads bookings more evenly.",
    ],
    list: [
      { b: "Service reminders", rest: " — automatic, at the right time" },
      { b: "Collection notification", rest: " — when the vehicle is ready" },
      { b: "An organised schedule", rest: " — a clear overview by day and appointment" },
    ],
    useCasesHead: "Where Jedro+ helps most",
    useCases: [
      { title: "A phone that keeps ringing", text: "Clients book through a link and receive collection updates, reducing calls while you work." },
      { title: "Seasonal peaks", text: "Before tyre-change season, the system reminds clients to spread out bookings." },
      { title: "Delayed servicing", text: "When time or mileage brings the next service closer, clients receive a reminder to book." },
      { title: "Vehicle collection", text: "When the car is ready, a notification goes out automatically, reducing calls and waiting." },
    ],
    msgHead: "A notification from your garage",
    messages: [
      { dir: "out", text: "Hello Mr Horvat. Your Golf has been serviced and is ready for collection. We’re open until 17:00. Best wishes, your garage team! 🔧" },
      { dir: "out", text: "Hello! It’s nearly time to fit your summer tyres 🛞 We have slots next week. Would you like us to reserve one?" },
      { dir: "in", text: "Yes, is Tuesday morning possible? Thank you!" },
    ],
    cards: [
      { title: "Appointment booking", text: "Clients choose their own available slot." },
      { title: "Seasonal reminders", text: "Winter and summer tyres at the right time." },
      { title: "Vehicle history", text: "An overview of completed services." },
    ],
    whyTitle: "Why garages choose Jedro+",
    whyLead: "Time matters in a garage. Unnecessary calls and uneven schedules affect your business. Jedro+ handles booking, reminders and collection notifications so your team can focus on vehicles.",
    whyList: [
      { b: "Fewer calls", rest: " — bookings and notifications run automatically." },
      { b: "An even workload", rest: " — seasonal reminders ease booking peaks." },
      { b: "More loyal clients", rest: " — timely service reminders bring them back." },
      { b: "Vehicle overview", rest: " — each vehicle’s service history in one place." },
    ],
    faq: [
      {
        q: "Does Jedro+ send seasonal servicing and tyre-change reminders?",
        a: "Yes. The system automatically sends reminders when a service or tyre change is due, at the right time for each client.",
      },
      {
        q: "How do clients know their vehicle is ready?",
        a: "Jedro+ notifies clients automatically when their vehicle is ready for collection. Fewer calls and happier clients.",
      },
      {
        q: "Can clients book appointments themselves?",
        a: "Yes. Clients choose available slots online, giving you an organised daily schedule.",
      },
    ],
  },
  coaching: {
    title: "Consulting, coaching & therapy",
    heroTag: "PHOTO — consulting or coaching room",
    mediaTag: "PHOTO — consultation or therapy session",
    heroSub:
      "Discreet, reliable communication so you can focus on your clients.",
    lead: "Your work relies on trust and reliability. Jedro+ sends discreet reminders, manages recurring appointments and helps track client progress, leaving you free to focus on the conversation.",
    pains: [
      "Trust is central to coaching, consulting and therapy. A message revealing too much on a screen can make clients uncomfortable. Forgotten and cancelled sessions can interrupt the progress you are making together.",
      "Regular sessions need coordination, records and tracking. Doing it manually takes energy away from the conversation. Jedro+ handles discreet reminders and organised appointments so you can focus on clients.",
    ],
    list: [
      { b: "Discreet reminders", rest: " — without revealing session content" },
      { b: "Recurring appointments", rest: " — weekly or monthly sessions" },
      { b: "Progress tracking", rest: " — notes and visit history" },
    ],
    useCasesHead: "Where Jedro+ makes the difference",
    useCases: [
      { title: "Sensitive communication", text: "Reminders are discreet and do not disclose session content. Clients receive only what they need to know." },
      { title: "Regular sessions", text: "Set up weekly or monthly sessions once, and the system sends a reminder for each." },
      { title: "Interrupted progress", text: "Timely reminders reduce cancellations and forgotten sessions that could disrupt your work together." },
      { title: "New clients", text: "Online booking accepts first appointments without email coordination." },
    ],
    msgHead: "A reminder from your practice",
    messages: [
      { dir: "out", text: "Hello, our session is tomorrow at 10:00. I look forward to speaking with you. Message me if you need to reschedule. 🙂" },
      { dir: "out", text: "Hello! Before our next session, reflect on how your week went in relation to the goals we discussed. See you on Wednesday." },
      { dir: "in", text: "Thank you, I’m looking forward to it. I’ll be there at the agreed time." },
    ],
    cards: [
      { title: "Private notes", text: "Securely stored notes for every client." },
      { title: "Regular appointments", text: "Recurring sessions with one click." },
      { title: "Online booking", text: "New clients book themselves." },
    ],
    whyTitle: "Why coaches and therapists choose Jedro+",
    whyLead: "Your work needs trust, discretion and a reliable session routine. Jedro+ sends reminders without revealing session content, manages recurring bookings and stores notes securely, keeping your attention on the client.",
    whyList: [
      { b: "Discreet", rest: " — reminders without revealing session content." },
      { b: "A regular routine", rest: " — recurring appointments with fewer cancellations." },
      { b: "Secure notes", rest: " — client history and notes stored safely." },
      { b: "Less organisation", rest: " — automated booking and reminders." },
    ],
    faq: [
      {
        q: "Are reminders discreet and free of sensitive session content?",
        a: "Yes. Jedro+ sends discreet reminders without revealing session content, preserving confidentiality and professionalism.",
      },
      {
        q: "Can I manage recurring appointments?",
        a: "Yes. Set weekly or monthly sessions as recurring appointments with one click.",
      },
      {
        q: "How are client notes stored?",
        a: "Private client notes are stored securely in one place with restricted access.",
      },
    ],
  },
  "business-services": {
    title: "IT, business services & agencies",
    heroTag: "PHOTO — office / agency",
    mediaTag: "PHOTO — meeting or agency work",
    heroSub:
      "Meetings and client onboarding run smoothly so you can focus on projects.",
    lead: "Jedro+ handles meeting bookings, client onboarding and automated communication, saving manual scheduling by email. More time for work, less admin.",
    pains: [
      "Scheduling can take over agency work: multiple emails for one meeting, changes and overlaps. Coordination takes time away from client projects and becomes harder as teams grow.",
      "First impressions matter too. New clients expect an organised process. Manually sending instructions and confirmations can be slow and inconsistent. Jedro+ automates bookings, confirmations and onboarding steps to keep the experience consistent.",
    ],
    list: [
      { b: "Meeting bookings", rest: " — clients choose their own time" },
      { b: "Client onboarding", rest: " — automated steps and notifications" },
      { b: "Less manual work", rest: " — communication runs automatically" },
    ],
    useCasesHead: "Where Jedro+ helps most",
    useCases: [
      { title: "Coordinating meetings", text: "Clients choose an available time from your calendar through a link, saving back-and-forth emails." },
      { title: "Welcoming new clients", text: "After signing, initial steps and notifications run automatically for a professional, organised start." },
      { title: "Forgotten meetings", text: "Appointment reminders reduce cancellations and empty slots in a busy schedule." },
      { title: "Scattered contacts", text: "All contacts and working history in one place, accessible to the whole team." },
    ],
    msgHead: "A message from your agency",
    messages: [
      { dir: "out", text: "Hello Ms Zupan. Your video meeting is confirmed for tomorrow at 11:00. The link is below. Speak soon!" },
      { dir: "out", text: "Hello and welcome! We’ve prepared a short guide for your first step to help you get started smoothly. We’re here for questions. 🙌" },
      { dir: "in", text: "Thank you, everything is clear. See you at the meeting." },
    ],
    cards: [
      { title: "Meeting calendar", text: "A booking link for available times." },
      { title: "Automated messages", text: "Confirmations and reminders sent automatically." },
      { title: "Client database", text: "All contacts and history in one place." },
    ],
    whyTitle: "Why agencies choose Jedro+",
    whyLead: "Every hour spent coordinating affects profitability. Jedro+ handles bookings, confirmations and onboarding so your team can focus on the work clients hired you for.",
    whyList: [
      { b: "Less coordination", rest: " — clients choose available times themselves." },
      { b: "Professional onboarding", rest: " — consistent, automated first steps." },
      { b: "Fewer cancellations", rest: " — meeting reminders for busy schedules." },
      { b: "Organised records", rest: " — contacts and history accessible to the whole team." },
    ],
    faq: [
      {
        q: "Can clients book meetings themselves?",
        a: "Yes. Clients choose an available time through a booking link without manual email coordination.",
      },
      {
        q: "Does Jedro+ automate client onboarding?",
        a: "Yes. The system manages automated steps and notifications for new clients, helping keep everything on track.",
      },
      {
        q: "Are confirmations and reminders automatic?",
        a: "Yes. Meeting confirmations and reminders go out automatically, with all contacts and history in one place.",
      },
    ],
  },
  "other-services": {
    title: "Other service businesses",
    heroTag: "PHOTO — service business",
    mediaTag: "PHOTO — your business",
    heroSub:
      "If you work with appointments and clients, Jedro+ works for you, set up around your needs.",
    lead: "Whatever your industry, Jedro+ handles appointments, reminders, online booking and communication. Tell us how you work and we’ll tailor the setup to your business.",
    pains: [
      "Every service business is different, but challenges often overlap: forgotten or clashing appointments, clients who stop returning and communication that takes hours each week. If you work with appointments and people, these may sound familiar.",
      "Jedro+ adapts to your industry and workflow. Tell us how you work, and we configure services, schedules and messages to support you from day one.",
    ],
    list: [
      { b: "Flexible", rest: " — setup tailored to your business" },
      { b: "Everything in one place", rest: " — appointments, clients, reminders and booking" },
      { b: "Help getting started", rest: " — we help you launch" },
    ],
    useCasesHead: "How Jedro+ helps in any industry",
    useCases: [
      { title: "Forgotten appointments", text: "Automated reminders reduce cancellations wherever appointment timing matters." },
      { title: "Clients who do not return", text: "The system sends an invitation at the right time to keep in touch and encourage another visit." },
      { title: "24/7 booking", text: "Clients book through a link even when you cannot answer the phone." },
      { title: "Tailored setup", text: "We configure services and message tone to fit your business." },
    ],
    msgHead: "A reminder from your business",
    messages: [
      { dir: "out", text: "Hello! A reminder about your appointment tomorrow at 13:00. Let us know if anything changes. See you then! 🙂" },
      { dir: "out", text: "Hello! We haven’t seen you for a while. We’d be happy to arrange another appointment at a time that suits you. Get in touch." },
      { dir: "in", text: "Thanks for the reminder. I’ll book Friday." },
    ],
    cards: [
      { title: "A flexible schedule", text: "Appointments and services that fit your workflow." },
      { title: "Online booking", text: "Clients book themselves, 24/7." },
      { title: "Reminders", text: "Automatic notifications before appointments." },
    ],
    whyTitle: "Why service businesses choose Jedro+",
    whyLead: "Whatever your industry, Jedro+ helps with bookings, reminders and repeat visits. We tailor the setup to your business and help you get started quickly.",
    whyList: [
      { b: "For every industry", rest: " — setup tailored to your workflow." },
      { b: "Everything in one place", rest: " — appointments, clients, reminders and booking." },
      { b: "Fewer cancellations", rest: " — timely reminders in every industry." },
      { b: "Help getting started", rest: " — help getting started and configuring your system." },
    ],
    faq: [
      {
        q: "Does Jedro+ work for my industry?",
        a: "Yes. If you work with appointments and clients, Jedro+ works for you, with a setup tailored to your business.",
      },
      {
        q: "Can you adapt the system to my workflow?",
        a: "Yes. Appointments and services follow your way of working, and we tailor the setup accordingly.",
      },
      {
        q: "Will I get help getting started?",
        a: "Yes. We help import clients and configure key features so you can get running quickly.",
      },
    ],
  },
};

export const panogeSlugs = Object.keys(panoge);
