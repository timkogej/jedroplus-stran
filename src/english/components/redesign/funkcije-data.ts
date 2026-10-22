// Generated from Slovenian source and src/locales/en.json.
// Content for each /funkcije/[slug] subpage. Mirrors the structure of
// panoge-data.ts: a shared template renders these fields, the CTA band is
// identical across pages. Each entry targets one SEO keyword.

export type FunkcijaListItem = { b: string; rest: string };
export type FunkcijaCard = { title: string; text: string };
export type FunkcijaFaq = { q: string; a: string };

export type Funkcija = {
  title: string; // h1 — vsebuje ciljni keyword
  metaTitle: string; // <title>
  metaDescription: string; // 140–160 znakov
  eyebrow: string; // hero eyebrow
  heroTag: string; // hero placeholder label
  mediaTag: string; // split media placeholder label
  heroSub: string;
  lead: string;
  body: string[]; // dodatni odstavki vsebine (pod prednostmi)
  list: FunkcijaListItem[];
  cards: FunkcijaCard[];
  faq: FunkcijaFaq[];
};

export const funkcije: Record<string, Funkcija> = {
  "sms-reminders": {
    title: "SMS reminders for clients",
    metaTitle: "SMS reminders for clients | Jedro+",
    metaDescription:
      "Automated SMS appointment reminders reduce cancellations and no-shows. Jedro+ sends messages at the right time, in your voice, without manual work.",
    eyebrow: "Feature",
    heroTag: "PHOTO — phone with an appointment SMS reminder",
    mediaTag: "PHOTO — client receiving an SMS reminder",
    heroSub:
      "Every client gets a timely reminder: fewer forgotten appointments, a fuller schedule and no manual typing.",
    lead: "An SMS reminder tells a client when their appointment takes place and which service they booked. Jedro+ connects sending to the calendar and client records, so you do not write every message manually. Check the contact, sending time and wording with a test appointment before starting.",
    body: [
      "Choose when reminders go out, such as 24 hours and then 2 hours before the appointment. Each message includes the client’s name, date, time and service, plus optional preparation instructions. Clients know exactly when and where to arrive, helping avoid empty slots and last-minute cancellations.",
      "Reminders connect to your calendar and client database, avoiding duplicate data entry. A new online or manual booking automatically queues its reminder. If the client reschedules or cancels, the reminder updates or stops. SMS also works for urgent changes: notify all clients on a particular day with one click if illness affects your schedule.",
      "Use SMS for thank-you messages, invitations to rebook and reaching inactive clients too. Choose SMS or email to suit the message and client. Everything stays in one place, linked to each client’s history.",
    ],
    list: [
      { b: "Fewer no-shows", rest: " — timely reminders reduce last-minute cancellations" },
      { b: "High open rates", rest: " — clients read SMS much more often than email" },
      { b: "Personalised messages", rest: " — name, appointment and service inserted automatically" },
      { b: "Less manual work", rest: " — reminders go out automatically from your calendar" },
    ],
    cards: [
      { title: "Scheduled reminders", text: "Choose when to send, such as the day before and 2 hours before the appointment." },
      { title: "Connected to your calendar", text: "A new appointment automatically queues a reminder. A cancellation stops it." },
      { title: "Group notifications", text: "Notify all clients on a selected day about schedule changes with one click." },
    ],
    faq: [
      {
        q: "When is the SMS reminder sent?",
        a: "You choose the timing. A common setup is 24 hours before the appointment, with a short reminder 2 hours before. The system sends them automatically based on your calendar.",
      },
      {
        q: "Are SMS reminders personalised?",
        a: "Yes. Each message includes the client’s name, appointment date, time and service. You can add preparation instructions or other details so it reads like a personally written message.",
      },
      {
        q: "What happens if a client reschedules or cancels?",
        a: "The reminder automatically updates or stops. Because reminders connect to your calendar, clients do not get reminders for appointments that have already been cancelled.",
      },
      {
        q: "Can SMS and email reminders work together?",
        a: "Yes. Choose the channel to suit the message and client: SMS for urgent reminders, email for longer information. Everything stays linked to each client’s history in one database.",
      },
    ],
  },

  "online-booking": {
    title: "Online booking, 24/7",
    metaTitle: "Online appointment booking | Jedro+",
    metaDescription:
      "Online booking that works for you: clients book 24/7 through a shareable link, filling your schedule without calls or manual coordination.",
    eyebrow: "Feature",
    heroTag: "PHOTO — client booking online",
    mediaTag: "PHOTO — booking page on a phone and computer",
    heroSub:
      "Clients book when it suits them, day or night. You focus on your work.",
    lead: "Phone calls during a service interrupt your work or go unanswered. Clients who cannot book may look elsewhere. Online booking lets clients see available slots and book through a shared link anytime, even when you are closed or busy with another client.",
    body: [
      "Your booking page uses your colours and logo and shows only the services, team members and times you select. Clients choose a service, see available slots based on your calendar and service duration, and confirm in a few steps. Everything is optimised for mobile booking.",
      "Every booking appears in your calendar automatically, without duplicate entry or overlapping appointments. Availability updates in real time, so booked slots are no longer selectable. Each new booking triggers a confirmation and an appointment reminder to help reduce cancellations.",
      "Online booking also builds your client database. The first booking creates a profile with basic information, and visit history grows with each return. Every booking helps organise your schedule and records without phone calls or manual messaging.",
    ],
    list: [
      { b: "24/7 bookings", rest: " — clients can book outside opening hours" },
      { b: "Fewer calls and messages", rest: " — booking runs automatically, without waiting for your reply" },
      { b: "In your colours", rest: " — a branded booking page with no coding" },
      { b: "In sync with your calendar", rest: " — live availability with no overlaps" },
    ],
    cards: [
      { title: "Shareable link", text: "Add your link to Instagram, your Google profile or your website for one-click booking." },
      { title: "Mobile optimised", text: "Clients book from their phones in seconds, wherever they are." },
      { title: "Automatic confirmation", text: "Clients receive a confirmation immediately after booking, followed by a reminder." },
    ],
    faq: [
      {
        q: "Do I need my own website for online booking?",
        a: "No. Jedro+ creates a standalone booking page with your own link. Share it on social media, your Google profile or by email. If you have a website, simply link to it.",
      },
      {
        q: "How are overlapping appointments prevented?",
        a: "Availability is shown in real time based on your calendar and service durations. Once booked, a slot is immediately unavailable to others, preventing double bookings.",
      },
      {
        q: "Can I choose which services are bookable online?",
        a: "Yes. You decide which services, team members and slots clients can see. Keep some services for manual booking and offer others online.",
      },
      {
        q: "What happens after a client books?",
        a: "The booking enters your calendar automatically, the client gets a confirmation and later a reminder. Their client profile is also created or updated, without manual work.",
      },
    ],
  },

  "client-crm": {
    title: "CRM for service businesses",
    metaTitle: "Client CRM for service businesses | Jedro+",
    metaDescription:
      "CRM for service businesses: client contacts, visit history, notes and preferences in one place. Better relationships, more repeat visits and organised information.",
    eyebrow: "Feature",
    heroTag: "PHOTO — client database overview",
    mediaTag: "PHOTO — client card with visit history",
    heroSub:
      "Every client, visit and note in one place, so you know who is in front of you and when to invite them back.",
    lead: "Client information scattered across notebooks, phones and team members’ memories eventually costs revenue. A CRM combines contacts, visit history, completed services, notes and preferences. See who each client is, what they last booked and when to invite them back.",
    body: [
      "Client profiles build themselves. An online or manual booking creates a card that grows with every visit, avoiding duplicate entries and copying. View service history, the last visit, notes such as allergies, preferences or products used, and past messages at a glance.",
      "Connected to your calendar and communication, CRM data becomes a growth tool. Filter clients, such as those who have not visited recently, and invite them back in a few clicks. Personalised messages use their name, last service and other details to make each invitation feel individual.",
      "An organised database preserves knowledge as your team changes or grows. Information stays in the system when someone leaves. Everyone sees the same up-to-date records, reducing mistakes and duplicate work while making clients feel recognised.",
    ],
    list: [
      { b: "Everything in one place", rest: " — each client’s contacts, history, notes and preferences" },
      { b: "Profiles build automatically", rest: " — every appointment updates the card without manual work" },
      { b: "More repeat visits", rest: " — filter inactive clients and invite them back" },
      { b: "Knowledge stays in the system", rest: " — information stays when staff leave" },
    ],
    cards: [
      { title: "Client card", text: "Visit history, completed services and notes in one view." },
      { title: "Smart filters", text: "Find inactive or top clients and send targeted messages." },
      { title: "Connected to communication", text: "Messages use profile information automatically, making every greeting personal." },
    ],
    faq: [
      {
        q: "Do I have to enter clients manually?",
        a: "Not necessarily. Profiles are created automatically when clients book online or when an appointment is entered. You can import existing clients, and new clients are added with each booking.",
      },
      {
        q: "What client information is stored?",
        a: "Contact details, visit and service history, notes such as preferences, allergies and products used, plus a history of messages sent, all on one client card.",
      },
      {
        q: "Can I filter clients and send targeted messages?",
        a: "Yes. Filter clients, such as those who have not visited for a while, and invite them back in a few clicks with personalised messages that use their details automatically.",
      },
      {
        q: "What happens to the data if my staff change?",
        a: "Information stays in the system. The whole team sees the same current client records, preserving knowledge when your team changes or grows.",
      },
    ],
  },

  "ai-communication": {
    title: "AI personalised client messages",
    metaTitle: "AI personalised client messages | Jedro+",
    metaDescription:
      "Jedro+ uses AI to write reminders and follow-ups in your voice, using the client’s name and service. Notify everyone with one click and build stronger relationships.",
    eyebrow: "Feature",
    heroTag: "PHOTO — phone with a personalised client message",
    mediaTag: "PHOTO — AI message examples in a chat window",
    heroSub:
      "AI writes as you would, using the name, appointment and service. Notify everyone with one click.",
    lead: "Clients often ignore generic, robotic messages. Jedro+ creates personalised reminders, follow-ups and instructions in your voice, with the client’s name, appointment date and specific service. Every message feels intended for that person.",
    body: [
      "AI uses client and appointment details from your database to write a message for the moment: a polite reminder, aftercare instructions or a warm invitation to rebook. Set a relaxed, friendly or professional tone to match your brand. You stay in control and can review and edit messages before sending.",
      "Notify a day’s clients or a selected group with one click. AI keeps each message personal, adapting the name, service and context even when sending dozens at once. This saves time and avoids copying errors.",
      "Calendar and CRM connections keep messages accurate and timely: reminders before appointments, thank-you messages after visits and invitations when clients have been away. Choose SMS or email to suit the client and message, with everything recorded in their history.",
    ],
    list: [
      { b: "Messages in your voice", rest: " — AI writes naturally, as you would" },
      { b: "Automatic personalisation", rest: " — name, appointment and service for each client" },
      { b: "One click to notify everyone", rest: " — dozens of personal messages at once" },
      { b: "Always on time", rest: " — reminders, thank-you notes and invitations at the right moment" },
    ],
    cards: [
      { title: "AI in your style", text: "Set your tone and brand so messages sound authentic and personal." },
      { title: "You’re in control", text: "Review and edit each message before sending." },
      { title: "Connected to your data", text: "Messages automatically use the name, appointment and service from client records." },
    ],
    faq: [
      {
        q: "Do the messages sound robotic?",
        a: "No. AI follows the tone and style you set, from relaxed to professional, using the client’s name, appointment and service. Messages read as though you wrote them personally.",
      },
      {
        q: "Do I control what gets sent?",
        a: "Yes. AI drafts the message, and you can review and edit it before sending. If you choose, nothing is sent without your approval.",
      },
      {
        q: "How does AI know what to write?",
        a: "It uses calendar and client data: name, appointment, completed or upcoming service and context, such as a reminder, thank-you or invitation. It then drafts a suitable personal message.",
      },
      {
        q: "Which channels are supported?",
        a: "SMS and email. Choose the channel to suit the message and client. All sent messages are recorded in each client’s history.",
      },
    ],
  },

  "promotions-discounts": {
    title: "Discounts, happy hours and promotions",
    metaTitle: "Discounts and happy hours for service businesses | Jedro+",
    metaDescription:
      "Manage discounts, happy hours and discounted add-on services directly in Jedro+. Fill quieter slots with offers set up in a few clicks.",
    eyebrow: "Feature",
    heroTag: "PHOTO — a promotional offer in the calendar",
    mediaTag: "PHOTO — discounts and happy hours overview",
    heroSub:
      "Fill quieter hours with offers you control: discounts on selected services, happy hours or an attractive extra service.",
    lead: "Every salon or studio has quieter hours. Fill them with targeted offers. Jedro+ keeps promotions in one place and connects them to the services already in your system.",
    body: [
      "Set a percentage or fixed discount, choose eligible services and define a validity period. Create a summer offer, a new-client discount or a promotion for one service without calculating prices manually.",
      "Happy hours apply discounts on selected weekdays and times. They help fill less popular slots, such as midweek mornings, and can apply to all or selected services.",
      "Add-on services let you offer clients an extra service at a reduced price when they book. Original price, discount and final price are clearly displayed.",
    ],
    list: [
      { b: "Discounts in % or €", rest: " — for selected services and dates" },
      { b: "Happy hours", rest: " — discounts on selected days and times" },
      { b: "Discounted add-on services", rest: " — more value per appointment" },
      { b: "Everything in one place", rest: " — every promotion connects to your services" },
    ],
    cards: [
      { title: "Discounts", text: "A percentage or fixed amount, selected services and start and end dates." },
      { title: "Happy hours", text: "Weekdays, start and end times, and discounts for quieter slots." },
      { title: "Add-on services", text: "An extra service alongside the main appointment, with original and final prices shown." },
    ],
    faq: [
      {
        q: "Can a discount apply only to selected services?",
        a: "Yes. Choose eligible services for each discount. Happy hours can also apply to all services at once.",
      },
      {
        q: "Can I limit a discount to a period?",
        a: "Yes. Set a start and end date for discounts. Happy hours apply on selected weekdays within a chosen time window.",
      },
      {
        q: "What are add-on services?",
        a: "These are extra services offered alongside the main service at a reduced price. The overview shows the original price, discount and final price.",
      },
      {
        q: "Can I set a fixed-amount discount?",
        a: "Yes. Choose a percentage discount or a fixed amount in euros.",
      },
    ],
  },

  "resources": {
    title: "Resources: rooms, treatment spaces and equipment",
    metaTitle: "Resource management: rooms, treatment spaces and equipment | Jedro+",
    metaDescription:
      "Manage the resources your services need, including massage tables, treatment spaces and equipment. Jedro+ prevents double bookings and shows availability.",
    eyebrow: "Feature",
    heroTag: "PHOTO — treatment spaces and equipment in a salon",
    mediaTag: "PHOTO — resource and availability overview",
    heroSub:
      "An appointment depends on more than a person: a table, room or device may be needed too. Jedro+ tracks those as well.",
    lead: "Many services need a massage table, treatment space, laser or room alongside a team member. Without resource tracking, double bookings can happen. Jedro+ connects physical resources to the services that use them.",
    body: [
      "Each resource has a name, number of units and capacity per unit. See total capacity, active resources and connected services at a glance.",
      "Set a resource as always available or give it a schedule. Deactivate resources when they are not needed without deleting them.",
      "Once resources connect to services, the system knows what must be free for an appointment. Avoid situations where a team member is available but the equipment is occupied.",
    ],
    list: [
      { b: "Fewer double bookings", rest: " — bookings account for tables, rooms and equipment" },
      { b: "Units and capacity", rest: " — multiple units of a resource, with capacity per unit" },
      { b: "Resource schedule", rest: " — always available or on a set schedule" },
      { b: "Connected to services", rest: " — see which services use each resource" },
    ],
    cards: [
      { title: "Units and capacity", text: "Multiple units of the same resource, with capacity for each unit." },
      { title: "Active / inactive", text: "Temporarily deactivate a resource without losing its record." },
      { title: "At a glance", text: "Total resources, active resources, capacity and connected services." },
    ],
    faq: [
      {
        q: "What is a resource in Jedro+?",
        a: "A physical item needed for a service, such as a massage table, treatment space, room or equipment. It is separate from the staff member providing the service.",
      },
      {
        q: "Can I have multiple units of one resource?",
        a: "Yes. Set the unit count and capacity per unit; the system displays total capacity.",
      },
      {
        q: "Can I give a resource a schedule?",
        a: "Yes. A resource can be always available or have its own schedule.",
      },
      {
        q: "How do I connect a resource to a service?",
        a: "Link it to the services that need it. The resource card shows all connected services.",
      },
    ],
  },

  "appointment-requests": {
    title: "Appointment requests: you confirm",
    metaTitle: "Appointment requests and manual booking approval | Jedro+",
    metaDescription:
      "Clients request a preferred period; you confirm the exact time, service and person. Jedro+ supports businesses where bookings need your approval.",
    eyebrow: "Feature",
    heroTag: "PHOTO — appointment request list",
    mediaTag: "PHOTO — confirming an appointment request",
    heroSub:
      "Some bookings need a review. Clients send a request, and you confirm the right appointment.",
    lead: "Some services need your approval because duration varies, a team member must confirm, or schedules are complex. Clients send their preferred time window, and you choose the service, person and exact appointment in a few steps.",
    body: [
      "Requests stay in one place, with filters for pending, confirmed and declined. Each request shows when it was sent and the client’s preferred period.",
      "Confirm in three steps: choose the service, person and a free slot within the requested period that works for both of you. The appointment appears in your calendar.",
      "If you cannot schedule the appointment, decline the request and provide a reason so the client understands why.",
    ],
    list: [
      { b: "Requests in one place", rest: " — filter by status: pending, confirmed or declined" },
      { b: "Confirm in three steps", rest: " — service, person, date and time" },
      { b: "Available slots only", rest: " — times within the client’s requested period" },
      { b: "Decline with a reason", rest: " — clients understand why a booking is unavailable" },
    ],
    cards: [
      { title: "Preferred period", text: "The client suggests when they are available; you choose the exact time." },
      { title: "Available slots", text: "The system finds availability for the selected service and team member." },
      { title: "Trackable status", text: "Every request is pending, confirmed or declined." },
    ],
    faq: [
      {
        q: "When are appointment requests useful?",
        a: "When you need to approve bookings: if duration depends on the case, a team member must confirm, or the schedule is less predictable.",
      },
      {
        q: "What does the client see if I decline?",
        a: "You enter a reason, such as no available appointments in the requested period, which is recorded with the request.",
      },
      {
        q: "How do I confirm a request?",
        a: "Select the service, person and an available slot within the requested period. The confirmed appointment goes into your calendar.",
      },
      {
        q: "Can I filter requests?",
        a: "Yes. View all requests or filter by pending, confirmed and declined.",
      },
    ],
  },

  "booking-designs-qr-codes": {
    title: "Booking designs, links and QR codes",
    metaTitle: "Booking pages, designs and QR codes | Jedro+",
    metaDescription:
      "Choose your online booking design, use different links for different channels and print a QR code for your reception desk. All in Jedro+.",
    eyebrow: "Feature",
    heroTag: "PHOTO — booking QR code at reception",
    mediaTag: "PHOTO — choosing a booking page design",
    heroSub:
      "A design that fits your brand, a link for each channel and a QR code to print for your reception desk.",
    lead: "Online booking is often a client’s first contact with your business. Choose your page design in Jedro+, use separate links for Instagram, your website and email signature, and print a QR code for reception, your door or window.",
    body: [
      "Standard designs include Classic, Modern and Elegant. Jedro Pro adds Seasonal, which changes with seasons and holidays, Magazine and Casino. New designs are added regularly.",
      "Use a different booking design for each channel: Instagram, your website or email signature. Each link takes clients to your booking page with a different look. One link is your main link, also used in messages.",
      "Print a booking QR poster in A6 format (105 × 148 mm) with a clean, branded, elegant or dark design. The code points to your main link, so it stays valid when the page design changes. A separate client registration QR code adds new clients without booking an appointment.",
    ],
    list: [
      { b: "6 designs", rest: " — Classic, Modern and Elegant, plus Seasonal, Magazine and Casino with Pro" },
      { b: "A link for every channel", rest: " — Instagram, website and email, each with its own look" },
      { b: "A6 QR poster", rest: " — for reception, doors or windows, in four styles" },
      { b: "Client registration QR", rest: " — clients register themselves without booking" },
    ],
    cards: [
      { title: "Design choices", text: "From simple to glamorous, matched to your brand." },
      { title: "Multiple links", text: "The same page, a different look for each channel." },
      { title: "Print-ready QR", text: "An A6 poster in your chosen style, always pointing to your main link." },
    ],
    faq: [
      {
        q: "Which designs are available?",
        a: "Classic, Modern and Elegant as standard. Jedro Pro also includes Seasonal, Magazine and Casino.",
      },
      {
        q: "Can I use multiple booking links?",
        a: "Yes. Use each link on a different channel with a different design. One link is your main link, also used in messages.",
      },
      {
        q: "What happens to printed QR codes when I change the design?",
        a: "The code points to your main booking link, so it stays valid after a design change.",
      },
      {
        q: "Can clients use a QR code just to register?",
        a: "Yes. A separate registration QR code lets clients enter their details and join your database without booking an appointment.",
      },
    ],
  },
};

export const funkcijeSlugs = Object.keys(funkcije);
