// Generated from Slovenian source and src/locales/de.json.
// Formats an ISO date ("2026-07-01") into Slovenian long form ("1. julij 2026").
const MONTHS_SI = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

export function formatBlogDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return `${day}. ${MONTHS_SI[month - 1]} ${year}`;
}
