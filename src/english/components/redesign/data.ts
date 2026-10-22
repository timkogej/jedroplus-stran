// Generated from Slovenian source and src/locales/en.json.
// Industries shown in the home "Panoge" flow panel (marquee cards + modal)
export type Industry = {
  t: string; // title (may contain &amp; — rendered as HTML in original)
  slug: string;
  img: string; // image slot label
  d: string; // modal description
  tg: string[]; // tags
  photo?: string; // real photo in /images/industries/<photo>.webp (else striped placeholder)
  bg?: string; // square panoge image in /images/industries/<bg>
};

export const industries: Industry[] = [
  {
    t: "Beauty, hair & barber salons",
    slug: "hair-salons",
    img: "salon / barber",
    d: "Reminders reduce no-shows, fill your schedule and keep clients coming back. Personalised messages before and after appointments create an experience clients remember.",
    tg: ["Reminders", "Online booking", "Loyalty"],
    bg: "jedro-stran-panoge-1.webp",
    photo: "jedro-bar",
  },
  {
    t: "Dental, aesthetic & medical clinics",
    slug: "clinics",
    img: "clinic / practice",
    d: "Instructions before and after appointments go out automatically, patient records stay organised and cancellations decrease. More time for patients, less admin.",
    tg: ["Instructions", "Patient records", "Fewer cancellations"],
    bg: "jedro-stran-panoge-5.webp",
    photo: "jedro-zob-2",
  },
  {
    t: "Massage & wellness studios, physiotherapy",
    slug: "wellness",
    img: "wellness / massage",
    d: "Appointment series, gentle reminders and invitations to return run in the background, so you can focus on your clients.",
    tg: ["Appointment series", "Reminders", "Return visits"],
    bg: "jedro-stran-panoge-3.webp",
    photo: "jedro-mas",
  },
  {
    t: "Gyms, personal trainers, yoga & Pilates",
    slug: "fitness",
    img: "fitnes / studio",
    d: "Group sessions, membership records and available-place notifications. Let your schedule fill while you coach.",
    tg: ["Groups", "Memberships", "Occupancy"],
    bg: "jedro-stran-panoge-2.webp",
    photo: "jedro-fit",
  },
  {
    t: "Garages, tyre centres, cleaning services",
    slug: "garages",
    img: "garage / workshop",
    d: "Regular service reminders and automatic notifications when a vehicle is ready for collection. Fewer unnecessary calls and less waiting.",
    tg: ["Service reminders", "Notifications", "Collection"],
    bg: "jedro-stran-panoge-4.webp",
    photo: "jedro-meh",
  },
  {
    t: "Consulting, coaching & therapy",
    slug: "coaching",
    img: "consulting / office",
    d: "Discreet reminders, recurring appointments and client progress tracking build relationships based on trust.",
    tg: ["Discretion", "Recurring appointments", "Progress"],
    bg: "jedro-stran-panoge-7.webp",
  },
  {
    t: "IT & business services, agencies",
    slug: "business-services",
    img: "office / team",
    d: "Meetings, client onboarding and automated communication with less manual work. Everything connected in one place.",
    tg: ["Meetings", "Onboarding", "Automation"],
    bg: "jedro-stran-panoge-6.webp",
  },
  {
    t: "Other service businesses",
    slug: "other-services",
    img: "service / client",
    d: "Whatever your business does with appointments and clients, Jedro+ adapts to the way you work.",
    tg: ["Flexible", "Appointments", "Clients"],
    bg: "jedro-stran-panoge-8.webp",
  },
];
