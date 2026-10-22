// Generated from Slovenian source and src/locales/en.json.
// Formats an ISO date ("2026-07-01") into Slovenian long form ("1. julij 2026").
const MONTHS_SI = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatBlogDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return `${day} ${MONTHS_SI[month - 1]} ${year}`;
}
