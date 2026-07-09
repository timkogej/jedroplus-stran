// Formats an ISO date ("2026-07-01") into Slovenian long form ("1. julij 2026").
const MONTHS_SI = [
  "januar",
  "februar",
  "marec",
  "april",
  "maj",
  "junij",
  "julij",
  "avgust",
  "september",
  "oktober",
  "november",
  "december",
];

export function formatBlogDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return `${day}. ${MONTHS_SI[month - 1]} ${year}`;
}
