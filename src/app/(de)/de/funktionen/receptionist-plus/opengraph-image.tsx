// Generated from Slovenian source and src/locales/de.json.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Receptionist+ — KI-Rezeptionistin in der Sprache deiner Kunden, verbunden mit deinem Jedro+-Kalender";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await readFile(join(process.cwd(), "src/app/fonts/NotoSans-Regular.ttf"));
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "65px 76px", background: "linear-gradient(135deg, #101420, #20243a 65%, #23434b)", color: "white", fontFamily: "Noto Sans" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: 30 }}>Jedro+</span><span style={{ padding: "12px 22px", borderRadius: 50, background: "#34574e", color: "#baf3dd", fontSize: 18 }}>NEU</span></div>
      <div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 27, color: "#bdb5ed", marginBottom: 20 }}>Receptionist+</span><span style={{ fontSize: 76, lineHeight: 1.08, letterSpacing: "-3px" }}>Du arbeitest.</span><span style={{ fontSize: 76, lineHeight: 1.08, letterSpacing: "-3px", color: "#c1bdff" }}>Deine KI-Rezeptionistin nimmt den Anruf entgegen.</span></div>
      <div style={{ display: "flex", fontSize: 22, color: "#b9c4d4" }}>Die Sprache deiner Kunden · Termine, Fragen und Erinnerungen</div>
    </div>, { ...size, fonts: [{ name: "Noto Sans", data: font, style: "normal", weight: 400 }] }
  );
}
