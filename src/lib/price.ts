// Plan prices are stored as display strings ("14,90 €"); these helpers turn them
// back into numbers for totals and structured data. The English build rewrites
// DECIMAL to "." (see scripts/generate-english.cjs).

const DECIMAL = ",";

export function parsePrice(value: string): number {
  return Number.parseFloat(value.replace(/[^\d,.-]/g, "").replace(",", "."));
}

/** 142.8 -> "142,80"; 36 -> "36". */
export function formatEuro(amount: number): string {
  const rounded = Math.round(amount * 100) / 100;
  if (Number.isInteger(rounded)) return String(rounded);
  return rounded.toFixed(2).replace(".", DECIMAL);
}
